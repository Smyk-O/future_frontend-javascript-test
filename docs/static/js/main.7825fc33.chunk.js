(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(4),s=a.n(i),r=(a(23),a(5)),c=a.n(r),m=a(11),o=a(12),u=a(13),d=a(16),v=a(14),f=a(17),p=a(3),h=(a(27),"http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"),_="http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).loadingList=function(){var e=Object(m.a)(c.a.mark(function e(t){var n,l,i,s,r,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("little"!==t){e.next=11;break}return e.next=3,fetch(h);case 3:return n=e.sent,e.next=6,n.json();case 6:l=e.sent,i=Math.ceil(l.length/30),a.setState({items:l,list_page_active:1,number_of_pages:i}),e.next=19;break;case 11:return e.next=13,fetch(_);case 13:return s=e.sent,e.next=16,s.json();case 16:r=e.sent,m=Math.ceil(r.length/30),a.setState({items:r,list_page_active:1,number_of_pages:m});case 19:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={items:[],list_page_active:!1,number_of_pages:!1,item_target:!1},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"targetItem",value:function(){if(this.state.item_target){var e=this.state.item_target;return l.a.createElement("div",{className:"fullInfo"},l.a.createElement("div",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",l.a.createElement("b",null,e.firstName+" "+e.lastName)),l.a.createElement("div",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),l.a.createElement("textarea",{placeholder:e.description}),l.a.createElement("div",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",l.a.createElement("b",null,"item.address.streetAddress")),l.a.createElement("div",null,"\u0413\u043e\u0440\u043e\u0434: ",l.a.createElement("b",null,"item.address.city")),l.a.createElement("div",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442: ",l.a.createElement("b",null,"item.address.state")),l.a.createElement("div",null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",l.a.createElement("b",null,"item.address.zip")))}return null}},{key:"getItem",value:function(){var e=this;if(this.state.items.length>0){var t=30*(this.state.list_page_active-1),a=t+29;return this.state.items.slice(t,a).map(function(t){return l.a.createElement("div",{className:"item_table",key:t.id+t.firstName,onClick:function(){return e.setState({item_target:t})}},l.a.createElement("div",{className:"table_id"},t.id),l.a.createElement("div",{className:"table_firstName"},t.firstName),l.a.createElement("div",{className:"table_lastName"},t.lastName),l.a.createElement("div",{className:"table_email"},t.email),l.a.createElement("div",{className:"table_phone"},t.phone))})}return this.state.items?l.a.createElement("div",{className:"choose"},"choose a list"):l.a.createElement("div",{className:"loading"},"loading...")}},{key:"getPage",value:function(){for(var e=this,t=[],a=function(a){t.push(l.a.createElement(p.d,{key:a+"page",onClick:function(){return e.setState({list_page_active:a+1})}},l.a.createElement(p.e,null,a+1)))},n=0;n<this.state.number_of_pages;n++)a(n);return this.state.number_of_pages>1?l.a.createElement(p.c,{"aria-label":"Page navigation example"},l.a.createElement(p.d,{onClick:function(){return e.setState({list_page_active:e.state.list_page_active-1})}},l.a.createElement(p.e,{previous:!0})),t,l.a.createElement(p.d,{onClick:function(){return e.setState({list_page_active:e.state.list_page_active+1})}},l.a.createElement(p.e,{next:!0}))):null}},{key:"render",value:function(){var e=this;return l.a.createElement(p.b,{className:"app"},l.a.createElement("div",{className:"button-group"},l.a.createElement(p.a,{outline:!0,color:"secondary",onClick:function(){e.loadingList("little"),e.setState({items:!1})}},"little list"),l.a.createElement(p.a,{outline:!0,color:"secondary",onClick:function(){e.loadingList("large"),e.setState({items:!1})}},"large list")),l.a.createElement("div",null,l.a.createElement("div",{className:"item_table item_table_title"},l.a.createElement("div",{className:"table_id"},"id"),l.a.createElement("div",{className:"table_firstName"},"firstName"),l.a.createElement("div",{className:"table_lastName"},"lastName"),l.a.createElement("div",{className:"table_email"},"email"),l.a.createElement("div",{className:"table_phone"},"phone")),this.getItem()),this.getPage(),this.targetItem())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);s.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.7825fc33.chunk.js.map