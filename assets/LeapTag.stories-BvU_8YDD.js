import{R as e}from"./index-C5e9SFkp.js";import{L as a}from"./LeapTag-HSSAfvQR.js";import"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import"./Tag-IbOsagNL.js";import"./useId-BCI3fkL9.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./Text-CpAClzUE.js";import"./deprecate-wUyRZ4Kw.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";import"./utils-B-HSZv_z.js";import"./bucket-3-iB7GZNH-.js";const j={title:"Components/LeapTag",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A color-coded tag component built on Carbon Tag, supporting multiple color types, sizes, and an optional filterable close action.\n\n### Import\n```jsx\nimport { LeapTag } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onClose:{action:"closed"}}},r={render:()=>e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(a,{type:"green"},"On Track"),e.createElement(a,{type:"red"},"At Risk"),e.createElement(a,{type:"blue"},"In Review"),e.createElement(a,{type:"warm-gray"},"Archived"),e.createElement(a,{type:"cool-gray"},"Draft"),e.createElement(a,{type:"purple"},"Executive Sponsor"),e.createElement(a,{type:"teal"},"Change Champion"),e.createElement(a,{type:"cyan"},"Training Complete"))},t={render:()=>e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(a,{type:"green",size:"sm"},"Phase 1"),e.createElement(a,{type:"blue",size:"sm"},"Phase 2"),e.createElement(a,{type:"purple",size:"sm"},"Phase 3"))},p={render:o=>e.createElement("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"}},e.createElement(a,{type:"green",filter:!0,onClose:o.onClose},"Stakeholder aligned"),e.createElement(a,{type:"blue",filter:!0,onClose:o.onClose},"Comms sent"),e.createElement(a,{type:"teal",filter:!0,onClose:o.onClose},"Training scheduled"))};var s,l,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <LeapTag type="green">On Track</LeapTag>
      <LeapTag type="red">At Risk</LeapTag>
      <LeapTag type="blue">In Review</LeapTag>
      <LeapTag type="warm-gray">Archived</LeapTag>
      <LeapTag type="cool-gray">Draft</LeapTag>
      <LeapTag type="purple">Executive Sponsor</LeapTag>
      <LeapTag type="teal">Change Champion</LeapTag>
      <LeapTag type="cyan">Training Complete</LeapTag>
    </div>
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,m,g;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <LeapTag type="green" size="sm">Phase 1</LeapTag>
      <LeapTag type="blue" size="sm">Phase 2</LeapTag>
      <LeapTag type="purple" size="sm">Phase 3</LeapTag>
    </div>
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,d,y;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <LeapTag type="green" filter onClose={args.onClose}>Stakeholder aligned</LeapTag>
      <LeapTag type="blue" filter onClose={args.onClose}>Comms sent</LeapTag>
      <LeapTag type="teal" filter onClose={args.onClose}>Training scheduled</LeapTag>
    </div>
}`,...(y=(d=p.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const q=["AllTypes","Small","Filterable"];export{r as AllTypes,p as Filterable,t as Small,q as __namedExportsOrder,j as default};
