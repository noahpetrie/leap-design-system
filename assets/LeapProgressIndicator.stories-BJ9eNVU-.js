import{R as e}from"./index-C5e9SFkp.js";import{P as t}from"./index-Cv3U8xn7.js";import{c as r}from"./utils-C8nBGPD0.js";import{C as V}from"./bucket-3-iB7GZNH-.js";import"./Icon-IPhGtQ88.js";const b=({steps:x=[],currentIndex:g=0,onChange:f,vertical:s=!1,...P})=>e.createElement("ol",{className:r("flex list-none m-0 p-0",s?"flex-col items-start":"items-start"),...P},x.map((a,n)=>{const o=n<g,i=n===g,z=n===x.length-1;return e.createElement("li",{key:a.id,className:r("relative",s?"flex flex-row items-start pb-4":"flex flex-col items-center flex-1"),"aria-current":i?"step":void 0},e.createElement("button",{type:"button",className:r("flex bg-transparent border-none cursor-pointer p-0","focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-2 focus-visible:rounded",s?"flex-row items-start gap-3":"flex-col items-center gap-2"),onClick:()=>f==null?void 0:f(n),tabIndex:0},e.createElement("span",{className:r("w-8 h-8 rounded-full flex items-center justify-center z-[1] flex-shrink-0",o&&"bg-[#0c8c5e] text-white",i&&"bg-[#0c8c5e] text-white shadow-[0_0_0_4px_rgba(12,140,94,0.2)]",!o&&!i&&"bg-[#e0e0e0] text-[#525252]")},o?e.createElement(V,{size:16}):e.createElement("span",{className:"text-xs font-semibold"},n+1)),e.createElement("span",{className:r("flex flex-col",s?"items-start text-left pt-1":"items-center text-center")},e.createElement("span",{className:r("text-[12px] tracking-[0.32px] whitespace-nowrap",i?"text-[#161616] font-semibold":"text-[#525252]")},a.label),a.secondaryLabel&&e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#6f6f6f]"},a.secondaryLabel),a.description&&e.createElement("span",{className:r("text-[12px] tracking-[0.32px] text-[#525252] mt-1 whitespace-normal",!s&&"max-w-[160px]")},a.description))),!z&&e.createElement("span",{className:r(s?"absolute top-8 left-[15px] w-0.5 h-[calc(100%-16px)] min-h-4":"absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5",o?"bg-[#0c8c5e]":"bg-[#e0e0e0]")}))}));b.propTypes={steps:t.arrayOf(t.shape({id:t.oneOfType([t.string,t.number]).isRequired,label:t.string.isRequired,description:t.string,secondaryLabel:t.string})).isRequired,currentIndex:t.number,onChange:t.func,vertical:t.bool};b.__docgenInfo={description:"",methods:[],displayName:"LeapProgressIndicator",props:{steps:{defaultValue:{value:"[]",computed:!1},description:"Array of step objects",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0},description:{name:"string",required:!1},secondaryLabel:{name:"string",required:!1}}}},required:!1},currentIndex:{defaultValue:{value:"0",computed:!1},description:"Zero-based index of the current active step",type:{name:"number"},required:!1},vertical:{defaultValue:{value:"false",computed:!1},description:"Display steps vertically instead of horizontally",type:{name:"bool"},required:!1},onChange:{description:"Callback fired when a step is clicked, receives the step index",type:{name:"func"},required:!1}}};const F={title:"Components/LeapProgressIndicator",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"A horizontal or vertical step-by-step wizard/stepper that guides users through a sequential process with completed, current, and incomplete states.\n\n### Import\n```jsx\nimport { LeapProgressIndicator } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{currentIndex:{control:{type:"number",min:0,max:5}},vertical:{control:"boolean"}}},u=[{id:"details",label:"Details"},{id:"configuration",label:"Configuration"},{id:"review",label:"Review"},{id:"submit",label:"Submit"}],l={args:{steps:u,currentIndex:2}},c={args:{steps:u,currentIndex:0}},p={args:{steps:u,currentIndex:3}},d={args:{steps:u,currentIndex:2,vertical:!0}},m={args:{steps:[{id:"gather",label:"Gather Requirements",description:"Collect input from stakeholders and define scope.",secondaryLabel:"Step 1 of 4"},{id:"design",label:"Design Solution",description:"Create wireframes and technical architecture.",secondaryLabel:"Step 2 of 4"},{id:"implement",label:"Implement",description:"Build and test the solution.",secondaryLabel:"Step 3 of 4"},{id:"deploy",label:"Deploy",description:"Roll out to production environment.",secondaryLabel:"Step 4 of 4"}],currentIndex:1}};var h,y,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentIndex: 2
  }
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,v,L;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentIndex: 0
  }
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var w,q,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentIndex: 3
  }
}`,...(k=(q=p.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var E,N,C;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    steps: defaultSteps,
    currentIndex: 2,
    vertical: true
  }
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var D,R,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'gather',
      label: 'Gather Requirements',
      description: 'Collect input from stakeholders and define scope.',
      secondaryLabel: 'Step 1 of 4'
    }, {
      id: 'design',
      label: 'Design Solution',
      description: 'Create wireframes and technical architecture.',
      secondaryLabel: 'Step 2 of 4'
    }, {
      id: 'implement',
      label: 'Implement',
      description: 'Build and test the solution.',
      secondaryLabel: 'Step 3 of 4'
    }, {
      id: 'deploy',
      label: 'Deploy',
      description: 'Roll out to production environment.',
      secondaryLabel: 'Step 4 of 4'
    }],
    currentIndex: 1
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const G=["Default","FirstStep","LastStep","Vertical","WithDescriptions"];export{l as Default,c as FirstStep,p as LastStep,d as Vertical,m as WithDescriptions,G as __namedExportsOrder,F as default};
