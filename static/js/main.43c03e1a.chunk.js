(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={wrapper:"Display_wrapper__2RSdU",app:"Display_app__1tihj",display:"Display_display__2i0BY",display_count_red:"Display_display_count_red__4GqtD",wrapper_input:"Display_wrapper_input__1a81D",input:"Display_input__3Mhwe",input_incorrect:"Display_input_incorrect__2CjmF"}},,function(e,t,a){e.exports={counter_wrapper:"Button_counter_wrapper__3p3qP",btn:"Button_btn__3CgDu",settings_wrapper:"Button_settings_wrapper__3-gnV"}},function(e,t,a){e.exports={wrapper:"NumberCount_wrapper__1N5Tl",number:"NumberCount_number__3naVe",number_red:"NumberCount_number_red__2MuG6",incorrect:"NumberCount_incorrect__rs1wy",correct:"NumberCount_correct__1_Ob8"}},,function(e,t,a){e.exports={app_wrapper:"App_app_wrapper__12Ayt"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(8),r=a.n(s),n=(a(13),a(3)),l=a(7),i=a.n(l),u=a(4),p=a.n(u),b=a(0),o=function(e){var t=e.descr,a=e.callback,s=e.count,r=e.maxValue,l=e.incorrectClass,i=e.startValue,u=e.disableSet,o=Object(c.useState)(""),j=Object(n.a)(o,2),_=j[0],d=j[1];Object(c.useEffect)((function(){"inc"===t&&d(_="inc"),"reset"===t&&d(_="reset"),"set"===t&&d(_="set")}),[]);return Object(b.jsx)("div",{className:p.a.btn_wrapper,children:Object(b.jsx)("button",{onClick:function(){"inc"===_&&a("inc"),"reset"===_&&a("reset"),"set"===_&&a("set")},className:p.a.btn,disabled:!("inc"!==_||u&&s!==r&&!l)||!("reset"!==_||!(s<=i||!u||l))||!!("set"===_&&u||l),children:_})})},j=a(2),_=a.n(j),d=a(5),x=a.n(d),m=function(e){var t=e.count,a=e.maxValue,c=e.text,s=e.incorrectClass,r=e.disable,n="enter values and press 'set'"!==c||r?s:c,l="enter values and press 'set'"===c?x.a.correct:x.a.incorrect;return Object(b.jsx)("div",{className:x.a.wrapper,children:n?Object(b.jsx)("span",{className:l,children:c}):Object(b.jsx)("span",{className:t===a?x.a.number_red:x.a.number,children:t})})},O=function(e){var t=e.count,a=e.descrReset,c=e.descrInc,s=e.callback,r=e.titleMax,n=e.incorrectClass,l=e.titleStart,i=e.text,u=e.disable;return Object(b.jsx)("div",{className:_.a.app_wrapper,children:Object(b.jsxs)("div",{className:_.a.app,children:[Object(b.jsx)("div",{className:_.a.display,children:Object(b.jsx)(m,{count:t,maxValue:r,incorrectClass:n,text:i,disable:u})}),Object(b.jsxs)("div",{className:p.a.counter_wrapper,children:[Object(b.jsx)(o,{descr:c,callback:s,count:t,maxValue:r,incorrectClass:n,startValue:l,text:i,disableSet:u}),Object(b.jsx)(o,{descr:a,callback:s,count:t,maxValue:r,incorrectClass:n,startValue:l,text:i,disableSet:u})]})]})})},v=function(e){var t=e.descrSet,a=e.callback,s=e.titleStart,r=e.titleMax,l=e.callbackInputValueStart,i=e.callbackInputValueMax,u=e.count,j=e.incorrectClass,d=e.text,x=e.disable,m=e.setDisable,O=e.setCount,v=Object(c.useState)(0),f=Object(n.a)(v,2),N=f[0],S=f[1],h=Object(c.useState)(0),w=Object(n.a)(h,2),C=w[0],g=w[1];Object(c.useEffect)((function(){var e=localStorage.getItem("maxValue");if(e){var t=JSON.parse(e);S(t)}var a=localStorage.getItem("startValue");if(a){var c=JSON.parse(a);g(c)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(N)),localStorage.setItem("startValue",JSON.stringify(C))}),[N,C]);i(N);l(C);var y=j?_.a.input_incorrect:_.a.input;return Object(b.jsx)("div",{className:_.a.wrapper,children:Object(b.jsxs)("div",{className:_.a.app,children:[Object(b.jsxs)("div",{className:_.a.display,children:[Object(b.jsxs)("div",{className:_.a.wrapper_input,children:[Object(b.jsx)("span",{className:_.a.text,children:"max value"}),Object(b.jsx)("input",{className:y,onChange:function(e){S(+e.currentTarget.value),O(-1),m(!1)},type:"number",step:"1",value:r})]}),Object(b.jsxs)("div",{className:_.a.wrapper_input,children:[Object(b.jsx)("span",{className:_.a.text,children:"start value"}),Object(b.jsx)("input",{className:y,onChange:function(e){g(+e.currentTarget.value),O(-1),m(!1)},type:"number",step:"1",value:s})]})]}),Object(b.jsx)("div",{className:p.a.settings_wrapper,children:Object(b.jsx)(o,{descr:t,callback:a,count:u,maxValue:r,incorrectClass:j,startValue:s,text:d,disableSet:x})})]})})},f=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(0),l=Object(n.a)(r,2),u=l[0],p=l[1],o=Object(c.useState)(0),j=Object(n.a)(o,2),_=j[0],d=j[1],x=Object(c.useState)(""),m=Object(n.a)(x,2),f=m[0],N=m[1],S=Object(c.useState)(!1),h=Object(n.a)(S,2),w=h[0],C=h[1],g=_<0||u<0||_>=u,y=function(){g&&N("Incorrect value!"),w||g||N("enter values and press 'set'")};var V=function(e){y(),"inc"===e&&(y(),a<u&&s(a+1)),"reset"===e&&(y(),s(a=_)),"set"===e&&(y(),C(!0),s(_))};return Object(b.jsxs)("div",{className:i.a.app_wrapper,children:[Object(b.jsx)(v,{count:a,descrSet:"set",callback:V,titleMax:u,titleStart:_,callbackInputValueStart:function(e){y(),d(e)},callbackInputValueMax:function(e){y(),p(e)},incorrectClass:g,text:f,disable:w,setDisable:C,setText:N,setCount:s}),Object(b.jsx)(O,{count:a,callback:V,descrInc:"inc",descrReset:"reset",titleMax:u,titleStart:_,incorrectClass:g,text:f,disable:w})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};r.a.render(Object(b.jsx)(f,{}),document.getElementById("root")),N()}],[[15,1,2]]]);
//# sourceMappingURL=main.43c03e1a.chunk.js.map