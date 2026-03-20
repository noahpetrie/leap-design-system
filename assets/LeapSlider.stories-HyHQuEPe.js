import{r as g,R as s}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as K}from"./utils-C8nBGPD0.js";const f=({value:e,onChange:a,min:t=0,max:l=100,step:o=1,label:i,helperText:x,showValue:w=!0,disabled:m=!1,...W})=>{const j=g.useRef(null),y=(e-t)/(l-t)*100,M=g.useCallback(n=>{a&&a(Number(n.target.value))},[a]),I=g.useCallback(n=>{if(m)return;let u=e;if(n.key==="ArrowRight"||n.key==="ArrowUp")u=Math.min(e+o,l);else if(n.key==="ArrowLeft"||n.key==="ArrowDown")u=Math.max(e-o,t);else return;a&&u!==e&&a(u)},[m,e,o,l,t,a]);return s.createElement("div",{className:K("flex flex-col gap-2 w-full",m&&"opacity-50 pointer-events-none"),...W},i&&s.createElement("label",{className:"flex items-center justify-between text-[12px] tracking-[0.32px] text-[#525252]",htmlFor:"leap-slider-input"},i,w&&s.createElement("span",{className:"text-[12px] tracking-[0.32px] font-semibold text-[#161616]"},e)),!i&&w&&s.createElement("span",{className:"text-[12px] tracking-[0.32px] font-semibold text-[#161616]"},e),s.createElement("input",{ref:j,id:"leap-slider-input",type:"range",className:`w-full h-1 rounded-sm appearance-none cursor-pointer outline-none
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0c8c5e] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0c8c5e] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb:hover]:bg-[#096b48] [&::-webkit-slider-thumb:hover]:border-[#096b48]
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0c8c5e] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0c8c5e] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-all [&::-moz-range-thumb:hover]:bg-[#096b48] [&::-moz-range-thumb:hover]:border-[#096b48]
          [&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-sm [&::-moz-range-track]:bg-[#8d8d8d]
          focus-visible:[&::-webkit-slider-thumb]:shadow-[0_0_0_2px_#0c8c5e]
          focus-visible:[&::-moz-range-thumb]:shadow-[0_0_0_2px_#0c8c5e]`,value:e,min:t,max:l,step:o,disabled:m,onChange:M,onKeyDown:I,style:{background:`linear-gradient(to right, #0c8c5e 0%, #0c8c5e ${y}%, #8d8d8d ${y}%, #8d8d8d 100%)`},"aria-label":i||"Slider","aria-valuemin":t,"aria-valuemax":l,"aria-valuenow":e}),x&&s.createElement("div",{className:"text-[12px] tracking-[0.32px] text-[#6f6f6f]"},x))};f.propTypes={value:r.number.isRequired,onChange:r.func.isRequired,min:r.number,max:r.number,step:r.number,label:r.string,helperText:r.string,showValue:r.bool,disabled:r.bool};f.__docgenInfo={description:"",methods:[],displayName:"LeapSlider",props:{min:{defaultValue:{value:"0",computed:!1},description:"Minimum value",type:{name:"number"},required:!1},max:{defaultValue:{value:"100",computed:!1},description:"Maximum value",type:{name:"number"},required:!1},step:{defaultValue:{value:"1",computed:!1},description:"Step increment",type:{name:"number"},required:!1},showValue:{defaultValue:{value:"true",computed:!1},description:"Whether to show the current value label",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the slider is disabled",type:{name:"bool"},required:!1},value:{description:"Current value of the slider",type:{name:"number"},required:!0},onChange:{description:"Callback when the value changes",type:{name:"func"},required:!0},label:{description:"Label text displayed above the slider",type:{name:"string"},required:!1},helperText:{description:"Helper text displayed below the slider",type:{name:"string"},required:!1}}};const H={title:"Components/LeapSlider",component:f,tags:["autodocs"],parameters:{docs:{description:{component:"A custom range slider with a filled track and thumb styled in Leap green, supporting labels, helper text, and keyboard navigation.\n\n### Import\n```jsx\nimport { LeapSlider } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}},argTypes:{onChange:{action:"changed"}}},d={args:{value:50,min:0,max:100,step:1,label:"Slider"}},p={args:{value:50,min:20,max:80,step:1,label:"Constrained range"}},c={args:{value:30,min:0,max:100,step:10,label:"Step of 10"}},b={args:{value:70,min:0,max:100,step:1,label:"Volume",helperText:"Adjust the playback volume"}},h={args:{value:40,min:0,max:100,step:1,label:"Disabled slider",disabled:!0}};var k,v,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    label: 'Slider'
  }
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var z,_,q;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 20,
    max: 80,
    step: 1,
    label: 'Constrained range'
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var L,C,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 10,
    label: 'Step of 10'
  }
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,V,E;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 70,
    min: 0,
    max: 100,
    step: 1,
    label: 'Volume',
    helperText: 'Adjust the playback volume'
  }
}`,...(E=(V=b.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var N,A,T;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    label: 'Disabled slider',
    disabled: true
  }
}`,...(T=(A=h.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const O=["Default","WithRange","WithStep","CustomLabel","Disabled"];export{b as CustomLabel,d as Default,h as Disabled,p as WithRange,c as WithStep,O as __namedExportsOrder,H as default};
