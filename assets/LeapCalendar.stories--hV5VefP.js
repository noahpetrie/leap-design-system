import{R as a}from"./index-C5e9SFkp.js";import{P as s}from"./index-Cv3U8xn7.js";import{c as M}from"./utils-C8nBGPD0.js";const V=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],q=["January","February","March","April","May","June","July","August","September","October","November","December"],O=(r,n)=>new Date(n,r+1,0).getDate(),_=(r,n)=>new Date(n,r,1).getDay(),C={Vacation:"bg-[#f0faf5]",approved:"bg-[#f0faf5]",Sick:"bg-[#edf5ff]",sick:"bg-[#edf5ff]",Personal:"bg-[#f6f2ff]",personal:"bg-[#f6f2ff]"},d=({month:r=new Date().getMonth(),year:n=new Date().getFullYear(),leaveDays:k=[],holidays:D=[],...E})=>{var u;const N=O(r,n),o=_(r,n),m={};k.forEach(e=>{const t=new Date(e.date).getDate();m[t]=e});const w=new Set(D.map(e=>new Date(e).getDate())),i=[];for(let e=0;e<o;e++)i.push(a.createElement("div",{key:`empty-${e}`,className:"aspect-square"}));for(let e=1;e<=N;e++){const t=m[e],p=w.has(e),S=(o+e-1)%7===0||(o+e-1)%7===6,y=t?t.status||t.type:null;i.push(a.createElement("div",{key:e,className:M("aspect-square flex flex-col items-center justify-center rounded cursor-default relative",S&&"bg-[#e0e0e0]",y&&C[y],p&&"bg-[#fff1f1]"),title:t?`${t.type}: ${t.status||""}`:p?"Holiday":""},a.createElement("span",{className:"text-[0.875rem] leading-[1.125rem] tracking-[0.16px] text-[var(--cds-text-primary,#161616)]"},e),t&&a.createElement("span",{className:"text-[9px] tracking-[0.32px] text-[#525252]"},(u=t.type)==null?void 0:u[0]),p&&!t&&a.createElement("span",{className:"text-[9px] tracking-[0.32px] text-[#525252]"},"H")))}return a.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded p-[1rem] max-w-[420px]",style:{backgroundColor:"var(--cds-layer, #ffffff)"},...E},a.createElement("div",{className:"text-[1rem] leading-[1.375rem] tracking-[0.16px] font-semibold text-[var(--cds-text-primary,#161616)] text-center mb-[0.75rem]"},q[r]," ",n),a.createElement("div",{className:"grid grid-cols-7 gap-0.5"},V.map(e=>a.createElement("div",{key:e,className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] text-center p-[0.25rem]"},e)),i),a.createElement("div",{className:"flex gap-[1rem] mt-[0.75rem] flex-wrap"},a.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] flex items-center gap-[0.25rem]"},a.createElement("span",{className:"w-2 h-2 rounded-full inline-block bg-[#0c8c5e]"})," Vacation"),a.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] flex items-center gap-[0.25rem]"},a.createElement("span",{className:"w-2 h-2 rounded-full inline-block bg-[#4589ff]"})," Sick"),a.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] flex items-center gap-[0.25rem]"},a.createElement("span",{className:"w-2 h-2 rounded-full inline-block bg-[#8a3ffc]"})," Personal"),a.createElement("span",{className:"text-[0.75rem] leading-[1rem] tracking-[0.32px] text-[#525252] flex items-center gap-[0.25rem]"},a.createElement("span",{className:"w-2 h-2 rounded-full inline-block bg-[#da1e28]"})," Holiday")))};d.propTypes={month:s.number,year:s.number,leaveDays:s.arrayOf(s.shape({date:s.string.isRequired,type:s.string.isRequired,status:s.string})),holidays:s.arrayOf(s.string)};d.__docgenInfo={description:"",methods:[],displayName:"LeapCalendar",props:{month:{defaultValue:{value:"new Date().getMonth()",computed:!0},description:"",type:{name:"number"},required:!1},year:{defaultValue:{value:"new Date().getFullYear()",computed:!0},description:"",type:{name:"number"},required:!1},leaveDays:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{date:{name:"string",required:!0},type:{name:"string",required:!0},status:{name:"string",required:!1}}}},required:!1},holidays:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1}}};const H={title:"Components/LeapCalendar",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"A monthly calendar grid that highlights leave days by type and status, marks holidays, and distinguishes weekends for team schedule visibility.\n\n### Import\n```jsx\nimport { LeapCalendar } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},l={args:{month:2,year:2026,leaveDays:[{date:"2026-03-16",type:"Vacation",status:"approved"},{date:"2026-03-17",type:"Vacation",status:"approved"},{date:"2026-03-18",type:"Vacation",status:"approved"},{date:"2026-03-23",type:"Sick",status:"sick"},{date:"2026-03-24",type:"Sick",status:"sick"},{date:"2026-03-30",type:"Personal",status:"personal"}],holidays:["2026-03-06"]}},c={args:{month:3,year:2026,leaveDays:[],holidays:[]}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    month: 2,
    year: 2026,
    leaveDays: [{
      date: '2026-03-16',
      type: 'Vacation',
      status: 'approved'
    }, {
      date: '2026-03-17',
      type: 'Vacation',
      status: 'approved'
    }, {
      date: '2026-03-18',
      type: 'Vacation',
      status: 'approved'
    }, {
      date: '2026-03-23',
      type: 'Sick',
      status: 'sick'
    }, {
      date: '2026-03-24',
      type: 'Sick',
      status: 'sick'
    }, {
      date: '2026-03-30',
      type: 'Personal',
      status: 'personal'
    }],
    holidays: ['2026-03-06']
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,v,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    month: 3,
    year: 2026,
    leaveDays: [],
    holidays: []
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const L=["Default","Empty"];export{l as Default,c as Empty,L as __namedExportsOrder,H as default};
