"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[146],{540:function(n,e,t){t.d(e,{Df:function(){return c},IQ:function(){return p},Jh:function(){return f},on:function(){return x},s_:function(){return u}});var r=t(861),s=t(757),i=t.n(s),a=t(44);function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("movie/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.ZP.get("/search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}a.ZP.defaults.baseURL="https://api.themoviedb.org/3",a.ZP.defaults.params={api_key:"8009629a1fea118cf1b1e37731fe7687"}},146:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,s,i,a,c,o,u,l,p,d=t(885),f=t(791),h=t(689),x=t(540),v=t(731),Z=t(168),m=t(444),j=m.ZP.button(r||(r=(0,Z.Z)(["\nmargin: 20px;\nheight: 30px;\ncolor: tomato;\nfont-weight: 600;\nfont-size: 14px;\n"]))),g=m.ZP.div(s||(s=(0,Z.Z)(["\ndisplay: flex;\nborder-bottom: 1px solid black;\n"]))),w=m.ZP.div(i||(i=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\n"]))),b=m.ZP.img(a||(a=(0,Z.Z)(["\nmargin: 15px;\n"]))),k=m.ZP.div(c||(c=(0,Z.Z)(["\nborder-bottom: 1px solid black;\n\n\n"]))),y=m.ZP.h2(o||(o=(0,Z.Z)(["\nfont-size: 24px;\npadding-top: 15px;\n"]))),P=m.ZP.h3(u||(u=(0,Z.Z)(["\nfont-size: 18px;\n"]))),_=m.ZP.p(l||(l=(0,Z.Z)(["\nfont-size: 14px;\n\n"]))),U=m.ZP.p(p||(p=(0,Z.Z)(["\npadding-left: 40px\n"]))),z=t(184),C=function(){var n=(0,f.useState)(null),e=(0,d.Z)(n,2),t=e[0],r=e[1],s=(0,h.UO)().id,i=(0,h.s0)(),a=(0,h.TH)();console.log(a),(0,f.useEffect)((function(){(0,x.s_)(s).then(r)}),[s]),console.log(t);return(0,z.jsxs)(z.Fragment,{children:[t&&(0,z.jsxs)("div",{children:[(0,z.jsxs)(j,{onClick:function(){var n,e;return i(null!==(n=null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},type:"button",children:[" ","< Go back"]}),(0,z.jsxs)(g,{children:[(0,z.jsx)(b,{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,width:"250"}),(0,z.jsxs)(w,{children:[(0,z.jsxs)(y,{children:[t.title," (",new Date("".concat(t.release_date)).getFullYear(),")"]}),(0,z.jsxs)(_,{children:["User Score: ",Math.round("".concat(t.vote_average)),"%"]}),(0,z.jsx)(P,{children:"Overview"}),(0,z.jsx)(_,{children:t.overview}),(0,z.jsx)(P,{children:"Movie Genres:"}),(0,z.jsx)(_,{children:t.genres.map((function(n){return n.name})).join(", ")})]})]})]}),(0,z.jsxs)(k,{children:[(0,z.jsx)(U,{children:"Additional Information"}),(0,z.jsxs)("ul",{children:[(0,z.jsx)("li",{children:(0,z.jsx)(v.rU,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(v.rU,{to:"reviews",children:"Reviews"})})]}),(0,z.jsx)(f.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading ..."}),children:(0,z.jsx)(h.j3,{})})]})]})}}}]);
//# sourceMappingURL=146.f12626e2.chunk.js.map