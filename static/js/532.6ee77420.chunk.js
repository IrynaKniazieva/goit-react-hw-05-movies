"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{540:function(t,n,r){r.d(n,{Df:function(){return s},IQ:function(){return f},Jh:function(){return l},on:function(){return v},s_:function(){return o}});var e=r(861),a=r(757),u=r.n(a),c=r(44);function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/search/movie?query=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"8009629a1fea118cf1b1e37731fe7687"}},532:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e,a,u=r(885),c=r(168),s=r(444),i=s.ZP.li(e||(e=(0,c.Z)(["\n  padding: 15px 0;\n"]))),o=r(184),p=function(t){var n=t.cast;return(0,o.jsx)("div",{children:n.map((function(t){var n=t.profile_path,r=t.name,e=t.character,a=t.id;return(0,o.jsxs)(i,{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:r}),(0,o.jsx)("p",{children:r}),(0,o.jsxs)("p",{children:["Character: ",e]})]},a)}))})},f=r(791),h=r(689),l=r(540),d=s.ZP.ul(a||(a=(0,c.Z)(["\nlist-style: none;\nborder-top: 1px solid black;\n"]))),v=function(){var t=(0,f.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,h.UO)().id;return(0,f.useEffect)((function(){(0,l.IQ)(a).then(e)}),[a]),(0,o.jsx)(d,{children:0!==r.length?(0,o.jsx)(p,{cast:r}):(0,o.jsx)("p",{children:"We don't have any cast information on this movie."})})}}}]);
//# sourceMappingURL=532.6ee77420.chunk.js.map