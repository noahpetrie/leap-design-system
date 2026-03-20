import{R as e}from"./index-C5e9SFkp.js";import{P as c}from"./index-Cv3U8xn7.js";import{c as m}from"./utils-C8nBGPD0.js";import{c as U}from"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";const i=({steps:d=[],currentStep:l=0,...A})=>e.createElement("div",{className:"flex items-start",...A},d.map((k,r)=>{const t=r<l,p=r===l;return e.createElement("div",{key:r,className:"flex flex-col items-center relative flex-1"},e.createElement("div",{className:m("w-8 h-8 rounded-full flex items-center justify-center z-[1]",t&&"bg-[#0c8c5e] text-white",p&&"bg-[#e6f4ee] border-2 border-[#0c8c5e] text-[#0c8c5e]",!t&&!p&&"bg-[#e0e0e0] text-[#525252]")},t?e.createElement(U,{size:20}):e.createElement("span",{className:"text-xs font-semibold"},r+1)),r<d.length-1&&e.createElement("div",{className:m("absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5",t?"bg-[#0c8c5e]":"bg-[#e0e0e0]")}),e.createElement("div",{className:m("text-[12px] tracking-[0.32px] mt-2 text-center whitespace-nowrap",p?"text-[#161616] font-semibold":"text-[#525252]")},k))}));i.propTypes={steps:c.arrayOf(c.string).isRequired,currentStep:c.number};i.__docgenInfo={description:"",methods:[],displayName:"LeapProgressTracker",props:{steps:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},currentStep:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1}}};const L={title:"Components/LeapProgressTracker",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A horizontal step tracker that shows sequential progress through numbered steps with completed, current, and upcoming states.\n\n### Import\n```jsx\nimport { LeapProgressTracker } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{currentStep:{control:{type:"number",min:0,max:4}}}},s={args:{steps:["Submitted","Under Review","Manager Approval","Confirmed"],currentStep:0}},a={args:{steps:["Submitted","Under Review","Manager Approval","Confirmed"],currentStep:1}},n={args:{steps:["Submitted","Under Review","Manager Approval","Confirmed"],currentStep:3}},o={args:{steps:["Submitted","Under Review","Manager Approval","Confirmed"],currentStep:4}};var u,g,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'],
    currentStep: 0
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'],
    currentStep: 1
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,h,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'],
    currentStep: 3
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,C,R;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    steps: ['Submitted', 'Under Review', 'Manager Approval', 'Confirmed'],
    currentStep: 4
  }
}`,...(R=(C=o.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const _=["Submitted","UnderReview","Approved","Complete"];export{n as Approved,o as Complete,s as Submitted,a as UnderReview,_ as __namedExportsOrder,L as default};
