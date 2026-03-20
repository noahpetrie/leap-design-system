import{r as K,R as e}from"./index-C5e9SFkp.js";import{P as s}from"./index-Cv3U8xn7.js";import{c as f}from"./utils-C8nBGPD0.js";import{b as M}from"./bucket-10-Dc47-2iJ.js";import{W as U}from"./bucket-20-D0WIoklM.js";import{a as j}from"./bucket-6-BF5uQPP1.js";import{C as z,b as Y}from"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";const G={success:z,error:j,warning:U,info:M},H={success:"border-l-[#0c8c5e]",error:"border-l-[#da1e28]",warning:"border-l-[#f1c21b]",info:"border-l-[#4589ff]"},J={success:"fill-[#0c8c5e]",error:"fill-[#da1e28]",warning:"fill-[#f1c21b]",info:"fill-[#4589ff]"},Q={success:"bg-[rgba(12,140,94,0.1)]",error:"bg-[rgba(218,30,40,0.1)]",warning:"bg-[rgba(241,194,27,0.1)]",info:"bg-[rgba(69,137,255,0.1)]"},c=({kind:a="info",title:d,subtitle:p,closable:R=!0,onClose:m,lowContrast:u=!1,className:A,...P})=>{const[W,B]=K.useState(!0);if(!W)return null;const D=G[a],V=F=>{B(!1),m&&m(F)};return e.createElement("div",{className:f("flex items-start py-[0.75rem] px-[1rem] mb-[0.75rem] border-l-[3px] gap-[0.5rem]",u&&Q[a],H[a],A),style:u?void 0:{backgroundColor:"var(--cds-layer, #ffffff)"},role:"alert",...P},e.createElement(D,{className:f("shrink-0 mt-[0.125rem]",J[a]),size:20}),e.createElement("div",{className:"flex flex-col flex-1 gap-[0.25rem]"},d&&e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#161616]"},d),p&&e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#525252]"},p)),R&&e.createElement("button",{type:"button",className:"flex items-center justify-center shrink-0 w-[1.5rem] h-[1.5rem] p-0 border-none rounded-none bg-transparent cursor-pointer text-[#161616] hover:bg-[#e8e8e8] focus:outline-2 focus:outline-[#0c8c5e] focus:-outline-offset-2","aria-label":"Close notification",onClick:V},e.createElement(Y,{size:16})))};c.propTypes={kind:s.oneOf(["success","error","warning","info"]),title:s.string,subtitle:s.string,closable:s.bool,onClose:s.func,lowContrast:s.bool,className:s.string};c.__docgenInfo={description:`LeapInlineNotification — A compact inline notification/alert that
communicates success, error, warning, or informational messages
with a colored border stripe, icon, and optional close button.`,methods:[],displayName:"LeapInlineNotification",props:{kind:{defaultValue:{value:"'info'",computed:!1},description:"The notification variant.",type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1}]},required:!1},closable:{defaultValue:{value:"true",computed:!1},description:"Whether to show the close button.",type:{name:"bool"},required:!1},lowContrast:{defaultValue:{value:"false",computed:!1},description:"Use a lighter background variant.",type:{name:"bool"},required:!1},title:{description:"Bold heading text.",type:{name:"string"},required:!1},subtitle:{description:"Body / descriptive text.",type:{name:"string"},required:!1},onClose:{description:"Callback when the notification is closed.",type:{name:"func"},required:!1},className:{description:"Additional CSS class.",type:{name:"string"},required:!1}}};const re={title:"Components/LeapInlineNotification",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A compact inline notification/alert that communicates success, error, warning, or informational messages with a colored border stripe, icon, and optional close button.\n\n### Import\n```jsx\nimport { LeapInlineNotification } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{kind:{control:"select",options:["success","error","warning","info"]},closable:{control:"boolean"},lowContrast:{control:"boolean"},onClose:{action:"closed"}}},n={args:{kind:"success",title:"Change plan approved",subtitle:"Your change management plan has been reviewed and approved by all stakeholders."}},t={args:{kind:"error",title:"Submission failed",subtitle:"The readiness assessment could not be saved. Please try again."}},r={args:{kind:"warning",title:"Upcoming deadline",subtitle:"The stakeholder review period closes in 2 days."}},o={args:{kind:"info",title:"New training available",subtitle:"A new change-readiness training module has been published."}},i={args:{kind:"success",title:"Milestone reached",subtitle:"Phase 2 adoption targets have been met.",lowContrast:!0}},l={args:{kind:"info",title:"System notice",subtitle:"Scheduled maintenance is planned for this weekend.",closable:!1}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    kind: 'success',
    title: 'Change plan approved',
    subtitle: 'Your change management plan has been reviewed and approved by all stakeholders.'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,v,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    kind: 'error',
    title: 'Submission failed',
    subtitle: 'The readiness assessment could not be saved. Please try again.'
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,C,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    kind: 'warning',
    title: 'Upcoming deadline',
    subtitle: 'The stakeholder review period closes in 2 days.'
  }
}`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var x,S,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    kind: 'info',
    title: 'New training available',
    subtitle: 'A new change-readiness training module has been published.'
  }
}`,...(I=(S=o.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,_,L;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    kind: 'success',
    title: 'Milestone reached',
    subtitle: 'Phase 2 adoption targets have been met.',
    lowContrast: true
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var O,T,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    kind: 'info',
    title: 'System notice',
    subtitle: 'Scheduled maintenance is planned for this weekend.',
    closable: false
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const oe=["Success","Error","Warning","Info","LowContrast","NotClosable"];export{t as Error,o as Info,i as LowContrast,l as NotClosable,n as Success,r as Warning,oe as __namedExportsOrder,re as default};
