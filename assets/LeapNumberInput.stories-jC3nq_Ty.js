import{R as g,r as Z}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{N as $}from"./NumberInput-DWVaMHXA.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./deprecate-wUyRZ4Kw.js";import"./useNormalizedInputProps-D8kxv_oQ.js";import"./Text-CpAClzUE.js";import"./bucket-20-D0WIoklM.js";import"./Icon-IPhGtQ88.js";import"./FormContext-BXuWO8ke.js";import"./clamp--00YEiB8.js";import"./useControllableState-D6UKwlX3.js";import"./documentLang-E105Y72C.js";import"./useId-BCI3fkL9.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./utils-B-HSZv_z.js";import"./bucket-0-BChVxR-Z.js";const y=g.forwardRef(function({id:O,label:U,value:n,onChange:r,min:i,max:s,step:o=1,helperText:j,invalidText:F,invalid:K=!1,size:Q="md",disabled:f=!1,readOnly:v=!1,className:H,...G},J){const X=[H].filter(Boolean).join(" "),Y=Z.useCallback(a=>{if(!(f||v)){if(a.key==="ArrowUp"){a.preventDefault();const t=(n??0)+o;(s===void 0||t<=s)&&(r==null||r(a,{value:t,direction:"up"}))}else if(a.key==="ArrowDown"){a.preventDefault();const t=(n??0)-o;(i===void 0||t>=i)&&(r==null||r(a,{value:t,direction:"down"}))}}},[n,o,i,s,f,v,r]);return g.createElement("div",{className:X||void 0,style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e","--cds-border-interactive":"#0c8c5e"},onKeyDown:Y},g.createElement($,{ref:J,id:O,label:U,value:n,onChange:r,min:i,max:s,step:o,helperText:j,invalidText:F,invalid:K,size:Q,disabled:f,readOnly:v,...G}))});y.propTypes={id:e.string.isRequired,label:e.string.isRequired,value:e.number,onChange:e.func,min:e.number,max:e.number,step:e.number,helperText:e.string,invalidText:e.string,invalid:e.bool,size:e.oneOf(["sm","md","lg"]),disabled:e.bool,readOnly:e.bool,className:e.string};y.__docgenInfo={description:"LeapNumberInput — A number stepper input with +/- buttons and Leap brand theming.",methods:[],displayName:"LeapNumberInput",props:{step:{defaultValue:{value:"1",computed:!1},description:"Increment/decrement step amount",type:{name:"number"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the input is in an invalid state",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Input size variant",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the input is disabled",type:{name:"bool"},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},description:"Whether the input is read-only",type:{name:"bool"},required:!1},id:{description:"Unique identifier for the input",type:{name:"string"},required:!0},label:{description:"Label text displayed above the input",type:{name:"string"},required:!0},value:{description:"Current numeric value",type:{name:"number"},required:!1},onChange:{description:"Change handler called with (event, { value, direction })",type:{name:"func"},required:!1},min:{description:"Minimum allowed value",type:{name:"number"},required:!1},max:{description:"Maximum allowed value",type:{name:"number"},required:!1},helperText:{description:"Helper text displayed below the input",type:{name:"string"},required:!1},invalidText:{description:"Text displayed when the input is in an invalid state",type:{name:"string"},required:!1},className:{description:"Additional CSS class",type:{name:"string"},required:!1}}};const De={title:"Components/LeapNumberInput",component:y,tags:["autodocs"],argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},invalid:{control:"boolean"},readOnly:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]}},parameters:{docs:{description:{component:"A number stepper input with +/- buttons, supporting min/max constraints, step increments, validation, and keyboard interaction. Use for numeric fields like quantities, scores, or thresholds.\n\n### Import\n```jsx\nimport { LeapNumberInput } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},l={args:{id:"number-default",label:"Quantity",value:10}},m={args:{id:"number-minmax",label:"Adoption score",value:50,min:0,max:100,helperText:"Value must be between 0 and 100"}},u={args:{id:"number-step",label:"Budget increment",value:25,step:5,min:0,max:200,helperText:"Increments of 5"}},p={args:{id:"number-sm",label:"Priority",value:1,min:1,max:5,size:"sm"}},d={args:{id:"number-lg",label:"Team capacity",value:20,min:1,max:500,size:"lg"}},c={args:{id:"number-invalid",label:"Target completion days",value:-5,min:0,invalid:!0,invalidText:"Value must be a positive number"}},b={args:{id:"number-disabled",label:"Fixed allocation",value:42,disabled:!0}};var x,h,q;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'number-default',
    label: 'Quantity',
    value: 10
  }
}`,...(q=(h=l.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var T,w,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'number-minmax',
    label: 'Adoption score',
    value: 50,
    min: 0,
    max: 100,
    helperText: 'Value must be between 0 and 100'
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,S,L;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'number-step',
    label: 'Budget increment',
    value: 25,
    step: 5,
    min: 0,
    max: 200,
    helperText: 'Increments of 5'
  }
}`,...(L=(S=u.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var D,V,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: 'number-sm',
    label: 'Priority',
    value: 1,
    min: 1,
    max: 5,
    size: 'sm'
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,W,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: 'number-lg',
    label: 'Team capacity',
    value: 20,
    min: 1,
    max: 500,
    size: 'lg'
  }
}`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var k,R,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: 'number-invalid',
    label: 'Target completion days',
    value: -5,
    min: 0,
    invalid: true,
    invalidText: 'Value must be a positive number'
  }
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var E,P,B;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'number-disabled',
    label: 'Fixed allocation',
    value: 42,
    disabled: true
  }
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Ve=["Default","WithMinMax","WithStep","Small","Large","Invalid","Disabled"];export{l as Default,b as Disabled,c as Invalid,d as Large,p as Small,m as WithMinMax,u as WithStep,Ve as __namedExportsOrder,De as default};
