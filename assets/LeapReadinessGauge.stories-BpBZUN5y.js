import{R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as s}from"./utils-C8nBGPD0.js";const o={high:{text:"text-[#0c8c5e]",bg:"bg-[#0c8c5e]"},medium:{text:"text-[#f1c21b]",bg:"bg-[#f1c21b]"},low:{text:"text-[#da1e28]",bg:"bg-[#da1e28]"}},g=n=>n>=70?"high":n>=40?"medium":"low",u=({overall:n=0,categories:c=[]})=>{const a=Math.max(0,Math.min(100,n)),d=g(a);return e.createElement("div",{className:"flex flex-col gap-4 w-full max-w-[32rem]"},e.createElement("div",{className:"flex justify-between items-baseline"},e.createElement("span",{className:"text-[14px] tracking-[0.16px] font-semibold text-[#1a1a18]"},"Overall Readiness"),e.createElement("span",{className:s("text-[16px] font-semibold tabular-nums",o[d].text)},a,"%")),e.createElement("div",{className:"w-full h-4 bg-[#e0e0e0] rounded-lg overflow-hidden"},e.createElement("div",{className:s("h-full rounded-lg transition-all duration-500 ease-out",o[d].bg),style:{width:`${a}%`},role:"progressbar","aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`Overall readiness: ${a}%`})),c.length>0&&e.createElement("div",{className:"flex flex-col gap-4 pt-2 border-t border-[#e0e0e0]"},c.map(t=>{const l=Math.max(0,Math.min(100,t.value)),p=g(l);return e.createElement("div",{key:t.label,className:"flex flex-col gap-1"},e.createElement("div",{className:"flex justify-between items-baseline"},e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#161616]"},t.label),e.createElement("span",{className:s("text-[12px] tracking-[0.32px] font-semibold tabular-nums",o[p].text)},l,"%")),e.createElement("div",{className:"w-full h-2 bg-[#e0e0e0] rounded overflow-hidden"},e.createElement("div",{className:s("h-full rounded transition-all duration-500 ease-out",o[p].bg),style:{width:`${l}%`},role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${t.label}: ${l}%`})))})))};u.propTypes={overall:r.number,categories:r.arrayOf(r.shape({label:r.string.isRequired,value:r.number.isRequired}))};u.__docgenInfo={description:"",methods:[],displayName:"LeapReadinessGauge",props:{overall:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},categories:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"number",required:!0}}}},required:!1}}};const R={title:"Components/LeapReadinessGauge",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A readiness gauge that displays an overall readiness percentage with a progress bar and optional category-level breakdowns.\n\n### Import\n```jsx\nimport { LeapReadinessGauge } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{overall:{control:{type:"range",min:0,max:100}}}},i={args:{overall:78,categories:[{label:"Leadership",value:92},{label:"Communication",value:74},{label:"Training",value:65},{label:"Technology",value:81}]}},m={args:{overall:31,categories:[{label:"Leadership",value:45},{label:"Communication",value:28},{label:"Training",value:18},{label:"Technology",value:35}]}};var b,v,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    overall: 78,
    categories: [{
      label: 'Leadership',
      value: 92
    }, {
      label: 'Communication',
      value: 74
    }, {
      label: 'Training',
      value: 65
    }, {
      label: 'Technology',
      value: 81
    }]
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,h,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    overall: 31,
    categories: [{
      label: 'Leadership',
      value: 45
    }, {
      label: 'Communication',
      value: 28
    }, {
      label: 'Training',
      value: 18
    }, {
      label: 'Technology',
      value: 35
    }]
  }
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const L=["Default","LowReadiness"];export{i as Default,m as LowReadiness,L as __namedExportsOrder,R as default};
