import{a2 as n,a8 as r,t as j,y as u,ax as $,aI as v}from"../modules/vue-BX5_4jty.js";import{I as p,T as x,ah as l,ai as C,S,Q as R,R as T,P as k,aj as E,ak as F}from"../index-C_GXEgfX.js";function g(){const t=n(C),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(R),c=n(T),o=n(l,{}),d=n(k,void 0),m=n(p,j(1)),f=n(x,u(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;$(l,t);const{$slidev:a,$page:s}=g(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{b as f,O as p,g as u};