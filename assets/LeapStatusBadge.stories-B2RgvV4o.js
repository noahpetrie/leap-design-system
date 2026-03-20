import{R as d}from"./index-C5e9SFkp.js";import{P as c}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{T as x}from"./Tag-IbOsagNL.js";import{h as z,i as E,c as F}from"./bucket-3-iB7GZNH-.js";import{a as R}from"./bucket-6-BF5uQPP1.js";import{a as q}from"./bucket-14-Cu0CEYyl.js";import"./useId-BCI3fkL9.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./Text-CpAClzUE.js";import"./deprecate-wUyRZ4Kw.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";import"./utils-B-HSZv_z.js";const i={approved:{label:"Approved",tagType:"green",Icon:F},denied:{label:"Denied",tagType:"red",Icon:E},pending:{label:"Pending",tagType:"warm-gray",Icon:q},cancelled:{label:"Cancelled",tagType:"cool-gray",Icon:R},active:{label:"Active",tagType:"teal",Icon:z}},p=({status:B,size:n="md",...L})=>{const o=i[B]||i.pending,{Icon:_}=o;return d.createElement(x,{type:o.tagType,size:n==="sm"?"sm":"md",...L},d.createElement(_,{size:n==="sm"?10:12,style:{marginRight:"4px"}}),o.label)};p.propTypes={status:c.oneOf(["approved","denied","pending","cancelled","active"]).isRequired,size:c.oneOf(["sm","md"])};p.__docgenInfo={description:"",methods:[],displayName:"LeapStatusBadge",props:{size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1}]},required:!1},status:{description:"",type:{name:"enum",value:[{value:"'approved'",computed:!1},{value:"'denied'",computed:!1},{value:"'pending'",computed:!1},{value:"'cancelled'",computed:!1},{value:"'active'",computed:!1}]},required:!0}}};const oe={title:"Components/LeapStatusBadge",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"A color-coded status badge with an icon, supporting approved, denied, pending, cancelled, and active states.\n\n### Import\n```jsx\nimport { LeapStatusBadge } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{status:{control:"select",options:["approved","denied","pending","cancelled","active"]},size:{control:"select",options:["sm","md"]}}},e={args:{status:"approved"}},a={args:{status:"denied"}},t={args:{status:"pending"}},s={args:{status:"cancelled"}},r={args:{status:"active"}};var m,l,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'approved'
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'denied'
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,T,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...(S=(T=t.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,I,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: 'cancelled'
  }
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var h,A,P;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: 'active'
  }
}`,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const pe=["Approved","Denied","Pending","Cancelled","Active"];export{r as Active,e as Approved,s as Cancelled,a as Denied,t as Pending,pe as __namedExportsOrder,oe as default};
