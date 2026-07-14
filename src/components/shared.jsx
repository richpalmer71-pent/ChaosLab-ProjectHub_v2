import { useState } from "react";

// V6 Dark Mode Design Tokens
export const C = {
  bg:"#0A0A0C", panel:"#121215", card:"#16161A", black:"#FFFFFF",
  red:"#FF6B6B", yellow:"#FFD93D", blue:"#00D4FF", green:"#39F5A0",
  g50:"#BBBBBB", g70:"#BBBBBB", g88:"#242428", g94:"#121215",
};
export const ff = "'Helvetica Neue',Helvetica,Arial,sans-serif";
export const hd = { fontWeight:600, letterSpacing:"0.04em", textTransform:"uppercase" };
export const bd = { fontWeight:400 };
export const rad = { borderRadius:10 };
export const bi = { width:"100%", boxSizing:"border-box", padding:"11px 14px", border:`1px solid ${C.g88}`, ...rad, fontSize:14, fontFamily:ff, color:C.black, background:C.panel, outline:"none", transition:"border-color 0.2s, box-shadow 0.2s", ...bd };
export const g = (cols) => ({ display:"grid", gridTemplateColumns:`repeat(${cols},1fr)`, gap:16 });

export const LOCALES = ["UK (ENG)","US (ENG)","CAN (ENG)","CAN (FR)","DE (GER)","FR (FR)"];
export const LANG = {"DE (GER)":"de","FR (FR)":"fr","CAN (FR)":"fr"};

// Departments & Profiles
export const DEPARTMENTS = ["Creative","Marketing","Digital","Brand"];
export const DEPT_COLORS = { Creative:C.red, Marketing:C.yellow, Digital:C.blue, Brand:C.green };
export const DEFAULT_AVATAR_COLOR = C.g70;

export const DEFAULT_PROFILES = [
  { firstName:"Richard", lastName:"Palmer", email:"richard.palmer@chaos-lab.com", jobTitle:"Digital Artworker", department:"Digital" },
  { firstName:"Farah", lastName:"Yousaf", email:"farah.yousaf@chaos-lab.com", jobTitle:"Digital Asset Lead", department:"Digital" },
];

// Brief Statuses
export const BRIEF_STATUSES = [
  { key:"brief_added", label:"BRIEF ADDED", color:C.g70 },
  { key:"with_copy", label:"WITH COPY", color:C.blue },
  { key:"with_design", label:"WITH DESIGN", color:"#C084FC" },
  { key:"awaiting_approval", label:"AWAITING APPROVAL", color:C.yellow },
  { key:"handover", label:"HANDOVER", color:C.red },
  { key:"complete", label:"COMPLETE", color:C.green },
];

// Mock project data — shared between the Dashboard and the Hub Assistant's
// "find a project" search, so the assistant can look up the same jobs the
// user sees on the dashboard.
export const TODAY = new Date().toISOString().slice(0,10);

export const MOCK_PROJECTS = [
  { id:"PEN-2025-0042",brand:"VortexSwim",title:"Summer 25 Launch",status:"in_progress",start:"2025-03-01",end:"2026-06-15",owner:"Farah Yousaf",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:false,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"Homepage Hero Banner",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"PLP Category Banner",locale:"UK (ENG)",status:"with_copy",assignedTo:"Richard Palmer"},{id:"W03",channel:"Web",name:"Homepage Hero Banner",locale:"DE (GER)",status:"brief_added",assignedTo:""},{id:"E01",channel:"Email",name:"Launch Email",locale:"UK (ENG)",status:"awaiting_approval",assignedTo:"Farah Yousaf",sendDate:"2025-06-01",handoverDate:"2025-05-20"},{id:"E02",channel:"Email",name:"Promo Follow-Up",locale:"UK (ENG)",status:"with_copy",assignedTo:"Farah Yousaf",sendDate:"2025-06-10",handoverDate:"2025-05-28"},{id:"E03",channel:"Email",name:"Launch Email",locale:"FR (FR)",status:"brief_added",assignedTo:"",sendDate:"2025-06-01",handoverDate:"2025-05-20"},{id:"P01",channel:"Paid",name:"PMAX 1200x628",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"},{id:"P02",channel:"Paid",name:"Social 1080x1080",locale:"UK (ENG)",status:"brief_added",assignedTo:""}]},
  { id:"PEN-2025-0038",brand:"Apex Trail",title:"AW25 Digital Campaign",status:"review",start:"2025-02-15",end:"2026-04-30",owner:"Farah Yousaf",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:true,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"Hero Banner — AW25",locale:"UK (ENG)",status:"awaiting_approval",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"PDP Feature Block",locale:"UK (ENG)",status:"handover",assignedTo:"Richard Palmer"},{id:"E01",channel:"Email",name:"AW25 Teaser Email",locale:"UK (ENG)",status:"complete",assignedTo:"Farah Yousaf",sendDate:"2025-03-15",handoverDate:"2025-03-01"},{id:"E02",channel:"Email",name:"AW25 Launch Email",locale:"UK (ENG)",status:"awaiting_approval",assignedTo:"Farah Yousaf",sendDate:"2025-04-01",handoverDate:"2025-03-18"},{id:"P01",channel:"Paid",name:"Display 728x90",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"}]},
  { id:"PEN-2025-0035",brand:"Impact80",title:"Six Nations Promo",status:"delivered",start:"2025-01-10",end:"2025-03-20",owner:"Richard Palmer",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:true,delivery:true,feedback:true},
    briefs:[{id:"W01",channel:"Web",name:"Six Nations Hero",locale:"UK (ENG)",status:"complete",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"Kit Builder CTA",locale:"UK (ENG)",status:"complete",assignedTo:"Richard Palmer"},{id:"E01",channel:"Email",name:"Match Day Email",locale:"UK (ENG)",status:"complete",assignedTo:"Farah Yousaf",sendDate:"2025-02-10",handoverDate:"2025-01-28"},{id:"P01",channel:"Paid",name:"Social 1080x1920",locale:"UK (ENG)",status:"complete",assignedTo:"Richard Palmer"}]},
  { id:"PEN-2025-0031",brand:"VortexSwim",title:"SecondSkin Launch",status:"in_progress",start:"2025-01-05",end:"2025-12-01",owner:"Farah Yousaf",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:true,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"SecondSkin PDP Hero",locale:"UK (ENG)",status:"handover",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"Technology Explainer",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"},{id:"E01",channel:"Email",name:"Pre-Launch Teaser",locale:"UK (ENG)",status:"complete",assignedTo:"Farah Yousaf",sendDate:"2025-08-01",handoverDate:"2025-07-18"},{id:"E02",channel:"Email",name:"Launch Day Email",locale:"UK (ENG)",status:"awaiting_approval",assignedTo:"Farah Yousaf",sendDate:"2025-09-15",handoverDate:"2025-09-01"},{id:"E03",channel:"Email",name:"Launch Day Email",locale:"DE (GER)",status:"with_copy",assignedTo:"",sendDate:"2025-09-15",handoverDate:"2025-09-01"},{id:"P01",channel:"Paid",name:"PMAX 1200x300",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"},{id:"P02",channel:"Paid",name:"Display 300x250",locale:"UK (ENG)",status:"brief_added",assignedTo:""}]},
  { id:"PEN-2025-0029",brand:"CAMPIONATO",title:"SS25 Social Push",status:"briefing",start:"2025-03-10",end:"2026-07-01",owner:"Farah Yousaf",modules:{overview:true,toolkit:false,brief:false,resources:false,approval:false,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"Homepage Takeover",locale:"UK (ENG)",status:"brief_added",assignedTo:""},{id:"P01",channel:"Paid",name:"Social 1080x1080",locale:"UK (ENG)",status:"brief_added",assignedTo:""},{id:"P02",channel:"Paid",name:"Social 1080x1920",locale:"UK (ENG)",status:"brief_added",assignedTo:""}]},
  { id:"PEN-2024-0112",brand:"Apex Trail",title:"Winter 24 Wrap-Up",status:"delivered",start:"2024-09-01",end:"2024-12-15",owner:"Richard Palmer",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:true,delivery:true,feedback:true},
    briefs:[{id:"W01",channel:"Web",name:"Winter Sale Hero",locale:"UK (ENG)",status:"complete",assignedTo:"Richard Palmer"},{id:"E01",channel:"Email",name:"Winter Sale Launch",locale:"UK (ENG)",status:"complete",assignedTo:"Farah Yousaf",sendDate:"2024-11-01",handoverDate:"2024-10-18"},{id:"E02",channel:"Email",name:"Last Chance Email",locale:"UK (ENG)",status:"complete",assignedTo:"Farah Yousaf",sendDate:"2024-12-05",handoverDate:"2024-11-22"},{id:"P01",channel:"Paid",name:"Display 970x250",locale:"UK (ENG)",status:"complete",assignedTo:"Richard Palmer"}]},
  { id:"PEN-2025-0044",brand:"Full90",title:"Grassroots Kit Launch",status:"draft",start:"2025-04-01",end:"2026-08-01",owner:"",modules:{overview:false,toolkit:false,brief:false,resources:false,approval:false,delivery:false,feedback:false},briefs:[]},
  { id:"PEN-2025-0048",brand:"CAMPIONATO",title:"Heritage Collection",status:"review",start:"2025-06-01",end:"2026-01-15",owner:"Farah Yousaf",modules:{overview:true,toolkit:true,brief:true,resources:true,approval:false,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"Heritage Landing Page",locale:"UK (ENG)",status:"with_design",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"Heritage Landing Page",locale:"FR (FR)",status:"with_copy",assignedTo:""},{id:"E01",channel:"Email",name:"Heritage Launch Email",locale:"UK (ENG)",status:"with_design",assignedTo:"Farah Yousaf",sendDate:"2025-09-01",handoverDate:"2025-08-15"},{id:"P01",channel:"Paid",name:"PMAX 1200x1200",locale:"UK (ENG)",status:"with_copy",assignedTo:"Richard Palmer"},{id:"P02",channel:"Paid",name:"Social 1080x1350",locale:"UK (ENG)",status:"brief_added",assignedTo:""}]},
  { id:"PEN-2025-0050",brand:"Impact80",title:"Lions Tour Kit",status:"in_progress",start:"2025-05-01",end:"2026-03-15",owner:"Richard Palmer",modules:{overview:true,toolkit:true,brief:false,resources:true,approval:false,delivery:false,feedback:false},
    briefs:[{id:"W01",channel:"Web",name:"Lions Hero Banner",locale:"UK (ENG)",status:"with_copy",assignedTo:"Richard Palmer"},{id:"W02",channel:"Web",name:"Kit Customiser CTA",locale:"UK (ENG)",status:"brief_added",assignedTo:""},{id:"E01",channel:"Email",name:"Lions Announcement",locale:"UK (ENG)",status:"with_copy",assignedTo:"Farah Yousaf",sendDate:"2025-07-01",handoverDate:"2025-06-15"},{id:"P01",channel:"Paid",name:"Social 1080x1080",locale:"UK (ENG)",status:"brief_added",assignedTo:""}]},
];

export const getEffectiveStatus = (p) => {
  if(p.status==="delivered") return "delivered";
  if(p.end < TODAY && p.status !== "delivered") return "overdue";
  return p.status;
};

// EmailJS Config
const EJS = { serviceId:"service_3bgcpks", templateId:"template_hq01ivu", publicKey:"itrWoBl1KYZsBeCLO" };

export const sendNotification = async ({to_email, role, job_number, project_name, brand}) => {
  if(!to_email || to_email==="__add__") return;
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        service_id: EJS.serviceId,
        template_id: EJS.templateId,
        user_id: EJS.publicKey,
        template_params: { to_email, role, job_number: job_number||"—", project_name: project_name||"—", brand: brand||"—" }
      })
    });
    return res.ok;
  } catch(e) { return false; }
};

export const tx = async (fields, locale) => {
  const langCode = LANG[locale]; if (!langCode) return fields;
  const filled = Object.entries(fields).filter(([k,v]) => v && typeof v === "string" && v.trim());
  if (!filled.length) return fields;
  const translated = {...fields};
  for (const [key, val] of filled) {
    try {
      await new Promise(r=>setTimeout(r,300));
      const r = await fetch("https://api.mymemory.translated.net/get?q="+encodeURIComponent(val.substring(0,500))+"&langpair=en|"+langCode+"&de=hub@chaos-lab.com");
      if(!r.ok) continue;
      const d = await r.json();
      if(d.responseData && d.responseData.translatedText && !d.responseData.translatedText.includes("MYMEMORY WARNING")) translated[key] = d.responseData.translatedText;
    } catch(e) { /* keep original */ }
  }
  return translated;
};

// Avatar Component
export function Avatar({ firstName, department, size=36 }) {
  const letter = firstName ? firstName.charAt(0).toUpperCase() : "?";
  const color = department && DEPT_COLORS[department] ? DEPT_COLORS[department] : DEFAULT_AVATAR_COLOR;
  const textColor = (color === C.yellow) ? C.black : C.card;
  return (
    <div style={{ width:size, height:size, borderRadius:size/2, background:color, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background 0.3s" }}>
      <span style={{ fontSize:size*0.44, fontWeight:700, color:textColor, fontFamily:ff, lineHeight:1 }}>{letter}</span>
    </div>
  );
}

// Brief Status Select
export function BriefStatusSelect({ value, onChange }) {
  const current = BRIEF_STATUSES.find(s => s.key === value) || BRIEF_STATUSES[0];
  return (
    <select value={value} onChange={e => onChange(e.target.value)}
      style={{ padding:"6px 12px", border:`1px solid ${current.color}44`, ...rad, background:current.color+"18", color:current.color, fontSize:10, ...hd, fontFamily:ff, cursor:"pointer", outline:"none" }}>
      {BRIEF_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
    </select>
  );
}

// Icons
export const ICN = {
  playground:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  overview:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  resources:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  toolkit:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  brief:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  approval:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  delivery:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  feedback:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
};

export const MODULES = [
  {key:"overview",label:"CAMPAIGN OVERVIEW",sub:"The Admin Bit"},
  {key:"resources",label:"RESOURCE MANAGEMENT",sub:"Who Needs Access"},
  {key:"toolkit",label:"CAMPAIGN TOOLKIT",sub:"Shared Resources"},
  {key:"brief",label:"PROJECT BRIEF",sub:"Multi-Channel Hub"},
  {key:"approval",label:"APPROVAL CENTRE",sub:"Project Sign-Off"},
  {key:"delivery",label:"ASSET DELIVERY",sub:"Downloads & DAM"},
  {key:"feedback",label:"FEEDBACK CENTRE",sub:"How Did It Go?"},
  {key:"playground",label:"PROJECT PLAYGROUND",sub:"Collaborative Kick Off"},
];

// Shared Components
export const Card = ({children, style:s}) => (<div style={{background:C.card, border:`1px solid ${C.g88}`, ...rad, padding:"24px 28px", ...s}}>{children}</div>);

export const Field = ({label, required, hint, children}) => (
  <div>
    <label style={{display:"block",fontSize:11,...hd,color:C.g50,fontFamily:ff,marginBottom:7}}>{label}{required&&<span style={{color:C.red,marginLeft:3}}>*</span>}</label>
    {hint&&<span style={{display:"block",fontSize:12,color:C.g70,marginBottom:5,fontFamily:ff,...bd}}>{hint}</span>}
    {children}
  </div>
);

export const Input = ({value, onChange, placeholder, type="text"}) => {
  const [f,setF] = useState(false);
  return <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{...bi,borderColor:f?C.blue:C.g88,boxShadow:f?`0 0 0 3px ${C.blue}22`:"none"}} onFocus={()=>setF(true)} onBlur={()=>setF(false)} />;
};

export const TextArea = ({value, onChange, placeholder, rows=3}) => {
  const [f,setF] = useState(false);
  return <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows} style={{...bi,resize:"vertical",minHeight:70,borderColor:f?C.blue:C.g88,boxShadow:f?`0 0 0 3px ${C.blue}22`:"none"}} onFocus={()=>setF(true)} onBlur={()=>setF(false)} />;
};

export const Chip = ({label, active, onClick, accent}) => (
  <button onClick={onClick} style={{padding:"8px 16px",border:`1px solid ${active?C.blue:C.g88}`,...rad,background:active?C.blue+"18":C.card,color:active?C.blue:C.g50,fontSize:12,fontWeight:active?600:500,fontFamily:ff,cursor:"pointer",transition:"all 0.15s"}}>{label}</button>
);

export const CG = ({options, selected, onChange, accent}) => (
  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>{options.map(o=><Chip key={o} label={o} active={selected.includes(o)} onClick={()=>onChange(selected.includes(o)?selected.filter(s=>s!==o):[...selected,o])} accent={accent}/>)}</div>
);

// Email Select — now shows names from profiles
export const EmailSelect = ({value, onChange, profiles, onAddUser}) => {
  const [f,setF] = useState(false);
  const [adding,setAdding] = useState(false);
  const [nf,setNf] = useState("");
  const [nl,setNl] = useState("");
  const [ne,setNe] = useState("");
  const doAdd = () => {
    const em=ne.trim().toLowerCase(); const first=nf.trim(); const last=nl.trim();
    if(first&&last&&em&&em.includes("@")){onAddUser({firstName:first,lastName:last,email:em});onChange(em);setNf("");setNl("");setNe("");setAdding(false);}
  };
  if(adding) return (
    <div style={{border:`1px solid ${C.g88}`,...rad,padding:14,background:C.g94}}>
      <div style={{fontSize:10,...hd,color:C.g50,fontFamily:ff,marginBottom:8}}>CREATE NEW USER</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:6}}>
        <input value={nf} onChange={e=>setNf(e.target.value)} placeholder="First name" style={bi} autoFocus/>
        <input value={nl} onChange={e=>setNl(e.target.value)} placeholder="Last name" style={bi}/>
      </div>
      <input value={ne} onChange={e=>setNe(e.target.value)} onKeyDown={e=>e.key==="Enter"&&doAdd()} placeholder="Email address" style={{...bi,marginBottom:8}}/>
      <div style={{display:"flex",gap:4}}>
        <button onClick={doAdd} style={{padding:"8px 14px",border:"none",...rad,background:C.black,color:C.card,fontSize:11,...hd,fontFamily:ff,cursor:"pointer"}}>ADD</button>
        <button onClick={()=>{setAdding(false);setNf("");setNl("");setNe("");}} style={{padding:"8px 10px",border:`1px solid ${C.g88}`,...rad,background:C.card,color:C.g50,fontSize:11,...hd,fontFamily:ff,cursor:"pointer"}}>CANCEL</button>
      </div>
    </div>
  );
  return (
    <select value={value} onChange={e=>{if(e.target.value==="__add__")setAdding(true);else onChange(e.target.value);}} style={{...bi,borderColor:f?C.blue:C.g88,cursor:"pointer"}} onFocus={()=>setF(true)} onBlur={()=>setF(false)}>
      <option value="">Select...</option>
      {(profiles||[]).map(u=><option key={u.email} value={u.email}>{u.firstName} {u.lastName}</option>)}
      <option value="__add__">+ Create new user</option>
    </select>
  );
};

export const Sec = ({title, num, collapsed, onToggle, accent, children}) => (
  <Card>
    <button onClick={onToggle} style={{width:"100%",padding:0,display:"flex",alignItems:"center",justifyContent:"space-between",border:"none",background:"transparent",cursor:"pointer",fontFamily:ff}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        {accent&&<div style={{width:4,height:20,...rad,background:accent}}/>}
        <span style={{fontSize:13,...hd,color:C.black,fontFamily:ff}}>{num&&<span style={{color:C.g70,marginRight:8}}>{num}</span>}{title}</span>
      </div>
      <span style={{fontSize:16,color:C.g70,transform:collapsed?"rotate(0)":"rotate(180deg)",transition:"transform 0.2s"}}>&#9660;</span>
    </button>
    {!collapsed&&<div style={{paddingTop:20}}>{children}</div>}
  </Card>
);

export const CT = ({label, tag, active, onToggle, accent, disabled, disabledText}) => (
  <button onClick={disabled?undefined:onToggle} style={{padding:"18px 16px",border:`1px solid ${active?C.blue:C.g88}`,...rad,background:active?C.blue+"12":disabled?C.g94:C.card,cursor:disabled?"default":"pointer",fontFamily:ff,transition:"all 0.15s",textAlign:"left",position:"relative",overflow:"hidden",opacity:disabled?0.6:1}}>
    {active&&<div style={{position:"absolute",top:0,left:0,right:0,height:3,background:accent||C.blue,...rad}}/>}
    <div style={{fontSize:13,...hd,color:disabled?C.g70:active?C.blue:C.g50,fontFamily:ff}}>{label}</div>
    <div style={{fontSize:10,...hd,color:disabled?C.g70:active?(accent||C.blue):C.g70,fontFamily:ff,marginTop:4}}>{disabled?disabledText:tag}</div>
  </button>
);

export const PageTitle = ({title, sub, accent, onMenu}) => (
  <div style={{marginBottom:24}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:4}}>
      {onMenu&&<button onClick={onMenu} className="mob-only" style={{padding:"6px 8px",border:`1px solid ${C.g88}`,...rad,background:C.card,cursor:"pointer",display:"none",flexShrink:0}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>}
      {accent&&<div style={{width:7,height:7,borderRadius:4,background:accent}}/>}
      <span style={{fontSize:11,...hd,color:C.g70,fontFamily:ff}}>{sub}</span>
    </div>
    <h1 style={{fontSize:24,...hd,color:C.black,fontFamily:ff,lineHeight:1.2,margin:0,letterSpacing:"0.03em"}}>{title}</h1>
  </div>
);

export function ProjectActions({onAction, projectStatus}) {
  const actions = [
    {key:"pause",label:"PAUSE PROJECT",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,color:C.yellow},
    {key:"archive",label:"ARCHIVE PROJECT",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>,color:C.g50},
    {key:"cancel",label:"CANCEL PROJECT",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,color:C.red},
  ];
  if(projectStatus==="paused") actions[0]={...actions[0],key:"resume",label:"RESUME PROJECT",icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,color:C.green};
  return (
    <div style={{display:"flex",gap:6}}>
      {actions.map(a=>(
        <button key={a.key} onClick={()=>onAction(a.key)} style={{flex:1,padding:"9px 8px",border:`1px solid ${C.g88}`,...rad,background:C.card,cursor:"pointer",fontFamily:ff,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"all 0.15s"}}>
          <span style={{color:a.color,display:"flex"}}>{a.icon}</span>
          <span style={{fontSize:9,...hd,color:a.color,fontFamily:ff}}>{a.label}</span>
        </button>
      ))}
    </div>
  );
}

// HUB ASSISTANT — "find a job" search
// Lets the assistant understand queries like "find PEN-2025-0042",
// "show me overdue projects", or "any VortexSwim jobs" and match them
// against the same project data shown on the Dashboard.
const STATUS_KEYWORDS = {
  "overdue":"overdue", "late":"overdue",
  "draft":"draft", "drafts":"draft",
  "briefing":"briefing",
  "in progress":"in_progress", "ongoing":"in_progress", "active":"in_progress",
  "in review":"review", "review":"review",
  "approved":"approved", "approval":"approved",
  "delivered":"delivered", "complete":"delivered", "completed":"delivered", "done":"delivered",
};

const JOB_SEARCH_TRIGGER = /\b(find|search|look ?up|locate|where'?s|where is|which job|which project|show me|open (job|project)|list)\b/i;
const JOB_CONTEXT = /\b(jobs?|projects?)\b/i;
const JOB_NUM_RE = /[A-Za-z]{2,6}-\d{4}-\d{2,6}/;

function parseJobQuery(text) {
  const t = text.trim();
  if(!t) return null;
  const lower = t.toLowerCase();

  // An explicit job number is unambiguous — always treat it as a lookup.
  const jobNumMatch = t.match(JOB_NUM_RE);
  if(jobNumMatch) return { type:"jobnum", value: jobNumMatch[0].toUpperCase() };

  // A recognised brand name is specific enough to always treat as a lookup.
  const brands = [...new Set(MOCK_PROJECTS.map(p=>p.brand))];
  for(const b of brands){
    if(lower.includes(b.toLowerCase())) return { type:"brand", value: b };
  }

  // Status words (overdue, review, approved...) overlap with ordinary help
  // questions ("how do I get approval?"), so only read them as a job search
  // when the message also reads like a search — "show me overdue jobs",
  // "draft projects", "list what's in review", etc.
  const looksLikeSearch = JOB_SEARCH_TRIGGER.test(lower) || JOB_CONTEXT.test(lower);
  if(looksLikeSearch){
    for(const [kw, status] of Object.entries(STATUS_KEYWORDS)){
      if(lower.includes(kw)) return { type:"status", value: status, label: kw };
    }
  }

  if(JOB_SEARCH_TRIGGER.test(lower)){
    const cleaned = lower
      .replace(JOB_SEARCH_TRIGGER,"")
      .replace(/\b(the|a|an|for|project|job|please|me|any|jobs|projects)\b/g,"")
      .trim();
    return { type:"text", value: cleaned };
  }

  return null;
}

function searchProjects(q){
  if(!q) return [];
  if(q.type==="jobnum") return MOCK_PROJECTS.filter(p=>p.id.toUpperCase().includes(q.value));
  if(q.type==="status") return MOCK_PROJECTS.map(p=>({...p,effectiveStatus:getEffectiveStatus(p)})).filter(p=>p.effectiveStatus===q.value);
  if(q.type==="brand") return MOCK_PROJECTS.filter(p=>p.brand===q.value);
  if(q.type==="text"){
    if(!q.value) return [];
    return MOCK_PROJECTS.filter(p=>(p.id+" "+p.brand+" "+p.title).toLowerCase().includes(q.value));
  }
  return [];
}

// Sidebar with Chat + Chatbot
export function Sidebar({view, setView, jobNum, open, setOpen, onOpenProject}) {
  const [chatOpen,setChatOpen]=useState(false);
  const [botOpen,setBotOpen]=useState(false);
  const [chatMsgs,setChatMsgs]=useState([{id:1,user:"System",text:"Project chat started. Say hello to your team!",time:"—",isSystem:true}]);
  const [chatInput,setChatInput]=useState("");
  const [botMsgs,setBotMsgs]=useState([{id:1,from:"bot",text:"Hi! I'm your Project Hub assistant. I can help with questions about briefing, approvals, asset delivery, and more — or ask me to find a job, e.g. \"find PEN-2025-0042\", \"any VortexSwim jobs\", or \"show me overdue projects\"."}]);
  const [botInput,setBotInput]=useState("");

  const sendChat=()=>{if(!chatInput.trim())return;const now=new Date();const ts=now.getHours().toString().padStart(2,"0")+":"+now.getMinutes().toString().padStart(2,"0");setChatMsgs(m=>[...m,{id:Date.now(),user:"You",text:chatInput.trim(),time:ts,isSystem:false}]);setChatInput("");};

  const BOT_RESPONSES=["I'd recommend checking the Campaign Toolkit module for shared assets and brand guidelines.","You can assign team members in the Resource Management module — each role will get a notification email.","For approvals, head to the Approval Centre. You'll need the brief owner password to access it.","Asset delivery files can be uploaded in the Asset Delivery module — supports Figma links, Dropbox, and DAM links.","Try duplicating your web or email assets for different locales — auto-translation is enabled for DE and FR!","The Feedback Centre lets you rate the project across 6 categories once it's complete.","You can pause, archive or cancel a project from the Project Hub screen.","Need to notify someone about changes? Use the Save Changes button on the brief — it'll prompt you to send a notification."];
  const sendBot=()=>{
    if(!botInput.trim())return;
    const q=botInput.trim();
    setBotMsgs(m=>[...m,{id:Date.now(),from:"user",text:q}]);
    setBotInput("");
    setTimeout(()=>{
      // FIND-A-JOB — try to interpret the message as a project search first
      const parsed=parseJobQuery(q);
      if(parsed){
        const results=searchProjects(parsed).slice(0,5);
        if(results.length===0){
          const text=(parsed.type==="text"&&!parsed.value)
            ? "Sure — tell me a job number, brand, or status and I'll look it up. e.g. \"find PEN-2025-0042\" or \"show me overdue projects\"."
            : `I couldn't find a job matching "${q}". Try a job number like PEN-2025-0042, a brand name, or a status like overdue, draft, review, or delivered.`;
          setBotMsgs(m=>[...m,{id:Date.now()+1,from:"bot",text}]);
        } else {
          const text=results.length===1
            ? `Found it — ${results[0].title} for ${results[0].brand} (${results[0].id}).`
            : `Found ${results.length} jobs matching "${q}":`;
          setBotMsgs(m=>[...m,{id:Date.now()+1,from:"bot",text,results}]);
        }
        return;
      }
      // FALLBACK — canned help responses about how the Hub works
      let resp=BOT_RESPONSES[Math.floor(Math.random()*BOT_RESPONSES.length)];
      const lower=q.toLowerCase();
      if(lower.includes("approv"))resp="For approvals, head to the Approval Centre module. The brief owner can hand over to a designer, and final sign-off moves the project to delivery.";
      else if(lower.includes("brief"))resp="The Project Brief module is your multi-channel hub — you can add Web, Email, and Paid Media asset briefs there.";
      else if(lower.includes("deliver"))resp="Check the Asset Delivery module for Figma links, Dropbox repos, DAM links, and file uploads.";
      else if(lower.includes("feedback")||lower.includes("rating"))resp="The Feedback Centre lets your team rate the project across 6 categories. An email address is required to submit.";
      else if(lower.includes("resource")||lower.includes("team"))resp="Resource Management lets you assign roles like Brief Owner, CRM Manager, Lead Designer, and more. Each person gets an email notification.";
      else if(lower.includes("status"))resp="Each brief card now has a status dropdown at the top. Statuses are: Brief Added, With Copy, With Design, Awaiting Approval, Handover, and Complete.";
      setBotMsgs(m=>[...m,{id:Date.now()+1,from:"bot",text:resp}]);
    },600);
  };

  const modalBg={position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"};
  const modalBox={background:C.card,...rad,width:"90%",maxWidth:440,maxHeight:"80vh",display:"flex",flexDirection:"column",boxShadow:"0 20px 60px rgba(0,0,0,0.15)"};
  const modalHead={padding:"18px 22px",borderBottom:`1px solid ${C.g88}`,display:"flex",alignItems:"center",justifyContent:"space-between"};
  const modalBody={flex:1,overflowY:"auto",padding:"16px 22px"};
  const modalFoot={padding:"14px 22px",borderTop:`1px solid ${C.g88}`,display:"flex",gap:8};
  const msgBubble=(isOwn)=>({padding:"10px 14px",background:isOwn?C.blue+"18":C.g94,...rad,maxWidth:"85%",alignSelf:isOwn?"flex-end":"flex-start"});
  const closeBtn={padding:"4px 8px",border:"none",background:"transparent",cursor:"pointer"};

  return (<>
    {open&&<div onClick={()=>setOpen(false)} className="mob-only" style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.3)",zIndex:9,display:"none"}}/>}
    <div className={open?"sidebar sidebar-open":"sidebar"} style={{width:250,flexShrink:0,background:C.card,borderRight:`1px solid ${C.g88}`,display:"flex",flexDirection:"column",minHeight:"100vh",position:"fixed",left:0,top:0,bottom:0,zIndex:10,transition:"transform 0.25s ease"}}>
      <div style={{padding:"28px 22px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <div style={{fontSize:10,...hd,color:C.red,fontFamily:ff,letterSpacing:"0.1em"}}>CHAOS-LAB</div>
          <div style={{fontSize:16,...hd,color:C.black,fontFamily:ff,marginTop:2,letterSpacing:"0.02em"}}>PROJECT HUB</div>
        </div>
        <button onClick={()=>setOpen(false)} className="mob-only" style={{padding:"4px 8px",border:"none",background:"transparent",cursor:"pointer",display:"none"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.g50} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      {jobNum&&<div style={{margin:"0 14px 14px",padding:"10px 14px",background:C.panel,...rad,border:`1px solid ${C.g88}`}}>
        <div style={{fontSize:9,...hd,color:C.g70,fontFamily:ff}}>CURRENT PROJECT</div>
        <div style={{fontSize:13,fontWeight:600,color:C.black,fontFamily:ff,marginTop:2}}>{jobNum}</div>
      </div>}
      <div style={{padding:"0 10px",flex:1,overflowY:"auto"}}>
        <div style={{fontSize:9,...hd,color:C.g70,fontFamily:ff,padding:"8px 12px 6px"}}>MODULES</div>
        {MODULES.map(m=>{const vk=m.key==="brief"?"form":m.key;const active=view===vk||(m.key==="resources"&&view==="profiles");return(
          <button key={m.key} onClick={()=>{setView(vk);setOpen(false);}} style={{width:"100%",padding:"9px 12px",border:"none",borderRadius:8,background:active?C.bg:"transparent",cursor:"pointer",fontFamily:ff,textAlign:"left",display:"flex",alignItems:"center",gap:10,transition:"all 0.15s",marginBottom:1}}>
            <span style={{color:active?C.red:C.g70,display:"flex",flexShrink:0}}>{ICN[m.key]}</span>
            <span style={{fontSize:12,fontWeight:active?600:400,color:active?C.black:C.g50,fontFamily:ff}}>{m.label}</span>
            {active&&<div style={{marginLeft:"auto",width:5,height:5,borderRadius:3,background:C.red,flexShrink:0}}/>}
          </button>
        );})}
      </div>
      <div style={{padding:"10px 14px",borderTop:`1px solid ${C.g88}`,display:"flex",flexDirection:"column",gap:6}}>
        <div style={{padding:"0 2px",marginBottom:4}}>
          <button onClick={()=>setChatOpen(true)} style={{width:"100%",padding:"9px 12px",border:"none",borderRadius:8,background:"transparent",cursor:"pointer",fontFamily:ff,textAlign:"left",display:"flex",alignItems:"center",gap:10,transition:"all 0.15s",marginBottom:1}}>
            <span style={{color:C.g70,display:"flex",flexShrink:0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
            <span style={{fontSize:12,fontWeight:400,color:C.g50,fontFamily:ff}}>TEAM CHAT</span>
          </button>
          <button onClick={()=>setBotOpen(true)} style={{width:"100%",padding:"9px 12px",border:"none",borderRadius:8,background:"transparent",cursor:"pointer",fontFamily:ff,textAlign:"left",display:"flex",alignItems:"center",gap:10,transition:"all 0.15s",marginBottom:1}}>
            <span style={{color:C.g70,display:"flex",flexShrink:0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 2a3 3 0 0 0-3 3v6h6V5a3 3 0 0 0-3-3z"/><line x1="8" y1="16" x2="8" y2="16.01"/><line x1="16" y1="16" x2="16" y2="16.01"/></svg></span>
            <span style={{fontSize:12,fontWeight:400,color:C.g50,fontFamily:ff}}>HUB ASSISTANT</span>
          </button>
        </div>
        <button onClick={()=>{setView("project");setOpen(false);}} style={{width:"100%",padding:"10px",border:`1px solid ${C.g88}`,...rad,background:C.card,cursor:"pointer",fontFamily:ff,fontSize:12,fontWeight:500,color:C.g50}}>BACK TO HUB</button>
        <button onClick={()=>{setView("dashboard");setOpen(false);}} style={{width:"100%",padding:"10px",border:`1px solid ${C.g88}`,...rad,background:C.panel,cursor:"pointer",fontFamily:ff,fontSize:12,fontWeight:500,color:C.g50,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.g50} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          SEE DASHBOARD
        </button>
      </div>
    </div>
    {/* Team Chat Modal */}
    {chatOpen&&<div style={modalBg} onClick={()=>setChatOpen(false)}><div style={modalBox} onClick={e=>e.stopPropagation()}>
      <div style={modalHead}><div style={{display:"flex",alignItems:"center",gap:10}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span style={{fontSize:14,...hd,color:C.black,fontFamily:ff}}>TEAM CHAT</span></div><button onClick={()=>setChatOpen(false)} style={closeBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.g50} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div style={{...modalBody,display:"flex",flexDirection:"column",gap:8,minHeight:300}}>{chatMsgs.map(msg=>(<div key={msg.id} style={{display:"flex",flexDirection:"column",alignItems:msg.isSystem?"center":msg.user==="You"?"flex-end":"flex-start"}}>{msg.isSystem?<div style={{fontSize:11,...bd,color:C.g70,fontFamily:ff,fontStyle:"italic",padding:"8px 0"}}>{msg.text}</div>:<div style={msgBubble(msg.user==="You")}><div style={{fontSize:10,...hd,color:msg.user==="You"?C.blue:C.g50,fontFamily:ff,marginBottom:3}}>{msg.user} · {msg.time}</div><div style={{fontSize:13,...bd,color:C.black,fontFamily:ff,lineHeight:1.5}}>{msg.text}</div></div>}</div>))}</div>
      <div style={modalFoot}><input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Type a message..." style={{...bi,flex:1}}/><button onClick={sendChat} style={{padding:"10px 18px",border:"none",...rad,background:C.black,color:C.card,fontSize:11,...hd,fontFamily:ff,cursor:"pointer"}}>SEND</button></div>
    </div></div>}
    {/* Hub Assistant Modal */}
    {botOpen&&<div style={modalBg} onClick={()=>setBotOpen(false)}><div style={modalBox} onClick={e=>e.stopPropagation()}>
      <div style={modalHead}><div style={{display:"flex",alignItems:"center",gap:10}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 2a3 3 0 0 0-3 3v6h6V5a3 3 0 0 0-3-3z"/><line x1="8" y1="16" x2="8" y2="16.01"/><line x1="16" y1="16" x2="16" y2="16.01"/></svg><span style={{fontSize:14,...hd,color:C.black,fontFamily:ff}}>HUB ASSISTANT</span></div><button onClick={()=>setBotOpen(false)} style={closeBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.g50} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>
      <div style={{...modalBody,display:"flex",flexDirection:"column",gap:8,minHeight:300}}>{botMsgs.map(msg=>(<div key={msg.id} style={{display:"flex",flexDirection:"column",alignItems:msg.from==="user"?"flex-end":"flex-start",width:"100%"}}>
        <div style={msgBubble(msg.from==="user")}>{msg.from==="bot"&&<div style={{fontSize:10,...hd,color:C.green,fontFamily:ff,marginBottom:3}}>HUB ASSISTANT</div>}<div style={{fontSize:13,...bd,color:C.black,fontFamily:ff,lineHeight:1.5}}>{msg.text}</div></div>
        {msg.results&&msg.results.length>0&&<div style={{display:"flex",flexDirection:"column",gap:6,marginTop:6,width:"85%"}}>
          {msg.results.map(p=>(
            <button key={p.id} onClick={()=>{onOpenProject&&onOpenProject(p);setBotOpen(false);}} style={{textAlign:"left",padding:"10px 12px",border:`1px solid ${C.g88}`,...rad,background:C.card,cursor:"pointer",fontFamily:ff,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,transition:"border-color 0.15s"}}>
              <div style={{minWidth:0}}>
                <div style={{fontSize:12,fontWeight:600,color:C.black,fontFamily:ff}}>{p.id} · {p.brand}</div>
                <div style={{fontSize:11,color:C.g70,fontFamily:ff,...bd,marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.title}</div>
              </div>
              <span style={{fontSize:16,color:C.g70,flexShrink:0}}>{"›"}</span>
            </button>
          ))}
        </div>}
      </div>))}</div>
      <div style={modalFoot}><input value={botInput} onChange={e=>setBotInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendBot()} placeholder="Ask about the hub, or 'find PEN-2025-0042'..." style={{...bi,flex:1}}/><button onClick={sendBot} style={{padding:"10px 18px",border:"none",...rad,background:C.black,color:C.card,fontSize:11,...hd,fontFamily:ff,cursor:"pointer"}}>ASK</button></div>
    </div></div>}
  </>);
}

export function SaveBar({dirty, onSave, saved}) {
  return (
    <div style={{marginTop:20,position:"relative"}}>
      {dirty&&!saved&&<div style={{marginBottom:10,padding:"10px 16px",background:C.panel,border:`1px solid ${C.yellow}33`,...rad,display:"flex",alignItems:"center",gap:8}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD93D" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span style={{fontSize:12,fontWeight:500,color:C.yellow,fontFamily:ff}}>You have unsaved changes</span>
      </div>}
      {saved&&<div style={{position:"absolute",top:-40,left:"50%",transform:"translateX(-50%)",background:C.black,color:C.card,padding:"6px 16px",...rad,fontSize:11,...hd,fontFamily:ff,whiteSpace:"nowrap"}}>CHANGES SAVED</div>}
      <button onClick={onSave} style={{width:"100%",padding:"13px 24px",border:"none",...rad,background:C.black,color:C.card,fontSize:13,...hd,fontFamily:ff,cursor:"pointer"}}>SAVE CHANGES</button>
    </div>
  );
}

export function PasswordGate({pwInput, setPwInput, pwError, onSubmit, moduleName}) {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"60vh"}}>
      <Card style={{maxWidth:400,width:"100%",textAlign:"center",padding:"40px 36px"}}>
        <div style={{marginBottom:20}}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={C.g70} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>
        </div>
        <div style={{fontSize:16,...hd,color:C.black,fontFamily:ff,marginBottom:6}}>AUTHORISATION REQUIRED</div>
        <div style={{fontSize:13,...bd,color:C.g50,fontFamily:ff,marginBottom:24,lineHeight:1.5}}>Enter the brief owner password to access {moduleName}.</div>
        <input type="password" value={pwInput} onChange={e=>{setPwInput(e.target.value);}} onKeyDown={e=>{if(e.key==="Enter")onSubmit();}} placeholder="Enter password..." style={{...bi,textAlign:"center",fontSize:14,marginBottom:12}}/>
        {pwError&&<div style={{fontSize:12,color:C.red,fontFamily:ff,marginBottom:12}}>Incorrect password. Please try again.</div>}
        <button onClick={onSubmit} style={{width:"100%",padding:"13px 24px",border:"none",...rad,background:C.black,color:C.card,fontSize:13,...hd,fontFamily:ff,cursor:"pointer"}}>UNLOCK</button>
      </Card>
    </div>
  );
}

export const RESPONSIVE_CSS = `
@media(max-width:768px){
  .mob-only{display:flex!important}
  .sidebar{transform:translateX(-100%)}
  .sidebar-open{transform:translateX(0)!important}
  .main-content{margin-left:0!important;padding:20px 16px 60px!important}
  .brief-footer{left:0!important;padding:12px 16px!important}
  .hub-grid-3{grid-template-columns:1fr!important}
  .hub-grid-2{grid-template-columns:1fr!important}
  .hub-grid-4{grid-template-columns:1fr 1fr!important}
  .hub-grid-5{grid-template-columns:1fr 1fr!important}
  .dash-table-head,.dash-table-row{grid-template-columns:1fr!important;gap:4px!important}
  .dash-hide-mob{display:none!important}
}
@media(min-width:769px){
  .mob-only{display:none!important}
  .sidebar{transform:translateX(0)}
}
`;
