(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(48)},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(15),i=t.n(s),l=t(9),m=t(10),c=t(12),u=t(11),o=t(13),p=t(3),h=t(8),d=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={menu:!1},t.handleClick=function(){t.setState({menu:!t.state.menu})},t}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-header"},r.a.createElement("div",{className:"app-brand"},r.a.createElement("h1",null,r.a.createElement(p.b,{to:"/"},"Trat Burger",r.a.createElement("i",{className:"fas fa-bacon"})))),r.a.createElement("div",{className:this.state.menu?"app-menu-btn open":"app-menu-btn",onClick:this.handleClick},r.a.createElement("div",null)),r.a.createElement("nav",{className:this.state.menu?"app-nav-items show":"app-nav-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/",onClick:this.handleClick},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/menu",onClick:this.handleClick},"Menu")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/order",onClick:this.handleClick},"Order")))))}}]),a}(n.Component),g=t(2);var E=function(){return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:600,classNames:"home-page"},r.a.createElement("div",{className:"app-home"},r.a.createElement("div",{className:"home-text"},r.a.createElement("h1",null," Delicious, Tasty Burgers "),r.a.createElement("p",null,"With addon chips and drinks, go no where....",r.a.createElement("br",null),"Just let these leaves jump off the brush By now you should be quite happy about what's happening here.")),r.a.createElement("div",{className:"home-img"},r.a.createElement("img",{src:"./assets/burger-home.jpg",alt:"Delicious Burger"}))))};var b=function(e){var a=e.burgers,t=a.image,n=a.heading;return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"menu-burger"},r.a.createElement("div",{className:"menu-burger"},t.map(function(e,a){return r.a.createElement("div",{className:"burger-items",key:a},r.a.createElement("img",{src:e,alt:"Burgers"}),r.a.createElement("h2",null,n[a]),r.a.createElement("p",null,"A tree cannot be straight if it has a crooked trunk. The man who does the best job is the one who is happy at his job. Let's do that again."))})))};var k=function(e){var a=e.drinks,t=a.image,n=a.heading;return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"menu-drinks"},r.a.createElement("div",{className:"menu-drinks"},t.map(function(e,a){return r.a.createElement("div",{className:"drinks-items",key:a},r.a.createElement("img",{src:e,alt:"Drinks"}),r.a.createElement("h2",null,n[a]))})))};var v=function(e){var a=e.chips,t=a.image,n=a.heading;return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"menu-chips"},r.a.createElement("div",{className:"menu-chips"},t.map(function(e,a){return r.a.createElement("div",{className:"chips-items",key:a},r.a.createElement("img",{src:e,alt:"Fries"}),r.a.createElement("h2",null,n[a]),r.a.createElement("p",null,"A tree cannot be straight if it has a crooked trunk. The man who does the best job is the one who is happy at his job. Let's do that again."))})))};var j=function(e){var a=e.kids,t=a.image,n=a.heading;return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"menu-kids"},r.a.createElement("div",{className:"menu-kids"},t.map(function(e,a){return r.a.createElement("div",{className:"kids-items",key:a},r.a.createElement("img",{src:e,alt:"Kids items"}),r.a.createElement("h2",null,n[a]),r.a.createElement("p",null,"A tree cannot be straight if it has a crooked trunk. The man who does the best job is the one who is happy at his job. Let's do that again."))})))},f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={burgers:{image:["./assets/burger_menu-1.jpg","./assets/burger_menu-2.jpg","./assets/burger_menu-3.jpg","./assets/burger_menu-4.jpg","./assets/burger_menu-5.jpg","./assets/burger_menu-6.jpg"],heading:["January","February","March","April","May","June"]},drinks:{image:["../assets/drinks_menu-1.jpg","../assets/drinks_menu-2.jpg","../assets/drinks_menu-3.jpg","../assets/drinks_menu-4.jpg","../assets/drinks_menu-5.jpg","../assets/drinks_menu-6.jpg","../assets/drinks_menu-7.jpg","../assets/drinks_menu-8.jpg"],heading:["Mazata","Farloop","Mangi","Aprtile","Marnuta","Jumlia","Jurwarnia","augrita"]},chips:{image:["../assets/fries_menu-1.jpg","../assets/fries_menu-2.jpg"],heading:["Mazata","Farloop"]},kids:{image:["../assets/kids_menu-1.jpg","../assets/kids_menu-2.jpg"],heading:["Jurwarnia","augrita"]}},t}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.location.pathname;return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"menu-page"},r.a.createElement("div",{className:"app-menu"},r.a.createElement("div",{className:"app-menu-nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"/menu"===e?"active":""},r.a.createElement(p.b,{to:"/menu"},"Burgers")),r.a.createElement("li",{className:"/menu/drinks"===e?"active":""},r.a.createElement(p.b,{to:"/menu/drinks"},"Drinks")),r.a.createElement("li",{className:"/menu/chips"===e?"active":""},r.a.createElement(p.b,{to:"/menu/chips"},"Chip's")),r.a.createElement("li",{className:"/menu/kids"===e?"active":""},r.a.createElement(p.b,{to:"/menu/kids"},"Kid's")))),r.a.createElement("div",{className:"menu-content"},"/menu"===e&&r.a.createElement(b,{burgers:this.state.burgers}),"/menu/drinks"===e&&r.a.createElement(k,{drinks:this.state.drinks}),"/menu/chips"===e&&r.a.createElement(v,{chips:this.state.chips}),"/menu/kids"===e&&r.a.createElement(j,{kids:this.state.kids}))))}}]),a}(n.Component);var N=function(){return r.a.createElement(g.CSSTransition,{in:!0,appear:!0,timeout:800,classNames:"about-page"},r.a.createElement("div",{className:"app-order"},r.a.createElement("img",{src:"../assets/order-page.jpg",alt:"Jumbotron of Burger"}),r.a.createElement("h1",null," For Reservation's & order's"),r.a.createElement("div",{className:"order-content"},r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-mobile"})," 445 256 897")),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("i",{className:"fas fa-at"})," tratburger@mail.com")))))},w=(t(47),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/burger-shop",component:E}),r.a.createElement(h.a,{path:"/burger-shop/menu",component:f}),r.a.createElement(h.a,{path:"/burger-shop/order",component:N}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.2c25df84.chunk.js.map