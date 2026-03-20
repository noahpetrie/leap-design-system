const a=(r,n,c="character",t="characters")=>{if(typeof n>"u")return null;const e=n-r;return e<=10&&e>0?`${e} ${e===1?c:t} left.`:e<=0?`Maximum ${t} reached.`:null};export{a as g};
