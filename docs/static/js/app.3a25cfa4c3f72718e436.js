webpackJsonp([1],{"+Gxq":function(t,e,s){"use strict";function a(t){s("NCXI")}var r=s("fnDg"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports},"1ZUK":function(t,e){},"1oVT":function(t,e){},"8uox":function(t,e){},"9M+g":function(t,e){},"9R6X":function(t,e){},BNec:function(t,e){},"C9v/":function(t,e){},"HUt/":function(t,e,s){"use strict";function a(t){s("LH4V")}var r=s("qRo1"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports},JCpY:function(t,e,s){"use strict";function a(t){s("C9v/")}var r=s("rKsW"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports},JDVb:function(t,e,s){"use strict";function a(t){s("1oVT")}var r=s("9NuQ"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports},Jmt5:function(t,e){},LH4V:function(t,e){},NCXI:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("8uox")}function r(t){s("nly+")}function n(t){s("BNec")}Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),i=(s("Jmt5"),s("9M+g"),{name:"app"}),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],l={render:u,staticRenderFns:c},v=l,h=s("VU/8"),m=a,p=h(i,v,!1,m,null,null),d=p.exports,_=s("/ocq"),f=s("e6fC"),g=s("mtWM"),y=s.n(g),b={name:"MovieSearch",data:function(){return{results:[],errors:[],query:""}},methods:{getMovieList:function(){var t=this,e=" movieSearch_"+this.query;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e)):(console.log("No cached query detected. Making API request."),y.a.get("//api.themoviedb.org/3/search/movie",{params:{api_key:"a6b89216122d3b45b558a0ac03d25d80",language:"en_US",query:this.query,page:1,adult:!1}}).then(function(s){t.$ls.set(e,s.data,9e5),console.log("New query has been cached as"+e),t.results=s.data}).catch(function(e){t.errors.push(e)}))}}},C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Movies for your Mood")]),t._v(" "),s("p",[t._v("This is a movie list based on "),s("span",{staticClass:"query"},[t._v(t._s(t.query))])]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.getMovieList(e)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-sm-3 offset-sm-4"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.query,expression:"query",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"movieSearch",placeholder:"something"},domProps:{value:t.query},on:{change:function(e){t.query=e.target.value}}})]),t._v(" "),t._m(0,!1,!1)])]),t._v(" "),s("p",{staticClass:"router"},[s("router-link",{attrs:{to:"/"}},[t._v("Go back to Weather and a Movie Search")])],1),t._v(" "),s("ul",{staticClass:"movies"},t._l(t.results.results,function(e){return s("li",[s("h2",[s("a",{staticClass:"movieLink",attrs:{href:"https://www.themoviedb.org/movie/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),s("p",[t._v(t._s(e.overview))]),t._v(" "),s("p",[s("img",{staticClass:"poster-image",attrs:{src:"//image.tmdb.org/t/p/w150_and_h225_bestv2"+e.poster_path,alt:e.title+"Poster"}})])])})),t._v(" "),t.errors&&t.errors.length>0?s("ul",{staticClass:"errors"},t._l(t.errors,function(e){return s("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e()])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-1"},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")])])}],w={render:C,staticRenderFns:q},M=w,k=s("VU/8"),x=r,S=k(b,M,!1,x,null,null),V=S.exports,W={name:"WeatherSearch",data:function(){return{results:[],movies:[],errors:[],query:""}},methods:{getWeather:function(){var t=this,e=" citySearch_"+this.query;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e)):(console.log("No cached query detected. Making API request."),y.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{APPID:"e40ed8ae1d6512b314d2f184c59a5d23",units:"imperial",q:this.query}}).then(function(s){t.$ls.set(e,s.data,9e5),console.log("New query has been cached as"+e),t.results=s.data}).catch(function(e){t.errors.push(e)}))},getMovies:function(){var t=this,e=document.getElementById("currentWeather").innerHTML;console.log("Making movie API call..."),y.a.get("//api.themoviedb.org/3/search/movie",{params:{api_key:"a6b89216122d3b45b558a0ac03d25d80",language:"en_US",query:e,page:1,adult:!1}}).then(function(e){t.movies=e.data}).catch(function(e){t.errors.push(e)})}}},N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Weather and a Movie Search")]),t._v(" "),s("p",[t._v("What's it like outside? Enter in your "),s("strong",[t._v("city")]),t._v(" to find out: "),s("span",{staticClass:"query"},[t._v(t._s(t.query))])]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.getWeather(e)}}},[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-sm-3 offset-sm-4"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.query,expression:"query",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seattle"},domProps:{value:t.query},on:{change:function(e){t.query=e.target.value}}})]),t._v(" "),t._m(0,!1,!1)])]),t._v(" "),s("ul",{staticClass:"cities"},t._l(t.results.weather,function(e){return s("li",[s("p",[s("span",{attrs:{id:"currentWeather"}},[t._v(t._s(e.main))]),t._v(" "),s("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.icon+".png"}})])])})),t._v(" "),t.errors&&t.errors.length>0?s("ul",{staticClass:"errors"},t._l(t.errors,function(e){return s("li",[t._v("\n      "+t._s(e.message)+"\n    ")])})):t._e(),t._v(" "),s("p",[t._v("Want to find something to watch?  Click the button to search for movies based on current weather conditions.")]),t._v(" "),s("button",{staticClass:"btn btn-primary",on:{click:t.getMovies}},[t._v("Weather and a Movie Search")]),t._v(" "),s("p",{staticClass:"router"},[s("router-link",{attrs:{to:"/movies"}},[t._v("Not feeling it? Click here to search for more movies!")])],1),t._v(" "),s("ul",{staticClass:"movies"},t._l(t.movies.results,function(e){return s("li",[s("h2",[s("a",{staticClass:"movieLink",attrs:{href:"https://www.themoviedb.org/movie/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),s("p",[t._v(t._s(e.overview))]),t._v(" "),s("p",[s("img",{staticClass:"poster-image",attrs:{src:"//image.tmdb.org/t/p/w150_and_h225_bestv2"+e.poster_path,alt:e.title+"Poster"}})])])}))])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-1"},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Submit")]),s("p")])}],$={render:N,staticRenderFns:U},P=$,E=s("VU/8"),I=n,L=E(W,P,!1,I,null,null),A=L.exports;o.a.use(_.a),o.a.use(f.a);var H=new _.a({routes:[{path:"/",name:"WeatherSearch",component:A},{path:"/movies",name:"MovieSearch",component:V}]}),R=s("yXtV"),T=s.n(R),D={namespace:"weather__"};o.a.use(T.a,D),o.a.config.productionTip=!1,new o.a({el:"#app",router:H,template:"<App/>",components:{App:d}})},SsFf:function(t,e,s){"use strict";function a(t){s("1ZUK")}var r=s("xT7b"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports},"nly+":function(t,e){},r15W:function(t,e,s){"use strict";function a(t){s("9R6X")}var r=s("E9Zr"),n=r.a,o=s("VU/8"),i=a,u=o(n,null,!1,i,null,null);e.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.3a25cfa4c3f72718e436.js.map