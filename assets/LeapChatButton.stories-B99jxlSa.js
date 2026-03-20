import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import{u as j,c as W,_ as $}from"./usePrefix-DKvSngT5.js";import{B as M}from"./Button-HrdzQtgu.js";import{a as n}from"./bucket-16-DByjHX--.js";import{a as U}from"./bucket-15-_blyBEkL.js";import{A as G}from"./bucket-0-BChVxR-Z.js";import{a as N}from"./bucket-18-uUFb7_qM.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./deprecate-wUyRZ4Kw.js";import"./useId-BCI3fkL9.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./Icon-IPhGtQ88.js";const D=e.forwardRef(function({className:m,children:u,disabled:h,isQuickAction:o,isSelected:y,kind:f,renderIcon:g,size:r,...P},R){const s=j(),_=W(m,{[`${s}--chat-btn`]:!0,[`${s}--chat-btn--with-icon`]:g,[`${s}--chat-btn--quick-action`]:o,[`${s}--chat-btn--quick-action--selected`]:y}),b=["sm","md","lg"];return o?(f="ghost",r="sm"):r&&!b.includes(r)&&(console.error(`Invalid size "${r}" provided to ChatButton. Size must be one of: ${b.join(", ")}. Defaulting to "lg".`),r="lg"),e.createElement(M,$({disabled:h,className:_,kind:f,ref:R,size:r,renderIcon:g},P),u)});D.propTypes={children:t.node,className:t.string,disabled:t.bool,isQuickAction:t.bool,isSelected:t.bool,kind:t.oneOf(["primary","secondary","danger","ghost","tertiary"]),renderIcon:t.oneOfType([t.func,t.object]),size:t.oneOf(["sm","md","lg"])};const a=e.forwardRef(function({className:m,children:u,...h},o){const y=["leap-chat-btn-wrapper",m].filter(Boolean).join(" ");return e.createElement("span",{className:y,style:{"--cds-button-primary":"#0c8c5e","--cds-button-primary-hover":"#096b48","--cds-button-primary-active":"#054a32","--cds-focus":"#0c8c5e","--cds-chat-button":"#0c8c5e","--cds-chat-button-selected":"#0c8c5e","--cds-chat-button-text-selected":"#fff",display:"inline-block"}},e.createElement(D,{ref:o,...h},u))});a.propTypes={children:t.node,className:t.string,disabled:t.bool,isQuickAction:t.bool,isSelected:t.bool,kind:t.oneOf(["primary","secondary","danger","ghost","tertiary"]),renderIcon:t.oneOfType([t.func,t.object]),size:t.oneOf(["sm","md","lg"])};a.__docgenInfo={description:`LeapChatButton — A chat-optimized button with quick-action support,
themed with Leap brand colors on top of Carbon's ChatButton.`,methods:[],displayName:"LeapChatButton",props:{children:{description:"Button content",type:{name:"node"},required:!1},className:{description:"Additional CSS class",type:{name:"string"},required:!1},disabled:{description:"Whether the button is disabled",type:{name:"bool"},required:!1},isQuickAction:{description:"Render as a quick-action button (compact, ghost style)",type:{name:"bool"},required:!1},isSelected:{description:"Whether the quick-action button is in a selected state",type:{name:"bool"},required:!1},kind:{description:"Button variant",type:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'danger'",computed:!1},{value:"'ghost'",computed:!1},{value:"'tertiary'",computed:!1}]},required:!1},renderIcon:{description:"Icon component to render",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},size:{description:"Button size",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1}}};const me={title:"Components/LeapChatButton",component:a,tags:["autodocs"],argTypes:{kind:{control:"select",options:["primary","secondary","tertiary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},isQuickAction:{control:"boolean"},isSelected:{control:"boolean"},disabled:{control:"boolean"},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"A chat-optimized pill-shaped button for conversational UI patterns. Supports standard button kinds (`primary`, `secondary`, `tertiary`, `ghost`, `danger`) and a `isQuickAction` mode for compact, outlined quick-reply buttons. Quick actions can be marked as `isSelected` to show a filled state.\n\n### Import\n```jsx\nimport { LeapChatButton } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},i={args:{children:"Send Message",kind:"primary",renderIcon:n}},c={args:{children:"Cancel",kind:"secondary"}},d={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",alignItems:"center"}},e.createElement(a,{size:"sm",renderIcon:n},"Small"),e.createElement(a,{size:"md",renderIcon:n},"Medium"),e.createElement(a,{size:"lg",renderIcon:n},"Large"))},l={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"}},e.createElement(a,{kind:"primary",renderIcon:n},"Primary"),e.createElement(a,{kind:"secondary",renderIcon:U},"Secondary"),e.createElement(a,{kind:"tertiary",renderIcon:G},"Tertiary"),e.createElement(a,{kind:"ghost",renderIcon:N},"Ghost"),e.createElement(a,{kind:"danger"},"Danger"))},p={render:()=>e.createElement("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"}},e.createElement(a,{isQuickAction:!0,renderIcon:N},"Helpful"),e.createElement(a,{isQuickAction:!0},"Summarize"),e.createElement(a,{isQuickAction:!0,isSelected:!0},"Selected"),e.createElement(a,{isQuickAction:!0,disabled:!0},"Disabled"),e.createElement(a,{isQuickAction:!0,isSelected:!0,disabled:!0},"Selected + Disabled"))};var k,B,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Send Message',
    kind: 'primary',
    renderIcon: Send
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var S,L,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    kind: 'secondary'
  }
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var v,A,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <LeapChatButton size="sm" renderIcon={Send}>Small</LeapChatButton>
      <LeapChatButton size="md" renderIcon={Send}>Medium</LeapChatButton>
      <LeapChatButton size="lg" renderIcon={Send}>Large</LeapChatButton>
    </div>
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var x,Q,z;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <LeapChatButton kind="primary" renderIcon={Send}>Primary</LeapChatButton>
      <LeapChatButton kind="secondary" renderIcon={Renew}>Secondary</LeapChatButton>
      <LeapChatButton kind="tertiary" renderIcon={Add}>Tertiary</LeapChatButton>
      <LeapChatButton kind="ghost" renderIcon={ThumbsUp}>Ghost</LeapChatButton>
      <LeapChatButton kind="danger">Danger</LeapChatButton>
    </div>
}`,...(z=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var q,w,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <LeapChatButton isQuickAction renderIcon={ThumbsUp}>Helpful</LeapChatButton>
      <LeapChatButton isQuickAction>Summarize</LeapChatButton>
      <LeapChatButton isQuickAction isSelected>Selected</LeapChatButton>
      <LeapChatButton isQuickAction disabled>Disabled</LeapChatButton>
      <LeapChatButton isQuickAction isSelected disabled>Selected + Disabled</LeapChatButton>
    </div>
}`,...(T=(w=p.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const ue=["Primary","Secondary","Sizes","Kinds","QuickAction"];export{l as Kinds,i as Primary,p as QuickAction,c as Secondary,d as Sizes,ue as __namedExportsOrder,me as default};
