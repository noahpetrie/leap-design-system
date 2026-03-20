import{r,R as t}from"./index-C5e9SFkp.js";import{P as c}from"./index-Cv3U8xn7.js";import{c as K}from"./utils-C8nBGPD0.js";const k={top:"bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45",bottom:"top-[-4px] left-1/2 -translate-x-1/2 rotate-45",left:"right-[-4px] top-1/2 -translate-y-1/2 rotate-45",right:"left-[-4px] top-1/2 -translate-y-1/2 rotate-45"},a=({children:s,definition:N,align:u="bottom",openOnHover:O=!0})=>{const[l,h]=r.useState(!1),[v,_]=r.useState({top:0,left:0}),g=r.useRef(null),b=r.useRef(null),y=r.useCallback(()=>{if(!g.current||!b.current)return;const e=g.current.getBoundingClientRect(),o=b.current.getBoundingClientRect(),p=8;let i,n;switch(u){case"top":i=e.top-o.height-p,n=e.left+e.width/2-o.width/2;break;case"left":i=e.top+e.height/2-o.height/2,n=e.left-o.width-p;break;case"right":i=e.top+e.height/2-o.height/2,n=e.right+p;break;case"bottom":default:i=e.bottom+p,n=e.left+e.width/2-o.width/2;break}const T=window.innerWidth,D=window.innerHeight;n+o.width>T-4&&(n=T-o.width-4),n<4&&(n=4),i+o.height>D-4&&(i=D-o.height-4),i<4&&(i=4),_({top:i,left:n})},[u]);r.useEffect(()=>{l&&y()},[l,y]);const w=()=>h(!0),x=()=>h(!1),W=O?{onMouseEnter:w,onMouseLeave:x}:{};return t.createElement(t.Fragment,null,t.createElement("button",{ref:g,className:"inline p-0 bg-transparent border-0 border-b border-dotted border-b-[#161616] text-[#161616] text-[14px] leading-[1.5] tracking-[0.16px] cursor-help hover:border-b-[#0c8c5e] hover:text-[#0c8c5e] focus-visible:outline-2 focus-visible:outline-[#0c8c5e] focus-visible:outline-offset-2 focus-visible:rounded-[1px]",type:"button","aria-describedby":l?"leap-tooltip-definition-popup":void 0,onFocus:w,onBlur:x,onClick:()=>h(e=>!e),...W},s),l&&t.createElement("div",{ref:b,id:"leap-tooltip-definition-popup",className:"fixed z-[9999] max-w-[16rem] rounded-[2px] bg-[#393939] px-3 py-2 text-[14px] leading-[1.4] tracking-[0.16px] text-[#ffffff] shadow-[0_2px_6px_rgba(0,0,0,0.2)] pointer-events-none",style:{top:v.top,left:v.left},role:"tooltip"},t.createElement("span",{className:K("absolute h-2 w-2 bg-[#393939]",k[u]||k.bottom)}),N))};a.propTypes={children:c.node.isRequired,definition:c.node.isRequired,align:c.oneOf(["top","bottom","left","right"]),openOnHover:c.bool};a.__docgenInfo={description:"",methods:[],displayName:"LeapTooltipDefinition",props:{align:{defaultValue:{value:"'bottom'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},openOnHover:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"node"},required:!0},definition:{description:"",type:{name:"node"},required:!0}}};const B={title:"Components/LeapTooltipDefinition",component:a,tags:["autodocs"],argTypes:{align:{control:"select",options:["top","bottom","left","right"]}},parameters:{docs:{description:{component:"An inline term with a dotted underline that reveals a definition tooltip on hover or focus. Useful for defining jargon, acronyms, or domain-specific terms without interrupting reading flow.\n\n### Import\n```jsx\nimport { LeapTooltipDefinition } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},d={render:s=>t.createElement("p",{style:{maxWidth:"32rem",lineHeight:1.6}},"The change initiative was assessed using a"," ",t.createElement(a,{...s},"PROSCI ADKAR model")," ","to evaluate stakeholder readiness across all five dimensions."),args:{definition:"ADKAR stands for Awareness, Desire, Knowledge, Ability, and Reinforcement — a goal-oriented change management model.",align:"bottom"}},m={render:s=>t.createElement("p",{style:{maxWidth:"32rem",lineHeight:1.6,marginTop:"4rem"}},"The team measured"," ",t.createElement(a,{...s},"eNPS")," ","scores quarterly to track employee sentiment over the transition period."),args:{definition:"Employee Net Promoter Score — a metric measuring how likely employees are to recommend their workplace.",align:"top"}},f={render:()=>t.createElement("p",{style:{maxWidth:"36rem",lineHeight:1.6}},"The"," ",t.createElement(a,{definition:"A person or group who sponsors and champions the change initiative at the executive level."},"change sponsor")," ","approved the updated"," ",t.createElement(a,{definition:"A structured plan outlining key messages, audiences, channels, and timing for change-related communications."},"communication plan")," ","before the"," ",t.createElement(a,{definition:"The specific date when a new system, process, or organizational change officially takes effect."},"go-live date"),".")};var A,E,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <p style={{
    maxWidth: '32rem',
    lineHeight: 1.6
  }}>
      The change initiative was assessed using a{' '}
      <LeapTooltipDefinition {...args}>PROSCI ADKAR model</LeapTooltipDefinition>{' '}
      to evaluate stakeholder readiness across all five dimensions.
    </p>,
  args: {
    definition: 'ADKAR stands for Awareness, Desire, Knowledge, Ability, and Reinforcement — a goal-oriented change management model.',
    align: 'bottom'
  }
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var L,P,S;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <p style={{
    maxWidth: '32rem',
    lineHeight: 1.6,
    marginTop: '4rem'
  }}>
      The team measured{' '}
      <LeapTooltipDefinition {...args}>eNPS</LeapTooltipDefinition>{' '}
      scores quarterly to track employee sentiment over the transition period.
    </p>,
  args: {
    definition: 'Employee Net Promoter Score — a metric measuring how likely employees are to recommend their workplace.',
    align: 'top'
  }
}`,...(S=(P=m.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var H,q,C;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <p style={{
    maxWidth: '36rem',
    lineHeight: 1.6
  }}>
      The{' '}
      <LeapTooltipDefinition definition="A person or group who sponsors and champions the change initiative at the executive level.">
        change sponsor
      </LeapTooltipDefinition>{' '}
      approved the updated{' '}
      <LeapTooltipDefinition definition="A structured plan outlining key messages, audiences, channels, and timing for change-related communications.">
        communication plan
      </LeapTooltipDefinition>{' '}
      before the{' '}
      <LeapTooltipDefinition definition="The specific date when a new system, process, or organizational change officially takes effect.">
        go-live date
      </LeapTooltipDefinition>.
    </p>
}`,...(C=(q=f.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const j=["Default","TopAligned","MultipleTerms"];export{d as Default,f as MultipleTerms,m as TopAligned,j as __namedExportsOrder,B as default};
