import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import{c as M}from"./utils-C8nBGPD0.js";const m={approved:"bg-[#0c8c5e]",denied:"bg-[#da1e28]",modified:"bg-[#4589ff]",pending:"bg-[#8d8d8d]",submitted:"bg-[#009d9a]",comment:"bg-[#8a3ffc]"},r=({events:n=[],...g})=>e.createElement("div",{className:"py-2",...g},n.map((a,o)=>{const v=m[a.type]||m.comment;return e.createElement("div",{key:o,className:"flex gap-4"},e.createElement("div",{className:"flex flex-col items-center w-4 shrink-0"},e.createElement("div",{className:M("mt-1 h-3 w-3 shrink-0 rounded-full",v)}),o<n.length-1&&e.createElement("div",{className:"w-0.5 flex-1 bg-[#e0e0e0] min-h-[1rem]"})),e.createElement("div",{className:"flex-1 pb-4"},e.createElement("div",{className:"flex items-baseline justify-between gap-2 mb-1"},e.createElement("span",{className:"text-[14px] font-semibold leading-[18px] tracking-[0.16px] text-[#161616]"},a.title),e.createElement("span",{className:"text-[12px] leading-[16px] tracking-[0.32px] text-[#525252] whitespace-nowrap"},a.timestamp)),a.description&&e.createElement("p",{className:"m-0 text-[14px] leading-[18px] tracking-[0.16px] text-[#525252]"},a.description)))}));r.propTypes={events:t.arrayOf(t.shape({timestamp:t.string.isRequired,title:t.string.isRequired,description:t.string,type:t.oneOf(["approved","denied","modified","pending","submitted","comment"])})).isRequired};r.__docgenInfo={description:"",methods:[],displayName:"LeapTimeline",props:{events:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{timestamp:{name:"string",required:!0},title:{name:"string",required:!0},description:{name:"string",required:!1},type:{name:"enum",value:[{value:"'approved'",computed:!1},{value:"'denied'",computed:!1},{value:"'modified'",computed:!1},{value:"'pending'",computed:!1},{value:"'submitted'",computed:!1},{value:"'comment'",computed:!1}],required:!1}}}},required:!1}}};const h={title:"Components/LeapTimeline",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A vertical timeline displaying chronological events with type-colored dots, timestamps, titles, and optional descriptions.\n\n### Import\n```jsx\nimport { LeapTimeline } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},i={args:{events:[{timestamp:"Mar 15, 2026 2:30 PM",title:"Leave Approved",description:"Manager approved with sufficient team coverage.",type:"approved"},{timestamp:"Mar 14, 2026 4:00 PM",title:"Dates Modified",description:"Changed from Mar 20-22 to Mar 20-24.",type:"modified"},{timestamp:"Mar 13, 2026 11:00 AM",title:"Comment Added",description:"Please confirm with your team lead before I approve.",type:"comment"},{timestamp:"Mar 12, 2026 9:00 AM",title:"Request Submitted",description:"Vacation request for Mar 20-22 (3 days).",type:"submitted"}]}},s={args:{events:[{timestamp:"Mar 14, 2026 3:00 PM",title:"Leave Denied",description:"Conflicts with project deadline. Please resubmit for alternate dates.",type:"denied"},{timestamp:"Mar 13, 2026 10:00 AM",title:"Request Submitted",description:"Personal leave for Mar 25.",type:"submitted"}]}};var p,d,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    events: [{
      timestamp: 'Mar 15, 2026 2:30 PM',
      title: 'Leave Approved',
      description: 'Manager approved with sufficient team coverage.',
      type: 'approved'
    }, {
      timestamp: 'Mar 14, 2026 4:00 PM',
      title: 'Dates Modified',
      description: 'Changed from Mar 20-22 to Mar 20-24.',
      type: 'modified'
    }, {
      timestamp: 'Mar 13, 2026 11:00 AM',
      title: 'Comment Added',
      description: 'Please confirm with your team lead before I approve.',
      type: 'comment'
    }, {
      timestamp: 'Mar 12, 2026 9:00 AM',
      title: 'Request Submitted',
      description: 'Vacation request for Mar 20-22 (3 days).',
      type: 'submitted'
    }]
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    events: [{
      timestamp: 'Mar 14, 2026 3:00 PM',
      title: 'Leave Denied',
      description: 'Conflicts with project deadline. Please resubmit for alternate dates.',
      type: 'denied'
    }, {
      timestamp: 'Mar 13, 2026 10:00 AM',
      title: 'Request Submitted',
      description: 'Personal leave for Mar 25.',
      type: 'submitted'
    }]
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const w=["Default","DeniedFlow"];export{i as Default,s as DeniedFlow,w as __namedExportsOrder,h as default};
