(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{3911:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(5675),o=r(7294),i=[{before:"/img/skin_resurfacing_before.jpg",before_desc:"Baseline",after:"/img/skin_resurfacing_after.jpg",after_desc:"After 1 treatment"},{before:"/img/acne_before.jpg",before_desc:"Baseline",after:"/img/acne_after.jpg",after_desc:"After 5 treatment"},{before:"/img/tattoo_wing_before.jpg",before_desc:"Baseline",after:"/img/tattoo_wing_after.jpg",after_desc:"After 9 treatment"},{before:"/img/vascular_lesions_before.jpg",before_desc:"Baseline",after:"/img/vascular_lesions_after.jpg",after_desc:"After 9 treatment"}],s=function(e){var t=e.set,r=e.current,a=e.count;return(0,n.jsx)("nav",{className:"flex items-center justify-center","aria-label":"Progress",children:(0,n.jsx)("ol",{role:"list",className:"flex items-center space-x-5",children:Array.from({length:a}).map((function(e,a){return(0,n.jsx)("li",{children:a===r?(0,n.jsxs)("div",{onClick:function(){return t(a)},className:"relative flex items-center justify-center cursor-pointer","aria-current":"step",children:[(0,n.jsx)("span",{className:"absolute w-5 h-5 p-px flex","aria-hidden":"true",children:(0,n.jsx)("span",{className:"w-full h-full rounded-full bg-indigo-200"})}),(0,n.jsx)("span",{className:"relative block w-2.5 h-2.5 bg-indigo-700 rounded-full","aria-hidden":"true"}),(0,n.jsx)("span",{className:"sr-only",children:a})]}):(0,n.jsx)("div",{onClick:function(){return t(a)},className:"block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400 cursor-pointer",children:(0,n.jsx)("span",{className:"sr-only",children:a})})},a)}))})})};function l(){var e=(0,o.useState)(0),t=e[0],r=e[1],l=(0,o.useMemo)((function(){return i[t]}),[i,t]),u=(0,o.useCallback)((function(e){e<=i.length&&r(e)}),[i]);return(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsx)("div",{className:"max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8",children:(0,n.jsxs)("section",{"aria-labelledby":"details-heading",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,n.jsx)("h2",{id:"details-heading",className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Before / After"}),(0,n.jsx)("p",{className:"mt-3 max-w-3xl text-lg text-gray-600",children:"A few examples on how Undo Skincare Center can help you!"})]}),(0,n.jsxs)("div",{className:"mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden",children:(0,n.jsx)(a.default,{src:l.before,alt:"",className:"w-full h-full object-center object-cover",layout:"fill"})}),(0,n.jsx)("p",{className:"text-center text-base text-gray-500",children:l.before_desc})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden",children:(0,n.jsx)(a.default,{src:l.after,alt:"",className:"w-full h-full object-center object-cover",layout:"fill"})}),(0,n.jsx)("p",{className:"text-center text-base text-gray-500",children:l.after_desc})]})]}),(0,n.jsx)(s,{set:u,current:t,count:i.length})]})})})}},528:function(e,t,r){"use strict";var n=r(5893),a=r(7294),o=r(3751),i=r(1664),s=r(5675),l=r(5685),u=r(7804),c=r(5926),f=["Body Sculpting","Skin Rejuvenation","Skincare Products","Tattoo Removal","Aesthetic Treatments","Acne Treatments","RF Body Contouring"];function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}t.Z=function(e){var t=e.src,r=void 0===t?"/img/flowers.jpg":t,m=e.reversed,p=void 0!==m&&m,x=(0,a.useState)(0),v=x[0],g=x[1],h=(0,a.useState)(!1),y=h[0],b=h[1],j=(0,o.useStopwatch)({autoStart:!0}),w=j.seconds,T=j.reset,S=(0,a.useCallback)((function(){g(v>=f.length-1?0:v+1),b(!1),T()}));return(0,a.useEffect)((function(){w>=3&&!y&&b(!0)}),[w]),(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)("div",{className:"bg-gray-600 pt-24 lg:pt-24 lg:pb-20",children:[(0,n.jsxs)("div",{className:"absolute top-0 h-full w-full overflow-hidden",children:[(0,n.jsx)("div",{className:"relative w-full h-full bg-gray-600/10 bg-gradient-to-b from-gray-600/30 via-gray-400/10 to-gray-400 z-10"}),(0,n.jsx)("div",{className:"h-full w-full absolute top-0",children:(0,n.jsx)("div",{className:"relative w-full h-full",children:(0,n.jsx)(s.default,{src:r,className:d("h-full w-full",p&&"-scale-x-100"),layout:"fill",alt:"Hero",objectFit:"cover",priority:!0})})})]}),(0,n.jsx)("div",{className:"mx-auto max-w-7xl mt-14 md:mt-0",children:(0,n.jsx)("div",{className:"lg:grid lg:px-8 flex lg:justify-start",children:(0,n.jsx)("div",{className:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10",children:(0,n.jsxs)("div",{className:"lg:py-24",children:[(0,n.jsx)(i.default,{href:"/services",passHref:!0,children:(0,n.jsxs)("a",{className:"inline-flex items-center text-white bg-gray-600/75 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",children:[(0,n.jsx)("span",{className:"px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full",children:"What's new?"}),(0,n.jsx)("span",{className:"ml-4 text-sm",children:"Visit our services page"}),(0,n.jsx)(u.XCv,{className:"ml-2 w-5 h-5 text-gray-500","aria-hidden":"true"})]})}),(0,n.jsxs)("h1",{className:"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl drop-shadow-2xl",children:[(0,n.jsx)("span",{className:"block drop-shadow-xl",children:"We are the experts in"}),f.map((function(e,t){return(0,n.jsx)(l.u,{show:t===v&&!y,enter:"transition-opacity duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:function(){return S()},children:(0,n.jsx)("span",{className:"pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600 sm:pb-5 drop-shadow-xl",children:e})},t)}))]}),(0,n.jsx)("p",{className:"text-white text-lg sm:text-2xl font-bold hidden md:block drop-shadow-xl",children:"At Undo Skincare Center we want you to look and feel your best.  Our team of experts in skincare, tattoo removal and med spa services are here to provide your customized treatment plan"}),(0,n.jsx)("p",{className:"text-white text-lg sm:text-2xl font-bold block md:hidden drop-shadow-xl",children:"At Undo Skincare Center we want you to look and feel your best."}),(0,n.jsx)("div",{className:"mt-10 sm:mt-12",children:(0,n.jsx)("form",{action:"#",className:"sm:max-w-xl sm:mx-auto lg:mx-0",children:(0,n.jsxs)("div",{className:"sm:flex",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)(c.Z,{})}),(0,n.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,n.jsx)(i.default,{href:"/services",passHref:!0,children:(0,n.jsx)("a",{className:"backdrop-blur-lg text-center bg-transparent block w-full px-8 py-3 md:py-4 md:text-lg md:px-10 rounded-md shadow text-indigo-600 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900 border-2 border-indigo-500 hover:border-transparent",children:"Learn more"})})})]})})})]})})})})]})})}},3751:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(7294),function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Validate=t.Time=void 0;var n=o(r(5)),a=o(r(6));function o(e){return e&&e.__esModule?e:{default:e}}t.Time=n.default,t.Validate=a.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7));t.useInterval=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTime=t.useStopwatch=t.useTimer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){if((0,a.useEffect)((function(){console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")}),[]),e.expiryTimestamp){var t=(0,o.default)(e);return n({},t,{startTimer:t.start,stopTimer:t.pause,resetTimer:function(){}})}var r=(0,i.default)(e);return n({},r,{startTimer:r.start,stopTimer:r.pause,resetTimer:r.reset})};var a=r(0),o=l(r(4)),i=l(r(8)),s=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}t.useTimer=o.default,t.useStopwatch=i.default,t.useTime=s.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.expiryTimestamp,r=e.onExpire,c=e.autoStart,f=void 0===c||c,d=(0,o.useState)(t),m=a(d,2),p=m[0],x=m[1],v=(0,o.useState)(i.Time.getSecondsFromExpiry(p)),g=a(v,2),h=g[0],y=g[1],b=(0,o.useState)(f),j=a(b,2),w=j[0],T=j[1],S=(0,o.useState)(f),_=a(S,2),N=_[0],k=_[1],O=(0,o.useState)(u(p)),F=a(O,2),M=F[0],P=F[1];function E(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];P(u(e)),k(t),T(t),x(e),y(i.Time.getSecondsFromExpiry(e))}function A(){var e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*h),E(e)}return(0,s.useInterval)((function(){M!==l&&P(l);var e=i.Time.getSecondsFromExpiry(p);y(e),e<=0&&(i.Validate.onExpire(r)&&r(),T(!1),P(null))}),w?M:null),n({},i.Time.getTimeFromSeconds(h),{start:function(){N?(y(i.Time.getSecondsFromExpiry(p)),T(!0)):A()},pause:function(){T(!1)},resume:A,restart:E,isRunning:w})};var o=r(0),i=r(1),s=r(2),l=1e3;function u(e){if(!i.Validate.expiryTimestamp(e))return null;var t=i.Time.getSecondsFromExpiry(e),r=Math.floor(1e3*(t-Math.floor(t)));return r>0?r:l}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"getTimeFromSeconds",value:function(e){var t=Math.ceil(e),r=Math.floor(t/86400),n=Math.floor(t%86400/3600),a=Math.floor(t%3600/60);return{seconds:Math.floor(t%60),minutes:a,hours:n,days:r}}},{key:"getSecondsFromExpiry",value:function(e,t){var r=e-(new Date).getTime();if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromPrevTime",value:function(e,t){var r=(new Date).getTime()-e;if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromTimeNow",value:function(){var e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}},{key:"getFormattedTimeFromSeconds",value:function(t,r){var n=e.getTimeFromSeconds(t),a=n.seconds,o=n.minutes,i=n.hours,s="",l=i;return"12-hour"===r&&(s=i>=12?"pm":"am",l=i%12),{seconds:a,minutes:o,hours:l,ampm:s}}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"expiryTimestamp",value:function(e){var t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}},{key:"onExpire",value:function(e){var t=e&&"function"==typeof e;return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}]),e}();t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.useRef)();(0,n.useEffect)((function(){r.current=e})),(0,n.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){r.current&&r.current()}),t);return function(){return clearInterval(e)}}),[t])};var n=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.autoStart,r=e.offsetTimestamp,l=(0,o.useState)(i.Time.getSecondsFromExpiry(r,!0)||0),u=a(l,2),c=u[0],f=u[1],d=(0,o.useState)(new Date),m=a(d,2),p=m[0],x=m[1],v=(0,o.useState)(c+i.Time.getSecondsFromPrevTime(p||0,!0)),g=a(v,2),h=g[0],y=g[1],b=(0,o.useState)(t),j=a(b,2),w=j[0],T=j[1];return(0,s.useInterval)((function(){y(c+i.Time.getSecondsFromPrevTime(p,!0))}),w?1e3:null),n({},i.Time.getTimeFromSeconds(h),{start:function(){var e=new Date;x(e),T(!0),y(c+i.Time.getSecondsFromPrevTime(e,!0))},pause:function(){f(h),T(!1)},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=i.Time.getSecondsFromExpiry(e,!0)||0,n=new Date;x(n),f(r),T(t),y(r+i.Time.getSecondsFromPrevTime(n,!0))},isRunning:w})};var o=r(0),i=r(1),s=r(2)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.format,r=(0,o.useState)(i.Time.getSecondsFromTimeNow()),l=a(r,2),u=l[0],c=l[1];return(0,s.useInterval)((function(){c(i.Time.getSecondsFromTimeNow())}),1e3),n({},i.Time.getFormattedTimeFromSeconds(u,t))};var o=r(0),i=r(1),s=r(2)}]))}}]);