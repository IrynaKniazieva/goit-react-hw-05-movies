"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[532],{540:function(t,n,e){e.d(n,{Df:function(){return s},IQ:function(){return f},Jh:function(){return d},on:function(){return v},s_:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(44);function s(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("movie/".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("/search/movie?query=".concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.ZP.defaults.baseURL="https://api.themoviedb.org/3",c.ZP.defaults.params={api_key:"8009629a1fea118cf1b1e37731fe7687"}},532:function(t,n,e){e.r(n),e.d(n,{default:function(){return Z}});var r,a,u,c=e(885),s=e(168),i=e(444),o=i.ZP.li(r||(r=(0,s.Z)(["\n  padding: 15px 0;\n"]))),p=i.ZP.img(a||(a=(0,s.Z)(["\nwidth: 200px;\nheight: 300px;\n"]))),f=e(504),h=e(184),d=function(t){var n=t.cast;return(0,h.jsx)("div",{children:n.map((function(t){var n=t.profile_path,e=t.name,r=t.character,a=t.id;return(0,h.jsxs)(o,{children:[(0,h.jsx)(p,{src:n?"https://image.tmdb.org/t/p/w200/".concat(n):f,alt:e}),(0,h.jsx)("p",{children:e}),(0,h.jsxs)("p",{children:["Character: ",r]})]},a)}))})},l=e(791),v=e(689),m=e(540),x=i.ZP.ul(u||(u=(0,s.Z)(["\nlist-style: none;\nborder-top: 1px solid black;\n"]))),Z=function(){var t=(0,l.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,v.UO)().id;return(0,l.useEffect)((function(){(0,m.IQ)(a).then(r)}),[a]),console.log(e),(0,h.jsx)(x,{children:0!==e.length?(0,h.jsx)(d,{cast:e}):(0,h.jsx)("p",{children:"We don't have any cast information on this movie."})})}},504:function(t,n,e){t.exports=e.p+"static/media/NotFoto.73409390370db847ed29.jpg"}}]);
//# sourceMappingURL=532.a76c4c7e.chunk.js.map