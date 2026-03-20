import{R as t}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{C as D}from"./Checkbox-DgcUeuEb.js";import"./Text-CpAClzUE.js";import"./deprecate-wUyRZ4Kw.js";import"./useId-BCI3fkL9.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./noopFn-g4z370MD.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";import"./utils-B-HSZv_z.js";import"./bucket-20-D0WIoklM.js";const r=({id:C,labelText:k,checked:y,defaultChecked:T,onChange:E,disabled:q,...L})=>t.createElement("div",{style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e"},...L},t.createElement(D,{id:C,labelText:k,checked:y,defaultChecked:T,onChange:E,disabled:q}));r.propTypes={id:e.string.isRequired,labelText:e.string.isRequired,checked:e.bool,defaultChecked:e.bool,onChange:e.func,disabled:e.bool};r.__docgenInfo={description:"",methods:[],displayName:"LeapCheckbox",props:{id:{description:"",type:{name:"string"},required:!0},labelText:{description:"",type:{name:"string"},required:!0},checked:{description:"",type:{name:"bool"},required:!1},defaultChecked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};const X={title:"Components/LeapCheckbox",component:r,tags:["autodocs"],argTypes:{onChange:{action:"changed"}},parameters:{docs:{description:{component:"A checkbox input component wrapping Carbon's Checkbox with support for controlled and uncontrolled states, labels, and disabled mode.\n\n### Import\n```jsx\nimport { LeapCheckbox } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},o={args:{id:"cb-1",labelText:"Include weekends"}},a={args:{id:"cb-2",labelText:"Notify manager",defaultChecked:!0}},i={args:{id:"cb-3",labelText:"Admin only",disabled:!0}},s={render:()=>t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"8px"}},t.createElement(r,{id:"opt-1",labelText:"Email notification",defaultChecked:!0}),t.createElement(r,{id:"opt-2",labelText:"Slack notification"}),t.createElement(r,{id:"opt-3",labelText:"Calendar sync",defaultChecked:!0}))};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'cb-1',
    labelText: 'Include weekends'
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'cb-2',
    labelText: 'Notify manager',
    defaultChecked: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,b,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'cb-3',
    labelText: 'Admin only',
    disabled: true
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <LeapCheckbox id="opt-1" labelText="Email notification" defaultChecked />
      <LeapCheckbox id="opt-2" labelText="Slack notification" />
      <LeapCheckbox id="opt-3" labelText="Calendar sync" defaultChecked />
    </div>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Y=["Default","Checked","Disabled","Group"];export{a as Checked,o as Default,i as Disabled,s as Group,Y as __namedExportsOrder,X as default};
