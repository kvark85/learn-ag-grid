(this["webpackJsonplearn-ag-grid"]=this["webpackJsonplearn-ag-grid"]||[]).push([[0],{161:function(e,t,n){},206:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,s,l,u,d,j,h,b,p,f,m,x,O,v,g=n(0),A=n.n(g),k=n(17),y=n.n(k),C=(n(161),n(13)),S=n(28),D="MARKS_FETCH_REQUESTED",w="MARKS_FETCH_SUCCEEDED",E="VEHICLES_FETCH_REQUESTED",U="VEHICLES_FETCH_SUCCEEDED",M="IMAGES_FETCH_REQUESTED",R="IMAGES_FETCH_SUCCEEDED",I=function(){return{type:D}},N=n(14),T=n(16),F=(n(165),n(51)),L=n(212),V=n(4),B=function(){var e=Object(T.f)(),t=Object(g.useState)(!1),n=Object(F.a)(t,2),i=n[0],o=n[1],s=N.a.aside(a||(a=Object(C.a)(["\n    flex: 0 1 auto;\n    background-color: #f8f8f8;\n    text-align: center;\n    position: relative;\n    border-right: 1px solid #DADCDE;\n  "]))),l=Object(N.a)(L.a)(c||(c=Object(C.a)(["\n    position: absolute;\n \n    bottom: ",";\n    right: ",";\n  "])),i?"8px":"0",i?"8px":"-30px"),u=Object(N.a)(L.b)(r||(r=Object(C.a)(["margin: 48px 16px"])));return Object(V.jsxs)(s,{children:[Object(V.jsx)(l,{icon:i?"caret-left":"caret-right",onClick:function(){return o(!i)}}),i&&Object(V.jsxs)(u,{vertical:!0,children:[Object(V.jsx)(L.a,{onClick:function(){return e.push("/grouped-table")},rightIcon:"caret-right",text:"Grouped table"}),Object(V.jsx)(L.a,{onClick:function(){return e.push("/drag-and-drop")},rightIcon:"caret-right",text:"Drag & Drop"})]})]})},H=function(){return Object(V.jsx)("div",{children:"Drag & Drop"})},P=n(21),X=n(97),z=function(){var e=N.a.div(i||(i=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    height: 45px;\n    border-bottom: 1px solid #DADCDE;\n  "]))),t=N.a.div(o||(o=Object(C.a)(["\n    flex: 1 1 auto;\n    padding-left: 16px;\n    color: #10161A;\n    font-size: 18px;\n    letter-spacing: 0;\n  "]))),n=Object(N.a)(L.a)(s||(s=Object(C.a)(["\n    margin-right: 16px;\n  "])));return Object(V.jsxs)(e,{children:[Object(V.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAtCAIAAACF9GTsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAP0SURBVFhH7ZZXSzNBFIZNLEmMLSaigl2xQhRFBBsiXgh64U/1TlCwoKIXKrlRMIIFsYENWxLr95iznyxBNLM7guC+F8Nwdsoz78yZWVckEsn43Xp7e3Mb1d8th1KfHEp9cij1yaHUpz9A6Xa7s7OzMzMzXS6XEfov+eTxeCipG1GrsviOg4Xu7u6i0WhJSUlpaWlOTg4PruA+Pz/zaW9v7+joqKamprKyMi8vD1YaSHclvQ9rjfL29vbw8HB7ezuRSEAWCARaWlrAfXl5ubq62tnZOT8/f319xWYij4+Pzc3NHR0d+Gr0V5F1ypOTk42NDViZGEqACAaDwaenp5ubG8YVPuK5ubl4GQqFiouLqUt3JVmnRCAeHx9vbm5SB5SxhBVRAbe6urqqqgqbCwsL2W6gaSMNlGSLEjKM3N3dXV5elkMpQQzjmHIA8vPzCcbjcfhogLvQWwC1RYmYmPyYn58nlxkLiOHhYRBhxUsS6PT0dGtr6+HhAV/r6upYAFJNeUa2dUfQPysry2wPW0yCk0Bra2uzs7OUpA6Wk2osZmVlhVMLJWIlRp80ZPcmw06jlpQcPrDKyso4jpJAxFkMLe/v74l4vd6zs7P9/f2Uvl/ICqV5y8TLlMzgFJLXQ0NDY2Nj4BLhK+aBxe7j6PT0NFeVeZyvpUzJ0JeXl2AxJT4VFBR0dnZyacMhtomoIy6gcDiMeULJ7q+urnLLYnb6iEiZkglI6vX1dczASOZua2sbHBxsb2/3+XxmUPSx4yLIWBsjpCzpWylTgsXcvH5sHKxMxtxcOrwuAwMDpDZtiJD1wkF7lOz6vu+UtIGVJyB9UGVKBAQuxmIxXsLJycmDgwPymjgTU8J0fX09MzPDzorZyU4GIiUnlfPKxcRq5dO3skLJxNhACS4zLS4uzs3Nkba86RyDpaWlqakprh6+0lhKEV16e3tHRkb8fv/P7ji2NTU1MQ0VYeWcXVxccFjJjIWFBe55IpL7tJfFSF8qfEo5rOnIImV/fz//OKQ2aUsQJubmpYEMDiJUBMXspQSFXknKlAigoqIi0mV0dLSrqwu3mJhSbmk4aAA3fkucoPARp4KSwyjICiViSgRBa2srCU6doBBwO9bW1k5MTNTX12O8UMJH1vNHzPKSA6jJIqUIJjmdUgcFg7k7e3p62Hc+STPi/G309fV1d3fLDS/x9GWL8kMAMTe4jY2N/FDKzhKnZOt5nODjT54GFhCRBkoyqaGhgZ0VX0E0PiQFZXl5uaSXEVKXXUq8IdO5BcfHxysqKj61iuCn8fRl6y/YLG4c7OT1M189WsQKtY0oe60dUfQjg2qXQ6lPDqU+OZT65FDqUkbGP3QRhSzsX1NtAAAAAElFTkSuQmCC",alt:"Logo"}),Object(V.jsx)(t,{children:"Moto search"}),Object(V.jsx)(n,{icon:"cog",minimal:!0})]})},G=n(101),J=n(213),Q=Object(S.b)((function(e){var t=e.vehicleState;return{marks:t.marks,status:t.status}}),{fetchMarks:I,fetchVehicles:function(e){return{type:E,payload:{selectedMarks:e}}}})((function(e){var t=e.marks,n=e.status,a=e.fetchVehicles,c=Object(g.useState)([{name:"BMW",value:9}]),r=Object(F.a)(c,2),i=r[0],o=r[1],s=N.a.div(l||(l=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    min-height: 45px;\n    padding: 16px;\n  "]))),h=N.a.div(u||(u=Object(C.a)(["\n    color: #000000;\n    font-size: 20px;\n    font-weight: bold;\n    letter-spacing: 0;\n  "]))),b=N.a.div(d||(d=Object(C.a)(["\n    flex: 1 1 auto;\n    padding-left: 16px;\n    padding-right: 16px;\n  "]))),p=N.a.div(j||(j=Object(C.a)(["\n    width: 50%;\n  "]))),f=J.a.ofType(),m=function(e){return i.map((function(e){return e.name})).includes(e.name)},x=i.length>0?Object(V.jsx)(L.a,{icon:"cross",minimal:!0,onClick:function(){return o([])}}):void 0,O=function(e){return o(i.filter((function(t){return t.name!==e.name})))};return Object(V.jsxs)(s,{children:[Object(V.jsx)(h,{children:"Select manufacturer and region"}),Object(V.jsx)(b,{children:Object(V.jsx)(p,{children:Object(V.jsx)(f,{itemPredicate:function(e,t,n){var a=t.name.toLowerCase(),c=e.toLowerCase();return a.indexOf(c)>=0},itemRenderer:function(e,t){var n=e.name,a=t.handleClick;return t.modifiers.matchesPredicate?Object(V.jsx)(L.d,{icon:m({name:n})?"tick":"blank",onClick:a,text:n},n):null},items:t,fill:!0,noResults:Object(V.jsx)(L.d,{disabled:!0,text:"No results."}),onItemSelect:function(e){if(m(e))return O(e);o([].concat(Object(G.a)(i),[e]))},popoverProps:{minimal:!0},tagRenderer:function(e){return e.name},tagInputProps:{onRemove:function(e){return O({name:e})},rightElement:x},selectedItems:i})})}),Object(V.jsx)(L.a,{icon:"cube-add",intent:"primary",loading:"loading"===n,disabled:0===i.length,onClick:function(){return a(i)},children:"Search vehicles"})]})})),W=n(98),K=Object(S.b)((function(e,t){return{vehicles:e.vehicleState.vehicles,images:e.vehicleState.images[t.data.id]||[]}}),{fetchImages:function(e){return{type:M,payload:e}}})((function(e){var t=e.data,n=e.vehicles,a=e.images,c=e.fetchImages;Object(g.useEffect)((function(){0===a.length&&c(t.id)}));var r=n.find((function(e){return e.id===t.id})),i=N.a.div(h||(h=Object(C.a)(["\n    display: flex;\n    height: 300px;\n  "]))),o=N.a.div(b||(b=Object(C.a)(["\n    max-width: 300px;\n    width: 300px;\n    min-width: 300px;\n    padding: 18px;\n    white-space: initial;\n  "]))),s=N.a.div(p||(p=Object(C.a)(["\n    flex: 1 1 auto;\n    padding: 18px;\n    white-space: initial;\n  "]))),l=N.a.div(f||(f=Object(C.a)(["\n    width: calc(300px - (2 * 16px));\n    height: calc(300px - (2 * 16px));\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  "]))),u=N.a.img(m||(m=Object(C.a)(["\n    height: auto;\n    width: 100%;\n  "])));return Object(V.jsxs)(i,{children:[Object(V.jsx)(o,{children:Object(V.jsx)(W.Carousel,{centerMode:!1,children:a.map((function(e,t){return Object(V.jsx)(l,{children:Object(V.jsx)(u,{src:e.formats[0],alt:"Foro of vehicle"},t)})}))})}),Object(V.jsx)(s,{children:"Description: ".concat(r.autoData.description)})]})})),q=n(1),_=n(18),Z=function(e){return e.value?"".concat(e.value," \u043e\u0431\u043b\u0430\u0441\u0442\u044c"):e.value},Y=function(e){var t,n;return null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.price)||void 0===n?void 0:n.USD},$=function(e){return e.value?"$".concat(e.value):e.value},ee=function(e){var t,n,a=e.valueFormatted;return a?Object(V.jsx)(L.h,{className:q.a.TOOLTIP_INDICATOR,position:_.a.TOP,content:Object(V.jsxs)("span",{children:[Object(V.jsx)("strong",{children:"UAH:"})," ","".concat(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.price)||void 0===n?void 0:n.UAH," \u0433\u0440.")]}),children:a}):""},te=n(99),ne=Object(te.a)([function(e){return e.vehicleState.vehicles}],(function(e){return e.map((function(e){return{id:e.id,markName:e.markName,title:e.title,price:{USD:e.USD,UAH:e.UAH},regionName:e.stateData.regionName,locationCityName:e.locationCityName,travelRoute:[]}}))})),ae=Object(S.b)((function(e){return{vehiclesTableData:ne(e)}}),{fetchMarks:I})((function(e){var t=e.vehiclesTableData,n={masterDetail:!0,detailCellRenderer:"vehicleDetails",frameworkComponents:{amountCellRenderer:ee,vehicleDetails:K},defaultColDef:{sortable:!0,filter:!0,flex:1,minWidth:200},columnDefs:[{headerName:"Mark",field:"markName",cellRenderer:"agGroupCellRenderer",rowGroup:!0},{headerName:"Region",field:"regionName",valueFormatter:Z},{headerName:"City",field:"locationCityName",rowGroup:!0},{headerName:"Model",field:"title"},{headerName:"USD",valueGetter:Y,valueFormatter:$,cellRenderer:"amountCellRenderer"},{headerName:"Travel Route"}],rowData:t},a=N.a.div(x||(x=Object(C.a)(["\n    flex: 1 1 auto;\n    min-width: 0;\n    padding: 0 16px 16px 16px;\n  "])));return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(z,{}),Object(V.jsx)(Q,{}),Object(V.jsx)(a,{children:Object(V.jsx)("div",{className:"ag-theme-alpine",style:{height:"100%"},children:Object(V.jsx)(X.AgGridReact,Object(P.a)({},n))})})]})}));n(200),n(201),n(202),n(203),n(204),n(205),n(206);var ce=Object(S.b)((function(){}),{fetchMarks:I})((function(e){var t=e.fetchMarks;Object(g.useEffect)(t);var n=N.a.div(O||(O=Object(C.a)(["\n    display: flex;\n    min-height: 100vh;\n  "]))),a=N.a.div(v||(v=Object(C.a)(["\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n  "])));return Object(V.jsxs)(n,{children:[Object(V.jsx)(B,{}),Object(V.jsx)(a,{children:Object(V.jsxs)(T.c,{children:[Object(V.jsx)(T.a,{path:"/grouped-table",children:Object(V.jsx)(ae,{})}),Object(V.jsx)(T.a,{path:"/drag-and-drop",children:Object(V.jsx)(H,{})}),Object(V.jsx)(T.a,{path:"/",children:Object(V.jsx)(ae,{})})]})})]})})),re=n(37),ie=n(102),oe=n(100),se=n(50),le={marks:[],vehicles:[],status:"idle",images:{}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(P.a)(Object(P.a)({},e),{},{marks:t.payload});case E:return Object(P.a)(Object(P.a)({},e),{},{status:"loading"});case U:return Object(P.a)(Object(P.a)({},e),{},{vehicles:t.payload,status:"idle"});case R:return Object(P.a)(Object(P.a)({},e),{},{images:Object(P.a)(Object(P.a)({},e.images),{},Object(se.a)({},t.payload.id,t.payload.images))});default:return e}},de=n(30),je=n.n(de),he=n(27),be="BNkne13cBor7gdX7Tjp0kbWLcg9eA7XIxY5AIlgw",pe={fetchMarks:function(e){var t="https://developers.ria.com/auto/categories/"+"".concat(e,"/marks?api_key=").concat(be);return fetch(t).then((function(e){return e.json()}))},fetchVehicles:function(e,t){var n=t.reduce((function(e,t,n){return e+"&marka_id[".concat(n,"]=").concat(t.value,"&model_id[").concat(n,"]=0")}),""),a="https://developers.ria.com/auto/search?api_key=".concat(be)+"&category_id=".concat(e)+n+"&state[0]=7&city[0]=0&countpage=100";return fetch(encodeURI(a)).then((function(e){return e.json()})).then((function(e){return e.result.search_result.ids}))},fetchOneVehicle:function(e){return fetch("https://developers.ria.com/auto/info?api_key=".concat(be,"&auto_id=").concat(e)).then((function(e){return e.json()}))},fetchImages:function(e){return fetch("https://developers.ria.com/auto/fotos/".concat(e,"?api_key=").concat(be)).then((function(e){return e.json()})).then((function(t){var n=[];for(var a in t.data[e])n.push(t.data[e][a]);return{id:e,images:n}}))}},fe=2,me=je.a.mark(ge),xe=je.a.mark(Ae),Oe=je.a.mark(ke),ve=je.a.mark(ye);function ge(){var e;return je.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(he.b)(pe.fetchMarks);case 2:return e=t.sent,t.next=5,Object(he.c)({type:w,payload:e});case 5:case"end":return t.stop()}}),me)}function Ae(e){var t,n;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(he.b)(pe.fetchVehicles,fe,e.payload.selectedMarks);case 2:if(t=a.sent){a.next=5;break}return a.abrupt("return");case 5:return a.next=7,Object(he.a)(t.map((function(e){return Object(he.b)(pe.fetchOneVehicle,e)})));case 7:if(n=a.sent){a.next=10;break}return a.abrupt("return");case 10:return a.next=12,Object(he.c)({type:U,payload:n.map((function(e,n){return Object(P.a)(Object(P.a)({},e),{},{id:t[n]})}))});case 12:case"end":return a.stop()}}),xe)}function ke(e){var t,n,a;return je.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(he.b)(pe.fetchImages,e.payload);case 2:return t=c.sent,n=t.id,a=t.images,c.next=7,Object(he.c)({type:R,payload:{id:n,images:a}});case 7:case"end":return c.stop()}}),Oe)}function ye(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(he.d)(D,ge);case 2:return e.next=4,Object(he.d)(E,Ae);case 4:return e.next=6,Object(he.d)(M,ke);case 6:case"end":return e.stop()}}),ve)}var Ce=ye,Se=Object(re.combineReducers)({vehicleState:ue}),De=Object(ie.a)(),we=Object(re.createStore)(Se,Object(oe.composeWithDevTools)(Object(re.applyMiddleware)(De)));De.run(Ce);var Ee=n(48);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.render(Object(V.jsx)(A.a.StrictMode,{children:Object(V.jsx)(S.a,{store:we,children:Object(V.jsx)(Ee.a,{children:Object(V.jsx)(ce,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[208,1,2]]]);
//# sourceMappingURL=main.b49a1fe8.chunk.js.map