import{r as a,R as t}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{c as I}from"./utils-C8nBGPD0.js";import{O as J}from"./bucket-13-D_bsWaAe.js";import{E as U,D as X}from"./bucket-6-BF5uQPP1.js";import{c as Y,S as Z}from"./bucket-16-DByjHX--.js";import{R as ee}from"./bucket-15-_blyBEkL.js";import{T as te}from"./bucket-18-uUFb7_qM.js";import"./Icon-IPhGtQ88.js";const ne={sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12"},m=({items:c=[],icon:Q=J,size:E="md",flipped:d=!1,onSelect:S,ariaLabel:H="Options"})=>{const[s,p]=a.useState(!1),[i,k]=a.useState({top:0,left:0}),u=a.useRef(null),f=a.useRef(null),L=a.useCallback(()=>{if(!u.current)return;const e=u.current.getBoundingClientRect();let r=e.bottom+2,o=d?e.right:e.left;k({top:r,left:o})},[d]);a.useEffect(()=>{s&&L()},[s,L]),a.useEffect(()=>{if(!s)return;requestAnimationFrame(()=>{if(!f.current)return;const r=f.current.getBoundingClientRect(),o=window.innerWidth,G=window.innerHeight;let{top:g,left:l}=i;d?l=l-r.width<4?4:l:l+r.width>o-4&&(l=o-r.width-4),g+r.height>G-4&&(g=u.current.getBoundingClientRect().top-r.height-2),(g!==i.top||l!==i.left)&&k({top:g,left:l})})},[s,i,d]);const O=a.useCallback(e=>{var r,o;(r=u.current)!=null&&r.contains(e.target)||(o=f.current)!=null&&o.contains(e.target)||p(!1)},[]),C=a.useCallback(e=>{e.key==="Escape"&&p(!1)},[]);a.useEffect(()=>(s&&(document.addEventListener("click",O),document.addEventListener("keydown",C)),()=>{document.removeEventListener("click",O),document.removeEventListener("keydown",C)}),[s,O,C]);const K=e=>{e.disabled||(p(!1),S==null||S(e.id))},$=E==="sm"?16:E==="lg"?24:20;return t.createElement("div",{className:"inline-block relative"},t.createElement("button",{ref:u,className:I("inline-flex items-center justify-center border-none rounded bg-transparent text-[#161616] cursor-pointer transition-colors","hover:bg-[#e8e8e8]","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-[-2px]",ne[E]),onClick:()=>p(e=>!e),"aria-haspopup":"true","aria-expanded":s,"aria-label":H,type:"button"},t.createElement(Q,{size:$})),s&&t.createElement("div",{ref:f,className:"fixed z-[9999] min-w-[10rem] max-w-[18rem] py-1 bg-[#f4f4f4] border border-[#e0e0e0] shadow-[0_2px_6px_rgba(0,0,0,0.2)]",style:{top:i.top,left:d?"auto":i.left,right:d?`calc(100vw - ${i.left}px)`:"auto"},role:"menu"},c.map(e=>e.type==="divider"?t.createElement("div",{key:e.id,className:"h-px my-1 bg-[#e0e0e0]",role:"separator"}):t.createElement("button",{key:e.id,className:I("flex items-center gap-2 w-full px-4 py-2 border-none bg-transparent text-[#161616] text-[14px] tracking-[0.16px] cursor-pointer text-left whitespace-nowrap","hover:bg-[#e8e8e8]","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-[-2px]",e.danger&&"text-[#da1e28] hover:bg-[#da1e28] hover:text-white",e.disabled&&"text-[#8d8d8d] cursor-not-allowed hover:bg-transparent"),role:"menuitem",disabled:e.disabled,onClick:()=>K(e)},e.icon&&t.createElement("span",{className:"flex items-center flex-shrink-0 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:fill-current"},e.icon),t.createElement("span",null,e.label)))))};m.propTypes={items:n.arrayOf(n.shape({id:n.string.isRequired,label:n.string,icon:n.node,disabled:n.bool,danger:n.bool,type:n.oneOf(["item","divider"])})),icon:n.elementType,size:n.oneOf(["sm","md","lg"]),flipped:n.bool,onSelect:n.func,ariaLabel:n.string};m.__docgenInfo={description:"",methods:[],displayName:"LeapOverflowMenu",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!1},icon:{name:"node",required:!1},disabled:{name:"bool",required:!1},danger:{name:"bool",required:!1},type:{name:"enum",value:[{value:"'item'",computed:!1},{value:"'divider'",computed:!1}],required:!1}}}},required:!1},icon:{defaultValue:{value:"OverflowMenuVertical",computed:!0},description:"",type:{name:"elementType"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},flipped:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},ariaLabel:{defaultValue:{value:"'Options'",computed:!1},description:"",type:{name:"string"},required:!1},onSelect:{description:"",type:{name:"func"},required:!1}}};const fe={title:"Components/LeapOverflowMenu",component:m,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},onSelect:{action:"selected"}},parameters:{docs:{description:{component:"A three-dot overflow menu that reveals a list of actions. Supports icons, dividers, disabled items, danger actions, and flipped (right-aligned) positioning.\n\n### Import\n```jsx\nimport { LeapOverflowMenu } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},w=[{id:"edit",label:"Edit",icon:t.createElement(U,null)},{id:"download",label:"Download",icon:t.createElement(X,null)},{id:"share",label:"Share",icon:t.createElement(Y,null)},{id:"divider-1",type:"divider"},{id:"settings",label:"Settings",icon:t.createElement(Z,null)},{id:"restart",label:"Restart",icon:t.createElement(ee,null),disabled:!0},{id:"divider-2",type:"divider"},{id:"delete",label:"Delete",icon:t.createElement(te,null),danger:!0}],v={args:{items:w}},b={args:{items:w,size:"sm"}},y={render:c=>t.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t.createElement(m,{...c})),args:{items:w,flipped:!0}},re=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],h={args:{items:re}},x={render:c=>t.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 1rem",border:"1px solid #e0e0e0",borderRadius:"4px",maxWidth:"24rem"}},t.createElement("div",null,t.createElement("div",{style:{fontWeight:600,fontSize:"0.875rem"}},"Q1 Change Initiative"),t.createElement("div",{style:{fontSize:"0.75rem",color:"#525252"}},"Last updated 2 hours ago")),t.createElement(m,{...c})),args:{items:w,size:"sm"}};var R,q,z;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(z=(q=v.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var _,j,M;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'sm'
  }
}`,...(M=(j=b.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,N,P;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <LeapOverflowMenu {...args} />
    </div>,
  args: {
    items: defaultItems,
    flipped: true
  }
}`,...(P=(N=y.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var T,V,W;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: simpleItems
  }
}`,...(W=(V=h.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,F,A;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    maxWidth: '24rem'
  }}>
      <div>
        <div style={{
        fontWeight: 600,
        fontSize: '0.875rem'
      }}>Q1 Change Initiative</div>
        <div style={{
        fontSize: '0.75rem',
        color: '#525252'
      }}>Last updated 2 hours ago</div>
      </div>
      <LeapOverflowMenu {...args} />
    </div>,
  args: {
    items: defaultItems,
    size: 'sm'
  }
}`,...(A=(F=x.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const ge=["Default","Small","Flipped","Simple","InContext"];export{v as Default,y as Flipped,x as InContext,h as Simple,b as Small,ge as __namedExportsOrder,fe as default};
