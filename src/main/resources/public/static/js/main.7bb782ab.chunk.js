(this.webpackJsonpreacttypescript=this.webpackJsonpreacttypescript||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),l=(a(76),a(17)),s=a(18),i=a(21),u=a(19),m=a(35),d=a(25),h=(a(77),a(32)),p=a.n(h),v=(a(95),a(136)),f=a(134),E=a(42),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).props=e,n.state=void 0,n.noHeaders=["/"],n.state={openLoginMenu:!1,anchorEl:null,headerVisible:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unlisten=this.props.history.listen((function(t,a){console.log("on route change"),e.setHeaderVisibility()})),this.setHeaderVisibility(),console.log("---------"),console.log(this.props)}},{key:"setHeaderVisibility",value:function(){var e=this.props.location.pathname;-1===this.noHeaders.indexOf(e)?this.setState({headerVisible:!0}):this.setState({headerVisible:!1})}},{key:"logout",value:function(){localStorage.clear(),window.location.href="/"}},{key:"unlisten",value:function(){}},{key:"changePageProgramatically",value:function(e){e.preventDefault(),this.props.history.push("/")}},{key:"openPopover",value:function(e){this.setState({anchorEl:e,openLoginMenu:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"mainHeader "+(this.state.headerVisible?" ":"hidden ")},r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("nav",{className:"col-auto linkWrapper"},r.a.createElement("ul",{className:"nav-pills pl-2 m-0"},this.props.links&&this.props.links.map((function(e,t){return r.a.createElement("li",{className:"nav-item pr-3 mb-1 mt-1",key:t},r.a.createElement(m.b,{to:e.path},r.a.createElement("button",{type:"button",className:"btn btn-outline-dark"},e.display)))})))),r.a.createElement("div",{className:"text-right flex-grow-1 px-3"},r.a.createElement("div",{className:"avatarWrapper",onClick:function(t){return e.openPopover(t.currentTarget)}},r.a.createElement(v.a,{className:"avatarButton",src:"/public/user.png"})),r.a.createElement(f.a,{anchorEl:this.state.anchorEl,open:this.state.openLoginMenu,onClose:function(t){e.setState({openLoginMenu:!1,anchorEl:null})},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement("div",{className:"list-group"},r.a.createElement("div",{onClick:function(t){return e.logout()},className:"list-group-item list-group-item-action list-group-item-light"},"Logout")))))))))}}]),a}(r.a.Component),b=Object(E.b)((function(e){return{searchResultsCount:e.searchResultsCount,links:e.links}}),(function(e){return{recordSearchResultsTotal:function(t){return e({type:"STORE_SEARCH_RESULTS_COUNT",val:t})}}}))(Object(d.f)(g)),k=(a(101),a(133)),N=a(135),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=void 0,n.cancelTokenSource=void 0,n.state={username:"",password:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.clear()}},{key:"loginSubmit",value:function(e){var t=this;e.preventDefault();this.cancelTokenSource&&this.cancelTokenSource.cancel(),this.cancelTokenSource=p.a.CancelToken.source(),p.a.post("/api/authenticate",{username:this.state.username,password:this.state.password},{cancelToken:this.cancelTokenSource.token}).then((function(e){var a=e.data.token;localStorage.setItem("authToken",a),t.props.history.replace("/home")})).catch((function(e){console.error(e)})).then((function(){}))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"loginPage py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",null,"Log on"),r.a.createElement("div",{className:"loginFormContainer"},r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{className:"avatar",src:"/public/user.png"})),r.a.createElement("form",{onSubmit:function(t){return e.loginSubmit(t)},className:"loginForm p-3"},r.a.createElement("div",null,r.a.createElement(k.a,{required:!0,className:"formField",value:this.state.username,onChange:function(t){e.setState({username:t.target.value})},label:"User name",variant:"outlined"})),r.a.createElement("div",{className:"mt-3"},r.a.createElement(k.a,{required:!0,className:"formField",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})},label:"Password",type:"password",variant:"outlined"})),r.a.createElement("div",{className:"mt-3 text-right"},r.a.createElement(N.a,{className:"long-button",variant:"contained",color:"primary",type:"submit"},"Log on")))),r.a.createElement("p",{className:"text-center"},"Forget ",r.a.createElement("a",{href:"#!"},"User name")," or ",r.a.createElement("a",{href:"#!"},"Password")))))}}]),a}(r.a.Component),w=Object(d.f)(y),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=void 0,n.lastQuery="",n.cancelTokenSource=void 0,n.state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("authToken")||(window.location.href="/")}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"})))}}]),a}(r.a.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state=void 0,n.lastQuery="",n.cancelTokenSource=void 0,n.state={},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("authToken")||(window.location.href="/")}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"})))}}]),a}(r.a.Component);p.a.interceptors.request.use((function(e){if(console.log("New axios request: "),console.log(e),e.headers["Access-Control-Allow-Origin"]="*",null!==e.url.match(/^api\//g)){var t=localStorage.getItem("authToken");e.headers.Authorization=" "+t}return e})),p.a.interceptors.response.use((function(e){return e}),(function(e){return 403===e.response.status&&(localStorage.clear(),window.location.href="/"),Promise.reject(e)}));var j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,null,r.a.createElement(b,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 pt-3"},r.a.createElement(w,null)))}}),r.a.createElement(d.a,{path:"/users",render:function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 pt-3"},r.a.createElement(S,null)))}}),r.a.createElement(d.a,{path:"/home",render:function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 pt-3"},r.a.createElement(O,null)))}})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(37),T=a(64),R={searchResultsCount:0,links:[{path:"/home",id:"HOME",display:"\u2ff3"},{path:"/users",id:"USERS",display:"Users"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;if(console.log("reducing: "),console.log(t),console.log(e),console.log("+++++++++++++++++"),"STORE_SEARCH_RESULTS_COUNT"===t.type){var a=Object(T.a)({},e);return a.searchResultsCount=t.val,a}return e},M=Object(C.b)(x);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:M},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(102)},76:function(e,t,a){},77:function(e,t,a){},95:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.7bb782ab.chunk.js.map