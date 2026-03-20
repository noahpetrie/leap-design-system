import{R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";const B=a=>a.split(" ").map(l=>l[0]).join("").toUpperCase().slice(0,2),i=({name:a,role:l,department:c,avatarUrl:m,leaveBalance:p,...b})=>e.createElement("div",{className:"flex items-center gap-4 rounded border border-[#e0e0e0] bg-[#f4f4f4] p-4",...b},e.createElement("div",{className:"flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f0faf5] text-[14px] font-semibold tracking-[0.16px] text-[#0c8c5e]"},m?e.createElement("img",{src:m,alt:a,className:"h-full w-full object-cover"}):e.createElement("span",null,B(a))),e.createElement("div",{className:"flex flex-1 flex-col gap-0.5"},e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#161616]"},a),e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#525252]"},l),c&&e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},c)),p!==void 0&&e.createElement("div",{className:"flex flex-shrink-0 flex-col items-center"},e.createElement("span",{className:"text-[16px] font-semibold text-[#0c8c5e]"},p),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},"days left")));i.propTypes={name:r.string.isRequired,role:r.string.isRequired,department:r.string,avatarUrl:r.string,leaveBalance:r.number};i.__docgenInfo={description:"",methods:[],displayName:"LeapEmployeeCard",props:{name:{description:"",type:{name:"string"},required:!0},role:{description:"",type:{name:"string"},required:!0},department:{description:"",type:{name:"string"},required:!1},avatarUrl:{description:"",type:{name:"string"},required:!1},leaveBalance:{description:"",type:{name:"number"},required:!1}}};const q={title:"Components/LeapEmployeeCard",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Displays an employee profile card with avatar (image or initials), name, role, department, and an optional leave balance indicator.\n\n### Import\n```jsx\nimport { LeapEmployeeCard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},n={args:{name:"Sarah Chen",role:"Software Engineer",department:"Engineering",leaveBalance:12}},t={args:{name:"James Wilson",role:"Product Manager",department:"Product"}},s={args:{name:"Priya Patel",role:"Designer",leaveBalance:5}},o={args:{name:"Alexander Montgomery-Richards",role:"Senior Staff Engineer",department:"Platform Engineering",leaveBalance:18}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Chen',
    role: 'Software Engineer',
    department: 'Engineering',
    leaveBalance: 12
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,x,E;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'James Wilson',
    role: 'Product Manager',
    department: 'Product'
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,v,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'Priya Patel',
    role: 'Designer',
    leaveBalance: 5
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var h,P,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'Alexander Montgomery-Richards',
    role: 'Senior Staff Engineer',
    department: 'Platform Engineering',
    leaveBalance: 18
  }
}`,...(S=(P=o.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const D=["Default","NoBalance","NoDepartment","LongName"];export{n as Default,o as LongName,t as NoBalance,s as NoDepartment,D as __namedExportsOrder,q as default};
