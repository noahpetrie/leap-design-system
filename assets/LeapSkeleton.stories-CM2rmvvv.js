import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as D}from"./utils-C8nBGPD0.js";const H={text:"rounded",heading:"rounded w-[40%]",card:"rounded-lg w-full",avatar:"rounded",button:"rounded-lg w-[120px]"},t=({variant:r="text",width:p,height:u,count:m=1,circle:g=!1,...N})=>{const V=Array.from({length:m},(l,B)=>B);return e.createElement("div",{className:"flex flex-col gap-2",...N},V.map(l=>e.createElement("div",{key:l,className:D("animate-shimmer bg-[length:200%_100%]","bg-gradient-to-r from-[#e0e0e0] via-white/40 to-[#e0e0e0]",H[r],g&&"rounded-full",l===m-1&&r==="text"&&!p&&"!w-[60%]"),style:{width:g?u||40:p||(r==="text"?"100%":void 0),height:u||(r==="text"?14:r==="heading"?24:r==="card"?120:40)}})))};t.propTypes={variant:a.oneOf(["text","heading","card","avatar","button"]),width:a.oneOfType([a.string,a.number]),height:a.oneOfType([a.string,a.number]),count:a.number,circle:a.bool};t.__docgenInfo={description:"",methods:[],displayName:"LeapSkeleton",props:{variant:{defaultValue:{value:"'text'",computed:!1},description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'heading'",computed:!1},{value:"'card'",computed:!1},{value:"'avatar'",computed:!1},{value:"'button'",computed:!1}]},required:!1},count:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},circle:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},width:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},height:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1}}};const j={title:"Components/LeapSkeleton",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A placeholder skeleton loader supporting text, heading, card, avatar, and button variants for use during content loading.\n\n### Import\n```jsx\nimport { LeapSkeleton } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{variant:{control:"select",options:["text","heading","card","avatar","button"]}}},n={args:{variant:"text",count:4}},o={args:{variant:"heading"}},s={args:{variant:"card",height:160}},i={args:{variant:"avatar",circle:!0,height:48}},d={args:{variant:"button",height:40}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:600}},e.createElement(t,{variant:"heading"}),e.createElement(t,{variant:"text",count:3}),e.createElement("div",{style:{display:"flex",gap:"16px"}},e.createElement(t,{variant:"card",height:120,width:"50%"}),e.createElement(t,{variant:"card",height:120,width:"50%"})),e.createElement(t,{variant:"text",count:2}),e.createElement(t,{variant:"button"}))};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    count: 4
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,y,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'heading'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,k,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    height: 160
  }
}`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var w,E,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'avatar',
    circle: true,
    height: 48
  }
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var _,q,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    height: 40
  }
}`,...(A=(q=d.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,O,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 600
  }}>
      <LeapSkeleton variant="heading" />
      <LeapSkeleton variant="text" count={3} />
      <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <LeapSkeleton variant="card" height={120} width="50%" />
        <LeapSkeleton variant="card" height={120} width="50%" />
      </div>
      <LeapSkeleton variant="text" count={2} />
      <LeapSkeleton variant="button" />
    </div>
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const z=["TextLines","Heading","Card","Avatar","Button","PageSkeleton"];export{i as Avatar,d as Button,s as Card,o as Heading,c as PageSkeleton,n as TextLines,z as __namedExportsOrder,j as default};
