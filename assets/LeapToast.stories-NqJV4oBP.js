import{r as u,R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as f}from"./utils-C8nBGPD0.js";import{b as P}from"./bucket-10-Dc47-2iJ.js";import{W as V}from"./bucket-20-D0WIoklM.js";import{a as U}from"./bucket-6-BF5uQPP1.js";import{c as W,b as A}from"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";const M={success:W,error:U,warning:V,info:P},g={success:{border:"border-l-[#0c8c5e]",icon:"text-[#0c8c5e]"},error:{border:"border-l-[#da1e28]",icon:"text-[#da1e28]"},warning:{border:"border-l-[#f1c21b]",icon:"text-[#f1c21b]"},info:{border:"border-l-[#4589ff]",icon:"text-[#4589ff]"}},c=({title:_,message:l,kind:d="info",duration:i=5e3,onClose:r,...N})=>{const[C,p]=u.useState(!0),F=M[d],m=g[d]||g.info;return u.useEffect(()=>{if(i>0){const I=setTimeout(()=>{p(!1),r&&r()},i);return()=>clearTimeout(I)}},[i,r]),C?e.createElement("div",{className:f("flex items-start gap-2 rounded-[4px] border-l-4 px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.12)] max-w-[400px]",m.border),style:{backgroundColor:"var(--cds-layer, #ffffff)"},role:"alert",...N},e.createElement(F,{size:20,className:f("mt-px shrink-0",m.icon)}),e.createElement("div",{className:"flex flex-1 flex-col gap-0.5"},e.createElement("span",{className:"text-[14px] font-semibold leading-[18px] tracking-[0.16px] text-[var(--cds-text-primary,#161616)]"},_),l&&e.createElement("span",{className:"text-[14px] leading-[18px] tracking-[0.16px] text-[#525252]"},l)),e.createElement("button",{className:"shrink-0 border-none bg-transparent p-0.5 text-[#525252] hover:text-[var(--cds-text-primary,#161616)] cursor-pointer",onClick:()=>{p(!1),r&&r()},"aria-label":"Dismiss"},e.createElement(A,{size:16}))):null};c.propTypes={title:a.string.isRequired,message:a.string,kind:a.oneOf(["success","error","warning","info"]),duration:a.number,onClose:a.func};c.__docgenInfo={description:"",methods:[],displayName:"LeapToast",props:{kind:{defaultValue:{value:"'info'",computed:!1},description:"",type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'error'",computed:!1},{value:"'warning'",computed:!1},{value:"'info'",computed:!1}]},required:!1},duration:{defaultValue:{value:"5000",computed:!1},description:"",type:{name:"number"},required:!1},title:{description:"",type:{name:"string"},required:!0},message:{description:"",type:{name:"string"},required:!1},onClose:{description:"",type:{name:"func"},required:!1}}};const H={title:"Components/LeapToast",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A dismissible toast notification with success, error, warning, and info variants, supporting auto-dismiss via a configurable duration.\n\n### Import\n```jsx\nimport { LeapToast } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{kind:{control:"select",options:["success","error","warning","info"]},onClose:{action:"closed"}}},s={args:{title:"Leave Approved",message:"Vacation request for Mar 20-24 has been approved.",kind:"success",duration:0}},t={args:{title:"Submission Failed",message:"Unable to submit leave request. Please try again.",kind:"error",duration:0}},o={args:{title:"Low Balance",message:"You have only 2 vacation days remaining.",kind:"warning",duration:0}},n={args:{title:"Policy Updated",message:"Carry-over limits have changed for next fiscal year.",kind:"info",duration:0}};var b,x,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Leave Approved',
    message: 'Vacation request for Mar 20-24 has been approved.',
    kind: 'success',
    duration: 0
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,k,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Submission Failed',
    message: 'Unable to submit leave request. Please try again.',
    kind: 'error',
    duration: 0
  }
}`,...(h=(k=t.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var w,E,q;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Low Balance',
    message: 'You have only 2 vacation days remaining.',
    kind: 'warning',
    duration: 0
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var S,T,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Policy Updated',
    message: 'Carry-over limits have changed for next fiscal year.',
    kind: 'info',
    duration: 0
  }
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const J=["Success","Error","Warning","Info"];export{t as Error,n as Info,s as Success,o as Warning,J as __namedExportsOrder,H as default};
