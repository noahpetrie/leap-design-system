import{r as y,R as e}from"./index-C5e9SFkp.js";import{P as i}from"./index-Cv3U8xn7.js";import{c as s}from"./utils-C8nBGPD0.js";const S={"high-low":{label:"Keep Satisfied",row:0,col:0},"high-high":{label:"Manage Closely",row:0,col:1},"low-low":{label:"Monitor",row:1,col:0},"low-high":{label:"Keep Informed",row:1,col:1}},L={"high-low":"bg-[rgba(241,194,27,0.08)]","high-high":"bg-[rgba(12,140,94,0.08)]","low-low":"bg-[rgba(141,141,141,0.06)]","low-high":"bg-[rgba(0,67,206,0.06)]"},o={positive:"bg-[#0c8c5e]",neutral:"bg-[#8d8d8d]",negative:"bg-[#da1e28]"},p=({stakeholders:v=[]})=>{const[w,l]=y.useState(null),b=(n,a)=>`${n}-${a}`,E=(n,a)=>v.filter(r=>r.influence===n&&r.interest===a);return e.createElement("div",{className:"flex flex-col gap-3"},e.createElement("div",{className:"grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_auto]"},e.createElement("div",{className:"row-start-1 col-start-1 flex flex-col justify-between items-center pr-2 relative"},e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"High"),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"Low")),e.createElement("div",{className:"row-start-1 col-start-2 grid grid-cols-2 grid-rows-2 gap-[2px] border border-[#e0e0e0] rounded overflow-hidden min-h-[20rem]"},[{influence:"high",interest:"low"},{influence:"high",interest:"high"},{influence:"low",interest:"low"},{influence:"low",interest:"high"}].map(({influence:n,interest:a})=>{const r=b(n,a),N=S[r],k=E(n,a);return e.createElement("div",{key:r,className:s("flex flex-col p-3 min-h-[10rem] relative",L[r])},e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#161616] mb-2"},N.label),e.createElement("div",{className:"flex flex-wrap gap-2 items-start"},k.map(t=>e.createElement("div",{key:t.name,className:"relative inline-flex",onMouseEnter:()=>l(t.name),onMouseLeave:()=>l(null),onFocus:()=>l(t.name),onBlur:()=>l(null)},e.createElement("div",{className:s("w-4 h-4 rounded-full border-2 border-white cursor-default transition-transform shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:scale-125 focus:scale-125 focus:outline-none",o[t.sentiment||"neutral"]),role:"img","aria-label":`${t.name}: ${t.sentiment} sentiment`,tabIndex:0}),w===t.name&&e.createElement("div",{className:"absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 bg-[#1a1a18] text-white text-[12px] tracking-[0.32px] px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1a1a18]"},t.name)))))})),e.createElement("div",{className:"row-start-2 col-start-2 flex justify-between pt-1"},e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"Low"),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"High")),e.createElement("div",{className:"row-start-3 col-start-2 text-center pt-1"},e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#1a1a18]"},"Interest"))),e.createElement("div",{className:"flex gap-4 justify-center"},e.createElement("div",{className:"flex items-center gap-1"},e.createElement("span",{className:s("w-2.5 h-2.5 rounded-full inline-block",o.positive)}),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"Positive")),e.createElement("div",{className:"flex items-center gap-1"},e.createElement("span",{className:s("w-2.5 h-2.5 rounded-full inline-block",o.neutral)}),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"Neutral")),e.createElement("div",{className:"flex items-center gap-1"},e.createElement("span",{className:s("w-2.5 h-2.5 rounded-full inline-block",o.negative)}),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"Negative"))))};p.propTypes={stakeholders:i.arrayOf(i.shape({name:i.string.isRequired,influence:i.oneOf(["high","low"]).isRequired,interest:i.oneOf(["high","low"]).isRequired,sentiment:i.oneOf(["positive","neutral","negative"])}))};p.__docgenInfo={description:"",methods:[],displayName:"LeapStakeholderMap",props:{stakeholders:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},influence:{name:"enum",value:[{value:"'high'",computed:!1},{value:"'low'",computed:!1}],required:!0},interest:{name:"enum",value:[{value:"'high'",computed:!1},{value:"'low'",computed:!1}],required:!0},sentiment:{name:"enum",value:[{value:"'positive'",computed:!1},{value:"'neutral'",computed:!1},{value:"'negative'",computed:!1}],required:!1}}}},required:!1}}};const C={title:"Components/LeapStakeholderMap",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A four-quadrant influence/interest stakeholder map that plots stakeholders with sentiment-colored indicators and tooltip details.\n\n### Import\n```jsx\nimport { LeapStakeholderMap } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},m={args:{stakeholders:[{name:"CEO - Sarah Chen",influence:"high",interest:"high",sentiment:"positive"},{name:"CFO - James Park",influence:"high",interest:"low",sentiment:"neutral"},{name:"VP Engineering - Maria Lopez",influence:"high",interest:"high",sentiment:"positive"},{name:"HR Director - David Kim",influence:"low",interest:"high",sentiment:"positive"},{name:"IT Manager - Alex Turner",influence:"low",interest:"high",sentiment:"negative"},{name:"Legal Counsel - Priya Sharma",influence:"high",interest:"low",sentiment:"neutral"},{name:"Facilities Lead - Tom Nguyen",influence:"low",interest:"low",sentiment:"neutral"},{name:"Union Rep - Rachel Adams",influence:"low",interest:"low",sentiment:"negative"}]}},c={args:{stakeholders:[{name:"Executive Sponsor",influence:"high",interest:"high",sentiment:"positive"},{name:"Department Head",influence:"high",interest:"low",sentiment:"neutral"},{name:"End User Group",influence:"low",interest:"high",sentiment:"negative"}]}};var u,d,h;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    stakeholders: [{
      name: 'CEO - Sarah Chen',
      influence: 'high',
      interest: 'high',
      sentiment: 'positive'
    }, {
      name: 'CFO - James Park',
      influence: 'high',
      interest: 'low',
      sentiment: 'neutral'
    }, {
      name: 'VP Engineering - Maria Lopez',
      influence: 'high',
      interest: 'high',
      sentiment: 'positive'
    }, {
      name: 'HR Director - David Kim',
      influence: 'low',
      interest: 'high',
      sentiment: 'positive'
    }, {
      name: 'IT Manager - Alex Turner',
      influence: 'low',
      interest: 'high',
      sentiment: 'negative'
    }, {
      name: 'Legal Counsel - Priya Sharma',
      influence: 'high',
      interest: 'low',
      sentiment: 'neutral'
    }, {
      name: 'Facilities Lead - Tom Nguyen',
      influence: 'low',
      interest: 'low',
      sentiment: 'neutral'
    }, {
      name: 'Union Rep - Rachel Adams',
      influence: 'low',
      interest: 'low',
      sentiment: 'negative'
    }]
  }
}`,...(h=(d=m.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,f,x;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    stakeholders: [{
      name: 'Executive Sponsor',
      influence: 'high',
      interest: 'high',
      sentiment: 'positive'
    }, {
      name: 'Department Head',
      influence: 'high',
      interest: 'low',
      sentiment: 'neutral'
    }, {
      name: 'End User Group',
      influence: 'low',
      interest: 'high',
      sentiment: 'negative'
    }]
  }
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const T=["Default","FewStakeholders"];export{m as Default,c as FewStakeholders,T as __namedExportsOrder,C as default};
