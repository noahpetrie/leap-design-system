import{r as b,R as e}from"./index-C5e9SFkp.js";import{P as i}from"./index-Cv3U8xn7.js";import{c}from"./utils-C8nBGPD0.js";const y={low:"Low",medium:"Medium",high:"High"},w={identified:"Identified",mitigating:"Mitigating",resolved:"Resolved"},E={low:"border-l-[#0c8c5e]",medium:"border-l-[#f1c21b]",high:"border-l-[#da1e28]"},k={low:"bg-[#0c8c5e]/15 text-[#0c8c5e]",medium:"bg-[#f1c21b]/20 text-[#8e6a00]",high:"bg-[#fff1f1] text-[#da1e28]"},S={identified:"bg-[#e0e0e0] text-[#525252]",mitigating:"bg-[#d0e2ff] text-[#0043ce]",resolved:"bg-[#0c8c5e]/15 text-[#0c8c5e]"},o=({entries:d})=>{const[h,v]=b.useState(new Set),x=t=>{v(n=>{const s=new Set(n);return s.has(t)?s.delete(t):s.add(t),s})};return!d||d.length===0?e.createElement("div",{className:"rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold mb-4 text-[#1a1a18]"},"Resistance Log"),e.createElement("p",{className:"text-[14px] tracking-[0.16px] text-[#525252] text-center py-6"},"No resistance entries recorded.")):e.createElement("div",{className:"rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 text-[var(--cds-text-primary,#1a1a18)] font-['IBM_Plex_Sans',sans-serif]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold mb-4 text-[#1a1a18]"},"Resistance Log"),e.createElement("div",{className:"grid grid-cols-1 gap-4"},d.map(t=>{const n=h.has(t.id);return e.createElement("div",{key:t.id,className:c("bg-[#f4f4f4] border border-[#e0e0e0] rounded p-4 border-l-4",E[t.severity])},e.createElement("div",{className:"flex items-center justify-between mb-2"},e.createElement("span",{className:c("inline-block px-2 py-0.5 rounded-full text-[12px] tracking-[0.32px] font-semibold",k[t.severity])},y[t.severity]),e.createElement("span",{className:c("inline-block px-2 py-0.5 rounded-full text-[12px] tracking-[0.32px] font-medium",S[t.status])},w[t.status])),e.createElement("h4",{className:"text-[14px] tracking-[0.16px] font-semibold text-[#1a1a18] mb-1"},t.source),e.createElement("p",{className:"text-[14px] tracking-[0.16px] text-[#525252] mb-2 leading-[1.5]"},t.description),t.mitigation&&e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"bg-transparent border-none p-0 cursor-pointer text-[12px] tracking-[0.32px] font-medium text-[#0c8c5e] hover:underline focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2 focus:rounded-sm",onClick:()=>x(t.id),"aria-expanded":n},n?"▾ Hide mitigation":"▸ Show mitigation"),n&&e.createElement("div",{className:"mt-2 p-3 bg-[#f4f4f4] rounded"},e.createElement("span",{className:"text-[12px] tracking-[0.32px] font-semibold text-[#1a1a18] block mb-1"},"Mitigation Plan"),e.createElement("p",{className:"text-[14px] tracking-[0.16px] text-[#525252] m-0 leading-[1.5]"},t.mitigation))))})))};o.propTypes={entries:i.arrayOf(i.shape({id:i.oneOfType([i.string,i.number]).isRequired,source:i.string.isRequired,description:i.string.isRequired,severity:i.oneOf(["low","medium","high"]).isRequired,status:i.oneOf(["identified","mitigating","resolved"]).isRequired,mitigation:i.string}))};o.defaultProps={entries:[]};o.__docgenInfo={description:"",methods:[],displayName:"LeapResistanceLog",props:{entries:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},source:{name:"string",required:!0},description:{name:"string",required:!0},severity:{name:"enum",value:[{value:"'low'",computed:!1},{value:"'medium'",computed:!1},{value:"'high'",computed:!1}],required:!0},status:{name:"enum",value:[{value:"'identified'",computed:!1},{value:"'mitigating'",computed:!1},{value:"'resolved'",computed:!1}],required:!0},mitigation:{name:"string",required:!1}}}},required:!1}}};const C={title:"Change Management/LeapResistanceLog",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"An expandable log that tracks sources of resistance during change initiatives, showing severity, status, and mitigation strategies.\n\n### Import\n```jsx\nimport { LeapResistanceLog } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},a={args:{entries:[{id:1,source:"Engineering Team",description:"Concerns about the tight migration timeline and potential for increased on-call burden during the transition period.",severity:"high",status:"mitigating",mitigation:"Extended timeline by two sprints. Added dedicated support rotation for migration issues. Weekly check-ins with tech leads."},{id:2,source:"Sales Department",description:"Resistance to adopting the new CRM workflow due to perceived productivity loss during ramp-up.",severity:"medium",status:"identified",mitigation:"Planning hands-on workshops and assigning CRM champions within each sales pod."},{id:3,source:"Customer Support",description:"Ticket routing changes may confuse newer team members unfamiliar with legacy categories.",severity:"low",status:"resolved",mitigation:"Created a mapping guide and ran two training sessions. Support leads confirmed readiness."},{id:4,source:"Finance Team",description:"Budget approval process changes require re-training on new approval thresholds and delegation rules.",severity:"medium",status:"identified"}]}},r={args:{entries:[{id:1,source:"Operations Team",description:"Shift scheduling system replacement raises concerns about fairness in shift allocation algorithms.",severity:"high",status:"mitigating",mitigation:"Formed a joint committee with union representatives to review and validate the algorithm logic before go-live."}]}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    entries: [{
      id: 1,
      source: 'Engineering Team',
      description: 'Concerns about the tight migration timeline and potential for increased on-call burden during the transition period.',
      severity: 'high',
      status: 'mitigating',
      mitigation: 'Extended timeline by two sprints. Added dedicated support rotation for migration issues. Weekly check-ins with tech leads.'
    }, {
      id: 2,
      source: 'Sales Department',
      description: 'Resistance to adopting the new CRM workflow due to perceived productivity loss during ramp-up.',
      severity: 'medium',
      status: 'identified',
      mitigation: 'Planning hands-on workshops and assigning CRM champions within each sales pod.'
    }, {
      id: 3,
      source: 'Customer Support',
      description: 'Ticket routing changes may confuse newer team members unfamiliar with legacy categories.',
      severity: 'low',
      status: 'resolved',
      mitigation: 'Created a mapping guide and ran two training sessions. Support leads confirmed readiness.'
    }, {
      id: 4,
      source: 'Finance Team',
      description: 'Budget approval process changes require re-training on new approval thresholds and delegation rules.',
      severity: 'medium',
      status: 'identified'
    }]
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,g,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    entries: [{
      id: 1,
      source: 'Operations Team',
      description: 'Shift scheduling system replacement raises concerns about fairness in shift allocation algorithms.',
      severity: 'high',
      status: 'mitigating',
      mitigation: 'Formed a joint committee with union representatives to review and validate the algorithm logic before go-live.'
    }]
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Default","SingleEntry"];export{a as Default,r as SingleEntry,q as __namedExportsOrder,C as default};
