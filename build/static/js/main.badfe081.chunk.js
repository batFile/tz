(this.webpackJsonptz=this.webpackJsonptz||[]).push([[0],{38:function(t,e,s){"use strict";s.r(e);var a=s(1),n=s(0),r=s.n(n),i=s(16),c=s.n(i),o=s(22),l=s(8),u=s(9),j=s(13),p=s(12),h=s(3),b=s(11),d=s(18),O=s(10),g=function(t){return{type:"CHANGE_TOKEN",payload:t}},m=function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).state={login:"eve.holt@reqres.in",password:"cityslicka",error:"",status:0,typeAlert:0},t.loginization=t.loginization.bind(Object(d.a)(t)),t}return Object(u.a)(s,[{key:"validation",value:function(){var t=this.state.login.lastIndexOf("@"),e=this.state.login.lastIndexOf(".");return this.state.password.length<8?(this.setState({typeAlert:3}),console.log(3),!1):t<e&&t>0&&-1==this.state.login.indexOf("@@")&&e>2&&this.state.login.length-e>2||(this.setState({typeAlert:2}),console.log(2),!1)}},{key:"loginization",value:function(){var t=this;this.validation()&&fetch("https://reqres.in/api/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email:this.state.login,password:this.state.password})}).then((function(e){return e.ok?e.json():t.setState({status:e.status})})).then((function(e){if(200===t.state.status||0===t.state.status){t.props.set(e.token)}else 400===t.state.status?(console.log(t.state.status),t.setState({error:"Uncorrect e-mail or password",typeAlert:1})):(console.log(t.state.status),t.setState({error:"Some troubles with server (response status = "+t.state.status+" )",typeAlert:1}))}))}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("img",{src:"./img/logo.png"}),Object(a.jsx)("h2",{className:"login_title",children:"Login"}),1===this.state.typeAlert?Object(a.jsx)("p",{className:"alert",children:this.state.error}):Object(a.jsx)(a.Fragment,{}),2===this.state.typeAlert?Object(a.jsx)("p",{className:"alert",children:"Please, enter valid e-mail"}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)("input",{type:"text",placeholder:"e-mail",value:this.state.login,onChange:function(e){return t.setState({login:e.target.value,typeAlert:0})}}),3===this.state.typeAlert?Object(a.jsx)("p",{className:"alert",children:"Password must be more 8 symbols"}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)("input",{type:"password",placeholder:"password",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value,typeAlert:0})}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:this.loginization,children:"Submit"})]})}}]),s}(n.Component);var f=Object(b.b)((function(t){return{token:t.token}}),(function(t){return Object(O.a)({set:g},t)}))(m),v=function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).state={img:t.data.avatar,fn:t.data.first_name,ln:t.data.last_name,email:t.data.email,poping_up:!1},a}return Object(u.a)(s,[{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"li_contain",onClick:function(){return t.setState({poping_up:!t.state.poping_up})},children:[this.state.poping_up?Object(a.jsx)("img",{src:this.state.img}):Object(a.jsx)(a.Fragment,{}),Object(a.jsxs)("p",{className:"name",children:[this.state.fn," ",this.state.ln]}),this.state.poping_up?Object(a.jsx)("p",{className:"email",children:this.state.email}):Object(a.jsx)(a.Fragment,{})]})}}]),s}(n.Component),x=function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).getUsers=function(){fetch("https://reqres.in/api/users?page="+t.state.page).then((function(t){return t.json()})).then((function(e){return t.setState({data:e.data,total_pages:e.total_pages})})).catch((function(t){return console.log(t)}))},t.state={total_pages:0,page:1,data:[]},t}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("section",{className:"list",children:[Object(a.jsx)("div",{className:"data_contain",children:this.state.data.map((function(t){return Object(a.jsx)(v,{data:t},"data-".concat(t.id))}))}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"contain_nav",children:[Object(a.jsx)("button",{disabled:1===this.state.page,onClick:function(){return t.setState({page:t.state.page-1},t.getUsers)},className:"prev",children:"<"}),Object(a.jsx)("button",{disabled:this.state.page===this.state.total_pages,onClick:function(){return t.setState({page:t.state.page+1},t.getUsers)},className:"next",children:">"})]}),Object(a.jsx)("button",{onClick:function(){t.props.set(null)},className:"exit",children:"Exit \xd7"})]})}}]),s}(n.Component);var y=Object(b.b)(null,(function(t){return Object(O.a)({set:g},t)}))(x),k=function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(l.a)(this,s),(t=e.call(this)).state={},t}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsx)(h.c,{children:Object(a.jsx)(h.a,{path:"/",exact:!0,component:null!=this.props.token?y:f})})}}]),s}(n.Component),N=Object(b.b)((function(t){return{token:t.token}}),null)(k),_=s(19),S={token:null,users:null,cur_user:null},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0,s=Object(_.a)({},t);switch(e.type){case"CHANGE_TOKEN":return Object(_.a)(Object(_.a)({},t),{},{token:e.payload})}return s},C=Object(O.b)(w);var A=function(){return Object(a.jsx)(b.a,{store:C,children:Object(a.jsx)(o.a,{basename:"",children:Object(a.jsx)(N,{})})})};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.badfe081.chunk.js.map