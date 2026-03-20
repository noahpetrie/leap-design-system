import{r,R as t}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{c as _}from"./utils-C8nBGPD0.js";import{F as D}from"./bucket-7-1TImlwne.js";import{E as L,D as N}from"./bucket-6-BF5uQPP1.js";import{C as M,a as P}from"./bucket-4-CY8P0Ots.js";import{P as O}from"./bucket-13-D_bsWaAe.js";import{c as j}from"./bucket-16-DByjHX--.js";import{T}from"./bucket-18-uUFb7_qM.js";import"./Icon-IPhGtQ88.js";const h=({children:i,items:R=[],onSelect:g})=>{const[o,a]=r.useState(!1),[s,b]=r.useState({x:0,y:0}),p=r.useRef(null),q=r.useCallback(e=>{e.preventDefault(),b({x:e.clientX,y:e.clientY}),a(!0)},[]),m=r.useCallback(()=>{a(!1)},[]),f=r.useCallback(e=>{e.key==="Escape"&&a(!1)},[]);r.useEffect(()=>(o&&(document.addEventListener("click",m),document.addEventListener("keydown",f)),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",f)}),[o,m,f]),r.useEffect(()=>{if(o&&p.current){const e=p.current.getBoundingClientRect(),y=window.innerWidth,x=window.innerHeight;let{x:l,y:d}=s;l+e.width>y&&(l=y-e.width-4),d+e.height>x&&(d=x-e.height-4),(l!==s.x||d!==s.y)&&b({x:l,y:d})}},[o,s]);const I=e=>{e.disabled||(a(!1),g&&g(e.id))};return t.createElement("div",{className:"contents",onContextMenu:q},i,o&&t.createElement("div",{ref:p,className:"fixed z-[9999] min-w-[10rem] max-w-[18rem] py-1 border border-[var(--cds-border-subtle,#e0e0e0)] shadow-[0_2px_6px_rgba(0,0,0,0.2)] list-none",style:{top:s.y,left:s.x,backgroundColor:"var(--cds-layer, #ffffff)"},role:"menu"},R.map(e=>e.type==="divider"?t.createElement("div",{key:e.id,className:"h-px my-1 bg-[#e0e0e0]",role:"separator"}):t.createElement("button",{key:e.id,className:_("flex items-center gap-2 w-full py-1.5 px-4 border-none bg-transparent text-[#161616] text-sm leading-[1.125rem] tracking-[0.16px] cursor-pointer text-left whitespace-nowrap","hover:bg-[#e8e8e8]","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-[-2px]",e.disabled&&"text-[#8d8d8d] cursor-not-allowed hover:bg-transparent",e.danger&&"text-[#da1e28] hover:bg-[#da1e28] hover:text-white"),role:"menuitem",disabled:e.disabled,onClick:()=>I(e)},e.icon&&t.createElement("span",{className:"flex items-center shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current"},e.icon),t.createElement("span",{className:"flex-1"},e.label),e.shortcut&&t.createElement("span",{className:"ml-auto pl-8 text-[#525252] text-xs leading-4 tracking-[0.32px]"},e.shortcut)))))};h.propTypes={children:n.node.isRequired,items:n.arrayOf(n.shape({id:n.string.isRequired,label:n.string,icon:n.node,shortcut:n.string,disabled:n.bool,danger:n.bool,type:n.oneOf(["item","divider"])})),onSelect:n.func};h.__docgenInfo={description:"",methods:[],displayName:"LeapContextMenu",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!1},icon:{name:"node",required:!1},shortcut:{name:"string",required:!1},disabled:{name:"bool",required:!1},danger:{name:"bool",required:!1},type:{name:"enum",value:[{value:"'item'",computed:!1},{value:"'divider'",computed:!1}],required:!1}}}},required:!1},children:{description:"",type:{name:"node"},required:!0},onSelect:{description:"",type:{name:"func"},required:!1}}};const Q={title:"Components/LeapContextMenu",component:h,tags:["autodocs"],parameters:{docs:{description:{component:"A right-click context menu that appears at the cursor position, supporting icons, keyboard shortcuts, dividers, disabled items, and danger actions.\n\n### Import\n```jsx\nimport { LeapContextMenu } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},V=[{id:"open",label:"Open",icon:t.createElement(D,null),shortcut:"Enter"},{id:"edit",label:"Edit",icon:t.createElement(L,null),shortcut:"E"},{id:"divider-1",type:"divider"},{id:"copy",label:"Copy",icon:t.createElement(M,null),shortcut:"⌘C"},{id:"cut",label:"Cut",icon:t.createElement(P,null),shortcut:"⌘X"},{id:"paste",label:"Paste",icon:t.createElement(O,null),shortcut:"⌘V"},{id:"divider-2",type:"divider"},{id:"download",label:"Download",icon:t.createElement(N,null)},{id:"share",label:"Share",icon:t.createElement(j,null),disabled:!0},{id:"divider-3",type:"divider"},{id:"delete",label:"Delete",icon:t.createElement(T,null),shortcut:"Del",danger:!0}],c={args:{items:V,onSelect:i=>console.log("Selected:",i),children:t.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"12rem",border:"1px dashed #8d8d8d",borderRadius:"4px",color:"#525252",userSelect:"none"}},"Right-click anywhere in this area")}},A=[{id:"copy",label:"Copy",shortcut:"⌘C"},{id:"paste",label:"Paste",shortcut:"⌘V"},{id:"divider-1",type:"divider"},{id:"select-all",label:"Select All",shortcut:"⌘A"}],u={args:{items:A,onSelect:i=>console.log("Selected:",i),children:t.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"8rem",border:"1px dashed #8d8d8d",borderRadius:"4px",color:"#525252",userSelect:"none"}},"Right-click for a simple menu")}};var v,E,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: fileItems,
    onSelect: id => console.log('Selected:', id),
    children: <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '12rem',
      border: '1px dashed #8d8d8d',
      borderRadius: '4px',
      color: '#525252',
      userSelect: 'none'
    }}>
        Right-click anywhere in this area
      </div>
  }
}`,...(C=(E=c.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var w,k,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: simpleItems,
    onSelect: id => console.log('Selected:', id),
    children: <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '8rem',
      border: '1px dashed #8d8d8d',
      borderRadius: '4px',
      color: '#525252',
      userSelect: 'none'
    }}>
        Right-click for a simple menu
      </div>
  }
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const U=["Default","Simple"];export{c as Default,u as Simple,U as __namedExportsOrder,Q as default};
