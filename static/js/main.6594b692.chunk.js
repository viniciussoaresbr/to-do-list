(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(6),a=n.n(i),o=(n(13),n(2)),r=(n(14),n(15),n(0)),l=function(e){var t=e.evClick,n=void 0===t?function(){}:t,c=e.text,s=e.type,i=void 0===s?"button":s;return Object(r.jsx)("button",{className:"button",onClick:function(e){n(e)},type:i,children:c})},u=(n(17),function(e){var t=e.fnToggleForm,n=Object(c.useState)(!1),s=Object(o.a)(n,2),i=s[0],a=s[1];return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"header__logo",children:"To-do list"}),Object(r.jsx)(l,{text:i?"Fechar Menu":"Abrir Menu",evClick:function(){a(!i),t()}})]})}),j=n(8),d=n(28),b=Object(c.createContext)({}),h=function(e){var t=e.children,n=Object(c.useState)([]),s=Object(o.a)(n,2),i=s[0],a=s[1],l=Object(c.useState)(!0),u=Object(o.a)(l,2),h=u[0],O=u[1],x=Object(c.useState)(!0),f=Object(o.a)(x,2),v=f[0],m=f[1],p=Object(c.useState)(""),N=Object(o.a)(p,2),_=N[0],g=N[1];return Object(r.jsx)(b.Provider,{value:{createNote:function(e){var t=e.text;a([].concat(Object(j.a)(i),[{text:t,done:!1,id:Object(d.a)()}]))},done:h,setDone:O,undone:v,setUndone:m,fnToggleDone:function(e,t){a(i.map((function(n){return n.id===e&&(n.done=t),n})))},searchStr:_,setSearchStr:g,notes:i,removeNote:function(e){a(i.filter((function(t){return t.id!==e})))}},children:t})},O=(n(18),function(e){var t=e.label,n=void 0===t?"":t,c=e.value,s=void 0===c?"":c,i=e.evChange,a=void 0===i?function(){}:i,o=e.validate,l=void 0!==o&&o;return Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("label",{htmlFor:"",className:"input__label",children:n}),Object(r.jsx)("input",{maxLength:"35",required:l,value:s,type:"text",className:"input__field",onChange:function(e){a({value:e.target.value})}})]})}),x=(n(19),n(20),function(e){var t=e.evClick,n=void 0===t?function(){}:t,c=e.checked,s=void 0!==c&&c;return Object(r.jsx)("div",{className:"checkbox",onClick:function(){n({checked:!s})},children:Object(r.jsx)("div",{className:s?"checkbox--checked":""})})}),f=function(){var e=Object(c.useContext)(b),t=e.done,n=e.setDone,s=e.undone,i=e.setUndone,a=e.searchStr,o=e.setSearchStr;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{label:"Pesquisar:",value:a,evChange:function(e){var t=e.value;o(t)}}),Object(r.jsx)("label",{className:"form__label",children:"Finalizadas"}),Object(r.jsx)(x,{checked:t,evClick:function(e){var t=e.checked;n(t)}}),Object(r.jsx)("label",{className:"form__label",children:"N\xe3o Finalizadas"}),Object(r.jsx)(x,{checked:s,evClick:function(e){var t=e.checked;i(t)}})]})},v=(n(21),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useContext)(b).createNote;return Object(r.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),i({text:n}),s("")},children:[Object(r.jsx)(O,{validate:!0,label:"O que eu tenho pra fazer?",value:n,evChange:function(e){var t=e.value;s(t)}}),Object(r.jsx)(l,{text:"Criar lembrete",type:"submit"}),Object(r.jsx)(f,{})]})}),m=(n(22),function(){var e=Object(c.useContext)(b).notes,t=e.filter((function(e){return!0===e.done})),n=e.filter((function(e){return!1===e.done}));return Object(r.jsxs)("section",{className:"statistics",children:[Object(r.jsx)("h1",{className:"statistics__title",children:"Estat\xedsticas:"}),Object(r.jsxs)("div",{className:"statistics__container",children:[Object(r.jsx)("div",{className:"pipe",id:"pipe--blue",style:{height:"".concat(e.length,"rem")}}),Object(r.jsx)("h1",{className:"statistics__info",children:"Total: ".concat(e.length)})]}),Object(r.jsxs)("div",{className:"statistics__container",children:[Object(r.jsx)("div",{className:"pipe",style:{height:"".concat(t.length,"rem")}}),Object(r.jsx)("h1",{className:"statistics__info",children:"Finalizadas: ".concat(t.length)})]}),Object(r.jsxs)("div",{className:"statistics__container",children:[Object(r.jsx)("div",{className:"pipe",id:"pipe--red",style:{height:"".concat(n.length,"rem")}}),Object(r.jsx)("h1",{className:"statistics__info",children:"N\xe3o Finalizadas: ".concat(n.length)})]})]})}),p=(n(23),function(){return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsx)(v,{}),Object(r.jsx)(m,{})]})}),N=n(7),_=(n(24),function(e){var t=e.note,n=void 0===t?{text:"Note text",done:!1,id:0}:t,s=Object(N.useContext)(b),i=s.fnToggleDone,a=s.removeNote,l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],d=u[1];return Object(r.jsxs)("div",{className:"note",onMouseOver:function(){d(!0)},onMouseOut:function(){d(!1)},onDoubleClick:function(){a(n.id)},children:[Object(r.jsxs)("div",{className:"note__container",children:[Object(r.jsx)("span",{className:"note__advice",children:j&&"* Clique duas vezes para excluir"}),Object(r.jsx)("span",{className:"note__text",children:n.text})]}),Object(r.jsx)(x,{checked:n.done,evClick:function(e){var t=e.checked;i(n.id,t)}})]})}),g=(n(25),function(){var e=Object(c.useContext)(b),t=e.searchStr,n=e.notes,s=e.done,i=e.undone;return Object(r.jsx)("div",{className:"noteList",children:n.filter((function(e){return s&&i?e:s?!0===e.done:i?!1===e.done:null})).map((function(e,n){return e.text.toUpperCase().includes(t.toUpperCase())?Object(r.jsx)(_,{note:e},n):Object(r.jsx)(r.Fragment,{})}))})});var C=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{fnToggleForm:function(){s(!n)}}),Object(r.jsxs)(h,{children:[n?Object(r.jsx)(p,{}):null,Object(r.jsx)(g,{})]})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.6594b692.chunk.js.map