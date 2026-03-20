const r=new Map,i=(c,f)=>(n,e,s,...d)=>{if(typeof n[e]>"u")return;r.has(s)||r.set(s,new Set);const t=r.get(s);return t&&!t.has(e)&&t.add(e),c(n,e,s,...d)};export{i as d};
