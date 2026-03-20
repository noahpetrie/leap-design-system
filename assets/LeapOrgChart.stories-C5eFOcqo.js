import{R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";const P=({name:r,role:n})=>e.createElement("div",{className:"flex flex-col items-center border-2 border-[#0c8c5e] rounded-lg px-4 py-2 min-w-[140px] text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("span",{className:"text-[14px] font-semibold tracking-[0.16px] text-[var(--cds-text-primary,#161616)]"},r),e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252] mt-0.5"},n)),u=({node:r,depth:n=0})=>{const f=r.children&&r.children.length>0;return e.createElement("div",{className:"flex flex-col items-center"},e.createElement(P,{name:r.name,role:r.role}),f&&n<3&&e.createElement("div",{className:"flex flex-col items-center w-full"},e.createElement("div",{className:"w-0.5 h-6 bg-[#c6c6c0] mx-auto"}),e.createElement("div",{className:"flex justify-center gap-4 relative"},r.children.map((l,x)=>e.createElement("div",{key:`${l.name}-${x}`,className:"flex flex-col items-center"},e.createElement("div",{className:"w-0.5 h-6 bg-[#c6c6c0] mx-auto"}),e.createElement(u,{node:l,depth:n+1}))))))},i=({data:r})=>r?e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded-lg p-6 overflow-x-auto",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement(u,{node:r,depth:0})):null,s={name:a.string.isRequired,role:a.string.isRequired};s.children=a.arrayOf(a.shape(s));i.propTypes={data:a.shape(s).isRequired};i.__docgenInfo={description:"",methods:[],displayName:"LeapOrgChart",props:{data:{description:"Nested hierarchy data (max 3 levels deep)",type:{name:"shape",value:{name:{name:"string",required:!0},role:{name:"string",required:!0}}},required:!0}}};const v={title:"Components/LeapOrgChart",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"A hierarchical organization chart that renders a tree of people with name and role cards, supporting up to three levels of depth.\n\n### Import\n```jsx\nimport { LeapOrgChart } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},t={args:{data:{name:"Sarah Chen",role:"CEO",children:[{name:"James Wilson",role:"VP Engineering",children:[{name:"Maria Garcia",role:"Director, Platform"},{name:"David Kim",role:"Director, Product"}]},{name:"Lisa Park",role:"VP Marketing",children:[{name:"Tom Brown",role:"Director, Brand"},{name:"Amy Lee",role:"Director, Growth"}]},{name:"Michael Ross",role:"VP Operations",children:[{name:"Nina Patel",role:"Director, Supply Chain"},{name:"Chris Wang",role:"Director, Logistics"}]}]}}},o={args:{data:{name:"Sarah Chen",role:"CEO",children:[{name:"James Wilson",role:"VP Engineering"},{name:"Lisa Park",role:"VP Marketing"},{name:"Michael Ross",role:"VP Operations"}]}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: {
      name: 'Sarah Chen',
      role: 'CEO',
      children: [{
        name: 'James Wilson',
        role: 'VP Engineering',
        children: [{
          name: 'Maria Garcia',
          role: 'Director, Platform'
        }, {
          name: 'David Kim',
          role: 'Director, Product'
        }]
      }, {
        name: 'Lisa Park',
        role: 'VP Marketing',
        children: [{
          name: 'Tom Brown',
          role: 'Director, Brand'
        }, {
          name: 'Amy Lee',
          role: 'Director, Growth'
        }]
      }, {
        name: 'Michael Ross',
        role: 'VP Operations',
        children: [{
          name: 'Nina Patel',
          role: 'Director, Supply Chain'
        }, {
          name: 'Chris Wang',
          role: 'Director, Logistics'
        }]
      }]
    }
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: {
      name: 'Sarah Chen',
      role: 'CEO',
      children: [{
        name: 'James Wilson',
        role: 'VP Engineering'
      }, {
        name: 'Lisa Park',
        role: 'VP Marketing'
      }, {
        name: 'Michael Ross',
        role: 'VP Operations'
      }]
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const D=["Default","Small"];export{t as Default,o as Small,D as __namedExportsOrder,v as default};
