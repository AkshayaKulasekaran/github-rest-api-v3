(this["webpackJsonpgithub-rest-api-v3"]=this["webpackJsonpgithub-rest-api-v3"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(3),o=n.n(s),r=n(13),c=n.n(r),u=(n(20),n(14)),i=(n(21),n(2)),l=n.n(i),p=function(){var t=Object(s.useState)(""),e=Object(u.a)(t,2),n=e[0],o=e[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(){var t="https://api.github.com/users/".concat(n,"/repos"),e="https://api.github.com/users/".concat(n,"/gists"),a="https://api.github.com/users/".concat(n,"/followers"),s="https://api.github.com/users/".concat(n,"/following"),o="https://api.github.com/users/".concat(n,"/starred"),r=[l.a.get(t,{params:{per_page:100}}),l.a.get(e,{params:{per_page:100}}),l.a.get(a,{params:{per_page:100}}),l.a.get(s,{params:{per_page:100}}),l.a.get(o,{params:{per_page:100}})];l.a.all(r).then(l.a.spread((function(){var t=arguments.length<=0?void 0:arguments[0],e=arguments.length<=1?void 0:arguments[1],a=arguments.length<=2?void 0:arguments[2],s=arguments.length<=3?void 0:arguments[3],o=arguments.length<=4?void 0:arguments[4],r={username:n,repos:"OK"===t.statusText?t.data:null,gists:"OK"===e.statusText?e.data:null,followers:"OK"===a.statusText?a.data:null,following:"OK"===s.statusText?s.data:null,starred:"OK"===o.statusText?o.data:null};console.log(r)})),(function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}()},children:[Object(a.jsx)("label",{children:"Enter your github username"}),Object(a.jsx)("input",{type:"text",value:n,onChange:function(t){o(t.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Search"})]})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),o(t),r(t)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),g()}},[[39,1,2]]]);
//# sourceMappingURL=main.d8ecb581.chunk.js.map