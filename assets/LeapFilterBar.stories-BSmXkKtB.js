import{R as r}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{D as b}from"./Dropdown-DDNCnrIr.js";import{T as h}from"./Tag-IbOsagNL.js";import"./defaultItemToString-Bxcos043.js";import"./deprecate-wUyRZ4Kw.js";import"./FormContext-BXuWO8ke.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-D8kxv_oQ.js";import"./Text-CpAClzUE.js";import"./bucket-20-D0WIoklM.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./useId-BCI3fkL9.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./utils-B-HSZv_z.js";const o=({filters:v=[],activeFilters:s={},onChange:p,onClear:l,...y})=>r.createElement("div",{className:"filter-bar",style:{"--cds-focus":"#0c8c5e"},...y},r.createElement("div",{className:"filter-bar-dropdowns"},v.map(t=>r.createElement(b,{key:t.id,id:t.id,titleText:"",label:t.label,items:t.options.map(e=>({id:e,label:e})),itemToString:e=>e?e.label:"",size:"sm",onChange:({selectedItem:e})=>p&&p(t.id,e==null?void 0:e.id)}))),Object.keys(s).length>0&&r.createElement("div",{className:"filter-bar-tags"},Object.entries(s).map(([t,e])=>r.createElement(h,{key:t,type:"cool-gray",size:"sm",filter:!0,onClose:()=>l&&l(t)},t,": ",e))));o.propTypes={filters:a.arrayOf(a.shape({id:a.string.isRequired,label:a.string.isRequired,options:a.arrayOf(a.string).isRequired})).isRequired,activeFilters:a.object,onChange:a.func,onClear:a.func};o.__docgenInfo={description:"",methods:[],displayName:"LeapFilterBar",props:{filters:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},options:{name:"arrayOf",value:{name:"string"},required:!0}}}},required:!1},activeFilters:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onClear:{description:"",type:{name:"func"},required:!1}}};const U={title:"Components/LeapFilterBar",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A horizontal filter bar with dropdown selectors and active filter tags that can be individually cleared.\n\n### Import\n```jsx\nimport { LeapFilterBar } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onChange:{action:"filter changed"},onClear:{action:"filter cleared"}}},i={args:{filters:[{id:"status",label:"Status",options:["Approved","Pending","Denied","Cancelled"]},{id:"type",label:"Leave Type",options:["Vacation","Sick Leave","Personal","Bereavement"]},{id:"department",label:"Department",options:["Engineering","Product","Design","Marketing"]}]}},n={args:{filters:[{id:"status",label:"Status",options:["Approved","Pending","Denied"]},{id:"type",label:"Leave Type",options:["Vacation","Sick Leave","Personal"]}],activeFilters:{status:"Pending",type:"Vacation"}}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: 'status',
      label: 'Status',
      options: ['Approved', 'Pending', 'Denied', 'Cancelled']
    }, {
      id: 'type',
      label: 'Leave Type',
      options: ['Vacation', 'Sick Leave', 'Personal', 'Bereavement']
    }, {
      id: 'department',
      label: 'Department',
      options: ['Engineering', 'Product', 'Design', 'Marketing']
    }]
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: 'status',
      label: 'Status',
      options: ['Approved', 'Pending', 'Denied']
    }, {
      id: 'type',
      label: 'Leave Type',
      options: ['Vacation', 'Sick Leave', 'Personal']
    }],
    activeFilters: {
      status: 'Pending',
      type: 'Vacation'
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const X=["Default","WithActive"];export{i as Default,n as WithActive,X as __namedExportsOrder,U as default};
