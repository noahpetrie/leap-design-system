import{r as b,R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import{c as F}from"./utils-C8nBGPD0.js";import{C as N}from"./bucket-3-iB7GZNH-.js";import{C as P}from"./bucket-4-CY8P0Ots.js";import"./Icon-IPhGtQ88.js";const D={ghost:"py-1.5 px-3 bg-transparent text-[#525252] hover:bg-[#e8e8e8] hover:text-[#161616]",primary:"py-1.5 px-3 bg-[#0c8c5e] text-white hover:bg-[#096b48]","icon-only":"p-1.5 bg-transparent text-[#525252] hover:bg-[#e8e8e8] hover:text-[#161616]"},W={sm:"pt-1 pb-1 text-xs leading-4 tracking-[0.32px] font-medium",md:"",lg:"pt-2 pb-2"},d=({text:a,label:u="Copy",feedbackText:y="Copied!",feedbackTimeout:x=2e3,size:f="md",kind:n="ghost",onCopy:s})=>{const[o,v]=b.useState(!1),g=b.useRef(null),_=b.useCallback(async()=>{try{await navigator.clipboard.writeText(a)}catch{const r=document.createElement("textarea");r.value=a,r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r)}v(!0),s==null||s(a),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>v(!1),x)},[a,x,s]);return e.createElement("button",{className:F("inline-flex items-center gap-1.5 border-none rounded cursor-pointer transition-[background,color] duration-150 text-sm leading-[1.125rem] tracking-[0.16px]","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-2",D[n],W[f],o&&"text-[#0c8c5e]",o&&n==="primary"&&"text-white"),onClick:_,type:"button","aria-label":o?y:u,title:o?y:u},o?e.createElement(e.Fragment,null,e.createElement(N,{size:f==="sm"?14:16}),n!=="icon-only"&&e.createElement("span",{className:"whitespace-nowrap"},y)):e.createElement(e.Fragment,null,e.createElement(P,{size:f==="sm"?14:16}),n!=="icon-only"&&e.createElement("span",{className:"whitespace-nowrap"},u)))};d.propTypes={text:t.string.isRequired,label:t.string,feedbackText:t.string,feedbackTimeout:t.number,size:t.oneOf(["sm","md","lg"]),kind:t.oneOf(["ghost","primary","icon-only"]),onCopy:t.func};d.__docgenInfo={description:"",methods:[],displayName:"LeapCopyButton",props:{label:{defaultValue:{value:"'Copy'",computed:!1},description:"",type:{name:"string"},required:!1},feedbackText:{defaultValue:{value:"'Copied!'",computed:!1},description:"",type:{name:"string"},required:!1},feedbackTimeout:{defaultValue:{value:"2000",computed:!1},description:"",type:{name:"number"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1}]},required:!1},kind:{defaultValue:{value:"'ghost'",computed:!1},description:"",type:{name:"enum",value:[{value:"'ghost'",computed:!1},{value:"'primary'",computed:!1},{value:"'icon-only'",computed:!1}]},required:!1},text:{description:"",type:{name:"string"},required:!0},onCopy:{description:"",type:{name:"func"},required:!1}}};const M={title:"Components/LeapCopyButton",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},kind:{control:"select",options:["ghost","primary","icon-only"]},onCopy:{action:"copied"}},parameters:{docs:{description:{component:"A one-click copy-to-clipboard button with visual feedback. Supports ghost, primary, and icon-only variants with configurable feedback text and timeout.\n\n### Import\n```jsx\nimport { LeapCopyButton } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},c={args:{text:"npm install @carbon/react",label:"Copy"}},i={args:{text:"https://leap-design-system.dev",label:"Copy Link",kind:"primary"}},l={args:{text:"sk-1234567890abcdef",kind:"icon-only"}},p={args:{text:"copied text",label:"Copy",size:"sm"}},m={render:a=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 0.75rem",background:"#262626",borderRadius:"4px",fontFamily:"monospace",fontSize:"0.875rem",color:"#f4f4f4"}},e.createElement("code",{style:{flex:1}},"npm install @carbon/react"),e.createElement(d,{...a})),args:{text:"npm install @carbon/react",kind:"icon-only"}};var h,C,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'npm install @carbon/react',
    label: 'Copy'
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var E,S,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'https://leap-design-system.dev',
    label: 'Copy Link',
    kind: 'primary'
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var q,z,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: 'sk-1234567890abcdef',
    kind: 'icon-only'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var L,R,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: 'copied text',
    label: 'Copy',
    size: 'sm'
  }
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var I,O,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    background: '#262626',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#f4f4f4'
  }}>
      <code style={{
      flex: 1
    }}>npm install @carbon/react</code>
      <LeapCopyButton {...args} />
    </div>,
  args: {
    text: 'npm install @carbon/react',
    kind: 'icon-only'
  }
}`,...(V=(O=m.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Q=["Default","Primary","IconOnly","Small","WithCodeBlock"];export{c as Default,l as IconOnly,i as Primary,p as Small,m as WithCodeBlock,Q as __namedExportsOrder,M as default};
