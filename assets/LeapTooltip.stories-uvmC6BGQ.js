import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{T,a as x,b as w}from"./index-CbrCmGzd.js";import{c as R}from"./bucket-10-Dc47-2iJ.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./deprecate-wUyRZ4Kw.js";import"./useId-BCI3fkL9.js";import"./Icon-IPhGtQ88.js";const r=({label:f,description:h,align:y,children:v,...b})=>e.createElement("div",{style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e"},...b},e.createElement(T,{align:y},e.createElement(x,{label:f},v||e.createElement(R,null)),e.createElement(w,null,e.createElement("p",null,h))));r.propTypes={label:t.string.isRequired,description:t.node.isRequired,align:t.oneOf(["top","bottom","left","right"]),children:t.node};r.defaultProps={align:"top"};r.__docgenInfo={description:"",methods:[],displayName:"LeapTooltip",props:{align:{defaultValue:{value:"'top'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"node"},required:!0},children:{description:"",type:{name:"node"},required:!1}}};const H={title:"Components/LeapTooltip",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A toggletip-based tooltip that displays descriptive text on click, with configurable alignment and an information icon trigger.\n\n### Import\n```jsx\nimport { LeapTooltip } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},o={args:{label:"Readiness score info",description:"The readiness score aggregates survey responses, training completion rates, and sponsor engagement metrics into a single 0-100 index.",align:"right"}},a={args:{label:"Adoption curve info",description:"Adoption curves compare actual usage data against the projected adoption trajectory defined during the planning phase.",align:"bottom"}},i={args:{label:"Impact levels explained",description:"High impact: fundamental change to daily workflows. Medium impact: moderate adjustments to existing processes. Low impact: minimal disruption with optional adoption.",align:"right"}};var n,s,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Readiness score info',
    description: 'The readiness score aggregates survey responses, training completion rates, and sponsor engagement metrics into a single 0-100 index.',
    align: "right"
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Adoption curve info',
    description: 'Adoption curves compare actual usage data against the projected adoption trajectory defined during the planning phase.',
    align: 'bottom'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Impact levels explained',
    description: 'High impact: fundamental change to daily workflows. Medium impact: moderate adjustments to existing processes. Low impact: minimal disruption with optional adoption.',
    align: "right"
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const M=["Default","Bottom","WithRichContent"];export{a as Bottom,o as Default,i as WithRichContent,M as __namedExportsOrder,H as default};
