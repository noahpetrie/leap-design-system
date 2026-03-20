import{R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as w}from"./utils-C8nBGPD0.js";import{M as z}from"./bucket-12-BPbSY3Yz.js";import{L as A}from"./LeapLogo-BZxb4lMD.js";import{N as H}from"./bucket-13-D_bsWaAe.js";import{b as S}from"./bucket-19-C2kUjc-x.js";import"./Icon-IPhGtQ88.js";const i=({appName:c="Leap",logoSrc:p,logo:q,navItems:f=[],actions:m,onMenuClick:u,...C})=>e.createElement("header",{className:"flex items-center h-[3rem] w-full px-[1rem] bg-[#161616] text-[#ffffff] fixed top-0 left-0 z-[8000]",...C},e.createElement("div",{className:"flex items-center gap-[0.5rem] shrink-0"},u&&e.createElement("button",{className:"flex items-center justify-center w-[2rem] h-[2rem] p-0 border-none rounded-none bg-transparent text-[#ffffff] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] focus:outline-2 focus:outline-[#ffffff] focus:-outline-offset-2",type:"button","aria-label":"Open menu",onClick:u},e.createElement(z,{size:20})),q||p&&e.createElement("img",{className:"h-[1.25rem] w-auto",src:p,alt:`${c} logo`}),e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[#ffffff] whitespace-nowrap"},c)),f.length>0&&e.createElement("nav",{className:"flex items-center h-full ml-[1rem] gap-0 overflow-x-auto","aria-label":"Main navigation"},f.map(a=>{const I=a.href?"a":"button";return e.createElement(I,{key:a.id,className:w("flex items-center h-full px-[1rem] text-[14px] tracking-[0.16px] text-[#ffffff] no-underline border-none bg-transparent cursor-pointer whitespace-nowrap border-b-2 border-b-transparent","hover:bg-[rgba(255,255,255,0.1)] hover:text-[#ffffff]","focus:outline-2 focus:outline-[#ffffff] focus:-outline-offset-2",a.isActive&&"border-b-[#0c8c5e] hover:border-b-[#096b48]"),href:a.href||void 0,onClick:a.onClick,type:a.href?void 0:"button"},a.label)})),m&&e.createElement("div",{className:"flex items-center gap-[0.5rem] ml-auto shrink-0"},m));i.propTypes={appName:r.string,logoSrc:r.string,logo:r.node,navItems:r.arrayOf(r.shape({id:r.string.isRequired,label:r.string.isRequired,href:r.string,onClick:r.func,isActive:r.bool})),actions:r.node,onMenuClick:r.func};i.__docgenInfo={description:"",methods:[],displayName:"LeapHeader",props:{appName:{defaultValue:{value:"'Leap'",computed:!1},description:"",type:{name:"string"},required:!1},navItems:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},label:{name:"string",required:!0},href:{name:"string",required:!1},onClick:{name:"func",required:!1},isActive:{name:"bool",required:!1}}}},required:!1},logoSrc:{description:"",type:{name:"string"},required:!1},logo:{description:"",type:{name:"node"},required:!1},actions:{description:"",type:{name:"node"},required:!1},onMenuClick:{description:"",type:{name:"func"},required:!1}}};const T={title:"Components/LeapHeader",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"A fixed top navigation bar with app branding, horizontal nav items, and an action slot for icons and controls.\n\n### Import\n```jsx\nimport { LeapHeader } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},l=[{id:"dashboard",label:"Dashboard",href:"#",isActive:!0},{id:"projects",label:"Projects",href:"#"},{id:"reports",label:"Reports",href:"#"},{id:"settings",label:"Settings",href:"#"}],t={args:{appName:"Leap",navItems:l,onMenuClick:()=>console.log("Menu clicked")}},o={args:{appName:"Leap",logo:e.createElement(A,{variant:"mark",size:20,color:"#ffffff"}),navItems:l,onMenuClick:()=>console.log("Menu clicked")}},n={render:()=>e.createElement(i,{appName:"Leap",navItems:l,onMenuClick:()=>console.log("Menu clicked"),actions:e.createElement(e.Fragment,null,e.createElement("button",{type:"button","aria-label":"Notifications",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center"}},e.createElement(H,{size:20})),e.createElement("button",{type:"button","aria-label":"User profile",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center"}},e.createElement(S,{size:20})))})},s={args:{appName:"Leap"}};var d,g,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    appName: 'Leap',
    navItems: sampleNav,
    onMenuClick: () => console.log('Menu clicked')
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    appName: 'Leap',
    logo: <LeapLogo variant="mark" size={20} color="#ffffff" />,
    navItems: sampleNav,
    onMenuClick: () => console.log('Menu clicked')
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,x,N;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <LeapHeader appName="Leap" navItems={sampleNav} onMenuClick={() => console.log('Menu clicked')} actions={<>
          <button type="button" aria-label="Notifications" style={{
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }}>
            <Notification size={20} />
          </button>
          <button type="button" aria-label="User profile" style={{
      background: 'none',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }}>
            <UserAvatar size={20} />
          </button>
        </>} />
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var L,E,M;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    appName: 'Leap'
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const V=["Default","WithLogo","WithActions","MinimalHeader"];export{t as Default,s as MinimalHeader,n as WithActions,o as WithLogo,V as __namedExportsOrder,T as default};
