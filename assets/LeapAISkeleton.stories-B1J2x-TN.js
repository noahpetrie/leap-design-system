import{r as K,R as e}from"./index-C5e9SFkp.js";import{P as n}from"./index-Cv3U8xn7.js";import{u as I,c as k,_ as S}from"./usePrefix-DKvSngT5.js";import{u as Q}from"./useIsomorphicEffect-cSlXweb7.js";const U=[.973051493507435,.15334737213558558,.5671034553053769];function w(r,s,t){return Math.floor(U[t%3]*(s-r+1))+r}const z=({paragraph:r=!1,lineCount:s=3,width:t="100%",heading:i=!1,className:b="",...B})=>{const E=I(),G=k({[`${E}--skeleton__text`]:!0,[`${E}--skeleton__heading`]:i,[b]:b}),f=parseInt(t,10),L=t.includes("px"),v=t.includes("%");let d=1;r&&(d=s);const p=K.useRef([]);Q(()=>{p.current.map((a,m)=>{const H=w(0,75,m)+"px",J=w(Math.max(f-75,0),f,m)+"px";a&&(v&&r?a.style.width=`calc(${t} - ${H})`:L&&r?a.style.width=J:a.style.width=t)})},[d,r,p,t,f,v,L]);const x=[];for(let a=0;a<d;a++)x.push(e.createElement("p",S({className:G,key:a,ref:m=>{p.current=[...p.current,m]}},B)));return d!==1?e.createElement("div",null,x):e.createElement(e.Fragment,null,x)};z.propTypes={className:n.string,heading:n.bool,lineCount:n.number,paragraph:n.bool,width:n.string};const F=({className:r,...s})=>{const t=I(),i=k(r,{[`${t}--icon--skeleton`]:!0});return e.createElement("div",S({className:i},s))};F.propTypes={className:n.string};const O=({className:r,...s})=>{const t=I(),i=k({[`${t}--skeleton__placeholder`]:!0},r);return e.createElement("div",S({className:i},s))};O.propTypes={className:n.string};const A={background:"linear-gradient(90deg, #e6f4ee 0%, rgba(12,140,94,0.12) 40%, #e6f4ee 60%, rgba(12,140,94,0.12) 100%)",backgroundSize:"200% 100%",animation:"leap-ai-shimmer 2s ease-in-out infinite"},l=({className:r,style:s,...t})=>e.createElement(z,{className:r,style:{...A,...s},...t});l.propTypes={className:n.string,heading:n.bool,lineCount:n.number,paragraph:n.bool,style:n.object,width:n.string};const o=({className:r,style:s,...t})=>e.createElement(F,{className:r,style:{...A,borderRadius:"50%",...s},...t});o.propTypes={className:n.string,style:n.object};const c=({className:r,style:s,...t})=>e.createElement(O,{className:r,style:{...A,borderRadius:"8px",...s},...t});c.propTypes={className:n.string,style:n.object};l.__docgenInfo={description:"LeapAISkeletonText — A skeleton text loader with an AI shimmer effect.",methods:[],displayName:"LeapAISkeletonText",props:{className:{description:"",type:{name:"string"},required:!1},heading:{description:"",type:{name:"bool"},required:!1},lineCount:{description:"",type:{name:"number"},required:!1},paragraph:{description:"",type:{name:"bool"},required:!1},style:{description:"",type:{name:"object"},required:!1},width:{description:"",type:{name:"string"},required:!1}}};o.__docgenInfo={description:"LeapAISkeletonIcon — A skeleton icon loader with AI shimmer.",methods:[],displayName:"LeapAISkeletonIcon",props:{className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};c.__docgenInfo={description:"LeapAISkeletonPlaceholder — A skeleton placeholder block with AI shimmer.",methods:[],displayName:"LeapAISkeletonPlaceholder",props:{className:{description:"",type:{name:"string"},required:!1},style:{description:"",type:{name:"object"},required:!1}}};const ee={title:"Components/LeapAISkeleton",tags:["autodocs"],parameters:{docs:{description:{component:"AI-themed skeleton loading states with a green shimmer effect, indicating AI-generated content is being loaded.\n\n### Import\n```jsx\nimport { LeapAISkeleton } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},u={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400}},e.createElement(l,{heading:!0,width:"60%"}),e.createElement(l,{paragraph:!0,lineCount:3}))},h={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem",alignItems:"center"}},e.createElement(o,null),e.createElement(o,{style:{width:"2rem",height:"2rem"}}),e.createElement(o,{style:{width:"3rem",height:"3rem"}}))},g={render:()=>e.createElement("div",{style:{display:"flex",gap:"1rem"}},e.createElement(c,null),e.createElement(c,null))},y={render:()=>e.createElement("div",{style:{border:"1px solid #e0e0e0",borderRadius:8,padding:"1.5rem",maxWidth:360,display:"flex",flexDirection:"column",gap:"0.75rem"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"}},e.createElement(o,{style:{width:"2rem",height:"2rem"}}),e.createElement(l,{width:"40%"})),e.createElement(l,{paragraph:!0,lineCount:3}),e.createElement(c,null))};var T,P,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: 400
  }}>
      <LeapAISkeletonText heading width="60%" />
      <LeapAISkeletonText paragraph lineCount={3} />
    </div>
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var N,C,q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <LeapAISkeletonIcon />
      <LeapAISkeletonIcon style={{
      width: '2rem',
      height: '2rem'
    }} />
      <LeapAISkeletonIcon style={{
      width: '3rem',
      height: '3rem'
    }} />
    </div>
}`,...(q=(C=h.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var R,j,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <LeapAISkeletonPlaceholder />
      <LeapAISkeletonPlaceholder />
    </div>
}`,...(W=(j=g.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var $,D,M;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: 8,
    padding: '1.5rem',
    maxWidth: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
        <LeapAISkeletonIcon style={{
        width: '2rem',
        height: '2rem'
      }} />
        <LeapAISkeletonText width="40%" />
      </div>
      <LeapAISkeletonText paragraph lineCount={3} />
      <LeapAISkeletonPlaceholder />
    </div>
}`,...(M=(D=y.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const te=["Text","Icon","Placeholder","CardLoading"];export{y as CardLoading,h as Icon,g as Placeholder,u as Text,te as __namedExportsOrder,ee as default};
