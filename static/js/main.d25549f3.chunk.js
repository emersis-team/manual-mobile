(this["webpackJsonpmanual-web-mobile"]=this["webpackJsonpmanual-web-mobile"]||[]).push([[0],{23:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),o=n.n(r),c=(n(28),n(7)),l=n(8),s=n(10),m=n(9),u=n(2),p=n(1),h=function(){return i.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#3751FF"}),i.a.createElement("path",{d:"M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z",fill:"url(#paint0_linear)"}),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"paint0_linear",x1:"11",y1:"9",x2:"23",y2:"23",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"white",stopOpacity:"0.7"}),i.a.createElement("stop",{offset:"1",stopColor:"white"}))))},d=p.a.create({container:{marginLeft:32,marginRight:32},title:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px",color:"#A4A6B3",opacity:.7,marginLeft:12}});var g=function(){return i.a.createElement(u.Row,{className:Object(p.b)(d.container),horizontal:"center",vertical:"center"},i.a.createElement(h,null),i.a.createElement("span",{className:Object(p.b)(d.title)},"Manual Cideso"))},b=n(11),f=p.a.create({activeBar:{height:56,width:3,backgroundColor:"#DDE2FF",position:"absolute",left:0},activeContainer:{backgroundColor:"rgba(221,226,255, 0.08)"},activeTitle:{color:"#DDE2FF"},container:{height:56,cursor:"pointer",":hover":{backgroundColor:"rgba(221,226,255, 0.08)"},paddingLeft:32,paddingRight:32},title:{fontFamily:"Muli",fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:"#A4A6B3",marginLeft:24}});var v=function(e){var t=e.active,n=e.icon,a=e.title,r=Object(b.a)(e,["active","icon","title"]),o=n;return i.a.createElement(u.Row,Object.assign({className:Object(p.b)(f.container,t&&f.activeContainer),vertical:"center"},r),t&&i.a.createElement("div",{className:Object(p.b)(f.activeBar)}),i.a.createElement(o,{fill:t&&"#DDE2FF",opacity:!t&&"0.4"}),i.a.createElement("span",{className:Object(p.b)(f.title,t&&f.activeTitle)},a))},w=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z",fill:e.fill||"#9FA2B4"}))},C=function(e){return i.a.createElement("svg",{height:"32px",version:"1.1",viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},i.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}))},E=p.a.create({burgerIcon:{cursor:"pointer",position:"absolute",left:24,top:34},container:{backgroundColor:"#363740",width:255,paddingTop:32,height:"calc(100% - 32px)"},containerMobile:{transition:"left 0.5s, right 0.5s",position:"absolute",width:255,height:"calc(100% - 32px)",zIndex:901},mainContainer:{height:"100%",minHeight:"100vh"},mainContainerMobile:{position:"absolute",width:"100vw",minWidth:"100%",top:0,left:0},menuItemList:{marginTop:52},outsideLayer:{position:"absolute",width:"100vw",minWidth:"100%",height:"100%",backgroundColor:"rgba(0,0,0,.50)",zIndex:900},separator:{borderTop:"1px solid #DFE0EB",marginTop:16,marginBottom:16,opacity:.06},hide:{left:-255},show:{left:0}}),x=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={expanded:!1},e.onItemClicked=function(t){return e.setState({expanded:!1}),e.props.onChange(t)},e.isMobile=function(){return window.innerWidth<=768},e.toggleMenu=function(){return e.setState((function(e){return{expanded:!e.expanded}}))},e.renderBurger=function(){return i.a.createElement("div",{onClick:e.toggleMenu,className:Object(p.b)(E.burgerIcon)},i.a.createElement(C,null))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.expanded,n=this.isMobile();return i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(u.Row,{className:Object(p.b)(E.mainContainer),breakpoints:{768:Object(p.b)(E.mainContainerMobile)}},n&&!t&&this.renderBurger(),i.a.createElement(u.Column,{className:Object(p.b)(E.container),breakpoints:{768:Object(p.b)(E.containerMobile,t?E.show:E.hide)}},i.a.createElement(g,null),i.a.createElement(u.Column,{className:Object(p.b)(E.menuItemList)},i.a.createElement(v,{title:"Cap\xedtulo 1",icon:w,onClick:function(){return e.props.onChange("Cap\xedtulo 1")},active:"Cap\xedtulo 1"===this.props.selectedItem}),i.a.createElement(v,{title:"Cap\xedtulo 2",icon:w,onClick:function(){return e.props.onChange("Cap\xedtulo 2")},active:"Cap\xedtulo 2"===this.props.selectedItem}),i.a.createElement("div",{className:Object(p.b)(E.separator)}),i.a.createElement(v,{title:"Configuraci\xf3n",icon:w,onClick:function(){return e.props.onChange("Configuraci\xf3n")},active:"Configuraci\xf3n"===this.props.selectedItem}))),n&&t&&i.a.createElement("div",{className:Object(p.b)(E.outsideLayer),onClick:this.toggleMenu})))}}]),n}(i.a.Component),O=p.a.create({container:{height:40},cursorPointer:{cursor:"pointer"},name:{fontFamily:"Muli",fontStyle:"normal",fontWeight:600,fontSize:14,lineHeight:"20px",textAlign:"right",letterSpacing:.2,"@media (max-width: 768px)":{display:"none"}},title:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:.3,"@media (max-width: 768px)":{marginLeft:36},"@media (max-width: 468px)":{fontSize:20}},iconStyles:{cursor:"pointer",marginLeft:25,"@media (max-width: 768px)":{marginLeft:12}}});var j=function(e){e.icon;var t=e.title,n=Object(b.a)(e,["icon","title"]);return i.a.createElement(u.Row,Object.assign({className:Object(p.b)(O.container),vertical:"center",horizontal:"space-between"},n),i.a.createElement("span",{className:Object(p.b)(O.title)},t),i.a.createElement(u.Row,{vertical:"center"},i.a.createElement(u.Row,{vertical:"center"},i.a.createElement("span",{className:Object(p.b)(O.name,O.cursorPointer)},"'Nombre de Usuario'"))))},y=(n(51),p.a.create({container:{height:"100vh"},content:{marginTop:54},mainBlock:{backgroundColor:"#F7F8FC",padding:30}})),k=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={selectedItem:"Cap\xedtulo 1"},e.resize=function(){return e.forceUpdate()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.state.selectedItem;return i.a.createElement(u.Row,{className:Object(p.b)(y.container)},i.a.createElement(x,{selectedItem:t,onChange:function(t){return e.setState({selectedItem:t})}}),i.a.createElement(u.Column,{flexGrow:1,className:Object(p.b)(y.mainBlock)},i.a.createElement(j,{title:t}),i.a.createElement("div",{className:Object(p.b)(y.content)},i.a.createElement("span",null,"Contenido"))))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d25549f3.chunk.js.map