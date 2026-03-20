import{R as e}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{c as i}from"./utils-C8nBGPD0.js";const p={completed:{label:"Completed",modifier:"completed"},current:{label:"Current",modifier:"current"},upcoming:{label:"Upcoming",modifier:"upcoming"},overdue:{label:"Overdue",modifier:"overdue"}},h={completed:"bg-[#0c8c5e] border-[#0c8c5e]",current:"bg-white border-[#0c8c5e] shadow-[0_0_0_3px_rgba(12,140,94,0.25)]",upcoming:"bg-white border-[#a8a8a0]",overdue:"bg-[#da1e28] border-[#da1e28]"},x={completed:"bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]",current:"bg-[rgba(12,140,94,0.12)] text-[#0c8c5e]",upcoming:"bg-[#f4f4f4] text-[#525252]",overdue:"bg-[rgba(218,30,40,0.12)] text-[#da1e28]"},l=({milestones:r})=>!r||r.length===0?null:e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-4 max-w-[600px]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("ol",{className:"list-none m-0 p-0"},r.map((t,d)=>{const a=p[t.status]||p.upcoming,c=d===r.length-1;return e.createElement("li",{key:t.title+d,className:i("relative flex gap-4",!c&&"pb-6")},!c&&e.createElement("span",{className:"absolute left-[9px] top-[22px] w-0.5 bottom-0 bg-[var(--cds-border-subtle,#e0e0e0)]"}),e.createElement("span",{className:i("relative flex-shrink-0 w-5 h-5 rounded-full mt-0.5 border-2 z-[1]",h[a.modifier]),"aria-hidden":"true"}),e.createElement("div",{className:i("flex-1 min-w-0",a.modifier==="overdue"&&"border-l-[3px] border-l-[#da1e28] pl-2 rounded-sm")},e.createElement("div",{className:"flex items-center gap-2 flex-wrap"},e.createElement("h4",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#1a1a18] m-0"},t.title),e.createElement("span",{className:i("text-[12px] tracking-[0.32px] font-semibold inline-block px-2 py-px rounded-xl",x[a.modifier])},a.label)),t.date&&e.createElement("time",{className:"text-[12px] tracking-[0.32px] block text-[#525252] mt-1"},t.date),t.description&&e.createElement("p",{className:"text-[14px] tracking-[0.16px] text-[#525252] mt-1 mb-0"},t.description)))})));l.propTypes={milestones:n.arrayOf(n.shape({title:n.string.isRequired,date:n.string,status:n.oneOf(["completed","current","upcoming","overdue"]).isRequired,description:n.string})).isRequired};l.__docgenInfo={description:"",methods:[],displayName:"LeapMilestoneTracker",props:{milestones:{description:"Array of milestone objects",type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},date:{name:"string",required:!1},status:{name:"enum",value:[{value:"'completed'",computed:!1},{value:"'current'",computed:!1},{value:"'upcoming'",computed:!1},{value:"'overdue'",computed:!1}],required:!0},description:{name:"string",required:!1}}}},required:!0}}};const N={title:"Components/LeapMilestoneTracker",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A vertical timeline that tracks project milestones with completed, current, upcoming, and overdue status indicators.\n\n### Import\n```jsx\nimport { LeapMilestoneTracker } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},o={args:{milestones:[{title:"Project Kickoff",date:"Jan 15, 2026",status:"completed",description:"Initial stakeholder alignment and scope definition."},{title:"Requirements Gathering",date:"Feb 10, 2026",status:"completed",description:"Collected input from all department leads."},{title:"Pilot Launch",date:"Mar 1, 2026",status:"overdue",description:"Deploy pilot program to Engineering team."},{title:"Training Rollout",date:"Apr 15, 2026",status:"current",description:"Begin company-wide training sessions."},{title:"Full Deployment",date:"Jun 1, 2026",status:"upcoming",description:"Organization-wide launch with support resources."}]}},s={args:{milestones:[{title:"Discovery Phase",date:"Oct 1, 2025",status:"completed",description:"Research and analysis completed."},{title:"Design Phase",date:"Nov 15, 2025",status:"completed",description:"Solution design approved by stakeholders."},{title:"Implementation",date:"Jan 10, 2026",status:"completed",description:"System deployed to production."},{title:"Post-Launch Review",date:"Feb 28, 2026",status:"completed",description:"Metrics reviewed and improvements identified."}]}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    milestones: [{
      title: 'Project Kickoff',
      date: 'Jan 15, 2026',
      status: 'completed',
      description: 'Initial stakeholder alignment and scope definition.'
    }, {
      title: 'Requirements Gathering',
      date: 'Feb 10, 2026',
      status: 'completed',
      description: 'Collected input from all department leads.'
    }, {
      title: 'Pilot Launch',
      date: 'Mar 1, 2026',
      status: 'overdue',
      description: 'Deploy pilot program to Engineering team.'
    }, {
      title: 'Training Rollout',
      date: 'Apr 15, 2026',
      status: 'current',
      description: 'Begin company-wide training sessions.'
    }, {
      title: 'Full Deployment',
      date: 'Jun 1, 2026',
      status: 'upcoming',
      description: 'Organization-wide launch with support resources.'
    }]
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,b,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    milestones: [{
      title: 'Discovery Phase',
      date: 'Oct 1, 2025',
      status: 'completed',
      description: 'Research and analysis completed.'
    }, {
      title: 'Design Phase',
      date: 'Nov 15, 2025',
      status: 'completed',
      description: 'Solution design approved by stakeholders.'
    }, {
      title: 'Implementation',
      date: 'Jan 10, 2026',
      status: 'completed',
      description: 'System deployed to production.'
    }, {
      title: 'Post-Launch Review',
      date: 'Feb 28, 2026',
      status: 'completed',
      description: 'Metrics reviewed and improvements identified.'
    }]
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Default","AllComplete"];export{s as AllComplete,o as Default,E as __namedExportsOrder,N as default};
