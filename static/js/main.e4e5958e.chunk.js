(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(t,e,a){t.exports={button:"styles_button__3Slax"}},28:function(t,e,a){t.exports=a(43)},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(22),s=a.n(o),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var c=a(13),u=a(46),d=a(11),m=a(47),_=a(7),v=a(10),f=a(20),p=Object(v.load)({namespace:"todo-list"});p&&p.notes&&p.notes.length||(p={notes:["note 1","note 2","note 3","note 4"]});var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.notes,e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.afterIndex,r=e.text;switch(a){case"ADD_NOTE":return[].concat(Object(f.a)(t.slice(0,n+2)),[r],Object(f.a)(t.slice(n+2)));default:return t}},w=Object(_.c)({notes:h}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_.d,g=function(t){return Object(_.e)(w,t,E(Object(_.a)(Object(v.save)({namespace:"todo-list"}))))},k=a(45),N=a(48),b=a(9),y=a.n(b),O=function(t){var e=t.page;return r.a.createElement(N.a,{className:y.a.link,activeClassName:y.a["active-link"],to:"/".concat(e)},e)};O.defaultProps={page:""};var x=O,j=["notes","artists","artworks"],P=Object(k.a)(function(){return r.a.createElement("div",{className:y.a["nav-bar"]},j.map(function(t,e){return r.a.createElement(x,{key:e,page:t})}))}),A=function(){return r.a.createElement("div",null,r.a.createElement(P,null))},C=a(5),I=a.n(C),S=function(t){var e=t.params,a=t.artists,n=e&&e.artistId;if(!n)return null;var o=a.find(function(t){return t._id===n}),s=o.firstName,l=o.lastName,i=o._id,c="".concat(s," ").concat(l),u="imgs/artists/".concat(i,".png");return r.a.createElement("div",{className:I.a.spotlight},r.a.createElement("div",{className:I.a["spotlight-img"],style:{backgroundImage:"url(".concat(u,")")}}),r.a.createElement("div",{className:I.a["spotlight-label"]},c))};S.defaultProps={artists:[],params:null};var T=S,W=function(t){var e=t._id,a=t.firstName,n=t.lastName;return r.a.createElement(N.a,{key:e,to:"/artists/".concat(e),className:I.a["artist-row"],activeClassName:I.a["active-artist-row"]},r.a.createElement("div",{className:I.a["artist-avatar"],style:{backgroundImage:"url(imgs/artists/".concat(e,".png)")}}),r.a.createElement("span",null,"".concat(a," ").concat(n)))};W.defaultProps={_id:"",firstName:"",lastName:""};var B=W,D=function(t){var e=t.artists,a=t.match.params;return r.a.createElement("div",{className:I.a.dashboard},r.a.createElement("div",null,r.a.createElement("h3",{className:I.a.header},"Artists"),e.map(function(t){var e=t._id,a=t.firstName,n=t.lastName;return r.a.createElement(B,{key:e,_id:e,firstName:a,lastName:n})})),r.a.createElement(T,{params:a,artists:e}))};D.defaultProps={artists:[],match:{params:null}};var R=Object(k.a)(D),U=[{_id:"1",firstName:"Annie",lastName:"Walker"},{_id:"2",firstName:"Lynda",lastName:"Dubovich"},{_id:"3",firstName:"Jessica",lastName:"Gonsalez"},{_id:"4",firstName:"Kate",lastName:"Banksy"}],L=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(R,{artists:U}))},H=a(6),M=a.n(H),X=function(t){var e=t.params,a=t.artworks,n=e&&e.artworkId;if(!n)return null;var o=a.find(function(t){return t._id===n}),s=o.title,l=o._id,i="imgs/artworks/".concat(l,".jpg");return r.a.createElement("div",{className:M.a.spotlight},r.a.createElement("div",{className:M.a["spotlight-img"],style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:M.a["spotlight-label"]},s))};X.defaultProps={artworks:[],params:null};var z=X,J=function(t){var e=t._id,a=t.title;return r.a.createElement(N.a,{to:"/artworks/".concat(e),className:M.a["artwork-row"],activeClassName:M.a["active-artwork-row"]},r.a.createElement("div",{className:M.a["artwork-avatar"],style:{backgroundImage:"url(imgs/artworks/".concat(e,".jpg)")}}),r.a.createElement("span",null,"".concat(a)))};J.defaultProps={_id:"",title:""};var V=J,F=function(t){var e=t.artworks,a=t.match.params;return r.a.createElement("div",{className:M.a["artwork-list"]},r.a.createElement("div",null,r.a.createElement("h3",{className:M.a.header},"Artworks"),e.map(function(t){var e=t._id,a=t.title;return r.a.createElement(V,{key:e,_id:e,title:a})})),r.a.createElement(z,{params:a,artworks:e}))};F.defaultProps={artworks:[],match:{params:null}};var q=Object(k.a)(F),G=[{_id:"1",title:"In the event of sinking"},{_id:"2",title:"Refugees in a nutshell"},{_id:"3",title:"Solidarity"},{_id:"4",title:"The rehearsal"}],K=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(q,{artworks:G}))},Q=a(8),Y=a.n(Q),Z=function(t){var e=t.note;return r.a.createElement("div",{className:Y.a["note-list-item"]},e)};Z.defaultProps={note:"note 1"};var $=Z,tt=a(27),et=a(26),at=a.n(et),nt=function(t){var e=t.children,a=Object(tt.a)(t,["children"]);return r.a.createElement("button",Object.assign({className:at.a.button},a),e)};nt.defaultProps={children:""};var rt=nt,ot=function(t){var e=t.index,a=t.onAddButtonClick;return r.a.createElement(rt,{"data-index":e,className:Y.a["add-note"],onClick:a},"+ add note")};ot.defaultProps={index:0,onAddButtonClick:function(){}};var st=ot,lt=Object(c.b)(function(t){return{notes:t.notes}},{addNote:function(t,e){return{type:"ADD_NOTE",text:t,afterIndex:e}}}),it=function(t){var e=t.notes,a=t.addNote,n=function(t){var e=t.target.dataset.index,n=window.prompt("Note text:");n?a(n,e-1):""===n?alert("Error! Note has no name."):alert("Operation is over.")};return e.length?r.a.createElement("ul",{className:Y.a["note-list"]},e.map(function(t,e){return r.a.createElement("li",{key:e},r.a.createElement($,{note:t}),r.a.createElement(st,{index:e,onAddButtonClick:n}))})):r.a.createElement(st,{onAddButtonClick:n})};it.defaultProps={notes:[],addNote:function(){}};var ct=lt(it),ut=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(ct,null))},dt=g({}),mt=function(){return r.a.createElement(c.a,{store:dt},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{path:"/notes",component:ut}),r.a.createElement(d.a,{path:"/artists/:artistId*",component:L}),r.a.createElement(d.a,{path:"/artworks/:artworkId*",component:K}))))};a(42);s.a.render(r.a.createElement(mt,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/TaskPanel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/TaskPanel","/service-worker.js");l?(function(t,e){fetch(t).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):i(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):i(e,t)})}}()},5:function(t,e,a){t.exports={dashboard:"styles_dashboard__1YrEp",header:"styles_header__1EUbM","artist-row":"styles_artist-row__2rcHa","active-artist-row":"styles_active-artist-row__EeOL8","artist-avatar":"styles_artist-avatar__2NPWW",spotlight:"styles_spotlight__1j0Au","spotlight-img":"styles_spotlight-img__3U6jr","spotlight-label":"styles_spotlight-label__3FDs0"}},6:function(t,e,a){t.exports={"artwork-list":"styles_artwork-list__1PZBf",header:"styles_header__2wkiE","artwork-row":"styles_artwork-row__3rtAk","active-artwork-row":"styles_active-artwork-row__3HHrQ","artwork-avatar":"styles_artwork-avatar__1Euld",spotlight:"styles_spotlight__2xHbF","spotlight-img":"styles_spotlight-img__1a4lM","spotlight-label":"styles_spotlight-label__1zCNl"}},8:function(t,e,a){t.exports={"note-list":"styles_note-list__2cBw9","add-note":"styles_add-note__-W4lB","note-list-item":"styles_note-list-item__3spRs"}},9:function(t,e,a){t.exports={"nav-bar":"styles_nav-bar__3V52z",link:"styles_link__2qSb0","active-link":"styles_active-link__29aSE"}}},[[28,1,2]]]);
//# sourceMappingURL=main.e4e5958e.chunk.js.map