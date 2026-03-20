import{r as o,R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as T}from"./utils-C8nBGPD0.js";import{L as p}from"./LeapButton-z14B9pfi.js";const Z={bottom:"-translate-x-1/2",top:"-translate-x-1/2 -translate-y-full",left:"-translate-x-full -translate-y-1/2",right:"-translate-y-1/2"},i=({children:U,content:W,align:v="bottom",open:_,defaultOpen:F=!1,onOpen:y,onClose:x,trigger:E="click",closeOnClickOutside:C=!0})=>{const[G,w]=o.useState(F),l=_!==void 0,n=l?_:G,d=o.useRef(null),k=o.useRef(null),h=o.useRef(null),L=o.useCallback(()=>{l||w(!0),y&&y()},[l,y]),s=o.useCallback(()=>{l||w(!1),x&&x()},[l,x]),J=o.useCallback(()=>{n?s():L()},[n,L,s]);o.useEffect(()=>{if(!n||!C)return;const t=r=>{k.current&&!k.current.contains(r.target)&&d.current&&!d.current.contains(r.target)&&s()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[n,C,s]),o.useEffect(()=>{if(!n)return;const t=r=>{r.key==="Escape"&&s()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[n,s]);const[P,Q]=o.useState({top:0,left:0});o.useEffect(()=>{if(!n||!d.current)return;const t=d.current.getBoundingClientRect(),r={};switch(v){case"top":r.top=t.top-8,r.left=t.left+t.width/2;break;case"bottom":r.top=t.bottom+8,r.left=t.left+t.width/2;break;case"left":r.top=t.top+t.height/2,r.left=t.left-8;break;case"right":r.top=t.top+t.height/2,r.left=t.right+8;break;default:r.top=t.bottom+8,r.left=t.left+t.width/2}Q(r)},[n,v]);const b={};E==="click"?b.onClick=J:E==="hover"&&(b.onMouseEnter=()=>{clearTimeout(h.current),L()},b.onMouseLeave=()=>{h.current=setTimeout(s,150)});const X=E==="hover"?{onMouseEnter:()=>clearTimeout(h.current),onMouseLeave:()=>{h.current=setTimeout(s,150)}}:{},Y={bottom:"top-[-6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#ffffff] border-t-0 drop-shadow-[0_-1px_0_#e0e0e0]",top:"bottom-[-6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#ffffff] border-b-0 drop-shadow-[0_1px_0_#e0e0e0]",left:"right-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-[#ffffff] border-r-0 drop-shadow-[1px_0_0_#e0e0e0]",right:"left-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-[#ffffff] border-l-0 drop-shadow-[-1px_0_0_#e0e0e0]"};return e.createElement("div",{className:"inline-block relative"},e.createElement("div",{ref:d,className:"inline-flex cursor-pointer",...b},U),n&&e.createElement("div",{ref:k,className:T("fixed z-[9999] min-w-[12rem] max-w-[20rem] border border-[var(--cds-border-subtle,#e0e0e0)] rounded shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-[14px] tracking-[0.16px]","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-[-2px]",Z[v]),style:{top:P.top,left:P.left,backgroundColor:"var(--cds-layer, #ffffff)"},role:"dialog",...X},e.createElement("div",{className:T("absolute w-0 h-0 border-solid",Y[v])}),e.createElement("div",{className:"px-4 py-3 text-[#161616]"},W)))};i.propTypes={children:a.node.isRequired,content:a.node.isRequired,align:a.oneOf(["top","bottom","left","right"]),open:a.bool,defaultOpen:a.bool,onOpen:a.func,onClose:a.func,trigger:a.oneOf(["click","hover"]),closeOnClickOutside:a.bool};i.__docgenInfo={description:"",methods:[],displayName:"LeapPopover",props:{align:{defaultValue:{value:"'bottom'",computed:!1},description:"Preferred alignment relative to the trigger",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},defaultOpen:{defaultValue:{value:"false",computed:!1},description:"Initial open state for uncontrolled usage",type:{name:"bool"},required:!1},trigger:{defaultValue:{value:"'click'",computed:!1},description:"Interaction that opens the popover",type:{name:"enum",value:[{value:"'click'",computed:!1},{value:"'hover'",computed:!1}]},required:!1},closeOnClickOutside:{defaultValue:{value:"true",computed:!1},description:"Whether clicking outside closes the popover",type:{name:"bool"},required:!1},children:{description:"Trigger element that the popover anchors to",type:{name:"node"},required:!0},content:{description:"Content rendered inside the popover body",type:{name:"node"},required:!0},open:{description:"Controlled open state",type:{name:"bool"},required:!1},onOpen:{description:"Callback when popover opens",type:{name:"func"},required:!1},onClose:{description:"Callback when popover closes",type:{name:"func"},required:!1}}};const oe={title:"Components/LeapPopover",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A general-purpose popover container that anchors to a trigger element. Supports click and hover triggers, four alignment directions, controlled and uncontrolled open state, and closes on outside click or Escape.\n\n### Import\n```jsx\nimport { LeapPopover } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},c=()=>e.createElement("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"}},e.createElement(i,{content:e.createElement("p",null,"This is a basic popover with some helpful context for the user.")},e.createElement(p,{size:"sm"},"Click me"))),m=()=>e.createElement("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"}},e.createElement(i,{trigger:"hover",content:e.createElement("p",null,"Popover appears on hover and dismisses when the cursor leaves.")},e.createElement(p,{size:"sm",kind:"tertiary"},"Hover me"))),u=()=>e.createElement("div",{style:{padding:"8rem 4rem 4rem",display:"flex",justifyContent:"center"}},e.createElement(i,{align:"top",content:e.createElement("p",null,"This popover is aligned above the trigger element.")},e.createElement(p,{size:"sm"},"Open above"))),f=()=>e.createElement("div",{style:{padding:"4rem",display:"flex",justifyContent:"flex-start"}},e.createElement(i,{align:"right",content:e.createElement("p",null,"This popover is aligned to the right of the trigger.")},e.createElement(p,{size:"sm"},"Open right"))),g=()=>e.createElement("div",{style:{padding:"4rem",display:"flex",justifyContent:"center"}},e.createElement(i,{content:e.createElement("div",null,e.createElement("h4",{style:{margin:"0 0 0.5rem"}},"Popover heading"),e.createElement("p",{style:{margin:"0 0 0.75rem"}},"This popover contains richer content including a heading, descriptive text, and an action button."),e.createElement(p,{size:"sm",kind:"primary"},"Take action"))},e.createElement(p,{size:"sm",kind:"ghost"},"Show details")));c.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"HoverTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"TopAligned"};f.__docgenInfo={description:"",methods:[],displayName:"RightAligned"};g.__docgenInfo={description:"",methods:[],displayName:"RichContent"};var R,B,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div style={{
  padding: '4rem',
  display: 'flex',
  justifyContent: 'center'
}}>
    <LeapPopover content={<p>This is a basic popover with some helpful context for the user.</p>}>
      <LeapButton size="sm">Click me</LeapButton>
    </LeapPopover>
  </div>`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var z,j,q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => <div style={{
  padding: '4rem',
  display: 'flex',
  justifyContent: 'center'
}}>
    <LeapPopover trigger="hover" content={<p>Popover appears on hover and dismisses when the cursor leaves.</p>}>
      <LeapButton size="sm" kind="tertiary">Hover me</LeapButton>
    </LeapPopover>
  </div>`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var N,S,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
  padding: '8rem 4rem 4rem',
  display: 'flex',
  justifyContent: 'center'
}}>
    <LeapPopover align="top" content={<p>This popover is aligned above the trigger element.</p>}>
      <LeapButton size="sm">Open above</LeapButton>
    </LeapPopover>
  </div>`,...(I=(S=u.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var A,H,D;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
  padding: '4rem',
  display: 'flex',
  justifyContent: 'flex-start'
}}>
    <LeapPopover align="right" content={<p>This popover is aligned to the right of the trigger.</p>}>
      <LeapButton size="sm">Open right</LeapButton>
    </LeapPopover>
  </div>`,...(D=(H=f.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var M,V,K;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => <div style={{
  padding: '4rem',
  display: 'flex',
  justifyContent: 'center'
}}>
    <LeapPopover content={<div>
          <h4 style={{
      margin: '0 0 0.5rem'
    }}>Popover heading</h4>
          <p style={{
      margin: '0 0 0.75rem'
    }}>
            This popover contains richer content including a heading, descriptive
            text, and an action button.
          </p>
          <LeapButton size="sm" kind="primary">
            Take action
          </LeapButton>
        </div>}>
      <LeapButton size="sm" kind="ghost">Show details</LeapButton>
    </LeapPopover>
  </div>`,...(K=(V=g.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};const ne=["Default","HoverTrigger","TopAligned","RightAligned","RichContent"];export{c as Default,m as HoverTrigger,g as RichContent,f as RightAligned,u as TopAligned,ne as __namedExportsOrder,oe as default};
