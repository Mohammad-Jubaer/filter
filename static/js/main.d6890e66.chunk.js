(this.webpackJsonpfilter=this.webpackJsonpfilter||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),u=(a(12),a(2)),s=a.n(u),i=a(5),o=a(6),m=a(1),f=(a(14),function(e){return e.emp.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("img",{alt:e.name.first,src:e.picture.large}),r.a.createElement("div",{className:"card-container"},r.a.createElement("h2",null,e.name.first," ",e.name.last),r.a.createElement("small",null,"AGE : ",e.dob.age),r.a.createElement("p",null,e.email)))}))}),p=(a(15),function(e){return r.a.createElement("div",{className:"card-list"},r.a.createElement(f,{emp:e.emp}))}),d=(a(16),function(e){return r.a.createElement("input",{type:"search",className:"search-box",placeholder:e.placeholder,onChange:e.onChange})}),E=(a(17),function(e,t){switch(t.type){case"CHANGE":return Object(m.a)(Object(m.a)({},e),{},{value:t.val});case"SET":return Object(m.a)(Object(m.a)({},e),{},{filtered:t.val,user:t.val});case"FILTER":return Object(m.a)(Object(m.a)({},e),{},{filtered:t.val});default:return e}}),v=function(){var e=r.a.useReducer(E,{user:[],filtered:[],value:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useCallback)((function(e){c({type:"CHANGE",val:e.target.value.trim().toLowerCase()})}),[]);return Object(n.useEffect)((function(){a.value?c({type:"FILTER",val:a.user.filter((function(e){return e.name.first.toLowerCase().includes(a.value)||e.name.last.toLowerCase().includes(a.value)}))}):c({type:"SET",val:a.user})}),[a.value,a.user]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api/?results=12");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c({type:"SET",val:a.results});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Random People"),r.a.createElement(d,{placeholder:"search for random people",onChange:l}),r.a.createElement(p,{emp:a.filtered})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d6890e66.chunk.js.map