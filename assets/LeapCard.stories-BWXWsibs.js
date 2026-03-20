import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as O}from"./utils-C8nBGPD0.js";import{L as j}from"./LeapAILabel-dAStfBDL.js";import"./usePrefix-DKvSngT5.js";import"./index-CbrCmGzd.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./deprecate-wUyRZ4Kw.js";import"./useId-BCI3fkL9.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";const z={default:"",raised:"shadow-[0_2px_6px_rgba(0,0,0,0.08)]",ai:"border-[#c6e8d9]",danger:"border-[#da1e28]",metric:"bg-[#e0e0e0] border-none"},c=({variant:q="default",title:d,subtitle:p,children:T,onClick:u,aiLabel:l,...D})=>{const m=!!u,G=m?"button":"div";return e.createElement(G,{className:O("border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] p-[1rem] text-left w-full",z[q],m&&"cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-[#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2"),style:{backgroundColor:"var(--cds-layer, #ffffff)"},onClick:u,type:m?"button":void 0,...D},(d||l)&&e.createElement("div",{className:"flex justify-between items-start mb-[0.75rem]"},e.createElement("div",{className:"flex flex-col gap-[0.125rem]"},d&&e.createElement("span",{className:"text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)]"},d),p&&e.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252]"},p)),l&&e.createElement("div",null,l)),e.createElement("div",{className:"text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-[#525252]"},T))};c.propTypes={variant:a.oneOf(["default","raised","ai","danger","metric"]),title:a.string,subtitle:a.string,children:a.node,onClick:a.func,aiLabel:a.node};c.__docgenInfo={description:"",methods:[],displayName:"LeapCard",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'raised'",computed:!1},{value:"'ai'",computed:!1},{value:"'danger'",computed:!1},{value:"'metric'",computed:!1}]},required:!1},title:{description:"",type:{name:"string"},required:!1},subtitle:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},aiLabel:{description:"",type:{name:"node"},required:!1}}};const se={title:"Components/LeapCard",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","raised","ai","danger","metric"]},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"A versatile card container available in default, raised, AI, danger, and metric variants. Supports optional click behavior, titles, subtitles, and AI labels.\n\n### Import\n```jsx\nimport { LeapCard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{title:"Stakeholder Group",subtitle:"Engineering",children:"12 members, 3 on leave today"}},t={args:{variant:"raised",title:"Change Initiative",subtitle:"Q2 Restructuring",children:"Impact: High — 45 stakeholders affected"}},s={render:()=>e.createElement(c,{variant:"ai",title:"AI Impact Assessment",subtitle:"Auto-generated",aiLabel:e.createElement(j,{size:"sm",explanation:"Generated from 12 historical initiatives.",confidence:87})},"Based on similar past changes, this initiative has a 78% readiness score with moderate resistance expected from mid-management.")},i={args:{variant:"danger",title:"Critical Alert",children:"3 stakeholders have not been engaged in 30+ days. This risks initiative success."}},n={args:{variant:"metric",title:"78%",subtitle:"Overall Readiness",children:"Up 12% from last assessment"}},o={args:{variant:"raised",title:"Sarah Chen",subtitle:"Software Engineer",children:"Click to view profile"}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Stakeholder Group',
    subtitle: 'Engineering',
    children: '12 members, 3 on leave today'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,b,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'raised',
    title: 'Change Initiative',
    subtitle: 'Q2 Restructuring',
    children: 'Impact: High — 45 stakeholders affected'
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var C,y,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <LeapCard variant="ai" title="AI Impact Assessment" subtitle="Auto-generated" aiLabel={<LeapAILabel size="sm" explanation="Generated from 12 historical initiatives." confidence={87} />}>
      Based on similar past changes, this initiative has a 78% readiness score with moderate resistance expected from mid-management.
    </LeapCard>
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,A,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Critical Alert',
    children: '3 stakeholders have not been engaged in 30+ days. This risks initiative success.'
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,S,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'metric',
    title: '78%',
    subtitle: 'Overall Readiness',
    children: 'Up 12% from last assessment'
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var _,R,N;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'raised',
    title: 'Sarah Chen',
    subtitle: 'Software Engineer',
    children: 'Click to view profile'
  }
}`,...(N=(R=o.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const ie=["Default","Raised","AICard","Danger","Metric","Clickable"];export{s as AICard,o as Clickable,i as Danger,r as Default,n as Metric,t as Raised,ie as __namedExportsOrder,se as default};
