"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[440],{854:function(e,t,r){var n=r(748),a=r(184);t.Z=function(){return(0,a.jsx)(n.iT,{height:"100",width:"100",color:"grey",ariaLabel:"loading"})}},440:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),u=r(689),o=r(87),l=r(390),p=r(854),h="MovieDetailsPage_movieDetalis__JFXgY",d="MovieDetailsPage_genreList__OPvFn",f=r(184),v=function(){var e,t,r=(0,u.UO)().movieId,s=(0,i.useState)(null),v=(0,a.Z)(s,2),x=v[0],g=v[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),j=w[0],_=w[1],Z=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,l.Z.fetchMovieDetalis(r);case 4:t=e.sent,g(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.rU,{to:Z,children:"Go back"}),j&&(0,f.jsx)(p.Z,{}),x&&(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+x.poster_path,alt:x.original_title}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[x.title," (",x.release_date.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User score: ",x.popularity]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:x.overview}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("ul",{className:d,children:x.genres.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",state:{from:Z},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",state:{from:Z},children:"Reviews"})})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(u.j3,{})]})]})}},390:function(e,t,r){var n=r(861),a=r(757),s=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="6ed3fa3d24c2aaae4e7274db70c163cc",u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrending:u,fetchSearchByKeyword:o,fetchMovieDetalis:l,fetchActors:p,fetchReviews:h};t.Z=d}}]);
//# sourceMappingURL=440.b55ec2b4.chunk.js.map