import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as h}from"./utils-C8nBGPD0.js";const y=["Rare","Unlikely","Possible","Likely","Almost Certain"],b=["Negligible","Minor","Moderate","Major","Severe"],E=(m,l)=>{const s=m*l;return s>=15?"high":s>=7?"medium":"low"},R={low:"bg-[#0c8c5e]/[0.18]",medium:"bg-[#f1c21b]/25",high:"bg-[#da1e28]/[0.22]"},d=({risks:m=[],onRiskClick:l})=>{const s=(t,r)=>m.filter(i=>i.likelihood===t&&i.impact===r);return e.createElement("div",{className:"flex items-stretch gap-2"},e.createElement("div",{className:"flex items-center justify-center",style:{writingMode:"vertical-rl",transform:"rotate(180deg)"}},e.createElement("span",{className:"text-[14px] tracking-[0.02em] font-semibold text-[#1a1a18]"},"Likelihood")),e.createElement("div",{className:"grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto] flex-1"},e.createElement("div",{className:"row-start-1 col-start-1 flex flex-col"},[...y].reverse().map(t=>e.createElement("div",{key:t,className:"flex-1 flex items-center justify-end pr-2 text-[12px] tracking-[0.32px] text-[#525252] min-h-[3.5rem]"},t))),e.createElement("div",{className:"row-start-1 col-start-2 grid grid-cols-5 grid-rows-5 gap-[2px] border border-[#e0e0e0] rounded overflow-hidden"},[5,4,3,2,1].map(t=>[1,2,3,4,5].map(r=>{const i=s(t,r),v=E(t,r);return e.createElement("div",{key:`${t}-${r}`,className:h("relative flex flex-col items-center justify-center min-h-[3.5rem] min-w-[3.5rem] p-1 transition-opacity hover:opacity-85",R[v]),title:`Likelihood: ${t}, Impact: ${r}, Score: ${t*r}`},e.createElement("span",{className:"text-[0.625rem] text-[#525252] opacity-60"},t*r),i.length>0&&e.createElement("div",{className:"flex flex-wrap gap-[3px] justify-center mt-0.5"},i.map(o=>e.createElement("button",{key:o.id,className:"w-3 h-3 rounded-full bg-[#1a1a18] border-2 border-white cursor-pointer p-0 transition-transform hover:scale-[1.3] hover:shadow-[0_0_0_2px_#0c8c5e] focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-1",onClick:()=>l&&l(o),title:o.label,type:"button","aria-label":`Risk: ${o.label}`}))))}))),e.createElement("div",{className:"row-start-2 col-start-2 flex"},b.map(t=>e.createElement("div",{key:t,className:"flex-1 text-center pt-1 text-[12px] tracking-[0.32px] text-[#525252]"},t))),e.createElement("div",{className:"row-start-3 col-start-2 text-center pt-1"},e.createElement("span",{className:"text-[14px] tracking-[0.02em] font-semibold text-[#1a1a18]"},"Impact"))))};d.propTypes={risks:a.arrayOf(a.shape({id:a.oneOfType([a.string,a.number]).isRequired,label:a.string.isRequired,likelihood:a.oneOf([1,2,3,4,5]).isRequired,impact:a.oneOf([1,2,3,4,5]).isRequired})),onRiskClick:a.func};d.__docgenInfo={description:"",methods:[],displayName:"LeapRiskMatrix",props:{risks:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0},likelihood:{name:"enum",value:[{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1},{value:"5",computed:!1}],required:!0},impact:{name:"enum",value:[{value:"1",computed:!1},{value:"2",computed:!1},{value:"3",computed:!1},{value:"4",computed:!1},{value:"5",computed:!1}],required:!0}}}},required:!1},onRiskClick:{description:"",type:{name:"func"},required:!1}}};const _={title:"Components/LeapRiskMatrix",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"A 5x5 risk assessment matrix that plots risks by likelihood and impact, with color-coded cells indicating severity levels.\n\n### Import\n```jsx\nimport { LeapRiskMatrix } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onRiskClick:{action:"riskClicked"}}},n={args:{risks:[{id:1,label:"Data migration failure",likelihood:4,impact:5},{id:2,label:"Budget overrun",likelihood:3,impact:4},{id:3,label:"Stakeholder resistance",likelihood:5,impact:3},{id:4,label:"Skill gap",likelihood:2,impact:2},{id:5,label:"Vendor delay",likelihood:3,impact:3},{id:6,label:"Regulatory non-compliance",likelihood:1,impact:5}]}},c={args:{risks:[]}};var p,u,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    risks: [{
      id: 1,
      label: 'Data migration failure',
      likelihood: 4,
      impact: 5
    }, {
      id: 2,
      label: 'Budget overrun',
      likelihood: 3,
      impact: 4
    }, {
      id: 3,
      label: 'Stakeholder resistance',
      likelihood: 5,
      impact: 3
    }, {
      id: 4,
      label: 'Skill gap',
      likelihood: 2,
      impact: 2
    }, {
      id: 5,
      label: 'Vendor delay',
      likelihood: 3,
      impact: 3
    }, {
      id: 6,
      label: 'Regulatory non-compliance',
      likelihood: 1,
      impact: 5
    }]
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,k,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    risks: []
  }
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const C=["Default","Empty"];export{n as Default,c as Empty,C as __namedExportsOrder,_ as default};
