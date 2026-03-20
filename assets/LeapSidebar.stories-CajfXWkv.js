import{r as T,R as t}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import{c as b}from"./utils-C8nBGPD0.js";import{f as A,g as D}from"./bucket-3-iB7GZNH-.js";import{D as N}from"./bucket-4-CY8P0Ots.js";import{b as _}from"./bucket-6-BF5uQPP1.js";import{C as z}from"./bucket-2-sTaChbhW.js";import{e as O}from"./bucket-19-C2kUjc-x.js";import{a as j}from"./bucket-0-BChVxR-Z.js";import{S as P}from"./bucket-16-DByjHX--.js";import"./Icon-IPhGtQ88.js";const l=({items:I=[],activeItem:L,onItemClick:p,collapsed:d,logo:s,...E})=>{var m;const[S,R]=T.useState(!1),a=d!==void 0?d:S;return t.createElement("nav",{className:b("h-screen bg-[#1a1a18] flex flex-col transition-[width] duration-200 ease-in-out",a?"w-14":"w-60"),...E},s&&t.createElement("div",{className:"text-base font-semibold text-white p-4 border-b border-white/10 whitespace-nowrap overflow-hidden"},a?s.icon||((m=s.text)==null?void 0:m[0]):s.text||"Leap"),t.createElement("div",{className:"flex-1 py-2 overflow-y-auto"},I.map(r=>{const k=L===r.id,u=r.icon;return t.createElement("button",{key:r.id,className:b("flex items-center gap-2 w-full px-4 py-2 bg-transparent border-none border-l-[3px] border-l-transparent text-white/70 cursor-pointer text-left whitespace-nowrap text-[14px] tracking-[0.16px] transition-colors","hover:bg-white/[0.06] hover:text-white",k&&"bg-[rgba(12,140,94,0.18)] border-l-[#0c8c5e] text-white hover:bg-[rgba(12,140,94,0.18)]"),onClick:()=>p&&p(r.id),title:a?r.label:void 0},u&&t.createElement(u,{size:20}),!a&&t.createElement("span",null,r.label))})),t.createElement("button",{className:"flex items-center justify-center p-3 bg-transparent border-none border-t border-t-white/10 text-white/50 cursor-pointer hover:text-white transition-colors",onClick:()=>R(!a),"aria-label":a?"Expand sidebar":"Collapse sidebar"},a?t.createElement(A,{size:16}):t.createElement(D,{size:16})))};l.propTypes={items:e.arrayOf(e.shape({id:e.string.isRequired,label:e.string.isRequired,icon:e.elementType})).isRequired,activeItem:e.string,onItemClick:e.func,collapsed:e.bool,logo:e.shape({text:e.string,icon:e.node})};l.__docgenInfo={description:"",methods:[],displayName:"LeapSidebar",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},icon:{name:"elementType",required:!1}}}},required:!1},activeItem:{description:"",type:{name:"string"},required:!1},onItemClick:{description:"",type:{name:"func"},required:!1},collapsed:{description:"",type:{name:"bool"},required:!1},logo:{description:"",type:{name:"shape",value:{text:{name:"string",required:!1},icon:{name:"node",required:!1}}},required:!1}}};const X={title:"Components/LeapSidebar",component:l,tags:["autodocs"],argTypes:{onItemClick:{action:"item clicked"}},parameters:{layout:"fullscreen",docs:{description:{component:"A collapsible vertical navigation sidebar with icon and label items, active state tracking, and an optional logo.\n\n### Import\n```jsx\nimport { LeapSidebar } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},c=[{id:"dashboard",label:"Dashboard",icon:N},{id:"requests",label:"Leave Requests",icon:_},{id:"calendar",label:"Team Calendar",icon:z},{id:"team",label:"Team",icon:O},{id:"analytics",label:"Analytics",icon:j},{id:"settings",label:"Settings",icon:P}],o={args:{items:c,activeItem:"dashboard",logo:{text:"LeapChange"}}},n={args:{items:c,activeItem:"requests",collapsed:!0,logo:{text:"LeapChange",icon:"L"}}},i={args:{items:c,activeItem:"requests",logo:{text:"LeapChange"}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItem: 'dashboard',
    logo: {
      text: 'LeapChange'
    }
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItem: 'requests',
    collapsed: true,
    logo: {
      text: 'LeapChange',
      icon: 'L'
    }
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var q,w,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItem: 'requests',
    logo: {
      text: 'LeapChange'
    }
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Y=["Default","Collapsed","RequestsActive"];export{n as Collapsed,o as Default,i as RequestsActive,Y as __namedExportsOrder,X as default};
