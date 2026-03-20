import{r as M,R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as i}from"./utils-C8nBGPD0.js";import{f as R,V as W}from"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";const A={sm:"h-8 px-4 pr-8",md:"h-10 px-4 pr-10",lg:"h-12 px-4 pr-10"},c=({value:N,onChange:L,placeholder:k="Enter password",label:u,helperText:m,invalidText:f,invalid:a=!1,size:C="md",disabled:s=!1,..._})=>{const[d,D]=M.useState(!1),O=()=>{s||D(j=>!j)};return e.createElement("div",{className:"flex flex-col gap-1",..._},u&&e.createElement("label",{className:i("text-[12px] tracking-[0.32px] mb-1",s?"text-[#8d8d8d]":"text-[#525252]")},u),e.createElement("div",{className:"relative flex items-center"},e.createElement("input",{type:d?"text":"password",className:i("w-full border-0 border-b text-[14px] tracking-[0.16px] bg-[#f4f4f4] text-[#161616] outline-none transition-colors","placeholder:text-[#a8a8a8]","focus:border-b-2 focus:border-b-[#0c8c5e]",a&&"border-b-2 border-b-[#da1e28] focus:border-b-[#da1e28]",s&&"bg-[#f4f4f4] text-[#8d8d8d] border-b-transparent cursor-not-allowed",!a&&!s&&"border-b-[#8d8d8d]",A[C]),value:N,onChange:L,placeholder:k,disabled:s,"aria-invalid":a||void 0}),e.createElement("button",{type:"button",className:i("absolute right-0 flex items-center justify-center w-10 h-full p-0 border-none bg-transparent cursor-pointer text-[#161616]","hover:text-[#096b48]","focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-[-2px]",s&&"text-[#8d8d8d] cursor-not-allowed"),onClick:O,disabled:s,"aria-label":d?"Hide password":"Show password"},d?e.createElement(R,{size:16}):e.createElement(W,{size:16}))),a&&f&&e.createElement("div",{className:"text-[12px] tracking-[0.32px] text-[#da1e28] mt-1"},f),!a&&m&&e.createElement("div",{className:"text-[12px] tracking-[0.32px] text-[#6f6f6f] mt-1"},m))};c.propTypes={value:r.string,onChange:r.func,placeholder:r.string,label:r.string,helperText:r.string,invalidText:r.string,invalid:r.bool,size:r.oneOf(["sm","md","lg"]),disabled:r.bool};c.__docgenInfo={description:"",methods:[],displayName:"LeapPasswordInput",props:{placeholder:{defaultValue:{value:"'Enter password'",computed:!1},description:"",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},label:{description:"",type:{name:"string"},required:!1},helperText:{description:"",type:{name:"string"},required:!1},invalidText:{description:"",type:{name:"string"},required:!1}}};const K={title:"Components/LeapPasswordInput",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"A password input with show/hide toggle, supporting validation states, helper text, and multiple sizes.\n\n### Import\n```jsx\nimport { LeapPasswordInput } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onChange:{action:"changed"}}},t={args:{placeholder:"Enter password"}},o={args:{label:"Password",placeholder:"Enter your password",helperText:"Must be at least 8 characters"}},l={args:{label:"Password",placeholder:"Enter password",invalid:!0,invalidText:"Password does not meet complexity requirements"}},n={args:{label:"Password",value:"supersecret",disabled:!0}},p={args:{label:"Password",placeholder:"Enter password",size:"sm"}};var g,b,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter password'
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,h,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters'
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,E,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    invalid: true,
    invalidText: 'Password does not meet complexity requirements'
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var q,S,I;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    value: 'supersecret',
    disabled: true
  }
}`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,V,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    size: 'sm'
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const Q=["Default","WithLabel","Invalid","Disabled","Small"];export{t as Default,n as Disabled,l as Invalid,p as Small,o as WithLabel,Q as __namedExportsOrder,K as default};
