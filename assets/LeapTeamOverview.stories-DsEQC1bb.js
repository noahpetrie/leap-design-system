import{R as e}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";const c=t=>t.split(" ").map(l=>l[0]).join("").toUpperCase().slice(0,2),o=({members:t=[],title:l="Team today",...b})=>{const i=t.filter(a=>a.onLeave),p=t.filter(a=>!a.onLeave);return e.createElement("div",{className:"rounded border border-[#e0e0e0] bg-[#f4f4f4] p-4",...b},e.createElement("div",{className:"flex items-baseline justify-between mb-4"},e.createElement("span",{className:"text-base font-semibold text-[#161616]"},l),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252]"},p.length,"/",t.length," available")),i.length>0&&e.createElement("div",{className:"mb-3"},e.createElement("span",{className:"block text-[12px] tracking-[0.32px] text-[#525252] mb-2"},"On leave"),e.createElement("div",{className:"flex flex-wrap gap-2"},i.map((a,m)=>e.createElement("div",{key:m,className:"flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1f1] text-[12px] font-semibold text-[#da1e28] opacity-80 cursor-default",title:`${a.name} — ${a.leaveType||"Leave"}`},c(a.name))))),e.createElement("div",null,e.createElement("span",{className:"block text-[12px] tracking-[0.32px] text-[#525252] mb-2"},"Available"),e.createElement("div",{className:"flex flex-wrap gap-2"},p.map((a,m)=>e.createElement("div",{key:m,className:"flex h-9 w-9 items-center justify-center rounded-full bg-[#f0faf5] text-[12px] font-semibold text-[#0c8c5e] cursor-default",title:a.name},c(a.name))))))};o.propTypes={title:n.string,members:n.arrayOf(n.shape({name:n.string.isRequired,onLeave:n.bool,leaveType:n.string})).isRequired};o.__docgenInfo={description:"",methods:[],displayName:"LeapTeamOverview",props:{members:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},onLeave:{name:"bool",required:!1},leaveType:{name:"string",required:!1}}}},required:!1},title:{defaultValue:{value:'"Team today"',computed:!1},description:"",type:{name:"string"},required:!1}}};const h={title:"Components/LeapTeamOverview",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A team availability overview card showing avatar initials grouped by on-leave and available status with a count summary.\n\n### Import\n```jsx\nimport { LeapTeamOverview } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},s={args:{members:[{name:"Sarah Chen",onLeave:!0,leaveType:"Vacation"},{name:"James Wilson",onLeave:!0,leaveType:"Sick Leave"},{name:"Priya Patel",onLeave:!1},{name:"Alex Moreau",onLeave:!1},{name:"Dana Kim",onLeave:!1},{name:"Ravi Kumar",onLeave:!1},{name:"Maria Santos",onLeave:!1}]}},r={args:{members:[{name:"Sarah Chen"},{name:"James Wilson"},{name:"Priya Patel"}]}};var v,d,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    members: [{
      name: 'Sarah Chen',
      onLeave: true,
      leaveType: 'Vacation'
    }, {
      name: 'James Wilson',
      onLeave: true,
      leaveType: 'Sick Leave'
    }, {
      name: 'Priya Patel',
      onLeave: false
    }, {
      name: 'Alex Moreau',
      onLeave: false
    }, {
      name: 'Dana Kim',
      onLeave: false
    }, {
      name: 'Ravi Kumar',
      onLeave: false
    }, {
      name: 'Maria Santos',
      onLeave: false
    }]
  }
}`,...(f=(d=s.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var u,x,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    members: [{
      name: 'Sarah Chen'
    }, {
      name: 'James Wilson'
    }, {
      name: 'Priya Patel'
    }]
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const T=["Default","AllAvailable"];export{r as AllAvailable,s as Default,T as __namedExportsOrder,h as default};
