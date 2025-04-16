!function(){var a,o=window.location,l=window.document,u=l.currentScript,s=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event",c=u.getAttribute("data-domain");function p(e,t,n){t&&console.warn("Ignoring Event: "+t),n&&n.callback&&n.callback(),"pageview"===e&&(a=!0)}var v=o.href,d={},f=-1,w=!1,h=null,m=0;function g(){var e=l.body||{},t=l.documentElement||{};return Math.max(e.scrollHeight||0,e.offsetHeight||0,e.clientHeight||0,t.scrollHeight||0,t.offsetHeight||0,t.clientHeight||0)}function b(){var e=l.body||{},t=l.documentElement||{},n=window.innerHeight||t.clientHeight||0,t=window.scrollY||t.scrollTop||e.scrollTop||0;return y<=n?y:t+n}function t(){return h?m+(Date.now()-h):m}var y=g(),L=b();function k(){var e=t();!a&&(f<L||3e3<=e)&&(f=L,e={n:"engagement",sd:Math.round(L/y*100),d:c,u:v,p:d,e:e,v:3},h=null,m=0,e.h=1,x(s,e))}function E(){"visible"===l.visibilityState&&l.hasFocus()&&null===h?h=Date.now():"hidden"!==l.visibilityState&&l.hasFocus()||(m=t(),h=null,k())}function e(e,t){var n="pageview"===e;if(n&&w&&(k(),y=g(),L=b()),/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p(e,"localhost",t);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return p(e,null,t);try{if("true"===window.localStorage.plausible_ignore)return p(e,"localStorage flag",t)}catch(e){}var i={},e=(i.n=e,i.v=3,i.u=o.href,i.d=c,i.r=l.referrer||null,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),t&&t.revenue&&(i.$=t.revenue),u.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)})),r=i.p||{};e.forEach(function(e){var t=e.replace("event-",""),e=u.getAttribute(e);r[t]=r[t]||e}),i.p=r,i.h=1,n&&(a=!1,v=i.u,d=i.p,f=-1,m=0,h=Date.now(),w||(l.addEventListener("visibilitychange",E),window.addEventListener("blur",E),window.addEventListener("focus",E),w=!0)),x(s,i,t)}function x(e,t,n){window.fetch&&fetch(e,{method:"POST",headers:{"Content-Type":"text/plain"},keepalive:!0,body:JSON.stringify(t)}).then(function(e){n&&n.callback&&n.callback({status:e.status})}).catch(function(){})}window.addEventListener("load",function(){y=g();var e=0,t=setInterval(function(){y=g(),15==++e&&clearInterval(t)},200)}),l.addEventListener("scroll",function(){y=g();var e=b();L<e&&(L=e)});var n=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,r=0;r<n.length;r++)e.apply(this,n[r]);function N(){i=o.pathname,e("pageview")}function S(e){return e&&e.tagName&&"a"===e.tagName.toLowerCase()}window.addEventListener("hashchange",function(){N()}),"prerender"===l.visibilityState?l.addEventListener("visibilitychange",function(){i||"visible"!==l.visibilityState||N()}):N(),window.addEventListener("pageshow",function(e){e.persisted&&N()});var H=1;function _(e){if("auxclick"!==e.type||e.button===H){var t,n,i=(e=>{for(;e&&(void 0===e.tagName||!S(e)||!e.href);)e=e.parentNode;return e})(e.target),r=i&&i.href&&i.href.split("?")[0];if(!function e(t,n){if(!t||O<n)return!1;if(z(t))return!0;return e(t.parentNode,n+1)}(i,0))return(t=i)&&t.href&&t.host&&t.host!==o.host?A(e,i,{name:"Outbound Link: Click",props:{url:i.href}}):(t=r)&&(n=t.split(".").pop(),F.some(function(e){return e===n}))?A(e,i,{name:"File Download",props:{url:r}}):void 0}}function A(e,t,n){var i,r=!1;function a(){r||(r=!0,window.location=t.href)}((e,t)=>!e.defaultPrevented&&(t=!t.target||t.target.match(/^_(self|parent|top)$/i),e=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type,t)&&e)(e,t)?((i={props:n.props,callback:a}).revenue=n.revenue,plausible(n.name,i),setTimeout(a,5e3),e.preventDefault()):((i={props:n.props}).revenue=n.revenue,plausible(n.name,i))}l.addEventListener("click",_),l.addEventListener("auxclick",_);var C=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma","dmg"],D=u.getAttribute("file-types"),T=u.getAttribute("add-file-types"),F=D&&D.split(",")||T&&T.split(",").concat(C)||C;function $(e){var e=z(e)?e:e&&e.parentNode,t={name:null,props:{},revenue:{}},n=e&&e.classList;if(n)for(var i=0;i<n.length;i++){var r,a,o=n.item(i),l=o.match(/plausible-event-(.+)(=|--)(.+)/),l=(l&&(r=l[1],a=l[3].replace(/\+/g," "),"name"==r.toLowerCase()?t.name=a:t.props[r]=a),o.match(/plausible-revenue-(.+)(=|--)(.+)/));l&&(r=l[1],a=l[3],t.revenue[r]=a)}return t}var O=3;function I(e){if("auxclick"!==e.type||e.button===H){for(var t,n,i,r,a=e.target,o=0;o<=O&&a;o++){if((i=a)&&i.tagName&&"form"===i.tagName.toLowerCase())return;S(a)&&(t=a),z(a)&&(n=a),a=a.parentNode}n&&(r=$(n),t?(r.props.url=t.href,A(e,t,r)):((e={}).props=r.props,e.revenue=r.revenue,plausible(r.name,e)))}}function z(e){var t=e&&e.classList;if(t)for(var n=0;n<t.length;n++)if(t.item(n).match(/plausible-event-name(=|--)(.+)/))return!0;return!1}l.addEventListener("submit",function(e){var t,n=e.target,i=$(n);function r(){t||(t=!0,n.submit())}i.name&&(e.preventDefault(),t=!1,setTimeout(r,5e3),(e={props:i.props,callback:r}).revenue=i.revenue,plausible(i.name,e))}),l.addEventListener("click",I),l.addEventListener("auxclick",I)}();