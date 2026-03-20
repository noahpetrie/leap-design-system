import{r as Z,R as a}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import{u as ee,c as u,_ as le}from"./usePrefix-DKvSngT5.js";import{u as ae}from"./useControllableState-D6UKwlX3.js";import{T as C}from"./Text-CpAClzUE.js";var w;function W({"aria-labelledby":r,className:h,defaultToggled:T=!1,disabled:s=!1,hideLabel:o=!1,id:n,labelA:_="Off",labelB:v="On",labelText:t,onClick:i,onToggle:y,readOnly:O,size:j="md",toggled:F,...M}){const l=ee(),d=Z.useRef(null),[c,U]=ae({value:F,onChange:y,defaultValue:T});function q(g){O||U(!c),i&&i(g)}const A=j==="sm",G=o?t:c?v:_,H=!(o&&!t),J=t?"label":"div",K=u(`${l}--toggle`,{[`${l}--toggle--disabled`]:s,[`${l}--toggle--readonly`]:O},h),Q=u(`${l}--toggle__label-text`,{[`${l}--visually-hidden`]:o}),X=u(`${l}--toggle__appearance`,{[`${l}--toggle__appearance--sm`]:A}),Y=u(`${l}--toggle__switch`,{[`${l}--toggle__switch--checked`]:c}),E=`${n}_label`;return a.createElement("div",{className:K,onClick:t?void 0:g=>{d.current&&g.target!==d.current&&!s&&(q(g),d.current.focus())}},a.createElement("button",le({},M,{ref:d,id:n,className:`${l}--toggle__button`,role:"switch",type:"button","aria-checked":c,"aria-labelledby":r??(t?E:void 0),disabled:s,onClick:q})),a.createElement(J,{id:E,htmlFor:r?void 0:n,className:`${l}--toggle__label`},t&&a.createElement(C,{className:Q},t),a.createElement("div",{className:X},a.createElement("div",{className:Y},A&&!O&&a.createElement("svg",{"aria-hidden":"true",focusable:"false",className:`${l}--toggle__check`,width:"6px",height:"5px",viewBox:"0 0 6 5"},w||(w=a.createElement("path",{d:"M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z"})))),H&&a.createElement(C,{className:`${l}--toggle__text`,"aria-hidden":"true"},G))))}W.propTypes={"aria-labelledby":e.string,className:e.string,defaultToggled:e.bool,disabled:e.bool,hideLabel:e.bool,id:e.string.isRequired,labelA:e.node,labelB:e.node,labelText:e.string,onClick:e.func,onToggle:e.func,readOnly:e.bool,size:e.oneOf(["sm","md"]),toggled:e.bool};const x=({id:r,labelText:h,labelA:T="Off",labelB:s="On",size:o="md",disabled:n=!1,toggled:_,defaultToggled:v=!1,onToggle:t,hideLabel:i=!1,...y})=>a.createElement("div",{style:{"--cds-support-success":"#0c8c5e"},...y},a.createElement(W,{id:r,labelText:h,labelA:T,labelB:s,size:o,disabled:n,toggled:_,defaultToggled:v,onToggle:t,hideLabel:i}));x.propTypes={id:e.string.isRequired,labelText:e.string.isRequired,labelA:e.string,labelB:e.string,size:e.oneOf(["sm","md"]),disabled:e.bool,toggled:e.bool,defaultToggled:e.bool,onToggle:e.func,hideLabel:e.bool};x.__docgenInfo={description:"",methods:[],displayName:"LeapToggle",props:{labelA:{defaultValue:{value:"'Off'",computed:!1},description:"Text for the off state",type:{name:"string"},required:!1},labelB:{defaultValue:{value:"'On'",computed:!1},description:"Text for the on state",type:{name:"string"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Toggle size",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the toggle is disabled",type:{name:"bool"},required:!1},defaultToggled:{defaultValue:{value:"false",computed:!1},description:"Default toggled state (uncontrolled)",type:{name:"bool"},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},description:"Whether to visually hide the label",type:{name:"bool"},required:!1},id:{description:"Unique identifier for the toggle",type:{name:"string"},required:!0},labelText:{description:"Label text for the toggle",type:{name:"string"},required:!0},toggled:{description:"Controlled toggled state",type:{name:"bool"},required:!1},onToggle:{description:"Callback when toggled",type:{name:"func"},required:!1}}};const ie={title:"Components/LeapToggle",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"A toggle switch built on the Carbon Toggle, with configurable on/off labels, size, and controlled or uncontrolled state.\n\n### Import\n```jsx\nimport { LeapToggle } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{size:{control:"select",options:["sm","md"]},onToggle:{action:"toggled"}}},p={args:{id:"leap-toggle-default",labelText:"Auto-approve leave requests",labelA:"Off",labelB:"On"}},f={args:{id:"leap-toggle-small",labelText:"Email notifications",labelA:"Off",labelB:"On",size:"sm"}},m={args:{id:"leap-toggle-on",labelText:"Show calendar view",labelA:"Off",labelB:"On",defaultToggled:!0}},b={args:{id:"leap-toggle-disabled",labelText:"Admin only setting",labelA:"Off",labelB:"On",disabled:!0}};var $,B,S;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: 'leap-toggle-default',
    labelText: 'Auto-approve leave requests',
    labelA: 'Off',
    labelB: 'On'
  }
}`,...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var L,N,k;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: 'leap-toggle-small',
    labelText: 'Email notifications',
    labelA: 'Off',
    labelB: 'On',
    size: 'sm'
  }
}`,...(k=(N=f.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,D,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: 'leap-toggle-on',
    labelText: 'Show calendar view',
    labelA: 'Off',
    labelB: 'On',
    defaultToggled: true
  }
}`,...(V=(D=m.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,I,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    id: 'leap-toggle-disabled',
    labelText: 'Admin only setting',
    labelA: 'Off',
    labelB: 'On',
    disabled: true
  }
}`,...(P=(I=b.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const de=["Default","Small","DefaultOn","Disabled"];export{p as Default,m as DefaultOn,b as Disabled,f as Small,de as __namedExportsOrder,ie as default};
