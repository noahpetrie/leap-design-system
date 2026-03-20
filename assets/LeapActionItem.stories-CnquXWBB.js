import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as o}from"./utils-C8nBGPD0.js";const h={urgent:{label:"Urgent",modifier:"urgent"},high:{label:"High",modifier:"high"},medium:{label:"Medium",modifier:"medium"},low:{label:"Low",modifier:"low"}},T=[{value:"todo",label:"To Do"},{value:"in-progress",label:"In Progress"},{value:"done",label:"Done"}],q={urgent:"bg-[#da1e28]",high:"bg-[#eb6200]",medium:"bg-[#f1c21b]",low:"bg-[#a8a8a0]"},O={urgent:"bg-[#da1e28]/[0.12] text-[#da1e28]",high:"bg-[#eb6200]/[0.12] text-[#d45800]",medium:"bg-[#f1c21b]/[0.18] text-[#8e6a00]",low:"bg-[#a8a8a0]/[0.18] text-[#6f6f67]"},R=s=>s?s.split(" ").map(t=>t.charAt(0).toUpperCase()).slice(0,2).join(""):"??",u=({title:s,assignee:t,dueDate:g,priority:_="medium",status:p="todo",onStatusChange:f})=>{const i=h[_]||h.medium,P=r=>{f&&f(r.target.value)};return e.createElement("div",{className:o("flex border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[8px] overflow-hidden max-w-[560px] transition-shadow duration-150 ease-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)]",p==="done"&&"opacity-70"),style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("span",{className:o("shrink-0 w-[5px]",q[i.modifier]),title:`Priority: ${i.label}`}),e.createElement("div",{className:"flex-1 px-[1rem] py-[0.75rem] min-w-0"},e.createElement("div",{className:"flex items-start justify-between gap-[0.5rem] mb-[0.5rem]"},e.createElement("h4",{className:o("text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)] m-0 flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",p==="done"&&"line-through text-[#525252]")},s),e.createElement("span",{className:o("text-[0.75rem] leading-[1rem] tracking-[0.32px] inline-block px-[0.5rem] py-px rounded-[12px] font-semibold whitespace-nowrap shrink-0",O[i.modifier])},i.label)),e.createElement("div",{className:"flex items-center gap-[0.75rem] flex-wrap"},t&&e.createElement("span",{className:"flex items-center gap-[0.25rem]",title:t},e.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#0c8c5e] text-white font-bold shrink-0"},R(t)),e.createElement("span",{className:"text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-[#525252]"},t)),g&&e.createElement("time",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] whitespace-nowrap"},g),e.createElement("select",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] ml-auto py-[0.25rem] pl-[0.5rem] pr-[0.75rem] border border-[var(--cds-border-subtle,#e0e0e0)] rounded text-[var(--cds-text-primary,#161616)] cursor-pointer font-[inherit] focus:outline-2 focus:outline-[#0c8c5e] focus:-outline-offset-1",style:{backgroundColor:"var(--cds-layer, #ffffff)"},value:p,onChange:P,"aria-label":"Change status"},T.map(r=>e.createElement("option",{key:r.value,value:r.value},r.label))))))};u.propTypes={title:a.string.isRequired,assignee:a.string,dueDate:a.string,priority:a.oneOf(["urgent","high","medium","low"]),status:a.oneOf(["todo","in-progress","done"]),onStatusChange:a.func};u.__docgenInfo={description:"",methods:[],displayName:"LeapActionItem",props:{priority:{defaultValue:{value:"'medium'",computed:!1},description:"Priority level",type:{name:"enum",value:[{value:"'urgent'",computed:!1},{value:"'high'",computed:!1},{value:"'medium'",computed:!1},{value:"'low'",computed:!1}]},required:!1},status:{defaultValue:{value:"'todo'",computed:!1},description:"Current status",type:{name:"enum",value:[{value:"'todo'",computed:!1},{value:"'in-progress'",computed:!1},{value:"'done'",computed:!1}]},required:!1},title:{description:"Action item title",type:{name:"string"},required:!0},assignee:{description:"Name of the assignee",type:{name:"string"},required:!1},dueDate:{description:"Due date string",type:{name:"string"},required:!1},onStatusChange:{description:"Callback when status changes",type:{name:"func"},required:!1}}};const G={title:"Components/LeapActionItem",component:u,tags:["autodocs"],argTypes:{priority:{control:"select",options:["urgent","high","medium","low"]},status:{control:"select",options:["todo","in-progress","done"]},onStatusChange:{action:"statusChanged"}},parameters:{docs:{description:{component:"Displays a single action item with title, assignee, due date, priority badge, and a status dropdown. Supports urgent, high, medium, and low priority levels.\n\n### Import\n```jsx\nimport { LeapActionItem } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},n={args:{title:"Resolve critical stakeholder concerns before go-live",assignee:"Sarah Chen",dueDate:"Mar 22, 2026",priority:"urgent",status:"in-progress"}},l={args:{title:"Finalize change communication plan",assignee:"James Wilson",dueDate:"Apr 1, 2026",priority:"high",status:"todo"}},m={args:{title:"Schedule department training sessions",assignee:"Lisa Park",dueDate:"Apr 15, 2026",priority:"medium",status:"todo"}},d={args:{title:"Update internal wiki with new process docs",assignee:"David Kim",dueDate:"May 1, 2026",priority:"low",status:"todo"}},c={args:{title:"Complete stakeholder analysis matrix",assignee:"Maria Garcia",dueDate:"Mar 10, 2026",priority:"high",status:"done"}};var y,x,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Resolve critical stakeholder concerns before go-live',
    assignee: 'Sarah Chen',
    dueDate: 'Mar 22, 2026',
    priority: 'urgent',
    status: 'in-progress'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,w,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Finalize change communication plan',
    assignee: 'James Wilson',
    dueDate: 'Apr 1, 2026',
    priority: 'high',
    status: 'todo'
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var C,D,S;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Schedule department training sessions',
    assignee: 'Lisa Park',
    dueDate: 'Apr 15, 2026',
    priority: 'medium',
    status: 'todo'
  }
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var N,E,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Update internal wiki with new process docs',
    assignee: 'David Kim',
    dueDate: 'May 1, 2026',
    priority: 'low',
    status: 'todo'
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var A,M,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Complete stakeholder analysis matrix',
    assignee: 'Maria Garcia',
    dueDate: 'Mar 10, 2026',
    priority: 'high',
    status: 'done'
  }
}`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};const H=["Urgent","High","Medium","Low","Done"];export{c as Done,l as High,d as Low,m as Medium,n as Urgent,H as __namedExportsOrder,G as default};
