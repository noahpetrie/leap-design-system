import{R as e}from"./index-C5e9SFkp.js";import{L as r}from"./LeapLogo-BZxb4lMD.js";import"./index-Cv3U8xn7.js";import"./utils-C8nBGPD0.js";const M={title:"Brand/LeapLogo",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["mark","bordered"]},size:{control:{type:"range",min:16,max:200,step:4}},color:{control:"color"}},parameters:{docs:{description:{component:`The official Leap logo as a React component. Available in two variants: "mark" (the triple-circle logomark) and "bordered" (logomark inside a rounded square border). Supports custom size and color.

### Import
\`\`\`jsx
import { LeapLogo } from '@noahpetrie/leap-design-system';
import '@noahpetrie/leap-design-system/styles';
\`\`\``}}}},a={args:{variant:"mark",size:80}},s={args:{variant:"bordered",size:80}},o={args:{variant:"mark",size:24}},n={args:{variant:"mark",size:160}},t={args:{variant:"mark",size:80,color:"#ffffff"},parameters:{backgrounds:{default:"dark"}},decorators:[R=>e.createElement("div",{style:{padding:"2rem",background:"#161616",borderRadius:"8px",display:"inline-block"}},e.createElement(R,null))]},i={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem"}},e.createElement(r,{size:16}),e.createElement(r,{size:24}),e.createElement(r,{size:32}),e.createElement(r,{size:48}),e.createElement(r,{size:64}),e.createElement(r,{size:96}))};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'mark',
    size: 80
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    size: 80
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,z,L;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'mark',
    size: 24
  }
}`,...(L=(z=o.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var f,k,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'mark',
    size: 160
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,b,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'mark',
    size: 80,
    color: '#ffffff'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div style={{
    padding: '2rem',
    background: '#161616',
    borderRadius: '8px',
    display: 'inline-block'
  }}>
        <Story />
      </div>]
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,x,h;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  }}>
      <LeapLogo size={16} />
      <LeapLogo size={24} />
      <LeapLogo size={32} />
      <LeapLogo size={48} />
      <LeapLogo size={64} />
      <LeapLogo size={96} />
    </div>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const T=["Mark","Bordered","Small","Large","White","AllSizes"];export{i as AllSizes,s as Bordered,n as Large,a as Mark,o as Small,t as White,T as __namedExportsOrder,M as default};
