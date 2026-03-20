import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{B as E,a as R}from"./BreadcrumbItem-Bxhc9sNu.js";import{L as N}from"./LeapButton-z14B9pfi.js";import{A as P}from"./bucket-0-BChVxR-Z.js";import"./Text-CpAClzUE.js";import"./bucket-13-D_bsWaAe.js";import"./Icon-IPhGtQ88.js";import"./utils-C8nBGPD0.js";const n=({title:q,subtitle:l,breadcrumbs:i=[],actions:o,...L})=>e.createElement("div",{className:"page-header",style:{"--cds-link-primary":"#0c8c5e"},...L},i.length>0&&e.createElement(E,{className:"page-header-breadcrumb"},i.map((d,m)=>e.createElement(R,{key:m,href:d.href,isCurrentPage:m===i.length-1},d.label))),e.createElement("div",{className:"page-header-row"},e.createElement("div",null,e.createElement("h1",{className:"page-header-title"},q),l&&e.createElement("p",{className:"page-header-subtitle"},l)),o&&e.createElement("div",{className:"page-header-actions"},o)));n.propTypes={title:a.string.isRequired,subtitle:a.string,breadcrumbs:a.arrayOf(a.shape({label:a.string.isRequired,href:a.string})),actions:a.node};n.__docgenInfo={description:"",methods:[],displayName:"LeapPageHeader",props:{breadcrumbs:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!1}}}},required:!1},title:{description:"",type:{name:"string"},required:!0},subtitle:{description:"",type:{name:"string"},required:!1},actions:{description:"",type:{name:"node"},required:!1}}};const x={title:"Components/LeapPageHeader",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A page header with a title, optional subtitle, breadcrumb navigation, and an action slot for buttons.\n\n### Import\n```jsx\nimport { LeapPageHeader } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{title:"Leave Requests",subtitle:"Manage and review team leave requests",breadcrumbs:[{label:"Dashboard",href:"#"},{label:"Leave Requests"}]}},t={render:()=>e.createElement(n,{title:"Team Calendar",subtitle:"View team availability and scheduled leave",breadcrumbs:[{label:"Dashboard",href:"#"},{label:"Team Calendar"}],actions:e.createElement(N,{size:"sm",renderIcon:P},"New Request")})},s={args:{title:"Settings"}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Leave Requests',
    subtitle: 'Manage and review team leave requests',
    breadcrumbs: [{
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Leave Requests'
    }]
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,b,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <LeapPageHeader title="Team Calendar" subtitle="View team availability and scheduled leave" breadcrumbs={[{
    label: 'Dashboard',
    href: '#'
  }, {
    label: 'Team Calendar'
  }]} actions={<LeapButton size="sm" renderIcon={Add}>New Request</LeapButton>} />
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Settings'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const O=["Default","WithActions","Simple"];export{r as Default,s as Simple,t as WithActions,O as __namedExportsOrder,x as default};
