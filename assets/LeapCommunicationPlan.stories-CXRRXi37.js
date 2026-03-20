import{R as e}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{c as p}from"./utils-C8nBGPD0.js";const g={email:"Email",slack:"Slack",meeting:"Meeting",townhall:"Town Hall"},f={draft:"Draft",scheduled:"Scheduled",sent:"Sent",cancelled:"Cancelled"},h={draft:"bg-[#e0e0e0] text-[#525252]",scheduled:"bg-[#d0e2ff] text-[#0043ce]",sent:"bg-[#0c8c5e]/15 text-[#0c8c5e]",cancelled:"bg-[#fff1f1] text-[#da1e28]"},x=t=>new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),i=({communications:t})=>!t||t.length===0?e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold mb-4 text-[#1a1a18]"},"Communication Plan"),e.createElement("p",{className:"text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] text-center py-6"},"No communications planned yet.")):e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold mb-4 text-[#1a1a18]"},"Communication Plan"),e.createElement("div",{className:"grid grid-cols-[100px_auto_80px_1fr_90px] gap-3 px-3 py-2 border-b-2 border-[#0c8c5e] text-xs leading-4 tracking-[0.32px] font-semibold text-[#1a1a18]"},e.createElement("span",null,"Date"),e.createElement("span",null,"Audience"),e.createElement("span",null,"Channel"),e.createElement("span",null,"Message"),e.createElement("span",null,"Status")),e.createElement("ul",{className:"list-none m-0 p-0"},t.map(a=>e.createElement("li",{key:a.id,className:"grid grid-cols-[100px_auto_80px_1fr_90px] gap-3 items-center px-3 py-3 border-b border-[#e0e0e0] transition-colors duration-150 hover:bg-[#e8e8e8]"},e.createElement("span",{className:"text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] whitespace-nowrap"},x(a.date)),e.createElement("span",null,e.createElement("span",{className:"inline-block px-2 py-0.5 rounded-full bg-[#0c8c5e]/[0.12] text-[#0c8c5e] text-xs leading-4 tracking-[0.32px] font-medium whitespace-nowrap"},a.audience)),e.createElement("span",{className:"text-sm leading-[1.125rem] tracking-[0.16px] text-[#1a1a18] font-medium"},g[a.channel]||a.channel),e.createElement("span",{className:"text-sm leading-[1.125rem] tracking-[0.16px] text-[#525252] overflow-hidden text-ellipsis whitespace-nowrap"},a.message),e.createElement("span",null,e.createElement("span",{className:p("inline-block px-2 py-0.5 rounded-full text-xs leading-4 tracking-[0.32px] font-semibold text-center whitespace-nowrap",h[a.status])},f[a.status]||a.status))))));i.propTypes={communications:n.arrayOf(n.shape({id:n.oneOfType([n.string,n.number]).isRequired,date:n.string.isRequired,audience:n.string.isRequired,channel:n.string.isRequired,message:n.string.isRequired,status:n.oneOf(["draft","scheduled","sent","cancelled"]).isRequired}))};i.defaultProps={communications:[]};i.__docgenInfo={description:"",methods:[],displayName:"LeapCommunicationPlan",props:{communications:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},date:{name:"string",required:!0},audience:{name:"string",required:!0},channel:{name:"string",required:!0},message:{name:"string",required:!0},status:{name:"enum",value:[{value:"'draft'",computed:!1},{value:"'scheduled'",computed:!1},{value:"'sent'",computed:!1},{value:"'cancelled'",computed:!1}],required:!0}}}},required:!1}}};const E={title:"Change Management/LeapCommunicationPlan",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Renders a timeline of planned communications for a change initiative, showing date, audience, channel (email, Slack, meeting, town hall), message preview, and delivery status.\n\n### Import\n```jsx\nimport { LeapCommunicationPlan } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},s={args:{communications:[{id:1,date:"2026-04-01",audience:"All Employees",channel:"email",message:"Announcing the new platform migration timeline and what it means for your daily workflow and tooling.",status:"sent"},{id:2,date:"2026-04-05",audience:"Engineering",channel:"slack",message:"Technical deep-dive on the API changes coming in Sprint 14 — please review before standup.",status:"scheduled"},{id:3,date:"2026-04-10",audience:"Leadership",channel:"meeting",message:"Quarterly change readiness review and risk assessment discussion with executive sponsors.",status:"draft"},{id:4,date:"2026-04-15",audience:"All Employees",channel:"townhall",message:"Company-wide town hall to address questions about the organizational restructuring.",status:"scheduled"},{id:5,date:"2026-03-20",audience:"Design Team",channel:"meeting",message:"Design system migration workshop — cancelled due to scheduling conflict.",status:"cancelled"}]}},r={args:{communications:[]}};var l,c,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    communications: [{
      id: 1,
      date: '2026-04-01',
      audience: 'All Employees',
      channel: 'email',
      message: 'Announcing the new platform migration timeline and what it means for your daily workflow and tooling.',
      status: 'sent'
    }, {
      id: 2,
      date: '2026-04-05',
      audience: 'Engineering',
      channel: 'slack',
      message: 'Technical deep-dive on the API changes coming in Sprint 14 — please review before standup.',
      status: 'scheduled'
    }, {
      id: 3,
      date: '2026-04-10',
      audience: 'Leadership',
      channel: 'meeting',
      message: 'Quarterly change readiness review and risk assessment discussion with executive sponsors.',
      status: 'draft'
    }, {
      id: 4,
      date: '2026-04-15',
      audience: 'All Employees',
      channel: 'townhall',
      message: 'Company-wide town hall to address questions about the organizational restructuring.',
      status: 'scheduled'
    }, {
      id: 5,
      date: '2026-03-20',
      audience: 'Design Team',
      channel: 'meeting',
      message: 'Design system migration workshop — cancelled due to scheduling conflict.',
      status: 'cancelled'
    }]
  }
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    communications: []
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default","Empty"];export{s as Default,r as Empty,v as __namedExportsOrder,E as default};
