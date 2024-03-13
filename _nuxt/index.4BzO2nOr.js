import{_ as y,t as _,v as b,x as t,y as l,B as d,E as x,d as p,F as L,P as w,G as T,H as A,c as P,r as R,I as r,J as $,K as k,m as S,L as v,g as u,M as B,N as j,S as N,T as U,O as C,Q as O,R as V,A as z,z as h}from"./entry.b3B3QQ2p.js";import{u as H}from"./vue.f36acd1f.EfLM56rs.js";const M={},E={class:"flex flex-col w-full text-white justify-center items-center relative",id:"hero"},W={class:"xl:w-4/12 text-center"},Y=t("h6",{class:"uppercase"},[t("span",null,"Yeris Aguilar -"),d(" front end")],-1),D=t("h1",{class:"uppercase mb-3"},[d(" Web "),t("br",{class:"display"}),d(" developer ")],-1),F={class:"btn-container mt-5 relative flex-row flex justify-center gap-2"},G={href:"#contact",class:"btn cursor-pointer z-10"},I=t("div",{class:"click-here relative"},null,-1);function J(s,a){return _(),b("section",E,[t("div",W,[Y,D,t("p",null,l(s.$t("heroDescription")),1),t("div",F,[t("a",G,l(s.$t("contactText")),1),I])])])}const K=y(M,[["render",J]]),Q=""+globalThis.__publicAssetsURL("assets/img.png"),q=""+globalThis.__publicAssetsURL("assets/wp.svg"),X=""+globalThis.__publicAssetsURL("assets/bitbucket.svg"),Z=""+globalThis.__publicAssetsURL("assets/vue.svg"),tt=""+globalThis.__publicAssetsURL("assets/css.svg"),st=""+globalThis.__publicAssetsURL("assets/boostrap.svg"),et=""+globalThis.__publicAssetsURL("assets/git.svg"),at=""+globalThis.__publicAssetsURL("assets/github_.svg"),ot={},nt={class:"flex flex-col justify-center items-center relative",id:"about"},it={class:"container",id:"about-me"},ct={class:"about-desc"},lt=t("h4",{class:"uppercase"},"Yeris Aguilar",-1),rt={class:"my-3"},ut={class:"relative"},dt={href:"",class:"btn-purple mt-3"},_t=t("div",{class:"image-container flex justify-center relative"},[t("div",{class:"image relative pt-6 pl-8"},[t("img",{src:Q,class:"rounded-lg relative z-0",alt:"yeris image"})])],-1),pt=x('<div id="skills" class="flex justify-between w-full px-40 py-10"><div class="text-center"><img src="'+q+'" class="w-30 h-30" alt="wordpress icon"><p class="mt-3 text-[#adaeaf]">WordPress</p></div><div class="text-center"><img src="'+X+'" class="w-30 h-30" alt="Bitbucket icon"><p class="mt-3 text-[#adaeaf]">Bitbucket</p></div><div class="text-center"><img src="'+Z+'" class="w-30 h-30" alt="vue icon"><p class="mt-3 text-[#adaeaf]">Vue.js</p></div><div class="text-center"><img src="'+tt+'" class="w-30 h-30" alt="css icon"><p class="mt-3 text-[#adaeaf]">CSS</p></div><div class="text-center"><img src="'+st+'" class="w-30 h-30" alt="bootstrap icon"><p class="mt-3 text-[#adaeaf]">Bootstrap</p></div><div class="text-center"><img src="'+et+'" class="w-30 h-30" alt="git icon"><p class="mt-3 text-[#adaeaf]">Git</p></div><div class="text-center"><img src="'+at+'" class="w-30 h-30" alt="wordpress icon"><p class="mt-3 text-[#adaeaf] font-semibold">WordPress</p></div></div>',1);function mt(s,a){return _(),b("section",nt,[t("div",it,[t("div",ct,[lt,t("p",rt,l(s.$t("aboutMeText")),1),t("div",ut,[t("a",dt,l(s.$t("downloadTextBtn")),1)])]),_t]),pt])}const ft=y(ot,[["render",mt]]),vt=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(s,a){const o=await r[s.name]().then(e=>e.default||e);return()=>u(o,s.layoutProps,a.slots)}}),ht=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(s,a){const o=S(),e=L(w),n=e===T()?A():e,i=P(()=>{let c=v(s.name)??n.meta.layout??"default";return c&&!(c in r)&&s.fallback&&(c=v(s.fallback)),c}),m=R();a.expose({layoutRef:m});const g=o.deferHydration();return()=>{const c=i.value&&i.value in r,f=n.meta.layoutTransition??$;return k(U,c&&f,{default:()=>u(N,{suspensible:!0,onResolve:()=>{j(g)}},{default:()=>u(yt,{layoutProps:B(a.attrs,{ref:m}),key:i.value||void 0,name:i.value,shouldProvide:!s.name,hasTransition:!!f},a.slots)})}).default()}}}),yt=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(s,a){const o=s.name;return s.shouldProvide&&C(O,{isCurrent:e=>o===(e.meta.layout??"default")}),()=>{var e,n;return!o||typeof o=="string"&&!(o in r)?(n=(e=a.slots).default)==null?void 0:n.call(e):u(vt,{key:o,layoutProps:s.layoutProps,name:o},a.slots)}}}),xt={__name:"index",setup(s){return H({title:"Yeris Aguilar - FrontEnd dev",meta:[{name:"description",content:"My amazing site."}]}),(a,o)=>{const e=K,n=ft,i=ht;return _(),V(i,null,{default:z(()=>[t("div",null,[h(e),h(n)])]),_:1})}}};export{xt as default};