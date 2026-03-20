import{R as e}from"./index-C5e9SFkp.js";import{L as P,a as r}from"./LeapButton-z14B9pfi.js";import{T as F}from"./bucket-18-uUFb7_qM.js";import{A as _}from"./bucket-1-D3WwZguq.js";import{A as n}from"./bucket-0-BChVxR-Z.js";import{E as G}from"./bucket-6-BF5uQPP1.js";import{S as K}from"./bucket-16-DByjHX--.js";import{b as N}from"./bucket-7-1TImlwne.js";import"./index-Cv3U8xn7.js";import"./utils-C8nBGPD0.js";import"./Icon-IPhGtQ88.js";const Z={title:"Components/LeapButton",component:P,tags:["autodocs"],argTypes:{kind:{control:"select",options:["primary","secondary","tertiary","ghost","danger"]},size:{control:"select",options:["sm","md","lg","xl","2xl"]},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"A themed button wrapper around Carbon's Button component, supporting primary, secondary, tertiary, ghost, and danger variants with optional icons.\n\n### Import\n```jsx\nimport { LeapButton } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},a={args:{children:"Submit Request",kind:"primary"}},t={args:{children:"Cancel",kind:"secondary"}},o={args:{children:"Delete Request",kind:"danger",renderIcon:F}},s={args:{children:"New Request",kind:"primary",renderIcon:n}},d={args:{children:"View Details",kind:"ghost",renderIcon:_}},i={render:()=>e.createElement("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"}},e.createElement(r,{label:"Add",renderIcon:n,kind:"primary",size:"sm"}),e.createElement(r,{label:"Add",renderIcon:n,kind:"primary",size:"md"}),e.createElement(r,{label:"Add",renderIcon:n,kind:"primary",size:"lg"}))},c={render:()=>e.createElement("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"}},e.createElement(r,{label:"Edit",renderIcon:G,kind:"primary"}),e.createElement(r,{label:"Settings",renderIcon:K,kind:"secondary"}),e.createElement(r,{label:"Filter",renderIcon:N,kind:"tertiary"}),e.createElement(r,{label:"Add",renderIcon:n,kind:"ghost"}),e.createElement(r,{label:"Delete",renderIcon:F,kind:"danger"}))},l={render:()=>e.createElement(r,{label:"Add",renderIcon:n,kind:"primary",disabled:!0})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Submit Request',
    kind: 'primary'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,I,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    kind: 'secondary'
  }
}`,...(y=(I=t.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var k,h,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Delete Request',
    kind: 'danger',
    renderIcon: TrashCan
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var A,B,E;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'New Request',
    kind: 'primary',
    renderIcon: Add
  }
}`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var S,L,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'View Details',
    kind: 'ghost',
    renderIcon: ArrowRight
  }
}`,...(f=(L=d.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var D,R,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="sm" />
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="md" />
      <LeapIconButton label="Add" renderIcon={Add} kind="primary" size="lg" />
    </div>
}`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var w,C,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <LeapIconButton label="Edit" renderIcon={Edit} kind="primary" />
      <LeapIconButton label="Settings" renderIcon={Settings} kind="secondary" />
      <LeapIconButton label="Filter" renderIcon={Filter} kind="tertiary" />
      <LeapIconButton label="Add" renderIcon={Add} kind="ghost" />
      <LeapIconButton label="Delete" renderIcon={TrashCan} kind="danger" />
    </div>
}`,...(v=(C=c.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,q,T;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <LeapIconButton label="Add" renderIcon={Add} kind="primary" disabled />
}`,...(T=(q=l.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};const $=["Primary","Secondary","Danger","WithIcon","Ghost","IconButtonPrimary","IconButtonKinds","IconButtonDisabled"];export{o as Danger,d as Ghost,l as IconButtonDisabled,c as IconButtonKinds,i as IconButtonPrimary,a as Primary,t as Secondary,s as WithIcon,$ as __namedExportsOrder,Z as default};
