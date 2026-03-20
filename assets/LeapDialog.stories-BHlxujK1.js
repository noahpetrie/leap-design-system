import{R as e,r as l}from"./index-C5e9SFkp.js";import{L as c}from"./LeapButton-z14B9pfi.js";import{L as w}from"./LeapInput-ChSLBXba.js";import{P as t}from"./index-Cv3U8xn7.js";import"./usePrefix-DKvSngT5.js";import{D as v,a as H,b as _,c as A,d as x,e as N,f as F,g as M}from"./Dialog-BAXWGUhy.js";import"./utils-C8nBGPD0.js";import"./TextInput-C2zc4NIu.js";import"./useNormalizedInputProps-D8kxv_oQ.js";import"./Text-CpAClzUE.js";import"./bucket-20-D0WIoklM.js";import"./Icon-IPhGtQ88.js";import"./deprecate-wUyRZ4Kw.js";import"./FormContext-BXuWO8ke.js";import"./index-C07QrHh6.js";import"./deprecateValuesWithin-CsrLqEim.js";import"./useIsomorphicEffect-cSlXweb7.js";import"./index-Cws_IRuu.js";import"./index-Dy23IbDT.js";import"./getAnnouncement-DcRicnKu.js";import"./index-DL0L_M4H.js";import"./index-CbrCmGzd.js";import"./useId-BCI3fkL9.js";import"./index-DXRVHWKy.js";import"./Tooltip-DiHq-Mla.js";import"./useNoInteractiveChildren-De6vW09K.js";import"./index-CCoNBgNc.js";import"./bucket-19-C2kUjc-x.js";import"./utils-B-HSZv_z.js";import"./noopFn-g4z370MD.js";import"./clamp--00YEiB8.js";import"./Button-HrdzQtgu.js";import"./InlineLoading-BDwIkcW4.js";import"./bucket-6-BF5uQPP1.js";import"./bucket-3-iB7GZNH-.js";import"./debounce-DBoK0mBS.js";const I=Object.freeze(Object.defineProperty({__proto__:null,Dialog:M,DialogBody:N,DialogCloseButton:x,DialogControls:A,DialogFooter:F,DialogHeader:v,DialogSubtitle:_,DialogTitle:H},Symbol.toStringTag,{value:"Module"})),{Dialog:$,DialogHeader:u,DialogBody:m,DialogFooter:O,DialogTitle:d,DialogSubtitle:L,DialogControls:g,DialogCloseButton:f}=I,i=e.forwardRef(function({className:o,children:n,...q},S){const k=["leap-dialog-wrapper",o].filter(Boolean).join(" ");return e.createElement("div",{className:k,style:{"--cds-button-primary":"#0c8c5e","--cds-button-primary-hover":"#096b48","--cds-button-primary-active":"#054a32","--cds-focus":"#0c8c5e","--cds-interactive":"#0c8c5e"}},e.createElement($,{ref:S,...q},n))});i.propTypes={children:t.node,className:t.string,focusAfterCloseRef:t.oneOfType([t.func,t.shape({current:t.any})]),modal:t.bool,onCancel:t.func,onClose:t.func,onRequestClose:t.func,open:t.bool,role:t.oneOf(["dialog","alertdialog"])};i.__docgenInfo={description:"LeapDialog — A lightweight dialog built on the native HTML `<dialog>` element,\nsupporting both modal and non-modal modes with Leap brand theming.",methods:[],displayName:"LeapDialog",props:{children:{description:"Dialog content (use DialogHeader, DialogBody, DialogFooter)",type:{name:"node"},required:!1},className:{description:"Additional CSS class",type:{name:"string"},required:!1},focusAfterCloseRef:{description:"Ref to return focus to after dialog closes",type:{name:"union",value:[{name:"func"},{name:"shape",value:{current:{name:"any",required:!1}}}]},required:!1},modal:{description:"Whether the dialog is modal (blocks interaction behind)",type:{name:"bool"},required:!1},onCancel:{description:"Handler for dialog cancel events",type:{name:"func"},required:!1},onClose:{description:"Handler for dialog close events",type:{name:"func"},required:!1},onRequestClose:{description:"Handler for requesting the dialog to close",type:{name:"func"},required:!1},open:{description:"Whether the dialog is open",type:{name:"bool"},required:!1},role:{description:"Role for accessibility",type:{name:"enum",value:[{value:"'dialog'",computed:!1},{value:"'alertdialog'",computed:!1}]},required:!1}}};const Ee={title:"Components/LeapDialog",component:i,tags:["autodocs"],argTypes:{modal:{control:"boolean"},open:{control:"boolean"}},parameters:{docs:{description:{component:"A lightweight dialog built on the native HTML `<dialog>` element, supporting both modal and non-modal modes. Use `modal` for blocking interactions (confirmations, destructive actions) and non-modal for supplementary info that doesn't interrupt workflow. Compose with `DialogHeader`, `DialogBody`, `DialogFooter`, `DialogTitle`, `DialogSubtitle`, `DialogControls`, and `DialogCloseButton` sub-components.\n\n### Import\n```jsx\nimport { LeapDialog } from '@noahpetrie/leap-design-system';\nimport '@noahpetrie/leap-design-system/styles';\n```"}}}},r=()=>{const[a,o]=l.useState(!1),n=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{ref:n,onClick:()=>o(!0)},"Open modal dialog"),e.createElement(i,{modal:!0,open:a,onRequestClose:()=>o(!1),onClose:()=>o(!1),focusAfterCloseRef:n},e.createElement(u,null,e.createElement(d,null,"Confirm action"),e.createElement(L,null,"Review before continuing"),e.createElement(g,null,e.createElement(f,{onClick:()=>o(!1)}))),e.createElement(m,null,e.createElement("p",{style:{marginBottom:"1rem"}},"Are you sure you want to proceed with this action? This will apply the changes to the selected items."),e.createElement(w,{id:"dialog-input",label:"Confirmation note",placeholder:"Optional note..."})),e.createElement(O,{primaryButtonText:"Confirm",secondaryButtonText:"Cancel",onRequestSubmit:()=>o(!1),onRequestClose:()=>o(!1)})))},s=()=>{const[a,o]=l.useState(!1),n=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{ref:n,onClick:()=>o(!a)},"Toggle non-modal dialog"),e.createElement(i,{open:a,onClose:()=>o(!1),focusAfterCloseRef:n,"aria-label":"Information dialog"},e.createElement(u,null,e.createElement(d,null,"Quick info"),e.createElement(g,null,e.createElement(f,{onClick:()=>o(!1)}))),e.createElement(m,null,e.createElement("p",null,"This is a non-modal dialog. You can still interact with the page behind it."))))},p=()=>{const[a,o]=l.useState(!1),n=l.useRef(null);return e.createElement(e.Fragment,null,e.createElement(c,{kind:"danger",ref:n,onClick:()=>o(!0)},"Delete item"),e.createElement(i,{modal:!0,open:a,onRequestClose:()=>o(!1),onClose:()=>o(!1),focusAfterCloseRef:n},e.createElement(u,null,e.createElement(d,null,"Delete item?"),e.createElement(L,null,"This action cannot be undone"),e.createElement(g,null,e.createElement(f,{onClick:()=>o(!1)}))),e.createElement(m,null,e.createElement("p",null,"Permanently delete this item and all associated data?")),e.createElement(O,{danger:!0,primaryButtonText:"Delete",secondaryButtonText:"Cancel",onRequestSubmit:()=>o(!1),onRequestClose:()=>o(!1)})))};r.__docgenInfo={description:"",methods:[],displayName:"Modal"};s.__docgenInfo={description:"",methods:[],displayName:"NonModal"};p.__docgenInfo={description:"",methods:[],displayName:"Danger"};var D,C,y;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  return <>
      <LeapButton ref={buttonRef} onClick={() => setOpen(true)}>
        Open modal dialog
      </LeapButton>
      <LeapDialog modal open={open} onRequestClose={() => setOpen(false)} onClose={() => setOpen(false)} focusAfterCloseRef={buttonRef}>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogSubtitle>Review before continuing</DialogSubtitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p style={{
          marginBottom: '1rem'
        }}>
            Are you sure you want to proceed with this action? This will apply
            the changes to the selected items.
          </p>
          <LeapInput id="dialog-input" label="Confirmation note" placeholder="Optional note..." />
        </DialogBody>
        <DialogFooter primaryButtonText="Confirm" secondaryButtonText="Cancel" onRequestSubmit={() => setOpen(false)} onRequestClose={() => setOpen(false)} />
      </LeapDialog>
    </>;
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,h,R;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  return <>
      <LeapButton ref={buttonRef} onClick={() => setOpen(!open)}>
        Toggle non-modal dialog
      </LeapButton>
      <LeapDialog open={open} onClose={() => setOpen(false)} focusAfterCloseRef={buttonRef} aria-label="Information dialog">
        <DialogHeader>
          <DialogTitle>Quick info</DialogTitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p>This is a non-modal dialog. You can still interact with the page behind it.</p>
        </DialogBody>
      </LeapDialog>
    </>;
}`,...(R=(h=s.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var B,E,T;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  return <>
      <LeapButton kind="danger" ref={buttonRef} onClick={() => setOpen(true)}>
        Delete item
      </LeapButton>
      <LeapDialog modal open={open} onRequestClose={() => setOpen(false)} onClose={() => setOpen(false)} focusAfterCloseRef={buttonRef}>
        <DialogHeader>
          <DialogTitle>Delete item?</DialogTitle>
          <DialogSubtitle>This action cannot be undone</DialogSubtitle>
          <DialogControls>
            <DialogCloseButton onClick={() => setOpen(false)} />
          </DialogControls>
        </DialogHeader>
        <DialogBody>
          <p>Permanently delete this item and all associated data?</p>
        </DialogBody>
        <DialogFooter danger primaryButtonText="Delete" secondaryButtonText="Cancel" onRequestSubmit={() => setOpen(false)} onRequestClose={() => setOpen(false)} />
      </LeapDialog>
    </>;
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const Te=["Modal","NonModal","Danger"];export{p as Danger,r as Modal,s as NonModal,Te as __namedExportsOrder,Ee as default};
