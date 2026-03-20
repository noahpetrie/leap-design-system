import{R as s}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as j}from"./utils-C8nBGPD0.js";const b={sm:{dimension:80,strokeWidth:6,fontSize:"1rem"},md:{dimension:128,strokeWidth:8,fontSize:"1.5rem"},lg:{dimension:180,strokeWidth:10,fontSize:"2rem"}},q={high:"#0c8c5e",medium:"#f1c21b",low:"#da1e28"},B=r=>r>=70?"high":r>=40?"medium":"low",x={sm:{badge:"w-[1rem] h-[1rem]",svg:"w-[8px] h-[8px]"},md:{badge:"w-[1.25rem] h-[1.25rem]",svg:"w-[10px] h-[10px]"},lg:{badge:"w-[1.5rem] h-[1.5rem]",svg:"w-[12px] h-[12px]"}},u=({score:r=0,label:g,size:f="md",showAI:R=!1})=>{const{dimension:e,strokeWidth:i,fontSize:W}=b[f]||b.md,d=(e-i)/2,p=2*Math.PI*d,t=Math.max(0,Math.min(100,r)),C=p-t/100*p,$=B(t),h=x[f]||x.md;return s.createElement("div",{className:"inline-flex flex-col items-center gap-[0.5rem]"},s.createElement("div",{className:"relative inline-flex items-center justify-center"},s.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,"aria-label":`Impact score: ${t} out of 100`,role:"img"},s.createElement("circle",{className:"stroke-[#e0e0e0]",cx:e/2,cy:e/2,r:d,fill:"none",strokeWidth:i}),s.createElement("circle",{cx:e/2,cy:e/2,r:d,fill:"none",strokeWidth:i,strokeDasharray:p,strokeDashoffset:C,strokeLinecap:"round",transform:`rotate(-90 ${e/2} ${e/2})`,style:{stroke:q[$],transition:"stroke-dashoffset 0.6s ease"}})),s.createElement("div",{className:"absolute inset-0 flex items-center justify-center font-semibold text-[#1a1a18] tabular-nums",style:{fontSize:W}},t),R&&s.createElement("div",{className:j("absolute top-0 right-0 rounded-full bg-[#0c8c5e] text-white flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.15)]",h.badge),title:"AI-generated score"},s.createElement("svg",{className:h.svg,viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},s.createElement("path",{d:"M8 1l1.796 4.858L15 7.5l-4.02 3.264L12.236 16 8 12.88 3.764 16l1.256-5.236L1 7.5l5.204-1.642L8 1z",fill:"currentColor"})))),g&&s.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252] text-center"},g))};u.propTypes={score:a.number,label:a.string,size:a.oneOf(["sm","md","lg"]),showAI:a.bool};u.__docgenInfo={description:"",methods:[],displayName:"LeapImpactScore",props:{score:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},showAI:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!1}}};const H={title:"Components/LeapImpactScore",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A circular gauge that visualizes an impact score from 0 to 100 with color-coded severity levels and an optional AI badge.\n\n### Import\n```jsx\nimport { LeapImpactScore } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{score:{control:{type:"range",min:0,max:100}},size:{control:"select",options:["sm","md","lg"]},showAI:{control:"boolean"}}},o={args:{score:87,label:"Overall Impact",size:"md"}},c={args:{score:52,label:"Process Impact",size:"md"}},n={args:{score:23,label:"Risk Level",size:"md"}},l={args:{score:74,label:"Adoption",size:"sm"}},m={args:{score:87,label:"AI-Assessed Impact",size:"md",showAI:!0}};var I,v,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    score: 87,
    label: 'Overall Impact',
    size: 'md'
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,y,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    score: 52,
    label: 'Process Impact',
    size: 'md'
  }
}`,...(z=(y=c.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var A,E,L;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    score: 23,
    label: 'Risk Level',
    size: 'md'
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var k,_,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    score: 74,
    label: 'Adoption',
    size: 'sm'
  }
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,O,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    score: 87,
    label: 'AI-Assessed Impact',
    size: 'md',
    showAI: true
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const Z=["High","Medium","Low","Small","WithAI"];export{o as High,n as Low,c as Medium,l as Small,m as WithAI,Z as __namedExportsOrder,H as default};
