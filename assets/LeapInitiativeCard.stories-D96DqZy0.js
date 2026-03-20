import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import{c as i}from"./utils-C8nBGPD0.js";const v={draft:{label:"Draft",modifier:"draft"},active:{label:"Active",modifier:"active"},completed:{label:"Completed",modifier:"completed"},paused:{label:"Paused",modifier:"paused"}},T={draft:"bg-[rgba(141,141,141,0.15)] text-[#6f6f6f]",active:"bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]",completed:"bg-[rgba(0,67,206,0.1)] text-[#0043ce]",paused:"bg-[rgba(241,194,27,0.15)] text-[#8e6a00]"},H={high:{value:"text-[#0c8c5e]",fill:"bg-[#0c8c5e]"},medium:{value:"text-[#f1c21b]",fill:"bg-[#f1c21b]"},low:{value:"text-[#da1e28]",fill:"bg-[#da1e28]"}},J=r=>r>=70?"high":r>=40?"medium":"low",p=({title:r,description:u,status:R="draft",owner:f,startDate:s,targetDate:n,readiness:q=0,stakeholderCount:I=0,onClick:g})=>{const m=!!g,_=m?"button":"div",h=v[R]||v.draft,a=Math.max(0,Math.min(100,q)),z=J(a),x=H[z];return e.createElement(_,{className:i("flex flex-col gap-[0.75rem] p-[1rem] border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] w-full text-left font-[inherit]",m&&"cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-[#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-2"),style:{backgroundColor:"var(--cds-layer, #ffffff)"},onClick:g,type:m?"button":void 0},e.createElement("div",{className:"flex justify-between items-start gap-[0.5rem]"},e.createElement("h3",{className:"text-[16px] font-semibold tracking-[0.16px] text-[#1a1a18] m-0 flex-1"},r),e.createElement("span",{className:i("text-[12px] tracking-[0.32px] font-semibold px-[0.5rem] py-[0.125rem] rounded-full whitespace-nowrap shrink-0",T[h.modifier])},h.label)),u&&e.createElement("p",{className:"text-[14px] tracking-[0.16px] text-[#525252] m-0 line-clamp-2"},u),e.createElement("div",{className:"flex flex-col gap-[0.25rem]"},f&&e.createElement("div",{className:"flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252]"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:"shrink-0 opacity-70"},e.createElement("path",{d:"M8 2a3 3 0 100 6 3 3 0 000-6zM3 12.5C3 10.567 4.567 9 6.5 9h3c1.933 0 3.5 1.567 3.5 3.5V14H3v-1.5z"})),e.createElement("span",null,f)),(s||n)&&e.createElement("div",{className:"flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252]"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:"shrink-0 opacity-70"},e.createElement("path",{d:"M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zM4 3h8a1 1 0 011 1v1H3V4a1 1 0 011-1zm8 10H4a1 1 0 01-1-1V6h10v6a1 1 0 01-1 1z"})),e.createElement("span",null,s&&n?`${s} — ${n}`:s||n))),e.createElement("div",{className:"flex items-end gap-[1rem] pt-[0.5rem] border-t border-[var(--cds-border-subtle,#e0e0e0)]"},e.createElement("div",{className:"flex-1 flex flex-col gap-[0.25rem]"},e.createElement("div",{className:"flex justify-between text-[12px] tracking-[0.32px] text-[#525252]"},e.createElement("span",null,"Readiness"),e.createElement("span",{className:i("font-semibold",x.value)},a,"%")),e.createElement("div",{className:"w-full h-[4px] bg-[#e0e0e0] rounded-[2px] overflow-hidden"},e.createElement("div",{className:i("h-full rounded-[2px] transition-[width] duration-500 ease-in-out",x.fill),style:{width:`${a}%`},role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Readiness: ${a}%`}))),e.createElement("div",{className:"flex items-center gap-[0.25rem] text-[12px] tracking-[0.32px] text-[#525252] shrink-0"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:"opacity-70"},e.createElement("path",{d:"M6 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM1.5 12C1.5 10.343 2.843 9 4.5 9h3c1.657 0 3 1.343 3 3v1h-9v-1zM11.5 5a2 2 0 100 4 2 2 0 000-4zM12 10h1.5c1.105 0 2 .895 2 2v1h-4v-.5c0-.98-.382-1.87-1.006-2.53.162-.02.332-.03.506-.03z"})),e.createElement("span",null,I))))};p.propTypes={title:t.string.isRequired,description:t.string,status:t.oneOf(["draft","active","completed","paused"]),owner:t.string,startDate:t.string,targetDate:t.string,readiness:t.number,stakeholderCount:t.number,onClick:t.func};p.__docgenInfo={description:"",methods:[],displayName:"LeapInitiativeCard",props:{status:{defaultValue:{value:"'draft'",computed:!1},description:"",type:{name:"enum",value:[{value:"'draft'",computed:!1},{value:"'active'",computed:!1},{value:"'completed'",computed:!1},{value:"'paused'",computed:!1}]},required:!1},readiness:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},stakeholderCount:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},title:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!1},owner:{description:"",type:{name:"string"},required:!1},startDate:{description:"",type:{name:"string"},required:!1},targetDate:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const B={title:"Components/LeapInitiativeCard",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A card displaying a change initiative with its status, owner, timeline, readiness progress bar, and stakeholder count.\n\n### Import\n```jsx\nimport { LeapInitiativeCard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{status:{control:"select",options:["draft","active","completed","paused"]},readiness:{control:{type:"range",min:0,max:100}},onClick:{action:"clicked"}}},o={args:{title:"ERP System Migration",description:"Migrating from legacy ERP to SAP S/4HANA across all business units with phased rollout starting Q2.",status:"active",owner:"Sarah Chen",startDate:"Jan 2026",targetDate:"Sep 2026",readiness:72,stakeholderCount:24}},l={args:{title:"Hybrid Work Policy Rollout",description:"Implementing new flexible work arrangements and updating workplace guidelines for all departments.",status:"draft",owner:"Marcus Johnson",startDate:"Apr 2026",targetDate:"Jul 2026",readiness:35,stakeholderCount:8}},d={args:{title:"Agile Transformation - Phase 1",description:"Successfully transitioned engineering teams to agile methodology with Scrum framework adoption.",status:"completed",owner:"Priya Sharma",startDate:"Mar 2025",targetDate:"Dec 2025",readiness:98,stakeholderCount:42}},c={args:{title:"Office Consolidation",description:"Merging three regional offices into a single headquarters. Paused pending budget review.",status:"paused",owner:"David Kim",startDate:"Jun 2026",targetDate:"Dec 2026",readiness:48,stakeholderCount:15}};var b,w,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'ERP System Migration',
    description: 'Migrating from legacy ERP to SAP S/4HANA across all business units with phased rollout starting Q2.',
    status: 'active',
    owner: 'Sarah Chen',
    startDate: 'Jan 2026',
    targetDate: 'Sep 2026',
    readiness: 72,
    stakeholderCount: 24
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,k,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Hybrid Work Policy Rollout',
    description: 'Implementing new flexible work arrangements and updating workplace guidelines for all departments.',
    status: 'draft',
    owner: 'Marcus Johnson',
    startDate: 'Apr 2026',
    targetDate: 'Jul 2026',
    readiness: 35,
    stakeholderCount: 8
  }
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var S,D,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Agile Transformation - Phase 1',
    description: 'Successfully transitioned engineering teams to agile methodology with Scrum framework adoption.',
    status: 'completed',
    owner: 'Priya Sharma',
    startDate: 'Mar 2025',
    targetDate: 'Dec 2025',
    readiness: 98,
    stakeholderCount: 42
  }
}`,...(N=(D=d.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,P,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Office Consolidation',
    description: 'Merging three regional offices into a single headquarters. Paused pending budget review.',
    status: 'paused',
    owner: 'David Kim',
    startDate: 'Jun 2026',
    targetDate: 'Dec 2026',
    readiness: 48,
    stakeholderCount: 15
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const $=["Active","Draft","Completed","Paused"];export{o as Active,d as Completed,l as Draft,c as Paused,$ as __namedExportsOrder,B as default};
