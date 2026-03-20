import{R as e}from"./index-C5e9SFkp.js";import{P as o}from"./index-Cv3U8xn7.js";import{c as f}from"./utils-C8nBGPD0.js";import{N as i}from"./bucket-13-D_bsWaAe.js";import"./Icon-IPhGtQ88.js";const n=e.forwardRef(function({className:u,count:t,...g},y){const v=t&&t>999?"999+":t;return e.createElement("div",{className:f("absolute flex items-center justify-center px-[0.25rem] pb-[0.125rem] rounded-full bg-[#da1e28] text-white text-[0.75rem] leading-[1rem] tracking-[0.32px] top-0 right-0 mt-[0.5rem] mr-[0.5rem] max-h-[1rem] min-h-[0.5rem] min-w-[0.5rem]",t&&"mt-[0.25rem] mr-[0.25rem]",u),ref:y,...g},v)});n.propTypes={className:o.string,count:o.number,id:o.string};n.__docgenInfo={description:`LeapBadgeIndicator — A small notification badge, typically used
as an overlay on icons or avatars to show unread counts.`,methods:[],displayName:"LeapBadgeIndicator",props:{className:{description:"",type:{name:"string"},required:!1},count:{description:'Numeric count to display. Values above 999 show as "999+". Omit for a dot indicator.',type:{name:"number"},required:!1},id:{description:"",type:{name:"string"},required:!1}}};const N={title:"Components/LeapBadgeIndicator",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A small notification badge indicator, used as an overlay on icons or avatars to show a dot or numeric unread count (capped at 999+).\n\n### Import\n```jsx\nimport { LeapBadgeIndicator } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{count:{control:"number"}}},a={render:()=>e.createElement("div",{style:{position:"relative",display:"inline-block",padding:"1rem"}},e.createElement(i,{size:24}),e.createElement(n,null))},r={render:()=>e.createElement("div",{style:{display:"flex",gap:"2rem"}},e.createElement("div",{style:{position:"relative",display:"inline-block",padding:"1rem"}},e.createElement(i,{size:24}),e.createElement(n,{count:3})),e.createElement("div",{style:{position:"relative",display:"inline-block",padding:"1rem"}},e.createElement(i,{size:24}),e.createElement(n,{count:42})),e.createElement("div",{style:{position:"relative",display:"inline-block",padding:"1rem"}},e.createElement(i,{size:24}),e.createElement(n,{count:999})),e.createElement("div",{style:{position:"relative",display:"inline-block",padding:"1rem"}},e.createElement(i,{size:24}),e.createElement(n,{count:1500})))};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    display: 'inline-block',
    padding: '1rem'
  }}>
      <Notification size={24} />
      <LeapBadgeIndicator />
    </div>
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '1rem'
    }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={3} />
      </div>
      <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '1rem'
    }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={42} />
      </div>
      <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '1rem'
    }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={999} />
      </div>
      <div style={{
      position: 'relative',
      display: 'inline-block',
      padding: '1rem'
    }}>
        <Notification size={24} />
        <LeapBadgeIndicator count={1500} />
      </div>
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["Dot","WithCount"];export{a as Dot,r as WithCount,k as __namedExportsOrder,N as default};
