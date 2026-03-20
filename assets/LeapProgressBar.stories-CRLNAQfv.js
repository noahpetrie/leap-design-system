import{R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as f}from"./utils-C8nBGPD0.js";const D={sm:"h-1",md:"h-2"},H={active:"bg-[#0c8c5e]",success:"bg-[#24a148]",error:"bg-[#da1e28]"},u=({value:M,label:s,helperText:d,showValue:g=!0,size:W="md",status:O="active",indeterminate:a=!1,...j})=>{const m=a?void 0:Math.min(100,Math.max(0,M??0));return e.createElement("div",{className:"w-full",...j},(s||g&&!a)&&e.createElement("div",{className:"flex justify-between items-baseline mb-1"},s&&e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#161616]"},s),g&&!a&&e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#525252]"},m,"%")),e.createElement("div",{className:f("w-full bg-[#e0e0e0] rounded-sm overflow-hidden",D[W]),role:"progressbar","aria-valuenow":a?void 0:m,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s||"Progress"},e.createElement("div",{className:f("h-full rounded-sm transition-[width] duration-300 ease-in-out",H[O],a&&"w-[30%] animate-[leap-progress-slide_1.5s_ease-in-out_infinite]"),style:a?void 0:{width:`${m}%`}})),d&&e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#6f6f6f] mt-1 block"},d),a&&e.createElement("style",null,`
          @keyframes leap-progress-slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(333%); }
          }
        `))};u.propTypes={value:r.number,label:r.string,helperText:r.string,showValue:r.bool,size:r.oneOf(["sm","md"]),status:r.oneOf(["active","success","error"]),indeterminate:r.bool};u.__docgenInfo={description:"",methods:[],displayName:"LeapProgressBar",props:{showValue:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},status:{defaultValue:{value:"'active'",computed:!1},description:"",type:{name:"enum",value:[{value:"'active'",computed:!1},{value:"'success'",computed:!1},{value:"'error'",computed:!1}]},required:!1},indeterminate:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{description:"",type:{name:"number"},required:!1},label:{description:"",type:{name:"string"},required:!1},helperText:{description:"",type:{name:"string"},required:!1}}};const $={title:"Components/LeapProgressBar",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A progress bar that visualizes completion status with support for determinate values, indeterminate loading, size variants, and active/success/error states using Leap brand colors.\n\n### Import\n```jsx\nimport { LeapProgressBar } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},t={args:{value:65}},o={args:{value:50,label:"Upload progress"}},l={args:{value:100,status:"success",label:"Migration complete"}},n={args:{value:30,status:"error",label:"Import failed",helperText:"An error occurred during import"}},c={args:{indeterminate:!0,label:"Processing..."}},i={args:{value:45,size:"sm",label:"Compact progress"}},p={args:{value:72,label:"Adoption readiness",helperText:"72 of 100 stakeholders onboarded"}};var v,b,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,y,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: 'Upload progress'
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,w,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 100,
    status: 'success',
    label: 'Migration complete'
  }
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var k,L,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 30,
    status: 'error',
    label: 'Import failed',
    helperText: 'An error occurred during import'
  }
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var _,q,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Processing...'
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var T,I,V;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'sm',
    label: 'Compact progress'
  }
}`,...(V=(I=i.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var A,B,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 72,
    label: 'Adoption readiness',
    helperText: '72 of 100 stakeholders onboarded'
  }
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const F=["Default","HalfWay","Complete","Error","Indeterminate","Small","WithLabel"];export{l as Complete,t as Default,n as Error,o as HalfWay,c as Indeterminate,i as Small,p as WithLabel,F as __namedExportsOrder,$ as default};
