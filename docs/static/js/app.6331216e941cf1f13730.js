webpackJsonp([1],{"+Gxq":function(t,e,r){"use strict";function s(t){r("NCXI")}var a=r("fnDg"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},"1ZUK":function(t,e){},"1oVT":function(t,e){},"2WME":function(t,e){},"9M+g":function(t,e){},"9R6X":function(t,e){},"C9v/":function(t,e){},"HUt/":function(t,e,r){"use strict";function s(t){r("LH4V")}var a=r("qRo1"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},Iii3:function(t,e){},JCpY:function(t,e,r){"use strict";function s(t){r("C9v/")}var a=r("rKsW"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},JDVb:function(t,e,r){"use strict";function s(t){r("1oVT")}var a=r("9NuQ"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},Jmt5:function(t,e){},LH4V:function(t,e){},NCXI:function(t,e){},NHnr:function(t,e,r){"use strict";function s(t){r("mROA")}function a(t){r("s86m")}function n(t){r("2WME")}function o(t){r("m5La")}function i(t){r("Iii3")}Object.defineProperty(e,"__esModule",{value:!0});var c=r("7+uW"),u=(r("Jmt5"),r("9M+g"),{name:"app"}),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},v=[],m={render:l,staticRenderFns:v},d=m,h=r("VU/8"),f=s,p=h(u,d,!1,f,null,null),_=p.exports,g=r("/ocq"),y=r("e6fC"),b=r("mtWM"),q=r.n(b),C={name:"MovieList",data:function(){return{}},props:{movieData:{}}},w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"movies"},t._l(t.movieData,function(e){return r("li",[r("h2",[r("a",{staticClass:"movieLink",attrs:{href:"https://www.themoviedb.org/movie/"+e.id,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),r("p",[t._v(t._s(e.overview))]),t._v(" "),r("p",[r("img",{staticClass:"poster-image",attrs:{src:"//image.tmdb.org/t/p/w150_and_h225_bestv2"+e.poster_path,alt:e.title+" Poster"}})])])}))])},M=[],x={render:w,staticRenderFns:M},V=x,W=r("VU/8"),S=a,U=W(C,V,!1,S,"data-v-150f0cd7",null),k=U.exports,L={name:"ErrorList",data:function(){return{}},props:{errorList:{}}},E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.errorList.length>0?r("div",[r("p",[t._v("There was an error fetching data.")]),t._v(" "),r("ul",{staticClass:"errors"},t._l(t.errorList,function(e){return r("li",[t._v(t._s(e.message))])}))]):t._e()])},$=[],N={render:E,staticRenderFns:$},R=N,D=r("VU/8"),I=n,P=D(L,R,!1,I,"data-v-318dd216",null),A=P.exports,T={name:"MovieSearch",data:function(){return{results:[],errors:[],query:""}},methods:{getMovieList:function(){var t=this,e=" movieSearch_"+this.query;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e)):(console.log("No cached query detected. Making API request."),q.a.get("//api.themoviedb.org/3/search/movie",{params:{api_key:"a6b89216122d3b45b558a0ac03d25d80",language:"en_US",query:this.query,page:1,adult:!1}}).then(function(r){t.$ls.set(e,r.data,9e5),console.log("New query has been cached as"+e),t.results=r.data}).catch(function(e){t.errors.push(e)}))}},components:{"movie-list":k,"error-list":A}},F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Movies for your Mood")]),t._v(" "),r("p",[t._v("This is a movie list based on "),r("span",{staticClass:"query"},[t._v(t._s(t.query))])]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.getMovieList(e)}}},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-sm-3 offset-sm-4"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.query,expression:"query",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"movieSearch",placeholder:"something"},domProps:{value:t.query},on:{change:function(e){t.query=e.target.value}}})]),t._v(" "),t._m(0,!1,!1)])]),t._v(" "),r("p",{staticClass:"router"},[r("router-link",{attrs:{to:"/"}},[t._v("Go back to Weather and a Movie Search")])],1),t._v(" "),r("movie-list",{attrs:{movieData:t.results.results}}),t._v(" "),r("error-list",{attrs:{errorList:t.errors}})],1)},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-1"},[r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Search")])])}],J={render:F,staticRenderFns:H},X=J,z=r("VU/8"),K=o,O=z(T,X,!1,K,null,null),Z=O.exports,G={name:"WeatherSearch",data:function(){return{results:[],movies:[],errors:[],query:""}},methods:{getWeather:function(){var t=this,e=" citySearch_"+this.query;this.$ls.get(e)?(console.log("Cached query detected."),this.results=this.$ls.get(e)):(console.log("No cached query detected. Making API request."),q.a.get("https://api.openweathermap.org/data/2.5/weather",{params:{APPID:"e40ed8ae1d6512b314d2f184c59a5d23",units:"imperial",q:this.query}}).then(function(r){t.$ls.set(e,r.data,9e5),console.log("New query has been cached as"+e),t.results=r.data}).catch(function(e){t.errors.push(e)}))},getMovies:function(){var t=this,e=document.getElementById("currentWeather").innerHTML;console.log("Making movie API call..."),q.a.get("//api.themoviedb.org/3/search/movie",{params:{api_key:"a6b89216122d3b45b558a0ac03d25d80",language:"en_US",query:e,page:1,adult:!1}}).then(function(e){t.movies=e.data}).catch(function(e){t.errors.push(e)})}},components:{"movie-list":k,"error-list":A}},j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Weather and a Movie Search")]),t._v(" "),r("p",[t._v("What's it like outside? Enter in your "),r("strong",[t._v("city")]),t._v(" to find out: "),r("span",{staticClass:"query"},[t._v(t._s(t.query))])]),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.getWeather(e)}}},[r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-sm-3 offset-sm-4"},[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.query,expression:"query",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Seattle"},domProps:{value:t.query},on:{change:function(e){t.query=e.target.value}}})]),t._v(" "),t._m(0,!1,!1)])]),t._v(" "),r("ul",{staticClass:"cities"},t._l(t.results.weather,function(e){return r("li",[r("p",[r("span",{attrs:{id:"currentWeather"}},[t._v(t._s(e.main))]),t._v(" "),r("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.icon+".png"}})])])})),t._v(" "),r("error-list",{attrs:{errorList:t.errors}}),t._v(" "),r("p",[t._v("Want to find something to watch?  Click the button to search for movies based on current weather conditions.")]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:t.getMovies}},[t._v("Weather and a Movie Search")]),t._v(" "),r("p",{staticClass:"router"},[r("router-link",{attrs:{to:"/movies"}},[t._v("Not feeling it? Click here to search for more movies!")])],1),t._v(" "),r("movie-list",{attrs:{movieData:t.movies.results}})],1)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-1"},[r("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Submit")]),r("p")])}],Q={render:j,staticRenderFns:B},Y=Q,tt=r("VU/8"),et=i,rt=tt(G,Y,!1,et,null,null),st=rt.exports;c.a.use(g.a),c.a.use(y.a);var at=new g.a({routes:[{path:"/",name:"WeatherSearch",component:st},{path:"/movies",name:"MovieSearch",component:Z}]}),nt=r("yXtV"),ot=r.n(nt),it={namespace:"weather__"};c.a.use(ot.a,it),c.a.config.productionTip=!1,new c.a({el:"#app",router:at,template:"<App/>",components:{App:_}})},SsFf:function(t,e,r){"use strict";function s(t){r("1ZUK")}var a=r("xT7b"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},m5La:function(t,e){},mROA:function(t,e){},r15W:function(t,e,r){"use strict";function s(t){r("9R6X")}var a=r("E9Zr"),n=a.a,o=r("VU/8"),i=s,c=o(n,null,!1,i,null,null);e.a=c.exports},s86m:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6331216e941cf1f13730.js.map