import{R as a}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{I as w,L as E}from"./InlineLoading-BDwIkcW4.js";import"./deprecate-wUyRZ4Kw.js";import"./bucket-6-BF5uQPP1.js";import"./Icon-IPhGtQ88.js";import"./bucket-3-iB7GZNH-.js";const o=({active:I,withOverlay:S,small:q,description:n,status:c,...d})=>c?a.createElement("div",{className:"leap-loading",style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e"},...d},a.createElement(w,{status:c,description:n})):a.createElement("div",{className:"leap-loading",style:{"--cds-interactive":"#0c8c5e","--cds-focus":"#0c8c5e"},...d},a.createElement(E,{active:I,withOverlay:S,small:q,description:n}));o.propTypes={active:e.bool,withOverlay:e.bool,small:e.bool,description:e.string,status:e.oneOf(["active","finished","error"])};o.defaultProps={active:!0,withOverlay:!1,small:!1,description:"Loading..."};o.__docgenInfo={description:"",methods:[],displayName:"LeapLoading",props:{active:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},withOverlay:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},description:{defaultValue:{value:"'Loading...'",computed:!1},description:"",type:{name:"string"},required:!1},status:{description:"",type:{name:"enum",value:[{value:"'active'",computed:!1},{value:"'finished'",computed:!1},{value:"'error'",computed:!1}]},required:!1}}};const F={title:"Components/LeapLoading",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A loading indicator that supports full-page spinners, overlay mode, and inline status indicators for active, finished, and error states.\n\n### Import\n```jsx\nimport { LeapLoading } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},t={args:{active:!0,description:"Loading change initiatives..."}},r={args:{status:"active",description:"Syncing stakeholder data..."}},s={args:{active:!0,withOverlay:!0,description:"Generating impact report..."}},i={args:{status:"finished",description:"Adoption metrics loaded"}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    active: true,
    description: 'Loading change initiatives...'
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,f,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'active',
    description: 'Syncing stakeholder data...'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,y,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    active: true,
    withOverlay: true,
    description: 'Generating impact report...'
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var L,O,b;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: 'finished',
    description: 'Adoption metrics loaded'
  }
}`,...(b=(O=i.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};const G=["Default","Inline","WithOverlay","Finished"];export{t as Default,i as Finished,r as Inline,s as WithOverlay,G as __namedExportsOrder,F as default};
