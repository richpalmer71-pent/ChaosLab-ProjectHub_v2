import { useState, useRef } from "react";
import JSZip from "jszip";
import { C, ff, hd, rad } from "./shared";
import ImageCropper from "./ImageCropper";

const bff = "'Athletics',Arial,Helvetica,sans-serif";

// Served from /public/logos — relative path works fine inside the app;
// exported HTML needs an absolute URL since it'll be opened outside
// this app (Ometria, a downloaded file, etc).
const LOGO_PATH = "/logos/speedo-logo-red.png";
const SITE_ORIGIN = "https://chaos-lab-project-hub-v2.vercel.app";
const LOGO_URL_ABSOLUTE = SITE_ORIGIN + LOGO_PATH;

const DEFAULT_HERO_HEIGHT = 600;
const MIN_HERO_HEIGHT = 500;
const MAX_HERO_HEIGHT = 1000;

// ============================================================
// TEMPLATE REGISTRY
// One entry per template. Add new brands/layouts here as they're
// built — the picker and canvas both read off this list, nothing
// else needs to change.
// ============================================================
export const EMAIL_TEMPLATES = [
  { id: "speedo-qnd", brand: "Speedo", name: "QND Template", tiles: 6, live: true },
  { id: "vortexswim-promo", brand: "VortexSwim", name: "Promo", live: false },
  { id: "apextrail-qnd", brand: "Apex Trail", name: "QND Template", live: false },
];

const TILE_IDS = ["grid-1a", "grid-1b", "grid-2a", "grid-2b", "grid-3a", "grid-3b"];

// Convert any uploaded image file to a JPEG data URL, so whatever
// gets stored (and later exported) is a consistent, predictable format.
function fileToJpegDataUrl(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    img.onerror = reject;
    img.src = objectUrl;
  });
}

function dataUrlToBlob(dataUrl) {
  const [meta, b64] = dataUrl.split(",");
  const mime = meta.match(/data:(.*);base64/)[1];
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

function slotImgTag(src, forZip, slotId) {
  if (!src) return "";
  const url = forZip ? `images/${slotId}.jpg` : src;
  return `<img src="${url}" width="100%" style="display:block;width:100%;height:100%;object-fit:cover;" alt="">`;
}

function buildSpeedoQndHtml({ heading, subheading, cta, heroImage, gridImages, subjectLine, heroHeight }, forZip) {
  const tileTds = TILE_IDS.map(
    (id) => `
        <div style="position:relative;width:100%;padding-bottom:100%;background:#C9C9C9;">
          <div style="position:absolute;inset:0;">${slotImgTag(gridImages[id], forZip, id)}</div>
        </div>`
  ).join("");
  const heroH = heroHeight || DEFAULT_HERO_HEIGHT;

  return `<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${subjectLine || "Speedo QND Email"}</title>
</head>
<body style="margin:0;background:#e8e8e8;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="460" style="width:460px;background:#FFFFFF;border-collapse:collapse;margin:0 auto;">
<tbody>
<tr><td align="center" style="padding:28px 24px 26px;background:#FFFFFF;">
<img src="${LOGO_URL_ABSOLUTE}" width="150" alt="Speedo" style="display:block;width:150px;height:auto;">
</td></tr>
<tr><td style="padding:0;font-size:0;line-height:0;">
<div style="position:relative;width:460px;height:${heroH}px;background:#C4C4C4;">${slotImgTag(heroImage, forZip, "hero")}</div>
</td></tr>
<tr><td align="center" style="padding:44px 40px 46px;background:#FFFFFF;">
<h1 style="margin:0;font-weight:900;font-size:30px;line-height:1.05;letter-spacing:.5px;text-transform:uppercase;color:#0B1A1E;">${heading || ""}</h1>
<p style="margin:16px 0 0;font-size:15px;line-height:1.5;color:#0B1A1E;max-width:340px;margin-left:auto;margin-right:auto;">${subheading || ""}</p>
<div style="margin-top:26px;">
<a href="#" style="display:inline-block;font-weight:700;font-size:15px;color:#FFFFFF;background:#0B1A1E;border:1.5px solid #0B1A1E;border-radius:64px;padding:16px 34px;min-width:180px;box-sizing:border-box;text-align:center;text-decoration:none;">${cta || ""}</a>
</div>
</td></tr>
<tr><td style="padding:0;font-size:0;line-height:0;background:#FFFFFF;">
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2px;">${tileTds}</div>
</td></tr>
<tr><td align="center" style="padding:40px 32px 44px;background:#FFFFFF;border-top:1px solid #E0E0E0;">
<div style="display:flex;justify-content:center;align-items:center;gap:22px;flex-wrap:wrap;">
<a href="#" style="font-size:12px;font-weight:500;color:#0B1A1E;text-decoration:underline;">Update Preferences</a>
<a href="#" style="font-size:12px;font-weight:500;color:#0B1A1E;text-decoration:underline;">Privacy Policy</a>
<a href="#" style="font-size:12px;font-weight:500;color:#0B1A1E;text-decoration:underline;">Unsubscribe</a>
</div>
<p style="margin:26px 0 0;font-size:12px;line-height:1.6;color:#0B1A1E;">Speedo International Ltd.<br>8 Manchester Square, London, United Kingdom, W1U 3PH</p>
<p style="margin:24px 0 0;font-size:12px;line-height:1.6;color:#0B1A1E;">All rights reserved. All trademarks acknowledged. For full terms and conditions click <a href="#" style="color:#0B1A1E;text-decoration:underline;">here</a></p>
</td></tr>
</tbody>
</table>
</body></html>`;
}

// ============================================================
// COMPONENT
// ============================================================
export default function EmailBuilder({
  templateId,
  onTemplateChange,
  heading,
  subheading,
  cta,
  heroImage,
  onHeroImage,
  heroHeight,
  onHeroHeightChange,
  gridImages,
  onGridImagesChange,
  subjectLine,
}) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [cropSlot, setCropSlot] = useState(null); // { slotId, source } while the crop modal is open
  const fileInputRef = useRef(null);
  const activeSlotRef = useRef(null);
  const tpl = EMAIL_TEMPLATES.find((t) => t.id === templateId) || EMAIL_TEMPLATES[0];
  const gi = gridImages || {};
  const hh = Math.max(MIN_HERO_HEIGHT, Math.min(MAX_HERO_HEIGHT, heroHeight || DEFAULT_HERO_HEIGHT));

  const flash = (msg) => {
    setStatus(msg);
    setTimeout(() => setStatus((s) => (s === msg ? "" : s)), 2500);
  };

  const clampHeight = (v) => Math.max(MIN_HERO_HEIGHT, Math.min(MAX_HERO_HEIGHT, v));

  const dragStateRef = useRef(null);
  const startDrag = (e) => {
    e.preventDefault();
    dragStateRef.current = { startY: e.clientY, startHeight: hh };
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", endDrag);
  };
  const onDrag = (e) => {
    if (!dragStateRef.current) return;
    const delta = e.clientY - dragStateRef.current.startY;
    onHeroHeightChange(clampHeight(Math.round(dragStateRef.current.startHeight + delta)));
  };
  const endDrag = () => {
    dragStateRef.current = null;
    window.removeEventListener("mousemove", onDrag);
    window.removeEventListener("mouseup", endDrag);
  };

  // Crop/export dimensions per slot. Preview is what you see while
  // dragging/zooming; target is the actual pixel size baked into the
  // final JPEG (2x the display size, for crisp export).
  const getSlotDims = (slotId) => {
    if (slotId === "hero") {
      const targetW = 920;
      const targetH = hh * 2;
      let previewW = 300;
      let previewH = previewW * (hh / 460);
      if (previewH > 420) {
        previewH = 420;
        previewW = previewH * (460 / hh);
      }
      return { previewW, previewH, targetW, targetH };
    }
    return { previewW: 260, previewH: 260, targetW: 600, targetH: 600 };
  };

  const currentSlotSrc = (slotId) => (slotId === "hero" ? heroImage : gi[slotId]);

  // Empty slot → pick a file. Filled slot → jump straight into
  // reposition/crop on the image that's already there.
  const openPicker = (slotId) => {
    const existing = currentSlotSrc(slotId);
    if (existing) {
      setCropSlot({ slotId, source: existing });
    } else {
      triggerFilePicker(slotId);
    }
  };

  const triggerFilePicker = (slotId) => {
    activeSlotRef.current = slotId;
    fileInputRef.current?.click();
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const slotId = activeSlotRef.current;
    e.target.value = "";
    if (!file || !slotId) return;
    try {
      const dataUrl = await fileToJpegDataUrl(file);
      setCropSlot({ slotId, source: dataUrl });
    } catch {
      flash("Couldn't read that image — try another file.");
    }
  };

  const handleCropConfirm = (dataUrl) => {
    if (!cropSlot) return;
    if (cropSlot.slotId === "hero") onHeroImage(dataUrl);
    else onGridImagesChange({ ...gi, [cropSlot.slotId]: dataUrl });
    setCropSlot(null);
    flash("Image updated.");
  };

  const handleCropCancel = () => setCropSlot(null);
  const handleCropReplace = () => {
    const slotId = cropSlot?.slotId;
    setCropSlot(null);
    if (slotId) triggerFilePicker(slotId);
  };

  const exportData = { heading, subheading, cta, heroImage, gridImages: gi, subjectLine, heroHeight: hh };

  const downloadFile = (filename, content, type) => {
    const blob = content instanceof Blob ? content : new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleExportHtml = () => {
    if (tpl.id !== "speedo-qnd") return flash("This template isn't wired up yet.");
    downloadFile(`${tpl.id}-email.html`, buildSpeedoQndHtml(exportData, false), "text/html");
    flash("HTML exported.");
  };

  const handleExportZip = async () => {
    if (tpl.id !== "speedo-qnd") return flash("This template isn't wired up yet.");
    const slotIds = ["hero", ...TILE_IDS].filter((id) => (id === "hero" ? heroImage : gi[id]));
    if (slotIds.length === 0) return flash("Add at least one image first.");
    setBusy(true);
    try {
      const zip = new JSZip();
      const imgFolder = zip.folder("images");
      slotIds.forEach((id) => {
        const src = id === "hero" ? heroImage : gi[id];
        imgFolder.file(`${id}.jpg`, dataUrlToBlob(src));
      });
      zip.file("email.html", buildSpeedoQndHtml(exportData, true));
      const content = await zip.generateAsync({ type: "blob" });
      downloadFile(`${tpl.id}-email-package.zip`, content, "application/zip");
      flash("Package downloaded.");
    } finally {
      setBusy(false);
    }
  };

  const handleSendToOmetria = () => {
    // Stub — real send needs Ometria's API or a Zapier webhook, same
    // pattern as the Dropbox folder creation already wired up in App.js.
    flash("Stubbed — needs Ometria API/Zapier hook.");
  };

  return (
    <div style={{ width: 460, minWidth: 460 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 10, ...hd, color: C.g50, fontFamily: ff }}>EMAIL BUILDER</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <label style={{ fontSize: 9, ...hd, color: C.g50, fontFamily: ff }}>TEMPLATE</label>
          <select
            value={templateId}
            onChange={(e) => onTemplateChange(e.target.value)}
            style={{
              padding: "7px 10px",
              border: `1px solid ${C.g88}`,
              borderRadius: 8,
              fontSize: 11,
              fontWeight: 600,
              fontFamily: ff,
              background: C.bg,
              color: C.black,
              outline: "none",
              cursor: "pointer",
            }}
          >
            {Object.entries(
              EMAIL_TEMPLATES.reduce((acc, t) => {
                (acc[t.brand] = acc[t.brand] || []).push(t);
                return acc;
              }, {})
            ).map(([brand, tpls]) => (
              <optgroup key={brand} label={brand}>
                {tpls.map((t) => (
                  <option key={t.id} value={t.id} disabled={!t.live}>
                    {t.name}
                    {!t.live ? " (coming soon)" : ""}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {/* ---------- CANVAS ---------- */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8, marginBottom: 8 }}>
        <label style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: C.g50, fontFamily: ff }}>
          Hero height
        </label>
        <input
          type="number"
          value={hh}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            if (!isNaN(v)) onHeroHeightChange(clampHeight(v));
          }}
          min={MIN_HERO_HEIGHT}
          max={MAX_HERO_HEIGHT}
          style={{ width: 60, padding: "5px 8px", border: `1px solid ${C.g88}`, borderRadius: 6, fontSize: 11, fontFamily: ff, textAlign: "center", background: C.bg, color: C.black }}
        />
        <span style={{ fontSize: 9, color: C.g50, fontFamily: ff }}>px — or drag the handle on the hero</span>
      </div>
      <div style={{ width: 460, background: "#fff", boxShadow: "0 8px 40px rgba(0,0,0,.5)" }}>
        <div style={{ padding: "26px 24px 24px", textAlign: "center" }}>
          <img src={LOGO_PATH} alt="Speedo" width="150" style={{ display: "inline-block", width: 150, height: "auto" }} />
        </div>

        <div style={{ position: "relative", width: 460 }}>
          <ImageSlot
            src={heroImage}
            onClick={() => openPicker("hero")}
            style={{ width: 460, height: hh }}
            label={heroImage ? "Click to reposition or crop" : "Click to add hero image, or paste a link on the left"}
          />
          <div
            onMouseDown={startDrag}
            title="Drag to resize"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -4,
              height: 10,
              cursor: "ns-resize",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <div style={{ width: 44, height: 5, borderRadius: 3, background: C.black, opacity: 0.65, boxShadow: "0 1px 3px rgba(0,0,0,.4)" }} />
          </div>
        </div>

        <div style={{ padding: "36px 34px 38px", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: bff,
              fontWeight: 900,
              fontSize: 26,
              lineHeight: 1.08,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "#0B1A1E",
              minHeight: "1em",
              margin: 0,
            }}
          >
            {heading || "Heading"}
          </h1>
          <p
            style={{
              fontFamily: bff,
              marginTop: 14,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1.5,
              color: "#0B1A1E",
              maxWidth: 320,
              marginLeft: "auto",
              marginRight: "auto",
              minHeight: "1em",
            }}
          >
            {subheading || "Subheading"}
          </p>
          <div style={{ marginTop: 22 }}>
            <span
              style={{
                fontFamily: bff,
                display: "inline-block",
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                background: "#0B1A1E",
                border: "1.5px solid #0B1A1E",
                borderRadius: 64,
                padding: "14px 30px",
                minWidth: 160,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              {cta || "CTA"}
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
          {TILE_IDS.map((id) => (
            <ImageSlot key={id} src={gi[id]} onClick={() => openPicker(id)} tile label={gi[id] ? "Reposition" : "Add product"} />
          ))}
        </div>

        <div style={{ padding: "34px 28px 38px", textAlign: "center", borderTop: "1px solid #E0E0E0" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 18, flexWrap: "wrap", marginBottom: 22 }}>
            {["Update Preferences", "Privacy Policy", "Unsubscribe"].map((t) => (
              <span key={t} style={{ fontFamily: bff, fontSize: 11, fontWeight: 500, color: "#0B1A1E", textDecoration: "underline", textUnderlineOffset: 3 }}>
                {t}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: bff, fontSize: 11, lineHeight: 1.6, color: "#0B1A1E", margin: 0 }}>
            Speedo International Ltd.
            <br />
            8 Manchester Square, London, United Kingdom, W1U 3PH
          </p>
        </div>
      </div>

      <div style={{ fontSize: 10, color: C.g70, marginTop: 10, lineHeight: 1.5, fontFamily: ff }}>
        Product grid images live here only — click a tile to add one, or click again to reposition/crop it.
      </div>

      {/* ---------- EXPORT ---------- */}
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <ExportBtn label="Export HTML" onClick={handleExportHtml} kind="primary" />
        <ExportBtn label="Download .zip" onClick={handleExportZip} kind="secondary" disabled={busy} />
      </div>
      <div style={{ marginTop: 8 }}>
        <ExportBtn label="Send to Ometria" onClick={handleSendToOmetria} kind="ometria" full />
      </div>
      <div style={{ fontSize: 10, color: C.g50, textAlign: "center", marginTop: 8, minHeight: 14, fontFamily: ff }}>{status}</div>

      <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFile} />

      {cropSlot &&
        (() => {
          const dims = getSlotDims(cropSlot.slotId);
          return (
            <ImageCropper
              source={cropSlot.source}
              previewW={dims.previewW}
              previewH={dims.previewH}
              targetW={dims.targetW}
              targetH={dims.targetH}
              onConfirm={handleCropConfirm}
              onCancel={handleCropCancel}
              onReplace={handleCropReplace}
            />
          );
        })()}
    </div>
  );
}

function ImageSlot({ src, onClick, style, tile, label }) {
  const [hover, setHover] = useState(false);
  const outer = tile
    ? { position: "relative", width: "100%", paddingBottom: "100%", cursor: "pointer", background: "#C4C4C4", overflow: "hidden" }
    : { position: "relative", cursor: "pointer", background: "#C4C4C4", overflow: "hidden", ...style };
  const inner = tile ? { position: "absolute", inset: 0 } : { position: "absolute", inset: 0 };
  return (
    <div style={outer} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div style={inner}>
        {src && <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
        {(hover || !src) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              color: "#fff",
              background: !src ? "rgba(11,26,30,.55)" : "rgba(11,26,30,.45)",
              fontSize: tile ? 10 : 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textAlign: "center",
              padding: "0 12px",
            }}
          >
            <svg width={tile ? 14 : 20} height={tile ? 14 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

function ExportBtn({ label, onClick, kind, disabled, full }) {
  const bg = kind === "primary" ? C.black : kind === "ometria" ? C.green : C.card;
  const color = kind === "primary" ? C.card : kind === "ometria" ? "#08331f" : C.black;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        flex: full ? "1 1 100%" : 1,
        padding: "11px 10px",
        borderRadius: 10,
        border: kind === "secondary" ? `1px solid ${C.g88}` : "none",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        fontFamily: ff,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        background: bg,
        color,
      }}
    >
      {label}
    </button>
  );
}
