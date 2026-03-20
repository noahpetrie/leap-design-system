import{r as f,R as e}from"./index-C5e9SFkp.js";import{P as r}from"./index-Cv3U8xn7.js";import{c as i}from"./utils-C8nBGPD0.js";import{C as M}from"./bucket-3-iB7GZNH-.js";import{C as V}from"./bucket-4-CY8P0Ots.js";import"./Icon-IPhGtQ88.js";const n=({children:o,type:a="single",language:h,showCopy:z=!0,showLineNumbers:O=!1,maxHeight:y,className:b,...x})=>{const[s,L]=f.useState(!1),d=f.useRef(null),W=f.useCallback(async()=>{const g=typeof o=="string"?o:"";try{await navigator.clipboard.writeText(g)}catch{const t=document.createElement("textarea");t.value=g,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}L(!0),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>L(!1),2e3)},[o]),H=typeof o=="string"?o.split(`
`):[];return a==="inline"?e.createElement("code",{className:i("font-mono text-sm leading-5 bg-[#e0e0e0] text-[#161616] px-1.5 py-px rounded whitespace-nowrap",b),...x},o):e.createElement("div",{className:i("relative bg-[#262626] text-[#f4f4f4] rounded font-mono text-sm leading-5",a==="single"&&"flex items-center min-h-[2.5rem] pl-4 pr-12",a==="multi"&&"p-4 pr-12",b),...x},h&&e.createElement("div",{className:"pt-2 px-4 text-xs text-[#a8a8a8] tracking-[0.02em]"},h),e.createElement("div",{className:i(a==="single"&&"overflow-x-auto whitespace-nowrap flex-1",a==="multi"&&"flex"),style:a==="multi"&&y?{maxHeight:y,overflowY:"auto"}:void 0},a==="multi"&&O&&e.createElement("div",{className:"flex flex-col pr-4 mr-4 border-r border-[#525252] text-[#6f6f6f] text-right select-none shrink-0","aria-hidden":"true"},H.map((g,t)=>e.createElement("span",{key:t,className:"leading-5"},t+1))),e.createElement("pre",{className:"m-0 p-0 bg-transparent text-inherit font-inherit whitespace-pre flex-1 overflow-x-auto"},e.createElement("code",null,o))),z&&e.createElement("button",{className:i("absolute top-2 right-2 flex items-center justify-center w-8 h-8 p-0 border-none rounded bg-transparent text-[#a8a8a8] cursor-pointer transition-[color,background-color] duration-150","hover:bg-[#393939] hover:text-[#f4f4f4]","focus:outline-2 focus:outline-[#0c8c5e] focus:outline-offset-[-2px]",s&&"text-[#0c8c5e] hover:text-[#0c8c5e]"),type:"button","aria-label":s?"Copied!":"Copy code",title:s?"Copied!":"Copy code",onClick:W},s?e.createElement(M,{size:16}):e.createElement(V,{size:16})))};n.propTypes={children:r.string.isRequired,type:r.oneOf(["inline","single","multi"]),language:r.string,showCopy:r.bool,showLineNumbers:r.bool,maxHeight:r.string,className:r.string};n.__docgenInfo={description:"",methods:[],displayName:"LeapCodeSnippet",props:{type:{defaultValue:{value:"'single'",computed:!1},description:"Display variant",type:{name:"enum",value:[{value:"'inline'",computed:!1},{value:"'single'",computed:!1},{value:"'multi'",computed:!1}]},required:!1},showCopy:{defaultValue:{value:"true",computed:!1},description:"Show the copy-to-clipboard button",type:{name:"bool"},required:!1},showLineNumbers:{defaultValue:{value:"false",computed:!1},description:"Show line numbers (multi variant only)",type:{name:"bool"},required:!1},children:{description:"The code string to display",type:{name:"string"},required:!0},language:{description:"Language label displayed above the code block",type:{name:"string"},required:!1},maxHeight:{description:"Max height for scrollable multi variant",type:{name:"string"},required:!1},className:{description:"Additional CSS class",type:{name:"string"},required:!1}}};const K={title:"Components/LeapCodeSnippet",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A code display component supporting inline, single-line, and multi-line variants with optional copy-to-clipboard, line numbers, and language labels.\n\n### Import\n```jsx\nimport { LeapCodeSnippet } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},p={render:()=>e.createElement("p",{style:{fontSize:"0.875rem"}},"Run ",e.createElement(n,{type:"inline"},"npm install @leap/components")," to get started.")},l={render:()=>e.createElement(n,{type:"single"},"npx create-leap-app my-project --template change-management")},c={render:()=>e.createElement(n,{type:"multi"},`import { LeapButton } from '@leap/components';

function App() {
  return (
    <LeapButton kind="primary" onClick={() => console.log('clicked')}>
      Launch Initiative
    </LeapButton>
  );
}`)},m={render:()=>e.createElement(n,{type:"multi",showLineNumbers:!0},`const config = {
  org: 'acme-corp',
  project: 'digital-transformation',
  phases: ['assess', 'plan', 'execute', 'sustain'],
  enableAnalytics: true,
};

export default config;`)},u={render:()=>e.createElement(n,{type:"multi",language:"JavaScript",showLineNumbers:!0,maxHeight:"200px"},`// Stakeholder engagement scoring
function computeScore(stakeholder) {
  const weights = { influence: 0.4, readiness: 0.3, sentiment: 0.3 };
  return Object.entries(weights).reduce(
    (sum, [key, weight]) => sum + stakeholder[key] * weight,
    0
  );
}

const stakeholders = getActiveStakeholders();
const scores = stakeholders.map(computeScore);
console.log('Average score:', scores.reduce((a, b) => a + b, 0) / scores.length);`)};var S,C,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <p style={{
    fontSize: '0.875rem'
  }}>
      Run <LeapCodeSnippet type="inline">npm install @leap/components</LeapCodeSnippet> to get started.
    </p>
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var k,w,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <LeapCodeSnippet type="single">
      npx create-leap-app my-project --template change-management
    </LeapCodeSnippet>
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,A,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <LeapCodeSnippet type="multi">
      {\`import { LeapButton } from '@leap/components';

function App() {
  return (
    <LeapButton kind="primary" onClick={() => console.log('clicked')}>
      Launch Initiative
    </LeapButton>
  );
}\`}
    </LeapCodeSnippet>
}`,...(j=(A=c.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var q,R,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <LeapCodeSnippet type="multi" showLineNumbers>
      {\`const config = {
  org: 'acme-corp',
  project: 'digital-transformation',
  phases: ['assess', 'plan', 'execute', 'sustain'],
  enableAnalytics: true,
};

export default config;\`}
    </LeapCodeSnippet>
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,T,_;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <LeapCodeSnippet type="multi" language="JavaScript" showLineNumbers maxHeight="200px">
      {\`// Stakeholder engagement scoring
function computeScore(stakeholder) {
  const weights = { influence: 0.4, readiness: 0.3, sentiment: 0.3 };
  return Object.entries(weights).reduce(
    (sum, [key, weight]) => sum + stakeholder[key] * weight,
    0
  );
}

const stakeholders = getActiveStakeholders();
const scores = stakeholders.map(computeScore);
console.log('Average score:', scores.reduce((a, b) => a + b, 0) / scores.length);\`}
    </LeapCodeSnippet>
}`,...(_=(T=u.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const Q=["Inline","SingleLine","MultiLine","WithLineNumbers","WithLanguageLabel"];export{p as Inline,c as MultiLine,l as SingleLine,u as WithLanguageLabel,m as WithLineNumbers,Q as __namedExportsOrder,K as default};
