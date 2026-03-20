import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as l}from"./utils-C8nBGPD0.js";const m=({options:n,criteria:i})=>!n||!i||n.length===0||i.length===0?null:e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-4 max-w-[900px]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("div",{className:"overflow-x-auto"},e.createElement("table",{className:"w-full border-collapse"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"text-xs leading-4 tracking-[0.32px] font-semibold text-left p-3 px-4 text-[#525252] border-b-2 border-[var(--cds-border-subtle,#e0e0e0)] whitespace-nowrap"},"Criteria"),n.map(t=>e.createElement("th",{key:t.name,className:l("text-sm leading-[1.125rem] tracking-[0.16px] font-semibold text-center p-3 px-4 text-[var(--cds-text-primary,#161616)] border-b-2 border-[var(--cds-border-subtle,#e0e0e0)] align-bottom min-w-[140px]",t.recommended&&"bg-[#0c8c5e]/[0.06] border-b-[#0c8c5e]")},e.createElement("span",{className:"block"},t.name),t.recommended&&e.createElement("span",{className:"inline-block mt-1 px-2 py-px rounded-full bg-[#0c8c5e] text-white text-xs leading-4 tracking-[0.32px] font-semibold"},"Recommended"))))),e.createElement("tbody",null,i.map((t,b)=>e.createElement("tr",{key:t,style:b%2===0?{backgroundColor:"var(--cds-layer, #ffffff)"}:{backgroundColor:"var(--cds-layer-02, #f4f4f4)"}},e.createElement("td",{className:"text-sm leading-[1.125rem] tracking-[0.16px] p-3 px-4 text-[var(--cds-text-primary,#161616)] font-semibold whitespace-nowrap border-r border-[var(--cds-border-subtle,#e0e0e0)]"},t),n.map(r=>e.createElement("td",{key:`${r.name}-${t}`,className:l("text-sm leading-[1.125rem] tracking-[0.16px] p-3 px-4 text-center text-[#525252]",r.recommended&&"bg-[#0c8c5e]/[0.04]")},r.values[t]!==void 0?r.values[t]:"—"))))))));m.propTypes={options:a.arrayOf(a.shape({name:a.string.isRequired,values:a.object.isRequired,recommended:a.bool})).isRequired,criteria:a.arrayOf(a.string).isRequired};m.__docgenInfo={description:"",methods:[],displayName:"LeapComparisonTable",props:{options:{description:"Array of option objects with name, values map, and optional recommended flag",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},values:{name:"object",required:!0},recommended:{name:"bool",required:!1}}}},required:!0},criteria:{description:"Array of criteria strings used as row labels",type:{name:"arrayOf",value:{name:"string"}},required:!0}}};const T={title:"Components/LeapComparisonTable",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"A side-by-side comparison table that evaluates multiple options against a set of criteria, with optional recommended-option highlighting.\n\n### Import\n```jsx\nimport { LeapComparisonTable } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},o={args:{criteria:["Implementation Time","Cost Estimate","Risk Level","Stakeholder Impact","Training Required"],options:[{name:"Phased Rollout",recommended:!0,values:{"Implementation Time":"6 months","Cost Estimate":"$120K","Risk Level":"Low","Stakeholder Impact":"Medium","Training Required":"40 hours"}},{name:"Big Bang",values:{"Implementation Time":"3 months","Cost Estimate":"$95K","Risk Level":"High","Stakeholder Impact":"High","Training Required":"60 hours"}},{name:"Pilot Program",values:{"Implementation Time":"9 months","Cost Estimate":"$150K","Risk Level":"Very Low","Stakeholder Impact":"Low","Training Required":"20 hours"}}]}},s={args:{criteria:["Timeline","Budget","Team Size","Complexity","Success Rate"],options:[{name:"Option A: In-House",values:{Timeline:"4 months",Budget:"$80K","Team Size":"8 people",Complexity:"High","Success Rate":"72%"}},{name:"Option B: Vendor-Led",recommended:!0,values:{Timeline:"3 months",Budget:"$140K","Team Size":"4 internal + vendor",Complexity:"Medium","Success Rate":"89%"}}]}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    criteria: ['Implementation Time', 'Cost Estimate', 'Risk Level', 'Stakeholder Impact', 'Training Required'],
    options: [{
      name: 'Phased Rollout',
      recommended: true,
      values: {
        'Implementation Time': '6 months',
        'Cost Estimate': '$120K',
        'Risk Level': 'Low',
        'Stakeholder Impact': 'Medium',
        'Training Required': '40 hours'
      }
    }, {
      name: 'Big Bang',
      values: {
        'Implementation Time': '3 months',
        'Cost Estimate': '$95K',
        'Risk Level': 'High',
        'Stakeholder Impact': 'High',
        'Training Required': '60 hours'
      }
    }, {
      name: 'Pilot Program',
      values: {
        'Implementation Time': '9 months',
        'Cost Estimate': '$150K',
        'Risk Level': 'Very Low',
        'Stakeholder Impact': 'Low',
        'Training Required': '20 hours'
      }
    }]
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    criteria: ['Timeline', 'Budget', 'Team Size', 'Complexity', 'Success Rate'],
    options: [{
      name: 'Option A: In-House',
      values: {
        Timeline: '4 months',
        Budget: '$80K',
        'Team Size': '8 people',
        Complexity: 'High',
        'Success Rate': '72%'
      }
    }, {
      name: 'Option B: Vendor-Led',
      recommended: true,
      values: {
        Timeline: '3 months',
        Budget: '$140K',
        'Team Size': '4 internal + vendor',
        Complexity: 'Medium',
        'Success Rate': '89%'
      }
    }]
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["Default","TwoOptions"];export{o as Default,s as TwoOptions,y as __namedExportsOrder,T as default};
