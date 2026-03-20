import{R as s}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{B as h,a as f}from"./BreadcrumbItem-Bxhc9sNu.js";import"./Text-CpAClzUE.js";import"./bucket-13-D_bsWaAe.js";import"./Icon-IPhGtQ88.js";const t=({items:n=[],...b})=>s.createElement("div",{className:"leap-breadcrumb",style:{"--cds-link-primary":"#0c8c5e","--cds-link-primary-hover":"#0c8c5e"},...b},s.createElement(h,null,n.map((o,m)=>s.createElement(f,{key:m,href:o.href,isCurrentPage:m===n.length-1},o.label))));t.propTypes={items:e.arrayOf(e.shape({label:e.string.isRequired,href:e.string})).isRequired};t.__docgenInfo={description:"",methods:[],displayName:"LeapBreadcrumb",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!1}}}},required:!1}}};const S={title:"Components/LeapBreadcrumb",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A breadcrumb navigation component built on Carbon's Breadcrumb, rendering a list of linked path segments with the last item marked as the current page.\n\n### Import\n```jsx\nimport { LeapBreadcrumb } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{items:[{label:"Dashboard",href:"#"},{label:"Team",href:"#"},{label:"Sarah Chen",href:"#"},{label:"Request #142"}]}},a={args:{items:[{label:"Dashboard",href:"#"},{label:"My Requests"}]}};var l,p,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'Team',
      href: '#'
    }, {
      label: 'Sarah Chen',
      href: '#'
    }, {
      label: 'Request #142'
    }]
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '#'
    }, {
      label: 'My Requests'
    }]
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const k=["Default","Short"];export{r as Default,a as Short,k as __namedExportsOrder,S as default};
