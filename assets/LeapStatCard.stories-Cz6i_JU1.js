import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as k}from"./utils-C8nBGPD0.js";import{C as w}from"./bucket-3-iB7GZNH-.js";import{C as E}from"./bucket-2-sTaChbhW.js";import{a as P}from"./bucket-14-Cu0CEYyl.js";import{e as L}from"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";const N={up:"text-[#0c8c5e]",down:"text-[#da1e28]",neutral:"text-[#525252]"},o=({label:T,value:h,trend:i,trendDirection:q,icon:d,...S})=>e.createElement("div",{className:"flex items-center gap-3 border border-[#e0e0e0] rounded bg-[#f4f4f4] p-4",...S},d&&e.createElement("div",{className:"w-12 h-12 rounded-full bg-[#f0faf5] text-[#0c8c5e] flex items-center justify-center shrink-0"},e.createElement(d,{size:24})),e.createElement("div",{className:"flex flex-col flex-1"},e.createElement("span",{className:"text-base font-semibold text-[#161616]"},h),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},T)),i&&e.createElement("span",{className:k("text-[12px] tracking-[0.32px] font-semibold shrink-0",N[q||"neutral"])},i));o.propTypes={label:a.string.isRequired,value:a.oneOfType([a.string,a.number]).isRequired,trend:a.string,trendDirection:a.oneOf(["up","down","neutral"]),icon:a.elementType};o.__docgenInfo={description:"",methods:[],displayName:"LeapStatCard",props:{label:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0},trend:{description:"",type:{name:"string"},required:!1},trendDirection:{description:"",type:{name:"enum",value:[{value:"'up'",computed:!1},{value:"'down'",computed:!1},{value:"'neutral'",computed:!1}]},required:!1},icon:{description:"",type:{name:"elementType"},required:!1}}};const U={title:"Components/LeapStatCard",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A compact statistics card displaying a label, value, optional icon, and optional trend indicator with directional styling.\n\n### Import\n```jsx\nimport { LeapStatCard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{label:"Pending requests",value:12,icon:P,trend:"+3 this week",trendDirection:"up"}},t={args:{label:"Approved today",value:5,icon:w}},n={args:{label:"On leave today",value:3,icon:E,trend:"-1 vs yesterday",trendDirection:"down"}},s={args:{label:"Team members",value:24,icon:L}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Pending requests',
    value: 12,
    icon: Pending,
    trend: '+3 this week',
    trendDirection: 'up'
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Approved today',
    value: 5,
    icon: Checkmark
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'On leave today',
    value: 3,
    icon: Calendar,
    trend: '-1 vs yesterday',
    trendDirection: 'down'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Team members',
    value: 24,
    icon: UserMultiple
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const I=["PendingRequests","ApprovedToday","OnLeaveToday","TeamSize"];export{t as ApprovedToday,n as OnLeaveToday,r as PendingRequests,s as TeamSize,I as __namedExportsOrder,U as default};
