"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(t,e,r){r.r(e),r.d(e,{default:function(){return o}});var n=r(885),a=r(501),u=r(6713),c=r(2791),s={filmList:"Home_filmList__iG5Dt",homeMovieItem:"Home_homeMovieItem__DdAyT"},i=r(184),o=function(){var t=(0,c.useState)([]),e=(0,n.Z)(t,2),r=e[0],o=e[1];return(0,c.useEffect)((function(){(0,u.PY)().then(o)}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:s.filmList,children:r.map((function(t){var e=t.id,r=t.title,n=t.name,u=t.poster_path;return(0,i.jsx)("li",{className:s.filmListItem,children:(0,i.jsxs)(a.rU,{className:s.homeMovieItem,to:"/movies/".concat(e),children:[(0,i.jsx)("img",{src:u?"https://image.tmdb.org/t/p/w500".concat(u):"https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg",alt:r}),(0,i.jsx)("p",{children:r||n})]})},e)}))})})}},6713:function(t,e,r){r.d(e,{PY:function(){return o},bp:function(){return p},dB:function(){return f},l$:function(){return m},ug:function(){return h}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),s={api_key:"78a8eb0d5a179699f4c03c65891d2438"},i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:s}),o=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/week");case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("\n/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=344.78261f75.chunk.js.map