(this["webpackJsonpuser-app"]=this["webpackJsonpuser-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),u=n.n(s),a=(n(10),n(11),n(2)),i=n(4),j=(n(12),n(0)),l=function(e){var t=e.getUsersAge,n=e.usersData,r=e.listOfItems,s=Object(c.useState)(""),u=Object(a.a)(s,2),l=u[0],h=u[1],b=Object(c.useState)(null),d=Object(a.a)(b,2),o=d[0],O=d[1];return Object(j.jsxs)("div",{className:"table-container",children:[Object(j.jsx)("h3",{children:"Age Demographic of Users with __"}),Object(j.jsx)("select",{placeholder:"users",value:l,onChange:function(e){var c=Object.values(n.filter((function(n){return Object.keys(t).filter((function(n){return t[n].includes(e.target.value)})).includes(n.username)})).reduce((function(e,t){var n="".concat(t.age);return e[n]?e[n].count+=1:e[n]=Object(i.a)(Object(i.a)({},t),{},{count:1}),e}),{}));O(c),h(e.target.value)},children:r&&r.map((function(e,t){return Object(j.jsx)("option",{value:e.value,children:e.value},t)}))}),Object(j.jsx)("div",{children:Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"AGE"}),Object(j.jsx)("th",{children:"COUNT"})]}),o&&o.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.age}),Object(j.jsx)("td",{children:e.count})]},t)}))]})})})]})},h=(n(14),function(e){var t=Object(c.useState)(null),n=Object(a.a)(t,2),r=n[0],s=n[1],u=Object(c.useState)(null),i=Object(a.a)(u,2),h=i[0],b=i[1];return Object(c.useEffect)((function(){fetch("/users/age",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return b(e)})),fetch("/users",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(j.jsxs)("div",{children:[r&&r.length&&Object(j.jsxs)("div",{className:"users-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"ALL USERS"}),Object(j.jsx)("h5",{children:"Users and their age"})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{children:"Age"})]})}),r.map((function(e,t){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.username}),Object(j.jsx)("td",{children:e.age})]},t)},t)}))]})]}),Object(j.jsx)(l,{usersData:r,getUsersAge:h,listOfItems:[{value:"tv"},{value:"crackers"},{value:"chips"},{value:"item "},{value:"carrot"},{value:"apple"},{value:"grapes"},{value:"cake"},{value:"ham"}]})]})});var b=function(){return Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(h,{})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),s(e),u(e)}))};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.b1a811ae.chunk.js.map