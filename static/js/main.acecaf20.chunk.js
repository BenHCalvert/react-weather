(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(60)},60:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(28),o=t.n(c),l=t(9),i=t(14),d=t(32),u=t(70),m=t(71),s=t(67),p=t(15),h=t.n(p),g=t(63),f=t(64),E=t(65),b=t(66),w=t(10),y=t(11),v=t(61),k=t(62);function D(){var e=Object(w.a)(["\n    input.form-control {\n        width: 300px;\n        padding: 5px\n    }\n    button {\n        background: teal;\n        padding: 5px\n    }\n"]);return D=function(){return e},e}function A(){var e=Object(w.a)(["\n    border: ",";\n    text-align: center;\n    padding: 1rem;\n    margin 1.5rem 0;\n    img {\n        width: 110px;\n        margin: 0 auto;\n    }    \n"]);return A=function(){return e},e}function j(){var e=Object(w.a)(["\n    :hover {\n        cursor: pointer;\n        .card {\n            border-color: ",";\n        }\n    }\n    text-align: center;\n    img {\n        width: 80px;\n    }\n\n    .card{\n        background-color: #F5F5F5;\n    }\n\n    .card-body{\n        padding: 1.25rem 0.5rem;\n    }\n    .card-header{\n        font-weight: bold;\n        background-color: ",";\n    }\n"]);return j=function(){return e},e}var x="2px solid ".concat("#A0A0A0"),S=y.a.article(j(),"#A0A0A0",function(e){return e.isSelected?"#A0A0A0":null}),Y=Object(y.a)(v.a)(A(),x),O=Object(y.a)(k.a)(D()),M=function(e){return r.a.createElement(O,{inline:!0,onSubmit:e.handleFormSubmit},r.a.createElement(g.a,null,r.a.createElement(f.a,{for:"searchTerm",hidden:!0},"Location Search"),r.a.createElement(E.a,{type:"text",name:"searchTerm",id:"searchTerm",placeholder:"Location or Landmark",onChange:e.handleInputChange,value:e.searchTerm}),r.a.createElement(b.a,{onClick:e.handleFormSubmit},"Search")))},T=t(68),_=t(69),I=function(e){return console.log(e),r.a.createElement(s.a,null,r.a.createElement(S,{isSelected:e.isSelected,onClick:e.selectDay},r.a.createElement(v.a,null,r.a.createElement(T.a,null,e.day),r.a.createElement(_.a,null,r.a.createElement("h3",null,e.temp,"\xb0"),r.a.createElement("img",{src:"".concat("/react-weather","/icons/").concat(e.icon,".png"),alt:e.description}),r.a.createElement("p",null,"High: ",e.high,"\xb0"),r.a.createElement("p",null,"Low: ",e.low,"\xb0"),r.a.createElement("p",null,"Precip: ",e.precip,"%")))))},C=function(e){return r.a.createElement(Y,null,r.a.createElement("h2",null,"Weather Info for ",e.day),r.a.createElement("h3",null,"Average Temperature: ",e.temp,"\xb0"),r.a.createElement("img",{src:"".concat("/react-weather","/icons/").concat(e.icon,".png"),alt:e.description}),r.a.createElement("p",null,"High: ",e.high,"\xb0"),r.a.createElement("p",null,"Low: ",e.low,"\xb0"),r.a.createElement("p",null,"Precip: ",e.precip,"%"))},F=t(17),L=t.n(F),B=function(e){return L.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=").concat("AIzaSyAdis1BAbDPHkb1eTnnEQ-M5_uQ8r6MzLE")).then(function(e){if(!e.data.results.length)return alert("Not a valid location.");var n=e.data.results[0].geometry.location,t=n.lat,a=n.lng;return L.a.get("https://api.weatherbit.io/v2.0/forecast/daily?lat=".concat(t,"&lon=").concat(a,"&key=").concat("7ebce04d8d574856b80c577a9eebbfbd","&units=I&days=7"))}).catch(function(e){console.log(e)})},W=function(){var e=Object(a.useState)({searchTerm:"",selectedDay:null,days:[],location:""}),n=Object(d.a)(e,2),t=n[0],c=n[1],o=t.searchTerm,p=t.selectedDay,g=t.days,f=t.location;Object(a.useEffect)(function(){E("Boise, ID")},[]);var E=function(e){if(!e)return alert("No location provided.");B(e).then(function(e){e&&c({searchTerm:"",selectedDay:null,days:e.data.data,location:e.data.city_name+", "+e.data.state_code})}).catch(function(e){return console.log(e)})};return r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(s.a,{md:7},r.a.createElement("h1",null,"Weather Info for ",f)),r.a.createElement(s.a,{md:5},r.a.createElement(M,{searchTerm:o,handleInputChange:function(e){console.log(e.target);var n=e.target,a=n.name,r=n.value;c(Object(i.a)({},t,Object(l.a)({},a,r)))},handleFormSubmit:function(e){e.preventDefault(),E(o)}}))),r.a.createElement(m.a,null,g.map(function(e){return r.a.createElement(I,{key:e.ts,day:h()(e.valid_date,"YYYY-MM-DD").format("dddd"),icon:e.weather.icon,description:e.weather.description,temp:e.temp,high:e.max_temp,low:e.min_temp,precip:e.pop,isSelected:e===p,selectDay:function(){return c(Object(i.a)({},t,{selectedDay:e}))}})})),r.a.createElement(m.a,null,r.a.createElement(s.a,null,p?r.a.createElement(C,{day:h()(p.valid_date,"YYYY-MM-DD").format("dddd, MMMM Do, YYYY"),icon:p.weather.icon,description:p.weather.description,temp:p.temp,high:p.max_temp,low:p.min_temp,precip:p.pop}):r.a.createElement("h3",null,"Click on a day above to view details"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(59);o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[34,1,2]]]);
//# sourceMappingURL=main.acecaf20.chunk.js.map