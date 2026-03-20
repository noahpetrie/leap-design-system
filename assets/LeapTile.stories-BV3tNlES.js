import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as i}from"./utils-C8nBGPD0.js";import{C as U,a as B}from"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";const o=({variant:f="default",children:z,selected:n=!1,onSelect:v,expanded:l=!1,onToggle:h,expandedContent:x,onClick:y,disabled:b=!1,light:k=!1,...G})=>{const g=f==="clickable",t=f==="selectable",r=f==="expandable",O=()=>{b||(g&&y&&y(),t&&v&&v(!n),r&&h&&h(!l))},s=g||t||r,P=s?"button":"div";return e.createElement(P,{className:i("w-full rounded-lg border border-[var(--cds-border-subtle,#e0e0e0)] p-4 text-left text-[14px] tracking-[0.16px] text-[#161616]",k&&"bg-transparent",b&&"pointer-events-none opacity-50",g&&"cursor-pointer transition-[box-shadow,border-color] duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:border-[#0c8c5e] focus:outline-[2px] focus:outline-[#0c8c5e] focus:outline-offset-2",t&&"cursor-pointer transition-[border-color,background-color] duration-150 hover:border-[#0c8c5e] focus:outline-[2px] focus:outline-[#0c8c5e] focus:outline-offset-2",r&&"cursor-pointer transition-[border-color] duration-150 hover:border-[#0c8c5e] focus:outline-[2px] focus:outline-[#0c8c5e] focus:outline-offset-2",n&&t&&"border-[#0c8c5e] bg-[#e6f4ee]"),style:{backgroundColor:k?"var(--cds-layer, #ffffff)":"#f4f4f4"},onClick:s?O:void 0,type:s?"button":void 0,disabled:s?b:void 0,"aria-expanded":r?l:void 0,"aria-pressed":t?n:void 0,...G},e.createElement("div",{className:"flex items-start justify-between gap-3"},e.createElement("div",{className:"flex-1"},z),t&&e.createElement("span",{className:i("flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[var(--cds-border-subtle,#e0e0e0)] transition-[border-color,background-color,color] duration-150",n&&"border-[#0c8c5e] bg-[#0c8c5e] text-white")},e.createElement(U,{size:16,className:i(!n&&"text-transparent")})),r&&e.createElement("span",{className:i("flex shrink-0 items-center justify-center text-[#525252] transition-transform duration-200",l&&"rotate-180")},e.createElement(B,{size:16}))),r&&l&&x&&e.createElement("div",{className:"mt-3 border-t border-[var(--cds-border-subtle,#e0e0e0)] pt-3 text-[14px] tracking-[0.16px] text-[#525252]"},x))};o.propTypes={variant:a.oneOf(["default","clickable","selectable","expandable"]),children:a.node,selected:a.bool,onSelect:a.func,expanded:a.bool,onToggle:a.func,expandedContent:a.node,onClick:a.func,disabled:a.bool,light:a.bool};o.__docgenInfo={description:"",methods:[],displayName:"LeapTile",props:{variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'clickable'",computed:!1},{value:"'selectable'",computed:!1},{value:"'expandable'",computed:!1}]},required:!1},selected:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},expanded:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},light:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!1},onSelect:{description:"",type:{name:"func"},required:!1},onToggle:{description:"",type:{name:"func"},required:!1},expandedContent:{description:"",type:{name:"node"},required:!1},onClick:{description:"",type:{name:"func"},required:!1}}};const Q={title:"Components/LeapTile",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","clickable","selectable","expandable"]},onClick:{action:"clicked"},onSelect:{action:"selected"},onToggle:{action:"toggled"}},parameters:{docs:{description:{component:"A versatile tile/card component supporting default, clickable, selectable, and expandable variants. Use tiles to group related content in a visually contained surface.\n\n### Import\n```jsx\nimport { LeapTile } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},c={args:{children:"This is a static tile with informational content. It does not respond to user interaction."}},d={args:{variant:"clickable",children:"Click this tile to perform an action."}},p={args:{variant:"selectable",selected:!1,children:"Select this tile to include it in your change plan."}},u={args:{variant:"expandable",expanded:!1,children:"Stakeholder Impact Summary",expandedContent:e.createElement("div",null,e.createElement("p",null,"12 stakeholders affected across 3 departments."),e.createElement("p",null,"Estimated readiness: 74%"))}},m={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"1rem"}},e.createElement(o,null,"Adoption Rate: 82%"),e.createElement(o,null,"Active Initiatives: 5"),e.createElement(o,null,"Stakeholders Engaged: 47"))};var E,T,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'This is a static tile with informational content. It does not respond to user interaction.'
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,L,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'clickable',
    children: 'Click this tile to perform an action.'
  }
}`,...(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var w,I,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'selectable',
    selected: false,
    children: 'Select this tile to include it in your change plan.'
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var _,A,V;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'expandable',
    expanded: false,
    children: 'Stakeholder Impact Summary',
    expandedContent: <div>
        <p>12 stakeholders affected across 3 departments.</p>
        <p>Estimated readiness: 74%</p>
      </div>
  }
}`,...(V=(A=u.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var j,R,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
  }}>
      <LeapTile>Adoption Rate: 82%</LeapTile>
      <LeapTile>Active Initiatives: 5</LeapTile>
      <LeapTile>Stakeholders Engaged: 47</LeapTile>
    </div>
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const W=["Default","Clickable","Selectable","Expandable","Grid"];export{d as Clickable,c as Default,u as Expandable,m as Grid,p as Selectable,W as __namedExportsOrder,Q as default};
