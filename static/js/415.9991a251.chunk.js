"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(390),o=r(791),i=r(87),f=r(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.addMaterial();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:r&&r.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"".concat(e.id),children:e.title})},e.id)}))})]})}},390:function(e,t,r){r.d(t,{b:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={BASE_URL:"https://api.themoviedb.org/3/",API_KEY:"a0a346c810a8c3392ff6f3a908f46de3",URL_TRENDING:"trending/movie/day",URL_SEARCH:"search/movie",query:[],movieId:"",setQuery:function(e){s.query=e},setMovieId:function(e){s.movieId=e},resetQuery:function(){s.query=""},addMaterial:function(){var e=this;return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.BASE_URL).concat(e.URL_TRENDING,"?api_key=").concat(e.API_KEY),t.next=3,u.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))()},searchMovie:function(){var e=this;return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.BASE_URL).concat(e.URL_SEARCH,"?query=").concat(e.query,"&api_key=").concat(e.API_KEY),t.next=3,u.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))()},getDetails:function(){var e=this;return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.BASE_URL,"movie/").concat(e.movieId,"?api_key=").concat(e.API_KEY),t.next=3,u.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},getCast:function(){var e=this;return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.BASE_URL,"movie/").concat(e.movieId,"/credits?api_key=").concat(e.API_KEY),t.next=3,u.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 5:case"end":return t.stop()}}),t)})))()},getRevies:function(){var e=this;return(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(e.BASE_URL,"movie/").concat(e.movieId,"/reviews?api_key=").concat(e.API_KEY),t.next=3,u.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=415.9991a251.chunk.js.map