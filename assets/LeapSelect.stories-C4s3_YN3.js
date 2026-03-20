import{R as n}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{D as P}from"./Dropdown-DDNCnrIr.js";import"./defaultItemToString-Bxcos043.js";import"./deprecate-wUyRZ4Kw.js";import"./FormContext-BXuWO8ke.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";import"./mergeRefs-BZpmU3mx.js";import"./useNormalizedInputProps-D8kxv_oQ.js";import"./Text-CpAClzUE.js";import"./bucket-20-D0WIoklM.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./useId-BCI3fkL9.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./utils-B-HSZv_z.js";const i=({id:b,titleText:v,label:S="Choose an option",items:T=[],onChange:s,size:h="md",disabled:x,...D})=>{const L=T.map(e=>typeof e=="string"?{id:e,label:e}:e);return n.createElement("div",{style:{"--cds-focus":"#0c8c5e","--cds-interactive":"#0c8c5e"},...D},n.createElement(P,{id:b,titleText:v,label:S,items:L,itemToString:e=>e?e.label:"",onChange:({selectedItem:e})=>s&&s(e),size:h,disabled:x}))};i.propTypes={id:t.string.isRequired,titleText:t.string,label:t.string,items:t.array.isRequired,onChange:t.func,size:t.oneOf(["sm","md","lg"]),disabled:t.bool};i.__docgenInfo={description:"",methods:[],displayName:"LeapSelect",props:{label:{defaultValue:{value:"'Choose an option'",computed:!1},description:"",type:{name:"string"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},id:{description:"",type:{name:"string"},required:!0},titleText:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1}}};const $={title:"Components/LeapSelect",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown select component that wraps Carbon's Dropdown, accepting string or object items for option selection.\n\n### Import\n```jsx\nimport { LeapSelect } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onChange:{action:"changed"},size:{control:"select",options:["sm","md","lg"]}}},r={args:{id:"dept",titleText:"Department",items:["Engineering","Product","Design","Marketing","Sales"]}},a={args:{id:"type",titleText:"Leave type",label:"Select type",items:["Vacation","Sick Leave","Personal","Bereavement","Parental"]}},o={args:{id:"disabled",titleText:"Region",items:["North America","Europe","Asia Pacific"],disabled:!0}};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'dept',
    titleText: 'Department',
    items: ['Engineering', 'Product', 'Design', 'Marketing', 'Sales']
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'type',
    titleText: 'Leave type',
    label: 'Select type',
    items: ['Vacation', 'Sick Leave', 'Personal', 'Bereavement', 'Parental']
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    titleText: 'Region',
    items: ['North America', 'Europe', 'Asia Pacific'],
    disabled: true
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const ee=["Default","LeaveType","Disabled"];export{r as Default,o as Disabled,a as LeaveType,ee as __namedExportsOrder,$ as default};
