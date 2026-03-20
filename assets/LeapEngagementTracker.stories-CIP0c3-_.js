import{r as C,R as e}from"./index-C5e9SFkp.js";import{P as s}from"./index-Cv3U8xn7.js";import{c as p}from"./utils-C8nBGPD0.js";const h=n=>{switch(n){case"up":return"▲";case"down":return"▼";case"stable":default:return"●"}},c=n=>{const r=new Date(n),g=new Date-r;return Math.floor(g/(1e3*60*60*24))},A={up:"text-[#0c8c5e]",down:"text-[#da1e28]",stable:"text-[#525252]"},d=({stakeholders:n})=>{const r=C.useMemo(()=>!n||n.length===0?[]:[...n].sort((a,g)=>{const o=c(a.lastEngagement);return c(g.lastEngagement)-o}),[n]);return!n||n.length===0?e.createElement("div",{className:"rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("p",{className:"text-center text-[14px] tracking-[0.16px] text-[#525252] py-6"},"No stakeholder data available.")):e.createElement("div",{className:"rounded border border-[var(--cds-border-subtle,#e0e0e0)] p-4 font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("h3",{className:"mb-4 text-[16px] font-semibold text-[#1a1a18]"},"Stakeholder Engagement Tracker"),e.createElement("div",{className:"grid grid-cols-[2fr_1fr_1fr_0.5fr] gap-2 border-b-2 border-[#0c8c5e] px-3 py-2 text-[12px] font-semibold tracking-[0.32px] text-[#1a1a18]"},e.createElement("span",null,"Name"),e.createElement("span",null,"Days Since"),e.createElement("span",null,"Engagements"),e.createElement("span",null,"Trend")),e.createElement("ul",{className:"m-0 list-none p-0"},r.map((a,g)=>{const o=c(a.lastEngagement),u=o>30;return e.createElement("li",{key:a.name+g,className:p("grid grid-cols-[2fr_1fr_1fr_0.5fr] items-center gap-2 border-b border-[#e0e0e0] px-3 py-2 transition-colors hover:bg-[#e8e8e8]",u&&"border-l-[3px] border-l-[#da1e28] bg-[rgba(218,30,40,0.08)] hover:bg-[rgba(218,30,40,0.14)]")},e.createElement("span",{className:"text-[14px] font-medium tracking-[0.16px] text-[#1a1a18]"},a.name),e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#525252]"},o," ",o===1?"day":"days"),e.createElement("span",{className:"inline-flex h-5 w-fit min-w-[24px] items-center justify-center rounded-full bg-[#0c8c5e]/15 px-1.5 text-[12px] font-semibold tracking-[0.32px] text-[#0c8c5e]"},a.engagementCount),e.createElement("span",{className:p("text-center text-[12px]",A[a.trend]||"text-[#525252]")},h(a.trend)))})))};d.propTypes={stakeholders:s.arrayOf(s.shape({name:s.string.isRequired,lastEngagement:s.string.isRequired,engagementCount:s.number.isRequired,trend:s.oneOf(["up","down","stable"]).isRequired}))};d.defaultProps={stakeholders:[]};d.__docgenInfo={description:"",methods:[],displayName:"LeapEngagementTracker",props:{stakeholders:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{name:{name:"string",required:!0},lastEngagement:{name:"string",required:!0},engagementCount:{name:"number",required:!0},trend:{name:"enum",value:[{value:"'up'",computed:!1},{value:"'down'",computed:!1},{value:"'stable'",computed:!1}],required:!0}}}},required:!1}}};const _={title:"Change Management/LeapEngagementTracker",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"Tracks stakeholder engagement by displaying each stakeholder's last engagement date, total engagement count, and trend direction (up, down, stable), sorted by least recently engaged.\n\n### Import\n```jsx\nimport { LeapEngagementTracker } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},v=new Date,t=n=>{const r=new Date(v);return r.setDate(r.getDate()-n),r.toISOString().split("T")[0]},m={args:{stakeholders:[{name:"Sarah Chen",lastEngagement:t(2),engagementCount:14,trend:"up"},{name:"Marcus Johnson",lastEngagement:t(45),engagementCount:3,trend:"down"},{name:"Priya Patel",lastEngagement:t(10),engagementCount:8,trend:"stable"},{name:"James O'Brien",lastEngagement:t(60),engagementCount:1,trend:"down"},{name:"Amara Osei",lastEngagement:t(5),engagementCount:22,trend:"up"},{name:"Liam Foster",lastEngagement:t(18),engagementCount:6,trend:"stable"}]}},l={args:{stakeholders:[{name:"Sarah Chen",lastEngagement:t(1),engagementCount:20,trend:"up"},{name:"Marcus Johnson",lastEngagement:t(3),engagementCount:15,trend:"up"},{name:"Priya Patel",lastEngagement:t(2),engagementCount:18,trend:"stable"},{name:"James O'Brien",lastEngagement:t(5),engagementCount:12,trend:"up"},{name:"Amara Osei",lastEngagement:t(1),engagementCount:25,trend:"up"},{name:"Liam Foster",lastEngagement:t(4),engagementCount:10,trend:"stable"}]}};var i,f,E;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    stakeholders: [{
      name: 'Sarah Chen',
      lastEngagement: daysAgo(2),
      engagementCount: 14,
      trend: 'up'
    }, {
      name: 'Marcus Johnson',
      lastEngagement: daysAgo(45),
      engagementCount: 3,
      trend: 'down'
    }, {
      name: 'Priya Patel',
      lastEngagement: daysAgo(10),
      engagementCount: 8,
      trend: 'stable'
    }, {
      name: 'James O\\'Brien',
      lastEngagement: daysAgo(60),
      engagementCount: 1,
      trend: 'down'
    }, {
      name: 'Amara Osei',
      lastEngagement: daysAgo(5),
      engagementCount: 22,
      trend: 'up'
    }, {
      name: 'Liam Foster',
      lastEngagement: daysAgo(18),
      engagementCount: 6,
      trend: 'stable'
    }]
  }
}`,...(E=(f=m.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var y,b,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    stakeholders: [{
      name: 'Sarah Chen',
      lastEngagement: daysAgo(1),
      engagementCount: 20,
      trend: 'up'
    }, {
      name: 'Marcus Johnson',
      lastEngagement: daysAgo(3),
      engagementCount: 15,
      trend: 'up'
    }, {
      name: 'Priya Patel',
      lastEngagement: daysAgo(2),
      engagementCount: 18,
      trend: 'stable'
    }, {
      name: 'James O\\'Brien',
      lastEngagement: daysAgo(5),
      engagementCount: 12,
      trend: 'up'
    }, {
      name: 'Amara Osei',
      lastEngagement: daysAgo(1),
      engagementCount: 25,
      trend: 'up'
    }, {
      name: 'Liam Foster',
      lastEngagement: daysAgo(4),
      engagementCount: 10,
      trend: 'stable'
    }]
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const N=["Default","AllRecent"];export{l as AllRecent,m as Default,N as __namedExportsOrder,_ as default};
