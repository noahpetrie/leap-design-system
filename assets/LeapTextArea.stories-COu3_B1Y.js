import{R as i}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{T as q}from"./TextArea-boHorwPK.js";import"./deprecate-wUyRZ4Kw.js";import"./FormContext-BXuWO8ke.js";import"./getAnnouncement-DcRicnKu.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./useId-BCI3fkL9.js";import"./noopFn-g4z370MD.js";import"./Text-CpAClzUE.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";import"./utils-B-HSZv_z.js";import"./bucket-20-D0WIoklM.js";const o=({id:b,labelText:h,placeholder:x,value:y,onChange:T,rows:C,maxCount:s,disabled:v,...w})=>i.createElement("div",{style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e"},...w},i.createElement(q,{id:b,labelText:h,placeholder:x,value:y,onChange:T,rows:C,maxCount:s,disabled:v,enableCounter:!!s}));o.propTypes={id:e.string.isRequired,labelText:e.string.isRequired,placeholder:e.string,value:e.string,onChange:e.func,rows:e.number,maxCount:e.number,disabled:e.bool};o.__docgenInfo={description:"",methods:[],displayName:"LeapTextArea",props:{id:{description:"",type:{name:"string"},required:!0},labelText:{description:"",type:{name:"string"},required:!0},placeholder:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},rows:{description:"",type:{name:"number"},required:!1},maxCount:{description:"",type:{name:"number"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};const X={title:"Components/LeapTextArea",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A multi-line text input built on the Carbon TextArea, with optional character counter and configurable row count.\n\n### Import\n```jsx\nimport { LeapTextArea } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onChange:{action:"changed"}}},r={args:{id:"ta-1",labelText:"Change impact summary",placeholder:"Describe the expected impact on teams and processes...",rows:4}},t={args:{id:"ta-2",labelText:"Stakeholder communication brief",placeholder:"Draft a concise message for affected stakeholders...",rows:6,maxCount:500}},a={args:{id:"ta-3",labelText:"Approved change description",value:"Migrate finance team from legacy ERP to cloud-based platform. Phase 1 covers accounts payable and receivable modules with full training rollout.",disabled:!0,rows:4}};var n,p,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'ta-1',
    labelText: 'Change impact summary',
    placeholder: 'Describe the expected impact on teams and processes...',
    rows: 4
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'ta-2',
    labelText: 'Stakeholder communication brief',
    placeholder: 'Draft a concise message for affected stakeholders...',
    rows: 6,
    maxCount: 500
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'ta-3',
    labelText: 'Approved change description',
    value: 'Migrate finance team from legacy ERP to cloud-based platform. Phase 1 covers accounts payable and receivable modules with full training rollout.',
    disabled: true,
    rows: 4
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Y=["Default","WithCharCount","Disabled"];export{r as Default,a as Disabled,t as WithCharCount,Y as __namedExportsOrder,X as default};
