(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{918:function(e,a,t){"use strict";var n=t(18),r=t(34),o=t(2),s=t.n(o),c=t(0),l=t.n(c),u=t(5),i=t.n(u),d=t(896),f={tag:d.l,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(d.h)(i()(a,o?"no-gutters":null,l?"form-row":"row"),t);return s.a.createElement(c,Object(n.a)({},u,{className:f}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},920:function(e,a,t){"use strict";var n=t(18),r=t(34),o=t(2),s=t.n(o),c=t(0),l=t.n(c),u=t(5),i=t.n(u),d=t(896),f={tag:d.l,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.h)(i()(a,"card-body"),t);return s.a.createElement(c,Object(n.a)({},l,{className:u,ref:o}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},921:function(e,a,t){"use strict";var n=t(18),r=t(34),o=t(2),s=t.n(o),c=t(0),l=t.n(c),u=t(5),i=t.n(u),d=t(896),f={tag:d.l,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,l=e.inverse,u=e.outline,f=e.tag,b=e.innerRef,m=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.h)(i()(a,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(u?"border":"bg")+"-"+o),t);return s.a.createElement(f,Object(n.a)({},m,{className:p,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},951:function(e,a,t){e.exports={card:"News_card__2C1pm",vote:"News_vote__zjHon",root:"News_root__1IZLY"}},958:function(e,a,t){"use strict";t.r(a);var n=t(898),r=t(2),o=t.n(r),s=t(5),c=t.n(s),l=t(918),u=t(921),i=t(920),d=t(900),f=t(951),b=t.n(f);a.default=function(e){e.history;var a=e.member,t=Object(r.useState)([]),s=Object(n.a)(t,2),f=s[0],m=s[1];return Object(r.useEffect)(function(){Object(d.b)(a.id).then(m)},[a]),o.a.createElement("div",{className:c()("animated fadeIn",b.a.root)},f.map(function(e){return o.a.createElement(l.a,null,o.a.createElement(u.a,{className:b.a.card},o.a.createElement(i.a,{className:c()(b.a.vote)},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("h4",null,e.title)),o.a.createElement("div",null,e.source," ",e.date))))}))}}}]);
//# sourceMappingURL=10.45f13bcd.chunk.js.map