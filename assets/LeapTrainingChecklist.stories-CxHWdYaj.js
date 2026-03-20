import{r as b,R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as o}from"./utils-C8nBGPD0.js";const v=n=>{if(!n)return"?";const a=n.trim().split(/\s+/);return a.length===1?a[0][0].toUpperCase():(a[0][0]+a[a.length-1][0]).toUpperCase()},k=n=>{const a=new Date(n),s=new Date;return s.setHours(0,0,0,0),a<s},y=n=>new Date(n).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),l=({items:n,onToggle:a})=>{const s=b.useMemo(()=>n?n.filter(t=>t.completed).length:0,[n]),i=n?n.length:0,w=i>0?s/i*100:0;return!n||n.length===0?e.createElement("div",{className:"rounded-[4px] border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold leading-[22px] tracking-[0.16px] text-[#1a1a18] mb-4"},"Training Checklist"),e.createElement("p",{className:"text-[14px] leading-[18px] tracking-[0.16px] text-[#525252] text-center py-6"},"No training items assigned.")):e.createElement("div",{className:"rounded-[4px] border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"text-[16px] font-semibold leading-[22px] tracking-[0.16px] text-[#1a1a18] mb-4"},"Training Checklist"),e.createElement("div",{className:"flex items-center gap-4 mb-4"},e.createElement("span",{className:"text-[14px] leading-[18px] tracking-[0.16px] text-[#525252] whitespace-nowrap min-w-[140px]"},s," of ",i," completed"),e.createElement("div",{className:"flex-1 h-1.5 rounded-[3px] bg-[#e0e0e0] overflow-hidden"},e.createElement("div",{className:"h-full rounded-[3px] bg-[#0c8c5e] transition-[width] duration-300 ease-in-out",style:{width:`${w}%`},role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":i}))),e.createElement("ul",{className:"m-0 list-none p-0"},n.map(t=>{const p=!t.completed&&k(t.dueDate);return e.createElement("li",{key:t.id,className:o("flex items-start gap-4 p-4 border-b border-[#e0e0e0] transition-colors duration-150 last:border-b-0 hover:bg-[#e8e8e8]",t.completed&&"opacity-70")},e.createElement("label",{className:"relative flex shrink-0 cursor-pointer items-center pt-0.5"},e.createElement("input",{type:"checkbox",className:"peer absolute h-0 w-0 opacity-0",checked:t.completed,onChange:()=>a&&a(t.id),"aria-label":`Mark "${t.title}" as ${t.completed?"incomplete":"complete"}`}),e.createElement("span",{className:o("relative block h-[18px] w-[18px] rounded-[3px] border-2 border-[#8d8d8d] transition-all duration-150","peer-focus-visible:outline-2 peer-focus-visible:outline-[#0c8c5e] peer-focus-visible:outline-offset-2","peer-checked:border-[#0c8c5e] peer-checked:bg-[#0c8c5e]","after:absolute after:left-[5px] after:top-[1px] after:hidden after:h-[9px] after:w-[4px] after:rotate-45 after:border-b-2 after:border-r-2 after:border-white","peer-checked:after:block")})),e.createElement("div",{className:"flex flex-1 flex-col gap-0.5 min-w-0"},e.createElement("span",{className:o("text-[14px] leading-[18px] tracking-[0.16px] font-medium text-[#1a1a18]",t.completed&&"line-through text-[#525252]")},t.title),t.description&&e.createElement("span",{className:"text-[12px] leading-[16px] tracking-[0.32px] text-[#525252]"},t.description)),e.createElement("div",{className:"flex shrink-0 items-center gap-2"},e.createElement("span",{className:"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c8c5e] text-[12px] leading-[16px] tracking-[0.32px] font-semibold text-[#ffffff]",title:t.assignee},v(t.assignee)),e.createElement("span",{className:o("text-[12px] leading-[16px] tracking-[0.32px] text-[#525252] whitespace-nowrap",p&&"text-[#da1e28] font-semibold")},p&&"⚠ ",y(t.dueDate))))})))};l.propTypes={items:r.arrayOf(r.shape({id:r.oneOfType([r.string,r.number]).isRequired,title:r.string.isRequired,description:r.string,assignee:r.string.isRequired,dueDate:r.string.isRequired,completed:r.bool.isRequired})),onToggle:r.func};l.defaultProps={items:[],onToggle:()=>{}};l.__docgenInfo={description:"",methods:[],displayName:"LeapTrainingChecklist",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},title:{name:"string",required:!0},description:{name:"string",required:!1},assignee:{name:"string",required:!0},dueDate:{name:"string",required:!0},completed:{name:"bool",required:!0}}}},required:!1},onToggle:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const R={title:"Change Management/LeapTrainingChecklist",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A training progress checklist with toggleable items, assignee avatars, due date tracking, overdue highlighting, and a progress bar.\n\n### Import\n```jsx\nimport { LeapTrainingChecklist } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onToggle:{action:"toggled"}}},d={args:{items:[{id:1,title:"Complete CRM migration e-learning module",description:"Self-paced course covering new CRM features and workflows.",assignee:"Sarah Chen",dueDate:"2026-04-10",completed:!0},{id:2,title:"Attend API v3 hands-on workshop",description:"Instructor-led session on new endpoint patterns and auth flow.",assignee:"Marcus Johnson",dueDate:"2026-03-15",completed:!1},{id:3,title:"Review updated security policies",description:"Read and acknowledge the revised data handling procedures.",assignee:"Priya Patel",dueDate:"2026-04-01",completed:!0},{id:4,title:"Shadow a support champion for one shift",description:"Pair with an experienced agent using the new ticketing system.",assignee:"James O'Brien",dueDate:"2026-03-10",completed:!1},{id:5,title:"Pass the platform certification exam",description:"Score 80% or higher on the certification assessment.",assignee:"Amara Osei",dueDate:"2026-04-20",completed:!1}]}},c={args:{items:[{id:1,title:"Complete CRM migration e-learning module",description:"Self-paced course covering new CRM features and workflows.",assignee:"Sarah Chen",dueDate:"2026-04-10",completed:!0},{id:2,title:"Attend API v3 hands-on workshop",description:"Instructor-led session on new endpoint patterns and auth flow.",assignee:"Marcus Johnson",dueDate:"2026-04-05",completed:!0},{id:3,title:"Review updated security policies",description:"Read and acknowledge the revised data handling procedures.",assignee:"Priya Patel",dueDate:"2026-04-01",completed:!0},{id:4,title:"Shadow a support champion for one shift",description:"Pair with an experienced agent using the new ticketing system.",assignee:"James O'Brien",dueDate:"2026-04-08",completed:!0},{id:5,title:"Pass the platform certification exam",description:"Score 80% or higher on the certification assessment.",assignee:"Amara Osei",dueDate:"2026-04-20",completed:!0}]}};var u,m,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: 'Complete CRM migration e-learning module',
      description: 'Self-paced course covering new CRM features and workflows.',
      assignee: 'Sarah Chen',
      dueDate: '2026-04-10',
      completed: true
    }, {
      id: 2,
      title: 'Attend API v3 hands-on workshop',
      description: 'Instructor-led session on new endpoint patterns and auth flow.',
      assignee: 'Marcus Johnson',
      dueDate: '2026-03-15',
      completed: false
    }, {
      id: 3,
      title: 'Review updated security policies',
      description: 'Read and acknowledge the revised data handling procedures.',
      assignee: 'Priya Patel',
      dueDate: '2026-04-01',
      completed: true
    }, {
      id: 4,
      title: 'Shadow a support champion for one shift',
      description: 'Pair with an experienced agent using the new ticketing system.',
      assignee: 'James O\\'Brien',
      dueDate: '2026-03-10',
      completed: false
    }, {
      id: 5,
      title: 'Pass the platform certification exam',
      description: 'Score 80% or higher on the certification assessment.',
      assignee: 'Amara Osei',
      dueDate: '2026-04-20',
      completed: false
    }]
  }
}`,...(g=(m=d.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: 'Complete CRM migration e-learning module',
      description: 'Self-paced course covering new CRM features and workflows.',
      assignee: 'Sarah Chen',
      dueDate: '2026-04-10',
      completed: true
    }, {
      id: 2,
      title: 'Attend API v3 hands-on workshop',
      description: 'Instructor-led session on new endpoint patterns and auth flow.',
      assignee: 'Marcus Johnson',
      dueDate: '2026-04-05',
      completed: true
    }, {
      id: 3,
      title: 'Review updated security policies',
      description: 'Read and acknowledge the revised data handling procedures.',
      assignee: 'Priya Patel',
      dueDate: '2026-04-01',
      completed: true
    }, {
      id: 4,
      title: 'Shadow a support champion for one shift',
      description: 'Pair with an experienced agent using the new ticketing system.',
      assignee: 'James O\\'Brien',
      dueDate: '2026-04-08',
      completed: true
    }, {
      id: 5,
      title: 'Pass the platform certification exam',
      description: 'Score 80% or higher on the certification assessment.',
      assignee: 'Amara Osei',
      dueDate: '2026-04-20',
      completed: true
    }]
  }
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const E=["Default","AllComplete"];export{c as AllComplete,d as Default,E as __namedExportsOrder,R as default};
