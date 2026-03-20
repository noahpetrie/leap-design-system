import{R as e}from"./index-C5e9SFkp.js";import{P as s}from"./index-Cv3U8xn7.js";import{C as b}from"./bucket-2-sTaChbhW.js";import"./Icon-IPhGtQ88.js";const o=({holidayName:f,date:h,daysUntil:a,onDismiss:i,...N})=>e.createElement("div",{className:"flex items-center gap-[0.75rem] bg-[#f0faf5] border border-[#c6e8d9] rounded-[4px] px-[1rem] py-[0.75rem]",...N},e.createElement("div",{className:"text-[#0c8c5e] shrink-0"},e.createElement(b,{size:20})),e.createElement("div",{className:"flex flex-col flex-1"},e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#161616]"},f),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},h,a!==void 0&&` — ${a===0?"Today":`in ${a} day${a!==1?"s":""}`}`)),i&&e.createElement("button",{className:"bg-transparent border-none text-[20px] text-[#525252] cursor-pointer p-[0.25rem] leading-none hover:text-[#161616]",onClick:i,"aria-label":"Dismiss"},"×"));o.propTypes={holidayName:s.string.isRequired,date:s.string.isRequired,daysUntil:s.number,onDismiss:s.func};o.__docgenInfo={description:"",methods:[],displayName:"LeapHolidayBanner",props:{holidayName:{description:"",type:{name:"string"},required:!0},date:{description:"",type:{name:"string"},required:!0},daysUntil:{description:"",type:{name:"number"},required:!1},onDismiss:{description:"",type:{name:"func"},required:!1}}};const U={title:"Components/LeapHolidayBanner",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A dismissible banner that displays an upcoming or current holiday with its date and a countdown in days.\n\n### Import\n```jsx\nimport { LeapHolidayBanner } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onDismiss:{action:"dismissed"}}},r={args:{holidayName:"Victoria Day",date:"Monday, May 19, 2026",daysUntil:5}},n={args:{holidayName:"Canada Day",date:"Wednesday, July 1, 2026",daysUntil:0}},t={args:{holidayName:"Thanksgiving",date:"Monday, October 12, 2026",daysUntil:14,onDismiss:void 0}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    holidayName: 'Victoria Day',
    date: 'Monday, May 19, 2026',
    daysUntil: 5
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    holidayName: 'Canada Day',
    date: 'Wednesday, July 1, 2026',
    daysUntil: 0
  }
}`,...(y=(l=n.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    holidayName: 'Thanksgiving',
    date: 'Monday, October 12, 2026',
    daysUntil: 14,
    onDismiss: undefined
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const k=["Upcoming","Today","NoDismiss"];export{t as NoDismiss,n as Today,r as Upcoming,k as __namedExportsOrder,U as default};
