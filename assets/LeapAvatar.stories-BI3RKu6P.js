import{R as e}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{c as h}from"./utils-C8nBGPD0.js";const F=s=>s.split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2),y={sm:24,md:40,lg:64,xl:96},K={sm:"text-[10px]",md:"text-sm",lg:"text-[22px]",xl:"text-[32px]"},U={sm:"w-2 h-2",md:"w-2.5 h-2.5",lg:"w-3.5 h-3.5",xl:"w-[18px] h-[18px]"},V={online:"bg-[#24a148]",away:"bg-[#f1c21b]",busy:"bg-[#da1e28]",offline:"bg-[#8d8d8d]"},a=({name:s,src:t,size:d="md",status:g,...B})=>{const f=y[d]||y.md;return e.createElement("div",{className:"relative rounded-full bg-[#f0faf5] text-[#0c8c5e] inline-flex items-center justify-center shrink-0 overflow-visible",style:{width:f,height:f},title:s,...B},t?e.createElement("img",{className:"w-full h-full rounded-full object-cover",src:t,alt:s}):e.createElement("span",{className:h("font-semibold select-none",K[d])},F(s)),g&&e.createElement("span",{className:h("absolute bottom-0 right-0 rounded-full border-2 border-[#f4f4f4]",U[d],V[g])}))};a.propTypes={name:n.string.isRequired,src:n.string,size:n.oneOf(["sm","md","lg","xl"]),status:n.oneOf(["online","away","busy","offline"])};a.__docgenInfo={description:"",methods:[],displayName:"LeapAvatar",props:{size:{defaultValue:{value:"'md'",computed:!1},description:"Avatar size",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},name:{description:"Full name — used for initials fallback and title",type:{name:"string"},required:!0},src:{description:"Image URL — falls back to initials if not provided",type:{name:"string"},required:!1},status:{description:"Online status indicator",type:{name:"enum",value:[{value:"'online'",computed:!1},{value:"'away'",computed:!1},{value:"'busy'",computed:!1},{value:"'offline'",computed:!1}]},required:!1}}};const X={title:"Components/LeapAvatar",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},status:{control:"select",options:[void 0,"online","away","busy","offline"]}},parameters:{docs:{description:{component:"Displays a user avatar with initials or an image, available in four sizes (sm, md, lg, xl) with optional online/away/busy/offline status indicators.\n\n### Import\n```jsx\nimport { LeapAvatar } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r={args:{name:"Sarah Chen",size:"lg"}},o={args:{name:"James Wilson",src:"https://i.pravatar.cc/150?u=james",size:"lg"}},i={args:{name:"Priya Patel",size:"lg",status:"online"}},l={args:{name:"Alex Moreau",size:"lg",status:"away"}},m={args:{name:"Dana Kim",size:"lg",status:"busy"}},c={args:{name:"Sarah Chen",size:"sm",status:"online"}},p={args:{name:"James Wilson",size:"xl",status:"online"}},u={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px"}},e.createElement(a,{name:"Sarah Chen",size:"sm",status:"online"}),e.createElement(a,{name:"Sarah Chen",size:"md",status:"online"}),e.createElement(a,{name:"Sarah Chen",size:"lg",status:"online"}),e.createElement(a,{name:"Sarah Chen",size:"xl",status:"online"}))};var v,x,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Chen',
    size: 'lg'
  }
}`,...(z=(x=r.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,b,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'James Wilson',
    src: 'https://i.pravatar.cc/150?u=james',
    size: 'lg'
  }
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var A,C,E;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'Priya Patel',
    size: 'lg',
    status: 'online'
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,I,j;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'Alex Moreau',
    size: 'lg',
    status: 'away'
  }
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var O,P,W;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'Dana Kim',
    size: 'lg',
    status: 'busy'
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var q,N,_;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'Sarah Chen',
    size: 'sm',
    status: 'online'
  }
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,J,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'James Wilson',
    size: 'xl',
    status: 'online'
  }
}`,...(R=(J=p.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var k,M,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <LeapAvatar name="Sarah Chen" size="sm" status="online" />
      <LeapAvatar name="Sarah Chen" size="md" status="online" />
      <LeapAvatar name="Sarah Chen" size="lg" status="online" />
      <LeapAvatar name="Sarah Chen" size="xl" status="online" />
    </div>
}`,...(T=(M=u.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const Y=["Initials","WithImage","Online","Away","Busy","Small","ExtraLarge","AllSizes"];export{u as AllSizes,l as Away,m as Busy,p as ExtraLarge,r as Initials,i as Online,c as Small,o as WithImage,Y as __namedExportsOrder,X as default};
