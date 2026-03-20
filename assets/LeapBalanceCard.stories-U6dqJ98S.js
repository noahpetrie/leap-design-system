import{R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as N}from"./utils-C8nBGPD0.js";const d=({leaveType:w,used:c,total:a,unit:i="days",...E})=>{const S=a-c,l=a>0?c/a*100:0,k=l>=80;return e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-[1rem]",style:{backgroundColor:"var(--cds-layer, #ffffff)"},...E},e.createElement("div",{className:"flex justify-between items-baseline mb-[0.75rem]"},e.createElement("span",{className:"text-[0.875rem] leading-[1.125rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)]"},w),e.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252]"},S," ",i," remaining")),e.createElement("div",{className:"h-2 bg-[#e0e0e0] rounded overflow-hidden mb-[0.5rem]"},e.createElement("div",{className:N("h-full rounded transition-[width] duration-300 ease-out",k?"bg-[#da1e28]":"bg-[#0c8c5e]"),style:{width:`${Math.min(l,100)}%`}})),e.createElement("div",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] flex justify-between text-[#525252]"},e.createElement("span",null,c," ",i," used"),e.createElement("span",null,a," ",i," total")))};d.propTypes={leaveType:r.string.isRequired,used:r.number.isRequired,total:r.number.isRequired,unit:r.oneOf(["days","hours"])};d.__docgenInfo={description:"",methods:[],displayName:"LeapBalanceCard",props:{unit:{defaultValue:{value:"'days'",computed:!1},description:"",type:{name:"enum",value:[{value:"'days'",computed:!1},{value:"'hours'",computed:!1}]},required:!1},leaveType:{description:"",type:{name:"string"},required:!0},used:{description:"",type:{name:"number"},required:!0},total:{description:"",type:{name:"number"},required:!0}}};const C={title:"Components/LeapBalanceCard",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Shows a leave balance summary card with a progress bar indicating how much of a leave type (e.g. Vacation, Sick Leave) has been used versus the total allocation.\n\n### Import\n```jsx\nimport { LeapBalanceCard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},s={args:{leaveType:"Vacation",used:8,total:20,unit:"days"}},t={args:{leaveType:"Sick Leave",used:2,total:10,unit:"days"}},n={args:{leaveType:"Personal",used:4,total:5,unit:"days"}},o={args:{leaveType:"Vacation",used:18,total:20,unit:"days"}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leaveType: 'Vacation',
    used: 8,
    total: 20,
    unit: 'days'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var y,g,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    leaveType: 'Sick Leave',
    used: 2,
    total: 10,
    unit: 'days'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    leaveType: 'Personal',
    used: 4,
    total: 5,
    unit: 'days'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,L,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    leaveType: 'Vacation',
    used: 18,
    total: 20,
    unit: 'days'
  }
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const P=["Vacation","SickLeave","Personal","LowBalance"];export{o as LowBalance,n as Personal,t as SickLeave,s as Vacation,P as __namedExportsOrder,C as default};
