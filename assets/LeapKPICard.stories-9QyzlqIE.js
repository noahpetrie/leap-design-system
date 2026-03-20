import{r as q,R as e}from"./index-C5e9SFkp.js";import{P as a}from"./index-Cv3U8xn7.js";import{c as k}from"./utils-C8nBGPD0.js";const I={"on-track":"On Track","at-risk":"At Risk","off-track":"Off Track"},w={"on-track":"bg-[#0c8c5e]","at-risk":"bg-[#f1c21b]","off-track":"bg-[#da1e28]"},K={"on-track":"bg-[rgba(12,140,94,0.15)] text-[#0c8c5e]","at-risk":"bg-[rgba(241,194,27,0.2)] text-[#8e6a00]","off-track":"bg-[#fff1f1] text-[#da1e28]"},M={"on-track":"#0c8c5e","at-risk":"#f1c21b","off-track":"#da1e28"},j=(t,d=120,r=40)=>{if(!t||t.length<2)return"";const n=Math.min(...t),s=Math.max(...t)-n||1,o=d/(t.length-1),i=2,g=r-i*2;return t.map((_,A)=>{const L=A*o,P=i+g-(_-n)/s*g;return`${L},${P}`}).join(" ")},u=({label:t,value:d,unit:r,target:n,trend:f,status:s})=>{const o=q.useMemo(()=>j(f),[f]),i=M[s]||"#525252";return e.createElement("div",{className:"border border-[var(--cds-border-subtle,#e0e0e0)] rounded-[4px] p-[1.25rem] font-['IBM_Plex_Sans',sans-serif] text-[var(--cds-text-primary,#1a1a18)] min-w-[220px] max-w-[320px]",style:{backgroundColor:"var(--cds-layer, #ffffff)"}},e.createElement("div",{className:"flex items-center justify-between mb-[0.75rem]"},e.createElement("span",{className:"text-[12px] tracking-[0.32px] text-[#525252] uppercase font-medium"},t),e.createElement("span",{className:k("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] tracking-[0.32px] font-semibold",K[s])},e.createElement("span",{className:k("w-[6px] h-[6px] rounded-full shrink-0",w[s])}),I[s])),e.createElement("div",{className:"flex items-baseline gap-[0.25rem] mb-[0.125rem]"},e.createElement("span",{className:"text-[2rem] font-semibold leading-[1.1] text-[#1a1a18]"},d),r&&e.createElement("span",{className:"text-[14px] tracking-[0.16px] text-[#525252]"},r)),n!=null&&e.createElement("div",{className:"text-[12px] tracking-[0.32px] text-[#525252] mb-[0.75rem]"},"Target: ",n,r?` ${r}`:""),o&&e.createElement("div",{className:"py-[0.25rem]"},e.createElement("svg",{width:"120",height:"40",viewBox:"0 0 120 40",className:"block w-full h-[40px]","aria-hidden":"true"},e.createElement("polyline",{points:o,fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))};u.propTypes={label:a.string.isRequired,value:a.oneOfType([a.string,a.number]).isRequired,unit:a.string,target:a.oneOfType([a.string,a.number]),trend:a.arrayOf(a.number),status:a.oneOf(["on-track","at-risk","off-track"]).isRequired};u.defaultProps={unit:"",target:null,trend:[]};u.__docgenInfo={description:"",methods:[],displayName:"LeapKPICard",props:{unit:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},target:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},trend:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"number"}},required:!1},label:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!0},status:{description:"",type:{name:"enum",value:[{value:"'on-track'",computed:!1},{value:"'at-risk'",computed:!1},{value:"'off-track'",computed:!1}]},required:!0}}};const D={title:"Change Management/LeapKPICard",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"A KPI card that displays a metric value, target, status indicator, and an optional sparkline trend chart.\n\n### Import\n```jsx\nimport { LeapKPICard } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},c={args:{label:"Adoption Rate",value:87,unit:"%",target:85,trend:[42,55,60,64,70,74,78,82,85,87],status:"on-track"}},l={args:{label:"Training Completion",value:62,unit:"%",target:90,trend:[30,38,42,48,50,53,55,58,60,62],status:"at-risk"}},p={args:{label:"Stakeholder Satisfaction",value:3.2,unit:"/ 5",target:4.5,trend:[4.2,4,3.8,3.9,3.6,3.5,3.4,3.3,3.2,3.2],status:"off-track"}},m={args:{label:"Change Requests",value:12,unit:"open",target:5,trend:[],status:"at-risk"}};var x,b,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Adoption Rate',
    value: 87,
    unit: '%',
    target: 85,
    trend: [42, 55, 60, 64, 70, 74, 78, 82, 85, 87],
    status: 'on-track'
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var S,y,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Training Completion',
    value: 62,
    unit: '%',
    target: 90,
    trend: [30, 38, 42, 48, 50, 53, 55, 58, 60, 62],
    status: 'at-risk'
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,E,O;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Stakeholder Satisfaction',
    value: 3.2,
    unit: '/ 5',
    target: 4.5,
    trend: [4.2, 4.0, 3.8, 3.9, 3.6, 3.5, 3.4, 3.3, 3.2, 3.2],
    status: 'off-track'
  }
}`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var R,C,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Change Requests',
    value: 12,
    unit: 'open',
    target: 5,
    trend: [],
    status: 'at-risk'
  }
}`,...(N=(C=m.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const G=["OnTrack","AtRisk","OffTrack","NoSparkline"];export{l as AtRisk,m as NoSparkline,p as OffTrack,c as OnTrack,G as __namedExportsOrder,D as default};
