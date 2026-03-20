import{R as m,r as h}from"./index-C5e9SFkp.js";import{P as e}from"./index-Cv3U8xn7.js";import{u as M,c as O,_ as N,P as oe}from"./usePrefix-DKvSngT5.js";import{d as re}from"./deprecate-wUyRZ4Kw.js";import{c as V}from"./events-CA4jvATf.js";import{f as j,A as le,a as ie,b as ce,S as de}from"./useId-BCI3fkL9.js";import{g as me}from"./navigation-Cdkp0O4D.js";import{i as pe}from"./utils-B-HSZv_z.js";import{I as ue}from"./index-DXRVHWKy.js";import{n as z}from"./noopFn-g4z370MD.js";import{c as fe}from"./utils-C8nBGPD0.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./Tooltip-DiHq-Mla.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";const E=["xs","sm","md","lg","xl","2xl"],I=["condensed","normal"],he=m.forwardRef(({as:r="div",children:p,className:c,density:d,size:s,...f},l)=>{const a=M(),u=O(c,`${a}--layout`,{[`${a}--layout--size-${s}`]:s&&E.includes(s),[`${a}--layout--density-${d}`]:d&&I.includes(d)});return m.createElement(r,N({},f,{ref:l,className:u}),p)});he.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,density:e.oneOf(I),size:e.oneOf(E)};const ae=m.forwardRef(({as:r="div",children:p,className:c,density:d,size:s,...f},l)=>{const a=M(),u=O(c,Object.entries({size:s,density:d}).map(([o,t])=>({[`${a}--layout-constraint--${o}__default-${t==null?void 0:t.default}`]:t==null?void 0:t.default,[`${a}--layout-constraint--${o}__min-${t==null?void 0:t.min}`]:t==null?void 0:t.min,[`${a}--layout-constraint--${o}__max-${t==null?void 0:t.max}`]:t==null?void 0:t.max})));return m.createElement(r,N({},f,{ref:l,className:u}),p)});ae.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,density:e.shape({min:e.oneOf(I),default:e.oneOf(I),max:e.oneOf(I)}),size:e.shape({min:e.oneOf(E),default:e.oneOf(E),max:e.oneOf(E)})};const B=m.forwardRef((r,p)=>{const{children:c,className:d,disabled:s,index:f,name:l,onClick:a=z,onKeyDown:u=z,selected:o=!1,text:t,...x}=r,y=M(),$=w=>{w.preventDefault(),a==null||a({index:f,name:l,text:t})},g=w=>{const C=w.key||w.which;u==null||u({index:f,name:l,text:t,key:C})},D=O(d,`${y}--content-switcher-btn`,{[`${y}--content-switcher--selected`]:o}),b={onClick:$,onKeyDown:g,className:D,disabled:s};return m.createElement("button",N({type:"button",ref:p,role:"tab",tabIndex:o?0:-1,"aria-selected":o},x,b),m.createElement("span",{className:`${y}--content-switcher__label`,title:t},t!==void 0?t:c))});B.displayName="Switch";B.propTypes={children:e.node,className:e.string,disabled:e.bool,index:e.number,name:e.oneOfType([e.string,e.number]),onClick:e.func,onKeyDown:e.func,selected:e.bool,text:e.string};const ye=h.forwardRef,H=ye((r,p)=>{const{align:c,children:d,className:s,disabled:f,enterDelayMs:l,index:a,leaveDelayMs:u=0,name:o,onClick:t=z,onKeyDown:x=z,selected:y=!1,size:$,text:g,...D}=r,b=M(),[w,C]=h.useState(!1),A=v=>{v.preventDefault(),t({index:a,name:o,text:g})},K=v=>{const se=v.key||v.which;x({index:a,name:o,text:g,key:se})},k=()=>{C(!0)},n=()=>{C(!1)},i=O(s,`${b}--content-switcher-btn`,{[`${b}--content-switcher--selected`]:y}),S=O(`${b}--content-switcher-popover__wrapper`,{[`${b}--content-switcher-popover--selected`]:y,[`${b}--content-switcher-popover--disabled`]:f});return m.createElement(ue,N({label:g,type:"button",ref:p,role:"tab",tabIndex:y||w?0:-1,onMouseEnter:k,onMouseLeave:n,onFocus:k,onBlur:n,"aria-selected":y,"aria-label":g,wrapperClasses:S},D,{align:c,className:i,disabled:f,enterDelayMs:l,leaveDelayMs:u,onClick:A,onKeyDown:K,size:$}),d)});H.displayName="IconSwitch";H.propTypes={align:e.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]),children:e.node,className:e.string,disabled:e.bool,enterDelayMs:e.number,index:e.number,leaveDelayMs:e.number,name:e.oneOfType([e.string,e.number]),onClick:e.func,onKeyDown:e.func,selected:e.bool,size:e.oneOf(["sm","md","lg"]),text:e.string};const W=({children:r,className:p,light:c,lowContrast:d,selectedIndex:s=0,selectionMode:f="automatic",size:l,onChange:a,...u})=>{var k;const o=h.useContext(oe),[t,x]=h.useState(s),y=h.useRef(s),$=h.useRef([]),g=h.Children.toArray(r);h.useEffect(()=>{y.current!==s&&(x(s),y.current=s)},[s]);const D=n=>i=>{i&&($.current[n]=i)},b=n=>{const i=$.current[n];i&&i.focus()},w=n=>n&&typeof n=="object"&&"key"in n,C=n=>{if(typeof n.index>"u")return;const{index:i}=n;if(w(n)&&j(n,[le,ie])){const S=me(n.key,i,g.length);if(typeof S!="number")return;if(b(S),f!=="manual"){const v=g[S];x(S),h.isValidElement(v)&&a({...n,index:S,name:v.props.name,text:v.props.text})}}else t!==i&&(!w(n)||j(n,[ce,de]))&&(x(i),b(i),a(n))},A=(k=h.Children.map(r,n=>pe(n,H)))==null?void 0:k.every(n=>n===!0),K=O(`${o}--content-switcher`,p,{[`${o}--content-switcher--light`]:c,[`${o}--content-switcher--${l}`]:l,[`${o}--layout--size-${l}`]:l,[`${o}--content-switcher--icon-only`]:A,[`${o}--content-switcher--low-contrast`]:d});return m.createElement(ae,N({size:{default:"md",min:"sm",max:"lg"}},u,{className:K,role:"tablist",onChange:void 0}),r&&h.Children.map(r,(n,i)=>h.cloneElement(n,{index:i,onClick:V([C,n.props.onClick]),onKeyDown:V([C,n.props.onKeyDown]),selected:i===t,ref:D(i),size:l})))};W.displayName="ContentSwitcher";W.propTypes={children:e.node,className:e.string,light:re(e.bool),lowContrast:e.bool,onChange:e.func.isRequired,selectedIndex:e.number,selectionMode:e.oneOf(["automatic","manual"]),size:e.oneOf(["sm","md","lg"])};const q=({items:r=[],selectedIndex:p=0,onChange:c,size:d="md",className:s,...f})=>{const l=a=>{const u=r.findIndex(o=>(o.id||o.label)===a.name);c==null||c(u,r[u])};return m.createElement("div",{className:fe("leap-content-switcher",s),style:{"--cds-focus":"#0c8c5e","--cds-interactive":"#0c8c5e","--cds-border-interactive":"#0c8c5e","--cds-layer-selected-inverse":"#0c8c5e"}},m.createElement(W,{selectedIndex:p,onChange:l,size:d,...f},r.map(a=>m.createElement(B,{key:a.id||a.label,name:a.id||a.label,text:a.label,disabled:a.disabled}))))};q.propTypes={items:e.arrayOf(e.shape({id:e.string,label:e.string.isRequired,icon:e.node,disabled:e.bool})).isRequired,selectedIndex:e.number,onChange:e.func,size:e.oneOf(["sm","md","lg","xl"]),className:e.string};q.__docgenInfo={description:"",methods:[],displayName:"LeapContentSwitcher",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!1},label:{name:"string",required:!0},icon:{name:"node",required:!1},disabled:{name:"bool",required:!1}}}},required:!1},selectedIndex:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"",type:{name:"enum",value:[{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'xl'",computed:!1}]},required:!1},onChange:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const Me={title:"Components/LeapContentSwitcher",component:q,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},onChange:{action:"changed"}},parameters:{docs:{description:{component:"A segmented toggle for switching between related content views. Wraps Carbon's ContentSwitcher with Leap theming.\n\n### Import\n```jsx\nimport { LeapContentSwitcher } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},T={args:{items:[{id:"overview",label:"Overview"},{id:"details",label:"Details"},{id:"activity",label:"Activity"}]}},R={args:{items:[{id:"day",label:"Day"},{id:"week",label:"Week"},{id:"month",label:"Month"},{id:"year",label:"Year"}],size:"sm"}},_={args:{items:[{id:"chart",label:"Chart"},{id:"table",label:"Table"}],size:"lg"}},L={render:r=>{const[p,c]=h.useState(0),d=["Overview content: High-level summary of the change initiative and its current status.","Details content: Breakdown of tasks, owners, and timelines for each workstream.","Activity content: Recent comments, status updates, and audit log entries."];return m.createElement("div",null,m.createElement(q,{...r,selectedIndex:p,onChange:s=>c(s)}),m.createElement("div",{style:{marginTop:"1rem",padding:"1rem",border:"1px solid #e0e0e0",fontSize:"0.875rem",color:"#525252"}},d[p]))},args:{items:[{id:"overview",label:"Overview"},{id:"details",label:"Details"},{id:"activity",label:"Activity"}]}};var F,Y,P;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'details',
      label: 'Details'
    }, {
      id: 'activity',
      label: 'Activity'
    }]
  }
}`,...(P=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var G,J,Q;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'day',
      label: 'Day'
    }, {
      id: 'week',
      label: 'Week'
    }, {
      id: 'month',
      label: 'Month'
    }, {
      id: 'year',
      label: 'Year'
    }],
    size: 'sm'
  }
}`,...(Q=(J=R.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'chart',
      label: 'Chart'
    }, {
      id: 'table',
      label: 'Table'
    }],
    size: 'lg'
  }
}`,...(Z=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [index, setIndex] = useState(0);
    const panels = ['Overview content: High-level summary of the change initiative and its current status.', 'Details content: Breakdown of tasks, owners, and timelines for each workstream.', 'Activity content: Recent comments, status updates, and audit log entries.'];
    return <div>
        <LeapContentSwitcher {...args} selectedIndex={index} onChange={i => setIndex(i)} />
        <div style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #e0e0e0',
        fontSize: '0.875rem',
        color: '#525252'
      }}>
          {panels[index]}
        </div>
      </div>;
  },
  args: {
    items: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'details',
      label: 'Details'
    }, {
      id: 'activity',
      label: 'Activity'
    }]
  }
}`,...(ne=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const qe=["Default","Small","Large","WithContent"];export{T as Default,_ as Large,R as Small,L as WithContent,qe as __namedExportsOrder,Me as default};
