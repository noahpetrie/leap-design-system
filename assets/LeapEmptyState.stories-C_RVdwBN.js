import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{B as R}from"./Button-HrdzQtgu.js";import{b as S}from"./bucket-16-DByjHX--.js";import{b as N}from"./bucket-6-BF5uQPP1.js";import{C}from"./bucket-2-sTaChbhW.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./deprecate-wUyRZ4Kw.js";import"./useId-BCI3fkL9.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./Icon-IPhGtQ88.js";const L={calendar:C,document:N,search:S},s=({title:v,description:n,icon:q="document",actionLabel:i,onAction:c,...E})=>{const b=L[q]||N;return e.createElement("div",{className:"empty-state",style:{"--cds-button-primary":"#0c8c5e","--cds-button-primary-hover":"#096b48"},...E},e.createElement("div",{className:"empty-state-icon"},e.createElement(b,{size:48})),e.createElement("h3",{className:"empty-state-title"},v),n&&e.createElement("p",{className:"empty-state-description"},n),i&&c&&e.createElement(R,{kind:"primary",size:"sm",onClick:c,className:"empty-state-action"},i))};s.propTypes={title:t.string.isRequired,description:t.string,icon:t.oneOf(["calendar","document","search"]),actionLabel:t.string,onAction:t.func};s.__docgenInfo={description:"",methods:[],displayName:"LeapEmptyState",props:{icon:{defaultValue:{value:"'document'",computed:!1},description:"",type:{name:"enum",value:[{value:"'calendar'",computed:!1},{value:"'document'",computed:!1},{value:"'search'",computed:!1}]},required:!1},title:{description:"",type:{name:"string"},required:!0},description:{description:"",type:{name:"string"},required:!1},actionLabel:{description:"",type:{name:"string"},required:!1},onAction:{description:"",type:{name:"func"},required:!1}}};const K={title:"Components/LeapEmptyState",component:s,tags:["autodocs"],argTypes:{icon:{control:"select",options:["calendar","document","search"]},onAction:{action:"action clicked"}},parameters:{docs:{description:{component:"A placeholder component for empty views that displays an icon, title, optional description, and an optional call-to-action button.\n\n### Import\n```jsx\nimport { LeapEmptyState } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{title:"No pending requests",description:"All leave requests have been reviewed. New requests will appear here.",icon:"document"}},o={args:{title:"No results found",description:"Try adjusting your filters or search terms.",icon:"search"}},a={args:{title:"No leave scheduled",description:"No one on your team has leave booked for this period.",icon:"calendar",actionLabel:"Create Request"}};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'No pending requests',
    description: 'All leave requests have been reviewed. New requests will appear here.',
    icon: 'document'
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'No results found',
    description: 'Try adjusting your filters or search terms.',
    icon: 'search'
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'No leave scheduled',
    description: 'No one on your team has leave booked for this period.',
    icon: 'calendar',
    actionLabel: 'Create Request'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const Q=["NoPendingRequests","NoResults","EmptyCalendar"];export{a as EmptyCalendar,r as NoPendingRequests,o as NoResults,Q as __namedExportsOrder,K as default};
