!function(){function l(){k.slots=[];for(var a=document.querySelectorAll("[data-bsft-slot]"),b=0;b<a.length;b++)k.slots.push({name:a[b].dataset.bsftSlot,el:a[b]})}function m(a,b){b.tz=k.tz;var c={x:k.eventApiKey,slot:a,user:k.userParams,context:b};return"true"==q("dev")&&(c.dev=!0),JSON.stringify(c)}function n(){for(var b=[],c=0;c<k.slots.length;c++)!function(c){b[c]=z(),b[c].open("POST",a+"live",!0),b[c].setRequestHeader("Content-Type","application/json"),b[c].onreadystatechange=function(){if(4===b[c].readyState&&200==b[c].status){try{var a=JSON.parse(b[c].responseText)}catch(a){console.log("error loading slot",a)}a&&a.show&&o(k.slots[c].el,a.width,a.height,a.content)}},b[c].send(m(k.slots[c].name,k.slotParams[k.slots[c].name]||{}))}(c)}function o(a,b,c,d){var e=document.createElement("iframe");a.appendChild(e),e.src="javascript:''",e.style.width=b,e.style.height=c,e.style.border="none",e.contentWindow.document.open(),e.contentWindow.document.write(d),e.contentWindow.document.close(),a.style.width=b,a.style.height=c,a.style.display="block"}function p(a){l(),k.slotParams=a||{},n()}function q(a){var b=window.location.href;a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null}function r(a){for(var b=[];null!=a.parentNode;){for(var c=0,d=0,e=0;e<a.parentNode.childNodes.length;e++){var f=a.parentNode.childNodes[e];f.nodeName==a.nodeName&&(f===a&&(d=c),c++)}""!=a.id?b.unshift(a.nodeName.toLowerCase()+"#"+a.id):c>1?b.unshift(a.nodeName.toLowerCase()+"["+d+"]"):b.unshift(a.nodeName.toLowerCase()),a=a.parentNode}return b}function s(a,b){var c=document.getElementById(a);I(c,"change",function(){F({0:"icapture",1:b,2:document.getElementById(a).value})},!1)}function t(a){var b=new Image(1,1);b.src=a}function u(a){try{var b=C("_bs_fb_pushed");if(void 0!=b)return;request=c+"?x="+window._blueshiftid+"&k="+a;var d=z();d.open("GET",request,!0),d.onreadystatechange=function(){4==d.readyState&&200==d.status&&x(JSON.parse(d.responseText))},d.send(request)}catch(a){}}function w(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function x(a){return!!w(a)||(window._fbq=window._fbq||[],window._fbq.push(["track","user_attributes",a]),void B("_bs_fb_pushed","1",1))}function y(a){try{xhr=z(),xhr.open("GET",a,!0),xhr.send(a)}catch(a){}}function z(){if(window.XMLHttpRequest)try{var a=new XMLHttpRequest}catch(a){var a=new window.ActiveXObject("Microsoft.XMLHTTP")}return a}function A(){var a="";try{a=window.top.document.referrer}catch(b){if(window.parent)try{a=window.parent.document.referrer}catch(b){a=""}}return""===a&&(a=document.referrer),a}function B(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=window.location.hostname,f=e.split(".");4==f.length&&f[0]>=0&&f[0]<=255&&f[1]>=0&&f[1]<=255&&f[2]>=0&&f[2]<=255&&f[3]>=0&&f[3]<=255||(e="."+e.replace(/^www./,""));var g=escape(b)+(null==c?"":";expires="+d.toUTCString())+";path=/;domain="+e;document.cookie=a+"="+g}function C(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++)if(c=e[b].substr(0,e[b].indexOf("=")),d=e[b].substr(e[b].indexOf("=")+1),c=c.replace(/^\s+|\s+$/g,""),c==a)return unescape(d)}function D(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function E(a){var c=a[0],e=A(),i=Math.floor(1e6*Math.random()+1),j=Math.round(new Date/1e3),l=C("_bs");if(void 0==l&&(l=D(),B("_bs",l,365)),"identify"==c&&(k.userParams=a[1],k.userParams.cookie=l),"track"==c)c=a[1],a=a[2];else{if("capture"==c)return s(a[1],a[2]),!0;if("retarget"==c)return req=d+b+"?t="+j+"&e=appnexus&z="+i+"&x="+window._blueshiftid+"&k="+l+"&appnexus_id=$UID&u="+encodeURIComponent(encodeURIComponent(window.location.href))+"&r="+encodeURIComponent(encodeURIComponent(e)),t(req),!0;if("facebook"==c)return g=!0,!0;"icapture"==c?(c="capture",m=a[1],value=a[2],a={},a[m]=value):a=a[1]}req=b+"?t="+j+"&e="+c+"&r="+encodeURIComponent(e)+"&z="+i+"&x="+window._blueshiftid+"&k="+l+"&u="+encodeURIComponent(window.location.href);for(var m in a)v=a[m],"object"==typeof v?req+="&"+m+"_json="+encodeURIComponent(JSON.stringify(v)):req+="&"+m+"="+encodeURIComponent(v);return h?y(req):t(req),1==g&&"pageload"==c&&u(l),1==f&&"pageload"==c&&(req=d+b+"?t="+j+"&e=appnexus&z="+i+"&x="+window._blueshiftid+"&k="+l+"&appnexus_id=$UID&u="+encodeURIComponent(encodeURIComponent(window.location.href))+"&r="+encodeURIComponent(encodeURIComponent(e)),t(req)),1==g&&"pageload"==c&&u(l),!0}function F(a){if(e)switch(a[0]){case"live":p(a[1]);break;default:E(a)}else setTimeout(function(){F(a)},20)}function G(){e=!0,k.eventApiKey=_blueshiftid}var a=("https:"===document.location.protocol?"https:":"http:")+"//api.getblueshift.com/",b=a+"unity.gif",c=a+"cookiejar.json",d=("https:"===document.location.protocol?"https:":"http:")+"//ib.adnxs.com/getuid?",e=!1,f=!1,g=!1,h="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,k={eventApiKey:void 0,userParams:{},slots:[],slotParams:{},tz:(new Date).getTimezoneOffset()};if("object"==typeof blueshift){var H="undefined"==typeof blueshift.slice?[]:blueshift.slice(0);for(blueshift={events:[],load:function(){G()},capture:function(a,b){s(a,b)},retarget:function(){F(["retarget"])},facebook:function(){F(["facebook"])},track:function(a,b){F(["track",a,b])},pageload:function(a){F(["pageload",a])},identify:function(a){F(["identify",a])},live:function(a){F(["live",a])}},J=0;J<H.length;J++)blueshift.events.push(H[J])}if(document.addEventListener)var I=function(a,b,c){a.addEventListener(b,c,!1)};else var I=function(a,b,c){a.attachEvent("on"+b,c)};I(document,"click",function(a){a=a||window.event,element=a.target||a.srcElement,element.href&&F(["click",{p:r(element).toString(),c:element.href,a:element.innerHTML}])});for(var J=0;J<blueshift.events.length;J++)F(blueshift.events[J]);"complete"===document.readyState?G():window.addEventListener?window.addEventListener("load",G,!1):window.attachEvent?window.attachEvent("onload",G):G}();