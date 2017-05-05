/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=parseInt(e,10),h=parseInt(f,10),i=this.layout.size;g=-1!=e.indexOf("%")?g/100*i.width:g,h=-1!=f.indexOf("%")?h/100*i.height:h,g=isNaN(g)?0:g,h=isNaN(h)?0:h,g-=c?i.paddingLeft:i.paddingRight,h-=d?i.paddingTop:i.paddingBottom,this.position.x=g,this.position.y=h},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,a=this.getXValue(a),b=this.getYValue(b),n?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
/*
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                      .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Inview Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var o=t[this.axis][e];this.createWaypoint(o)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({element:this.options.element,handler:function(t){return function(i){e.options[t[i]].call(this,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.defaults={enter:t,entered:t,exit:t,exited:t},i.Inview=e}();
/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else { 
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else { 
                  if (slider.vars.initDelay > 0) { 
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  } 
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);

/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */

!function($){
  
  var defaults = {
		animation: "dissolve",
		separator: ",",
		speed: 2000
	};
	
	$.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
	
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];
      $.each(el.text().split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      el.text(array[0]);
      
      // animation option
      var rotate = function() {
        switch (settings.animation) { 
          case 'dissolve':
            el.animate({
              textShadowBlur:20,
              opacity: 0
            }, 500 , function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1
              el.text(array[index + 1]).animate({
                textShadowBlur:0,
                opacity: 1
              }, 500 );
            });
          break;
          
          case 'flip':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.text()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
              "-webkit-transform": " rotateY(-180deg)",
              "-moz-transform": " rotateY(-180deg)",
              "-o-transform": " rotateY(-180deg)",
              "transform": " rotateY(-180deg)"
            })
            
          break;
          
          case 'flipUp':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.text()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
              "-webkit-transform": " rotateX(-180deg)",
              "-moz-transform": " rotateX(-180deg)",
              "-o-transform": " rotateX(-180deg)",
              "transform": " rotateX(-180deg)"
            })
            
          break;
          
          case 'flipCube':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.text()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
              "-webkit-transform": " rotateY(180deg)",
              "-moz-transform": " rotateY(180deg)",
              "-o-transform": " rotateY(180deg)",
              "transform": " rotateY(180deg)"
            })
            
          break;
          
          case 'flipCubeUp':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.text()
            var index = $.inArray(initial, array)
            if((index + 1) == array.length) index = -1
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
              "-webkit-transform": " rotateX(180deg)",
              "-moz-transform": " rotateX(180deg)",
              "-o-transform": " rotateX(180deg)",
              "transform": " rotateX(180deg)"
            })
            
          break;
          
          case 'spin':
            if(el.find(".rotating").length > 0) {
              el.html(el.find(".rotating").html())
            }
            index = $.inArray(el.text(), array)
            if((index + 1) == array.length) index = -1
            
            el.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(array[index + 1]).show().css({
              "-webkit-transform": " rotate(0) scale(1)",
              "-moz-transform": "rotate(0) scale(1)",
              "-o-transform": "rotate(0) scale(1)",
              "transform": "rotate(0) scale(1)"
            })
          break;
          
          case 'fade':
            el.fadeOut(settings.speed, function() {
              index = $.inArray(el.text(), array)
              if((index + 1) == array.length) index = -1
              el.text(array[index + 1]).fadeIn(settings.speed);
            });
          break;
        }
      };
      setInterval(rotate, settings.speed);
    });
  }
  
}(window.jQuery);



/*! Magnific Popup - v1.0.0 - 2014-12-12
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_body,
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
		mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
		mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		if(!_body) {
			_body = $(document.body);
		}

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || _body );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;	

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });
		
		mfp.currItem = item;

		

		

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}
		
		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;
		
		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;
		
		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},



	
	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		} 

		var eName = 'click.magnificPopup';
		options.mainEl = el;
		
		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}
		
		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}
			

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();	

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}
			

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);			
		this.modules.push(name);
	},

	defaults: {   

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
		
		disableOn: 0,	

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened
		
		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true, 

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,
	
		removalDelay: 0,

		prependTo: null,
		
		fixedContentPos: 'auto', 
	
		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...'

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);
		
		/*
		 * As Zepto doesn't support .data() method for objects 
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};


//Quick benchmark
/*
var start = performance.now(),
	i,
	rounds = 1000;

for(i = 0; i < rounds; i++) {

}
console.log('Test #1:', performance.now() - start);

start = performance.now();
for(i = 0; i < rounds; i++) {

}
console.log('Test #2:', performance.now() - start);
*/


/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder, 
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur)
				_body.addClass(_ajaxCur);

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});





	

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined) 
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title', 
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					_body.addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					_body.removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {
				
				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}
				
				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');
					
					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');
							
							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
							
						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {										
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			} 

			return template;
		}
	}
});



/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;		
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;
				
			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it
					
					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image); 
					
					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images 

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}
					
					
					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');
					
					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}	
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*
			
			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',
	
	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) { 
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com', 
				id: 'v=', 
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					} 
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;
				
			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});
			
			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery',
				supportsFastClick = Boolean($.fn.mfpFastClick);

			mfp.direction = true; // true - next, false - prev
			
			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					var eName = supportsFastClick ? 'mfpFastClick' : 'click';
					arrowLeft[eName](function() {
						mfp.prev();
					});			
					arrowRight[eName](function() {
						mfp.next();
					});	

					// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
					if(mfp.isIE7) {
						_getEl('b', arrowLeft[0], false, true);
						_getEl('a', arrowLeft[0], false, true);
						_getEl('b', arrowRight[0], false, true);
						_getEl('a', arrowRight[0], false, true);
					}

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);		
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
			
				if(mfp.arrowLeft && supportsFastClick) {
					mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
				}
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		}, 
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*
Touch Support that might be implemented some day

addSwipeGesture: function() {
	var startX,
		moved,
		multipleTouches;

		return;

	var namespace = '.mfp',
		addEventNames = function(pref, down, move, up, cancel) {
			mfp._tStart = pref + down + namespace;
			mfp._tMove = pref + move + namespace;
			mfp._tEnd = pref + up + namespace;
			mfp._tCancel = pref + cancel + namespace;
		};

	if(window.navigator.msPointerEnabled) {
		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
	} else if('ontouchstart' in window) {
		addEventNames('touch', 'start', 'move', 'end', 'cancel');
	} else {
		return;
	}
	_window.on(mfp._tStart, function(e) {
		var oE = e.originalEvent;
		multipleTouches = moved = false;
		startX = oE.pageX || oE.changedTouches[0].pageX;
	}).on(mfp._tMove, function(e) {
		if(e.originalEvent.touches.length > 1) {
			multipleTouches = e.originalEvent.touches.length;
		} else {
			//e.preventDefault();
			moved = true;
		}
	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
		if(moved && !multipleTouches) {
			var oE = e.originalEvent,
				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

			if(diff > 20) {
				mfp.next();
			} else if(diff < -20) {
				mfp.prev();
			}
		}
	});
},
*/


/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/

/*>>fastclick*/
/**
 * FastClick event implementation. (removes 300ms delay on touch devices)
 * Based on https://developers.google.com/mobile/articles/fast_buttons
 *
 * You may use it outside the Magnific Popup by calling just:
 *
 * $('.your-el').mfpFastClick(function() {
 *     console.log('Clicked!');
 * });
 *
 * To unbind:
 * $('.your-el').destroyMfpFastClick();
 * 
 * 
 * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
 * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
 * 
 */

(function() {
	var ghostClickDelay = 1000,
		supportsTouch = 'ontouchstart' in window,
		unbindTouchMove = function() {
			_window.off('touchmove'+ns+' touchend'+ns);
		},
		eName = 'mfpFastClick',
		ns = '.'+eName;


	// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
	$.fn.mfpFastClick = function(callback) {

		return $(this).each(function() {

			var elem = $(this),
				lock;

			if( supportsTouch ) {

				var timeout,
					startX,
					startY,
					pointerMoved,
					point,
					numPointers;

				elem.on('touchstart' + ns, function(e) {
					pointerMoved = false;
					numPointers = 1;

					point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
					startX = point.clientX;
					startY = point.clientY;

					_window.on('touchmove'+ns, function(e) {
						point = e.originalEvent ? e.originalEvent.touches : e.touches;
						numPointers = point.length;
						point = point[0];
						if (Math.abs(point.clientX - startX) > 10 ||
							Math.abs(point.clientY - startY) > 10) {
							pointerMoved = true;
							unbindTouchMove();
						}
					}).on('touchend'+ns, function(e) {
						unbindTouchMove();
						if(pointerMoved || numPointers > 1) {
							return;
						}
						lock = true;
						e.preventDefault();
						clearTimeout(timeout);
						timeout = setTimeout(function() {
							lock = false;
						}, ghostClickDelay);
						callback();
					});
				});

			}

			elem.on('click' + ns, function() {
				if(!lock) {
					callback();
				}
			});
		});
	};

	$.fn.destroyMfpFastClick = function() {
		$(this).off('touchstart' + ns + ' click' + ns);
		if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
	};
})();

/*>>fastclick*/
 _checkInstance(); }));
/*
* jquery-match-height 0.7.0 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),n=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-a))<=o?r[r.length-1]=s.add(e):r.push(e),n=a}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.0",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=i,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block");var a={
display:i};a[s.property]="",e.css(a),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,a){if(a&&"resize"===a.type){var n=t(window).width();if(n===e)return;e=n;
}i?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlc2xvYWRlZC5wa2dkLm1pbi5qcyIsImlzb3RvcGUucGtnZC5taW4uanMiLCJvd2wuY2Fyb3VzZWwuanMiLCJqcXVlcnkud2F5cG9pbnRzLm1pbi5qcyIsImludmlldy5taW4uanMiLCJqcXVlcnkuZmxleHNsaWRlci5qcyIsImpxdWVyeS5zaW1wbGUtdGV4dC1yb3RhdG9yLmpzIiwianF1ZXJ5Lm1hZ25pZmljLXBvcHVwLmpzIiwianF1ZXJ5Lm1hdGNoSGVpZ2h0LW1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3YrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdnFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdnRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBsdWdpbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogaW1hZ2VzTG9hZGVkIFBBQ0tBR0VEIHYzLjEuOFxyXG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxyXG4gKiBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9ZnVuY3Rpb24gdChlLHQpe2Zvcih2YXIgbj1lLmxlbmd0aDtuLS07KWlmKGVbbl0ubGlzdGVuZXI9PT10KXJldHVybiBuO3JldHVybi0xfWZ1bmN0aW9uIG4oZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbZV0uYXBwbHkodGhpcyxhcmd1bWVudHMpfX12YXIgaT1lLnByb3RvdHlwZSxyPXRoaXMsbz1yLkV2ZW50RW1pdHRlcjtpLmdldExpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgdCxuLGk9dGhpcy5fZ2V0RXZlbnRzKCk7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe3Q9e307Zm9yKG4gaW4gaSlpLmhhc093blByb3BlcnR5KG4pJiZlLnRlc3QobikmJih0W25dPWlbbl0pfWVsc2UgdD1pW2VdfHwoaVtlXT1bXSk7cmV0dXJuIHR9LGkuZmxhdHRlbkxpc3RlbmVycz1mdW5jdGlvbihlKXt2YXIgdCxuPVtdO2Zvcih0PTA7ZS5sZW5ndGg+dDt0Kz0xKW4ucHVzaChlW3RdLmxpc3RlbmVyKTtyZXR1cm4gbn0saS5nZXRMaXN0ZW5lcnNBc09iamVjdD1mdW5jdGlvbihlKXt2YXIgdCxuPXRoaXMuZ2V0TGlzdGVuZXJzKGUpO3JldHVybiBuIGluc3RhbmNlb2YgQXJyYXkmJih0PXt9LHRbZV09biksdHx8bn0saS5hZGRMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3ZhciBpLHI9dGhpcy5nZXRMaXN0ZW5lcnNBc09iamVjdChlKSxvPVwib2JqZWN0XCI9PXR5cGVvZiBuO2ZvcihpIGluIHIpci5oYXNPd25Qcm9wZXJ0eShpKSYmLTE9PT10KHJbaV0sbikmJnJbaV0ucHVzaChvP246e2xpc3RlbmVyOm4sb25jZTohMX0pO3JldHVybiB0aGlzfSxpLm9uPW4oXCJhZGRMaXN0ZW5lclwiKSxpLmFkZE9uY2VMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmFkZExpc3RlbmVyKGUse2xpc3RlbmVyOnQsb25jZTohMH0pfSxpLm9uY2U9bihcImFkZE9uY2VMaXN0ZW5lclwiKSxpLmRlZmluZUV2ZW50PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmdldExpc3RlbmVycyhlKSx0aGlzfSxpLmRlZmluZUV2ZW50cz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MDtlLmxlbmd0aD50O3QrPTEpdGhpcy5kZWZpbmVFdmVudChlW3RdKTtyZXR1cm4gdGhpc30saS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihlLG4pe3ZhciBpLHIsbz10aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGUpO2ZvcihyIGluIG8pby5oYXNPd25Qcm9wZXJ0eShyKSYmKGk9dChvW3JdLG4pLC0xIT09aSYmb1tyXS5zcGxpY2UoaSwxKSk7cmV0dXJuIHRoaXN9LGkub2ZmPW4oXCJyZW1vdmVMaXN0ZW5lclwiKSxpLmFkZExpc3RlbmVycz1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm1hbmlwdWxhdGVMaXN0ZW5lcnMoITEsZSx0KX0saS5yZW1vdmVMaXN0ZW5lcnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tYW5pcHVsYXRlTGlzdGVuZXJzKCEwLGUsdCl9LGkubWFuaXB1bGF0ZUxpc3RlbmVycz1mdW5jdGlvbihlLHQsbil7dmFyIGkscixvPWU/dGhpcy5yZW1vdmVMaXN0ZW5lcjp0aGlzLmFkZExpc3RlbmVyLHM9ZT90aGlzLnJlbW92ZUxpc3RlbmVyczp0aGlzLmFkZExpc3RlbmVycztpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIFJlZ0V4cClmb3IoaT1uLmxlbmd0aDtpLS07KW8uY2FsbCh0aGlzLHQsbltpXSk7ZWxzZSBmb3IoaSBpbiB0KXQuaGFzT3duUHJvcGVydHkoaSkmJihyPXRbaV0pJiYoXCJmdW5jdGlvblwiPT10eXBlb2Ygcj9vLmNhbGwodGhpcyxpLHIpOnMuY2FsbCh0aGlzLGkscikpO3JldHVybiB0aGlzfSxpLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUpe3ZhciB0LG49dHlwZW9mIGUsaT10aGlzLl9nZXRFdmVudHMoKTtpZihcInN0cmluZ1wiPT09bilkZWxldGUgaVtlXTtlbHNlIGlmKFwib2JqZWN0XCI9PT1uKWZvcih0IGluIGkpaS5oYXNPd25Qcm9wZXJ0eSh0KSYmZS50ZXN0KHQpJiZkZWxldGUgaVt0XTtlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHM7cmV0dXJuIHRoaXN9LGkucmVtb3ZlQWxsTGlzdGVuZXJzPW4oXCJyZW1vdmVFdmVudFwiKSxpLmVtaXRFdmVudD1mdW5jdGlvbihlLHQpe3ZhciBuLGkscixvLHM9dGhpcy5nZXRMaXN0ZW5lcnNBc09iamVjdChlKTtmb3IociBpbiBzKWlmKHMuaGFzT3duUHJvcGVydHkocikpZm9yKGk9c1tyXS5sZW5ndGg7aS0tOyluPXNbcl1baV0sbi5vbmNlPT09ITAmJnRoaXMucmVtb3ZlTGlzdGVuZXIoZSxuLmxpc3RlbmVyKSxvPW4ubGlzdGVuZXIuYXBwbHkodGhpcyx0fHxbXSksbz09PXRoaXMuX2dldE9uY2VSZXR1cm5WYWx1ZSgpJiZ0aGlzLnJlbW92ZUxpc3RlbmVyKGUsbi5saXN0ZW5lcik7cmV0dXJuIHRoaXN9LGkudHJpZ2dlcj1uKFwiZW1pdEV2ZW50XCIpLGkuZW1pdD1mdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIHRoaXMuZW1pdEV2ZW50KGUsdCl9LGkuc2V0T25jZVJldHVyblZhbHVlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9vbmNlUmV0dXJuVmFsdWU9ZSx0aGlzfSxpLl9nZXRPbmNlUmV0dXJuVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oYXNPd25Qcm9wZXJ0eShcIl9vbmNlUmV0dXJuVmFsdWVcIik/dGhpcy5fb25jZVJldHVyblZhbHVlOiEwfSxpLl9nZXRFdmVudHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZXZlbnRzfHwodGhpcy5fZXZlbnRzPXt9KX0sZS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIHIuRXZlbnRFbWl0dGVyPW8sZX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImV2ZW50RW1pdHRlci9FdmVudEVtaXR0ZXJcIixbXSxmdW5jdGlvbigpe3JldHVybiBlfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZTp0aGlzLkV2ZW50RW1pdHRlcj1lfSkuY2FsbCh0aGlzKSxmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe3ZhciBuPWUuZXZlbnQ7cmV0dXJuIG4udGFyZ2V0PW4udGFyZ2V0fHxuLnNyY0VsZW1lbnR8fHQsbn12YXIgbj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsaT1mdW5jdGlvbigpe307bi5hZGRFdmVudExpc3RlbmVyP2k9ZnVuY3Rpb24oZSx0LG4pe2UuYWRkRXZlbnRMaXN0ZW5lcih0LG4sITEpfTpuLmF0dGFjaEV2ZW50JiYoaT1mdW5jdGlvbihlLG4saSl7ZVtuK2ldPWkuaGFuZGxlRXZlbnQ/ZnVuY3Rpb24oKXt2YXIgbj10KGUpO2kuaGFuZGxlRXZlbnQuY2FsbChpLG4pfTpmdW5jdGlvbigpe3ZhciBuPXQoZSk7aS5jYWxsKGUsbil9LGUuYXR0YWNoRXZlbnQoXCJvblwiK24sZVtuK2ldKX0pO3ZhciByPWZ1bmN0aW9uKCl7fTtuLnJlbW92ZUV2ZW50TGlzdGVuZXI/cj1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbiwhMSl9Om4uZGV0YWNoRXZlbnQmJihyPWZ1bmN0aW9uKGUsdCxuKXtlLmRldGFjaEV2ZW50KFwib25cIit0LGVbdCtuXSk7dHJ5e2RlbGV0ZSBlW3Qrbl19Y2F0Y2goaSl7ZVt0K25dPXZvaWQgMH19KTt2YXIgbz17YmluZDppLHVuYmluZDpyfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZXZlbnRpZS9ldmVudGllXCIsbyk6ZS5ldmVudGllPW99KHRoaXMpLGZ1bmN0aW9uKGUsdCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsXCJldmVudGllL2V2ZW50aWVcIl0sZnVuY3Rpb24obixpKXtyZXR1cm4gdChlLG4saSl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KGUscmVxdWlyZShcIndvbGZ5ODctZXZlbnRlbWl0dGVyXCIpLHJlcXVpcmUoXCJldmVudGllXCIpKTplLmltYWdlc0xvYWRlZD10KGUsZS5FdmVudEVtaXR0ZXIsZS5ldmVudGllKX0od2luZG93LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiBpKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfWZ1bmN0aW9uIHIoZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09ZC5jYWxsKGUpfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9W107aWYocihlKSl0PWU7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgZS5sZW5ndGgpZm9yKHZhciBuPTAsaT1lLmxlbmd0aDtpPm47bisrKXQucHVzaChlW25dKTtlbHNlIHQucHVzaChlKTtyZXR1cm4gdH1mdW5jdGlvbiBzKGUsdCxuKXtpZighKHRoaXMgaW5zdGFuY2VvZiBzKSlyZXR1cm4gbmV3IHMoZSx0KTtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSksdGhpcy5lbGVtZW50cz1vKGUpLHRoaXMub3B0aW9ucz1pKHt9LHRoaXMub3B0aW9ucyksXCJmdW5jdGlvblwiPT10eXBlb2YgdD9uPXQ6aSh0aGlzLm9wdGlvbnMsdCksbiYmdGhpcy5vbihcImFsd2F5c1wiLG4pLHRoaXMuZ2V0SW1hZ2VzKCksYSYmKHRoaXMuanFEZWZlcnJlZD1uZXcgYS5EZWZlcnJlZCk7dmFyIHI9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5jaGVjaygpfSl9ZnVuY3Rpb24gZihlKXt0aGlzLmltZz1lfWZ1bmN0aW9uIGMoZSl7dGhpcy5zcmM9ZSx2W2VdPXRoaXN9dmFyIGE9ZS5qUXVlcnksdT1lLmNvbnNvbGUsaD11IT09dm9pZCAwLGQ9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztzLnByb3RvdHlwZT1uZXcgdCxzLnByb3RvdHlwZS5vcHRpb25zPXt9LHMucHJvdG90eXBlLmdldEltYWdlcz1mdW5jdGlvbigpe3RoaXMuaW1hZ2VzPVtdO2Zvcih2YXIgZT0wLHQ9dGhpcy5lbGVtZW50cy5sZW5ndGg7dD5lO2UrKyl7dmFyIG49dGhpcy5lbGVtZW50c1tlXTtcIklNR1wiPT09bi5ub2RlTmFtZSYmdGhpcy5hZGRJbWFnZShuKTt2YXIgaT1uLm5vZGVUeXBlO2lmKGkmJigxPT09aXx8OT09PWl8fDExPT09aSkpZm9yKHZhciByPW4ucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxvPTAscz1yLmxlbmd0aDtzPm87bysrKXt2YXIgZj1yW29dO3RoaXMuYWRkSW1hZ2UoZil9fX0scy5wcm90b3R5cGUuYWRkSW1hZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IGYoZSk7dGhpcy5pbWFnZXMucHVzaCh0KX0scy5wcm90b3R5cGUuY2hlY2s9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUscil7cmV0dXJuIHQub3B0aW9ucy5kZWJ1ZyYmaCYmdS5sb2coXCJjb25maXJtXCIsZSxyKSx0LnByb2dyZXNzKGUpLG4rKyxuPT09aSYmdC5jb21wbGV0ZSgpLCEwfXZhciB0PXRoaXMsbj0wLGk9dGhpcy5pbWFnZXMubGVuZ3RoO2lmKHRoaXMuaGFzQW55QnJva2VuPSExLCFpKXJldHVybiB0aGlzLmNvbXBsZXRlKCksdm9pZCAwO2Zvcih2YXIgcj0wO2k+cjtyKyspe3ZhciBvPXRoaXMuaW1hZ2VzW3JdO28ub24oXCJjb25maXJtXCIsZSksby5jaGVjaygpfX0scy5wcm90b3R5cGUucHJvZ3Jlc3M9ZnVuY3Rpb24oZSl7dGhpcy5oYXNBbnlCcm9rZW49dGhpcy5oYXNBbnlCcm9rZW58fCFlLmlzTG9hZGVkO3ZhciB0PXRoaXM7c2V0VGltZW91dChmdW5jdGlvbigpe3QuZW1pdChcInByb2dyZXNzXCIsdCxlKSx0LmpxRGVmZXJyZWQmJnQuanFEZWZlcnJlZC5ub3RpZnkmJnQuanFEZWZlcnJlZC5ub3RpZnkodCxlKX0pfSxzLnByb3RvdHlwZS5jb21wbGV0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMuaGFzQW55QnJva2VuP1wiZmFpbFwiOlwiZG9uZVwiO3RoaXMuaXNDb21wbGV0ZT0hMDt2YXIgdD10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtpZih0LmVtaXQoZSx0KSx0LmVtaXQoXCJhbHdheXNcIix0KSx0LmpxRGVmZXJyZWQpe3ZhciBuPXQuaGFzQW55QnJva2VuP1wicmVqZWN0XCI6XCJyZXNvbHZlXCI7dC5qcURlZmVycmVkW25dKHQpfX0pfSxhJiYoYS5mbi5pbWFnZXNMb2FkZWQ9ZnVuY3Rpb24oZSx0KXt2YXIgbj1uZXcgcyh0aGlzLGUsdCk7cmV0dXJuIG4uanFEZWZlcnJlZC5wcm9taXNlKGEodGhpcykpfSksZi5wcm90b3R5cGU9bmV3IHQsZi5wcm90b3R5cGUuY2hlY2s9ZnVuY3Rpb24oKXt2YXIgZT12W3RoaXMuaW1nLnNyY118fG5ldyBjKHRoaXMuaW1nLnNyYyk7aWYoZS5pc0NvbmZpcm1lZClyZXR1cm4gdGhpcy5jb25maXJtKGUuaXNMb2FkZWQsXCJjYWNoZWQgd2FzIGNvbmZpcm1lZFwiKSx2b2lkIDA7aWYodGhpcy5pbWcuY29tcGxldGUmJnZvaWQgMCE9PXRoaXMuaW1nLm5hdHVyYWxXaWR0aClyZXR1cm4gdGhpcy5jb25maXJtKDAhPT10aGlzLmltZy5uYXR1cmFsV2lkdGgsXCJuYXR1cmFsV2lkdGhcIiksdm9pZCAwO3ZhciB0PXRoaXM7ZS5vbihcImNvbmZpcm1cIixmdW5jdGlvbihlLG4pe3JldHVybiB0LmNvbmZpcm0oZS5pc0xvYWRlZCxuKSwhMH0pLGUuY2hlY2soKX0sZi5wcm90b3R5cGUuY29uZmlybT1mdW5jdGlvbihlLHQpe3RoaXMuaXNMb2FkZWQ9ZSx0aGlzLmVtaXQoXCJjb25maXJtXCIsdGhpcyx0KX07dmFyIHY9e307cmV0dXJuIGMucHJvdG90eXBlPW5ldyB0LGMucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNDaGVja2VkKXt2YXIgZT1uZXcgSW1hZ2U7bi5iaW5kKGUsXCJsb2FkXCIsdGhpcyksbi5iaW5kKGUsXCJlcnJvclwiLHRoaXMpLGUuc3JjPXRoaXMuc3JjLHRoaXMuaXNDaGVja2VkPSEwfX0sYy5wcm90b3R5cGUuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJvblwiK2UudHlwZTt0aGlzW3RdJiZ0aGlzW3RdKGUpfSxjLnByb3RvdHlwZS5vbmxvYWQ9ZnVuY3Rpb24oZSl7dGhpcy5jb25maXJtKCEwLFwib25sb2FkXCIpLHRoaXMudW5iaW5kUHJveHlFdmVudHMoZSl9LGMucHJvdG90eXBlLm9uZXJyb3I9ZnVuY3Rpb24oZSl7dGhpcy5jb25maXJtKCExLFwib25lcnJvclwiKSx0aGlzLnVuYmluZFByb3h5RXZlbnRzKGUpfSxjLnByb3RvdHlwZS5jb25maXJtPWZ1bmN0aW9uKGUsdCl7dGhpcy5pc0NvbmZpcm1lZD0hMCx0aGlzLmlzTG9hZGVkPWUsdGhpcy5lbWl0KFwiY29uZmlybVwiLHRoaXMsdCl9LGMucHJvdG90eXBlLnVuYmluZFByb3h5RXZlbnRzPWZ1bmN0aW9uKGUpe24udW5iaW5kKGUudGFyZ2V0LFwibG9hZFwiLHRoaXMpLG4udW5iaW5kKGUudGFyZ2V0LFwiZXJyb3JcIix0aGlzKX0sc30pOyIsIi8qIVxyXG4gKiBJc290b3BlIFBBQ0tBR0VEIHYyLjIuMFxyXG4gKlxyXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXHJcbiAqIG9yIElzb3RvcGUgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxyXG4gKlxyXG4gKiBodHRwOi8vaXNvdG9wZS5tZXRhZml6enkuY29cclxuICogQ29weXJpZ2h0IDIwMTUgTWV0YWZpenp5XHJcbiAqL1xyXG5cclxuIWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXt9ZnVuY3Rpb24gYyhhKXtmdW5jdGlvbiBjKGIpe2IucHJvdG90eXBlLm9wdGlvbnx8KGIucHJvdG90eXBlLm9wdGlvbj1mdW5jdGlvbihiKXthLmlzUGxhaW5PYmplY3QoYikmJih0aGlzLm9wdGlvbnM9YS5leHRlbmQoITAsdGhpcy5vcHRpb25zLGIpKX0pfWZ1bmN0aW9uIGUoYixjKXthLmZuW2JdPWZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtmb3IodmFyIGc9ZC5jYWxsKGFyZ3VtZW50cywxKSxoPTAsaT10aGlzLmxlbmd0aDtpPmg7aCsrKXt2YXIgaj10aGlzW2hdLGs9YS5kYXRhKGosYik7aWYoaylpZihhLmlzRnVuY3Rpb24oa1tlXSkmJlwiX1wiIT09ZS5jaGFyQXQoMCkpe3ZhciBsPWtbZV0uYXBwbHkoayxnKTtpZih2b2lkIDAhPT1sKXJldHVybiBsfWVsc2UgZihcIm5vIHN1Y2ggbWV0aG9kICdcIitlK1wiJyBmb3IgXCIrYitcIiBpbnN0YW5jZVwiKTtlbHNlIGYoXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiK2IrXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IGF0dGVtcHRlZCB0byBjYWxsICdcIitlK1wiJ1wiKX1yZXR1cm4gdGhpc31yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YS5kYXRhKHRoaXMsYik7ZD8oZC5vcHRpb24oZSksZC5faW5pdCgpKTooZD1uZXcgYyh0aGlzLGUpLGEuZGF0YSh0aGlzLGIsZCkpfSl9fWlmKGEpe3ZhciBmPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlP2I6ZnVuY3Rpb24oYSl7Y29uc29sZS5lcnJvcihhKX07cmV0dXJuIGEuYnJpZGdldD1mdW5jdGlvbihhLGIpe2MoYiksZShhLGIpfSxhLmJyaWRnZXR9fXZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwianF1ZXJ5LWJyaWRnZXQvanF1ZXJ5LmJyaWRnZXRcIixbXCJqcXVlcnlcIl0sYyk6YyhcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmEualF1ZXJ5KX0od2luZG93KSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGIpe3ZhciBjPWEuZXZlbnQ7cmV0dXJuIGMudGFyZ2V0PWMudGFyZ2V0fHxjLnNyY0VsZW1lbnR8fGIsY312YXIgYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsZD1mdW5jdGlvbigpe307Yy5hZGRFdmVudExpc3RlbmVyP2Q9ZnVuY3Rpb24oYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfTpjLmF0dGFjaEV2ZW50JiYoZD1mdW5jdGlvbihhLGMsZCl7YVtjK2RdPWQuaGFuZGxlRXZlbnQ/ZnVuY3Rpb24oKXt2YXIgYz1iKGEpO2QuaGFuZGxlRXZlbnQuY2FsbChkLGMpfTpmdW5jdGlvbigpe3ZhciBjPWIoYSk7ZC5jYWxsKGEsYyl9LGEuYXR0YWNoRXZlbnQoXCJvblwiK2MsYVtjK2RdKX0pO3ZhciBlPWZ1bmN0aW9uKCl7fTtjLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZT1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9OmMuZGV0YWNoRXZlbnQmJihlPWZ1bmN0aW9uKGEsYixjKXthLmRldGFjaEV2ZW50KFwib25cIitiLGFbYitjXSk7dHJ5e2RlbGV0ZSBhW2IrY119Y2F0Y2goZCl7YVtiK2NdPXZvaWQgMH19KTt2YXIgZj17YmluZDpkLHVuYmluZDplfTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZXZlbnRpZS9ldmVudGllXCIsZik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZjphLmV2ZW50aWU9Zn0od2luZG93KSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoKXt9ZnVuY3Rpb24gYihhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aDtjLS07KWlmKGFbY10ubGlzdGVuZXI9PT1iKXJldHVybiBjO3JldHVybi0xfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYV0uYXBwbHkodGhpcyxhcmd1bWVudHMpfX12YXIgZD1hLnByb3RvdHlwZSxlPXRoaXMsZj1lLkV2ZW50RW1pdHRlcjtkLmdldExpc3RlbmVycz1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5fZ2V0RXZlbnRzKCk7aWYoYSBpbnN0YW5jZW9mIFJlZ0V4cCl7Yj17fTtmb3IoYyBpbiBkKWQuaGFzT3duUHJvcGVydHkoYykmJmEudGVzdChjKSYmKGJbY109ZFtjXSl9ZWxzZSBiPWRbYV18fChkW2FdPVtdKTtyZXR1cm4gYn0sZC5mbGF0dGVuTGlzdGVuZXJzPWZ1bmN0aW9uKGEpe3ZhciBiLGM9W107Zm9yKGI9MDtiPGEubGVuZ3RoO2IrPTEpYy5wdXNoKGFbYl0ubGlzdGVuZXIpO3JldHVybiBjfSxkLmdldExpc3RlbmVyc0FzT2JqZWN0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5nZXRMaXN0ZW5lcnMoYSk7cmV0dXJuIGMgaW5zdGFuY2VvZiBBcnJheSYmKGI9e30sYlthXT1jKSxifHxjfSxkLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGEsYyl7dmFyIGQsZT10aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGEpLGY9XCJvYmplY3RcIj09dHlwZW9mIGM7Zm9yKGQgaW4gZSllLmhhc093blByb3BlcnR5KGQpJiYtMT09PWIoZVtkXSxjKSYmZVtkXS5wdXNoKGY/Yzp7bGlzdGVuZXI6YyxvbmNlOiExfSk7cmV0dXJuIHRoaXN9LGQub249YyhcImFkZExpc3RlbmVyXCIpLGQuYWRkT25jZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoYSx7bGlzdGVuZXI6YixvbmNlOiEwfSl9LGQub25jZT1jKFwiYWRkT25jZUxpc3RlbmVyXCIpLGQuZGVmaW5lRXZlbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZ2V0TGlzdGVuZXJzKGEpLHRoaXN9LGQuZGVmaW5lRXZlbnRzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7Yis9MSl0aGlzLmRlZmluZUV2ZW50KGFbYl0pO3JldHVybiB0aGlzfSxkLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYyl7dmFyIGQsZSxmPXRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoYSk7Zm9yKGUgaW4gZilmLmhhc093blByb3BlcnR5KGUpJiYoZD1iKGZbZV0sYyksLTEhPT1kJiZmW2VdLnNwbGljZShkLDEpKTtyZXR1cm4gdGhpc30sZC5vZmY9YyhcInJlbW92ZUxpc3RlbmVyXCIpLGQuYWRkTGlzdGVuZXJzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubWFuaXB1bGF0ZUxpc3RlbmVycyghMSxhLGIpfSxkLnJlbW92ZUxpc3RlbmVycz1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1hbmlwdWxhdGVMaXN0ZW5lcnMoITAsYSxiKX0sZC5tYW5pcHVsYXRlTGlzdGVuZXJzPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YT90aGlzLnJlbW92ZUxpc3RlbmVyOnRoaXMuYWRkTGlzdGVuZXIsZz1hP3RoaXMucmVtb3ZlTGlzdGVuZXJzOnRoaXMuYWRkTGlzdGVuZXJzO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBifHxiIGluc3RhbmNlb2YgUmVnRXhwKWZvcihkPWMubGVuZ3RoO2QtLTspZi5jYWxsKHRoaXMsYixjW2RdKTtlbHNlIGZvcihkIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShkKSYmKGU9YltkXSkmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2YuY2FsbCh0aGlzLGQsZSk6Zy5jYWxsKHRoaXMsZCxlKSk7cmV0dXJuIHRoaXN9LGQucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz10eXBlb2YgYSxkPXRoaXMuX2dldEV2ZW50cygpO2lmKFwic3RyaW5nXCI9PT1jKWRlbGV0ZSBkW2FdO2Vsc2UgaWYoYSBpbnN0YW5jZW9mIFJlZ0V4cClmb3IoYiBpbiBkKWQuaGFzT3duUHJvcGVydHkoYikmJmEudGVzdChiKSYmZGVsZXRlIGRbYl07ZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzO3JldHVybiB0aGlzfSxkLnJlbW92ZUFsbExpc3RlbmVycz1jKFwicmVtb3ZlRXZlbnRcIiksZC5lbWl0RXZlbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPXRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoYSk7Zm9yKGUgaW4gZylpZihnLmhhc093blByb3BlcnR5KGUpKWZvcihkPWdbZV0ubGVuZ3RoO2QtLTspYz1nW2VdW2RdLGMub25jZT09PSEwJiZ0aGlzLnJlbW92ZUxpc3RlbmVyKGEsYy5saXN0ZW5lciksZj1jLmxpc3RlbmVyLmFwcGx5KHRoaXMsYnx8W10pLGY9PT10aGlzLl9nZXRPbmNlUmV0dXJuVmFsdWUoKSYmdGhpcy5yZW1vdmVMaXN0ZW5lcihhLGMubGlzdGVuZXIpO3JldHVybiB0aGlzfSxkLnRyaWdnZXI9YyhcImVtaXRFdmVudFwiKSxkLmVtaXQ9ZnVuY3Rpb24oYSl7dmFyIGI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3JldHVybiB0aGlzLmVtaXRFdmVudChhLGIpfSxkLnNldE9uY2VSZXR1cm5WYWx1ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fb25jZVJldHVyblZhbHVlPWEsdGhpc30sZC5fZ2V0T25jZVJldHVyblZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkoXCJfb25jZVJldHVyblZhbHVlXCIpP3RoaXMuX29uY2VSZXR1cm5WYWx1ZTohMH0sZC5fZ2V0RXZlbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2V2ZW50c3x8KHRoaXMuX2V2ZW50cz17fSl9LGEubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBlLkV2ZW50RW1pdHRlcj1mLGF9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gYX0pOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWE6ZS5FdmVudEVtaXR0ZXI9YX0uY2FsbCh0aGlzKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEpe2lmKGEpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBkW2FdKXJldHVybiBhO2E9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpO2Zvcih2YXIgYixlPTAsZj1jLmxlbmd0aDtmPmU7ZSsrKWlmKGI9Y1tlXSthLFwic3RyaW5nXCI9PXR5cGVvZiBkW2JdKXJldHVybiBifX12YXIgYz1cIldlYmtpdCBNb3ogbXMgTXMgT1wiLnNwbGl0KFwiIFwiKSxkPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iOmEuZ2V0U3R5bGVQcm9wZXJ0eT1ifSh3aW5kb3cpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXt2YXIgYj1wYXJzZUZsb2F0KGEpLGM9LTE9PT1hLmluZGV4T2YoXCIlXCIpJiYhaXNOYU4oYik7cmV0dXJuIGMmJmJ9ZnVuY3Rpb24gZCgpe31mdW5jdGlvbiBlKCl7Zm9yKHZhciBhPXt3aWR0aDowLGhlaWdodDowLGlubmVyV2lkdGg6MCxpbm5lckhlaWdodDowLG91dGVyV2lkdGg6MCxvdXRlckhlaWdodDowfSxiPTAsYz1oLmxlbmd0aDtjPmI7YisrKXt2YXIgZD1oW2JdO2FbZF09MH1yZXR1cm4gYX1mdW5jdGlvbiBmKGIpe2Z1bmN0aW9uIGQoKXtpZighbSl7bT0hMDt2YXIgZD1hLmdldENvbXB1dGVkU3R5bGU7aWYoaj1mdW5jdGlvbigpe3ZhciBhPWQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGQoYSxudWxsKX06ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY3VycmVudFN0eWxlfTtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9YShiKTtyZXR1cm4gY3x8ZyhcIlN0eWxlIHJldHVybmVkIFwiK2MrXCIuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/IFNlZSBodHRwOi8vYml0Lmx5L2dldHNpemVidWcxXCIpLGN9fSgpLGs9YihcImJveFNpemluZ1wiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnN0eWxlLndpZHRoPVwiMjAwcHhcIixlLnN0eWxlLnBhZGRpbmc9XCIxcHggMnB4IDNweCA0cHhcIixlLnN0eWxlLmJvcmRlclN0eWxlPVwic29saWRcIixlLnN0eWxlLmJvcmRlcldpZHRoPVwiMXB4IDJweCAzcHggNHB4XCIsZS5zdHlsZVtrXT1cImJvcmRlci1ib3hcIjt2YXIgZj1kb2N1bWVudC5ib2R5fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7Zi5hcHBlbmRDaGlsZChlKTt2YXIgaD1qKGUpO2w9MjAwPT09YyhoLndpZHRoKSxmLnJlbW92ZUNoaWxkKGUpfX19ZnVuY3Rpb24gZihhKXtpZihkKCksXCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYSkpLGEmJlwib2JqZWN0XCI9PXR5cGVvZiBhJiZhLm5vZGVUeXBlKXt2YXIgYj1qKGEpO2lmKFwibm9uZVwiPT09Yi5kaXNwbGF5KXJldHVybiBlKCk7dmFyIGY9e307Zi53aWR0aD1hLm9mZnNldFdpZHRoLGYuaGVpZ2h0PWEub2Zmc2V0SGVpZ2h0O2Zvcih2YXIgZz1mLmlzQm9yZGVyQm94PSEoIWt8fCFiW2tdfHxcImJvcmRlci1ib3hcIiE9PWJba10pLG09MCxuPWgubGVuZ3RoO24+bTttKyspe3ZhciBvPWhbbV0scD1iW29dO3A9aShhLHApO3ZhciBxPXBhcnNlRmxvYXQocCk7ZltvXT1pc05hTihxKT8wOnF9dmFyIHI9Zi5wYWRkaW5nTGVmdCtmLnBhZGRpbmdSaWdodCxzPWYucGFkZGluZ1RvcCtmLnBhZGRpbmdCb3R0b20sdD1mLm1hcmdpbkxlZnQrZi5tYXJnaW5SaWdodCx1PWYubWFyZ2luVG9wK2YubWFyZ2luQm90dG9tLHY9Zi5ib3JkZXJMZWZ0V2lkdGgrZi5ib3JkZXJSaWdodFdpZHRoLHc9Zi5ib3JkZXJUb3BXaWR0aCtmLmJvcmRlckJvdHRvbVdpZHRoLHg9ZyYmbCx5PWMoYi53aWR0aCk7eSE9PSExJiYoZi53aWR0aD15Kyh4PzA6cit2KSk7dmFyIHo9YyhiLmhlaWdodCk7cmV0dXJuIHohPT0hMSYmKGYuaGVpZ2h0PXorKHg/MDpzK3cpKSxmLmlubmVyV2lkdGg9Zi53aWR0aC0ocit2KSxmLmlubmVySGVpZ2h0PWYuaGVpZ2h0LShzK3cpLGYub3V0ZXJXaWR0aD1mLndpZHRoK3QsZi5vdXRlckhlaWdodD1mLmhlaWdodCt1LGZ9fWZ1bmN0aW9uIGkoYixjKXtpZihhLmdldENvbXB1dGVkU3R5bGV8fC0xPT09Yy5pbmRleE9mKFwiJVwiKSlyZXR1cm4gYzt2YXIgZD1iLnN0eWxlLGU9ZC5sZWZ0LGY9Yi5ydW50aW1lU3R5bGUsZz1mJiZmLmxlZnQ7cmV0dXJuIGcmJihmLmxlZnQ9Yi5jdXJyZW50U3R5bGUubGVmdCksZC5sZWZ0PWMsYz1kLnBpeGVsTGVmdCxkLmxlZnQ9ZSxnJiYoZi5sZWZ0PWcpLGN9dmFyIGosayxsLG09ITE7cmV0dXJuIGZ9dmFyIGc9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGNvbnNvbGU/ZDpmdW5jdGlvbihhKXtjb25zb2xlLmVycm9yKGEpfSxoPVtcInBhZGRpbmdMZWZ0XCIsXCJwYWRkaW5nUmlnaHRcIixcInBhZGRpbmdUb3BcIixcInBhZGRpbmdCb3R0b21cIixcIm1hcmdpbkxlZnRcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiLFwiYm9yZGVyTGVmdFdpZHRoXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIl07XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImdldC1zaXplL2dldC1zaXplXCIsW1wiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiXSxmKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1mKHJlcXVpcmUoXCJkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHlcIikpOmEuZ2V0U2l6ZT1mKGEuZ2V0U3R5bGVQcm9wZXJ0eSl9KHdpbmRvdyksZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYi5pc1JlYWR5P2EoKTpnLnB1c2goYSkpfWZ1bmN0aW9uIGMoYSl7dmFyIGM9XCJyZWFkeXN0YXRlY2hhbmdlXCI9PT1hLnR5cGUmJlwiY29tcGxldGVcIiE9PWYucmVhZHlTdGF0ZTtiLmlzUmVhZHl8fGN8fGQoKX1mdW5jdGlvbiBkKCl7Yi5pc1JlYWR5PSEwO2Zvcih2YXIgYT0wLGM9Zy5sZW5ndGg7Yz5hO2ErKyl7dmFyIGQ9Z1thXTtkKCl9fWZ1bmN0aW9uIGUoZSl7cmV0dXJuXCJjb21wbGV0ZVwiPT09Zi5yZWFkeVN0YXRlP2QoKTooZS5iaW5kKGYsXCJET01Db250ZW50TG9hZGVkXCIsYyksZS5iaW5kKGYsXCJyZWFkeXN0YXRlY2hhbmdlXCIsYyksZS5iaW5kKGEsXCJsb2FkXCIsYykpLGJ9dmFyIGY9YS5kb2N1bWVudCxnPVtdO2IuaXNSZWFkeT0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZG9jLXJlYWR5L2RvYy1yZWFkeVwiLFtcImV2ZW50aWUvZXZlbnRpZVwiXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJldmVudGllXCIpKTphLmRvY1JlYWR5PWUoYS5ldmVudGllKX0od2luZG93KSxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuIGFbZ10oYil9ZnVuY3Rpb24gYyhhKXtpZighYS5wYXJlbnROb2RlKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yi5hcHBlbmRDaGlsZChhKX19ZnVuY3Rpb24gZChhLGIpe2MoYSk7Zm9yKHZhciBkPWEucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKGIpLGU9MCxmPWQubGVuZ3RoO2Y+ZTtlKyspaWYoZFtlXT09PWEpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gZShhLGQpe3JldHVybiBjKGEpLGIoYSxkKX12YXIgZixnPWZ1bmN0aW9uKCl7aWYoYS5tYXRjaGVzKXJldHVyblwibWF0Y2hlc1wiO2lmKGEubWF0Y2hlc1NlbGVjdG9yKXJldHVyblwibWF0Y2hlc1NlbGVjdG9yXCI7Zm9yKHZhciBiPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxjPTAsZD1iLmxlbmd0aDtkPmM7YysrKXt2YXIgZT1iW2NdLGY9ZStcIk1hdGNoZXNTZWxlY3RvclwiO2lmKGFbZl0pcmV0dXJuIGZ9fSgpO2lmKGcpe3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1iKGgsXCJkaXZcIik7Zj1pP2I6ZX1lbHNlIGY9ZDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwibWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yXCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gZn0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWY6d2luZG93Lm1hdGNoZXNTZWxlY3Rvcj1mfShFbGVtZW50LnByb3RvdHlwZSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiZml6enktdWktdXRpbHMvdXRpbHNcIixbXCJkb2MtcmVhZHkvZG9jLXJlYWR5XCIsXCJtYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIl0sZnVuY3Rpb24oYyxkKXtyZXR1cm4gYihhLGMsZCl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKGEscmVxdWlyZShcImRvYy1yZWFkeVwiKSxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSk6YS5maXp6eVVJVXRpbHM9YihhLGEuZG9jUmVhZHksYS5tYXRjaGVzU2VsZWN0b3IpfSh3aW5kb3csZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXt9O2QuZXh0ZW5kPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdO3JldHVybiBhfSxkLm1vZHVsbz1mdW5jdGlvbihhLGIpe3JldHVybihhJWIrYiklYn07dmFyIGU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztkLmlzQXJyYXk9ZnVuY3Rpb24oYSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT1lLmNhbGwoYSl9LGQubWFrZUFycmF5PWZ1bmN0aW9uKGEpe3ZhciBiPVtdO2lmKGQuaXNBcnJheShhKSliPWE7ZWxzZSBpZihhJiZcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgpZm9yKHZhciBjPTAsZT1hLmxlbmd0aDtlPmM7YysrKWIucHVzaChhW2NdKTtlbHNlIGIucHVzaChhKTtyZXR1cm4gYn0sZC5pbmRleE9mPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKGEsYil7cmV0dXJuIGEuaW5kZXhPZihiKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LGQucmVtb3ZlRnJvbT1mdW5jdGlvbihhLGIpe3ZhciBjPWQuaW5kZXhPZihhLGIpOy0xIT1jJiZhLnNwbGljZShjLDEpfSxkLmlzRWxlbWVudD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBIVE1MRWxlbWVudHx8XCJvYmplY3RcIj09dHlwZW9mIEhUTUxFbGVtZW50P2Z1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgSFRNTEVsZW1lbnR9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcIm9iamVjdFwiPT10eXBlb2YgYSYmMT09YS5ub2RlVHlwZSYmXCJzdHJpbmdcIj09dHlwZW9mIGEubm9kZU5hbWV9LGQuc2V0VGV4dD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxjKXtiPWJ8fCh2b2lkIDAhPT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQudGV4dENvbnRlbnQ/XCJ0ZXh0Q29udGVudFwiOlwiaW5uZXJUZXh0XCIpLGFbYl09Y312YXIgYjtyZXR1cm4gYX0oKSxkLmdldFBhcmVudD1mdW5jdGlvbihhLGIpe2Zvcig7YSE9ZG9jdW1lbnQuYm9keTspaWYoYT1hLnBhcmVudE5vZGUsYyhhLGIpKXJldHVybiBhfSxkLmdldFF1ZXJ5RWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEpOmF9LGQuaGFuZGxlRXZlbnQ9ZnVuY3Rpb24oYSl7dmFyIGI9XCJvblwiK2EudHlwZTt0aGlzW2JdJiZ0aGlzW2JdKGEpfSxkLmZpbHRlckZpbmRFbGVtZW50cz1mdW5jdGlvbihhLGIpe2E9ZC5tYWtlQXJyYXkoYSk7Zm9yKHZhciBlPVtdLGY9MCxnPWEubGVuZ3RoO2c+ZjtmKyspe3ZhciBoPWFbZl07aWYoZC5pc0VsZW1lbnQoaCkpaWYoYil7YyhoLGIpJiZlLnB1c2goaCk7Zm9yKHZhciBpPWgucXVlcnlTZWxlY3RvckFsbChiKSxqPTAsaz1pLmxlbmd0aDtrPmo7aisrKWUucHVzaChpW2pdKX1lbHNlIGUucHVzaChoKX1yZXR1cm4gZX0sZC5kZWJvdW5jZU1ldGhvZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5wcm90b3R5cGVbYl0sZT1iK1wiVGltZW91dFwiO2EucHJvdG90eXBlW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpc1tlXTthJiZjbGVhclRpbWVvdXQoYSk7dmFyIGI9YXJndW1lbnRzLGY9dGhpczt0aGlzW2VdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtkLmFwcGx5KGYsYiksZGVsZXRlIGZbZV19LGN8fDEwMCl9fSxkLnRvRGFzaGVkPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoLyguKShbQS1aXSkvZyxmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIrXCItXCIrY30pLnRvTG93ZXJDYXNlKCl9O3ZhciBmPWEuY29uc29sZTtyZXR1cm4gZC5odG1sSW5pdD1mdW5jdGlvbihjLGUpe2IoZnVuY3Rpb24oKXtmb3IodmFyIGI9ZC50b0Rhc2hlZChlKSxnPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtXCIrYiksaD1cImRhdGEtXCIrYitcIi1vcHRpb25zXCIsaT0wLGo9Zy5sZW5ndGg7aj5pO2krKyl7dmFyIGssbD1nW2ldLG09bC5nZXRBdHRyaWJ1dGUoaCk7dHJ5e2s9bSYmSlNPTi5wYXJzZShtKX1jYXRjaChuKXtmJiZmLmVycm9yKFwiRXJyb3IgcGFyc2luZyBcIitoK1wiIG9uIFwiK2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKSsobC5pZD9cIiNcIitsLmlkOlwiXCIpK1wiOiBcIituKTtjb250aW51ZX12YXIgbz1uZXcgYyhsLGspLHA9YS5qUXVlcnk7cCYmcC5kYXRhKGwsZSxvKX19KX0sZH0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIm91dGxheWVyL2l0ZW1cIixbXCJldmVudEVtaXR0ZXIvRXZlbnRFbWl0dGVyXCIsXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwiZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eVwiLFwiZml6enktdWktdXRpbHMvdXRpbHNcIl0sZnVuY3Rpb24oYyxkLGUsZil7cmV0dXJuIGIoYSxjLGQsZSxmKX0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoYSxyZXF1aXJlKFwid29sZnk4Ny1ldmVudGVtaXR0ZXJcIikscmVxdWlyZShcImdldC1zaXplXCIpLHJlcXVpcmUoXCJkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHlcIikscmVxdWlyZShcImZpenp5LXVpLXV0aWxzXCIpKTooYS5PdXRsYXllcj17fSxhLk91dGxheWVyLkl0ZW09YihhLGEuRXZlbnRFbWl0dGVyLGEuZ2V0U2l6ZSxhLmdldFN0eWxlUHJvcGVydHksYS5maXp6eVVJVXRpbHMpKX0od2luZG93LGZ1bmN0aW9uKGEsYixjLGQsZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZihhKXtmb3IodmFyIGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4gYj1udWxsLCEwfWZ1bmN0aW9uIGcoYSxiKXthJiYodGhpcy5lbGVtZW50PWEsdGhpcy5sYXlvdXQ9Yix0aGlzLnBvc2l0aW9uPXt4OjAseTowfSx0aGlzLl9jcmVhdGUoKSl9ZnVuY3Rpb24gaChhKXtyZXR1cm4gYS5yZXBsYWNlKC8oW0EtWl0pL2csZnVuY3Rpb24oYSl7cmV0dXJuXCItXCIrYS50b0xvd2VyQ2FzZSgpfSl9dmFyIGk9YS5nZXRDb21wdXRlZFN0eWxlLGo9aT9mdW5jdGlvbihhKXtyZXR1cm4gaShhLG51bGwpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50U3R5bGV9LGs9ZChcInRyYW5zaXRpb25cIiksbD1kKFwidHJhbnNmb3JtXCIpLG09ayYmbCxuPSEhZChcInBlcnNwZWN0aXZlXCIpLG89e1dlYmtpdFRyYW5zaXRpb246XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIsTW96VHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIixPVHJhbnNpdGlvbjpcIm90cmFuc2l0aW9uZW5kXCIsdHJhbnNpdGlvbjpcInRyYW5zaXRpb25lbmRcIn1ba10scD1bXCJ0cmFuc2Zvcm1cIixcInRyYW5zaXRpb25cIixcInRyYW5zaXRpb25EdXJhdGlvblwiLFwidHJhbnNpdGlvblByb3BlcnR5XCJdLHE9ZnVuY3Rpb24oKXtmb3IodmFyIGE9e30sYj0wLGM9cC5sZW5ndGg7Yz5iO2IrKyl7dmFyIGU9cFtiXSxmPWQoZSk7ZiYmZiE9PWUmJihhW2VdPWYpfXJldHVybiBhfSgpO2UuZXh0ZW5kKGcucHJvdG90eXBlLGIucHJvdG90eXBlKSxnLnByb3RvdHlwZS5fY3JlYXRlPWZ1bmN0aW9uKCl7dGhpcy5fdHJhbnNuPXtpbmdQcm9wZXJ0aWVzOnt9LGNsZWFuOnt9LG9uRW5kOnt9fSx0aGlzLmNzcyh7cG9zaXRpb246XCJhYnNvbHV0ZVwifSl9LGcucHJvdG90eXBlLmhhbmRsZUV2ZW50PWZ1bmN0aW9uKGEpe3ZhciBiPVwib25cIithLnR5cGU7dGhpc1tiXSYmdGhpc1tiXShhKX0sZy5wcm90b3R5cGUuZ2V0U2l6ZT1mdW5jdGlvbigpe3RoaXMuc2l6ZT1jKHRoaXMuZWxlbWVudCl9LGcucHJvdG90eXBlLmNzcz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmVsZW1lbnQuc3R5bGU7Zm9yKHZhciBjIGluIGEpe3ZhciBkPXFbY118fGM7YltkXT1hW2NdfX0sZy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oKXt2YXIgYT1qKHRoaXMuZWxlbWVudCksYj10aGlzLmxheW91dC5vcHRpb25zLGM9Yi5pc09yaWdpbkxlZnQsZD1iLmlzT3JpZ2luVG9wLGU9YVtjP1wibGVmdFwiOlwicmlnaHRcIl0sZj1hW2Q/XCJ0b3BcIjpcImJvdHRvbVwiXSxnPXBhcnNlSW50KGUsMTApLGg9cGFyc2VJbnQoZiwxMCksaT10aGlzLmxheW91dC5zaXplO2c9LTEhPWUuaW5kZXhPZihcIiVcIik/Zy8xMDAqaS53aWR0aDpnLGg9LTEhPWYuaW5kZXhPZihcIiVcIik/aC8xMDAqaS5oZWlnaHQ6aCxnPWlzTmFOKGcpPzA6ZyxoPWlzTmFOKGgpPzA6aCxnLT1jP2kucGFkZGluZ0xlZnQ6aS5wYWRkaW5nUmlnaHQsaC09ZD9pLnBhZGRpbmdUb3A6aS5wYWRkaW5nQm90dG9tLHRoaXMucG9zaXRpb24ueD1nLHRoaXMucG9zaXRpb24ueT1ofSxnLnByb3RvdHlwZS5sYXlvdXRQb3NpdGlvbj1mdW5jdGlvbigpe3ZhciBhPXRoaXMubGF5b3V0LnNpemUsYj10aGlzLmxheW91dC5vcHRpb25zLGM9e30sZD1iLmlzT3JpZ2luTGVmdD9cInBhZGRpbmdMZWZ0XCI6XCJwYWRkaW5nUmlnaHRcIixlPWIuaXNPcmlnaW5MZWZ0P1wibGVmdFwiOlwicmlnaHRcIixmPWIuaXNPcmlnaW5MZWZ0P1wicmlnaHRcIjpcImxlZnRcIixnPXRoaXMucG9zaXRpb24ueCthW2RdO2NbZV09dGhpcy5nZXRYVmFsdWUoZyksY1tmXT1cIlwiO3ZhciBoPWIuaXNPcmlnaW5Ub3A/XCJwYWRkaW5nVG9wXCI6XCJwYWRkaW5nQm90dG9tXCIsaT1iLmlzT3JpZ2luVG9wP1widG9wXCI6XCJib3R0b21cIixqPWIuaXNPcmlnaW5Ub3A/XCJib3R0b21cIjpcInRvcFwiLGs9dGhpcy5wb3NpdGlvbi55K2FbaF07Y1tpXT10aGlzLmdldFlWYWx1ZShrKSxjW2pdPVwiXCIsdGhpcy5jc3MoYyksdGhpcy5lbWl0RXZlbnQoXCJsYXlvdXRcIixbdGhpc10pfSxnLnByb3RvdHlwZS5nZXRYVmFsdWU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sYXlvdXQub3B0aW9ucztyZXR1cm4gYi5wZXJjZW50UG9zaXRpb24mJiFiLmlzSG9yaXpvbnRhbD9hL3RoaXMubGF5b3V0LnNpemUud2lkdGgqMTAwK1wiJVwiOmErXCJweFwifSxnLnByb3RvdHlwZS5nZXRZVmFsdWU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sYXlvdXQub3B0aW9ucztyZXR1cm4gYi5wZXJjZW50UG9zaXRpb24mJmIuaXNIb3Jpem9udGFsP2EvdGhpcy5sYXlvdXQuc2l6ZS5oZWlnaHQqMTAwK1wiJVwiOmErXCJweFwifSxnLnByb3RvdHlwZS5fdHJhbnNpdGlvblRvPWZ1bmN0aW9uKGEsYil7dGhpcy5nZXRQb3NpdGlvbigpO3ZhciBjPXRoaXMucG9zaXRpb24ueCxkPXRoaXMucG9zaXRpb24ueSxlPXBhcnNlSW50KGEsMTApLGY9cGFyc2VJbnQoYiwxMCksZz1lPT09dGhpcy5wb3NpdGlvbi54JiZmPT09dGhpcy5wb3NpdGlvbi55O2lmKHRoaXMuc2V0UG9zaXRpb24oYSxiKSxnJiYhdGhpcy5pc1RyYW5zaXRpb25pbmcpcmV0dXJuIHZvaWQgdGhpcy5sYXlvdXRQb3NpdGlvbigpO3ZhciBoPWEtYyxpPWItZCxqPXt9O2oudHJhbnNmb3JtPXRoaXMuZ2V0VHJhbnNsYXRlKGgsaSksdGhpcy50cmFuc2l0aW9uKHt0bzpqLG9uVHJhbnNpdGlvbkVuZDp7dHJhbnNmb3JtOnRoaXMubGF5b3V0UG9zaXRpb259LGlzQ2xlYW5pbmc6ITB9KX0sZy5wcm90b3R5cGUuZ2V0VHJhbnNsYXRlPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5sYXlvdXQub3B0aW9ucztyZXR1cm4gYT1jLmlzT3JpZ2luTGVmdD9hOi1hLGI9Yy5pc09yaWdpblRvcD9iOi1iLGE9dGhpcy5nZXRYVmFsdWUoYSksYj10aGlzLmdldFlWYWx1ZShiKSxuP1widHJhbnNsYXRlM2QoXCIrYStcIiwgXCIrYitcIiwgMClcIjpcInRyYW5zbGF0ZShcIithK1wiLCBcIitiK1wiKVwifSxnLnByb3RvdHlwZS5nb1RvPWZ1bmN0aW9uKGEsYil7dGhpcy5zZXRQb3NpdGlvbihhLGIpLHRoaXMubGF5b3V0UG9zaXRpb24oKX0sZy5wcm90b3R5cGUubW92ZVRvPW0/Zy5wcm90b3R5cGUuX3RyYW5zaXRpb25UbzpnLnByb3RvdHlwZS5nb1RvLGcucHJvdG90eXBlLnNldFBvc2l0aW9uPWZ1bmN0aW9uKGEsYil7dGhpcy5wb3NpdGlvbi54PXBhcnNlSW50KGEsMTApLHRoaXMucG9zaXRpb24ueT1wYXJzZUludChiLDEwKX0sZy5wcm90b3R5cGUuX25vblRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dGhpcy5jc3MoYS50byksYS5pc0NsZWFuaW5nJiZ0aGlzLl9yZW1vdmVTdHlsZXMoYS50byk7Zm9yKHZhciBiIGluIGEub25UcmFuc2l0aW9uRW5kKWEub25UcmFuc2l0aW9uRW5kW2JdLmNhbGwodGhpcyl9LGcucHJvdG90eXBlLl90cmFuc2l0aW9uPWZ1bmN0aW9uKGEpe2lmKCFwYXJzZUZsb2F0KHRoaXMubGF5b3V0Lm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uKSlyZXR1cm4gdm9pZCB0aGlzLl9ub25UcmFuc2l0aW9uKGEpO3ZhciBiPXRoaXMuX3RyYW5zbjtmb3IodmFyIGMgaW4gYS5vblRyYW5zaXRpb25FbmQpYi5vbkVuZFtjXT1hLm9uVHJhbnNpdGlvbkVuZFtjXTtmb3IoYyBpbiBhLnRvKWIuaW5nUHJvcGVydGllc1tjXT0hMCxhLmlzQ2xlYW5pbmcmJihiLmNsZWFuW2NdPSEwKTtpZihhLmZyb20pe3RoaXMuY3NzKGEuZnJvbSk7dmFyIGQ9dGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtkPW51bGx9dGhpcy5lbmFibGVUcmFuc2l0aW9uKGEudG8pLHRoaXMuY3NzKGEudG8pLHRoaXMuaXNUcmFuc2l0aW9uaW5nPSEwfTt2YXIgcj1cIm9wYWNpdHksXCIraChxLnRyYW5zZm9ybXx8XCJ0cmFuc2Zvcm1cIik7Zy5wcm90b3R5cGUuZW5hYmxlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3RoaXMuaXNUcmFuc2l0aW9uaW5nfHwodGhpcy5jc3Moe3RyYW5zaXRpb25Qcm9wZXJ0eTpyLHRyYW5zaXRpb25EdXJhdGlvbjp0aGlzLmxheW91dC5vcHRpb25zLnRyYW5zaXRpb25EdXJhdGlvbn0pLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG8sdGhpcywhMSkpfSxnLnByb3RvdHlwZS50cmFuc2l0aW9uPWcucHJvdG90eXBlW2s/XCJfdHJhbnNpdGlvblwiOlwiX25vblRyYW5zaXRpb25cIl0sZy5wcm90b3R5cGUub253ZWJraXRUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGEpe3RoaXMub250cmFuc2l0aW9uZW5kKGEpfSxnLnByb3RvdHlwZS5vbm90cmFuc2l0aW9uZW5kPWZ1bmN0aW9uKGEpe3RoaXMub250cmFuc2l0aW9uZW5kKGEpfTt2YXIgcz17XCItd2Via2l0LXRyYW5zZm9ybVwiOlwidHJhbnNmb3JtXCIsXCItbW96LXRyYW5zZm9ybVwiOlwidHJhbnNmb3JtXCIsXCItby10cmFuc2Zvcm1cIjpcInRyYW5zZm9ybVwifTtnLnByb3RvdHlwZS5vbnRyYW5zaXRpb25lbmQ9ZnVuY3Rpb24oYSl7aWYoYS50YXJnZXQ9PT10aGlzLmVsZW1lbnQpe3ZhciBiPXRoaXMuX3RyYW5zbixjPXNbYS5wcm9wZXJ0eU5hbWVdfHxhLnByb3BlcnR5TmFtZTtpZihkZWxldGUgYi5pbmdQcm9wZXJ0aWVzW2NdLGYoYi5pbmdQcm9wZXJ0aWVzKSYmdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpLGMgaW4gYi5jbGVhbiYmKHRoaXMuZWxlbWVudC5zdHlsZVthLnByb3BlcnR5TmFtZV09XCJcIixkZWxldGUgYi5jbGVhbltjXSksYyBpbiBiLm9uRW5kKXt2YXIgZD1iLm9uRW5kW2NdO2QuY2FsbCh0aGlzKSxkZWxldGUgYi5vbkVuZFtjXX10aGlzLmVtaXRFdmVudChcInRyYW5zaXRpb25FbmRcIixbdGhpc10pfX0sZy5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb249ZnVuY3Rpb24oKXt0aGlzLnJlbW92ZVRyYW5zaXRpb25TdHlsZXMoKSx0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihvLHRoaXMsITEpLHRoaXMuaXNUcmFuc2l0aW9uaW5nPSExfSxnLnByb3RvdHlwZS5fcmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKGEpe3ZhciBiPXt9O2Zvcih2YXIgYyBpbiBhKWJbY109XCJcIjt0aGlzLmNzcyhiKX07dmFyIHQ9e3RyYW5zaXRpb25Qcm9wZXJ0eTpcIlwiLHRyYW5zaXRpb25EdXJhdGlvbjpcIlwifTtyZXR1cm4gZy5wcm90b3R5cGUucmVtb3ZlVHJhbnNpdGlvblN0eWxlcz1mdW5jdGlvbigpe3RoaXMuY3NzKHQpfSxnLnByb3RvdHlwZS5yZW1vdmVFbGVtPWZ1bmN0aW9uKCl7dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KSx0aGlzLmNzcyh7ZGlzcGxheTpcIlwifSksdGhpcy5lbWl0RXZlbnQoXCJyZW1vdmVcIixbdGhpc10pfSxnLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oKXtpZigha3x8IXBhcnNlRmxvYXQodGhpcy5sYXlvdXQub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb24pKXJldHVybiB2b2lkIHRoaXMucmVtb3ZlRWxlbSgpO3ZhciBhPXRoaXM7dGhpcy5vbmNlKFwidHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7YS5yZW1vdmVFbGVtKCl9KSx0aGlzLmhpZGUoKX0sZy5wcm90b3R5cGUucmV2ZWFsPWZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXMuaXNIaWRkZW4sdGhpcy5jc3Moe2Rpc3BsYXk6XCJcIn0pO3ZhciBhPXRoaXMubGF5b3V0Lm9wdGlvbnMsYj17fSxjPXRoaXMuZ2V0SGlkZVJldmVhbFRyYW5zaXRpb25FbmRQcm9wZXJ0eShcInZpc2libGVTdHlsZVwiKTtiW2NdPXRoaXMub25SZXZlYWxUcmFuc2l0aW9uRW5kLHRoaXMudHJhbnNpdGlvbih7ZnJvbTphLmhpZGRlblN0eWxlLHRvOmEudmlzaWJsZVN0eWxlLGlzQ2xlYW5pbmc6ITAsb25UcmFuc2l0aW9uRW5kOmJ9KX0sZy5wcm90b3R5cGUub25SZXZlYWxUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKCl7dGhpcy5pc0hpZGRlbnx8dGhpcy5lbWl0RXZlbnQoXCJyZXZlYWxcIil9LGcucHJvdG90eXBlLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHk9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sYXlvdXQub3B0aW9uc1thXTtpZihiLm9wYWNpdHkpcmV0dXJuXCJvcGFjaXR5XCI7Zm9yKHZhciBjIGluIGIpcmV0dXJuIGN9LGcucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVuPSEwLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KTt2YXIgYT10aGlzLmxheW91dC5vcHRpb25zLGI9e30sYz10aGlzLmdldEhpZGVSZXZlYWxUcmFuc2l0aW9uRW5kUHJvcGVydHkoXCJoaWRkZW5TdHlsZVwiKTtiW2NdPXRoaXMub25IaWRlVHJhbnNpdGlvbkVuZCx0aGlzLnRyYW5zaXRpb24oe2Zyb206YS52aXNpYmxlU3R5bGUsdG86YS5oaWRkZW5TdHlsZSxpc0NsZWFuaW5nOiEwLG9uVHJhbnNpdGlvbkVuZDpifSl9LGcucHJvdG90eXBlLm9uSGlkZVRyYW5zaXRpb25FbmQ9ZnVuY3Rpb24oKXt0aGlzLmlzSGlkZGVuJiYodGhpcy5jc3Moe2Rpc3BsYXk6XCJub25lXCJ9KSx0aGlzLmVtaXRFdmVudChcImhpZGVcIikpfSxnLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5jc3Moe3Bvc2l0aW9uOlwiXCIsbGVmdDpcIlwiLHJpZ2h0OlwiXCIsdG9wOlwiXCIsYm90dG9tOlwiXCIsdHJhbnNpdGlvbjpcIlwiLHRyYW5zZm9ybTpcIlwifSl9LGd9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJvdXRsYXllci9vdXRsYXllclwiLFtcImV2ZW50aWUvZXZlbnRpZVwiLFwiZXZlbnRFbWl0dGVyL0V2ZW50RW1pdHRlclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsXCIuL2l0ZW1cIl0sZnVuY3Rpb24oYyxkLGUsZixnKXtyZXR1cm4gYihhLGMsZCxlLGYsZyl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKGEscmVxdWlyZShcImV2ZW50aWVcIikscmVxdWlyZShcIndvbGZ5ODctZXZlbnRlbWl0dGVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikscmVxdWlyZShcIi4vaXRlbVwiKSk6YS5PdXRsYXllcj1iKGEsYS5ldmVudGllLGEuRXZlbnRFbWl0dGVyLGEuZ2V0U2l6ZSxhLmZpenp5VUlVdGlscyxhLk91dGxheWVyLkl0ZW0pfSh3aW5kb3csZnVuY3Rpb24oYSxiLGMsZCxlLGYpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGcoYSxiKXt2YXIgYz1lLmdldFF1ZXJ5RWxlbWVudChhKTtpZighYylyZXR1cm4gdm9pZChoJiZoLmVycm9yKFwiQmFkIGVsZW1lbnQgZm9yIFwiK3RoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlK1wiOiBcIisoY3x8YSkpKTt0aGlzLmVsZW1lbnQ9YyxpJiYodGhpcy4kZWxlbWVudD1pKHRoaXMuZWxlbWVudCkpLHRoaXMub3B0aW9ucz1lLmV4dGVuZCh7fSx0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzKSx0aGlzLm9wdGlvbihiKTt2YXIgZD0rK2s7dGhpcy5lbGVtZW50Lm91dGxheWVyR1VJRD1kLGxbZF09dGhpcyx0aGlzLl9jcmVhdGUoKSx0aGlzLm9wdGlvbnMuaXNJbml0TGF5b3V0JiZ0aGlzLmxheW91dCgpfXZhciBoPWEuY29uc29sZSxpPWEualF1ZXJ5LGo9ZnVuY3Rpb24oKXt9LGs9MCxsPXt9O3JldHVybiBnLm5hbWVzcGFjZT1cIm91dGxheWVyXCIsZy5JdGVtPWYsZy5kZWZhdWx0cz17Y29udGFpbmVyU3R5bGU6e3Bvc2l0aW9uOlwicmVsYXRpdmVcIn0saXNJbml0TGF5b3V0OiEwLGlzT3JpZ2luTGVmdDohMCxpc09yaWdpblRvcDohMCxpc1Jlc2l6ZUJvdW5kOiEwLGlzUmVzaXppbmdDb250YWluZXI6ITAsdHJhbnNpdGlvbkR1cmF0aW9uOlwiMC40c1wiLGhpZGRlblN0eWxlOntvcGFjaXR5OjAsdHJhbnNmb3JtOlwic2NhbGUoMC4wMDEpXCJ9LHZpc2libGVTdHlsZTp7b3BhY2l0eToxLHRyYW5zZm9ybTpcInNjYWxlKDEpXCJ9fSxlLmV4dGVuZChnLnByb3RvdHlwZSxjLnByb3RvdHlwZSksZy5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKGEpe2UuZXh0ZW5kKHRoaXMub3B0aW9ucyxhKX0sZy5wcm90b3R5cGUuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMucmVsb2FkSXRlbXMoKSx0aGlzLnN0YW1wcz1bXSx0aGlzLnN0YW1wKHRoaXMub3B0aW9ucy5zdGFtcCksZS5leHRlbmQodGhpcy5lbGVtZW50LnN0eWxlLHRoaXMub3B0aW9ucy5jb250YWluZXJTdHlsZSksdGhpcy5vcHRpb25zLmlzUmVzaXplQm91bmQmJnRoaXMuYmluZFJlc2l6ZSgpfSxnLnByb3RvdHlwZS5yZWxvYWRJdGVtcz1mdW5jdGlvbigpe3RoaXMuaXRlbXM9dGhpcy5faXRlbWl6ZSh0aGlzLmVsZW1lbnQuY2hpbGRyZW4pfSxnLnByb3RvdHlwZS5faXRlbWl6ZT1mdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcy5fZmlsdGVyRmluZEl0ZW1FbGVtZW50cyhhKSxjPXRoaXMuY29uc3RydWN0b3IuSXRlbSxkPVtdLGU9MCxmPWIubGVuZ3RoO2Y+ZTtlKyspe3ZhciBnPWJbZV0saD1uZXcgYyhnLHRoaXMpO2QucHVzaChoKX1yZXR1cm4gZH0sZy5wcm90b3R5cGUuX2ZpbHRlckZpbmRJdGVtRWxlbWVudHM9ZnVuY3Rpb24oYSl7cmV0dXJuIGUuZmlsdGVyRmluZEVsZW1lbnRzKGEsdGhpcy5vcHRpb25zLml0ZW1TZWxlY3Rvcil9LGcucHJvdG90eXBlLmdldEl0ZW1FbGVtZW50cz1mdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLml0ZW1zLmxlbmd0aDtjPmI7YisrKWEucHVzaCh0aGlzLml0ZW1zW2JdLmVsZW1lbnQpO3JldHVybiBhfSxnLnByb3RvdHlwZS5sYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLl9yZXNldExheW91dCgpLHRoaXMuX21hbmFnZVN0YW1wcygpO3ZhciBhPXZvaWQgMCE9PXRoaXMub3B0aW9ucy5pc0xheW91dEluc3RhbnQ/dGhpcy5vcHRpb25zLmlzTGF5b3V0SW5zdGFudDohdGhpcy5faXNMYXlvdXRJbml0ZWQ7dGhpcy5sYXlvdXRJdGVtcyh0aGlzLml0ZW1zLGEpLHRoaXMuX2lzTGF5b3V0SW5pdGVkPSEwfSxnLnByb3RvdHlwZS5faW5pdD1nLnByb3RvdHlwZS5sYXlvdXQsZy5wcm90b3R5cGUuX3Jlc2V0TGF5b3V0PWZ1bmN0aW9uKCl7dGhpcy5nZXRTaXplKCl9LGcucHJvdG90eXBlLmdldFNpemU9ZnVuY3Rpb24oKXt0aGlzLnNpemU9ZCh0aGlzLmVsZW1lbnQpfSxnLnByb3RvdHlwZS5fZ2V0TWVhc3VyZW1lbnQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxmPXRoaXMub3B0aW9uc1thXTtmPyhcInN0cmluZ1wiPT10eXBlb2YgZj9jPXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGYpOmUuaXNFbGVtZW50KGYpJiYoYz1mKSx0aGlzW2FdPWM/ZChjKVtiXTpmKTp0aGlzW2FdPTB9LGcucHJvdG90eXBlLmxheW91dEl0ZW1zPWZ1bmN0aW9uKGEsYil7YT10aGlzLl9nZXRJdGVtc0ZvckxheW91dChhKSx0aGlzLl9sYXlvdXRJdGVtcyhhLGIpLHRoaXMuX3Bvc3RMYXlvdXQoKX0sZy5wcm90b3R5cGUuX2dldEl0ZW1zRm9yTGF5b3V0PWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTAsZD1hLmxlbmd0aDtkPmM7YysrKXt2YXIgZT1hW2NdO2UuaXNJZ25vcmVkfHxiLnB1c2goZSl9cmV0dXJuIGJ9LGcucHJvdG90eXBlLl9sYXlvdXRJdGVtcz1mdW5jdGlvbihhLGIpe2lmKHRoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJsYXlvdXRcIixhKSxhJiZhLmxlbmd0aCl7Zm9yKHZhciBjPVtdLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspe3ZhciBmPWFbZF0sZz10aGlzLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oZik7Zy5pdGVtPWYsZy5pc0luc3RhbnQ9Ynx8Zi5pc0xheW91dEluc3RhbnQsYy5wdXNoKGcpfXRoaXMuX3Byb2Nlc3NMYXlvdXRRdWV1ZShjKX19LGcucHJvdG90eXBlLl9nZXRJdGVtTGF5b3V0UG9zaXRpb249ZnVuY3Rpb24oKXtyZXR1cm57eDowLHk6MH19LGcucHJvdG90eXBlLl9wcm9jZXNzTGF5b3V0UXVldWU9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aDtjPmI7YisrKXt2YXIgZD1hW2JdO3RoaXMuX3Bvc2l0aW9uSXRlbShkLml0ZW0sZC54LGQueSxkLmlzSW5zdGFudCl9fSxnLnByb3RvdHlwZS5fcG9zaXRpb25JdGVtPWZ1bmN0aW9uKGEsYixjLGQpe2Q/YS5nb1RvKGIsYyk6YS5tb3ZlVG8oYixjKX0sZy5wcm90b3R5cGUuX3Bvc3RMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLnJlc2l6ZUNvbnRhaW5lcigpfSxnLnByb3RvdHlwZS5yZXNpemVDb250YWluZXI9ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuaXNSZXNpemluZ0NvbnRhaW5lcil7dmFyIGE9dGhpcy5fZ2V0Q29udGFpbmVyU2l6ZSgpO2EmJih0aGlzLl9zZXRDb250YWluZXJNZWFzdXJlKGEud2lkdGgsITApLHRoaXMuX3NldENvbnRhaW5lck1lYXN1cmUoYS5oZWlnaHQsITEpKX19LGcucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplPWosZy5wcm90b3R5cGUuX3NldENvbnRhaW5lck1lYXN1cmU9ZnVuY3Rpb24oYSxiKXtpZih2b2lkIDAhPT1hKXt2YXIgYz10aGlzLnNpemU7Yy5pc0JvcmRlckJveCYmKGErPWI/Yy5wYWRkaW5nTGVmdCtjLnBhZGRpbmdSaWdodCtjLmJvcmRlckxlZnRXaWR0aCtjLmJvcmRlclJpZ2h0V2lkdGg6Yy5wYWRkaW5nQm90dG9tK2MucGFkZGluZ1RvcCtjLmJvcmRlclRvcFdpZHRoK2MuYm9yZGVyQm90dG9tV2lkdGgpLGE9TWF0aC5tYXgoYSwwKSx0aGlzLmVsZW1lbnQuc3R5bGVbYj9cIndpZHRoXCI6XCJoZWlnaHRcIl09YStcInB4XCJ9fSxnLnByb3RvdHlwZS5fZW1pdENvbXBsZXRlT25JdGVtcz1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtlLmRpc3BhdGNoRXZlbnQoYStcIkNvbXBsZXRlXCIsbnVsbCxbYl0pfWZ1bmN0aW9uIGQoKXtnKyssZz09PWYmJmMoKX12YXIgZT10aGlzLGY9Yi5sZW5ndGg7aWYoIWJ8fCFmKXJldHVybiB2b2lkIGMoKTtmb3IodmFyIGc9MCxoPTAsaT1iLmxlbmd0aDtpPmg7aCsrKXt2YXIgaj1iW2hdO2oub25jZShhLGQpfX0sZy5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yj9bYl0uY29uY2F0KGMpOmM7aWYodGhpcy5lbWl0RXZlbnQoYSxkKSxpKWlmKHRoaXMuJGVsZW1lbnQ9dGhpcy4kZWxlbWVudHx8aSh0aGlzLmVsZW1lbnQpLGIpe3ZhciBlPWkuRXZlbnQoYik7ZS50eXBlPWEsdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUsYyl9ZWxzZSB0aGlzLiRlbGVtZW50LnRyaWdnZXIoYSxjKX0sZy5wcm90b3R5cGUuaWdub3JlPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZ2V0SXRlbShhKTtiJiYoYi5pc0lnbm9yZWQ9ITApfSxnLnByb3RvdHlwZS51bmlnbm9yZT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldEl0ZW0oYSk7YiYmZGVsZXRlIGIuaXNJZ25vcmVkfSxnLnByb3RvdHlwZS5zdGFtcD1mdW5jdGlvbihhKXtpZihhPXRoaXMuX2ZpbmQoYSkpe3RoaXMuc3RhbXBzPXRoaXMuc3RhbXBzLmNvbmNhdChhKTtmb3IodmFyIGI9MCxjPWEubGVuZ3RoO2M+YjtiKyspe3ZhciBkPWFbYl07dGhpcy5pZ25vcmUoZCl9fX0sZy5wcm90b3R5cGUudW5zdGFtcD1mdW5jdGlvbihhKXtpZihhPXRoaXMuX2ZpbmQoYSkpZm9yKHZhciBiPTAsYz1hLmxlbmd0aDtjPmI7YisrKXt2YXIgZD1hW2JdO2UucmVtb3ZlRnJvbSh0aGlzLnN0YW1wcyxkKSx0aGlzLnVuaWdub3JlKGQpfX0sZy5wcm90b3R5cGUuX2ZpbmQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KFwic3RyaW5nXCI9PXR5cGVvZiBhJiYoYT10aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhKSksYT1lLm1ha2VBcnJheShhKSk6dm9pZCAwfSxnLnByb3RvdHlwZS5fbWFuYWdlU3RhbXBzPWZ1bmN0aW9uKCl7aWYodGhpcy5zdGFtcHMmJnRoaXMuc3RhbXBzLmxlbmd0aCl7dGhpcy5fZ2V0Qm91bmRpbmdSZWN0KCk7Zm9yKHZhciBhPTAsYj10aGlzLnN0YW1wcy5sZW5ndGg7Yj5hO2ErKyl7dmFyIGM9dGhpcy5zdGFtcHNbYV07dGhpcy5fbWFuYWdlU3RhbXAoYyl9fX0sZy5wcm90b3R5cGUuX2dldEJvdW5kaW5nUmVjdD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxiPXRoaXMuc2l6ZTt0aGlzLl9ib3VuZGluZ1JlY3Q9e2xlZnQ6YS5sZWZ0K2IucGFkZGluZ0xlZnQrYi5ib3JkZXJMZWZ0V2lkdGgsdG9wOmEudG9wK2IucGFkZGluZ1RvcCtiLmJvcmRlclRvcFdpZHRoLHJpZ2h0OmEucmlnaHQtKGIucGFkZGluZ1JpZ2h0K2IuYm9yZGVyUmlnaHRXaWR0aCksYm90dG9tOmEuYm90dG9tLShiLnBhZGRpbmdCb3R0b20rYi5ib3JkZXJCb3R0b21XaWR0aCl9fSxnLnByb3RvdHlwZS5fbWFuYWdlU3RhbXA9aixnLnByb3RvdHlwZS5fZ2V0RWxlbWVudE9mZnNldD1mdW5jdGlvbihhKXt2YXIgYj1hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9dGhpcy5fYm91bmRpbmdSZWN0LGU9ZChhKSxmPXtsZWZ0OmIubGVmdC1jLmxlZnQtZS5tYXJnaW5MZWZ0LHRvcDpiLnRvcC1jLnRvcC1lLm1hcmdpblRvcCxyaWdodDpjLnJpZ2h0LWIucmlnaHQtZS5tYXJnaW5SaWdodCxib3R0b206Yy5ib3R0b20tYi5ib3R0b20tZS5tYXJnaW5Cb3R0b219O3JldHVybiBmfSxnLnByb3RvdHlwZS5oYW5kbGVFdmVudD1mdW5jdGlvbihhKXt2YXIgYj1cIm9uXCIrYS50eXBlO3RoaXNbYl0mJnRoaXNbYl0oYSl9LGcucHJvdG90eXBlLmJpbmRSZXNpemU9ZnVuY3Rpb24oKXt0aGlzLmlzUmVzaXplQm91bmR8fChiLmJpbmQoYSxcInJlc2l6ZVwiLHRoaXMpLHRoaXMuaXNSZXNpemVCb3VuZD0hMCl9LGcucHJvdG90eXBlLnVuYmluZFJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNSZXNpemVCb3VuZCYmYi51bmJpbmQoYSxcInJlc2l6ZVwiLHRoaXMpLHRoaXMuaXNSZXNpemVCb3VuZD0hMX0sZy5wcm90b3R5cGUub25yZXNpemU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Yi5yZXNpemUoKSxkZWxldGUgYi5yZXNpemVUaW1lb3V0fXRoaXMucmVzaXplVGltZW91dCYmY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7dmFyIGI9dGhpczt0aGlzLnJlc2l6ZVRpbWVvdXQ9c2V0VGltZW91dChhLDEwMCl9LGcucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNSZXNpemVCb3VuZCYmdGhpcy5uZWVkc1Jlc2l6ZUxheW91dCgpJiZ0aGlzLmxheW91dCgpfSxnLnByb3RvdHlwZS5uZWVkc1Jlc2l6ZUxheW91dD1mdW5jdGlvbigpe3ZhciBhPWQodGhpcy5lbGVtZW50KSxiPXRoaXMuc2l6ZSYmYTtyZXR1cm4gYiYmYS5pbm5lcldpZHRoIT09dGhpcy5zaXplLmlubmVyV2lkdGh9LGcucHJvdG90eXBlLmFkZEl0ZW1zPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2l0ZW1pemUoYSk7cmV0dXJuIGIubGVuZ3RoJiYodGhpcy5pdGVtcz10aGlzLml0ZW1zLmNvbmNhdChiKSksYn0sZy5wcm90b3R5cGUuYXBwZW5kZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGRJdGVtcyhhKTtiLmxlbmd0aCYmKHRoaXMubGF5b3V0SXRlbXMoYiwhMCksdGhpcy5yZXZlYWwoYikpfSxnLnByb3RvdHlwZS5wcmVwZW5kZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faXRlbWl6ZShhKTtpZihiLmxlbmd0aCl7dmFyIGM9dGhpcy5pdGVtcy5zbGljZSgwKTt0aGlzLml0ZW1zPWIuY29uY2F0KGMpLHRoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCksdGhpcy5sYXlvdXRJdGVtcyhiLCEwKSx0aGlzLnJldmVhbChiKSx0aGlzLmxheW91dEl0ZW1zKGMpfX0sZy5wcm90b3R5cGUucmV2ZWFsPWZ1bmN0aW9uKGEpe3RoaXMuX2VtaXRDb21wbGV0ZU9uSXRlbXMoXCJyZXZlYWxcIixhKTtmb3IodmFyIGI9YSYmYS5sZW5ndGgsYz0wO2ImJmI+YztjKyspe3ZhciBkPWFbY107ZC5yZXZlYWwoKX19LGcucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYSl7dGhpcy5fZW1pdENvbXBsZXRlT25JdGVtcyhcImhpZGVcIixhKTtmb3IodmFyIGI9YSYmYS5sZW5ndGgsYz0wO2ImJmI+YztjKyspe3ZhciBkPWFbY107ZC5oaWRlKCl9fSxnLnByb3RvdHlwZS5yZXZlYWxJdGVtRWxlbWVudHM9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRJdGVtcyhhKTt0aGlzLnJldmVhbChiKX0sZy5wcm90b3R5cGUuaGlkZUl0ZW1FbGVtZW50cz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmdldEl0ZW1zKGEpO3RoaXMuaGlkZShiKX0sZy5wcm90b3R5cGUuZ2V0SXRlbT1mdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMuaXRlbXMubGVuZ3RoO2M+YjtiKyspe3ZhciBkPXRoaXMuaXRlbXNbYl07aWYoZC5lbGVtZW50PT09YSlyZXR1cm4gZH19LGcucHJvdG90eXBlLmdldEl0ZW1zPWZ1bmN0aW9uKGEpe2E9ZS5tYWtlQXJyYXkoYSk7Zm9yKHZhciBiPVtdLGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspe3ZhciBmPWFbY10sZz10aGlzLmdldEl0ZW0oZik7ZyYmYi5wdXNoKGcpfXJldHVybiBifSxnLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRJdGVtcyhhKTtpZih0aGlzLl9lbWl0Q29tcGxldGVPbkl0ZW1zKFwicmVtb3ZlXCIsYiksYiYmYi5sZW5ndGgpZm9yKHZhciBjPTAsZD1iLmxlbmd0aDtkPmM7YysrKXt2YXIgZj1iW2NdO2YucmVtb3ZlKCksZS5yZW1vdmVGcm9tKHRoaXMuaXRlbXMsZil9fSxnLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lbGVtZW50LnN0eWxlO2EuaGVpZ2h0PVwiXCIsYS5wb3NpdGlvbj1cIlwiLGEud2lkdGg9XCJcIjtmb3IodmFyIGI9MCxjPXRoaXMuaXRlbXMubGVuZ3RoO2M+YjtiKyspe3ZhciBkPXRoaXMuaXRlbXNbYl07ZC5kZXN0cm95KCl9dGhpcy51bmJpbmRSZXNpemUoKTt2YXIgZT10aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlEO2RlbGV0ZSBsW2VdLGRlbGV0ZSB0aGlzLmVsZW1lbnQub3V0bGF5ZXJHVUlELGkmJmkucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsdGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UpfSxnLmRhdGE9ZnVuY3Rpb24oYSl7YT1lLmdldFF1ZXJ5RWxlbWVudChhKTt2YXIgYj1hJiZhLm91dGxheWVyR1VJRDtyZXR1cm4gYiYmbFtiXX0sZy5jcmVhdGU9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7Zy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIE9iamVjdC5jcmVhdGU/Yy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShnLnByb3RvdHlwZSk6ZS5leHRlbmQoYy5wcm90b3R5cGUsZy5wcm90b3R5cGUpLGMucHJvdG90eXBlLmNvbnN0cnVjdG9yPWMsYy5kZWZhdWx0cz1lLmV4dGVuZCh7fSxnLmRlZmF1bHRzKSxlLmV4dGVuZChjLmRlZmF1bHRzLGIpLGMucHJvdG90eXBlLnNldHRpbmdzPXt9LGMubmFtZXNwYWNlPWEsYy5kYXRhPWcuZGF0YSxjLkl0ZW09ZnVuY3Rpb24oKXtmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYy5JdGVtLnByb3RvdHlwZT1uZXcgZixlLmh0bWxJbml0KGMsYSksaSYmaS5icmlkZ2V0JiZpLmJyaWRnZXQoYSxjKSxjfSxnLkl0ZW09ZixnfSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS9qcy9pdGVtXCIsW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIl0sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YihyZXF1aXJlKFwib3V0bGF5ZXJcIikpOihhLklzb3RvcGU9YS5Jc290b3BlfHx7fSxhLklzb3RvcGUuSXRlbT1iKGEuT3V0bGF5ZXIpKX0od2luZG93LGZ1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoKXthLkl0ZW0uYXBwbHkodGhpcyxhcmd1bWVudHMpfWIucHJvdG90eXBlPW5ldyBhLkl0ZW0sYi5wcm90b3R5cGUuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuaWQ9dGhpcy5sYXlvdXQuaXRlbUdVSUQrKyxhLkl0ZW0ucHJvdG90eXBlLl9jcmVhdGUuY2FsbCh0aGlzKSx0aGlzLnNvcnREYXRhPXt9fSxiLnByb3RvdHlwZS51cGRhdGVTb3J0RGF0YT1mdW5jdGlvbigpe2lmKCF0aGlzLmlzSWdub3JlZCl7dGhpcy5zb3J0RGF0YS5pZD10aGlzLmlkLHRoaXMuc29ydERhdGFbXCJvcmlnaW5hbC1vcmRlclwiXT10aGlzLmlkLHRoaXMuc29ydERhdGEucmFuZG9tPU1hdGgucmFuZG9tKCk7dmFyIGE9dGhpcy5sYXlvdXQub3B0aW9ucy5nZXRTb3J0RGF0YSxiPXRoaXMubGF5b3V0Ll9zb3J0ZXJzO2Zvcih2YXIgYyBpbiBhKXt2YXIgZD1iW2NdO3RoaXMuc29ydERhdGFbY109ZCh0aGlzLmVsZW1lbnQsdGhpcyl9fX07dmFyIGM9Yi5wcm90b3R5cGUuZGVzdHJveTtyZXR1cm4gYi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe2MuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuY3NzKHtkaXNwbGF5OlwiXCJ9KX0sYn0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVcIixbXCJnZXQtc2l6ZS9nZXQtc2l6ZVwiLFwib3V0bGF5ZXIvb3V0bGF5ZXJcIl0sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YihyZXF1aXJlKFwiZ2V0LXNpemVcIikscmVxdWlyZShcIm91dGxheWVyXCIpKTooYS5Jc290b3BlPWEuSXNvdG9wZXx8e30sYS5Jc290b3BlLkxheW91dE1vZGU9YihhLmdldFNpemUsYS5PdXRsYXllcikpfSh3aW5kb3csZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBjKGEpe3RoaXMuaXNvdG9wZT1hLGEmJih0aGlzLm9wdGlvbnM9YS5vcHRpb25zW3RoaXMubmFtZXNwYWNlXSx0aGlzLmVsZW1lbnQ9YS5lbGVtZW50LHRoaXMuaXRlbXM9YS5maWx0ZXJlZEl0ZW1zLHRoaXMuc2l6ZT1hLnNpemUpfXJldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGIucHJvdG90eXBlW2FdLmFwcGx5KHRoaXMuaXNvdG9wZSxhcmd1bWVudHMpfX1mb3IodmFyIGQ9W1wiX3Jlc2V0TGF5b3V0XCIsXCJfZ2V0SXRlbUxheW91dFBvc2l0aW9uXCIsXCJfbWFuYWdlU3RhbXBcIixcIl9nZXRDb250YWluZXJTaXplXCIsXCJfZ2V0RWxlbWVudE9mZnNldFwiLFwibmVlZHNSZXNpemVMYXlvdXRcIl0sZT0wLGY9ZC5sZW5ndGg7Zj5lO2UrKyl7dmFyIGc9ZFtlXTtjLnByb3RvdHlwZVtnXT1hKGcpfX0oKSxjLnByb3RvdHlwZS5uZWVkc1ZlcnRpY2FsUmVzaXplTGF5b3V0PWZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzLmlzb3RvcGUuZWxlbWVudCksYz10aGlzLmlzb3RvcGUuc2l6ZSYmYjtyZXR1cm4gYyYmYi5pbm5lckhlaWdodCE9dGhpcy5pc290b3BlLnNpemUuaW5uZXJIZWlnaHR9LGMucHJvdG90eXBlLl9nZXRNZWFzdXJlbWVudD1mdW5jdGlvbigpe3RoaXMuaXNvdG9wZS5fZ2V0TWVhc3VyZW1lbnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxjLnByb3RvdHlwZS5nZXRDb2x1bW5XaWR0aD1mdW5jdGlvbigpe3RoaXMuZ2V0U2VnbWVudFNpemUoXCJjb2x1bW5cIixcIldpZHRoXCIpfSxjLnByb3RvdHlwZS5nZXRSb3dIZWlnaHQ9ZnVuY3Rpb24oKXt0aGlzLmdldFNlZ21lbnRTaXplKFwicm93XCIsXCJIZWlnaHRcIil9LGMucHJvdG90eXBlLmdldFNlZ21lbnRTaXplPWZ1bmN0aW9uKGEsYil7dmFyIGM9YStiLGQ9XCJvdXRlclwiK2I7aWYodGhpcy5fZ2V0TWVhc3VyZW1lbnQoYyxkKSwhdGhpc1tjXSl7dmFyIGU9dGhpcy5nZXRGaXJzdEl0ZW1TaXplKCk7dGhpc1tjXT1lJiZlW2RdfHx0aGlzLmlzb3RvcGUuc2l6ZVtcImlubmVyXCIrYl19fSxjLnByb3RvdHlwZS5nZXRGaXJzdEl0ZW1TaXplPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXNbMF07cmV0dXJuIGImJmIuZWxlbWVudCYmYShiLmVsZW1lbnQpfSxjLnByb3RvdHlwZS5sYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLmlzb3RvcGUubGF5b3V0LmFwcGx5KHRoaXMuaXNvdG9wZSxhcmd1bWVudHMpfSxjLnByb3RvdHlwZS5nZXRTaXplPWZ1bmN0aW9uKCl7dGhpcy5pc290b3BlLmdldFNpemUoKSx0aGlzLnNpemU9dGhpcy5pc290b3BlLnNpemV9LGMubW9kZXM9e30sYy5jcmVhdGU9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBkKCl7Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIGQucHJvdG90eXBlPW5ldyBjLGImJihkLm9wdGlvbnM9YiksZC5wcm90b3R5cGUubmFtZXNwYWNlPWEsYy5tb2Rlc1thXT1kLGR9LGN9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJtYXNvbnJ5L21hc29ucnlcIixbXCJvdXRsYXllci9vdXRsYXllclwiLFwiZ2V0LXNpemUvZ2V0LXNpemVcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCJdLGIpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIocmVxdWlyZShcIm91dGxheWVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikpOmEuTWFzb25yeT1iKGEuT3V0bGF5ZXIsYS5nZXRTaXplLGEuZml6enlVSVV0aWxzKX0od2luZG93LGZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLmNyZWF0ZShcIm1hc29ucnlcIik7cmV0dXJuIGQucHJvdG90eXBlLl9yZXNldExheW91dD1mdW5jdGlvbigpe3RoaXMuZ2V0U2l6ZSgpLHRoaXMuX2dldE1lYXN1cmVtZW50KFwiY29sdW1uV2lkdGhcIixcIm91dGVyV2lkdGhcIiksdGhpcy5fZ2V0TWVhc3VyZW1lbnQoXCJndXR0ZXJcIixcIm91dGVyV2lkdGhcIiksdGhpcy5tZWFzdXJlQ29sdW1ucygpO3ZhciBhPXRoaXMuY29scztmb3IodGhpcy5jb2xZcz1bXTthLS07KXRoaXMuY29sWXMucHVzaCgwKTt0aGlzLm1heFk9MH0sZC5wcm90b3R5cGUubWVhc3VyZUNvbHVtbnM9ZnVuY3Rpb24oKXtpZih0aGlzLmdldENvbnRhaW5lcldpZHRoKCksIXRoaXMuY29sdW1uV2lkdGgpe3ZhciBhPXRoaXMuaXRlbXNbMF0sYz1hJiZhLmVsZW1lbnQ7dGhpcy5jb2x1bW5XaWR0aD1jJiZiKGMpLm91dGVyV2lkdGh8fHRoaXMuY29udGFpbmVyV2lkdGh9dmFyIGQ9dGhpcy5jb2x1bW5XaWR0aCs9dGhpcy5ndXR0ZXIsZT10aGlzLmNvbnRhaW5lcldpZHRoK3RoaXMuZ3V0dGVyLGY9ZS9kLGc9ZC1lJWQsaD1nJiYxPmc/XCJyb3VuZFwiOlwiZmxvb3JcIjtmPU1hdGhbaF0oZiksdGhpcy5jb2xzPU1hdGgubWF4KGYsMSl9LGQucHJvdG90eXBlLmdldENvbnRhaW5lcldpZHRoPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmlzRml0V2lkdGg/dGhpcy5lbGVtZW50LnBhcmVudE5vZGU6dGhpcy5lbGVtZW50LGM9YihhKTt0aGlzLmNvbnRhaW5lcldpZHRoPWMmJmMuaW5uZXJXaWR0aH0sZC5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXthLmdldFNpemUoKTt2YXIgYj1hLnNpemUub3V0ZXJXaWR0aCV0aGlzLmNvbHVtbldpZHRoLGQ9YiYmMT5iP1wicm91bmRcIjpcImNlaWxcIixlPU1hdGhbZF0oYS5zaXplLm91dGVyV2lkdGgvdGhpcy5jb2x1bW5XaWR0aCk7ZT1NYXRoLm1pbihlLHRoaXMuY29scyk7Zm9yKHZhciBmPXRoaXMuX2dldENvbEdyb3VwKGUpLGc9TWF0aC5taW4uYXBwbHkoTWF0aCxmKSxoPWMuaW5kZXhPZihmLGcpLGk9e3g6dGhpcy5jb2x1bW5XaWR0aCpoLHk6Z30saj1nK2Euc2l6ZS5vdXRlckhlaWdodCxrPXRoaXMuY29scysxLWYubGVuZ3RoLGw9MDtrPmw7bCsrKXRoaXMuY29sWXNbaCtsXT1qO3JldHVybiBpfSxkLnByb3RvdHlwZS5fZ2V0Q29sR3JvdXA9ZnVuY3Rpb24oYSl7aWYoMj5hKXJldHVybiB0aGlzLmNvbFlzO2Zvcih2YXIgYj1bXSxjPXRoaXMuY29scysxLWEsZD0wO2M+ZDtkKyspe3ZhciBlPXRoaXMuY29sWXMuc2xpY2UoZCxkK2EpO2JbZF09TWF0aC5tYXguYXBwbHkoTWF0aCxlKX1yZXR1cm4gYn0sZC5wcm90b3R5cGUuX21hbmFnZVN0YW1wPWZ1bmN0aW9uKGEpe3ZhciBjPWIoYSksZD10aGlzLl9nZXRFbGVtZW50T2Zmc2V0KGEpLGU9dGhpcy5vcHRpb25zLmlzT3JpZ2luTGVmdD9kLmxlZnQ6ZC5yaWdodCxmPWUrYy5vdXRlcldpZHRoLGc9TWF0aC5mbG9vcihlL3RoaXMuY29sdW1uV2lkdGgpO2c9TWF0aC5tYXgoMCxnKTt2YXIgaD1NYXRoLmZsb29yKGYvdGhpcy5jb2x1bW5XaWR0aCk7aC09ZiV0aGlzLmNvbHVtbldpZHRoPzA6MSxoPU1hdGgubWluKHRoaXMuY29scy0xLGgpO2Zvcih2YXIgaT0odGhpcy5vcHRpb25zLmlzT3JpZ2luVG9wP2QudG9wOmQuYm90dG9tKStjLm91dGVySGVpZ2h0LGo9ZztoPj1qO2orKyl0aGlzLmNvbFlzW2pdPU1hdGgubWF4KGksdGhpcy5jb2xZc1tqXSl9LGQucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7dGhpcy5tYXhZPU1hdGgubWF4LmFwcGx5KE1hdGgsdGhpcy5jb2xZcyk7dmFyIGE9e2hlaWdodDp0aGlzLm1heFl9O3JldHVybiB0aGlzLm9wdGlvbnMuaXNGaXRXaWR0aCYmKGEud2lkdGg9dGhpcy5fZ2V0Q29udGFpbmVyRml0V2lkdGgoKSksYX0sZC5wcm90b3R5cGUuX2dldENvbnRhaW5lckZpdFdpZHRoPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj10aGlzLmNvbHM7LS1iJiYwPT09dGhpcy5jb2xZc1tiXTspYSsrO3JldHVybih0aGlzLmNvbHMtYSkqdGhpcy5jb2x1bW5XaWR0aC10aGlzLmd1dHRlcn0sZC5wcm90b3R5cGUubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNvbnRhaW5lcldpZHRoO3JldHVybiB0aGlzLmdldENvbnRhaW5lcldpZHRoKCksYSE9PXRoaXMuY29udGFpbmVyV2lkdGh9LGR9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJpc290b3BlL2pzL2xheW91dC1tb2Rlcy9tYXNvbnJ5XCIsW1wiLi4vbGF5b3V0LW1vZGVcIixcIm1hc29ucnkvbWFzb25yeVwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSxyZXF1aXJlKFwibWFzb25yeS1sYXlvdXRcIikpOmIoYS5Jc290b3BlLkxheW91dE1vZGUsYS5NYXNvbnJ5KX0od2luZG93LGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYyhhLGIpe2Zvcih2YXIgYyBpbiBiKWFbY109YltjXTtyZXR1cm4gYX12YXIgZD1hLmNyZWF0ZShcIm1hc29ucnlcIiksZT1kLnByb3RvdHlwZS5fZ2V0RWxlbWVudE9mZnNldCxmPWQucHJvdG90eXBlLmxheW91dCxnPWQucHJvdG90eXBlLl9nZXRNZWFzdXJlbWVudDtcclxuYyhkLnByb3RvdHlwZSxiLnByb3RvdHlwZSksZC5wcm90b3R5cGUuX2dldEVsZW1lbnRPZmZzZXQ9ZSxkLnByb3RvdHlwZS5sYXlvdXQ9ZixkLnByb3RvdHlwZS5fZ2V0TWVhc3VyZW1lbnQ9Zzt2YXIgaD1kLnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucztkLnByb3RvdHlwZS5tZWFzdXJlQ29sdW1ucz1mdW5jdGlvbigpe3RoaXMuaXRlbXM9dGhpcy5pc290b3BlLmZpbHRlcmVkSXRlbXMsaC5jYWxsKHRoaXMpfTt2YXIgaT1kLnByb3RvdHlwZS5fbWFuYWdlU3RhbXA7cmV0dXJuIGQucHJvdG90eXBlLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbigpe3RoaXMub3B0aW9ucy5pc09yaWdpbkxlZnQ9dGhpcy5pc290b3BlLm9wdGlvbnMuaXNPcmlnaW5MZWZ0LHRoaXMub3B0aW9ucy5pc09yaWdpblRvcD10aGlzLmlzb3RvcGUub3B0aW9ucy5pc09yaWdpblRvcCxpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZH0pLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsW1wiLi4vbGF5b3V0LW1vZGVcIl0sYik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YihyZXF1aXJlKFwiLi4vbGF5b3V0LW1vZGVcIikpOmIoYS5Jc290b3BlLkxheW91dE1vZGUpfSh3aW5kb3csZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9YS5jcmVhdGUoXCJmaXRSb3dzXCIpO3JldHVybiBiLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLng9MCx0aGlzLnk9MCx0aGlzLm1heFk9MCx0aGlzLl9nZXRNZWFzdXJlbWVudChcImd1dHRlclwiLFwib3V0ZXJXaWR0aFwiKX0sYi5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXthLmdldFNpemUoKTt2YXIgYj1hLnNpemUub3V0ZXJXaWR0aCt0aGlzLmd1dHRlcixjPXRoaXMuaXNvdG9wZS5zaXplLmlubmVyV2lkdGgrdGhpcy5ndXR0ZXI7MCE9PXRoaXMueCYmYit0aGlzLng+YyYmKHRoaXMueD0wLHRoaXMueT10aGlzLm1heFkpO3ZhciBkPXt4OnRoaXMueCx5OnRoaXMueX07cmV0dXJuIHRoaXMubWF4WT1NYXRoLm1heCh0aGlzLm1heFksdGhpcy55K2Euc2l6ZS5vdXRlckhlaWdodCksdGhpcy54Kz1iLGR9LGIucHJvdG90eXBlLl9nZXRDb250YWluZXJTaXplPWZ1bmN0aW9uKCl7cmV0dXJue2hlaWdodDp0aGlzLm1heFl9fSxifSksZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwiaXNvdG9wZS9qcy9sYXlvdXQtbW9kZXMvdmVydGljYWxcIixbXCIuLi9sYXlvdXQtbW9kZVwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCIuLi9sYXlvdXQtbW9kZVwiKSk6YihhLklzb3RvcGUuTGF5b3V0TW9kZSl9KHdpbmRvdyxmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1hLmNyZWF0ZShcInZlcnRpY2FsXCIse2hvcml6b250YWxBbGlnbm1lbnQ6MH0pO3JldHVybiBiLnByb3RvdHlwZS5fcmVzZXRMYXlvdXQ9ZnVuY3Rpb24oKXt0aGlzLnk9MH0sYi5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXthLmdldFNpemUoKTt2YXIgYj0odGhpcy5pc290b3BlLnNpemUuaW5uZXJXaWR0aC1hLnNpemUub3V0ZXJXaWR0aCkqdGhpcy5vcHRpb25zLmhvcml6b250YWxBbGlnbm1lbnQsYz10aGlzLnk7cmV0dXJuIHRoaXMueSs9YS5zaXplLm91dGVySGVpZ2h0LHt4OmIseTpjfX0sYi5wcm90b3R5cGUuX2dldENvbnRhaW5lclNpemU9ZnVuY3Rpb24oKXtyZXR1cm57aGVpZ2h0OnRoaXMueX19LGJ9KSxmdW5jdGlvbihhLGIpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wib3V0bGF5ZXIvb3V0bGF5ZXJcIixcImdldC1zaXplL2dldC1zaXplXCIsXCJtYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3JcIixcImZpenp5LXVpLXV0aWxzL3V0aWxzXCIsXCJpc290b3BlL2pzL2l0ZW1cIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVcIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL21hc29ucnlcIixcImlzb3RvcGUvanMvbGF5b3V0LW1vZGVzL2ZpdC1yb3dzXCIsXCJpc290b3BlL2pzL2xheW91dC1tb2Rlcy92ZXJ0aWNhbFwiXSxmdW5jdGlvbihjLGQsZSxmLGcsaCl7cmV0dXJuIGIoYSxjLGQsZSxmLGcsaCl9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKGEscmVxdWlyZShcIm91dGxheWVyXCIpLHJlcXVpcmUoXCJnZXQtc2l6ZVwiKSxyZXF1aXJlKFwiZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvclwiKSxyZXF1aXJlKFwiZml6enktdWktdXRpbHNcIikscmVxdWlyZShcIi4vaXRlbVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZXMvbWFzb25yeVwiKSxyZXF1aXJlKFwiLi9sYXlvdXQtbW9kZXMvZml0LXJvd3NcIikscmVxdWlyZShcIi4vbGF5b3V0LW1vZGVzL3ZlcnRpY2FsXCIpKTphLklzb3RvcGU9YihhLGEuT3V0bGF5ZXIsYS5nZXRTaXplLGEubWF0Y2hlc1NlbGVjdG9yLGEuZml6enlVSVV0aWxzLGEuSXNvdG9wZS5JdGVtLGEuSXNvdG9wZS5MYXlvdXRNb2RlKX0od2luZG93LGZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe2Z1bmN0aW9uIGgoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoO2Y+ZTtlKyspe3ZhciBnPWFbZV0saD1jLnNvcnREYXRhW2ddLGk9ZC5zb3J0RGF0YVtnXTtpZihoPml8fGk+aCl7dmFyIGo9dm9pZCAwIT09YltnXT9iW2ddOmIsaz1qPzE6LTE7cmV0dXJuKGg+aT8xOi0xKSprfX1yZXR1cm4gMH19dmFyIGk9YS5qUXVlcnksaj1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxrPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxsPWsudGV4dENvbnRlbnQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGV4dENvbnRlbnR9OmZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVyVGV4dH0sbT1iLmNyZWF0ZShcImlzb3RvcGVcIix7bGF5b3V0TW9kZTpcIm1hc29ucnlcIixpc0pRdWVyeUZpbHRlcmluZzohMCxzb3J0QXNjZW5kaW5nOiEwfSk7bS5JdGVtPWYsbS5MYXlvdXRNb2RlPWcsbS5wcm90b3R5cGUuX2NyZWF0ZT1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCx0aGlzLl9zb3J0ZXJzPXt9LHRoaXMuX2dldFNvcnRlcnMoKSxiLnByb3RvdHlwZS5fY3JlYXRlLmNhbGwodGhpcyksdGhpcy5tb2Rlcz17fSx0aGlzLmZpbHRlcmVkSXRlbXM9dGhpcy5pdGVtcyx0aGlzLnNvcnRIaXN0b3J5PVtcIm9yaWdpbmFsLW9yZGVyXCJdO2Zvcih2YXIgYSBpbiBnLm1vZGVzKXRoaXMuX2luaXRMYXlvdXRNb2RlKGEpfSxtLnByb3RvdHlwZS5yZWxvYWRJdGVtcz1mdW5jdGlvbigpe3RoaXMuaXRlbUdVSUQ9MCxiLnByb3RvdHlwZS5yZWxvYWRJdGVtcy5jYWxsKHRoaXMpfSxtLnByb3RvdHlwZS5faXRlbWl6ZT1mdW5jdGlvbigpe2Zvcih2YXIgYT1iLnByb3RvdHlwZS5faXRlbWl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyksYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKyl7dmFyIGU9YVtjXTtlLmlkPXRoaXMuaXRlbUdVSUQrK31yZXR1cm4gdGhpcy5fdXBkYXRlSXRlbXNTb3J0RGF0YShhKSxhfSxtLnByb3RvdHlwZS5faW5pdExheW91dE1vZGU9ZnVuY3Rpb24oYSl7dmFyIGI9Zy5tb2Rlc1thXSxjPXRoaXMub3B0aW9uc1thXXx8e307dGhpcy5vcHRpb25zW2FdPWIub3B0aW9ucz9lLmV4dGVuZChiLm9wdGlvbnMsYyk6Yyx0aGlzLm1vZGVzW2FdPW5ldyBiKHRoaXMpfSxtLnByb3RvdHlwZS5sYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5faXNMYXlvdXRJbml0ZWQmJnRoaXMub3B0aW9ucy5pc0luaXRMYXlvdXQ/dm9pZCB0aGlzLmFycmFuZ2UoKTp2b2lkIHRoaXMuX2xheW91dCgpfSxtLnByb3RvdHlwZS5fbGF5b3V0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZ2V0SXNJbnN0YW50KCk7dGhpcy5fcmVzZXRMYXlvdXQoKSx0aGlzLl9tYW5hZ2VTdGFtcHMoKSx0aGlzLmxheW91dEl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyxhKSx0aGlzLl9pc0xheW91dEluaXRlZD0hMH0sbS5wcm90b3R5cGUuYXJyYW5nZT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7ZC5yZXZlYWwoYy5uZWVkUmV2ZWFsKSxkLmhpZGUoYy5uZWVkSGlkZSl9dGhpcy5vcHRpb24oYSksdGhpcy5fZ2V0SXNJbnN0YW50KCk7dmFyIGM9dGhpcy5fZmlsdGVyKHRoaXMuaXRlbXMpO3RoaXMuZmlsdGVyZWRJdGVtcz1jLm1hdGNoZXM7dmFyIGQ9dGhpczt0aGlzLl9iaW5kQXJyYW5nZUNvbXBsZXRlKCksdGhpcy5faXNJbnN0YW50P3RoaXMuX25vVHJhbnNpdGlvbihiKTpiKCksdGhpcy5fc29ydCgpLHRoaXMuX2xheW91dCgpfSxtLnByb3RvdHlwZS5faW5pdD1tLnByb3RvdHlwZS5hcnJhbmdlLG0ucHJvdG90eXBlLl9nZXRJc0luc3RhbnQ9ZnVuY3Rpb24oKXt2YXIgYT12b2lkIDAhPT10aGlzLm9wdGlvbnMuaXNMYXlvdXRJbnN0YW50P3RoaXMub3B0aW9ucy5pc0xheW91dEluc3RhbnQ6IXRoaXMuX2lzTGF5b3V0SW5pdGVkO3JldHVybiB0aGlzLl9pc0luc3RhbnQ9YSxhfSxtLnByb3RvdHlwZS5fYmluZEFycmFuZ2VDb21wbGV0ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtiJiZjJiZkJiZlLmRpc3BhdGNoRXZlbnQoXCJhcnJhbmdlQ29tcGxldGVcIixudWxsLFtlLmZpbHRlcmVkSXRlbXNdKX12YXIgYixjLGQsZT10aGlzO3RoaXMub25jZShcImxheW91dENvbXBsZXRlXCIsZnVuY3Rpb24oKXtiPSEwLGEoKX0pLHRoaXMub25jZShcImhpZGVDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7Yz0hMCxhKCl9KSx0aGlzLm9uY2UoXCJyZXZlYWxDb21wbGV0ZVwiLGZ1bmN0aW9uKCl7ZD0hMCxhKCl9KX0sbS5wcm90b3R5cGUuX2ZpbHRlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMuZmlsdGVyO2I9Ynx8XCIqXCI7Zm9yKHZhciBjPVtdLGQ9W10sZT1bXSxmPXRoaXMuX2dldEZpbHRlclRlc3QoYiksZz0wLGg9YS5sZW5ndGg7aD5nO2crKyl7dmFyIGk9YVtnXTtpZighaS5pc0lnbm9yZWQpe3ZhciBqPWYoaSk7aiYmYy5wdXNoKGkpLGomJmkuaXNIaWRkZW4/ZC5wdXNoKGkpOmp8fGkuaXNIaWRkZW58fGUucHVzaChpKX19cmV0dXJue21hdGNoZXM6YyxuZWVkUmV2ZWFsOmQsbmVlZEhpZGU6ZX19LG0ucHJvdG90eXBlLl9nZXRGaWx0ZXJUZXN0PWZ1bmN0aW9uKGEpe3JldHVybiBpJiZ0aGlzLm9wdGlvbnMuaXNKUXVlcnlGaWx0ZXJpbmc/ZnVuY3Rpb24oYil7cmV0dXJuIGkoYi5lbGVtZW50KS5pcyhhKX06XCJmdW5jdGlvblwiPT10eXBlb2YgYT9mdW5jdGlvbihiKXtyZXR1cm4gYShiLmVsZW1lbnQpfTpmdW5jdGlvbihiKXtyZXR1cm4gZChiLmVsZW1lbnQsYSl9fSxtLnByb3RvdHlwZS51cGRhdGVTb3J0RGF0YT1mdW5jdGlvbihhKXt2YXIgYjthPyhhPWUubWFrZUFycmF5KGEpLGI9dGhpcy5nZXRJdGVtcyhhKSk6Yj10aGlzLml0ZW1zLHRoaXMuX2dldFNvcnRlcnMoKSx0aGlzLl91cGRhdGVJdGVtc1NvcnREYXRhKGIpfSxtLnByb3RvdHlwZS5fZ2V0U29ydGVycz1mdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucy5nZXRTb3J0RGF0YTtmb3IodmFyIGIgaW4gYSl7dmFyIGM9YVtiXTt0aGlzLl9zb3J0ZXJzW2JdPW4oYyl9fSxtLnByb3RvdHlwZS5fdXBkYXRlSXRlbXNTb3J0RGF0YT1mdW5jdGlvbihhKXtmb3IodmFyIGI9YSYmYS5sZW5ndGgsYz0wO2ImJmI+YztjKyspe3ZhciBkPWFbY107ZC51cGRhdGVTb3J0RGF0YSgpfX07dmFyIG49ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBhO3ZhciBjPWooYSkuc3BsaXQoXCIgXCIpLGQ9Y1swXSxlPWQubWF0Y2goL15cXFsoLispXFxdJC8pLGY9ZSYmZVsxXSxnPWIoZixkKSxoPW0uc29ydERhdGFQYXJzZXJzW2NbMV1dO3JldHVybiBhPWg/ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmgoZyhhKSl9OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZnKGEpfX1mdW5jdGlvbiBiKGEsYil7dmFyIGM7cmV0dXJuIGM9YT9mdW5jdGlvbihiKXtyZXR1cm4gYi5nZXRBdHRyaWJ1dGUoYSl9OmZ1bmN0aW9uKGEpe3ZhciBjPWEucXVlcnlTZWxlY3RvcihiKTtyZXR1cm4gYyYmbChjKX19cmV0dXJuIGF9KCk7bS5zb3J0RGF0YVBhcnNlcnM9e3BhcnNlSW50OmZ1bmN0aW9uKGEpe3JldHVybiBwYXJzZUludChhLDEwKX0scGFyc2VGbG9hdDpmdW5jdGlvbihhKXtyZXR1cm4gcGFyc2VGbG9hdChhKX19LG0ucHJvdG90eXBlLl9zb3J0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLnNvcnRCeTtpZihhKXt2YXIgYj1bXS5jb25jYXQuYXBwbHkoYSx0aGlzLnNvcnRIaXN0b3J5KSxjPWgoYix0aGlzLm9wdGlvbnMuc29ydEFzY2VuZGluZyk7dGhpcy5maWx0ZXJlZEl0ZW1zLnNvcnQoYyksYSE9dGhpcy5zb3J0SGlzdG9yeVswXSYmdGhpcy5zb3J0SGlzdG9yeS51bnNoaWZ0KGEpfX0sbS5wcm90b3R5cGUuX21vZGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMubGF5b3V0TW9kZSxiPXRoaXMubW9kZXNbYV07aWYoIWIpdGhyb3cgbmV3IEVycm9yKFwiTm8gbGF5b3V0IG1vZGU6IFwiK2EpO3JldHVybiBiLm9wdGlvbnM9dGhpcy5vcHRpb25zW2FdLGJ9LG0ucHJvdG90eXBlLl9yZXNldExheW91dD1mdW5jdGlvbigpe2IucHJvdG90eXBlLl9yZXNldExheW91dC5jYWxsKHRoaXMpLHRoaXMuX21vZGUoKS5fcmVzZXRMYXlvdXQoKX0sbS5wcm90b3R5cGUuX2dldEl0ZW1MYXlvdXRQb3NpdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fbW9kZSgpLl9nZXRJdGVtTGF5b3V0UG9zaXRpb24oYSl9LG0ucHJvdG90eXBlLl9tYW5hZ2VTdGFtcD1mdW5jdGlvbihhKXt0aGlzLl9tb2RlKCkuX21hbmFnZVN0YW1wKGEpfSxtLnByb3RvdHlwZS5fZ2V0Q29udGFpbmVyU2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9tb2RlKCkuX2dldENvbnRhaW5lclNpemUoKX0sbS5wcm90b3R5cGUubmVlZHNSZXNpemVMYXlvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbW9kZSgpLm5lZWRzUmVzaXplTGF5b3V0KCl9LG0ucHJvdG90eXBlLmFwcGVuZGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYWRkSXRlbXMoYSk7aWYoYi5sZW5ndGgpe3ZhciBjPXRoaXMuX2ZpbHRlclJldmVhbEFkZGVkKGIpO3RoaXMuZmlsdGVyZWRJdGVtcz10aGlzLmZpbHRlcmVkSXRlbXMuY29uY2F0KGMpfX0sbS5wcm90b3R5cGUucHJlcGVuZGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2l0ZW1pemUoYSk7aWYoYi5sZW5ndGgpe3RoaXMuX3Jlc2V0TGF5b3V0KCksdGhpcy5fbWFuYWdlU3RhbXBzKCk7dmFyIGM9dGhpcy5fZmlsdGVyUmV2ZWFsQWRkZWQoYik7dGhpcy5sYXlvdXRJdGVtcyh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuZmlsdGVyZWRJdGVtcz1jLmNvbmNhdCh0aGlzLmZpbHRlcmVkSXRlbXMpLHRoaXMuaXRlbXM9Yi5jb25jYXQodGhpcy5pdGVtcyl9fSxtLnByb3RvdHlwZS5fZmlsdGVyUmV2ZWFsQWRkZWQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5fZmlsdGVyKGEpO3JldHVybiB0aGlzLmhpZGUoYi5uZWVkSGlkZSksdGhpcy5yZXZlYWwoYi5tYXRjaGVzKSx0aGlzLmxheW91dEl0ZW1zKGIubWF0Y2hlcywhMCksYi5tYXRjaGVzfSxtLnByb3RvdHlwZS5pbnNlcnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hZGRJdGVtcyhhKTtpZihiLmxlbmd0aCl7dmFyIGMsZCxlPWIubGVuZ3RoO2ZvcihjPTA7ZT5jO2MrKylkPWJbY10sdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGQuZWxlbWVudCk7dmFyIGY9dGhpcy5fZmlsdGVyKGIpLm1hdGNoZXM7Zm9yKGM9MDtlPmM7YysrKWJbY10uaXNMYXlvdXRJbnN0YW50PSEwO2Zvcih0aGlzLmFycmFuZ2UoKSxjPTA7ZT5jO2MrKylkZWxldGUgYltjXS5pc0xheW91dEluc3RhbnQ7dGhpcy5yZXZlYWwoZil9fTt2YXIgbz1tLnByb3RvdHlwZS5yZW1vdmU7cmV0dXJuIG0ucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbihhKXthPWUubWFrZUFycmF5KGEpO3ZhciBiPXRoaXMuZ2V0SXRlbXMoYSk7by5jYWxsKHRoaXMsYSk7dmFyIGM9YiYmYi5sZW5ndGg7aWYoYylmb3IodmFyIGQ9MDtjPmQ7ZCsrKXt2YXIgZj1iW2RdO2UucmVtb3ZlRnJvbSh0aGlzLmZpbHRlcmVkSXRlbXMsZil9fSxtLnByb3RvdHlwZS5zaHVmZmxlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTAsYj10aGlzLml0ZW1zLmxlbmd0aDtiPmE7YSsrKXt2YXIgYz10aGlzLml0ZW1zW2FdO2Muc29ydERhdGEucmFuZG9tPU1hdGgucmFuZG9tKCl9dGhpcy5vcHRpb25zLnNvcnRCeT1cInJhbmRvbVwiLHRoaXMuX3NvcnQoKSx0aGlzLl9sYXlvdXQoKX0sbS5wcm90b3R5cGUuX25vVHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMudHJhbnNpdGlvbkR1cmF0aW9uO3RoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249MDt2YXIgYz1hLmNhbGwodGhpcyk7cmV0dXJuIHRoaXMub3B0aW9ucy50cmFuc2l0aW9uRHVyYXRpb249YixjfSxtLnByb3RvdHlwZS5nZXRGaWx0ZXJlZEl0ZW1FbGVtZW50cz1mdW5jdGlvbigpe2Zvcih2YXIgYT1bXSxiPTAsYz10aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoO2M+YjtiKyspYS5wdXNoKHRoaXMuZmlsdGVyZWRJdGVtc1tiXS5lbGVtZW50KTtyZXR1cm4gYX0sbX0pOyIsIi8qXHJcbiAqICBqUXVlcnkgT3dsQ2Fyb3VzZWwgdjEuMy4yXHJcbiAqXHJcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTMgQmFydG9zeiBXb2pjaWVjaG93c2tpXHJcbiAqICBodHRwOi8vd3d3Lm93bGdyYXBoaWMuY29tL293bGNhcm91c2VsL1xyXG4gKlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgTUlUXHJcbiAqXHJcbiAqL1xyXG5cclxuLypKUyBMaW50IGhlbHBlcnM6ICovXHJcbi8qZ2xvYmFsIGRyYWdNb3ZlOiBmYWxzZSwgZHJhZ0VuZDogZmFsc2UsICQsIGpRdWVyeSwgYWxlcnQsIHdpbmRvdywgZG9jdW1lbnQgKi9cclxuLypqc2xpbnQgbm9tZW46IHRydWUsIGNvbnRpbnVlOnRydWUgKi9cclxuXHJcbmlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICBPYmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGZ1bmN0aW9uIEYoKSB7fVxyXG4gICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xyXG4gICAgICAgIHJldHVybiBuZXcgRigpO1xyXG4gICAgfTtcclxufVxyXG4oZnVuY3Rpb24gKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcclxuXHJcbiAgICB2YXIgQ2Fyb3VzZWwgPSB7XHJcbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uIChvcHRpb25zLCBlbCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBiYXNlLiRlbGVtID0gJChlbCk7XHJcbiAgICAgICAgICAgIGJhc2Uub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCAkLmZuLm93bENhcm91c2VsLm9wdGlvbnMsIGJhc2UuJGVsZW0uZGF0YSgpLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UudXNlck9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBiYXNlLmxvYWRDb250ZW50KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9hZENvbnRlbnQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcywgdXJsO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSwgY29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Uub3B0aW9ucy5qc29uU3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLmpzb25TdWNjZXNzLmFwcGx5KHRoaXMsIFtkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSBpbiBkYXRhLm93bCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5vd2wuaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gZGF0YS5vd2xbaV0uaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBiYXNlLiRlbGVtLmh0bWwoY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYXNlLmxvZ0luKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZS5vcHRpb25zLmJlZm9yZUluaXQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLmJlZm9yZUluaXQuYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlLm9wdGlvbnMuanNvblBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGJhc2Uub3B0aW9ucy5qc29uUGF0aDtcclxuICAgICAgICAgICAgICAgICQuZ2V0SlNPTih1cmwsIGdldERhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5sb2dJbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbG9nSW4gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0uZGF0YShcIm93bC1vcmlnaW5hbFN0eWxlc1wiLCBiYXNlLiRlbGVtLmF0dHIoXCJzdHlsZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKFwib3dsLW9yaWdpbmFsQ2xhc3Nlc1wiLCBiYXNlLiRlbGVtLmF0dHIoXCJjbGFzc1wiKSk7XHJcblxyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLmNzcyh7b3BhY2l0eTogMH0pO1xyXG4gICAgICAgICAgICBiYXNlLm9yaWduYWxJdGVtcyA9IGJhc2Uub3B0aW9ucy5pdGVtcztcclxuICAgICAgICAgICAgYmFzZS5jaGVja0Jyb3dzZXIoKTtcclxuICAgICAgICAgICAgYmFzZS53cmFwcGVyV2lkdGggPSAwO1xyXG4gICAgICAgICAgICBiYXNlLmNoZWNrVmlzaWJsZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGJhc2Uuc2V0VmFycygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldFZhcnMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGJhc2UuJGVsZW0uY2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtyZXR1cm4gZmFsc2U7IH1cclxuICAgICAgICAgICAgYmFzZS5iYXNlQ2xhc3MoKTtcclxuICAgICAgICAgICAgYmFzZS5ldmVudFR5cGVzKCk7XHJcbiAgICAgICAgICAgIGJhc2UuJHVzZXJJdGVtcyA9IGJhc2UuJGVsZW0uY2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgYmFzZS5pdGVtc0Ftb3VudCA9IGJhc2UuJHVzZXJJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGJhc2Uud3JhcEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIGJhc2UuJG93bEl0ZW1zID0gYmFzZS4kZWxlbS5maW5kKFwiLm93bC1pdGVtXCIpO1xyXG4gICAgICAgICAgICBiYXNlLiRvd2xXcmFwcGVyID0gYmFzZS4kZWxlbS5maW5kKFwiLm93bC13cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICBiYXNlLnBsYXlEaXJlY3Rpb24gPSBcIm5leHRcIjtcclxuICAgICAgICAgICAgYmFzZS5wcmV2SXRlbSA9IDA7XHJcbiAgICAgICAgICAgIGJhc2UucHJldkFyciA9IFswXTtcclxuICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSA9IDA7XHJcbiAgICAgICAgICAgIGJhc2UuY3VzdG9tRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGJhc2Uub25TdGFydHVwKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb25TdGFydHVwIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UudXBkYXRlSXRlbXMoKTtcclxuICAgICAgICAgICAgYmFzZS5jYWxjdWxhdGVBbGwoKTtcclxuICAgICAgICAgICAgYmFzZS5idWlsZENvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgIGJhc2UudXBkYXRlQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgYmFzZS5yZXNwb25zZSgpO1xyXG4gICAgICAgICAgICBiYXNlLm1vdmVFdmVudHMoKTtcclxuICAgICAgICAgICAgYmFzZS5zdG9wT25Ib3ZlcigpO1xyXG4gICAgICAgICAgICBiYXNlLm93bFN0YXR1cygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy50cmFuc2l0aW9uU3R5bGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnRyYW5zaXRpb25UeXBlcyhiYXNlLm9wdGlvbnMudHJhbnNpdGlvblN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLmF1dG9QbGF5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuYXV0b1BsYXkgPSA1MDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS4kZWxlbS5maW5kKFwiLm93bC13cmFwcGVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYmFzZS4kZWxlbS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLndhdGNoVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kZWxlbS5jc3MoXCJvcGFjaXR5XCIsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2Uub25zdGFydHVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhc2UuZWFjaE1vdmVVcGRhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlLm9wdGlvbnMuYWZ0ZXJJbml0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5hZnRlckluaXQuYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVhY2hNb3ZlVXBkYXRlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLmxhenlMb2FkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmxhenlMb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5hdXRvSGVpZ2h0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmF1dG9IZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLm9uVmlzaWJsZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Uub3B0aW9ucy5hZnRlckFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuYWZ0ZXJBY3Rpb24uYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZVZhcnMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlLm9wdGlvbnMuYmVmb3JlVXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5iZWZvcmVVcGRhdGUuYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLndhdGNoVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICBiYXNlLnVwZGF0ZUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIGJhc2UuY2FsY3VsYXRlQWxsKCk7XHJcbiAgICAgICAgICAgIGJhc2UudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgYmFzZS51cGRhdGVDb250cm9scygpO1xyXG4gICAgICAgICAgICBiYXNlLmVhY2hNb3ZlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZS5vcHRpb25zLmFmdGVyVXBkYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5hZnRlclVwZGF0ZS5hcHBseSh0aGlzLCBbYmFzZS4kZWxlbV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVsb2FkIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UudXBkYXRlVmFycygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB3YXRjaFZpc2liaWxpdHkgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLiRlbGVtLmlzKFwiOnZpc2libGVcIikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLiRlbGVtLmNzcyh7b3BhY2l0eTogMH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoYmFzZS5hdXRvUGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGJhc2UuY2hlY2tWaXNpYmxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLmNoZWNrVmlzaWJsZSA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS4kZWxlbS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLiRlbGVtLmFuaW1hdGUoe29wYWNpdHk6IDF9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGJhc2UuY2hlY2tWaXNpYmxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB3cmFwSXRlbXMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgYmFzZS4kdXNlckl0ZW1zLndyYXBBbGwoXCI8ZGl2IGNsYXNzPVxcXCJvd2wtd3JhcHBlclxcXCI+XCIpLndyYXAoXCI8ZGl2IGNsYXNzPVxcXCJvd2wtaXRlbVxcXCI+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLmZpbmQoXCIub3dsLXdyYXBwZXJcIikud3JhcChcIjxkaXYgY2xhc3M9XFxcIm93bC13cmFwcGVyLW91dGVyXFxcIj5cIik7XHJcbiAgICAgICAgICAgIGJhc2Uud3JhcHBlck91dGVyID0gYmFzZS4kZWxlbS5maW5kKFwiLm93bC13cmFwcGVyLW91dGVyXCIpO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBiYXNlQ2xhc3MgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGhhc0Jhc2VDbGFzcyA9IGJhc2UuJGVsZW0uaGFzQ2xhc3MoYmFzZS5vcHRpb25zLmJhc2VDbGFzcyksXHJcbiAgICAgICAgICAgICAgICBoYXNUaGVtZUNsYXNzID0gYmFzZS4kZWxlbS5oYXNDbGFzcyhiYXNlLm9wdGlvbnMudGhlbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXNCYXNlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuJGVsZW0uYWRkQ2xhc3MoYmFzZS5vcHRpb25zLmJhc2VDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaGFzVGhlbWVDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kZWxlbS5hZGRDbGFzcyhiYXNlLm9wdGlvbnMudGhlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdXBkYXRlSXRlbXMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcywgd2lkdGgsIGk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnJlc3BvbnNpdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5zaW5nbGVJdGVtID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXMgPSBiYXNlLm9yaWduYWxJdGVtcyA9IDE7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXNDdXN0b20gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5pdGVtc0Rlc2t0b3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5pdGVtc0Rlc2t0b3BTbWFsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zVGFibGV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXNUYWJsZXRTbWFsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zTW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdpZHRoID0gJChiYXNlLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VXaWR0aCkud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IChiYXNlLm9wdGlvbnMuaXRlbXNEZXNrdG9wWzBdIHx8IGJhc2Uub3JpZ25hbEl0ZW1zKSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zID0gYmFzZS5vcmlnbmFsSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5pdGVtc0N1c3RvbSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vUmVvcmRlciBhcnJheSBieSBzY3JlZW4gc2l6ZVxyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zQ3VzdG9tLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtyZXR1cm4gYVswXSAtIGJbMF07IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBiYXNlLm9wdGlvbnMuaXRlbXNDdXN0b20ubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLml0ZW1zQ3VzdG9tW2ldWzBdIDw9IHdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5pdGVtcyA9IGJhc2Uub3B0aW9ucy5pdGVtc0N1c3RvbVtpXVsxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8PSBiYXNlLm9wdGlvbnMuaXRlbXNEZXNrdG9wWzBdICYmIGJhc2Uub3B0aW9ucy5pdGVtc0Rlc2t0b3AgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zID0gYmFzZS5vcHRpb25zLml0ZW1zRGVza3RvcFsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPD0gYmFzZS5vcHRpb25zLml0ZW1zRGVza3RvcFNtYWxsWzBdICYmIGJhc2Uub3B0aW9ucy5pdGVtc0Rlc2t0b3BTbWFsbCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXMgPSBiYXNlLm9wdGlvbnMuaXRlbXNEZXNrdG9wU21hbGxbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoIDw9IGJhc2Uub3B0aW9ucy5pdGVtc1RhYmxldFswXSAmJiBiYXNlLm9wdGlvbnMuaXRlbXNUYWJsZXQgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLml0ZW1zID0gYmFzZS5vcHRpb25zLml0ZW1zVGFibGV0WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA8PSBiYXNlLm9wdGlvbnMuaXRlbXNUYWJsZXRTbWFsbFswXSAmJiBiYXNlLm9wdGlvbnMuaXRlbXNUYWJsZXRTbWFsbCAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXMgPSBiYXNlLm9wdGlvbnMuaXRlbXNUYWJsZXRTbWFsbFsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPD0gYmFzZS5vcHRpb25zLml0ZW1zTW9iaWxlWzBdICYmIGJhc2Uub3B0aW9ucy5pdGVtc01vYmlsZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXMgPSBiYXNlLm9wdGlvbnMuaXRlbXNNb2JpbGVbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaWYgbnVtYmVyIG9mIGl0ZW1zIGlzIGxlc3MgdGhhbiBkZWNsYXJlZFxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLml0ZW1zID4gYmFzZS5pdGVtc0Ftb3VudCAmJiBiYXNlLm9wdGlvbnMuaXRlbXNTY2FsZVVwID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuaXRlbXMgPSBiYXNlLml0ZW1zQW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVzcG9uc2UgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHNtYWxsRGVsYXksXHJcbiAgICAgICAgICAgICAgICBsYXN0V2luZG93V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnJlc3BvbnNpdmUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0V2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UucmVzaXplciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gbGFzdFdpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5hdXRvUGxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoYmFzZS5hdXRvUGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChzbWFsbERlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICBzbWFsbERlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0V2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS51cGRhdGVWYXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgYmFzZS5vcHRpb25zLnJlc3BvbnNpdmVSZWZyZXNoUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoYmFzZS5yZXNpemVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1cGRhdGVQb3NpdGlvbiA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBiYXNlLmp1bXBUbyhiYXNlLmN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5hdXRvUGxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuY2hlY2tBcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXBwZW5kSXRlbXNTaXplcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgcm91bmRQYWdlcyA9IDAsXHJcbiAgICAgICAgICAgICAgICBsYXN0SXRlbSA9IGJhc2UuaXRlbXNBbW91bnQgLSBiYXNlLm9wdGlvbnMuaXRlbXM7XHJcblxyXG4gICAgICAgICAgICBiYXNlLiRvd2xJdGVtcy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICR0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgLmNzcyh7XCJ3aWR0aFwiOiBiYXNlLml0ZW1XaWR0aH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRhdGEoXCJvd2wtaXRlbVwiLCBOdW1iZXIoaW5kZXgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSBiYXNlLm9wdGlvbnMuaXRlbXMgPT09IDAgfHwgaW5kZXggPT09IGxhc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoaW5kZXggPiBsYXN0SXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRQYWdlcyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR0aGlzLmRhdGEoXCJvd2wtcm91bmRQYWdlc1wiLCByb3VuZFBhZ2VzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXBwZW5kV3JhcHBlclNpemVzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IGJhc2UuJG93bEl0ZW1zLmxlbmd0aCAqIGJhc2UuaXRlbVdpZHRoO1xyXG5cclxuICAgICAgICAgICAgYmFzZS4kb3dsV3JhcHBlci5jc3Moe1xyXG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aCAqIDIsXHJcbiAgICAgICAgICAgICAgICBcImxlZnRcIjogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYmFzZS5hcHBlbmRJdGVtc1NpemVzKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY2FsY3VsYXRlQWxsIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UuY2FsY3VsYXRlV2lkdGgoKTtcclxuICAgICAgICAgICAgYmFzZS5hcHBlbmRXcmFwcGVyU2l6ZXMoKTtcclxuICAgICAgICAgICAgYmFzZS5sb29wcygpO1xyXG4gICAgICAgICAgICBiYXNlLm1heCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNhbGN1bGF0ZVdpZHRoIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UuaXRlbVdpZHRoID0gTWF0aC5yb3VuZChiYXNlLiRlbGVtLndpZHRoKCkgLyBiYXNlLm9wdGlvbnMuaXRlbXMpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1heCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbWF4aW11bSA9ICgoYmFzZS5pdGVtc0Ftb3VudCAqIGJhc2UuaXRlbVdpZHRoKSAtIGJhc2Uub3B0aW9ucy5pdGVtcyAqIGJhc2UuaXRlbVdpZHRoKSAqIC0xO1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLml0ZW1zID4gYmFzZS5pdGVtc0Ftb3VudCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5tYXhpbXVtSXRlbSA9IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtID0gMDtcclxuICAgICAgICAgICAgICAgIGJhc2UubWF4aW11bVBpeGVscyA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm1heGltdW1JdGVtID0gYmFzZS5pdGVtc0Ftb3VudCAtIGJhc2Uub3B0aW9ucy5pdGVtcztcclxuICAgICAgICAgICAgICAgIGJhc2UubWF4aW11bVBpeGVscyA9IG1heGltdW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1heGltdW07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWluIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsb29wcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgcHJldiA9IDAsXHJcbiAgICAgICAgICAgICAgICBlbFdpZHRoID0gMCxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgICAgICAgcm91bmRQYWdlTnVtO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5wb3NpdGlvbnNJbkFycmF5ID0gWzBdO1xyXG4gICAgICAgICAgICBiYXNlLnBhZ2VzSW5BcnJheSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJhc2UuaXRlbXNBbW91bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgZWxXaWR0aCArPSBiYXNlLml0ZW1XaWR0aDtcclxuICAgICAgICAgICAgICAgIGJhc2UucG9zaXRpb25zSW5BcnJheS5wdXNoKC1lbFdpZHRoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnNjcm9sbFBlclBhZ2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gJChiYXNlLiRvd2xJdGVtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRQYWdlTnVtID0gaXRlbS5kYXRhKFwib3dsLXJvdW5kUGFnZXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdW5kUGFnZU51bSAhPT0gcHJldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLnBhZ2VzSW5BcnJheVtwcmV2XSA9IGJhc2UucG9zaXRpb25zSW5BcnJheVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldiA9IHJvdW5kUGFnZU51bTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBidWlsZENvbnRyb2xzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMubmF2aWdhdGlvbiA9PT0gdHJ1ZSB8fCBiYXNlLm9wdGlvbnMucGFnaW5hdGlvbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vd2xDb250cm9scyA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJvd2wtY29udHJvbHNcXFwiLz5cIikudG9nZ2xlQ2xhc3MoXCJjbGlja2FibGVcIiwgIWJhc2UuYnJvd3Nlci5pc1RvdWNoKS5hcHBlbmRUbyhiYXNlLiRlbGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnBhZ2luYXRpb24gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuYnVpbGRQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5uYXZpZ2F0aW9uID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmJ1aWxkQnV0dG9ucygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnVpbGRCdXR0b25zIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zV3JhcHBlciA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJvd2wtYnV0dG9uc1xcXCIvPlwiKTtcclxuICAgICAgICAgICAgYmFzZS5vd2xDb250cm9scy5hcHBlbmQoYnV0dG9uc1dyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5idXR0b25QcmV2ID0gJChcIjxkaXYvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIgOiBcIm93bC1wcmV2XCIsXHJcbiAgICAgICAgICAgICAgICBcImh0bWxcIiA6IGJhc2Uub3B0aW9ucy5uYXZpZ2F0aW9uVGV4dFswXSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5idXR0b25OZXh0ID0gJChcIjxkaXYvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICBcImNsYXNzXCIgOiBcIm93bC1uZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcImh0bWxcIiA6IGJhc2Uub3B0aW9ucy5uYXZpZ2F0aW9uVGV4dFsxXSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uc1dyYXBwZXJcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoYmFzZS5idXR0b25QcmV2KVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZChiYXNlLmJ1dHRvbk5leHQpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uc1dyYXBwZXIub24oXCJ0b3VjaHN0YXJ0Lm93bENvbnRyb2xzIG1vdXNlZG93bi5vd2xDb250cm9sc1wiLCBcImRpdltjbGFzc149XFxcIm93bFxcXCJdXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zV3JhcHBlci5vbihcInRvdWNoZW5kLm93bENvbnRyb2xzIG1vdXNldXAub3dsQ29udHJvbHNcIiwgXCJkaXZbY2xhc3NePVxcXCJvd2xcXFwiXVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm93bC1uZXh0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UucHJldigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBidWlsZFBhZ2luYXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGJhc2UucGFnaW5hdGlvbldyYXBwZXIgPSAkKFwiPGRpdiBjbGFzcz1cXFwib3dsLXBhZ2luYXRpb25cXFwiLz5cIik7XHJcbiAgICAgICAgICAgIGJhc2Uub3dsQ29udHJvbHMuYXBwZW5kKGJhc2UucGFnaW5hdGlvbldyYXBwZXIpO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5wYWdpbmF0aW9uV3JhcHBlci5vbihcInRvdWNoZW5kLm93bENvbnRyb2xzIG1vdXNldXAub3dsQ29udHJvbHNcIiwgXCIub3dsLXBhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcigkKHRoaXMpLmRhdGEoXCJvd2wtcGFnZVwiKSkgIT09IGJhc2UuY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmdvVG8oTnVtYmVyKCQodGhpcykuZGF0YShcIm93bC1wYWdlXCIpKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZVBhZ2luYXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIsXHJcbiAgICAgICAgICAgICAgICBsYXN0UGFnZSxcclxuICAgICAgICAgICAgICAgIGxhc3RJdGVtLFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25CdXR0b24sXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQnV0dG9uSW5uZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnBhZ2luYXRpb24gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJhc2UucGFnaW5hdGlvbldyYXBwZXIuaHRtbChcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBsYXN0UGFnZSA9IGJhc2UuaXRlbXNBbW91bnQgLSBiYXNlLml0ZW1zQW1vdW50ICUgYmFzZS5vcHRpb25zLml0ZW1zO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJhc2UuaXRlbXNBbW91bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgJSBiYXNlLm9wdGlvbnMuaXRlbXMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RQYWdlID09PSBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtID0gYmFzZS5pdGVtc0Ftb3VudCAtIGJhc2Uub3B0aW9ucy5pdGVtcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkJ1dHRvbiA9ICQoXCI8ZGl2Lz5cIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCIgOiBcIm93bC1wYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uQnV0dG9uSW5uZXIgPSAkKFwiPHNwYW4+PC9zcGFuPlwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBiYXNlLm9wdGlvbnMucGFnaW5hdGlvbk51bWJlcnMgPT09IHRydWUgPyBjb3VudGVyIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBiYXNlLm9wdGlvbnMucGFnaW5hdGlvbk51bWJlcnMgPT09IHRydWUgPyBcIm93bC1udW1iZXJzXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkJ1dHRvbi5hcHBlbmQocGFnaW5hdGlvbkJ1dHRvbklubmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkJ1dHRvbi5kYXRhKFwib3dsLXBhZ2VcIiwgbGFzdFBhZ2UgPT09IGkgPyBsYXN0SXRlbSA6IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25CdXR0b24uZGF0YShcIm93bC1yb3VuZFBhZ2VzXCIsIGNvdW50ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXNlLnBhZ2luYXRpb25XcmFwcGVyLmFwcGVuZChwYWdpbmF0aW9uQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLmNoZWNrUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tQYWdpbmF0aW9uIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMucGFnaW5hdGlvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLnBhZ2luYXRpb25XcmFwcGVyLmZpbmQoXCIub3dsLXBhZ2VcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKFwib3dsLXJvdW5kUGFnZXNcIikgPT09ICQoYmFzZS4kb3dsSXRlbXNbYmFzZS5jdXJyZW50SXRlbV0pLmRhdGEoXCJvd2wtcm91bmRQYWdlc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UucGFnaW5hdGlvbldyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIub3dsLXBhZ2VcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNoZWNrTmF2aWdhdGlvbiA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5uYXZpZ2F0aW9uID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMucmV3aW5kTmF2ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuY3VycmVudEl0ZW0gPT09IDAgJiYgYmFzZS5tYXhpbXVtSXRlbSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuYnV0dG9uUHJldi5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuYnV0dG9uTmV4dC5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmN1cnJlbnRJdGVtID09PSAwICYmIGJhc2UubWF4aW11bUl0ZW0gIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmJ1dHRvblByZXYuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmJ1dHRvbk5leHQucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5jdXJyZW50SXRlbSA9PT0gYmFzZS5tYXhpbXVtSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuYnV0dG9uUHJldi5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuYnV0dG9uTmV4dC5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYXNlLmN1cnJlbnRJdGVtICE9PSAwICYmIGJhc2UuY3VycmVudEl0ZW0gIT09IGJhc2UubWF4aW11bUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmJ1dHRvblByZXYucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmJ1dHRvbk5leHQucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVwZGF0ZUNvbnRyb2xzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICBiYXNlLmNoZWNrTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5vd2xDb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5pdGVtcyA+PSBiYXNlLml0ZW1zQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5vd2xDb250cm9scy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2Uub3dsQ29udHJvbHMuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVzdHJveUNvbnRyb2xzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm93bENvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm93bENvbnRyb2xzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbmV4dCA6IGZ1bmN0aW9uIChzcGVlZCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5pc1RyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSArPSBiYXNlLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZSA9PT0gdHJ1ZSA/IGJhc2Uub3B0aW9ucy5pdGVtcyA6IDE7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLmN1cnJlbnRJdGVtID4gYmFzZS5tYXhpbXVtSXRlbSArIChiYXNlLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZSA9PT0gdHJ1ZSA/IChiYXNlLm9wdGlvbnMuaXRlbXMgLSAxKSA6IDApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnJld2luZE5hdiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY3VycmVudEl0ZW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gXCJyZXdpbmRcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSA9IGJhc2UubWF4aW11bUl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuZ29UbyhiYXNlLmN1cnJlbnRJdGVtLCBzcGVlZCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcHJldiA6IGZ1bmN0aW9uIChzcGVlZCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5pc1RyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5zY3JvbGxQZXJQYWdlID09PSB0cnVlICYmIGJhc2UuY3VycmVudEl0ZW0gPiAwICYmIGJhc2UuY3VycmVudEl0ZW0gPCBiYXNlLm9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuY3VycmVudEl0ZW0gPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSAtPSBiYXNlLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZSA9PT0gdHJ1ZSA/IGJhc2Uub3B0aW9ucy5pdGVtcyA6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJhc2UuY3VycmVudEl0ZW0gPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnJld2luZE5hdiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY3VycmVudEl0ZW0gPSBiYXNlLm1heGltdW1JdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gXCJyZXdpbmRcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuZ29UbyhiYXNlLmN1cnJlbnRJdGVtLCBzcGVlZCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ29UbyA6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc3BlZWQsIGRyYWcpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgZ29Ub1BpeGVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2UuaXNUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlLm9wdGlvbnMuYmVmb3JlTW92ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuYmVmb3JlTW92ZS5hcHBseSh0aGlzLCBbYmFzZS4kZWxlbV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBiYXNlLm1heGltdW1JdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGJhc2UubWF4aW11bUl0ZW07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYXNlLmN1cnJlbnRJdGVtID0gYmFzZS5vd2wuY3VycmVudEl0ZW0gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy50cmFuc2l0aW9uU3R5bGUgIT09IGZhbHNlICYmIGRyYWcgIT09IFwiZHJhZ1wiICYmIGJhc2Uub3B0aW9ucy5pdGVtcyA9PT0gMSAmJiBiYXNlLmJyb3dzZXIuc3VwcG9ydDNkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnN3YXBTcGVlZCgwKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLmJyb3dzZXIuc3VwcG9ydDNkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS50cmFuc2l0aW9uM2QoYmFzZS5wb3NpdGlvbnNJbkFycmF5W3Bvc2l0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY3NzMnNsaWRlKGJhc2UucG9zaXRpb25zSW5BcnJheVtwb3NpdGlvbl0sIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFzZS5hZnRlckdvKCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnNpbmdsZUl0ZW1UcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ29Ub1BpeGVsID0gYmFzZS5wb3NpdGlvbnNJbkFycmF5W3Bvc2l0aW9uXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLmJyb3dzZXIuc3VwcG9ydDNkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmlzQ3NzM0ZpbmlzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2Uuc3dhcFNwZWVkKFwicGFnaW5hdGlvblNwZWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5pc0NzczNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGJhc2Uub3B0aW9ucy5wYWdpbmF0aW9uU3BlZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlZWQgPT09IFwicmV3aW5kXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLnN3YXBTcGVlZChiYXNlLm9wdGlvbnMucmV3aW5kU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5pc0NzczNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGJhc2Uub3B0aW9ucy5yZXdpbmRTcGVlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLnN3YXBTcGVlZChcInNsaWRlU3BlZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmlzQ3NzM0ZpbmlzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgYmFzZS5vcHRpb25zLnNsaWRlU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYmFzZS50cmFuc2l0aW9uM2QoZ29Ub1BpeGVsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY3NzMnNsaWRlKGdvVG9QaXhlbCwgYmFzZS5vcHRpb25zLnBhZ2luYXRpb25TcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWVkID09PSBcInJld2luZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5jc3Myc2xpZGUoZ29Ub1BpeGVsLCBiYXNlLm9wdGlvbnMucmV3aW5kU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmNzczJzbGlkZShnb1RvUGl4ZWwsIGJhc2Uub3B0aW9ucy5zbGlkZVNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLmFmdGVyR28oKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBqdW1wVG8gOiBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Uub3B0aW9ucy5iZWZvcmVNb3ZlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5iZWZvcmVNb3ZlLmFwcGx5KHRoaXMsIFtiYXNlLiRlbGVtXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID49IGJhc2UubWF4aW11bUl0ZW0gfHwgcG9zaXRpb24gPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGJhc2UubWF4aW11bUl0ZW07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2Uuc3dhcFNwZWVkKDApO1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5icm93c2VyLnN1cHBvcnQzZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS50cmFuc2l0aW9uM2QoYmFzZS5wb3NpdGlvbnNJbkFycmF5W3Bvc2l0aW9uXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmNzczJzbGlkZShiYXNlLnBvc2l0aW9uc0luQXJyYXlbcG9zaXRpb25dLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLmN1cnJlbnRJdGVtID0gYmFzZS5vd2wuY3VycmVudEl0ZW0gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgYmFzZS5hZnRlckdvKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWZ0ZXJHbyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5wcmV2QXJyLnB1c2goYmFzZS5jdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICAgIGJhc2UucHJldkl0ZW0gPSBiYXNlLm93bC5wcmV2SXRlbSA9IGJhc2UucHJldkFycltiYXNlLnByZXZBcnIubGVuZ3RoIC0gMl07XHJcbiAgICAgICAgICAgIGJhc2UucHJldkFyci5zaGlmdCgwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLnByZXZJdGVtICE9PSBiYXNlLmN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmNoZWNrUGFnaW5hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5jaGVja05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJhc2UuZWFjaE1vdmVVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLmF1dG9QbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY2hlY2tBcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZS5vcHRpb25zLmFmdGVyTW92ZSA9PT0gXCJmdW5jdGlvblwiICYmIGJhc2UucHJldkl0ZW0gIT09IGJhc2UuY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGJhc2Uub3B0aW9ucy5hZnRlck1vdmUuYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0b3AgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgYmFzZS5hcFN0YXR1cyA9IFwic3RvcFwiO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChiYXNlLmF1dG9QbGF5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNoZWNrQXAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGJhc2UuYXBTdGF0dXMgIT09IFwic3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBsYXkgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgYmFzZS5hcFN0YXR1cyA9IFwicGxheVwiO1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLmF1dG9QbGF5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGJhc2UuYXV0b1BsYXlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGJhc2UuYXV0b1BsYXlJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIGJhc2Uub3B0aW9ucy5hdXRvUGxheSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3dhcFNwZWVkIDogZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwic2xpZGVTcGVlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLiRvd2xXcmFwcGVyLmNzcyhiYXNlLmFkZENzc1NwZWVkKGJhc2Uub3B0aW9ucy5zbGlkZVNwZWVkKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInBhZ2luYXRpb25TcGVlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLiRvd2xXcmFwcGVyLmNzcyhiYXNlLmFkZENzc1NwZWVkKGJhc2Uub3B0aW9ucy5wYWdpbmF0aW9uU3BlZWQpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLiRvd2xXcmFwcGVyLmNzcyhiYXNlLmFkZENzc1NwZWVkKGFjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYWRkQ3NzU3BlZWQgOiBmdW5jdGlvbiAoc3BlZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2l0aW9uXCI6IFwiYWxsIFwiICsgc3BlZWQgKyBcIm1zIGVhc2VcIixcclxuICAgICAgICAgICAgICAgIFwiLW1vei10cmFuc2l0aW9uXCI6IFwiYWxsIFwiICsgc3BlZWQgKyBcIm1zIGVhc2VcIixcclxuICAgICAgICAgICAgICAgIFwiLW8tdHJhbnNpdGlvblwiOiBcImFsbCBcIiArIHNwZWVkICsgXCJtcyBlYXNlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJhbGwgXCIgKyBzcGVlZCArIFwibXMgZWFzZVwiXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVtb3ZlVHJhbnNpdGlvbiA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2l0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcIi1tb3otdHJhbnNpdGlvblwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCItby10cmFuc2l0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvVHJhbnNsYXRlIDogZnVuY3Rpb24gKHBpeGVscykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgXCItd2Via2l0LXRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKFwiICsgcGl4ZWxzICsgXCJweCwgMHB4LCAwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICBcIi1tb3otdHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoXCIgKyBwaXhlbHMgKyBcInB4LCAwcHgsIDBweClcIixcclxuICAgICAgICAgICAgICAgIFwiLW8tdHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlM2QoXCIgKyBwaXhlbHMgKyBcInB4LCAwcHgsIDBweClcIixcclxuICAgICAgICAgICAgICAgIFwiLW1zLXRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKFwiICsgcGl4ZWxzICsgXCJweCwgMHB4LCAwcHgpXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZTNkKFwiICsgcGl4ZWxzICsgXCJweCwgMHB4LDBweClcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyYW5zaXRpb24zZCA6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UuJG93bFdyYXBwZXIuY3NzKGJhc2UuZG9UcmFuc2xhdGUodmFsdWUpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjc3MybW92ZSA6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2UuJG93bFdyYXBwZXIuY3NzKHtcImxlZnRcIiA6IHZhbHVlfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3NzMnNsaWRlIDogZnVuY3Rpb24gKHZhbHVlLCBzcGVlZCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBiYXNlLmlzQ3NzRmluaXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJhc2UuJG93bFdyYXBwZXIuc3RvcCh0cnVlLCB0cnVlKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIFwibGVmdFwiIDogdmFsdWVcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gOiBzcGVlZCB8fCBiYXNlLm9wdGlvbnMuc2xpZGVTcGVlZCxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuaXNDc3NGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaGVja0Jyb3dzZXIgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTNEID0gXCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgICAgICAgICAgcmVnZXgsXHJcbiAgICAgICAgICAgICAgICBhc1N1cHBvcnQsXHJcbiAgICAgICAgICAgICAgICBzdXBwb3J0M2QsXHJcbiAgICAgICAgICAgICAgICBpc1RvdWNoO1xyXG5cclxuICAgICAgICAgICAgdGVtcEVsZW0uc3R5bGUuY3NzVGV4dCA9IFwiICAtbW96LXRyYW5zZm9ybTpcIiArIHRyYW5zbGF0ZTNEICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOyAtbXMtdHJhbnNmb3JtOlwiICAgICArIHRyYW5zbGF0ZTNEICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOyAtby10cmFuc2Zvcm06XCIgICAgICArIHRyYW5zbGF0ZTNEICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOyAtd2Via2l0LXRyYW5zZm9ybTpcIiArIHRyYW5zbGF0ZTNEICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOyB0cmFuc2Zvcm06XCIgICAgICAgICArIHRyYW5zbGF0ZTNEO1xyXG4gICAgICAgICAgICByZWdleCA9IC90cmFuc2xhdGUzZFxcKDBweCwgMHB4LCAwcHhcXCkvZztcclxuICAgICAgICAgICAgYXNTdXBwb3J0ID0gdGVtcEVsZW0uc3R5bGUuY3NzVGV4dC5tYXRjaChyZWdleCk7XHJcbiAgICAgICAgICAgIHN1cHBvcnQzZCA9IChhc1N1cHBvcnQgIT09IG51bGwgJiYgYXNTdXBwb3J0Lmxlbmd0aCA9PT0gMSk7XHJcblxyXG4gICAgICAgICAgICBpc1RvdWNoID0gXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cgfHwgd2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5icm93c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgXCJzdXBwb3J0M2RcIiA6IHN1cHBvcnQzZCxcclxuICAgICAgICAgICAgICAgIFwiaXNUb3VjaFwiIDogaXNUb3VjaFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdmVFdmVudHMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5tb3VzZURyYWcgIT09IGZhbHNlIHx8IGJhc2Uub3B0aW9ucy50b3VjaERyYWcgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmdlc3R1cmVzKCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmRpc2FibGVkRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBldmVudFR5cGVzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB0eXBlcyA9IFtcInNcIiwgXCJlXCIsIFwieFwiXTtcclxuXHJcbiAgICAgICAgICAgIGJhc2UuZXZfdHlwZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMubW91c2VEcmFnID09PSB0cnVlICYmIGJhc2Uub3B0aW9ucy50b3VjaERyYWcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2hzdGFydC5vd2wgbW91c2Vkb3duLm93bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2htb3ZlLm93bCBtb3VzZW1vdmUub3dsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaGVuZC5vd2wgdG91Y2hjYW5jZWwub3dsIG1vdXNldXAub3dsXCJcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5vcHRpb25zLm1vdXNlRHJhZyA9PT0gZmFsc2UgJiYgYmFzZS5vcHRpb25zLnRvdWNoRHJhZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdHlwZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3VjaHN0YXJ0Lm93bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2htb3ZlLm93bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidG91Y2hlbmQub3dsIHRvdWNoY2FuY2VsLm93bFwiXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhc2Uub3B0aW9ucy5tb3VzZURyYWcgPT09IHRydWUgJiYgYmFzZS5vcHRpb25zLnRvdWNoRHJhZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHR5cGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2Vkb3duLm93bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2Vtb3ZlLm93bFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibW91c2V1cC5vd2xcIlxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYmFzZS5ldl90eXBlcy5zdGFydCA9IHR5cGVzWzBdO1xyXG4gICAgICAgICAgICBiYXNlLmV2X3R5cGVzLm1vdmUgPSB0eXBlc1sxXTtcclxuICAgICAgICAgICAgYmFzZS5ldl90eXBlcy5lbmQgPSB0eXBlc1syXTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkaXNhYmxlZEV2ZW50cyA6ICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgYmFzZS4kZWxlbS5vbihcImRyYWdzdGFydC5vd2xcIiwgZnVuY3Rpb24gKGV2ZW50KSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0pO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLm9uKFwibW91c2Vkb3duLmRpc2FibGVUZXh0U2VsZWN0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJChlLnRhcmdldCkuaXMoJ2lucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBvcHRpb24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2VzdHVyZXMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8qanNsaW50IHVucGFyYW06IHRydWUqL1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBsb2NhbHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZUVsV2lkdGggOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlUG9zIDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5Td2lwZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4U3dpcGU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGluZyA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGFyZ2dpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbWVudCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBiYXNlLmlzQ3NzRmluaXNoID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRvdWNoZXMoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogZXZlbnQudG91Y2hlc1swXS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50b3VjaGVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA6IGV2ZW50LnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA6IGV2ZW50LnBhZ2VZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgOiBldmVudC5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2FwRXZlbnRzKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcIm9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbihiYXNlLmV2X3R5cGVzLm1vdmUsIGRyYWdNb3ZlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbihiYXNlLmV2X3R5cGVzLmVuZCwgZHJhZ0VuZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2ZmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoYmFzZS5ldl90eXBlcy5tb3ZlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoYmFzZS5ldl90eXBlcy5lbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmFnU3RhcnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBldiA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQgfHwgd2luZG93LmV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldi53aGljaCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLml0ZW1zQW1vdW50IDw9IGJhc2Uub3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLmlzQ3NzRmluaXNoID09PSBmYWxzZSAmJiAhYmFzZS5vcHRpb25zLmRyYWdCZWZvcmVBbmltRmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuaXNDc3MzRmluaXNoID09PSBmYWxzZSAmJiAhYmFzZS5vcHRpb25zLmRyYWdCZWZvcmVBbmltRmluaXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMuYXV0b1BsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoYmFzZS5hdXRvUGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5icm93c2VyLmlzVG91Y2ggIT09IHRydWUgJiYgIWJhc2UuJG93bFdyYXBwZXIuaGFzQ2xhc3MoXCJncmFiYmluZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuJG93bFdyYXBwZXIuYWRkQ2xhc3MoXCJncmFiYmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBiYXNlLm5ld1Bvc1ggPSAwO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5uZXdSZWxhdGl2ZVggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKGJhc2UucmVtb3ZlVHJhbnNpdGlvbigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICQodGhpcykucG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGxvY2Fscy5yZWxhdGl2ZVBvcyA9IHBvc2l0aW9uLmxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxzLm9mZnNldFggPSBnZXRUb3VjaGVzKGV2KS54IC0gcG9zaXRpb24ubGVmdDtcclxuICAgICAgICAgICAgICAgIGxvY2Fscy5vZmZzZXRZID0gZ2V0VG91Y2hlcyhldikueSAtIHBvc2l0aW9uLnRvcDtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2FwRXZlbnRzKFwib25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxzLnNsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxvY2Fscy50YXJnZXRFbGVtZW50ID0gZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYWdNb3ZlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXYgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5Td2lwZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhTd2lwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYXNlLm5ld1Bvc1ggPSBnZXRUb3VjaGVzKGV2KS54IC0gbG9jYWxzLm9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm5ld1Bvc1kgPSBnZXRUb3VjaGVzKGV2KS55IC0gbG9jYWxzLm9mZnNldFk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLm5ld1JlbGF0aXZlWCA9IGJhc2UubmV3UG9zWCAtIGxvY2Fscy5yZWxhdGl2ZVBvcztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJhc2Uub3B0aW9ucy5zdGFydERyYWdnaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgbG9jYWxzLmRyYWdnaW5nICE9PSB0cnVlICYmIGJhc2UubmV3UmVsYXRpdmVYICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLm9wdGlvbnMuc3RhcnREcmFnZ2luZy5hcHBseShiYXNlLCBbYmFzZS4kZWxlbV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoYmFzZS5uZXdSZWxhdGl2ZVggPiA4IHx8IGJhc2UubmV3UmVsYXRpdmVYIDwgLTgpICYmIChiYXNlLmJyb3dzZXIuaXNUb3VjaCA9PT0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXYucHJldmVudERlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2Fscy5zbGlkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGJhc2UubmV3UG9zWSA+IDEwIHx8IGJhc2UubmV3UG9zWSA8IC0xMCkgJiYgbG9jYWxzLnNsaWRpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKFwidG91Y2htb3ZlLm93bFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtaW5Td2lwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZS5uZXdSZWxhdGl2ZVggLyA1O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXhTd2lwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFzZS5tYXhpbXVtUGl4ZWxzICsgYmFzZS5uZXdSZWxhdGl2ZVggLyA1O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYXNlLm5ld1Bvc1ggPSBNYXRoLm1heChNYXRoLm1pbihiYXNlLm5ld1Bvc1gsIG1pblN3aXBlKCkpLCBtYXhTd2lwZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLmJyb3dzZXIuc3VwcG9ydDNkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS50cmFuc2l0aW9uM2QoYmFzZS5uZXdQb3NYKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5jc3MybW92ZShiYXNlLm5ld1Bvc1gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmFnRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXYgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVycyxcclxuICAgICAgICAgICAgICAgICAgICBvd2xTdG9wRXZlbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZXYudGFyZ2V0ID0gZXYudGFyZ2V0IHx8IGV2LnNyY0VsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxzLmRyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2UuYnJvd3Nlci5pc1RvdWNoICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS4kb3dsV3JhcHBlci5yZW1vdmVDbGFzcyhcImdyYWJiaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLm5ld1JlbGF0aXZlWCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmRyYWdEaXJlY3Rpb24gPSBiYXNlLm93bC5kcmFnRGlyZWN0aW9uID0gXCJsZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuZHJhZ0RpcmVjdGlvbiA9IGJhc2Uub3dsLmRyYWdEaXJlY3Rpb24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2UubmV3UmVsYXRpdmVYICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBiYXNlLmdldE5ld1Bvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5nb1RvKG5ld1Bvc2l0aW9uLCBmYWxzZSwgXCJkcmFnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbHMudGFyZ2V0RWxlbWVudCA9PT0gZXYudGFyZ2V0ICYmIGJhc2UuYnJvd3Nlci5pc1RvdWNoICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZXYudGFyZ2V0KS5vbihcImNsaWNrLmRpc2FibGVcIiwgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZXYudGFyZ2V0KS5vZmYoXCJjbGljay5kaXNhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMgPSAkLl9kYXRhKGV2LnRhcmdldCwgXCJldmVudHNcIikuY2xpY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bFN0b3BFdmVudCA9IGhhbmRsZXJzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoMCwgMCwgb3dsU3RvcEV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2FwRXZlbnRzKFwib2ZmXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0ub24oYmFzZS5ldl90eXBlcy5zdGFydCwgXCIub3dsLXdyYXBwZXJcIiwgZHJhZ1N0YXJ0KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXROZXdQb3NpdGlvbiA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBiYXNlLmNsb3Nlc3RJdGVtKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3UG9zaXRpb24gPiBiYXNlLm1heGltdW1JdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmN1cnJlbnRJdGVtID0gYmFzZS5tYXhpbXVtSXRlbTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uICA9IGJhc2UubWF4aW11bUl0ZW07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFzZS5uZXdQb3NYID49IDApIHtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIGJhc2UuY3VycmVudEl0ZW0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdQb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3Nlc3RJdGVtIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBhcnJheSA9IGJhc2Uub3B0aW9ucy5zY3JvbGxQZXJQYWdlID09PSB0cnVlID8gYmFzZS5wYWdlc0luQXJyYXkgOiBiYXNlLnBvc2l0aW9uc0luQXJyYXksXHJcbiAgICAgICAgICAgICAgICBnb2FsID0gYmFzZS5uZXdQb3NYLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goYXJyYXksIGZ1bmN0aW9uIChpLCB2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ29hbCAtIChiYXNlLml0ZW1XaWR0aCAvIDIwKSA+IGFycmF5W2kgKyAxXSAmJiBnb2FsIC0gKGJhc2UuaXRlbVdpZHRoIC8gMjApIDwgdiAmJiBiYXNlLm1vdmVEaXJlY3Rpb24oKSA9PT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gdjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5vcHRpb25zLnNjcm9sbFBlclBhZ2UgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSA9ICQuaW5BcnJheShjbG9zZXN0LCBiYXNlLnBvc2l0aW9uc0luQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UuY3VycmVudEl0ZW0gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ29hbCArIChiYXNlLml0ZW1XaWR0aCAvIDIwKSA8IHYgJiYgZ29hbCArIChiYXNlLml0ZW1XaWR0aCAvIDIwKSA+IChhcnJheVtpICsgMV0gfHwgYXJyYXlbaV0gLSBiYXNlLml0ZW1XaWR0aCkgJiYgYmFzZS5tb3ZlRGlyZWN0aW9uKCkgPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMuc2Nyb2xsUGVyUGFnZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gYXJyYXlbaSArIDFdIHx8IGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLmN1cnJlbnRJdGVtID0gJC5pbkFycmF5KGNsb3Nlc3QsIGJhc2UucG9zaXRpb25zSW5BcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IGFycmF5W2kgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5jdXJyZW50SXRlbSA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlLmN1cnJlbnRJdGVtO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1vdmVEaXJlY3Rpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgaWYgKGJhc2UubmV3UmVsYXRpdmVYIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5wbGF5RGlyZWN0aW9uID0gXCJuZXh0XCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgICAgIGJhc2UucGxheURpcmVjdGlvbiA9IFwicHJldlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3VzdG9tRXZlbnRzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvKmpzbGludCB1bnBhcmFtOiB0cnVlKi9cclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLm9uKFwib3dsLm5leHRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5uZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLm9uKFwib3dsLnByZXZcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5wcmV2KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLm9uKFwib3dsLnBsYXlcIiwgZnVuY3Rpb24gKGV2ZW50LCBzcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLmF1dG9QbGF5ID0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGJhc2UuaG92ZXJTdGF0dXMgPSBcInBsYXlcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0ub24oXCJvd2wuc3RvcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIGJhc2UuaG92ZXJTdGF0dXMgPSBcInN0b3BcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0ub24oXCJvd2wuZ29Ub1wiLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuZ29UbyhpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0ub24oXCJvd2wuanVtcFRvXCIsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS5qdW1wVG8oaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHN0b3BPbkhvdmVyIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMuc3RvcE9uSG92ZXIgPT09IHRydWUgJiYgYmFzZS5icm93c2VyLmlzVG91Y2ggIT09IHRydWUgJiYgYmFzZS5vcHRpb25zLmF1dG9QbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kZWxlbS5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJhc2UuJGVsZW0ub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UuaG92ZXJTdGF0dXMgIT09IFwic3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2UucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbGF6eUxvYWQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgICAgICAkaXRlbSxcclxuICAgICAgICAgICAgICAgIGl0ZW1OdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAkbGF6eUltZyxcclxuICAgICAgICAgICAgICAgIGZvbGxvdztcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMubGF6eUxvYWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGJhc2UuaXRlbXNBbW91bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgJGl0ZW0gPSAkKGJhc2UuJG93bEl0ZW1zW2ldKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGl0ZW0uZGF0YShcIm93bC1sb2FkZWRcIikgPT09IFwibG9hZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtTnVtYmVyID0gJGl0ZW0uZGF0YShcIm93bC1pdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgJGxhenlJbWcgPSAkaXRlbS5maW5kKFwiLmxhenlPd2xcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkbGF6eUltZy5kYXRhKFwic3JjXCIpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZGF0YShcIm93bC1sb2FkZWRcIiwgXCJsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoJGl0ZW0uZGF0YShcIm93bC1sb2FkZWRcIikgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXp5SW1nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkaXRlbS5hZGRDbGFzcyhcImxvYWRpbmdcIikuZGF0YShcIm93bC1sb2FkZWRcIiwgXCJjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5sYXp5Rm9sbG93ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9sbG93ID0gaXRlbU51bWJlciA+PSBiYXNlLmN1cnJlbnRJdGVtO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb2xsb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGZvbGxvdyAmJiBpdGVtTnVtYmVyIDwgYmFzZS5jdXJyZW50SXRlbSArIGJhc2Uub3B0aW9ucy5pdGVtcyAmJiAkbGF6eUltZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmxhenlQcmVsb2FkKCRpdGVtLCAkbGF6eUltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsYXp5UHJlbG9hZCA6IGZ1bmN0aW9uICgkaXRlbSwgJGxhenlJbWcpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaXRlcmF0aW9ucyA9IDAsXHJcbiAgICAgICAgICAgICAgICBpc0JhY2tncm91bmRJbWc7XHJcblxyXG4gICAgICAgICAgICBpZiAoJGxhenlJbWcucHJvcChcInRhZ05hbWVcIikgPT09IFwiRElWXCIpIHtcclxuICAgICAgICAgICAgICAgICRsYXp5SW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoXCIgKyAkbGF6eUltZy5kYXRhKFwic3JjXCIpICsgXCIpXCIpO1xyXG4gICAgICAgICAgICAgICAgaXNCYWNrZ3JvdW5kSW1nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRsYXp5SW1nWzBdLnNyYyA9ICRsYXp5SW1nLmRhdGEoXCJzcmNcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNob3dJbWFnZSgpIHtcclxuICAgICAgICAgICAgICAgICRpdGVtLmRhdGEoXCJvd2wtbG9hZGVkXCIsIFwibG9hZGVkXCIpLnJlbW92ZUNsYXNzKFwibG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgICRsYXp5SW1nLnJlbW92ZUF0dHIoXCJkYXRhLXNyY1wiKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMubGF6eUVmZmVjdCA9PT0gXCJmYWRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbGF6eUltZy5mYWRlSW4oNDAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxhenlJbWcuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBiYXNlLm9wdGlvbnMuYWZ0ZXJMYXp5TG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5vcHRpb25zLmFmdGVyTGF6eUxvYWQuYXBwbHkodGhpcywgW2Jhc2UuJGVsZW1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tMYXp5SW1hZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5jb21wbGV0ZUltZygkbGF6eUltZy5nZXQoMCkpIHx8IGlzQmFja2dyb3VuZEltZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVyYXRpb25zIDw9IDEwMCkgey8vaWYgaW1hZ2UgbG9hZHMgaW4gbGVzcyB0aGFuIDEwIHNlY29uZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2tMYXp5SW1hZ2UsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaGVja0xhenlJbWFnZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGF1dG9IZWlnaHQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICRjdXJyZW50aW1nID0gJChiYXNlLiRvd2xJdGVtc1tiYXNlLmN1cnJlbnRJdGVtXSkuZmluZChcImltZ1wiKSxcclxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRIZWlnaHQoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRJdGVtID0gJChiYXNlLiRvd2xJdGVtc1tiYXNlLmN1cnJlbnRJdGVtXSkuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLndyYXBwZXJPdXRlci5jc3MoXCJoZWlnaHRcIiwgJGN1cnJlbnRJdGVtICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghYmFzZS53cmFwcGVyT3V0ZXIuaGFzQ2xhc3MoXCJhdXRvSGVpZ2h0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlLndyYXBwZXJPdXRlci5hZGRDbGFzcyhcImF1dG9IZWlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrSW1hZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5jb21wbGV0ZUltZygkY3VycmVudGltZy5nZXQoMCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkSGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZXJhdGlvbnMgPD0gMTAwKSB7IC8vaWYgaW1hZ2UgbG9hZHMgaW4gbGVzcyB0aGFuIDEwIHNlY29uZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2hlY2tJbWFnZSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS53cmFwcGVyT3V0ZXIuY3NzKFwiaGVpZ2h0XCIsIFwiXCIpOyAvL0Vsc2UgcmVtb3ZlIGhlaWdodCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCRjdXJyZW50aW1nLmdldCgwKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zID0gMDtcclxuICAgICAgICAgICAgICAgIGNoZWNrSW1hZ2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZEhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY29tcGxldGVJbWcgOiBmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXR1cmFsV2lkdGhUeXBlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpbWcuY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuYXR1cmFsV2lkdGhUeXBlID0gdHlwZW9mIGltZy5uYXR1cmFsV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChuYXR1cmFsV2lkdGhUeXBlICE9PSBcInVuZGVmaW5lZFwiICYmIGltZy5uYXR1cmFsV2lkdGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvblZpc2libGVJdGVtcyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiYXNlLm9wdGlvbnMuYWRkQ2xhc3NBY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuJG93bEl0ZW1zLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2UudmlzaWJsZUl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIGZvciAoaSA9IGJhc2UuY3VycmVudEl0ZW07IGkgPCBiYXNlLmN1cnJlbnRJdGVtICsgYmFzZS5vcHRpb25zLml0ZW1zOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGJhc2UudmlzaWJsZUl0ZW1zLnB1c2goaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2Uub3B0aW9ucy5hZGRDbGFzc0FjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoYmFzZS4kb3dsSXRlbXNbaV0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhc2Uub3dsLnZpc2libGVJdGVtcyA9IGJhc2UudmlzaWJsZUl0ZW1zO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyYW5zaXRpb25UeXBlcyA6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG4gICAgICAgICAgICAvL0N1cnJlbnRseSBhdmFpbGFibGU6IFwiZmFkZVwiLCBcImJhY2tTbGlkZVwiLCBcImdvRG93blwiLCBcImZhZGVVcFwiXHJcbiAgICAgICAgICAgIGJhc2Uub3V0Q2xhc3MgPSBcIm93bC1cIiArIGNsYXNzTmFtZSArIFwiLW91dFwiO1xyXG4gICAgICAgICAgICBiYXNlLmluQ2xhc3MgPSBcIm93bC1cIiArIGNsYXNzTmFtZSArIFwiLWluXCI7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2luZ2xlSXRlbVRyYW5zaXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIG91dENsYXNzID0gYmFzZS5vdXRDbGFzcyxcclxuICAgICAgICAgICAgICAgIGluQ2xhc3MgPSBiYXNlLmluQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICAkY3VycmVudEl0ZW0gPSBiYXNlLiRvd2xJdGVtcy5lcShiYXNlLmN1cnJlbnRJdGVtKSxcclxuICAgICAgICAgICAgICAgICRwcmV2SXRlbSA9IGJhc2UuJG93bEl0ZW1zLmVxKGJhc2UucHJldkl0ZW0pLFxyXG4gICAgICAgICAgICAgICAgcHJldlBvcyA9IE1hdGguYWJzKGJhc2UucG9zaXRpb25zSW5BcnJheVtiYXNlLmN1cnJlbnRJdGVtXSkgKyBiYXNlLnBvc2l0aW9uc0luQXJyYXlbYmFzZS5wcmV2SXRlbV0sXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBNYXRoLmFicyhiYXNlLnBvc2l0aW9uc0luQXJyYXlbYmFzZS5jdXJyZW50SXRlbV0pICsgYmFzZS5pdGVtV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgYW5pbUVuZCA9ICd3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBhbmltYXRpb25lbmQnO1xyXG5cclxuICAgICAgICAgICAgYmFzZS5pc1RyYW5zaXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgYmFzZS4kb3dsV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdvd2wtb3JpZ2luJylcclxuICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luXCIgOiBvcmlnaW4gKyBcInB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCItbW96LXBlcnNwZWN0aXZlLW9yaWdpblwiIDogb3JpZ2luICsgXCJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGVyc3BlY3RpdmUtb3JpZ2luXCIgOiBvcmlnaW4gKyBcInB4XCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiB0cmFuc1N0eWxlcyhwcmV2UG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIiA6IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIiA6IHByZXZQb3MgKyBcInB4XCJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRwcmV2SXRlbVxyXG4gICAgICAgICAgICAgICAgLmNzcyh0cmFuc1N0eWxlcyhwcmV2UG9zLCAxMCkpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3Mob3V0Q2xhc3MpXHJcbiAgICAgICAgICAgICAgICAub24oYW5pbUVuZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuZW5kUHJldiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgJHByZXZJdGVtLm9mZihhbmltRW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBiYXNlLmNsZWFyVHJhbnNTdHlsZSgkcHJldkl0ZW0sIG91dENsYXNzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGN1cnJlbnRJdGVtXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoaW5DbGFzcylcclxuICAgICAgICAgICAgICAgIC5vbihhbmltRW5kLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5lbmRDdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudEl0ZW0ub2ZmKGFuaW1FbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2UuY2xlYXJUcmFuc1N0eWxlKCRjdXJyZW50SXRlbSwgaW5DbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGVhclRyYW5zU3R5bGUgOiBmdW5jdGlvbiAoaXRlbSwgY2xhc3NUb1JlbW92ZSkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGl0ZW0uY3NzKHtcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcImxlZnRcIiA6IFwiXCJcclxuICAgICAgICAgICAgfSkucmVtb3ZlQ2xhc3MoY2xhc3NUb1JlbW92ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS5lbmRQcmV2ICYmIGJhc2UuZW5kQ3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kb3dsV3JhcHBlci5yZW1vdmVDbGFzcygnb3dsLW9yaWdpbicpO1xyXG4gICAgICAgICAgICAgICAgYmFzZS5lbmRQcmV2ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBiYXNlLmVuZEN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJhc2UuaXNUcmFuc2l0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvd2xTdGF0dXMgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgYmFzZS5vd2wgPSB7XHJcbiAgICAgICAgICAgICAgICBcInVzZXJPcHRpb25zXCIgICA6IGJhc2UudXNlck9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBcImJhc2VFbGVtZW50XCIgICA6IGJhc2UuJGVsZW0sXHJcbiAgICAgICAgICAgICAgICBcInVzZXJJdGVtc1wiICAgICA6IGJhc2UuJHVzZXJJdGVtcyxcclxuICAgICAgICAgICAgICAgIFwib3dsSXRlbXNcIiAgICAgIDogYmFzZS4kb3dsSXRlbXMsXHJcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRJdGVtXCIgICA6IGJhc2UuY3VycmVudEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBcInByZXZJdGVtXCIgICAgICA6IGJhc2UucHJldkl0ZW0sXHJcbiAgICAgICAgICAgICAgICBcInZpc2libGVJdGVtc1wiICA6IGJhc2UudmlzaWJsZUl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgXCJpc1RvdWNoXCIgICAgICAgOiBiYXNlLmJyb3dzZXIuaXNUb3VjaCxcclxuICAgICAgICAgICAgICAgIFwiYnJvd3NlclwiICAgICAgIDogYmFzZS5icm93c2VyLFxyXG4gICAgICAgICAgICAgICAgXCJkcmFnRGlyZWN0aW9uXCIgOiBiYXNlLmRyYWdEaXJlY3Rpb25cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjbGVhckV2ZW50cyA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJhc2UgPSB0aGlzO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtLm9mZihcIi5vd2wgb3dsIG1vdXNlZG93bi5kaXNhYmxlVGV4dFNlbGVjdFwiKTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub2ZmKFwiLm93bCBvd2xcIik7XHJcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoXCJyZXNpemVcIiwgYmFzZS5yZXNpemVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1bldyYXAgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKGJhc2UuJGVsZW0uY2hpbGRyZW4oKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuJG93bFdyYXBwZXIudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLiR1c2VySXRlbXMudW53cmFwKCkudW53cmFwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZS5vd2xDb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhc2Uub3dsQ29udHJvbHMucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFzZS5jbGVhckV2ZW50cygpO1xyXG4gICAgICAgICAgICBiYXNlLiRlbGVtXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInN0eWxlXCIsIGJhc2UuJGVsZW0uZGF0YShcIm93bC1vcmlnaW5hbFN0eWxlc1wiKSB8fCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBiYXNlLiRlbGVtLmRhdGEoXCJvd2wtb3JpZ2luYWxDbGFzc2VzXCIpKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkZXN0cm95IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYmFzZSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGJhc2Uuc3RvcCgpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChiYXNlLmNoZWNrVmlzaWJsZSk7XHJcbiAgICAgICAgICAgIGJhc2UudW5XcmFwKCk7XHJcbiAgICAgICAgICAgIGJhc2UuJGVsZW0ucmVtb3ZlRGF0YSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlaW5pdCA6IGZ1bmN0aW9uIChuZXdPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgYmFzZS51c2VyT3B0aW9ucywgbmV3T3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGJhc2UudW5XcmFwKCk7XHJcbiAgICAgICAgICAgIGJhc2UuaW5pdChvcHRpb25zLCBiYXNlLiRlbGVtKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRJdGVtIDogZnVuY3Rpb24gKGh0bWxTdHJpbmcsIHRhcmdldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFodG1sU3RyaW5nKSB7cmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYmFzZS4kZWxlbS5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kZWxlbS5hcHBlbmQoaHRtbFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlLnNldFZhcnMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLnVuV3JhcCgpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCB0YXJnZXRQb3NpdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBiYXNlLiR1c2VySXRlbXMubGVuZ3RoIHx8IHBvc2l0aW9uID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgYmFzZS4kdXNlckl0ZW1zLmVxKC0xKS5hZnRlcihodG1sU3RyaW5nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhc2UuJHVzZXJJdGVtcy5lcShwb3NpdGlvbikuYmVmb3JlKGh0bWxTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYXNlLnNldFZhcnMoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmVJdGVtIDogZnVuY3Rpb24gKHRhcmdldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBiYXNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJhc2UuJGVsZW0uY2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0UG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCB0YXJnZXRQb3NpdGlvbiA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gLTE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiYXNlLnVuV3JhcCgpO1xyXG4gICAgICAgICAgICBiYXNlLiR1c2VySXRlbXMuZXEocG9zaXRpb24pLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBiYXNlLnNldFZhcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLm93bENhcm91c2VsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YShcIm93bC1pbml0XCIpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKFwib3dsLWluaXRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHZhciBjYXJvdXNlbCA9IE9iamVjdC5jcmVhdGUoQ2Fyb3VzZWwpO1xyXG4gICAgICAgICAgICBjYXJvdXNlbC5pbml0KG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgICAgICAgICAkLmRhdGEodGhpcywgXCJvd2xDYXJvdXNlbFwiLCBjYXJvdXNlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4ub3dsQ2Fyb3VzZWwub3B0aW9ucyA9IHtcclxuXHJcbiAgICAgICAgaXRlbXMgOiA1LFxyXG4gICAgICAgIGl0ZW1zQ3VzdG9tIDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNEZXNrdG9wIDogWzExOTksIDRdLFxyXG4gICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsIDogWzk3OSwgM10sXHJcbiAgICAgICAgaXRlbXNUYWJsZXQgOiBbNzY4LCAyXSxcclxuICAgICAgICBpdGVtc1RhYmxldFNtYWxsIDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNNb2JpbGUgOiBbNDc5LCAxXSxcclxuICAgICAgICBzaW5nbGVJdGVtIDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNTY2FsZVVwIDogZmFsc2UsXHJcblxyXG4gICAgICAgIHNsaWRlU3BlZWQgOiAyMDAsXHJcbiAgICAgICAgcGFnaW5hdGlvblNwZWVkIDogODAwLFxyXG4gICAgICAgIHJld2luZFNwZWVkIDogMTAwMCxcclxuXHJcbiAgICAgICAgYXV0b1BsYXkgOiBmYWxzZSxcclxuICAgICAgICBzdG9wT25Ib3ZlciA6IGZhbHNlLFxyXG5cclxuICAgICAgICBuYXZpZ2F0aW9uIDogZmFsc2UsXHJcbiAgICAgICAgbmF2aWdhdGlvblRleHQgOiBbXCJwcmV2XCIsIFwibmV4dFwiXSxcclxuICAgICAgICByZXdpbmROYXYgOiB0cnVlLFxyXG4gICAgICAgIHNjcm9sbFBlclBhZ2UgOiBmYWxzZSxcclxuXHJcbiAgICAgICAgcGFnaW5hdGlvbiA6IHRydWUsXHJcbiAgICAgICAgcGFnaW5hdGlvbk51bWJlcnMgOiBmYWxzZSxcclxuXHJcbiAgICAgICAgcmVzcG9uc2l2ZSA6IHRydWUsXHJcbiAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlIDogMjAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmVCYXNlV2lkdGggOiB3aW5kb3csXHJcblxyXG4gICAgICAgIGJhc2VDbGFzcyA6IFwib3dsLWNhcm91c2VsXCIsXHJcbiAgICAgICAgdGhlbWUgOiBcIm93bC10aGVtZVwiLFxyXG5cclxuICAgICAgICBsYXp5TG9hZCA6IGZhbHNlLFxyXG4gICAgICAgIGxhenlGb2xsb3cgOiB0cnVlLFxyXG4gICAgICAgIGxhenlFZmZlY3QgOiBcImZhZGVcIixcclxuXHJcbiAgICAgICAgYXV0b0hlaWdodCA6IGZhbHNlLFxyXG5cclxuICAgICAgICBqc29uUGF0aCA6IGZhbHNlLFxyXG4gICAgICAgIGpzb25TdWNjZXNzIDogZmFsc2UsXHJcblxyXG4gICAgICAgIGRyYWdCZWZvcmVBbmltRmluaXNoIDogdHJ1ZSxcclxuICAgICAgICBtb3VzZURyYWcgOiB0cnVlLFxyXG4gICAgICAgIHRvdWNoRHJhZyA6IHRydWUsXHJcblxyXG4gICAgICAgIGFkZENsYXNzQWN0aXZlIDogZmFsc2UsXHJcbiAgICAgICAgdHJhbnNpdGlvblN0eWxlIDogZmFsc2UsXHJcblxyXG4gICAgICAgIGJlZm9yZVVwZGF0ZSA6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVyVXBkYXRlIDogZmFsc2UsXHJcbiAgICAgICAgYmVmb3JlSW5pdCA6IGZhbHNlLFxyXG4gICAgICAgIGFmdGVySW5pdCA6IGZhbHNlLFxyXG4gICAgICAgIGJlZm9yZU1vdmUgOiBmYWxzZSxcclxuICAgICAgICBhZnRlck1vdmUgOiBmYWxzZSxcclxuICAgICAgICBhZnRlckFjdGlvbiA6IGZhbHNlLFxyXG4gICAgICAgIHN0YXJ0RHJhZ2dpbmcgOiBmYWxzZSxcclxuICAgICAgICBhZnRlckxhenlMb2FkOiBmYWxzZVxyXG4gICAgfTtcclxufShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpKTsiLCIvKiFcclxuV2F5cG9pbnRzIC0gMy4xLjFcclxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNSBDYWxlYiBUcm91Z2h0b25cclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5odHRwczovL2dpdGh1Yi5jb20vaW1ha2V3ZWJ0aGluZ3Mvd2F5cG9pbnRzL2Jsb2cvbWFzdGVyL2xpY2Vuc2VzLnR4dFxyXG4qL1xyXG4hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KG8pe2lmKCFvKXRocm93IG5ldyBFcnJvcihcIk5vIG9wdGlvbnMgcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO2lmKCFvLmVsZW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiTm8gZWxlbWVudCBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO2lmKCFvLmhhbmRsZXIpdGhyb3cgbmV3IEVycm9yKFwiTm8gaGFuZGxlciBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yXCIpO3RoaXMua2V5PVwid2F5cG9pbnQtXCIrZSx0aGlzLm9wdGlvbnM9dC5BZGFwdGVyLmV4dGVuZCh7fSx0LmRlZmF1bHRzLG8pLHRoaXMuZWxlbWVudD10aGlzLm9wdGlvbnMuZWxlbWVudCx0aGlzLmFkYXB0ZXI9bmV3IHQuQWRhcHRlcih0aGlzLmVsZW1lbnQpLHRoaXMuY2FsbGJhY2s9by5oYW5kbGVyLHRoaXMuYXhpcz10aGlzLm9wdGlvbnMuaG9yaXpvbnRhbD9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCIsdGhpcy5lbmFibGVkPXRoaXMub3B0aW9ucy5lbmFibGVkLHRoaXMudHJpZ2dlclBvaW50PW51bGwsdGhpcy5ncm91cD10Lkdyb3VwLmZpbmRPckNyZWF0ZSh7bmFtZTp0aGlzLm9wdGlvbnMuZ3JvdXAsYXhpczp0aGlzLmF4aXN9KSx0aGlzLmNvbnRleHQ9dC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dCksdC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdJiYodGhpcy5vcHRpb25zLm9mZnNldD10Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF0pLHRoaXMuZ3JvdXAuYWRkKHRoaXMpLHRoaXMuY29udGV4dC5hZGQodGhpcyksaVt0aGlzLmtleV09dGhpcyxlKz0xfXZhciBlPTAsaT17fTt0LnByb3RvdHlwZS5xdWV1ZVRyaWdnZXI9ZnVuY3Rpb24odCl7dGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcyx0KX0sdC5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0KXt0aGlzLmVuYWJsZWQmJnRoaXMuY2FsbGJhY2smJnRoaXMuY2FsbGJhY2suYXBwbHkodGhpcyx0KX0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuY29udGV4dC5yZW1vdmUodGhpcyksdGhpcy5ncm91cC5yZW1vdmUodGhpcyksZGVsZXRlIGlbdGhpcy5rZXldfSx0LnByb3RvdHlwZS5kaXNhYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5hYmxlZD0hMSx0aGlzfSx0LnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb250ZXh0LnJlZnJlc2goKSx0aGlzLmVuYWJsZWQ9ITAsdGhpc30sdC5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdyb3VwLm5leHQodGhpcyl9LHQucHJvdG90eXBlLnByZXZpb3VzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ3JvdXAucHJldmlvdXModGhpcyl9LHQuaW52b2tlQWxsPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO2Zvcih2YXIgbyBpbiBpKWUucHVzaChpW29dKTtmb3IodmFyIG49MCxyPWUubGVuZ3RoO3I+bjtuKyspZVtuXVt0XSgpfSx0LmRlc3Ryb3lBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImRlc3Ryb3lcIil9LHQuZGlzYWJsZUFsbD1mdW5jdGlvbigpe3QuaW52b2tlQWxsKFwiZGlzYWJsZVwiKX0sdC5lbmFibGVBbGw9ZnVuY3Rpb24oKXt0Lmludm9rZUFsbChcImVuYWJsZVwiKX0sdC5yZWZyZXNoQWxsPWZ1bmN0aW9uKCl7dC5Db250ZXh0LnJlZnJlc2hBbGwoKX0sdC52aWV3cG9ydEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR9LHQudmlld3BvcnRXaWR0aD1mdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGh9LHQuYWRhcHRlcnM9W10sdC5kZWZhdWx0cz17Y29udGV4dDp3aW5kb3csY29udGludW91czohMCxlbmFibGVkOiEwLGdyb3VwOlwiZGVmYXVsdFwiLGhvcml6b250YWw6ITEsb2Zmc2V0OjB9LHQub2Zmc2V0QWxpYXNlcz17XCJib3R0b20taW4tdmlld1wiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY29udGV4dC5pbm5lckhlaWdodCgpLXRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpfSxcInJpZ2h0LWluLXZpZXdcIjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHQuaW5uZXJXaWR0aCgpLXRoaXMuYWRhcHRlci5vdXRlcldpZHRoKCl9fSx3aW5kb3cuV2F5cG9pbnQ9dH0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7d2luZG93LnNldFRpbWVvdXQodCwxZTMvNjApfWZ1bmN0aW9uIGUodCl7dGhpcy5lbGVtZW50PXQsdGhpcy5BZGFwdGVyPW4uQWRhcHRlcix0aGlzLmFkYXB0ZXI9bmV3IHRoaXMuQWRhcHRlcih0KSx0aGlzLmtleT1cIndheXBvaW50LWNvbnRleHQtXCIraSx0aGlzLmRpZFNjcm9sbD0hMSx0aGlzLmRpZFJlc2l6ZT0hMSx0aGlzLm9sZFNjcm9sbD17eDp0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLHk6dGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpfSx0aGlzLndheXBvaW50cz17dmVydGljYWw6e30saG9yaXpvbnRhbDp7fX0sdC53YXlwb2ludENvbnRleHRLZXk9dGhpcy5rZXksb1t0LndheXBvaW50Q29udGV4dEtleV09dGhpcyxpKz0xLHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpLHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpfXZhciBpPTAsbz17fSxuPXdpbmRvdy5XYXlwb2ludCxyPXdpbmRvdy5vbmxvYWQ7ZS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQub3B0aW9ucy5ob3Jpem9udGFsP1wiaG9yaXpvbnRhbFwiOlwidmVydGljYWxcIjt0aGlzLndheXBvaW50c1tlXVt0LmtleV09dCx0aGlzLnJlZnJlc2goKX0sZS5wcm90b3R5cGUuY2hlY2tFbXB0eT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLmhvcml6b250YWwpLGU9dGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpO3QmJmUmJih0aGlzLmFkYXB0ZXIub2ZmKFwiLndheXBvaW50c1wiKSxkZWxldGUgb1t0aGlzLmtleV0pfSxlLnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2UuaGFuZGxlUmVzaXplKCksZS5kaWRSZXNpemU9ITF9dmFyIGU9dGhpczt0aGlzLmFkYXB0ZXIub24oXCJyZXNpemUud2F5cG9pbnRzXCIsZnVuY3Rpb24oKXtlLmRpZFJlc2l6ZXx8KGUuZGlkUmVzaXplPSEwLG4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHQpKX0pfSxlLnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe2UuaGFuZGxlU2Nyb2xsKCksZS5kaWRTY3JvbGw9ITF9dmFyIGU9dGhpczt0aGlzLmFkYXB0ZXIub24oXCJzY3JvbGwud2F5cG9pbnRzXCIsZnVuY3Rpb24oKXsoIWUuZGlkU2Nyb2xsfHxuLmlzVG91Y2gpJiYoZS5kaWRTY3JvbGw9ITAsbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCkpfSl9LGUucHJvdG90eXBlLmhhbmRsZVJlc2l6ZT1mdW5jdGlvbigpe24uQ29udGV4dC5yZWZyZXNoQWxsKCl9LGUucHJvdG90eXBlLmhhbmRsZVNjcm9sbD1mdW5jdGlvbigpe3ZhciB0PXt9LGU9e2hvcml6b250YWw6e25ld1Njcm9sbDp0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLG9sZFNjcm9sbDp0aGlzLm9sZFNjcm9sbC54LGZvcndhcmQ6XCJyaWdodFwiLGJhY2t3YXJkOlwibGVmdFwifSx2ZXJ0aWNhbDp7bmV3U2Nyb2xsOnRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueSxmb3J3YXJkOlwiZG93blwiLGJhY2t3YXJkOlwidXBcIn19O2Zvcih2YXIgaSBpbiBlKXt2YXIgbz1lW2ldLG49by5uZXdTY3JvbGw+by5vbGRTY3JvbGwscj1uP28uZm9yd2FyZDpvLmJhY2t3YXJkO2Zvcih2YXIgcyBpbiB0aGlzLndheXBvaW50c1tpXSl7dmFyIGE9dGhpcy53YXlwb2ludHNbaV1bc10sbD1vLm9sZFNjcm9sbDxhLnRyaWdnZXJQb2ludCxoPW8ubmV3U2Nyb2xsPj1hLnRyaWdnZXJQb2ludCxwPWwmJmgsdT0hbCYmIWg7KHB8fHUpJiYoYS5xdWV1ZVRyaWdnZXIociksdFthLmdyb3VwLmlkXT1hLmdyb3VwKX19Zm9yKHZhciBjIGluIHQpdFtjXS5mbHVzaFRyaWdnZXJzKCk7dGhpcy5vbGRTY3JvbGw9e3g6ZS5ob3Jpem9udGFsLm5ld1Njcm9sbCx5OmUudmVydGljYWwubmV3U2Nyb2xsfX0sZS5wcm90b3R5cGUuaW5uZXJIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbGVtZW50PT10aGlzLmVsZW1lbnQud2luZG93P24udmlld3BvcnRIZWlnaHQoKTp0aGlzLmFkYXB0ZXIuaW5uZXJIZWlnaHQoKX0sZS5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKHQpe2RlbGV0ZSB0aGlzLndheXBvaW50c1t0LmF4aXNdW3Qua2V5XSx0aGlzLmNoZWNrRW1wdHkoKX0sZS5wcm90b3R5cGUuaW5uZXJXaWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVsZW1lbnQ9PXRoaXMuZWxlbWVudC53aW5kb3c/bi52aWV3cG9ydFdpZHRoKCk6dGhpcy5hZGFwdGVyLmlubmVyV2lkdGgoKX0sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciB0PVtdO2Zvcih2YXIgZSBpbiB0aGlzLndheXBvaW50cylmb3IodmFyIGkgaW4gdGhpcy53YXlwb2ludHNbZV0pdC5wdXNoKHRoaXMud2F5cG9pbnRzW2VdW2ldKTtmb3IodmFyIG89MCxuPXQubGVuZ3RoO24+bztvKyspdFtvXS5kZXN0cm95KCl9LGUucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXMuZWxlbWVudD09dGhpcy5lbGVtZW50LndpbmRvdyxpPXRoaXMuYWRhcHRlci5vZmZzZXQoKSxvPXt9O3RoaXMuaGFuZGxlU2Nyb2xsKCksdD17aG9yaXpvbnRhbDp7Y29udGV4dE9mZnNldDplPzA6aS5sZWZ0LGNvbnRleHRTY3JvbGw6ZT8wOnRoaXMub2xkU2Nyb2xsLngsY29udGV4dERpbWVuc2lvbjp0aGlzLmlubmVyV2lkdGgoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueCxmb3J3YXJkOlwicmlnaHRcIixiYWNrd2FyZDpcImxlZnRcIixvZmZzZXRQcm9wOlwibGVmdFwifSx2ZXJ0aWNhbDp7Y29udGV4dE9mZnNldDplPzA6aS50b3AsY29udGV4dFNjcm9sbDplPzA6dGhpcy5vbGRTY3JvbGwueSxjb250ZXh0RGltZW5zaW9uOnRoaXMuaW5uZXJIZWlnaHQoKSxvbGRTY3JvbGw6dGhpcy5vbGRTY3JvbGwueSxmb3J3YXJkOlwiZG93blwiLGJhY2t3YXJkOlwidXBcIixvZmZzZXRQcm9wOlwidG9wXCJ9fTtmb3IodmFyIG4gaW4gdCl7dmFyIHI9dFtuXTtmb3IodmFyIHMgaW4gdGhpcy53YXlwb2ludHNbbl0pe3ZhciBhLGwsaCxwLHUsYz10aGlzLndheXBvaW50c1tuXVtzXSxkPWMub3B0aW9ucy5vZmZzZXQsZj1jLnRyaWdnZXJQb2ludCx3PTAseT1udWxsPT1mO2MuZWxlbWVudCE9PWMuZWxlbWVudC53aW5kb3cmJih3PWMuYWRhcHRlci5vZmZzZXQoKVtyLm9mZnNldFByb3BdKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkP2Q9ZC5hcHBseShjKTpcInN0cmluZ1wiPT10eXBlb2YgZCYmKGQ9cGFyc2VGbG9hdChkKSxjLm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoXCIlXCIpPi0xJiYoZD1NYXRoLmNlaWwoci5jb250ZXh0RGltZW5zaW9uKmQvMTAwKSkpLGE9ci5jb250ZXh0U2Nyb2xsLXIuY29udGV4dE9mZnNldCxjLnRyaWdnZXJQb2ludD13K2EtZCxsPWY8ci5vbGRTY3JvbGwsaD1jLnRyaWdnZXJQb2ludD49ci5vbGRTY3JvbGwscD1sJiZoLHU9IWwmJiFoLCF5JiZwPyhjLnF1ZXVlVHJpZ2dlcihyLmJhY2t3YXJkKSxvW2MuZ3JvdXAuaWRdPWMuZ3JvdXApOiF5JiZ1PyhjLnF1ZXVlVHJpZ2dlcihyLmZvcndhcmQpLG9bYy5ncm91cC5pZF09Yy5ncm91cCk6eSYmci5vbGRTY3JvbGw+PWMudHJpZ2dlclBvaW50JiYoYy5xdWV1ZVRyaWdnZXIoci5mb3J3YXJkKSxvW2MuZ3JvdXAuaWRdPWMuZ3JvdXApfX1mb3IodmFyIGcgaW4gbylvW2ddLmZsdXNoVHJpZ2dlcnMoKTtyZXR1cm4gdGhpc30sZS5maW5kT3JDcmVhdGVCeUVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuZmluZEJ5RWxlbWVudCh0KXx8bmV3IGUodCl9LGUucmVmcmVzaEFsbD1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBvKW9bdF0ucmVmcmVzaCgpfSxlLmZpbmRCeUVsZW1lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIG9bdC53YXlwb2ludENvbnRleHRLZXldfSx3aW5kb3cub25sb2FkPWZ1bmN0aW9uKCl7ciYmcigpLGUucmVmcmVzaEFsbCgpfSxuLnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihlKXt2YXIgaT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx0O2kuY2FsbCh3aW5kb3csZSl9LG4uQ29udGV4dD1lfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3JldHVybiB0LnRyaWdnZXJQb2ludC1lLnRyaWdnZXJQb2ludH1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuIGUudHJpZ2dlclBvaW50LXQudHJpZ2dlclBvaW50fWZ1bmN0aW9uIGkodCl7dGhpcy5uYW1lPXQubmFtZSx0aGlzLmF4aXM9dC5heGlzLHRoaXMuaWQ9dGhpcy5uYW1lK1wiLVwiK3RoaXMuYXhpcyx0aGlzLndheXBvaW50cz1bXSx0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpLG9bdGhpcy5heGlzXVt0aGlzLm5hbWVdPXRoaXN9dmFyIG89e3ZlcnRpY2FsOnt9LGhvcml6b250YWw6e319LG49d2luZG93LldheXBvaW50O2kucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0aGlzLndheXBvaW50cy5wdXNoKHQpfSxpLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXM9ZnVuY3Rpb24oKXt0aGlzLnRyaWdnZXJRdWV1ZXM9e3VwOltdLGRvd246W10sbGVmdDpbXSxyaWdodDpbXX19LGkucHJvdG90eXBlLmZsdXNoVHJpZ2dlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIGkgaW4gdGhpcy50cmlnZ2VyUXVldWVzKXt2YXIgbz10aGlzLnRyaWdnZXJRdWV1ZXNbaV0sbj1cInVwXCI9PT1pfHxcImxlZnRcIj09PWk7by5zb3J0KG4/ZTp0KTtmb3IodmFyIHI9MCxzPW8ubGVuZ3RoO3M+cjtyKz0xKXt2YXIgYT1vW3JdOyhhLm9wdGlvbnMuY29udGludW91c3x8cj09PW8ubGVuZ3RoLTEpJiZhLnRyaWdnZXIoW2ldKX19dGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKX0saS5wcm90b3R5cGUubmV4dD1mdW5jdGlvbihlKXt0aGlzLndheXBvaW50cy5zb3J0KHQpO3ZhciBpPW4uQWRhcHRlci5pbkFycmF5KGUsdGhpcy53YXlwb2ludHMpLG89aT09PXRoaXMud2F5cG9pbnRzLmxlbmd0aC0xO3JldHVybiBvP251bGw6dGhpcy53YXlwb2ludHNbaSsxXX0saS5wcm90b3R5cGUucHJldmlvdXM9ZnVuY3Rpb24oZSl7dGhpcy53YXlwb2ludHMuc29ydCh0KTt2YXIgaT1uLkFkYXB0ZXIuaW5BcnJheShlLHRoaXMud2F5cG9pbnRzKTtyZXR1cm4gaT90aGlzLndheXBvaW50c1tpLTFdOm51bGx9LGkucHJvdG90eXBlLnF1ZXVlVHJpZ2dlcj1mdW5jdGlvbih0LGUpe3RoaXMudHJpZ2dlclF1ZXVlc1tlXS5wdXNoKHQpfSxpLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9bi5BZGFwdGVyLmluQXJyYXkodCx0aGlzLndheXBvaW50cyk7ZT4tMSYmdGhpcy53YXlwb2ludHMuc3BsaWNlKGUsMSl9LGkucHJvdG90eXBlLmZpcnN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2F5cG9pbnRzWzBdfSxpLnByb3RvdHlwZS5sYXN0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMud2F5cG9pbnRzW3RoaXMud2F5cG9pbnRzLmxlbmd0aC0xXX0saS5maW5kT3JDcmVhdGU9ZnVuY3Rpb24odCl7cmV0dXJuIG9bdC5heGlzXVt0Lm5hbWVdfHxuZXcgaSh0KX0sbi5Hcm91cD1pfSgpLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0KXt0aGlzLiRlbGVtZW50PWUodCl9dmFyIGU9d2luZG93LmpRdWVyeSxpPXdpbmRvdy5XYXlwb2ludDtlLmVhY2goW1wiaW5uZXJIZWlnaHRcIixcImlubmVyV2lkdGhcIixcIm9mZlwiLFwib2Zmc2V0XCIsXCJvblwiLFwib3V0ZXJIZWlnaHRcIixcIm91dGVyV2lkdGhcIixcInNjcm9sbExlZnRcIixcInNjcm9sbFRvcFwiXSxmdW5jdGlvbihlLGkpe3QucHJvdG90eXBlW2ldPWZ1bmN0aW9uKCl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtyZXR1cm4gdGhpcy4kZWxlbWVudFtpXS5hcHBseSh0aGlzLiRlbGVtZW50LHQpfX0pLGUuZWFjaChbXCJleHRlbmRcIixcImluQXJyYXlcIixcImlzRW1wdHlPYmplY3RcIl0sZnVuY3Rpb24oaSxvKXt0W29dPWVbb119KSxpLmFkYXB0ZXJzLnB1c2goe25hbWU6XCJqcXVlcnlcIixBZGFwdGVyOnR9KSxpLkFkYXB0ZXI9dH0oKSxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGk9W10sbz1hcmd1bWVudHNbMF07cmV0dXJuIHQuaXNGdW5jdGlvbihhcmd1bWVudHNbMF0pJiYobz10LmV4dGVuZCh7fSxhcmd1bWVudHNbMV0pLG8uaGFuZGxlcj1hcmd1bWVudHNbMF0pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBuPXQuZXh0ZW5kKHt9LG8se2VsZW1lbnQ6dGhpc30pO1wic3RyaW5nXCI9PXR5cGVvZiBuLmNvbnRleHQmJihuLmNvbnRleHQ9dCh0aGlzKS5jbG9zZXN0KG4uY29udGV4dClbMF0pLGkucHVzaChuZXcgZShuKSl9KSxpfX12YXIgZT13aW5kb3cuV2F5cG9pbnQ7d2luZG93LmpRdWVyeSYmKHdpbmRvdy5qUXVlcnkuZm4ud2F5cG9pbnQ9dCh3aW5kb3cualF1ZXJ5KSksd2luZG93LlplcHRvJiYod2luZG93LlplcHRvLmZuLndheXBvaW50PXQod2luZG93LlplcHRvKSl9KCk7IiwiLyohXHJcbldheXBvaW50cyBJbnZpZXcgU2hvcnRjdXQgLSAzLjEuMVxyXG5Db3B5cmlnaHQgwqkgMjAxMS0yMDE1IENhbGViIFRyb3VnaHRvblxyXG5MaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9pbWFrZXdlYnRoaW5ncy93YXlwb2ludHMvYmxvZy9tYXN0ZXIvbGljZW5zZXMudHh0XHJcbiovXHJcbiFmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQoKXt9ZnVuY3Rpb24gZSh0KXt0aGlzLm9wdGlvbnM9aS5BZGFwdGVyLmV4dGVuZCh7fSxlLmRlZmF1bHRzLHQpLHRoaXMuYXhpcz10aGlzLm9wdGlvbnMuaG9yaXpvbnRhbD9cImhvcml6b250YWxcIjpcInZlcnRpY2FsXCIsdGhpcy53YXlwb2ludHM9W10sdGhpcy5jcmVhdGVXYXlwb2ludHMoKX12YXIgaT13aW5kb3cuV2F5cG9pbnQ7ZS5wcm90b3R5cGUuY3JlYXRlV2F5cG9pbnRzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXt2ZXJ0aWNhbDpbe2Rvd246XCJlbnRlclwiLHVwOlwiZXhpdGVkXCIsb2Zmc2V0OlwiMTAwJVwifSx7ZG93bjpcImVudGVyZWRcIix1cDpcImV4aXRcIixvZmZzZXQ6XCJib3R0b20taW4tdmlld1wifSx7ZG93bjpcImV4aXRcIix1cDpcImVudGVyZWRcIixvZmZzZXQ6MH0se2Rvd246XCJleGl0ZWRcIix1cDpcImVudGVyXCIsb2Zmc2V0OmZ1bmN0aW9uKCl7cmV0dXJuLXRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpfX1dLGhvcml6b250YWw6W3tyaWdodDpcImVudGVyXCIsbGVmdDpcImV4aXRlZFwiLG9mZnNldDpcIjEwMCVcIn0se3JpZ2h0OlwiZW50ZXJlZFwiLGxlZnQ6XCJleGl0XCIsb2Zmc2V0OlwicmlnaHQtaW4tdmlld1wifSx7cmlnaHQ6XCJleGl0XCIsbGVmdDpcImVudGVyZWRcIixvZmZzZXQ6MH0se3JpZ2h0OlwiZXhpdGVkXCIsbGVmdDpcImVudGVyXCIsb2Zmc2V0OmZ1bmN0aW9uKCl7cmV0dXJuLXRoaXMuYWRhcHRlci5vdXRlcldpZHRoKCl9fV19LGU9MCxpPXRbdGhpcy5heGlzXS5sZW5ndGg7aT5lO2UrKyl7dmFyIG89dFt0aGlzLmF4aXNdW2VdO3RoaXMuY3JlYXRlV2F5cG9pbnQobyl9fSxlLnByb3RvdHlwZS5jcmVhdGVXYXlwb2ludD1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMud2F5cG9pbnRzLnB1c2gobmV3IGkoe2VsZW1lbnQ6dGhpcy5vcHRpb25zLmVsZW1lbnQsaGFuZGxlcjpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oaSl7ZS5vcHRpb25zW3RbaV1dLmNhbGwodGhpcyxpKX19KHQpLG9mZnNldDp0Lm9mZnNldCxob3Jpem9udGFsOnRoaXMub3B0aW9ucy5ob3Jpem9udGFsfSkpfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT10aGlzLndheXBvaW50cy5sZW5ndGg7ZT50O3QrKyl0aGlzLndheXBvaW50c1t0XS5kZXN0cm95KCk7dGhpcy53YXlwb2ludHM9W119LGUuZGVmYXVsdHM9e2VudGVyOnQsZW50ZXJlZDp0LGV4aXQ6dCxleGl0ZWQ6dH0saS5JbnZpZXc9ZX0oKTsiLCIvKlxyXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi41LjBcclxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXHJcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXHJcbiAqL1xyXG47XHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuICAvL0ZsZXhTbGlkZXI6IE9iamVjdCBJbnN0YW5jZVxyXG4gICQuZmxleHNsaWRlciA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgc2xpZGVyID0gJChlbCk7XHJcblxyXG4gICAgLy8gbWFraW5nIHZhcmlhYmxlcyBwdWJsaWNcclxuICAgIHNsaWRlci52YXJzID0gJC5leHRlbmQoe30sICQuZmxleHNsaWRlci5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgdmFyIG5hbWVzcGFjZSA9IHNsaWRlci52YXJzLm5hbWVzcGFjZSxcclxuICAgICAgICBtc0dlc3R1cmUgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCAmJiB3aW5kb3cuTVNHZXN0dXJlLFxyXG4gICAgICAgIHRvdWNoID0gKCggXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW5kb3cgKSB8fCBtc0dlc3R1cmUgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSAmJiBzbGlkZXIudmFycy50b3VjaCxcclxuICAgICAgICAvLyBkZXByaWNhdGluZyB0aGlzIGlkZWEsIGFzIGRldmljZXMgYXJlIGJlaW5nIHJlbGVhc2VkIHdpdGggYm90aCBvZiB0aGVzZSBldmVudHNcclxuICAgICAgICAvL2V2ZW50VHlwZSA9ICh0b3VjaCkgPyBcInRvdWNoZW5kXCIgOiBcImNsaWNrXCIsXHJcbiAgICAgICAgZXZlbnRUeXBlID0gXCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLFxyXG4gICAgICAgIHdhdGNoZWRFdmVudCA9IFwiXCIsXHJcbiAgICAgICAgd2F0Y2hlZEV2ZW50Q2xlYXJUaW1lcixcclxuICAgICAgICB2ZXJ0aWNhbCA9IHNsaWRlci52YXJzLmRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgICAgIHJldmVyc2UgPSBzbGlkZXIudmFycy5yZXZlcnNlLFxyXG4gICAgICAgIGNhcm91c2VsID0gKHNsaWRlci52YXJzLml0ZW1XaWR0aCA+IDApLFxyXG4gICAgICAgIGZhZGUgPSBzbGlkZXIudmFycy5hbmltYXRpb24gPT09IFwiZmFkZVwiLFxyXG4gICAgICAgIGFzTmF2ID0gc2xpZGVyLnZhcnMuYXNOYXZGb3IgIT09IFwiXCIsXHJcbiAgICAgICAgbWV0aG9kcyA9IHt9LFxyXG4gICAgICAgIGZvY3VzZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBzbGlkZXIgb2JqZWN0XHJcbiAgICAkLmRhdGEoZWwsIFwiZmxleHNsaWRlclwiLCBzbGlkZXIpO1xyXG5cclxuICAgIC8vIFByaXZhdGUgc2xpZGVyIG1ldGhvZHNcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNsaWRlci5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAvLyBHZXQgY3VycmVudCBzbGlkZSBhbmQgbWFrZSBzdXJlIGl0IGlzIGEgbnVtYmVyXHJcbiAgICAgICAgc2xpZGVyLmN1cnJlbnRTbGlkZSA9IHBhcnNlSW50KCAoIHNsaWRlci52YXJzLnN0YXJ0QXQgPyBzbGlkZXIudmFycy5zdGFydEF0IDogMCksIDEwICk7XHJcbiAgICAgICAgaWYgKCBpc05hTiggc2xpZGVyLmN1cnJlbnRTbGlkZSApICkgeyBzbGlkZXIuY3VycmVudFNsaWRlID0gMDsgfVxyXG4gICAgICAgIHNsaWRlci5hbmltYXRpbmdUbyA9IHNsaWRlci5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgc2xpZGVyLmF0RW5kID0gKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgfHwgc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QpO1xyXG4gICAgICAgIHNsaWRlci5jb250YWluZXJTZWxlY3RvciA9IHNsaWRlci52YXJzLnNlbGVjdG9yLnN1YnN0cigwLHNsaWRlci52YXJzLnNlbGVjdG9yLnNlYXJjaCgnICcpKTtcclxuICAgICAgICBzbGlkZXIuc2xpZGVzID0gJChzbGlkZXIudmFycy5zZWxlY3Rvciwgc2xpZGVyKTtcclxuICAgICAgICBzbGlkZXIuY29udGFpbmVyID0gJChzbGlkZXIuY29udGFpbmVyU2VsZWN0b3IsIHNsaWRlcik7XHJcbiAgICAgICAgc2xpZGVyLmNvdW50ID0gc2xpZGVyLnNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgLy8gU1lOQzpcclxuICAgICAgICBzbGlkZXIuc3luY0V4aXN0cyA9ICQoc2xpZGVyLnZhcnMuc3luYykubGVuZ3RoID4gMDtcclxuICAgICAgICAvLyBTTElERTpcclxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMuYW5pbWF0aW9uID09PSBcInNsaWRlXCIpIHsgc2xpZGVyLnZhcnMuYW5pbWF0aW9uID0gXCJzd2luZ1wiOyB9XHJcbiAgICAgICAgc2xpZGVyLnByb3AgPSAodmVydGljYWwpID8gXCJ0b3BcIiA6IFwibWFyZ2luTGVmdFwiO1xyXG4gICAgICAgIHNsaWRlci5hcmdzID0ge307XHJcbiAgICAgICAgLy8gU0xJREVTSE9XOlxyXG4gICAgICAgIHNsaWRlci5tYW51YWxQYXVzZSA9IGZhbHNlO1xyXG4gICAgICAgIHNsaWRlci5zdG9wcGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy9QQVVTRSBXSEVOIElOVklTSUJMRVxyXG4gICAgICAgIHNsaWRlci5zdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgc2xpZGVyLnN0YXJ0VGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgLy8gVE9VQ0gvVVNFQ1NTOlxyXG4gICAgICAgIHNsaWRlci50cmFuc2l0aW9ucyA9ICFzbGlkZXIudmFycy52aWRlbyAmJiAhZmFkZSAmJiBzbGlkZXIudmFycy51c2VDU1MgJiYgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIG9iaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG4gICAgICAgICAgICAgIHByb3BzID0gWydwZXJzcGVjdGl2ZVByb3BlcnR5JywgJ1dlYmtpdFBlcnNwZWN0aXZlJywgJ01velBlcnNwZWN0aXZlJywgJ09QZXJzcGVjdGl2ZScsICdtc1BlcnNwZWN0aXZlJ107XHJcbiAgICAgICAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmICggb2JqLnN0eWxlWyBwcm9wc1tpXSBdICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgICAgc2xpZGVyLnBmeCA9IHByb3BzW2ldLnJlcGxhY2UoJ1BlcnNwZWN0aXZlJywnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICBzbGlkZXIucHJvcCA9IFwiLVwiICsgc2xpZGVyLnBmeCArIFwiLXRyYW5zZm9ybVwiO1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBzbGlkZXIuZW5zdXJlQW5pbWF0aW9uRW5kID0gJyc7XHJcbiAgICAgICAgLy8gQ09OVFJPTFNDT05UQUlORVI6XHJcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmNvbnRyb2xzQ29udGFpbmVyICE9PSBcIlwiKSBzbGlkZXIuY29udHJvbHNDb250YWluZXIgPSAkKHNsaWRlci52YXJzLmNvbnRyb2xzQ29udGFpbmVyKS5sZW5ndGggPiAwICYmICQoc2xpZGVyLnZhcnMuY29udHJvbHNDb250YWluZXIpO1xyXG4gICAgICAgIC8vIE1BTlVBTDpcclxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMubWFudWFsQ29udHJvbHMgIT09IFwiXCIpIHNsaWRlci5tYW51YWxDb250cm9scyA9ICQoc2xpZGVyLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aCA+IDAgJiYgJChzbGlkZXIudmFycy5tYW51YWxDb250cm9scyk7XHJcblxyXG4gICAgICAgIC8vIENVU1RPTSBESVJFQ1RJT04gTkFWOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5jdXN0b21EaXJlY3Rpb25OYXYgIT09IFwiXCIpIHNsaWRlci5jdXN0b21EaXJlY3Rpb25OYXYgPSAkKHNsaWRlci52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoID09PSAyICYmICQoc2xpZGVyLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KTtcclxuXHJcbiAgICAgICAgLy8gUkFORE9NSVpFOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5yYW5kb21pemUpIHtcclxuICAgICAgICAgIHNsaWRlci5zbGlkZXMuc29ydChmdW5jdGlvbigpIHsgcmV0dXJuIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLTAuNSk7IH0pO1xyXG4gICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChzbGlkZXIuc2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNsaWRlci5kb01hdGgoKTtcclxuXHJcbiAgICAgICAgLy8gSU5JVFxyXG4gICAgICAgIHNsaWRlci5zZXR1cChcImluaXRcIik7XHJcblxyXG4gICAgICAgIC8vIENPTlRST0xOQVY6XHJcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmNvbnRyb2xOYXYpIHsgbWV0aG9kcy5jb250cm9sTmF2LnNldHVwKCk7IH1cclxuXHJcbiAgICAgICAgLy8gRElSRUNUSU9OTkFWOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5kaXJlY3Rpb25OYXYpIHsgbWV0aG9kcy5kaXJlY3Rpb25OYXYuc2V0dXAoKTsgfVxyXG5cclxuICAgICAgICAvLyBLRVlCT0FSRDpcclxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMua2V5Ym9hcmQgJiYgKCQoc2xpZGVyLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGggPT09IDEgfHwgc2xpZGVyLnZhcnMubXVsdGlwbGVLZXlib2FyZCkpIHtcclxuICAgICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGtleWNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgICAgICAgICBpZiAoIXNsaWRlci5hbmltYXRpbmcgJiYgKGtleWNvZGUgPT09IDM5IHx8IGtleWNvZGUgPT09IDM3KSkge1xyXG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoa2V5Y29kZSA9PT0gMzkpID8gc2xpZGVyLmdldFRhcmdldCgnbmV4dCcpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleWNvZGUgPT09IDM3KSA/IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZSh0YXJnZXQsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTU9VU0VXSEVFTDpcclxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMubW91c2V3aGVlbCkge1xyXG4gICAgICAgICAgc2xpZGVyLmJpbmQoJ21vdXNld2hlZWwnLCBmdW5jdGlvbihldmVudCwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoZGVsdGEgPCAwKSA/IHNsaWRlci5nZXRUYXJnZXQoJ25leHQnKSA6IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKTtcclxuICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBBVVNFUExBWVxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5wYXVzZVBsYXkpIHsgbWV0aG9kcy5wYXVzZVBsYXkuc2V0dXAoKTsgfVxyXG5cclxuICAgICAgICAvL1BBVVNFIFdIRU4gSU5WSVNJQkxFXHJcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLnNsaWRlc2hvdyAmJiBzbGlkZXIudmFycy5wYXVzZUludmlzaWJsZSkgeyBtZXRob2RzLnBhdXNlSW52aXNpYmxlLmluaXQoKTsgfVxyXG5cclxuICAgICAgICAvLyBTTElEU0VTSE9XXHJcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLnNsaWRlc2hvdykge1xyXG4gICAgICAgICAgaWYgKHNsaWRlci52YXJzLnBhdXNlT25Ib3Zlcikge1xyXG4gICAgICAgICAgICBzbGlkZXIuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCFzbGlkZXIubWFudWFsUGxheSAmJiAhc2xpZGVyLm1hbnVhbFBhdXNlKSB7IHNsaWRlci5wYXVzZSgpOyB9XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGlmICghc2xpZGVyLm1hbnVhbFBhdXNlICYmICFzbGlkZXIubWFudWFsUGxheSAmJiAhc2xpZGVyLnN0b3BwZWQpIHsgc2xpZGVyLnBsYXkoKTsgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIGluaXRpYWxpemUgYW5pbWF0aW9uXHJcbiAgICAgICAgICAvL0lmIHdlJ3JlIHZpc2libGUsIG9yIHdlIGRvbid0IHVzZSBQYWdlVmlzaWJpbGl0eSBBUElcclxuICAgICAgICAgIGlmKCFzbGlkZXIudmFycy5wYXVzZUludmlzaWJsZSB8fCAhbWV0aG9kcy5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpKSB7XHJcbiAgICAgICAgICAgIChzbGlkZXIudmFycy5pbml0RGVsYXkgPiAwKSA/IHNsaWRlci5zdGFydFRpbWVvdXQgPSBzZXRUaW1lb3V0KHNsaWRlci5wbGF5LCBzbGlkZXIudmFycy5pbml0RGVsYXkpIDogc2xpZGVyLnBsYXkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFTTkFWOlxyXG4gICAgICAgIGlmIChhc05hdikgeyBtZXRob2RzLmFzTmF2LnNldHVwKCk7IH1cclxuXHJcbiAgICAgICAgLy8gVE9VQ0hcclxuICAgICAgICBpZiAodG91Y2ggJiYgc2xpZGVyLnZhcnMudG91Y2gpIHsgbWV0aG9kcy50b3VjaCgpOyB9XHJcblxyXG4gICAgICAgIC8vIEZBREUmJlNNT09USEhFSUdIVCB8fCBTTElERTpcclxuICAgICAgICBpZiAoIWZhZGUgfHwgKGZhZGUgJiYgc2xpZGVyLnZhcnMuc21vb3RoSGVpZ2h0KSkgeyAkKHdpbmRvdykuYmluZChcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBmb2N1c1wiLCBtZXRob2RzLnJlc2l6ZSk7IH1cclxuXHJcbiAgICAgICAgc2xpZGVyLmZpbmQoXCJpbWdcIikuYXR0cihcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAvLyBBUEk6IHN0YXJ0KCkgQ2FsbGJhY2tcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzbGlkZXIudmFycy5zdGFydChzbGlkZXIpO1xyXG4gICAgICAgIH0sIDIwMCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzTmF2OiB7XHJcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2xpZGVyLmFzTmF2ID0gdHJ1ZTtcclxuICAgICAgICAgIHNsaWRlci5hbmltYXRpbmdUbyA9IE1hdGguZmxvb3Ioc2xpZGVyLmN1cnJlbnRTbGlkZS9zbGlkZXIubW92ZSk7XHJcbiAgICAgICAgICBzbGlkZXIuY3VycmVudEl0ZW0gPSBzbGlkZXIuY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgc2xpZGVyLnNsaWRlcy5yZW1vdmVDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKS5lcShzbGlkZXIuY3VycmVudEl0ZW0pLmFkZENsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpO1xyXG4gICAgICAgICAgaWYoIW1zR2VzdHVyZSl7XHJcbiAgICAgICAgICAgICAgc2xpZGVyLnNsaWRlcy5vbihldmVudFR5cGUsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyICRzbGlkZSA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHNsaWRlLmluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zRnJvbUxlZnQgPSAkc2xpZGUub2Zmc2V0KCkubGVmdCAtICQoc2xpZGVyKS5zY3JvbGxMZWZ0KCk7IC8vIEZpbmQgcG9zaXRpb24gb2Ygc2xpZGUgcmVsYXRpdmUgdG8gbGVmdCBvZiBzbGlkZXIgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBpZiggcG9zRnJvbUxlZnQgPD0gMCAmJiAkc2xpZGUuaGFzQ2xhc3MoIG5hbWVzcGFjZSArICdhY3RpdmUtc2xpZGUnICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZShzbGlkZXIuZ2V0VGFyZ2V0KFwicHJldlwiKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEkKHNsaWRlci52YXJzLmFzTmF2Rm9yKS5kYXRhKCdmbGV4c2xpZGVyJykuYW5pbWF0aW5nICYmICEkc2xpZGUuaGFzQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmUtc2xpZGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbiA9IChzbGlkZXIuY3VycmVudEl0ZW0gPCB0YXJnZXQpID8gXCJuZXh0XCIgOiBcInByZXZcIjtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbiwgZmFsc2UsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgZWwuX3NsaWRlciA9IHNsaWRlcjtcclxuICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgdGhhdC5fZ2VzdHVyZSA9IG5ldyBNU0dlc3R1cmUoKTtcclxuICAgICAgICAgICAgICAgICAgdGhhdC5fZ2VzdHVyZS50YXJnZXQgPSB0aGF0O1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGUuY3VycmVudFRhcmdldC5fZ2VzdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUuYWRkUG9pbnRlcihlLnBvaW50ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgdGhhdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlVGFwXCIsIGZ1bmN0aW9uIChlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciAkc2xpZGUgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9ICRzbGlkZS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKHNsaWRlci52YXJzLmFzTmF2Rm9yKS5kYXRhKCdmbGV4c2xpZGVyJykuYW5pbWF0aW5nICYmICEkc2xpZGUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbiA9IChzbGlkZXIuY3VycmVudEl0ZW0gPCB0YXJnZXQpID8gXCJuZXh0XCIgOiBcInByZXZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29udHJvbE5hdjoge1xyXG4gICAgICAgIHNldHVwOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlmICghc2xpZGVyLm1hbnVhbENvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZHMuY29udHJvbE5hdi5zZXR1cFBhZ2luZygpO1xyXG4gICAgICAgICAgfSBlbHNlIHsgLy8gTUFOVUFMQ09OVFJPTFM6XHJcbiAgICAgICAgICAgIG1ldGhvZHMuY29udHJvbE5hdi5zZXR1cE1hbnVhbCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0dXBQYWdpbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIHR5cGUgPSAoc2xpZGVyLnZhcnMuY29udHJvbE5hdiA9PT0gXCJ0aHVtYm5haWxzXCIpID8gJ2NvbnRyb2wtdGh1bWJzJyA6ICdjb250cm9sLXBhZ2luZycsXHJcbiAgICAgICAgICAgICAgaiA9IDEsXHJcbiAgICAgICAgICAgICAgaXRlbSxcclxuICAgICAgICAgICAgICBzbGlkZTtcclxuXHJcbiAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdlNjYWZmb2xkID0gJCgnPG9sIGNsYXNzPVwiJysgbmFtZXNwYWNlICsgJ2NvbnRyb2wtbmF2ICcgKyBuYW1lc3BhY2UgKyB0eXBlICsgJ1wiPjwvb2w+Jyk7XHJcblxyXG4gICAgICAgICAgaWYgKHNsaWRlci5wYWdpbmdDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXIucGFnaW5nQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgIHNsaWRlID0gc2xpZGVyLnNsaWRlcy5lcShpKTtcclxuICAgICAgICAgICAgICBpdGVtID0gKHNsaWRlci52YXJzLmNvbnRyb2xOYXYgPT09IFwidGh1bWJuYWlsc1wiKSA/ICc8aW1nIHNyYz1cIicgKyBzbGlkZS5hdHRyKCAnZGF0YS10aHVtYicgKSArICdcIi8+JyA6ICc8YT4nICsgaiArICc8L2E+JztcclxuICAgICAgICAgICAgICBpZiAoICd0aHVtYm5haWxzJyA9PT0gc2xpZGVyLnZhcnMuY29udHJvbE5hdiAmJiB0cnVlID09PSBzbGlkZXIudmFycy50aHVtYkNhcHRpb25zICkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhcHRuID0gc2xpZGUuYXR0ciggJ2RhdGEtdGh1bWJjYXB0aW9uJyApO1xyXG4gICAgICAgICAgICAgICAgaWYgKCAnJyAhPT0gY2FwdG4gJiYgdW5kZWZpbmVkICE9PSBjYXB0biApIHsgaXRlbSArPSAnPHNwYW4gY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ2NhcHRpb25cIj4nICsgY2FwdG4gKyAnPC9zcGFuPic7IH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJzxsaT4nICsgaXRlbSArICc8L2xpPicpO1xyXG4gICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIENPTlRST0xTQ09OVEFJTkVSOlxyXG4gICAgICAgICAgKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikgPyAkKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKHNsaWRlci5jb250cm9sTmF2U2NhZmZvbGQpIDogc2xpZGVyLmFwcGVuZChzbGlkZXIuY29udHJvbE5hdlNjYWZmb2xkKTtcclxuICAgICAgICAgIG1ldGhvZHMuY29udHJvbE5hdi5zZXQoKTtcclxuXHJcbiAgICAgICAgICBtZXRob2RzLmNvbnRyb2xOYXYuYWN0aXZlKCk7XHJcblxyXG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZSgnYSwgaW1nJywgZXZlbnRUeXBlLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIiB8fCB3YXRjaGVkRXZlbnQgPT09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQgPSBzbGlkZXIuY29udHJvbE5hdi5pbmRleCgkdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghJHRoaXMuaGFzQ2xhc3MobmFtZXNwYWNlICsgJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uID0gKHRhcmdldCA+IHNsaWRlci5jdXJyZW50U2xpZGUpID8gXCJuZXh0XCIgOiBcInByZXZcIjtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5mbGV4QW5pbWF0ZSh0YXJnZXQsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0dXAgZmxhZ3MgdG8gcHJldmVudCBldmVudCBkdXBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAod2F0Y2hlZEV2ZW50ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgd2F0Y2hlZEV2ZW50ID0gZXZlbnQudHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRob2RzLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKTtcclxuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldHVwTWFudWFsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2ID0gc2xpZGVyLm1hbnVhbENvbnRyb2xzO1xyXG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LmFjdGl2ZSgpO1xyXG5cclxuICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2LmJpbmQoZXZlbnRUeXBlLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIiB8fCB3YXRjaGVkRXZlbnQgPT09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQgPSBzbGlkZXIuY29udHJvbE5hdi5pbmRleCgkdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghJHRoaXMuaGFzQ2xhc3MobmFtZXNwYWNlICsgJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAodGFyZ2V0ID4gc2xpZGVyLmN1cnJlbnRTbGlkZSkgPyBzbGlkZXIuZGlyZWN0aW9uID0gXCJuZXh0XCIgOiBzbGlkZXIuZGlyZWN0aW9uID0gXCJwcmV2XCI7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldHVwIGZsYWdzIHRvIHByZXZlbnQgZXZlbnQgZHVwbGljYXRpb25cclxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgIHdhdGNoZWRFdmVudCA9IGV2ZW50LnR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0aG9kcy5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgc2VsZWN0b3IgPSAoc2xpZGVyLnZhcnMuY29udHJvbE5hdiA9PT0gXCJ0aHVtYm5haWxzXCIpID8gJ2ltZycgOiAnYSc7XHJcbiAgICAgICAgICBzbGlkZXIuY29udHJvbE5hdiA9ICQoJy4nICsgbmFtZXNwYWNlICsgJ2NvbnRyb2wtbmF2IGxpICcgKyBzZWxlY3RvciwgKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikgPyBzbGlkZXIuY29udHJvbHNDb250YWluZXIgOiBzbGlkZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aXZlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNsaWRlci5jb250cm9sTmF2LnJlbW92ZUNsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlXCIpLmVxKHNsaWRlci5hbmltYXRpbmdUbykuYWRkQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKGFjdGlvbiwgcG9zKSB7XHJcbiAgICAgICAgICBpZiAoc2xpZGVyLnBhZ2luZ0NvdW50ID4gMSAmJiBhY3Rpb24gPT09IFwiYWRkXCIpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhPicgKyBzbGlkZXIuY291bnQgKyAnPC9hPjwvbGk+JykpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIucGFnaW5nQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKCdsaScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2xpZGVyLmNvbnRyb2xOYXYuZXEocG9zKS5jbG9zZXN0KCdsaScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LnNldCgpO1xyXG4gICAgICAgICAgKHNsaWRlci5wYWdpbmdDb3VudCA+IDEgJiYgc2xpZGVyLnBhZ2luZ0NvdW50ICE9PSBzbGlkZXIuY29udHJvbE5hdi5sZW5ndGgpID8gc2xpZGVyLnVwZGF0ZShwb3MsIGFjdGlvbikgOiBtZXRob2RzLmNvbnRyb2xOYXYuYWN0aXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkaXJlY3Rpb25OYXY6IHtcclxuICAgICAgICBzZXR1cDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uTmF2U2NhZmZvbGQgPSAkKCc8dWwgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ3ByZXZcIiBocmVmPVwiI1wiPicgKyBzbGlkZXIudmFycy5wcmV2VGV4dCArICc8L2E+PC9saT48bGkgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInICsgbmFtZXNwYWNlICsgJ25leHRcIiBocmVmPVwiI1wiPicgKyBzbGlkZXIudmFycy5uZXh0VGV4dCArICc8L2E+PC9saT48L3VsPicpO1xyXG5cclxuICAgICAgICAgIC8vIENVU1RPTSBESVJFQ1RJT04gTkFWOlxyXG4gICAgICAgICAgaWYgKHNsaWRlci5jdXN0b21EaXJlY3Rpb25OYXYpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdiA9IHNsaWRlci5jdXN0b21EaXJlY3Rpb25OYXY7XHJcbiAgICAgICAgICAvLyBDT05UUk9MU0NPTlRBSU5FUjpcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICQoc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZGlyZWN0aW9uTmF2U2NhZmZvbGQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2ID0gJCgnLicgKyBuYW1lc3BhY2UgKyAnZGlyZWN0aW9uLW5hdiBsaSBhJywgc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQoZGlyZWN0aW9uTmF2U2NhZmZvbGQpO1xyXG4gICAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2ID0gJCgnLicgKyBuYW1lc3BhY2UgKyAnZGlyZWN0aW9uLW5hdiBsaSBhJywgc2xpZGVyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtZXRob2RzLmRpcmVjdGlvbk5hdi51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uTmF2LmJpbmQoZXZlbnRUeXBlLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHdhdGNoZWRFdmVudCA9PT0gXCJcIiB8fCB3YXRjaGVkRXZlbnQgPT09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICB0YXJnZXQgPSAoJCh0aGlzKS5oYXNDbGFzcyhuYW1lc3BhY2UgKyAnbmV4dCcpKSA/IHNsaWRlci5nZXRUYXJnZXQoJ25leHQnKSA6IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKTtcclxuICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0dXAgZmxhZ3MgdG8gcHJldmVudCBldmVudCBkdXBsaWNhdGlvblxyXG4gICAgICAgICAgICBpZiAod2F0Y2hlZEV2ZW50ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgd2F0Y2hlZEV2ZW50ID0gZXZlbnQudHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRob2RzLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBkaXNhYmxlZENsYXNzID0gbmFtZXNwYWNlICsgJ2Rpc2FibGVkJztcclxuICAgICAgICAgIGlmIChzbGlkZXIucGFnaW5nQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhkaXNhYmxlZENsYXNzKS5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVyLmFuaW1hdGluZ1RvID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhkaXNhYmxlZENsYXNzKS5maWx0ZXIoJy4nICsgbmFtZXNwYWNlICsgXCJwcmV2XCIpLmFkZENsYXNzKGRpc2FibGVkQ2xhc3MpLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCkge1xyXG4gICAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZGlzYWJsZWRDbGFzcykuZmlsdGVyKCcuJyArIG5hbWVzcGFjZSArIFwibmV4dFwiKS5hZGRDbGFzcyhkaXNhYmxlZENsYXNzKS5hdHRyKCd0YWJpbmRleCcsICctMScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNsaWRlci5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZGlzYWJsZWRDbGFzcykucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2xpZGVyLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhkaXNhYmxlZENsYXNzKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGF1c2VQbGF5OiB7XHJcbiAgICAgICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIHBhdXNlUGxheVNjYWZmb2xkID0gJCgnPGRpdiBjbGFzcz1cIicgKyBuYW1lc3BhY2UgKyAncGF1c2VwbGF5XCI+PGE+PC9hPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgIC8vIENPTlRST0xTQ09OVEFJTkVSOlxyXG4gICAgICAgICAgaWYgKHNsaWRlci5jb250cm9sc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBzbGlkZXIuY29udHJvbHNDb250YWluZXIuYXBwZW5kKHBhdXNlUGxheVNjYWZmb2xkKTtcclxuICAgICAgICAgICAgc2xpZGVyLnBhdXNlUGxheSA9ICQoJy4nICsgbmFtZXNwYWNlICsgJ3BhdXNlcGxheSBhJywgc2xpZGVyLmNvbnRyb2xzQ29udGFpbmVyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hcHBlbmQocGF1c2VQbGF5U2NhZmZvbGQpO1xyXG4gICAgICAgICAgICBzbGlkZXIucGF1c2VQbGF5ID0gJCgnLicgKyBuYW1lc3BhY2UgKyAncGF1c2VwbGF5IGEnLCBzbGlkZXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1ldGhvZHMucGF1c2VQbGF5LnVwZGF0ZSgoc2xpZGVyLnZhcnMuc2xpZGVzaG93KSA/IG5hbWVzcGFjZSArICdwYXVzZScgOiBuYW1lc3BhY2UgKyAncGxheScpO1xyXG5cclxuICAgICAgICAgIHNsaWRlci5wYXVzZVBsYXkuYmluZChldmVudFR5cGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod2F0Y2hlZEV2ZW50ID09PSBcIlwiIHx8IHdhdGNoZWRFdmVudCA9PT0gZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKG5hbWVzcGFjZSArICdwYXVzZScpKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIubWFudWFsUGF1c2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLm1hbnVhbFBsYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIubWFudWFsUGF1c2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5tYW51YWxQbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzZXR1cCBmbGFncyB0byBwcmV2ZW50IGV2ZW50IGR1cGxpY2F0aW9uXHJcbiAgICAgICAgICAgIGlmICh3YXRjaGVkRXZlbnQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICB3YXRjaGVkRXZlbnQgPSBldmVudC50eXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldGhvZHMuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgICAoc3RhdGUgPT09IFwicGxheVwiKSA/IHNsaWRlci5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgJ3BhdXNlJykuYWRkQ2xhc3MobmFtZXNwYWNlICsgJ3BsYXknKS5odG1sKHNsaWRlci52YXJzLnBsYXlUZXh0KSA6IHNsaWRlci5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MobmFtZXNwYWNlICsgJ3BsYXknKS5hZGRDbGFzcyhuYW1lc3BhY2UgKyAncGF1c2UnKS5odG1sKHNsaWRlci52YXJzLnBhdXNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0WCxcclxuICAgICAgICAgIHN0YXJ0WSxcclxuICAgICAgICAgIG9mZnNldCxcclxuICAgICAgICAgIGN3aWR0aCxcclxuICAgICAgICAgIGR4LFxyXG4gICAgICAgICAgc3RhcnRULFxyXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0LFxyXG4gICAgICAgICAgb25Ub3VjaE1vdmUsXHJcbiAgICAgICAgICBvblRvdWNoRW5kLFxyXG4gICAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2UsXHJcbiAgICAgICAgICBsb2NhbFggPSAwLFxyXG4gICAgICAgICAgbG9jYWxZID0gMCxcclxuICAgICAgICAgIGFjY0R4ID0gMDtcclxuXHJcbiAgICAgICAgaWYoIW1zR2VzdHVyZSl7XHJcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICBpZiAoc2xpZGVyLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoICggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICkgfHwgZS50b3VjaGVzLmxlbmd0aCA9PT0gMSApIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ0FST1VTRUw6XHJcbiAgICAgICAgICAgICAgICBjd2lkdGggPSAodmVydGljYWwpID8gc2xpZGVyLmggOiBzbGlkZXIuIHc7XHJcbiAgICAgICAgICAgICAgICBzdGFydFQgPSBOdW1iZXIobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBDQVJPVVNFTDpcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMb2NhbCB2YXJzIGZvciBYIGFuZCBZIHBvaW50cy5cclxuICAgICAgICAgICAgICAgIGxvY2FsWCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgICAgIGxvY2FsWSA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAoY2Fyb3VzZWwgJiYgcmV2ZXJzZSAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5sYXN0KSA/IDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsICYmIHJldmVyc2UpID8gc2xpZGVyLmxpbWl0IC0gKCgoc2xpZGVyLml0ZW1XICsgc2xpZGVyLnZhcnMuaXRlbU1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuYW5pbWF0aW5nVG8pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChjYXJvdXNlbCAmJiBzbGlkZXIuY3VycmVudFNsaWRlID09PSBzbGlkZXIubGFzdCkgPyBzbGlkZXIubGltaXQgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsKSA/ICgoc2xpZGVyLml0ZW1XICsgc2xpZGVyLnZhcnMuaXRlbU1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuY3VycmVudFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChyZXZlcnNlKSA/IChzbGlkZXIubGFzdCAtIHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogY3dpZHRoIDogKHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogY3dpZHRoO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRYID0gKHZlcnRpY2FsKSA/IGxvY2FsWSA6IGxvY2FsWDtcclxuICAgICAgICAgICAgICAgIHN0YXJ0WSA9ICh2ZXJ0aWNhbCkgPyBsb2NhbFggOiBsb2NhbFk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgIC8vIExvY2FsIHZhcnMgZm9yIFggYW5kIFkgcG9pbnRzLlxyXG5cclxuICAgICAgICAgICAgICBsb2NhbFggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgICAgICAgbG9jYWxZID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuICAgICAgICAgICAgICBkeCA9ICh2ZXJ0aWNhbCkgPyBzdGFydFggLSBsb2NhbFkgOiBzdGFydFggLSBsb2NhbFg7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsaW5nID0gKHZlcnRpY2FsKSA/IChNYXRoLmFicyhkeCkgPCBNYXRoLmFicyhsb2NhbFggLSBzdGFydFkpKSA6IChNYXRoLmFicyhkeCkgPCBNYXRoLmFicyhsb2NhbFkgLSBzdGFydFkpKTtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIGZ4bXMgPSA1MDA7XHJcblxyXG4gICAgICAgICAgICAgIGlmICggISBzY3JvbGxpbmcgfHwgTnVtYmVyKCBuZXcgRGF0ZSgpICkgLSBzdGFydFQgPiBmeG1zICkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmYWRlICYmIHNsaWRlci50cmFuc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBkeCA9IGR4Lygoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBkeCA8IDAgfHwgc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QgJiYgZHggPiAwKSA/IChNYXRoLmFicyhkeCkvY3dpZHRoKzIpIDogMSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc2xpZGVyLnNldFByb3BzKG9mZnNldCArIGR4LCBcInNldFRvdWNoXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG9uVG91Y2hFbmQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgLy8gZmluaXNoIHRoZSB0b3VjaCBieSB1bmRvaW5nIHRoZSB0b3VjaCBzZXNzaW9uXHJcbiAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHNsaWRlci5hbmltYXRpbmdUbyA9PT0gc2xpZGVyLmN1cnJlbnRTbGlkZSAmJiAhc2Nyb2xsaW5nICYmICEoZHggPT09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlRHggPSAocmV2ZXJzZSkgPyAtZHggOiBkeCxcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSAodXBkYXRlRHggPiAwKSA/IHNsaWRlci5nZXRUYXJnZXQoJ25leHQnKSA6IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLmNhbkFkdmFuY2UodGFyZ2V0KSAmJiAoTnVtYmVyKG5ldyBEYXRlKCkpIC0gc3RhcnRUIDwgNTUwICYmIE1hdGguYWJzKHVwZGF0ZUR4KSA+IDUwIHx8IE1hdGguYWJzKHVwZGF0ZUR4KSA+IGN3aWR0aC8yKSkge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXIuZmxleEFuaW1hdGUodGFyZ2V0LCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghZmFkZSkgeyBzbGlkZXIuZmxleEFuaW1hdGUoc2xpZGVyLmN1cnJlbnRTbGlkZSwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbiwgdHJ1ZSk7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgIHN0YXJ0WCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgc3RhcnRZID0gbnVsbDtcclxuICAgICAgICAgICAgICBkeCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgb2Zmc2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZWwuc3R5bGUubXNUb3VjaEFjdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlbC5fZ2VzdHVyZSA9IG5ldyBNU0dlc3R1cmUoKTtcclxuICAgICAgICAgICAgZWwuX2dlc3R1cmUudGFyZ2V0ID0gZWw7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsIG9uTVNQb2ludGVyRG93biwgZmFsc2UpO1xyXG4gICAgICAgICAgICBlbC5fc2xpZGVyID0gc2xpZGVyO1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlQ2hhbmdlXCIsIG9uTVNHZXN0dXJlQ2hhbmdlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJNU0dlc3R1cmVFbmRcIiwgb25NU0dlc3R1cmVFbmQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTVNQb2ludGVyRG93bihlKXtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLmFuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLl9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY0R4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjd2lkdGggPSAodmVydGljYWwpID8gc2xpZGVyLmggOiBzbGlkZXIuIHc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENBUk9VU0VMOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAoY2Fyb3VzZWwgJiYgcmV2ZXJzZSAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5sYXN0KSA/IDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2Fyb3VzZWwgJiYgcmV2ZXJzZSkgPyBzbGlkZXIubGltaXQgLSAoKChzbGlkZXIuaXRlbVcgKyBzbGlkZXIudmFycy5pdGVtTWFyZ2luKSAqIHNsaWRlci5tb3ZlKSAqIHNsaWRlci5hbmltYXRpbmdUbykgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsICYmIHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0KSA/IHNsaWRlci5saW1pdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhcm91c2VsKSA/ICgoc2xpZGVyLml0ZW1XICsgc2xpZGVyLnZhcnMuaXRlbU1hcmdpbikgKiBzbGlkZXIubW92ZSkgKiBzbGlkZXIuY3VycmVudFNsaWRlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJldmVyc2UpID8gKHNsaWRlci5sYXN0IC0gc2xpZGVyLmN1cnJlbnRTbGlkZSArIHNsaWRlci5jbG9uZU9mZnNldCkgKiBjd2lkdGggOiAoc2xpZGVyLmN1cnJlbnRTbGlkZSArIHNsaWRlci5jbG9uZU9mZnNldCkgKiBjd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTVNHZXN0dXJlQ2hhbmdlKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVyID0gZS50YXJnZXQuX3NsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmKCFzbGlkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc1ggPSAtZS50cmFuc2xhdGlvblgsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNZID0gLWUudHJhbnNsYXRpb25ZO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQWNjdW11bGF0ZSB0cmFuc2xhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICBhY2NEeCA9IGFjY0R4ICsgKCh2ZXJ0aWNhbCkgPyB0cmFuc1kgOiB0cmFuc1gpO1xyXG4gICAgICAgICAgICAgICAgZHggPSBhY2NEeDtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZyA9ICh2ZXJ0aWNhbCkgPyAoTWF0aC5hYnMoYWNjRHgpIDwgTWF0aC5hYnMoLXRyYW5zWCkpIDogKE1hdGguYWJzKGFjY0R4KSA8IE1hdGguYWJzKC10cmFuc1kpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlLmRldGFpbCA9PT0gZS5NU0dFU1RVUkVfRkxBR19JTkVSVElBKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLl9nZXN0dXJlLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc2Nyb2xsaW5nIHx8IE51bWJlcihuZXcgRGF0ZSgpKSAtIHN0YXJ0VCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZhZGUgJiYgc2xpZGVyLnRyYW5zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHggPSBhY2NEeCAvICgoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBhY2NEeCA8IDAgfHwgc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QgJiYgYWNjRHggPiAwKSA/IChNYXRoLmFicyhhY2NEeCkgLyBjd2lkdGggKyAyKSA6IDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlci5zZXRQcm9wcyhvZmZzZXQgKyBkeCwgXCJzZXRUb3VjaFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uTVNHZXN0dXJlRW5kKGUpIHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVyID0gZS50YXJnZXQuX3NsaWRlcjtcclxuICAgICAgICAgICAgICAgIGlmKCFzbGlkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5jdXJyZW50U2xpZGUgJiYgIXNjcm9sbGluZyAmJiAhKGR4ID09PSBudWxsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVEeCA9IChyZXZlcnNlKSA/IC1keCA6IGR4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSAodXBkYXRlRHggPiAwKSA/IHNsaWRlci5nZXRUYXJnZXQoJ25leHQnKSA6IHNsaWRlci5nZXRUYXJnZXQoJ3ByZXYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlci5jYW5BZHZhbmNlKHRhcmdldCkgJiYgKE51bWJlcihuZXcgRGF0ZSgpKSAtIHN0YXJ0VCA8IDU1MCAmJiBNYXRoLmFicyh1cGRhdGVEeCkgPiA1MCB8fCBNYXRoLmFicyh1cGRhdGVEeCkgPiBjd2lkdGgvMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmZsZXhBbmltYXRlKHRhcmdldCwgc2xpZGVyLnZhcnMucGF1c2VPbkFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmYWRlKSB7IHNsaWRlci5mbGV4QW5pbWF0ZShzbGlkZXIuY3VycmVudFNsaWRlLCBzbGlkZXIudmFycy5wYXVzZU9uQWN0aW9uLCB0cnVlKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzdGFydFggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRZID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGR4ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG9mZnNldCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBhY2NEeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFzbGlkZXIuYW5pbWF0aW5nICYmIHNsaWRlci5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgaWYgKCFjYXJvdXNlbCkgeyBzbGlkZXIuZG9NYXRoKCk7IH1cclxuXHJcbiAgICAgICAgICBpZiAoZmFkZSkge1xyXG4gICAgICAgICAgICAvLyBTTU9PVEggSEVJR0hUOlxyXG4gICAgICAgICAgICBtZXRob2RzLnNtb290aEhlaWdodCgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChjYXJvdXNlbCkgeyAvL0NBUk9VU0VMOlxyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLndpZHRoKHNsaWRlci5jb21wdXRlZFcpO1xyXG4gICAgICAgICAgICBzbGlkZXIudXBkYXRlKHNsaWRlci5wYWdpbmdDb3VudCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5zZXRQcm9wcygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAodmVydGljYWwpIHsgLy9WRVJUSUNBTDpcclxuICAgICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmhlaWdodChzbGlkZXIuaCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5zZXRQcm9wcyhzbGlkZXIuaCwgXCJzZXRUb3RhbFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNNT09USCBIRUlHSFQ6XHJcbiAgICAgICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoKTsgfVxyXG4gICAgICAgICAgICBzbGlkZXIubmV3U2xpZGVzLndpZHRoKHNsaWRlci5jb21wdXRlZFcpO1xyXG4gICAgICAgICAgICBzbGlkZXIuc2V0UHJvcHMoc2xpZGVyLmNvbXB1dGVkVywgXCJzZXRUb3RhbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNtb290aEhlaWdodDogZnVuY3Rpb24oZHVyKSB7XHJcbiAgICAgICAgaWYgKCF2ZXJ0aWNhbCB8fCBmYWRlKSB7XHJcbiAgICAgICAgICB2YXIgJG9iaiA9IChmYWRlKSA/IHNsaWRlciA6IHNsaWRlci52aWV3cG9ydDtcclxuICAgICAgICAgIChkdXIpID8gJG9iai5hbmltYXRlKHtcImhlaWdodFwiOiBzbGlkZXIuc2xpZGVzLmVxKHNsaWRlci5hbmltYXRpbmdUbykuaGVpZ2h0KCl9LCBkdXIpIDogJG9iai5oZWlnaHQoc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIuYW5pbWF0aW5nVG8pLmhlaWdodCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHN5bmM6IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHZhciAkb2JqID0gJChzbGlkZXIudmFycy5zeW5jKS5kYXRhKFwiZmxleHNsaWRlclwiKSxcclxuICAgICAgICAgICAgdGFyZ2V0ID0gc2xpZGVyLmFuaW1hdGluZ1RvO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgICAgICAgY2FzZSBcImFuaW1hdGVcIjogJG9iai5mbGV4QW5pbWF0ZSh0YXJnZXQsIHNsaWRlci52YXJzLnBhdXNlT25BY3Rpb24sIGZhbHNlLCB0cnVlKTsgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwicGxheVwiOiBpZiAoISRvYmoucGxheWluZyAmJiAhJG9iai5hc05hdikgeyAkb2JqLnBsYXkoKTsgfSBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJwYXVzZVwiOiAkb2JqLnBhdXNlKCk7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdW5pcXVlSUQ6IGZ1bmN0aW9uKCRjbG9uZSkge1xyXG4gICAgICAgIC8vIEFwcGVuZCBfY2xvbmUgdG8gY3VycmVudCBsZXZlbCBhbmQgY2hpbGRyZW4gZWxlbWVudHMgd2l0aCBpZCBhdHRyaWJ1dGVzXHJcbiAgICAgICAgJGNsb25lLmZpbHRlciggJ1tpZF0nICkuYWRkKCRjbG9uZS5maW5kKCAnW2lkXScgKSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAkdGhpcy5hdHRyKCAnaWQnLCAkdGhpcy5hdHRyKCAnaWQnICkgKyAnX2Nsb25lJyApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAkY2xvbmU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBhdXNlSW52aXNpYmxlOiB7XHJcbiAgICAgICAgdmlzUHJvcDogbnVsbCxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciB2aXNQcm9wID0gbWV0aG9kcy5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7XHJcbiAgICAgICAgICBpZiAodmlzUHJvcCkge1xyXG4gICAgICAgICAgICB2YXIgZXZ0bmFtZSA9IHZpc1Byb3AucmVwbGFjZSgvW0h8aF1pZGRlbi8sJycpICsgJ3Zpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2dG5hbWUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGlmIChtZXRob2RzLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmKHNsaWRlci5zdGFydFRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNsaWRlci5zdGFydFRpbWVvdXQpOyAvL0lmIGNsb2NrIGlzIHRpY2tpbmcsIHN0b3AgdGltZXIgYW5kIHByZXZlbnQgZnJvbSBzdGFydGluZyB3aGlsZSBpbnZpc2libGVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgICAgICAgICBzbGlkZXIucGF1c2UoKTsgLy9PciBqdXN0IHBhdXNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVyLnN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVyLnBsYXkoKTsgLy9Jbml0aWF0ZWQgYmVmb3JlLCBqdXN0IHBsYXlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG4gICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMuaW5pdERlbGF5ID4gMCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNsaWRlci5wbGF5LCBzbGlkZXIudmFycy5pbml0RGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5wbGF5KCk7IC8vRGlkbid0IGluaXQgYmVmb3JlOiBzaW1wbHkgaW5pdCBvciB3YWl0IGZvciBpdFxyXG4gICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0hpZGRlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgcHJvcCA9IG1ldGhvZHMucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO1xyXG4gICAgICAgICAgaWYgKCFwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkb2N1bWVudFtwcm9wXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEhpZGRlblByb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIHByZWZpeGVzID0gWyd3ZWJraXQnLCdtb3onLCdtcycsJ28nXTtcclxuICAgICAgICAgIC8vIGlmICdoaWRkZW4nIGlzIG5hdGl2ZWx5IHN1cHBvcnRlZCBqdXN0IHJldHVybiBpdFxyXG4gICAgICAgICAgaWYgKCdoaWRkZW4nIGluIGRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaGlkZGVuJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIG90aGVyd2lzZSBsb29wIG92ZXIgYWxsIHRoZSBrbm93biBwcmVmaXhlcyB1bnRpbCB3ZSBmaW5kIG9uZVxyXG4gICAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgICAgaWYgKChwcmVmaXhlc1tpXSArICdIaWRkZW4nKSBpbiBkb2N1bWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVzW2ldICsgJ0hpZGRlbic7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGl0J3Mgbm90IHN1cHBvcnRlZFxyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQod2F0Y2hlZEV2ZW50Q2xlYXJUaW1lcik7XHJcbiAgICAgICAgd2F0Y2hlZEV2ZW50Q2xlYXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3YXRjaGVkRXZlbnQgPSBcIlwiO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHB1YmxpYyBtZXRob2RzXHJcbiAgICBzbGlkZXIuZmxleEFuaW1hdGUgPSBmdW5jdGlvbih0YXJnZXQsIHBhdXNlLCBvdmVycmlkZSwgd2l0aFN5bmMsIGZyb21OYXYpIHtcclxuICAgICAgaWYgKCFzbGlkZXIudmFycy5hbmltYXRpb25Mb29wICYmIHRhcmdldCAhPT0gc2xpZGVyLmN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgIHNsaWRlci5kaXJlY3Rpb24gPSAodGFyZ2V0ID4gc2xpZGVyLmN1cnJlbnRTbGlkZSkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYXNOYXYgJiYgc2xpZGVyLnBhZ2luZ0NvdW50ID09PSAxKSBzbGlkZXIuZGlyZWN0aW9uID0gKHNsaWRlci5jdXJyZW50SXRlbSA8IHRhcmdldCkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xyXG5cclxuICAgICAgaWYgKCFzbGlkZXIuYW5pbWF0aW5nICYmIChzbGlkZXIuY2FuQWR2YW5jZSh0YXJnZXQsIGZyb21OYXYpIHx8IG92ZXJyaWRlKSAmJiBzbGlkZXIuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgIGlmIChhc05hdiAmJiB3aXRoU3luYykge1xyXG4gICAgICAgICAgdmFyIG1hc3RlciA9ICQoc2xpZGVyLnZhcnMuYXNOYXZGb3IpLmRhdGEoJ2ZsZXhzbGlkZXInKTtcclxuICAgICAgICAgIHNsaWRlci5hdEVuZCA9IHRhcmdldCA9PT0gMCB8fCB0YXJnZXQgPT09IHNsaWRlci5jb3VudCAtIDE7XHJcbiAgICAgICAgICBtYXN0ZXIuZmxleEFuaW1hdGUodGFyZ2V0LCB0cnVlLCBmYWxzZSwgdHJ1ZSwgZnJvbU5hdik7XHJcbiAgICAgICAgICBzbGlkZXIuZGlyZWN0aW9uID0gKHNsaWRlci5jdXJyZW50SXRlbSA8IHRhcmdldCkgPyBcIm5leHRcIiA6IFwicHJldlwiO1xyXG4gICAgICAgICAgbWFzdGVyLmRpcmVjdGlvbiA9IHNsaWRlci5kaXJlY3Rpb247XHJcblxyXG4gICAgICAgICAgaWYgKE1hdGguY2VpbCgodGFyZ2V0ICsgMSkvc2xpZGVyLnZpc2libGUpIC0gMSAhPT0gc2xpZGVyLmN1cnJlbnRTbGlkZSAmJiB0YXJnZXQgIT09IDApIHtcclxuICAgICAgICAgICAgc2xpZGVyLmN1cnJlbnRJdGVtID0gdGFyZ2V0O1xyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLnJlbW92ZUNsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpLmVxKHRhcmdldCkuYWRkQ2xhc3MobmFtZXNwYWNlICsgXCJhY3RpdmUtc2xpZGVcIik7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IE1hdGguZmxvb3IodGFyZ2V0L3NsaWRlci52aXNpYmxlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlci5jdXJyZW50SXRlbSA9IHRhcmdldDtcclxuICAgICAgICAgICAgc2xpZGVyLnNsaWRlcy5yZW1vdmVDbGFzcyhuYW1lc3BhY2UgKyBcImFjdGl2ZS1zbGlkZVwiKS5lcSh0YXJnZXQpLmFkZENsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbGlkZXIuYW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICBzbGlkZXIuYW5pbWF0aW5nVG8gPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIFNMSURFU0hPVzpcclxuICAgICAgICBpZiAocGF1c2UpIHsgc2xpZGVyLnBhdXNlKCk7IH1cclxuXHJcbiAgICAgICAgLy8gQVBJOiBiZWZvcmUoKSBhbmltYXRpb24gQ2FsbGJhY2tcclxuICAgICAgICBzbGlkZXIudmFycy5iZWZvcmUoc2xpZGVyKTtcclxuXHJcbiAgICAgICAgLy8gU1lOQzpcclxuICAgICAgICBpZiAoc2xpZGVyLnN5bmNFeGlzdHMgJiYgIWZyb21OYXYpIHsgbWV0aG9kcy5zeW5jKFwiYW5pbWF0ZVwiKTsgfVxyXG5cclxuICAgICAgICAvLyBDT05UUk9MTkFWXHJcbiAgICAgICAgaWYgKHNsaWRlci52YXJzLmNvbnRyb2xOYXYpIHsgbWV0aG9kcy5jb250cm9sTmF2LmFjdGl2ZSgpOyB9XHJcblxyXG4gICAgICAgIC8vICFDQVJPVVNFTDpcclxuICAgICAgICAvLyBDQU5ESURBVEU6IHNsaWRlIGFjdGl2ZSBjbGFzcyAoZm9yIGFkZC9yZW1vdmUgc2xpZGUpXHJcbiAgICAgICAgaWYgKCFjYXJvdXNlbCkgeyBzbGlkZXIuc2xpZGVzLnJlbW92ZUNsYXNzKG5hbWVzcGFjZSArICdhY3RpdmUtc2xpZGUnKS5lcSh0YXJnZXQpLmFkZENsYXNzKG5hbWVzcGFjZSArICdhY3RpdmUtc2xpZGUnKTsgfVxyXG5cclxuICAgICAgICAvLyBJTkZJTklURSBMT09QOlxyXG4gICAgICAgIC8vIENBTkRJREFURTogYXRFbmRcclxuICAgICAgICBzbGlkZXIuYXRFbmQgPSB0YXJnZXQgPT09IDAgfHwgdGFyZ2V0ID09PSBzbGlkZXIubGFzdDtcclxuXHJcbiAgICAgICAgLy8gRElSRUNUSU9OTkFWOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5kaXJlY3Rpb25OYXYpIHsgbWV0aG9kcy5kaXJlY3Rpb25OYXYudXBkYXRlKCk7IH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gc2xpZGVyLmxhc3QpIHtcclxuICAgICAgICAgIC8vIEFQSTogZW5kKCkgb2YgY3ljbGUgQ2FsbGJhY2tcclxuICAgICAgICAgIHNsaWRlci52YXJzLmVuZChzbGlkZXIpO1xyXG4gICAgICAgICAgLy8gU0xJREVTSE9XICYmICFJTkZJTklURSBMT09QOlxyXG4gICAgICAgICAgaWYgKCFzbGlkZXIudmFycy5hbmltYXRpb25Mb29wKSB7IHNsaWRlci5wYXVzZSgpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTTElERTpcclxuICAgICAgICBpZiAoIWZhZGUpIHtcclxuICAgICAgICAgIHZhciBkaW1lbnNpb24gPSAodmVydGljYWwpID8gc2xpZGVyLnNsaWRlcy5maWx0ZXIoJzpmaXJzdCcpLmhlaWdodCgpIDogc2xpZGVyLmNvbXB1dGVkVyxcclxuICAgICAgICAgICAgICBtYXJnaW4sIHNsaWRlU3RyaW5nLCBjYWxjTmV4dDtcclxuXHJcbiAgICAgICAgICAvLyBJTkZJTklURSBMT09QIC8gUkVWRVJTRTpcclxuICAgICAgICAgIGlmIChjYXJvdXNlbCkge1xyXG4gICAgICAgICAgICAvL21hcmdpbiA9IChzbGlkZXIudmFycy5pdGVtV2lkdGggPiBzbGlkZXIudykgPyBzbGlkZXIudmFycy5pdGVtTWFyZ2luICogMiA6IHNsaWRlci52YXJzLml0ZW1NYXJnaW47XHJcbiAgICAgICAgICAgIG1hcmdpbiA9IHNsaWRlci52YXJzLml0ZW1NYXJnaW47XHJcbiAgICAgICAgICAgIGNhbGNOZXh0ID0gKChzbGlkZXIuaXRlbVcgKyBtYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmFuaW1hdGluZ1RvO1xyXG4gICAgICAgICAgICBzbGlkZVN0cmluZyA9IChjYWxjTmV4dCA+IHNsaWRlci5saW1pdCAmJiBzbGlkZXIudmlzaWJsZSAhPT0gMSkgPyBzbGlkZXIubGltaXQgOiBjYWxjTmV4dDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiB0YXJnZXQgPT09IHNsaWRlci5jb3VudCAtIDEgJiYgc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCAmJiBzbGlkZXIuZGlyZWN0aW9uICE9PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgICBzbGlkZVN0cmluZyA9IChyZXZlcnNlKSA/IChzbGlkZXIuY291bnQgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogZGltZW5zaW9uIDogMDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gc2xpZGVyLmxhc3QgJiYgdGFyZ2V0ID09PSAwICYmIHNsaWRlci52YXJzLmFuaW1hdGlvbkxvb3AgJiYgc2xpZGVyLmRpcmVjdGlvbiAhPT0gXCJwcmV2XCIpIHtcclxuICAgICAgICAgICAgc2xpZGVTdHJpbmcgPSAocmV2ZXJzZSkgPyAwIDogKHNsaWRlci5jb3VudCArIDEpICogZGltZW5zaW9uO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2xpZGVTdHJpbmcgPSAocmV2ZXJzZSkgPyAoKHNsaWRlci5jb3VudCAtIDEpIC0gdGFyZ2V0ICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIGRpbWVuc2lvbiA6ICh0YXJnZXQgKyBzbGlkZXIuY2xvbmVPZmZzZXQpICogZGltZW5zaW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2xpZGVyLnNldFByb3BzKHNsaWRlU3RyaW5nLCBcIlwiLCBzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCk7XHJcbiAgICAgICAgICBpZiAoc2xpZGVyLnRyYW5zaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICghc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCB8fCAhc2xpZGVyLmF0RW5kKSB7XHJcbiAgICAgICAgICAgICAgc2xpZGVyLmFuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHNsaWRlci5jdXJyZW50U2xpZGUgPSBzbGlkZXIuYW5pbWF0aW5nVG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFVuYmluZCBwcmV2aW91cyB0cmFuc2l0aW9uRW5kIGV2ZW50cyBhbmQgcmUtYmluZCBuZXcgdHJhbnNpdGlvbkVuZCBldmVudFxyXG4gICAgICAgICAgICBzbGlkZXIuY29udGFpbmVyLnVuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTtcclxuICAgICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dChzbGlkZXIuZW5zdXJlQW5pbWF0aW9uRW5kKTtcclxuICAgICAgICAgICAgICBzbGlkZXIud3JhcHVwKGRpbWVuc2lvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5zdXJhbmNlIGZvciB0aGUgZXZlci1zby1maWNrbGUgdHJhbnNpdGlvbkVuZCBldmVudFxyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2xpZGVyLmVuc3VyZUFuaW1hdGlvbkVuZCk7XHJcbiAgICAgICAgICAgIHNsaWRlci5lbnN1cmVBbmltYXRpb25FbmQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHNsaWRlci53cmFwdXAoZGltZW5zaW9uKTtcclxuICAgICAgICAgICAgfSwgc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQgKyAxMDApO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlci5jb250YWluZXIuYW5pbWF0ZShzbGlkZXIuYXJncywgc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQsIHNsaWRlci52YXJzLmVhc2luZywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICBzbGlkZXIud3JhcHVwKGRpbWVuc2lvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIEZBREU6XHJcbiAgICAgICAgICBpZiAoIXRvdWNoKSB7XHJcbiAgICAgICAgICAgIC8vc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIuY3VycmVudFNsaWRlKS5mYWRlT3V0KHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkLCBzbGlkZXIudmFycy5lYXNpbmcpO1xyXG4gICAgICAgICAgICAvL3NsaWRlci5zbGlkZXMuZXEodGFyZ2V0KS5mYWRlSW4oc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQsIHNsaWRlci52YXJzLmVhc2luZywgc2xpZGVyLndyYXB1cCk7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmNzcyh7XCJ6SW5kZXhcIjogMX0pLmFuaW1hdGUoe1wib3BhY2l0eVwiOiAwfSwgc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQsIHNsaWRlci52YXJzLmVhc2luZyk7XHJcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEodGFyZ2V0KS5jc3Moe1wiekluZGV4XCI6IDJ9KS5hbmltYXRlKHtcIm9wYWNpdHlcIjogMX0sIHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkLCBzbGlkZXIudmFycy5lYXNpbmcsIHNsaWRlci53cmFwdXApO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEoc2xpZGVyLmN1cnJlbnRTbGlkZSkuY3NzKHsgXCJvcGFjaXR5XCI6IDAsIFwiekluZGV4XCI6IDEgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5zbGlkZXMuZXEodGFyZ2V0KS5jc3MoeyBcIm9wYWNpdHlcIjogMSwgXCJ6SW5kZXhcIjogMiB9KTtcclxuICAgICAgICAgICAgc2xpZGVyLndyYXB1cChkaW1lbnNpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTTU9PVEggSEVJR0hUOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQpOyB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBzbGlkZXIud3JhcHVwID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XHJcbiAgICAgIC8vIFNMSURFOlxyXG4gICAgICBpZiAoIWZhZGUgJiYgIWNhcm91c2VsKSB7XHJcbiAgICAgICAgaWYgKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDAgJiYgc2xpZGVyLmFuaW1hdGluZ1RvID09PSBzbGlkZXIubGFzdCAmJiBzbGlkZXIudmFycy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgICAgICBzbGlkZXIuc2V0UHJvcHMoZGltZW5zaW9uLCBcImp1bXBFbmRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuY3VycmVudFNsaWRlID09PSBzbGlkZXIubGFzdCAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IDAgJiYgc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICAgICAgc2xpZGVyLnNldFByb3BzKGRpbWVuc2lvbiwgXCJqdW1wU3RhcnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNsaWRlci5hbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgc2xpZGVyLmN1cnJlbnRTbGlkZSA9IHNsaWRlci5hbmltYXRpbmdUbztcclxuICAgICAgLy8gQVBJOiBhZnRlcigpIGFuaW1hdGlvbiBDYWxsYmFja1xyXG4gICAgICBzbGlkZXIudmFycy5hZnRlcihzbGlkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTTElERVNIT1c6XHJcbiAgICBzbGlkZXIuYW5pbWF0ZVNsaWRlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAoIXNsaWRlci5hbmltYXRpbmcgJiYgZm9jdXNlZCApIHsgc2xpZGVyLmZsZXhBbmltYXRlKHNsaWRlci5nZXRUYXJnZXQoXCJuZXh0XCIpKTsgfVxyXG4gICAgfTtcclxuICAgIC8vIFNMSURFU0hPVzpcclxuICAgIHNsaWRlci5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHNsaWRlci5hbmltYXRlZFNsaWRlcyk7XHJcbiAgICAgIHNsaWRlci5hbmltYXRlZFNsaWRlcyA9IG51bGw7XHJcbiAgICAgIHNsaWRlci5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIC8vIFBBVVNFUExBWTpcclxuICAgICAgaWYgKHNsaWRlci52YXJzLnBhdXNlUGxheSkgeyBtZXRob2RzLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpOyB9XHJcbiAgICAgIC8vIFNZTkM6XHJcbiAgICAgIGlmIChzbGlkZXIuc3luY0V4aXN0cykgeyBtZXRob2RzLnN5bmMoXCJwYXVzZVwiKTsgfVxyXG4gICAgfTtcclxuICAgIC8vIFNMSURFU0hPVzpcclxuICAgIHNsaWRlci5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChzbGlkZXIucGxheWluZykgeyBjbGVhckludGVydmFsKHNsaWRlci5hbmltYXRlZFNsaWRlcyk7IH1cclxuICAgICAgc2xpZGVyLmFuaW1hdGVkU2xpZGVzID0gc2xpZGVyLmFuaW1hdGVkU2xpZGVzIHx8IHNldEludGVydmFsKHNsaWRlci5hbmltYXRlU2xpZGVzLCBzbGlkZXIudmFycy5zbGlkZXNob3dTcGVlZCk7XHJcbiAgICAgIHNsaWRlci5zdGFydGVkID0gc2xpZGVyLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAvLyBQQVVTRVBMQVk6XHJcbiAgICAgIGlmIChzbGlkZXIudmFycy5wYXVzZVBsYXkpIHsgbWV0aG9kcy5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIik7IH1cclxuICAgICAgLy8gU1lOQzpcclxuICAgICAgaWYgKHNsaWRlci5zeW5jRXhpc3RzKSB7IG1ldGhvZHMuc3luYyhcInBsYXlcIik7IH1cclxuICAgIH07XHJcbiAgICAvLyBTVE9QOlxyXG4gICAgc2xpZGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNsaWRlci5wYXVzZSgpO1xyXG4gICAgICBzbGlkZXIuc3RvcHBlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgc2xpZGVyLmNhbkFkdmFuY2UgPSBmdW5jdGlvbih0YXJnZXQsIGZyb21OYXYpIHtcclxuICAgICAgLy8gQVNOQVY6XHJcbiAgICAgIHZhciBsYXN0ID0gKGFzTmF2KSA/IHNsaWRlci5wYWdpbmdDb3VudCAtIDEgOiBzbGlkZXIubGFzdDtcclxuICAgICAgcmV0dXJuIChmcm9tTmF2KSA/IHRydWUgOlxyXG4gICAgICAgICAgICAgKGFzTmF2ICYmIHNsaWRlci5jdXJyZW50SXRlbSA9PT0gc2xpZGVyLmNvdW50IC0gMSAmJiB0YXJnZXQgPT09IDAgJiYgc2xpZGVyLmRpcmVjdGlvbiA9PT0gXCJwcmV2XCIpID8gdHJ1ZSA6XHJcbiAgICAgICAgICAgICAoYXNOYXYgJiYgc2xpZGVyLmN1cnJlbnRJdGVtID09PSAwICYmIHRhcmdldCA9PT0gc2xpZGVyLnBhZ2luZ0NvdW50IC0gMSAmJiBzbGlkZXIuZGlyZWN0aW9uICE9PSBcIm5leHRcIikgPyBmYWxzZSA6XHJcbiAgICAgICAgICAgICAodGFyZ2V0ID09PSBzbGlkZXIuY3VycmVudFNsaWRlICYmICFhc05hdikgPyBmYWxzZSA6XHJcbiAgICAgICAgICAgICAoc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCkgPyB0cnVlIDpcclxuICAgICAgICAgICAgIChzbGlkZXIuYXRFbmQgJiYgc2xpZGVyLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiB0YXJnZXQgPT09IGxhc3QgJiYgc2xpZGVyLmRpcmVjdGlvbiAhPT0gXCJuZXh0XCIpID8gZmFsc2UgOlxyXG4gICAgICAgICAgICAgKHNsaWRlci5hdEVuZCAmJiBzbGlkZXIuY3VycmVudFNsaWRlID09PSBsYXN0ICYmIHRhcmdldCA9PT0gMCAmJiBzbGlkZXIuZGlyZWN0aW9uID09PSBcIm5leHRcIikgPyBmYWxzZSA6XHJcbiAgICAgICAgICAgICB0cnVlO1xyXG4gICAgfTtcclxuICAgIHNsaWRlci5nZXRUYXJnZXQgPSBmdW5jdGlvbihkaXIpIHtcclxuICAgICAgc2xpZGVyLmRpcmVjdGlvbiA9IGRpcjtcclxuICAgICAgaWYgKGRpciA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgICByZXR1cm4gKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IHNsaWRlci5sYXN0KSA/IDAgOiBzbGlkZXIuY3VycmVudFNsaWRlICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKHNsaWRlci5jdXJyZW50U2xpZGUgPT09IDApID8gc2xpZGVyLmxhc3QgOiBzbGlkZXIuY3VycmVudFNsaWRlIC0gMTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTTElERTpcclxuICAgIHNsaWRlci5zZXRQcm9wcyA9IGZ1bmN0aW9uKHBvcywgc3BlY2lhbCwgZHVyKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHBvc0NoZWNrID0gKHBvcykgPyBwb3MgOiAoKHNsaWRlci5pdGVtVyArIHNsaWRlci52YXJzLml0ZW1NYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmFuaW1hdGluZ1RvLFxyXG4gICAgICAgICAgICBwb3NDYWxjID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGlmIChjYXJvdXNlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzcGVjaWFsID09PSBcInNldFRvdWNoXCIpID8gcG9zIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAocmV2ZXJzZSAmJiBzbGlkZXIuYW5pbWF0aW5nVG8gPT09IHNsaWRlci5sYXN0KSA/IDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgIChyZXZlcnNlKSA/IHNsaWRlci5saW1pdCAtICgoKHNsaWRlci5pdGVtVyArIHNsaWRlci52YXJzLml0ZW1NYXJnaW4pICogc2xpZGVyLm1vdmUpICogc2xpZGVyLmFuaW1hdGluZ1RvKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlci5hbmltYXRpbmdUbyA9PT0gc2xpZGVyLmxhc3QpID8gc2xpZGVyLmxpbWl0IDogcG9zQ2hlY2s7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3BlY2lhbCkge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlIFwic2V0VG90YWxcIjogcmV0dXJuIChyZXZlcnNlKSA/ICgoc2xpZGVyLmNvdW50IC0gMSkgLSBzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIHBvcyA6IChzbGlkZXIuY3VycmVudFNsaWRlICsgc2xpZGVyLmNsb25lT2Zmc2V0KSAqIHBvcztcclxuICAgICAgICAgICAgICAgICAgY2FzZSBcInNldFRvdWNoXCI6IHJldHVybiAocmV2ZXJzZSkgPyBwb3MgOiBwb3M7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJqdW1wRW5kXCI6IHJldHVybiAocmV2ZXJzZSkgPyBwb3MgOiBzbGlkZXIuY291bnQgKiBwb3M7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJqdW1wU3RhcnRcIjogcmV0dXJuIChyZXZlcnNlKSA/IHNsaWRlci5jb3VudCAqIHBvcyA6IHBvcztcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0oKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKHBvc0NhbGMgKiAtMSkgKyBcInB4XCI7XHJcbiAgICAgICAgICB9KCkpO1xyXG5cclxuICAgICAgaWYgKHNsaWRlci50cmFuc2l0aW9ucykge1xyXG4gICAgICAgIHRhcmdldCA9ICh2ZXJ0aWNhbCkgPyBcInRyYW5zbGF0ZTNkKDAsXCIgKyB0YXJnZXQgKyBcIiwwKVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHRhcmdldCArIFwiLDAsMClcIjtcclxuICAgICAgICBkdXIgPSAoZHVyICE9PSB1bmRlZmluZWQpID8gKGR1ci8xMDAwKSArIFwic1wiIDogXCIwc1wiO1xyXG4gICAgICAgIHNsaWRlci5jb250YWluZXIuY3NzKFwiLVwiICsgc2xpZGVyLnBmeCArIFwiLXRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyKTtcclxuICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGR1cik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNsaWRlci5hcmdzW3NsaWRlci5wcm9wXSA9IHRhcmdldDtcclxuICAgICAgaWYgKHNsaWRlci50cmFuc2l0aW9ucyB8fCBkdXIgPT09IHVuZGVmaW5lZCkgeyBzbGlkZXIuY29udGFpbmVyLmNzcyhzbGlkZXIuYXJncyk7IH1cclxuXHJcbiAgICAgIHNsaWRlci5jb250YWluZXIuY3NzKCd0cmFuc2Zvcm0nLHRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlci5zZXR1cCA9IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgLy8gU0xJREU6XHJcbiAgICAgIGlmICghZmFkZSkge1xyXG4gICAgICAgIHZhciBzbGlkZXJPZmZzZXQsIGFycjtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaW5pdFwiKSB7XHJcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIG5hbWVzcGFjZSArICd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7XCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLCBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKHNsaWRlcikuYXBwZW5kKHNsaWRlci5jb250YWluZXIpO1xyXG4gICAgICAgICAgLy8gSU5GSU5JVEUgTE9PUDpcclxuICAgICAgICAgIHNsaWRlci5jbG9uZUNvdW50ID0gMDtcclxuICAgICAgICAgIHNsaWRlci5jbG9uZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAvLyBSRVZFUlNFOlxyXG4gICAgICAgICAgaWYgKHJldmVyc2UpIHtcclxuICAgICAgICAgICAgYXJyID0gJC5tYWtlQXJyYXkoc2xpZGVyLnNsaWRlcykucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzID0gJChhcnIpO1xyXG4gICAgICAgICAgICBzbGlkZXIuY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKHNsaWRlci5zbGlkZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJTkZJTklURSBMT09QICYmICFDQVJPVVNFTDpcclxuICAgICAgICBpZiAoc2xpZGVyLnZhcnMuYW5pbWF0aW9uTG9vcCAmJiAhY2Fyb3VzZWwpIHtcclxuICAgICAgICAgIHNsaWRlci5jbG9uZUNvdW50ID0gMjtcclxuICAgICAgICAgIHNsaWRlci5jbG9uZU9mZnNldCA9IDE7XHJcbiAgICAgICAgICAvLyBjbGVhciBvdXQgb2xkIGNsb25lc1xyXG4gICAgICAgICAgaWYgKHR5cGUgIT09IFwiaW5pdFwiKSB7IHNsaWRlci5jb250YWluZXIuZmluZCgnLmNsb25lJykucmVtb3ZlKCk7IH1cclxuICAgICAgICAgIHNsaWRlci5jb250YWluZXIuYXBwZW5kKG1ldGhvZHMudW5pcXVlSUQoc2xpZGVyLnNsaWRlcy5maXJzdCgpLmNsb25lKCkuYWRkQ2xhc3MoJ2Nsb25lJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZChtZXRob2RzLnVuaXF1ZUlEKHNsaWRlci5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoJ2Nsb25lJykpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5uZXdTbGlkZXMgPSAkKHNsaWRlci52YXJzLnNlbGVjdG9yLCBzbGlkZXIpO1xyXG5cclxuICAgICAgICBzbGlkZXJPZmZzZXQgPSAocmV2ZXJzZSkgPyBzbGlkZXIuY291bnQgLSAxIC0gc2xpZGVyLmN1cnJlbnRTbGlkZSArIHNsaWRlci5jbG9uZU9mZnNldCA6IHNsaWRlci5jdXJyZW50U2xpZGUgKyBzbGlkZXIuY2xvbmVPZmZzZXQ7XHJcbiAgICAgICAgLy8gVkVSVElDQUw6XHJcbiAgICAgICAgaWYgKHZlcnRpY2FsICYmICFjYXJvdXNlbCkge1xyXG4gICAgICAgICAgc2xpZGVyLmNvbnRhaW5lci5oZWlnaHQoKHNsaWRlci5jb3VudCArIHNsaWRlci5jbG9uZUNvdW50KSAqIDIwMCArIFwiJVwiKS5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpLndpZHRoKFwiMTAwJVwiKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2xpZGVyLm5ld1NsaWRlcy5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcclxuICAgICAgICAgICAgc2xpZGVyLmRvTWF0aCgpO1xyXG4gICAgICAgICAgICBzbGlkZXIudmlld3BvcnQuaGVpZ2h0KHNsaWRlci5oKTtcclxuICAgICAgICAgICAgc2xpZGVyLnNldFByb3BzKHNsaWRlck9mZnNldCAqIHNsaWRlci5oLCBcImluaXRcIik7XHJcbiAgICAgICAgICB9LCAodHlwZSA9PT0gXCJpbml0XCIpID8gMTAwIDogMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNsaWRlci5jb250YWluZXIud2lkdGgoKHNsaWRlci5jb3VudCArIHNsaWRlci5jbG9uZUNvdW50KSAqIDIwMCArIFwiJVwiKTtcclxuICAgICAgICAgIHNsaWRlci5zZXRQcm9wcyhzbGlkZXJPZmZzZXQgKiBzbGlkZXIuY29tcHV0ZWRXLCBcImluaXRcIik7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNsaWRlci5kb01hdGgoKTtcclxuICAgICAgICAgICAgc2xpZGVyLm5ld1NsaWRlcy5jc3Moe1wid2lkdGhcIjogc2xpZGVyLmNvbXB1dGVkVywgXCJmbG9hdFwiOiBcImxlZnRcIiwgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xyXG4gICAgICAgICAgICAvLyBTTU9PVEggSEVJR0hUOlxyXG4gICAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMuc21vb3RoSGVpZ2h0KSB7IG1ldGhvZHMuc21vb3RoSGVpZ2h0KCk7IH1cclxuICAgICAgICAgIH0sICh0eXBlID09PSBcImluaXRcIikgPyAxMDAgOiAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7IC8vIEZBREU6XHJcbiAgICAgICAgc2xpZGVyLnNsaWRlcy5jc3Moe1wid2lkdGhcIjogXCIxMDAlXCIsIFwiZmxvYXRcIjogXCJsZWZ0XCIsIFwibWFyZ2luUmlnaHRcIjogXCItMTAwJVwiLCBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIn0pO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcImluaXRcIikge1xyXG4gICAgICAgICAgaWYgKCF0b3VjaCkge1xyXG4gICAgICAgICAgICAvL3NsaWRlci5zbGlkZXMuZXEoc2xpZGVyLmN1cnJlbnRTbGlkZSkuZmFkZUluKHNsaWRlci52YXJzLmFuaW1hdGlvblNwZWVkLCBzbGlkZXIudmFycy5lYXNpbmcpO1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVyLnZhcnMuZmFkZUZpcnN0U2xpZGUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmNzcyh7IFwib3BhY2l0eVwiOiAwLCBcImRpc3BsYXlcIjogXCJibG9ja1wiLCBcInpJbmRleFwiOiAxIH0pLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmNzcyh7XCJ6SW5kZXhcIjogMn0pLmNzcyh7XCJvcGFjaXR5XCI6IDF9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmNzcyh7IFwib3BhY2l0eVwiOiAwLCBcImRpc3BsYXlcIjogXCJibG9ja1wiLCBcInpJbmRleFwiOiAxIH0pLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmNzcyh7XCJ6SW5kZXhcIjogMn0pLmFuaW1hdGUoe1wib3BhY2l0eVwiOiAxfSxzbGlkZXIudmFycy5hbmltYXRpb25TcGVlZCxzbGlkZXIudmFycy5lYXNpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbGlkZXIuc2xpZGVzLmNzcyh7IFwib3BhY2l0eVwiOiAwLCBcImRpc3BsYXlcIjogXCJibG9ja1wiLCBcIndlYmtpdFRyYW5zaXRpb25cIjogXCJvcGFjaXR5IFwiICsgc2xpZGVyLnZhcnMuYW5pbWF0aW9uU3BlZWQgLyAxMDAwICsgXCJzIGVhc2VcIiwgXCJ6SW5kZXhcIjogMSB9KS5lcShzbGlkZXIuY3VycmVudFNsaWRlKS5jc3MoeyBcIm9wYWNpdHlcIjogMSwgXCJ6SW5kZXhcIjogMn0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTTU9PVEggSEVJR0hUOlxyXG4gICAgICAgIGlmIChzbGlkZXIudmFycy5zbW9vdGhIZWlnaHQpIHsgbWV0aG9kcy5zbW9vdGhIZWlnaHQoKTsgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vICFDQVJPVVNFTDpcclxuICAgICAgLy8gQ0FORElEQVRFOiBhY3RpdmUgc2xpZGVcclxuICAgICAgaWYgKCFjYXJvdXNlbCkgeyBzbGlkZXIuc2xpZGVzLnJlbW92ZUNsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpLmVxKHNsaWRlci5jdXJyZW50U2xpZGUpLmFkZENsYXNzKG5hbWVzcGFjZSArIFwiYWN0aXZlLXNsaWRlXCIpOyB9XHJcblxyXG4gICAgICAvL0ZsZXhTbGlkZXI6IGluaXQoKSBDYWxsYmFja1xyXG4gICAgICBzbGlkZXIudmFycy5pbml0KHNsaWRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlci5kb01hdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNsaWRlID0gc2xpZGVyLnNsaWRlcy5maXJzdCgpLFxyXG4gICAgICAgICAgc2xpZGVNYXJnaW4gPSBzbGlkZXIudmFycy5pdGVtTWFyZ2luLFxyXG4gICAgICAgICAgbWluSXRlbXMgPSBzbGlkZXIudmFycy5taW5JdGVtcyxcclxuICAgICAgICAgIG1heEl0ZW1zID0gc2xpZGVyLnZhcnMubWF4SXRlbXM7XHJcblxyXG4gICAgICBzbGlkZXIudyA9IChzbGlkZXIudmlld3BvcnQ9PT11bmRlZmluZWQpID8gc2xpZGVyLndpZHRoKCkgOiBzbGlkZXIudmlld3BvcnQud2lkdGgoKTtcclxuICAgICAgc2xpZGVyLmggPSBzbGlkZS5oZWlnaHQoKTtcclxuICAgICAgc2xpZGVyLmJveFBhZGRpbmcgPSBzbGlkZS5vdXRlcldpZHRoKCkgLSBzbGlkZS53aWR0aCgpO1xyXG5cclxuICAgICAgLy8gQ0FST1VTRUw6XHJcbiAgICAgIGlmIChjYXJvdXNlbCkge1xyXG4gICAgICAgIHNsaWRlci5pdGVtVCA9IHNsaWRlci52YXJzLml0ZW1XaWR0aCArIHNsaWRlTWFyZ2luO1xyXG4gICAgICAgIHNsaWRlci5taW5XID0gKG1pbkl0ZW1zKSA/IG1pbkl0ZW1zICogc2xpZGVyLml0ZW1UIDogc2xpZGVyLnc7XHJcbiAgICAgICAgc2xpZGVyLm1heFcgPSAobWF4SXRlbXMpID8gKG1heEl0ZW1zICogc2xpZGVyLml0ZW1UKSAtIHNsaWRlTWFyZ2luIDogc2xpZGVyLnc7XHJcbiAgICAgICAgc2xpZGVyLml0ZW1XID0gKHNsaWRlci5taW5XID4gc2xpZGVyLncpID8gKHNsaWRlci53IC0gKHNsaWRlTWFyZ2luICogKG1pbkl0ZW1zIC0gMSkpKS9taW5JdGVtcyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlci5tYXhXIDwgc2xpZGVyLncpID8gKHNsaWRlci53IC0gKHNsaWRlTWFyZ2luICogKG1heEl0ZW1zIC0gMSkpKS9tYXhJdGVtcyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlci52YXJzLml0ZW1XaWR0aCA+IHNsaWRlci53KSA/IHNsaWRlci53IDogc2xpZGVyLnZhcnMuaXRlbVdpZHRoO1xyXG5cclxuICAgICAgICBzbGlkZXIudmlzaWJsZSA9IE1hdGguZmxvb3Ioc2xpZGVyLncvKHNsaWRlci5pdGVtVykpO1xyXG4gICAgICAgIHNsaWRlci5tb3ZlID0gKHNsaWRlci52YXJzLm1vdmUgPiAwICYmIHNsaWRlci52YXJzLm1vdmUgPCBzbGlkZXIudmlzaWJsZSApID8gc2xpZGVyLnZhcnMubW92ZSA6IHNsaWRlci52aXNpYmxlO1xyXG4gICAgICAgIHNsaWRlci5wYWdpbmdDb3VudCA9IE1hdGguY2VpbCgoKHNsaWRlci5jb3VudCAtIHNsaWRlci52aXNpYmxlKS9zbGlkZXIubW92ZSkgKyAxKTtcclxuICAgICAgICBzbGlkZXIubGFzdCA9ICBzbGlkZXIucGFnaW5nQ291bnQgLSAxO1xyXG4gICAgICAgIHNsaWRlci5saW1pdCA9IChzbGlkZXIucGFnaW5nQ291bnQgPT09IDEpID8gMCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgKHNsaWRlci52YXJzLml0ZW1XaWR0aCA+IHNsaWRlci53KSA/IChzbGlkZXIuaXRlbVcgKiAoc2xpZGVyLmNvdW50IC0gMSkpICsgKHNsaWRlTWFyZ2luICogKHNsaWRlci5jb3VudCAtIDEpKSA6ICgoc2xpZGVyLml0ZW1XICsgc2xpZGVNYXJnaW4pICogc2xpZGVyLmNvdW50KSAtIHNsaWRlci53IC0gc2xpZGVNYXJnaW47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2xpZGVyLml0ZW1XID0gc2xpZGVyLnc7XHJcbiAgICAgICAgc2xpZGVyLnBhZ2luZ0NvdW50ID0gc2xpZGVyLmNvdW50O1xyXG4gICAgICAgIHNsaWRlci5sYXN0ID0gc2xpZGVyLmNvdW50IC0gMTtcclxuICAgICAgfVxyXG4gICAgICBzbGlkZXIuY29tcHV0ZWRXID0gc2xpZGVyLml0ZW1XIC0gc2xpZGVyLmJveFBhZGRpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlci51cGRhdGUgPSBmdW5jdGlvbihwb3MsIGFjdGlvbikge1xyXG4gICAgICBzbGlkZXIuZG9NYXRoKCk7XHJcblxyXG4gICAgICAvLyB1cGRhdGUgY3VycmVudFNsaWRlIGFuZCBzbGlkZXIuYW5pbWF0aW5nVG8gaWYgbmVjZXNzYXJ5XHJcbiAgICAgIGlmICghY2Fyb3VzZWwpIHtcclxuICAgICAgICBpZiAocG9zIDwgc2xpZGVyLmN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgICAgc2xpZGVyLmN1cnJlbnRTbGlkZSArPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocG9zIDw9IHNsaWRlci5jdXJyZW50U2xpZGUgJiYgcG9zICE9PSAwKSB7XHJcbiAgICAgICAgICBzbGlkZXIuY3VycmVudFNsaWRlIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5hbmltYXRpbmdUbyA9IHNsaWRlci5jdXJyZW50U2xpZGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBjb250cm9sTmF2XHJcbiAgICAgIGlmIChzbGlkZXIudmFycy5jb250cm9sTmF2ICYmICFzbGlkZXIubWFudWFsQ29udHJvbHMpIHtcclxuICAgICAgICBpZiAoKGFjdGlvbiA9PT0gXCJhZGRcIiAmJiAhY2Fyb3VzZWwpIHx8IHNsaWRlci5wYWdpbmdDb3VudCA+IHNsaWRlci5jb250cm9sTmF2Lmxlbmd0aCkge1xyXG4gICAgICAgICAgbWV0aG9kcy5jb250cm9sTmF2LnVwZGF0ZShcImFkZFwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKChhY3Rpb24gPT09IFwicmVtb3ZlXCIgJiYgIWNhcm91c2VsKSB8fCBzbGlkZXIucGFnaW5nQ291bnQgPCBzbGlkZXIuY29udHJvbE5hdi5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmIChjYXJvdXNlbCAmJiBzbGlkZXIuY3VycmVudFNsaWRlID4gc2xpZGVyLmxhc3QpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmN1cnJlbnRTbGlkZSAtPSAxO1xyXG4gICAgICAgICAgICBzbGlkZXIuYW5pbWF0aW5nVG8gLT0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1ldGhvZHMuY29udHJvbE5hdi51cGRhdGUoXCJyZW1vdmVcIiwgc2xpZGVyLmxhc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyB1cGRhdGUgZGlyZWN0aW9uTmF2XHJcbiAgICAgIGlmIChzbGlkZXIudmFycy5kaXJlY3Rpb25OYXYpIHsgbWV0aG9kcy5kaXJlY3Rpb25OYXYudXBkYXRlKCk7IH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHNsaWRlci5hZGRTbGlkZSA9IGZ1bmN0aW9uKG9iaiwgcG9zKSB7XHJcbiAgICAgIHZhciAkb2JqID0gJChvYmopO1xyXG5cclxuICAgICAgc2xpZGVyLmNvdW50ICs9IDE7XHJcbiAgICAgIHNsaWRlci5sYXN0ID0gc2xpZGVyLmNvdW50IC0gMTtcclxuXHJcbiAgICAgIC8vIGFwcGVuZCBuZXcgc2xpZGVcclxuICAgICAgaWYgKHZlcnRpY2FsICYmIHJldmVyc2UpIHtcclxuICAgICAgICAocG9zICE9PSB1bmRlZmluZWQpID8gc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIuY291bnQgLSBwb3MpLmFmdGVyKCRvYmopIDogc2xpZGVyLmNvbnRhaW5lci5wcmVwZW5kKCRvYmopO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIChwb3MgIT09IHVuZGVmaW5lZCkgPyBzbGlkZXIuc2xpZGVzLmVxKHBvcykuYmVmb3JlKCRvYmopIDogc2xpZGVyLmNvbnRhaW5lci5hcHBlbmQoJG9iaik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBjdXJyZW50U2xpZGUsIGFuaW1hdGluZ1RvLCBjb250cm9sTmF2LCBhbmQgZGlyZWN0aW9uTmF2XHJcbiAgICAgIHNsaWRlci51cGRhdGUocG9zLCBcImFkZFwiKTtcclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBzbGlkZXIuc2xpZGVzXHJcbiAgICAgIHNsaWRlci5zbGlkZXMgPSAkKHNsaWRlci52YXJzLnNlbGVjdG9yICsgJzpub3QoLmNsb25lKScsIHNsaWRlcik7XHJcbiAgICAgIC8vIHJlLXNldHVwIHRoZSBzbGlkZXIgdG8gYWNjb21kYXRlIG5ldyBzbGlkZVxyXG4gICAgICBzbGlkZXIuc2V0dXAoKTtcclxuXHJcbiAgICAgIC8vRmxleFNsaWRlcjogYWRkZWQoKSBDYWxsYmFja1xyXG4gICAgICBzbGlkZXIudmFycy5hZGRlZChzbGlkZXIpO1xyXG4gICAgfTtcclxuICAgIHNsaWRlci5yZW1vdmVTbGlkZSA9IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICB2YXIgcG9zID0gKGlzTmFOKG9iaikpID8gc2xpZGVyLnNsaWRlcy5pbmRleCgkKG9iaikpIDogb2JqO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIGNvdW50XHJcbiAgICAgIHNsaWRlci5jb3VudCAtPSAxO1xyXG4gICAgICBzbGlkZXIubGFzdCA9IHNsaWRlci5jb3VudCAtIDE7XHJcblxyXG4gICAgICAvLyByZW1vdmUgc2xpZGVcclxuICAgICAgaWYgKGlzTmFOKG9iaikpIHtcclxuICAgICAgICAkKG9iaiwgc2xpZGVyLnNsaWRlcykucmVtb3ZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKHZlcnRpY2FsICYmIHJldmVyc2UpID8gc2xpZGVyLnNsaWRlcy5lcShzbGlkZXIubGFzdCkucmVtb3ZlKCkgOiBzbGlkZXIuc2xpZGVzLmVxKG9iaikucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHVwZGF0ZSBjdXJyZW50U2xpZGUsIGFuaW1hdGluZ1RvLCBjb250cm9sTmF2LCBhbmQgZGlyZWN0aW9uTmF2XHJcbiAgICAgIHNsaWRlci5kb01hdGgoKTtcclxuICAgICAgc2xpZGVyLnVwZGF0ZShwb3MsIFwicmVtb3ZlXCIpO1xyXG5cclxuICAgICAgLy8gdXBkYXRlIHNsaWRlci5zbGlkZXNcclxuICAgICAgc2xpZGVyLnNsaWRlcyA9ICQoc2xpZGVyLnZhcnMuc2VsZWN0b3IgKyAnOm5vdCguY2xvbmUpJywgc2xpZGVyKTtcclxuICAgICAgLy8gcmUtc2V0dXAgdGhlIHNsaWRlciB0byBhY2NvbWRhdGUgbmV3IHNsaWRlXHJcbiAgICAgIHNsaWRlci5zZXR1cCgpO1xyXG5cclxuICAgICAgLy8gRmxleFNsaWRlcjogcmVtb3ZlZCgpIENhbGxiYWNrXHJcbiAgICAgIHNsaWRlci52YXJzLnJlbW92ZWQoc2xpZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9GbGV4U2xpZGVyOiBJbml0aWFsaXplXHJcbiAgICBtZXRob2RzLmluaXQoKTtcclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhlIHNsaWRlciBpc24ndCBmb2N1c3NlZCBpZiB0aGUgd2luZG93IGxvc2VzIGZvY3VzLlxyXG4gICQoIHdpbmRvdyApLmJsdXIoIGZ1bmN0aW9uICggZSApIHtcclxuICAgIGZvY3VzZWQgPSBmYWxzZTtcclxuICB9KS5mb2N1cyggZnVuY3Rpb24gKCBlICkge1xyXG4gICAgZm9jdXNlZCA9IHRydWU7XHJcbiAgfSk7XHJcblxyXG4gIC8vRmxleFNsaWRlcjogRGVmYXVsdCBTZXR0aW5nc1xyXG4gICQuZmxleHNsaWRlci5kZWZhdWx0cyA9IHtcclxuICAgIG5hbWVzcGFjZTogXCJmbGV4LVwiLCAgICAgICAgICAgICAvL3tORVd9IFN0cmluZzogUHJlZml4IHN0cmluZyBhdHRhY2hlZCB0byB0aGUgY2xhc3Mgb2YgZXZlcnkgZWxlbWVudCBnZW5lcmF0ZWQgYnkgdGhlIHBsdWdpblxyXG4gICAgc2VsZWN0b3I6IFwiLnNsaWRlcyA+IGxpXCIsICAgICAgIC8ve05FV30gU2VsZWN0b3I6IE11c3QgbWF0Y2ggYSBzaW1wbGUgcGF0dGVybi4gJ3tjb250YWluZXJ9ID4ge3NsaWRlfScgLS0gSWdub3JlIHBhdHRlcm4gYXQgeW91ciBvd24gcGVyaWxcclxuICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsICAgICAgICAgICAgICAvL1N0cmluZzogU2VsZWN0IHlvdXIgYW5pbWF0aW9uIHR5cGUsIFwiZmFkZVwiIG9yIFwic2xpZGVcIlxyXG4gICAgZWFzaW5nOiBcInN3aW5nXCIsICAgICAgICAgICAgICAgIC8ve05FV30gU3RyaW5nOiBEZXRlcm1pbmVzIHRoZSBlYXNpbmcgbWV0aG9kIHVzZWQgaW4galF1ZXJ5IHRyYW5zaXRpb25zLiBqUXVlcnkgZWFzaW5nIHBsdWdpbiBpcyBzdXBwb3J0ZWQhXHJcbiAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLCAgICAgICAgLy9TdHJpbmc6IFNlbGVjdCB0aGUgc2xpZGluZyBkaXJlY3Rpb24sIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIlxyXG4gICAgcmV2ZXJzZTogZmFsc2UsICAgICAgICAgICAgICAgICAvL3tORVd9IEJvb2xlYW46IFJldmVyc2UgdGhlIGFuaW1hdGlvbiBkaXJlY3Rpb25cclxuICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsICAgICAgICAgICAgLy9Cb29sZWFuOiBTaG91bGQgdGhlIGFuaW1hdGlvbiBsb29wPyBJZiBmYWxzZSwgZGlyZWN0aW9uTmF2IHdpbGwgcmVjZWl2ZWQgXCJkaXNhYmxlXCIgY2xhc3NlcyBhdCBlaXRoZXIgZW5kXHJcbiAgICBzbW9vdGhIZWlnaHQ6IGZhbHNlLCAgICAgICAgICAgIC8ve05FV30gQm9vbGVhbjogQWxsb3cgaGVpZ2h0IG9mIHRoZSBzbGlkZXIgdG8gYW5pbWF0ZSBzbW9vdGhseSBpbiBob3Jpem9udGFsIG1vZGVcclxuICAgIHN0YXJ0QXQ6IDAsICAgICAgICAgICAgICAgICAgICAgLy9JbnRlZ2VyOiBUaGUgc2xpZGUgdGhhdCB0aGUgc2xpZGVyIHNob3VsZCBzdGFydCBvbi4gQXJyYXkgbm90YXRpb24gKDAgPSBmaXJzdCBzbGlkZSlcclxuICAgIHNsaWRlc2hvdzogdHJ1ZSwgICAgICAgICAgICAgICAgLy9Cb29sZWFuOiBBbmltYXRlIHNsaWRlciBhdXRvbWF0aWNhbGx5XHJcbiAgICBzbGlkZXNob3dTcGVlZDogNzAwMCwgICAgICAgICAgIC8vSW50ZWdlcjogU2V0IHRoZSBzcGVlZCBvZiB0aGUgc2xpZGVzaG93IGN5Y2xpbmcsIGluIG1pbGxpc2Vjb25kc1xyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCwgICAgICAgICAgICAvL0ludGVnZXI6IFNldCB0aGUgc3BlZWQgb2YgYW5pbWF0aW9ucywgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICBpbml0RGVsYXk6IDAsICAgICAgICAgICAgICAgICAgIC8ve05FV30gSW50ZWdlcjogU2V0IGFuIGluaXRpYWxpemF0aW9uIGRlbGF5LCBpbiBtaWxsaXNlY29uZHNcclxuICAgIHJhbmRvbWl6ZTogZmFsc2UsICAgICAgICAgICAgICAgLy9Cb29sZWFuOiBSYW5kb21pemUgc2xpZGUgb3JkZXJcclxuICAgIGZhZGVGaXJzdFNsaWRlOiB0cnVlLCAgICAgICAgICAgLy9Cb29sZWFuOiBGYWRlIGluIHRoZSBmaXJzdCBzbGlkZSB3aGVuIGFuaW1hdGlvbiB0eXBlIGlzIFwiZmFkZVwiXHJcbiAgICB0aHVtYkNhcHRpb25zOiBmYWxzZSwgICAgICAgICAgIC8vQm9vbGVhbjogV2hldGhlciBvciBub3QgdG8gcHV0IGNhcHRpb25zIG9uIHRodW1ibmFpbHMgd2hlbiB1c2luZyB0aGUgXCJ0aHVtYm5haWxzXCIgY29udHJvbE5hdi5cclxuXHJcbiAgICAvLyBVc2FiaWxpdHkgZmVhdHVyZXNcclxuICAgIHBhdXNlT25BY3Rpb246IHRydWUsICAgICAgICAgICAgLy9Cb29sZWFuOiBQYXVzZSB0aGUgc2xpZGVzaG93IHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCBjb250cm9sIGVsZW1lbnRzLCBoaWdobHkgcmVjb21tZW5kZWQuXHJcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLCAgICAgICAgICAgIC8vQm9vbGVhbjogUGF1c2UgdGhlIHNsaWRlc2hvdyB3aGVuIGhvdmVyaW5nIG92ZXIgc2xpZGVyLCB0aGVuIHJlc3VtZSB3aGVuIG5vIGxvbmdlciBob3ZlcmluZ1xyXG4gICAgcGF1c2VJbnZpc2libGU6IHRydWUsICAgXHRcdC8ve05FV30gQm9vbGVhbjogUGF1c2UgdGhlIHNsaWRlc2hvdyB3aGVuIHRhYiBpcyBpbnZpc2libGUsIHJlc3VtZSB3aGVuIHZpc2libGUuIFByb3ZpZGVzIGJldHRlciBVWCwgbG93ZXIgQ1BVIHVzYWdlLlxyXG4gICAgdXNlQ1NTOiB0cnVlLCAgICAgICAgICAgICAgICAgICAvL3tORVd9IEJvb2xlYW46IFNsaWRlciB3aWxsIHVzZSBDU1MzIHRyYW5zaXRpb25zIGlmIGF2YWlsYWJsZVxyXG4gICAgdG91Y2g6IHRydWUsICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEJvb2xlYW46IEFsbG93IHRvdWNoIHN3aXBlIG5hdmlnYXRpb24gb2YgdGhlIHNsaWRlciBvbiB0b3VjaC1lbmFibGVkIGRldmljZXNcclxuICAgIHZpZGVvOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgLy97TkVXfSBCb29sZWFuOiBJZiB1c2luZyB2aWRlbyBpbiB0aGUgc2xpZGVyLCB3aWxsIHByZXZlbnQgQ1NTMyAzRCBUcmFuc2Zvcm1zIHRvIGF2b2lkIGdyYXBoaWNhbCBnbGl0Y2hlc1xyXG5cclxuICAgIC8vIFByaW1hcnkgQ29udHJvbHNcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsICAgICAgICAgICAgICAgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcGFnaW5nIGNvbnRyb2wgb2YgZWFjaCBzbGlkZT8gTm90ZTogTGVhdmUgdHJ1ZSBmb3IgbWFudWFsQ29udHJvbHMgdXNhZ2VcclxuICAgIGRpcmVjdGlvbk5hdjogdHJ1ZSwgICAgICAgICAgICAgLy9Cb29sZWFuOiBDcmVhdGUgbmF2aWdhdGlvbiBmb3IgcHJldmlvdXMvbmV4dCBuYXZpZ2F0aW9uPyAodHJ1ZS9mYWxzZSlcclxuICAgIHByZXZUZXh0OiBcIlByZXZpb3VzXCIsICAgICAgICAgICAvL1N0cmluZzogU2V0IHRoZSB0ZXh0IGZvciB0aGUgXCJwcmV2aW91c1wiIGRpcmVjdGlvbk5hdiBpdGVtXHJcbiAgICBuZXh0VGV4dDogXCJOZXh0XCIsICAgICAgICAgICAgICAgLy9TdHJpbmc6IFNldCB0aGUgdGV4dCBmb3IgdGhlIFwibmV4dFwiIGRpcmVjdGlvbk5hdiBpdGVtXHJcblxyXG4gICAgLy8gU2Vjb25kYXJ5IE5hdmlnYXRpb25cclxuICAgIGtleWJvYXJkOiB0cnVlLCAgICAgICAgICAgICAgICAgLy9Cb29sZWFuOiBBbGxvdyBzbGlkZXIgbmF2aWdhdGluZyB2aWEga2V5Ym9hcmQgbGVmdC9yaWdodCBrZXlzXHJcbiAgICBtdWx0aXBsZUtleWJvYXJkOiBmYWxzZSwgICAgICAgIC8ve05FV30gQm9vbGVhbjogQWxsb3cga2V5Ym9hcmQgbmF2aWdhdGlvbiB0byBhZmZlY3QgbXVsdGlwbGUgc2xpZGVycy4gRGVmYXVsdCBiZWhhdmlvciBjdXRzIG91dCBrZXlib2FyZCBuYXZpZ2F0aW9uIHdpdGggbW9yZSB0aGFuIG9uZSBzbGlkZXIgcHJlc2VudC5cclxuICAgIG1vdXNld2hlZWw6IGZhbHNlLCAgICAgICAgICAgICAgLy97VVBEQVRFRH0gQm9vbGVhbjogUmVxdWlyZXMganF1ZXJ5Lm1vdXNld2hlZWwuanMgKGh0dHBzOi8vZ2l0aHViLmNvbS9icmFuZG9uYWFyb24vanF1ZXJ5LW1vdXNld2hlZWwpIC0gQWxsb3dzIHNsaWRlciBuYXZpZ2F0aW5nIHZpYSBtb3VzZXdoZWVsXHJcbiAgICBwYXVzZVBsYXk6IGZhbHNlLCAgICAgICAgICAgICAgIC8vQm9vbGVhbjogQ3JlYXRlIHBhdXNlL3BsYXkgZHluYW1pYyBlbGVtZW50XHJcbiAgICBwYXVzZVRleHQ6IFwiUGF1c2VcIiwgICAgICAgICAgICAgLy9TdHJpbmc6IFNldCB0aGUgdGV4dCBmb3IgdGhlIFwicGF1c2VcIiBwYXVzZVBsYXkgaXRlbVxyXG4gICAgcGxheVRleHQ6IFwiUGxheVwiLCAgICAgICAgICAgICAgIC8vU3RyaW5nOiBTZXQgdGhlIHRleHQgZm9yIHRoZSBcInBsYXlcIiBwYXVzZVBsYXkgaXRlbVxyXG5cclxuICAgIC8vIFNwZWNpYWwgcHJvcGVydGllc1xyXG4gICAgY29udHJvbHNDb250YWluZXI6IFwiXCIsICAgICAgICAgIC8ve1VQREFURUR9IGpRdWVyeSBPYmplY3QvU2VsZWN0b3I6IERlY2xhcmUgd2hpY2ggY29udGFpbmVyIHRoZSBuYXZpZ2F0aW9uIGVsZW1lbnRzIHNob3VsZCBiZSBhcHBlbmRlZCB0b28uIERlZmF1bHQgY29udGFpbmVyIGlzIHRoZSBGbGV4U2xpZGVyIGVsZW1lbnQuIEV4YW1wbGUgdXNlIHdvdWxkIGJlICQoXCIuZmxleHNsaWRlci1jb250YWluZXJcIikuIFByb3BlcnR5IGlzIGlnbm9yZWQgaWYgZ2l2ZW4gZWxlbWVudCBpcyBub3QgZm91bmQuXHJcbiAgICBtYW51YWxDb250cm9sczogXCJcIiwgICAgICAgICAgICAgLy97VVBEQVRFRH0galF1ZXJ5IE9iamVjdC9TZWxlY3RvcjogRGVjbGFyZSBjdXN0b20gY29udHJvbCBuYXZpZ2F0aW9uLiBFeGFtcGxlcyB3b3VsZCBiZSAkKFwiLmZsZXgtY29udHJvbC1uYXYgbGlcIikgb3IgXCIjdGFicy1uYXYgbGkgaW1nXCIsIGV0Yy4gVGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB5b3VyIGNvbnRyb2xOYXYgc2hvdWxkIG1hdGNoIHRoZSBudW1iZXIgb2Ygc2xpZGVzL3RhYnMuXHJcbiAgICBjdXN0b21EaXJlY3Rpb25OYXY6IFwiXCIsICAgICAgICAgLy97TkVXfSBqUXVlcnkgT2JqZWN0L1NlbGVjdG9yOiBDdXN0b20gcHJldiAvIG5leHQgYnV0dG9uLiBNdXN0IGJlIHR3byBqUXVlcnkgZWxlbWVudHMuIEluIG9yZGVyIHRvIG1ha2UgdGhlIGV2ZW50cyB3b3JrIHRoZXkgaGF2ZSB0byBoYXZlIHRoZSBjbGFzc2VzIFwicHJldlwiIGFuZCBcIm5leHRcIiAocGx1cyBuYW1lc3BhY2UpXHJcbiAgICBzeW5jOiBcIlwiLCAgICAgICAgICAgICAgICAgICAgICAgLy97TkVXfSBTZWxlY3RvcjogTWlycm9yIHRoZSBhY3Rpb25zIHBlcmZvcm1lZCBvbiB0aGlzIHNsaWRlciB3aXRoIGFub3RoZXIgc2xpZGVyLiBVc2Ugd2l0aCBjYXJlLlxyXG4gICAgYXNOYXZGb3I6IFwiXCIsICAgICAgICAgICAgICAgICAgIC8ve05FV30gU2VsZWN0b3I6IEludGVybmFsIHByb3BlcnR5IGV4cG9zZWQgZm9yIHR1cm5pbmcgdGhlIHNsaWRlciBpbnRvIGEgdGh1bWJuYWlsIG5hdmlnYXRpb24gZm9yIGFub3RoZXIgc2xpZGVyXHJcblxyXG4gICAgLy8gQ2Fyb3VzZWwgT3B0aW9uc1xyXG4gICAgaXRlbVdpZHRoOiAwLCAgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IEJveC1tb2RlbCB3aWR0aCBvZiBpbmRpdmlkdWFsIGNhcm91c2VsIGl0ZW1zLCBpbmNsdWRpbmcgaG9yaXpvbnRhbCBib3JkZXJzIGFuZCBwYWRkaW5nLlxyXG4gICAgaXRlbU1hcmdpbjogMCwgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IE1hcmdpbiBiZXR3ZWVuIGNhcm91c2VsIGl0ZW1zLlxyXG4gICAgbWluSXRlbXM6IDEsICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IE1pbmltdW0gbnVtYmVyIG9mIGNhcm91c2VsIGl0ZW1zIHRoYXQgc2hvdWxkIGJlIHZpc2libGUuIEl0ZW1zIHdpbGwgcmVzaXplIGZsdWlkbHkgd2hlbiBiZWxvdyB0aGlzLlxyXG4gICAgbWF4SXRlbXM6IDAsICAgICAgICAgICAgICAgICAgICAvL3tORVd9IEludGVnZXI6IE1heG1pbXVtIG51bWJlciBvZiBjYXJvdXNlbCBpdGVtcyB0aGF0IHNob3VsZCBiZSB2aXNpYmxlLiBJdGVtcyB3aWxsIHJlc2l6ZSBmbHVpZGx5IHdoZW4gYWJvdmUgdGhpcyBsaW1pdC5cclxuICAgIG1vdmU6IDAsICAgICAgICAgICAgICAgICAgICAgICAgLy97TkVXfSBJbnRlZ2VyOiBOdW1iZXIgb2YgY2Fyb3VzZWwgaXRlbXMgdGhhdCBzaG91bGQgbW92ZSBvbiBhbmltYXRpb24uIElmIDAsIHNsaWRlciB3aWxsIG1vdmUgYWxsIHZpc2libGUgaXRlbXMuXHJcbiAgICBhbGxvd09uZVNsaWRlOiB0cnVlLCAgICAgICAgICAgLy97TkVXfSBCb29sZWFuOiBXaGV0aGVyIG9yIG5vdCB0byBhbGxvdyBhIHNsaWRlciBjb21wcmlzZWQgb2YgYSBzaW5nbGUgc2xpZGVcclxuXHJcbiAgICAvLyBDYWxsYmFjayBBUElcclxuICAgIHN0YXJ0OiBmdW5jdGlvbigpe30sICAgICAgICAgICAgLy9DYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIHdoZW4gdGhlIHNsaWRlciBsb2FkcyB0aGUgZmlyc3Qgc2xpZGVcclxuICAgIGJlZm9yZTogZnVuY3Rpb24oKXt9LCAgICAgICAgICAgLy9DYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIGFzeW5jaHJvbm91c2x5IHdpdGggZWFjaCBzbGlkZXIgYW5pbWF0aW9uXHJcbiAgICBhZnRlcjogZnVuY3Rpb24oKXt9LCAgICAgICAgICAgIC8vQ2FsbGJhY2s6IGZ1bmN0aW9uKHNsaWRlcikgLSBGaXJlcyBhZnRlciBlYWNoIHNsaWRlciBhbmltYXRpb24gY29tcGxldGVzXHJcbiAgICBlbmQ6IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgICAgIC8vQ2FsbGJhY2s6IGZ1bmN0aW9uKHNsaWRlcikgLSBGaXJlcyB3aGVuIHRoZSBzbGlkZXIgcmVhY2hlcyB0aGUgbGFzdCBzbGlkZSAoYXN5bmNocm9ub3VzKVxyXG4gICAgYWRkZWQ6IGZ1bmN0aW9uKCl7fSwgICAgICAgICAgICAvL3tORVd9IENhbGxiYWNrOiBmdW5jdGlvbihzbGlkZXIpIC0gRmlyZXMgYWZ0ZXIgYSBzbGlkZSBpcyBhZGRlZFxyXG4gICAgcmVtb3ZlZDogZnVuY3Rpb24oKXt9LCAgICAgICAgICAgLy97TkVXfSBDYWxsYmFjazogZnVuY3Rpb24oc2xpZGVyKSAtIEZpcmVzIGFmdGVyIGEgc2xpZGUgaXMgcmVtb3ZlZFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7fSAgICAgICAgICAgICAvL3tORVd9IENhbGxiYWNrOiBmdW5jdGlvbihzbGlkZXIpIC0gRmlyZXMgYWZ0ZXIgdGhlIHNsaWRlciBpcyBpbml0aWFsbHkgc2V0dXBcclxuICB9O1xyXG5cclxuICAvL0ZsZXhTbGlkZXI6IFBsdWdpbiBGdW5jdGlvblxyXG4gICQuZm4uZmxleHNsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQpIHsgb3B0aW9ucyA9IHt9OyB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgc2VsZWN0b3IgPSAob3B0aW9ucy5zZWxlY3RvcikgPyBvcHRpb25zLnNlbGVjdG9yIDogXCIuc2xpZGVzID4gbGlcIixcclxuICAgICAgICAgICAgJHNsaWRlcyA9ICR0aGlzLmZpbmQoc2VsZWN0b3IpO1xyXG5cclxuICAgICAgaWYgKCAoICRzbGlkZXMubGVuZ3RoID09PSAxICYmIG9wdGlvbnMuYWxsb3dPbmVTbGlkZSA9PT0gdHJ1ZSApIHx8ICRzbGlkZXMubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgJHNsaWRlcy5mYWRlSW4oNDAwKTtcclxuICAgICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7IG9wdGlvbnMuc3RhcnQoJHRoaXMpOyB9XHJcbiAgICAgICAgfSBlbHNlIGlmICgkdGhpcy5kYXRhKCdmbGV4c2xpZGVyJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgbmV3ICQuZmxleHNsaWRlcih0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGVscGVyIHN0cmluZ3MgdG8gcXVpY2tseSBwZXJmb3JtIGZ1bmN0aW9ucyBvbiB0aGUgc2xpZGVyXHJcbiAgICAgIHZhciAkc2xpZGVyID0gJCh0aGlzKS5kYXRhKCdmbGV4c2xpZGVyJyk7XHJcbiAgICAgIHN3aXRjaCAob3B0aW9ucykge1xyXG4gICAgICAgIGNhc2UgXCJwbGF5XCI6ICRzbGlkZXIucGxheSgpOyBicmVhaztcclxuICAgICAgICBjYXNlIFwicGF1c2VcIjogJHNsaWRlci5wYXVzZSgpOyBicmVhaztcclxuICAgICAgICBjYXNlIFwic3RvcFwiOiAkc2xpZGVyLnN0b3AoKTsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm5leHRcIjogJHNsaWRlci5mbGV4QW5pbWF0ZSgkc2xpZGVyLmdldFRhcmdldChcIm5leHRcIiksIHRydWUpOyBicmVhaztcclxuICAgICAgICBjYXNlIFwicHJldlwiOlxyXG4gICAgICAgIGNhc2UgXCJwcmV2aW91c1wiOiAkc2xpZGVyLmZsZXhBbmltYXRlKCRzbGlkZXIuZ2V0VGFyZ2V0KFwicHJldlwiKSwgdHJ1ZSk7IGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIikgeyAkc2xpZGVyLmZsZXhBbmltYXRlKG9wdGlvbnMsIHRydWUpOyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59KShqUXVlcnkpO1xyXG4iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBqcXVlcnktc2ltcGxlLXRleHQtcm90YXRvci5qcyB2MVxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBDb3B5cmlnaHQgMjAxMyBQZXRlIFJvandvbmdzdXJpeWEuXHJcbiAqIGh0dHA6Ly93d3cudGhlcGV0ZWRlc2lnbi5jb21cclxuICpcclxuICogQSB2ZXJ5IHNpbXBsZSBhbmQgbGlnaHQgd2VpZ2h0IGpRdWVyeSBwbHVnaW4gdGhhdCBcclxuICogYWxsb3dzIHlvdSB0byByb3RhdGUgbXVsdGlwbGUgdGV4dCB3aXRob3V0IGNoYW5naW5nIFxyXG4gKiB0aGUgbGF5b3V0XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wZWFjaGFuYW5yL3NpbXBsZS10ZXh0LXJvdGF0b3JcclxuICpcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuIWZ1bmN0aW9uKCQpe1xyXG4gIFxyXG4gIHZhciBkZWZhdWx0cyA9IHtcclxuXHRcdGFuaW1hdGlvbjogXCJkaXNzb2x2ZVwiLFxyXG5cdFx0c2VwYXJhdG9yOiBcIixcIixcclxuXHRcdHNwZWVkOiAyMDAwXHJcblx0fTtcclxuXHRcclxuXHQkLmZ4LnN0ZXAudGV4dFNoYWRvd0JsdXIgPSBmdW5jdGlvbihmeCkge1xyXG4gICAgJChmeC5lbGVtKS5wcm9wKCd0ZXh0U2hhZG93Qmx1cicsIGZ4Lm5vdykuY3NzKHt0ZXh0U2hhZG93OiAnMCAwICcgKyBNYXRoLmZsb29yKGZ4Lm5vdykgKyAncHggYmxhY2snfSk7XHJcbiAgfTtcclxuXHRcclxuICAkLmZuLnRleHRyb3RhdG9yID0gZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBlbCA9ICQodGhpcylcclxuICAgICAgdmFyIGFycmF5ID0gW107XHJcbiAgICAgICQuZWFjaChlbC50ZXh0KCkuc3BsaXQoc2V0dGluZ3Muc2VwYXJhdG9yKSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkgeyBcclxuICAgICAgICBhcnJheS5wdXNoKHZhbHVlKTsgXHJcbiAgICAgIH0pO1xyXG4gICAgICBlbC50ZXh0KGFycmF5WzBdKTtcclxuICAgICAgXHJcbiAgICAgIC8vIGFuaW1hdGlvbiBvcHRpb25cclxuICAgICAgdmFyIHJvdGF0ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHN3aXRjaCAoc2V0dGluZ3MuYW5pbWF0aW9uKSB7IFxyXG4gICAgICAgICAgY2FzZSAnZGlzc29sdmUnOlxyXG4gICAgICAgICAgICBlbC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICB0ZXh0U2hhZG93Qmx1cjoyMCxcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0sIDUwMCAsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGluZGV4ID0gJC5pbkFycmF5KGVsLnRleHQoKSwgYXJyYXkpXHJcbiAgICAgICAgICAgICAgaWYoKGluZGV4ICsgMSkgPT0gYXJyYXkubGVuZ3RoKSBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgICAgZWwudGV4dChhcnJheVtpbmRleCArIDFdKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHRleHRTaGFkb3dCbHVyOjAsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgICAgfSwgNTAwICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNhc2UgJ2ZsaXAnOlxyXG4gICAgICAgICAgICBpZihlbC5maW5kKFwiLmJhY2tcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGVsLmh0bWwoZWwuZmluZChcIi5iYWNrXCIpLmh0bWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsID0gZWwudGV4dCgpXHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQuaW5BcnJheShpbml0aWFsLCBhcnJheSlcclxuICAgICAgICAgICAgaWYoKGluZGV4ICsgMSkgPT0gYXJyYXkubGVuZ3RoKSBpbmRleCA9IC0xXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbC5odG1sKFwiXCIpO1xyXG4gICAgICAgICAgICAkKFwiPHNwYW4gY2xhc3M9J2Zyb250Jz5cIiArIGluaXRpYWwgKyBcIjwvc3Bhbj5cIikuYXBwZW5kVG8oZWwpO1xyXG4gICAgICAgICAgICAkKFwiPHNwYW4gY2xhc3M9J2JhY2snPlwiICsgYXJyYXlbaW5kZXggKyAxXSArIFwiPC9zcGFuPlwiKS5hcHBlbmRUbyhlbCk7XHJcbiAgICAgICAgICAgIGVsLndyYXBJbm5lcihcIjxzcGFuIGNsYXNzPSdyb3RhdGluZycgLz5cIikuZmluZChcIi5yb3RhdGluZ1wiKS5oaWRlKCkuYWRkQ2xhc3MoXCJmbGlwXCIpLnNob3coKS5jc3Moe1xyXG4gICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjogXCIgcm90YXRlWSgtMTgwZGVnKVwiLFxyXG4gICAgICAgICAgICAgIFwiLW1vei10cmFuc2Zvcm1cIjogXCIgcm90YXRlWSgtMTgwZGVnKVwiLFxyXG4gICAgICAgICAgICAgIFwiLW8tdHJhbnNmb3JtXCI6IFwiIHJvdGF0ZVkoLTE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcIiByb3RhdGVZKC0xODBkZWcpXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY2FzZSAnZmxpcFVwJzpcclxuICAgICAgICAgICAgaWYoZWwuZmluZChcIi5iYWNrXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBlbC5odG1sKGVsLmZpbmQoXCIuYmFja1wiKS5odG1sKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbCA9IGVsLnRleHQoKVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkLmluQXJyYXkoaW5pdGlhbCwgYXJyYXkpXHJcbiAgICAgICAgICAgIGlmKChpbmRleCArIDEpID09IGFycmF5Lmxlbmd0aCkgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWwuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdmcm9udCc+XCIgKyBpbml0aWFsICsgXCI8L3NwYW4+XCIpLmFwcGVuZFRvKGVsKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdiYWNrJz5cIiArIGFycmF5W2luZGV4ICsgMV0gKyBcIjwvc3Bhbj5cIikuYXBwZW5kVG8oZWwpO1xyXG4gICAgICAgICAgICBlbC53cmFwSW5uZXIoXCI8c3BhbiBjbGFzcz0ncm90YXRpbmcnIC8+XCIpLmZpbmQoXCIucm90YXRpbmdcIikuaGlkZSgpLmFkZENsYXNzKFwiZmxpcCB1cFwiKS5zaG93KCkuY3NzKHtcclxuICAgICAgICAgICAgICBcIi13ZWJraXQtdHJhbnNmb3JtXCI6IFwiIHJvdGF0ZVgoLTE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcIi1tb3otdHJhbnNmb3JtXCI6IFwiIHJvdGF0ZVgoLTE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcIi1vLXRyYW5zZm9ybVwiOiBcIiByb3RhdGVYKC0xODBkZWcpXCIsXHJcbiAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCIgcm90YXRlWCgtMTgwZGVnKVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNhc2UgJ2ZsaXBDdWJlJzpcclxuICAgICAgICAgICAgaWYoZWwuZmluZChcIi5iYWNrXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBlbC5odG1sKGVsLmZpbmQoXCIuYmFja1wiKS5odG1sKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbCA9IGVsLnRleHQoKVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkLmluQXJyYXkoaW5pdGlhbCwgYXJyYXkpXHJcbiAgICAgICAgICAgIGlmKChpbmRleCArIDEpID09IGFycmF5Lmxlbmd0aCkgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWwuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdmcm9udCc+XCIgKyBpbml0aWFsICsgXCI8L3NwYW4+XCIpLmFwcGVuZFRvKGVsKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdiYWNrJz5cIiArIGFycmF5W2luZGV4ICsgMV0gKyBcIjwvc3Bhbj5cIikuYXBwZW5kVG8oZWwpO1xyXG4gICAgICAgICAgICBlbC53cmFwSW5uZXIoXCI8c3BhbiBjbGFzcz0ncm90YXRpbmcnIC8+XCIpLmZpbmQoXCIucm90YXRpbmdcIikuaGlkZSgpLmFkZENsYXNzKFwiZmxpcCBjdWJlXCIpLnNob3coKS5jc3Moe1xyXG4gICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjogXCIgcm90YXRlWSgxODBkZWcpXCIsXHJcbiAgICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybVwiOiBcIiByb3RhdGVZKDE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcIi1vLXRyYW5zZm9ybVwiOiBcIiByb3RhdGVZKDE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcIiByb3RhdGVZKDE4MGRlZylcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYXNlICdmbGlwQ3ViZVVwJzpcclxuICAgICAgICAgICAgaWYoZWwuZmluZChcIi5iYWNrXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBlbC5odG1sKGVsLmZpbmQoXCIuYmFja1wiKS5odG1sKCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbCA9IGVsLnRleHQoKVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkLmluQXJyYXkoaW5pdGlhbCwgYXJyYXkpXHJcbiAgICAgICAgICAgIGlmKChpbmRleCArIDEpID09IGFycmF5Lmxlbmd0aCkgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWwuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdmcm9udCc+XCIgKyBpbml0aWFsICsgXCI8L3NwYW4+XCIpLmFwcGVuZFRvKGVsKTtcclxuICAgICAgICAgICAgJChcIjxzcGFuIGNsYXNzPSdiYWNrJz5cIiArIGFycmF5W2luZGV4ICsgMV0gKyBcIjwvc3Bhbj5cIikuYXBwZW5kVG8oZWwpO1xyXG4gICAgICAgICAgICBlbC53cmFwSW5uZXIoXCI8c3BhbiBjbGFzcz0ncm90YXRpbmcnIC8+XCIpLmZpbmQoXCIucm90YXRpbmdcIikuaGlkZSgpLmFkZENsYXNzKFwiZmxpcCBjdWJlIHVwXCIpLnNob3coKS5jc3Moe1xyXG4gICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjogXCIgcm90YXRlWCgxODBkZWcpXCIsXHJcbiAgICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybVwiOiBcIiByb3RhdGVYKDE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcIi1vLXRyYW5zZm9ybVwiOiBcIiByb3RhdGVYKDE4MGRlZylcIixcclxuICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcIiByb3RhdGVYKDE4MGRlZylcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjYXNlICdzcGluJzpcclxuICAgICAgICAgICAgaWYoZWwuZmluZChcIi5yb3RhdGluZ1wiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgZWwuaHRtbChlbC5maW5kKFwiLnJvdGF0aW5nXCIpLmh0bWwoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRleCA9ICQuaW5BcnJheShlbC50ZXh0KCksIGFycmF5KVxyXG4gICAgICAgICAgICBpZigoaW5kZXggKyAxKSA9PSBhcnJheS5sZW5ndGgpIGluZGV4ID0gLTFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsLndyYXBJbm5lcihcIjxzcGFuIGNsYXNzPSdyb3RhdGluZyBzcGluJyAvPlwiKS5maW5kKFwiLnJvdGF0aW5nXCIpLmhpZGUoKS50ZXh0KGFycmF5W2luZGV4ICsgMV0pLnNob3coKS5jc3Moe1xyXG4gICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2Zvcm1cIjogXCIgcm90YXRlKDApIHNjYWxlKDEpXCIsXHJcbiAgICAgICAgICAgICAgXCItbW96LXRyYW5zZm9ybVwiOiBcInJvdGF0ZSgwKSBzY2FsZSgxKVwiLFxyXG4gICAgICAgICAgICAgIFwiLW8tdHJhbnNmb3JtXCI6IFwicm90YXRlKDApIHNjYWxlKDEpXCIsXHJcbiAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJyb3RhdGUoMCkgc2NhbGUoMSlcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNhc2UgJ2ZhZGUnOlxyXG4gICAgICAgICAgICBlbC5mYWRlT3V0KHNldHRpbmdzLnNwZWVkLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpbmRleCA9ICQuaW5BcnJheShlbC50ZXh0KCksIGFycmF5KVxyXG4gICAgICAgICAgICAgIGlmKChpbmRleCArIDEpID09IGFycmF5Lmxlbmd0aCkgaW5kZXggPSAtMVxyXG4gICAgICAgICAgICAgIGVsLnRleHQoYXJyYXlbaW5kZXggKyAxXSkuZmFkZUluKHNldHRpbmdzLnNwZWVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHNldEludGVydmFsKHJvdGF0ZSwgc2V0dGluZ3Muc3BlZWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG59KHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbiIsIi8qISBNYWduaWZpYyBQb3B1cCAtIHYxLjAuMCAtIDIwMTQtMTItMTJcclxuKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cclxuKiBDb3B5cmlnaHQgKGMpIDIwMTQgRG1pdHJ5IFNlbWVub3Y7ICovXHJcbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHsgXHJcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHsgXHJcbiAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuIFxyXG4gZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpOyBcclxuIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7IFxyXG4gLy8gTm9kZS9Db21tb25KUyBcclxuIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpOyBcclxuIH0gZWxzZSB7IFxyXG4gLy8gQnJvd3NlciBnbG9iYWxzIFxyXG4gZmFjdG9yeSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byk7IFxyXG4gfSBcclxuIH0oZnVuY3Rpb24oJCkgeyBcclxuXHJcbi8qPj5jb3JlKi9cclxuLyoqXHJcbiAqIFxyXG4gKiBNYWduaWZpYyBQb3B1cCBDb3JlIEpTIGZpbGVcclxuICogXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBQcml2YXRlIHN0YXRpYyBjb25zdGFudHNcclxuICovXHJcbnZhciBDTE9TRV9FVkVOVCA9ICdDbG9zZScsXHJcblx0QkVGT1JFX0NMT1NFX0VWRU5UID0gJ0JlZm9yZUNsb3NlJyxcclxuXHRBRlRFUl9DTE9TRV9FVkVOVCA9ICdBZnRlckNsb3NlJyxcclxuXHRCRUZPUkVfQVBQRU5EX0VWRU5UID0gJ0JlZm9yZUFwcGVuZCcsXHJcblx0TUFSS1VQX1BBUlNFX0VWRU5UID0gJ01hcmt1cFBhcnNlJyxcclxuXHRPUEVOX0VWRU5UID0gJ09wZW4nLFxyXG5cdENIQU5HRV9FVkVOVCA9ICdDaGFuZ2UnLFxyXG5cdE5TID0gJ21mcCcsXHJcblx0RVZFTlRfTlMgPSAnLicgKyBOUyxcclxuXHRSRUFEWV9DTEFTUyA9ICdtZnAtcmVhZHknLFxyXG5cdFJFTU9WSU5HX0NMQVNTID0gJ21mcC1yZW1vdmluZycsXHJcblx0UFJFVkVOVF9DTE9TRV9DTEFTUyA9ICdtZnAtcHJldmVudC1jbG9zZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFByaXZhdGUgdmFycyBcclxuICovXHJcbnZhciBtZnAsIC8vIEFzIHdlIGhhdmUgb25seSBvbmUgaW5zdGFuY2Ugb2YgTWFnbmlmaWNQb3B1cCBvYmplY3QsIHdlIGRlZmluZSBpdCBsb2NhbGx5IHRvIG5vdCB0byB1c2UgJ3RoaXMnXHJcblx0TWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKCl7fSxcclxuXHRfaXNKUSA9ICEhKHdpbmRvdy5qUXVlcnkpLFxyXG5cdF9wcmV2U3RhdHVzLFxyXG5cdF93aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0X2JvZHksXHJcblx0X2RvY3VtZW50LFxyXG5cdF9wcmV2Q29udGVudFR5cGUsXHJcblx0X3dyYXBDbGFzc2VzLFxyXG5cdF9jdXJyUG9wdXBUeXBlO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gKi9cclxudmFyIF9tZnBPbiA9IGZ1bmN0aW9uKG5hbWUsIGYpIHtcclxuXHRcdG1mcC5ldi5vbihOUyArIG5hbWUgKyBFVkVOVF9OUywgZik7XHJcblx0fSxcclxuXHRfZ2V0RWwgPSBmdW5jdGlvbihjbGFzc05hbWUsIGFwcGVuZFRvLCBodG1sLCByYXcpIHtcclxuXHRcdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZWwuY2xhc3NOYW1lID0gJ21mcC0nK2NsYXNzTmFtZTtcclxuXHRcdGlmKGh0bWwpIHtcclxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcclxuXHRcdH1cclxuXHRcdGlmKCFyYXcpIHtcclxuXHRcdFx0ZWwgPSAkKGVsKTtcclxuXHRcdFx0aWYoYXBwZW5kVG8pIHtcclxuXHRcdFx0XHRlbC5hcHBlbmRUbyhhcHBlbmRUbyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZihhcHBlbmRUbykge1xyXG5cdFx0XHRhcHBlbmRUby5hcHBlbmRDaGlsZChlbCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fSxcclxuXHRfbWZwVHJpZ2dlciA9IGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHRcdG1mcC5ldi50cmlnZ2VySGFuZGxlcihOUyArIGUsIGRhdGEpO1xyXG5cclxuXHRcdGlmKG1mcC5zdC5jYWxsYmFja3MpIHtcclxuXHRcdFx0Ly8gY29udmVydHMgXCJtZnBFdmVudE5hbWVcIiB0byBcImV2ZW50TmFtZVwiIGNhbGxiYWNrIGFuZCB0cmlnZ2VycyBpdCBpZiBpdCdzIHByZXNlbnRcclxuXHRcdFx0ZSA9IGUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBlLnNsaWNlKDEpO1xyXG5cdFx0XHRpZihtZnAuc3QuY2FsbGJhY2tzW2VdKSB7XHJcblx0XHRcdFx0bWZwLnN0LmNhbGxiYWNrc1tlXS5hcHBseShtZnAsICQuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRfZ2V0Q2xvc2VCdG4gPSBmdW5jdGlvbih0eXBlKSB7XHJcblx0XHRpZih0eXBlICE9PSBfY3VyclBvcHVwVHlwZSB8fCAhbWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bikge1xyXG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuID0gJCggbWZwLnN0LmNsb3NlTWFya3VwLnJlcGxhY2UoJyV0aXRsZSUnLCBtZnAuc3QudENsb3NlICkgKTtcclxuXHRcdFx0X2N1cnJQb3B1cFR5cGUgPSB0eXBlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG47XHJcblx0fSxcclxuXHQvLyBJbml0aWFsaXplIE1hZ25pZmljIFBvcHVwIG9ubHkgd2hlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxyXG5cdF9jaGVja0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZighJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlKSB7XHJcblx0XHRcdG1mcCA9IG5ldyBNYWduaWZpY1BvcHVwKCk7XHJcblx0XHRcdG1mcC5pbml0KCk7XHJcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSA9IG1mcDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIENTUyB0cmFuc2l0aW9uIGRldGVjdGlvbiwgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjY0ODk5L2RldGVjdC1jc3MtdHJhbnNpdGlvbnMtdXNpbmctamF2YXNjcmlwdC1hbmQtd2l0aG91dC1tb2Rlcm5penJcclxuXHRzdXBwb3J0c1RyYW5zaXRpb25zID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZSwgLy8gJ3MnIGZvciBzdHlsZS4gYmV0dGVyIHRvIGNyZWF0ZSBhbiBlbGVtZW50IGlmIGJvZHkgeWV0IHRvIGV4aXN0XHJcblx0XHRcdHYgPSBbJ21zJywnTycsJ01veicsJ1dlYmtpdCddOyAvLyAndicgZm9yIHZlbmRvclxyXG5cclxuXHRcdGlmKCBzWyd0cmFuc2l0aW9uJ10gIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7IFxyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdHdoaWxlKCB2Lmxlbmd0aCApIHtcclxuXHRcdFx0aWYoIHYucG9wKCkgKyAnVHJhbnNpdGlvbicgaW4gcyApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQdWJsaWMgZnVuY3Rpb25zXHJcbiAqL1xyXG5NYWduaWZpY1BvcHVwLnByb3RvdHlwZSA9IHtcclxuXHJcblx0Y29uc3RydWN0b3I6IE1hZ25pZmljUG9wdXAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemVzIE1hZ25pZmljIFBvcHVwIHBsdWdpbi4gXHJcblx0ICogVGhpcyBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgb25seSBvbmNlIHdoZW4gJC5mbi5tYWduaWZpY1BvcHVwIG9yICQubWFnbmlmaWNQb3B1cCBpcyBleGVjdXRlZFxyXG5cdCAqL1xyXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGFwcFZlcnNpb24gPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcclxuXHRcdG1mcC5pc0lFNyA9IGFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgNy5cIikgIT09IC0xOyBcclxuXHRcdG1mcC5pc0lFOCA9IGFwcFZlcnNpb24uaW5kZXhPZihcIk1TSUUgOC5cIikgIT09IC0xO1xyXG5cdFx0bWZwLmlzTG93SUUgPSBtZnAuaXNJRTcgfHwgbWZwLmlzSUU4O1xyXG5cdFx0bWZwLmlzQW5kcm9pZCA9ICgvYW5kcm9pZC9naSkudGVzdChhcHBWZXJzaW9uKTtcclxuXHRcdG1mcC5pc0lPUyA9ICgvaXBob25lfGlwYWR8aXBvZC9naSkudGVzdChhcHBWZXJzaW9uKTtcclxuXHRcdG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gPSBzdXBwb3J0c1RyYW5zaXRpb25zKCk7XHJcblxyXG5cdFx0Ly8gV2UgZGlzYWJsZSBmaXhlZCBwb3NpdGlvbmVkIGxpZ2h0Ym94IG9uIGRldmljZXMgdGhhdCBkb24ndCBoYW5kbGUgaXQgbmljZWx5LlxyXG5cdFx0Ly8gSWYgeW91IGtub3cgYSBiZXR0ZXIgd2F5IG9mIGRldGVjdGluZyB0aGlzIC0gbGV0IG1lIGtub3cuXHJcblx0XHRtZnAucHJvYmFibHlNb2JpbGUgPSAobWZwLmlzQW5kcm9pZCB8fCBtZnAuaXNJT1MgfHwgLyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApO1xyXG5cdFx0X2RvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcblxyXG5cdFx0bWZwLnBvcHVwc0NhY2hlID0ge307XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogT3BlbnMgcG9wdXBcclxuXHQgKiBAcGFyYW0gIGRhdGEgW2Rlc2NyaXB0aW9uXVxyXG5cdCAqL1xyXG5cdG9wZW46IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHJcblx0XHRpZighX2JvZHkpIHtcclxuXHRcdFx0X2JvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpO1xyXG5cclxuXHRcdGlmKGRhdGEuaXNPYmogPT09IGZhbHNlKSB7IFxyXG5cdFx0XHQvLyBjb252ZXJ0IGpRdWVyeSBjb2xsZWN0aW9uIHRvIGFycmF5IHRvIGF2b2lkIGNvbmZsaWN0cyBsYXRlclxyXG5cdFx0XHRtZnAuaXRlbXMgPSBkYXRhLml0ZW1zLnRvQXJyYXkoKTtcclxuXHJcblx0XHRcdG1mcC5pbmRleCA9IDA7XHJcblx0XHRcdHZhciBpdGVtcyA9IGRhdGEuaXRlbXMsXHJcblx0XHRcdFx0aXRlbTtcclxuXHRcdFx0Zm9yKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpdGVtID0gaXRlbXNbaV07XHJcblx0XHRcdFx0aWYoaXRlbS5wYXJzZWQpIHtcclxuXHRcdFx0XHRcdGl0ZW0gPSBpdGVtLmVsWzBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihpdGVtID09PSBkYXRhLmVsWzBdKSB7XHJcblx0XHRcdFx0XHRtZnAuaW5kZXggPSBpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZnAuaXRlbXMgPSAkLmlzQXJyYXkoZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW2RhdGEuaXRlbXNdO1xyXG5cdFx0XHRtZnAuaW5kZXggPSBkYXRhLmluZGV4IHx8IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgcG9wdXAgaXMgYWxyZWFkeSBvcGVuZWQgLSB3ZSBqdXN0IHVwZGF0ZSB0aGUgY29udGVudFxyXG5cdFx0aWYobWZwLmlzT3Blbikge1xyXG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRtZnAudHlwZXMgPSBbXTsgXHJcblx0XHRfd3JhcENsYXNzZXMgPSAnJztcclxuXHRcdGlmKGRhdGEubWFpbkVsICYmIGRhdGEubWFpbkVsLmxlbmd0aCkge1xyXG5cdFx0XHRtZnAuZXYgPSBkYXRhLm1haW5FbC5lcSgwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1mcC5ldiA9IF9kb2N1bWVudDtcclxuXHRcdH1cclxuXHJcblx0XHRpZihkYXRhLmtleSkge1xyXG5cdFx0XHRpZighbWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSkge1xyXG5cdFx0XHRcdG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlID0gbWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSB7fTtcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRcdG1mcC5zdCA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsIGRhdGEgKTsgXHJcblx0XHRtZnAuZml4ZWRDb250ZW50UG9zID0gbWZwLnN0LmZpeGVkQ29udGVudFBvcyA9PT0gJ2F1dG8nID8gIW1mcC5wcm9iYWJseU1vYmlsZSA6IG1mcC5zdC5maXhlZENvbnRlbnRQb3M7XHJcblxyXG5cdFx0aWYobWZwLnN0Lm1vZGFsKSB7XHJcblx0XHRcdG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrID0gZmFsc2U7XHJcblx0XHRcdG1mcC5zdC5jbG9zZU9uQmdDbGljayA9IGZhbHNlO1xyXG5cdFx0XHRtZnAuc3Quc2hvd0Nsb3NlQnRuID0gZmFsc2U7XHJcblx0XHRcdG1mcC5zdC5lbmFibGVFc2NhcGVLZXkgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdC8vIEJ1aWxkaW5nIG1hcmt1cFxyXG5cdFx0Ly8gbWFpbiBjb250YWluZXJzIGFyZSBjcmVhdGVkIG9ubHkgb25jZVxyXG5cdFx0aWYoIW1mcC5iZ092ZXJsYXkpIHtcclxuXHJcblx0XHRcdC8vIERhcmsgb3ZlcmxheVxyXG5cdFx0XHRtZnAuYmdPdmVybGF5ID0gX2dldEVsKCdiZycpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG1mcC5jbG9zZSgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1mcC53cmFwID0gX2dldEVsKCd3cmFwJykuYXR0cigndGFiaW5kZXgnLCAtMSkub24oJ2NsaWNrJytFVkVOVF9OUywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmKG1mcC5fY2hlY2tJZkNsb3NlKGUudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1mcC5jb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRhaW5lcicsIG1mcC53cmFwKTtcclxuXHRcdH1cclxuXHJcblx0XHRtZnAuY29udGVudENvbnRhaW5lciA9IF9nZXRFbCgnY29udGVudCcpO1xyXG5cdFx0aWYobWZwLnN0LnByZWxvYWRlcikge1xyXG5cdFx0XHRtZnAucHJlbG9hZGVyID0gX2dldEVsKCdwcmVsb2FkZXInLCBtZnAuY29udGFpbmVyLCBtZnAuc3QudExvYWRpbmcpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQvLyBJbml0aWFsaXppbmcgbW9kdWxlc1xyXG5cdFx0dmFyIG1vZHVsZXMgPSAkLm1hZ25pZmljUG9wdXAubW9kdWxlcztcclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIG4gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHRuID0gbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG4uc2xpY2UoMSk7XHJcblx0XHRcdG1mcFsnaW5pdCcrbl0uY2FsbChtZnApO1xyXG5cdFx0fVxyXG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZU9wZW4nKTtcclxuXHJcblxyXG5cdFx0aWYobWZwLnN0LnNob3dDbG9zZUJ0bikge1xyXG5cdFx0XHQvLyBDbG9zZSBidXR0b25cclxuXHRcdFx0aWYoIW1mcC5zdC5jbG9zZUJ0bkluc2lkZSkge1xyXG5cdFx0XHRcdG1mcC53cmFwLmFwcGVuZCggX2dldENsb3NlQnRuKCkgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfbWZwT24oTUFSS1VQX1BBUlNFX0VWRU5ULCBmdW5jdGlvbihlLCB0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XHJcblx0XHRcdFx0XHR2YWx1ZXMuY2xvc2VfcmVwbGFjZVdpdGggPSBfZ2V0Q2xvc2VCdG4oaXRlbS50eXBlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtY2xvc2UtYnRuLWluJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmKG1mcC5zdC5hbGlnblRvcCkge1xyXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYWxpZ24tdG9wJztcclxuXHRcdH1cclxuXHJcblx0XHJcblxyXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xyXG5cdFx0XHRtZnAud3JhcC5jc3Moe1xyXG5cdFx0XHRcdG92ZXJmbG93OiBtZnAuc3Qub3ZlcmZsb3dZLFxyXG5cdFx0XHRcdG92ZXJmbG93WDogJ2hpZGRlbicsXHJcblx0XHRcdFx0b3ZlcmZsb3dZOiBtZnAuc3Qub3ZlcmZsb3dZXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWZwLndyYXAuY3NzKHsgXHJcblx0XHRcdFx0dG9wOiBfd2luZG93LnNjcm9sbFRvcCgpLFxyXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYoIG1mcC5zdC5maXhlZEJnUG9zID09PSBmYWxzZSB8fCAobWZwLnN0LmZpeGVkQmdQb3MgPT09ICdhdXRvJyAmJiAhbWZwLmZpeGVkQ29udGVudFBvcykgKSB7XHJcblx0XHRcdG1mcC5iZ092ZXJsYXkuY3NzKHtcclxuXHRcdFx0XHRoZWlnaHQ6IF9kb2N1bWVudC5oZWlnaHQoKSxcclxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHJcblx0XHRpZihtZnAuc3QuZW5hYmxlRXNjYXBlS2V5KSB7XHJcblx0XHRcdC8vIENsb3NlIG9uIEVTQyBrZXlcclxuXHRcdFx0X2RvY3VtZW50Lm9uKCdrZXl1cCcgKyBFVkVOVF9OUywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PT0gMjcpIHtcclxuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0X3dpbmRvdy5vbigncmVzaXplJyArIEVWRU5UX05TLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bWZwLnVwZGF0ZVNpemUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHRpZighbWZwLnN0LmNsb3NlT25Db250ZW50Q2xpY2spIHtcclxuXHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWF1dG8tY3Vyc29yJztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYoX3dyYXBDbGFzc2VzKVxyXG5cdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhfd3JhcENsYXNzZXMpO1xyXG5cclxuXHJcblx0XHQvLyB0aGlzIHRyaWdnZXJzIHJlY2FsY3VsYXRpb24gb2YgbGF5b3V0LCBzbyB3ZSBnZXQgaXQgb25jZSB0byBub3QgdG8gdHJpZ2dlciB0d2ljZVxyXG5cdFx0dmFyIHdpbmRvd0hlaWdodCA9IG1mcC53SCA9IF93aW5kb3cuaGVpZ2h0KCk7XHJcblxyXG5cdFx0XHJcblx0XHR2YXIgd2luZG93U3R5bGVzID0ge307XHJcblxyXG5cdFx0aWYoIG1mcC5maXhlZENvbnRlbnRQb3MgKSB7XHJcbiAgICAgICAgICAgIGlmKG1mcC5faGFzU2Nyb2xsQmFyKHdpbmRvd0hlaWdodCkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBtZnAuX2dldFNjcm9sbGJhclNpemUoKTtcclxuICAgICAgICAgICAgICAgIGlmKHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dTdHlsZXMubWFyZ2luUmlnaHQgPSBzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcclxuXHRcdFx0aWYoIW1mcC5pc0lFNykge1xyXG5cdFx0XHRcdHdpbmRvd1N0eWxlcy5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGllNyBkb3VibGUtc2Nyb2xsIGJ1Z1xyXG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHRcclxuXHRcdHZhciBjbGFzc2VzVG9hZGQgPSBtZnAuc3QubWFpbkNsYXNzO1xyXG5cdFx0aWYobWZwLmlzSUU3KSB7XHJcblx0XHRcdGNsYXNzZXNUb2FkZCArPSAnIG1mcC1pZTcnO1xyXG5cdFx0fVxyXG5cdFx0aWYoY2xhc3Nlc1RvYWRkKSB7XHJcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUCggY2xhc3Nlc1RvYWRkICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWRkIGNvbnRlbnRcclxuXHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xyXG5cclxuXHRcdF9tZnBUcmlnZ2VyKCdCdWlsZENvbnRyb2xzJyk7XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIHNjcm9sbGJhciwgYWRkIG1hcmdpbiBlLnQuY1xyXG5cdFx0JCgnaHRtbCcpLmNzcyh3aW5kb3dTdHlsZXMpO1xyXG5cdFx0XHJcblx0XHQvLyBhZGQgZXZlcnl0aGluZyB0byBET01cclxuXHRcdG1mcC5iZ092ZXJsYXkuYWRkKG1mcC53cmFwKS5wcmVwZW5kVG8oIG1mcC5zdC5wcmVwZW5kVG8gfHwgX2JvZHkgKTtcclxuXHJcblx0XHQvLyBTYXZlIGxhc3QgZm9jdXNlZCBlbGVtZW50XHJcblx0XHRtZnAuX2xhc3RGb2N1c2VkRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cdFx0XHJcblx0XHQvLyBXYWl0IGZvciBuZXh0IGN5Y2xlIHRvIGFsbG93IENTUyB0cmFuc2l0aW9uXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYobWZwLmNvbnRlbnQpIHtcclxuXHRcdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVBRFlfQ0xBU1MpO1xyXG5cdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpZiBjb250ZW50IGlzIG5vdCBkZWZpbmVkIChub3QgbG9hZGVkIGUudC5jKSB3ZSBhZGQgY2xhc3Mgb25seSBmb3IgQkdcclxuXHRcdFx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKFJFQURZX0NMQVNTKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0Ly8gVHJhcCB0aGUgZm9jdXMgaW4gcG9wdXBcclxuXHRcdFx0X2RvY3VtZW50Lm9uKCdmb2N1c2luJyArIEVWRU5UX05TLCBtZnAuX29uRm9jdXNJbik7XHJcblxyXG5cdFx0fSwgMTYpO1xyXG5cclxuXHRcdG1mcC5pc09wZW4gPSB0cnVlO1xyXG5cdFx0bWZwLnVwZGF0ZVNpemUod2luZG93SGVpZ2h0KTtcclxuXHRcdF9tZnBUcmlnZ2VyKE9QRU5fRVZFTlQpO1xyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb3NlcyB0aGUgcG9wdXBcclxuXHQgKi9cclxuXHRjbG9zZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpZighbWZwLmlzT3BlbikgcmV0dXJuO1xyXG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0NMT1NFX0VWRU5UKTtcclxuXHJcblx0XHRtZnAuaXNPcGVuID0gZmFsc2U7XHJcblx0XHQvLyBmb3IgQ1NTMyBhbmltYXRpb25cclxuXHRcdGlmKG1mcC5zdC5yZW1vdmFsRGVsYXkgJiYgIW1mcC5pc0xvd0lFICYmIG1mcC5zdXBwb3J0c1RyYW5zaXRpb24gKSAge1xyXG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVNT1ZJTkdfQ0xBU1MpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG1mcC5fY2xvc2UoKTtcclxuXHRcdFx0fSwgbWZwLnN0LnJlbW92YWxEZWxheSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZnAuX2Nsb3NlKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogSGVscGVyIGZvciBjbG9zZSgpIGZ1bmN0aW9uXHJcblx0ICovXHJcblx0X2Nsb3NlOiBmdW5jdGlvbigpIHtcclxuXHRcdF9tZnBUcmlnZ2VyKENMT1NFX0VWRU5UKTtcclxuXHJcblx0XHR2YXIgY2xhc3Nlc1RvUmVtb3ZlID0gUkVNT1ZJTkdfQ0xBU1MgKyAnICcgKyBSRUFEWV9DTEFTUyArICcgJztcclxuXHJcblx0XHRtZnAuYmdPdmVybGF5LmRldGFjaCgpO1xyXG5cdFx0bWZwLndyYXAuZGV0YWNoKCk7XHJcblx0XHRtZnAuY29udGFpbmVyLmVtcHR5KCk7XHJcblxyXG5cdFx0aWYobWZwLnN0Lm1haW5DbGFzcykge1xyXG5cdFx0XHRjbGFzc2VzVG9SZW1vdmUgKz0gbWZwLnN0Lm1haW5DbGFzcyArICcgJztcclxuXHRcdH1cclxuXHJcblx0XHRtZnAuX3JlbW92ZUNsYXNzRnJvbU1GUChjbGFzc2VzVG9SZW1vdmUpO1xyXG5cclxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcclxuXHRcdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHttYXJnaW5SaWdodDogJyd9O1xyXG5cdFx0XHRpZihtZnAuaXNJRTcpIHtcclxuXHRcdFx0XHQkKCdib2R5LCBodG1sJykuY3NzKCdvdmVyZmxvdycsICcnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR3aW5kb3dTdHlsZXMub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdF9kb2N1bWVudC5vZmYoJ2tleXVwJyArIEVWRU5UX05TICsgJyBmb2N1c2luJyArIEVWRU5UX05TKTtcclxuXHRcdG1mcC5ldi5vZmYoRVZFTlRfTlMpO1xyXG5cclxuXHRcdC8vIGNsZWFuIHVwIERPTSBlbGVtZW50cyB0aGF0IGFyZW4ndCByZW1vdmVkXHJcblx0XHRtZnAud3JhcC5hdHRyKCdjbGFzcycsICdtZnAtd3JhcCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHRtZnAuYmdPdmVybGF5LmF0dHIoJ2NsYXNzJywgJ21mcC1iZycpO1xyXG5cdFx0bWZwLmNvbnRhaW5lci5hdHRyKCdjbGFzcycsICdtZnAtY29udGFpbmVyJyk7XHJcblxyXG5cdFx0Ly8gcmVtb3ZlIGNsb3NlIGJ1dHRvbiBmcm9tIHRhcmdldCBlbGVtZW50XHJcblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmXHJcblx0XHQoIW1mcC5zdC5jbG9zZUJ0bkluc2lkZSB8fCBtZnAuY3VyclRlbXBsYXRlW21mcC5jdXJySXRlbS50eXBlXSA9PT0gdHJ1ZSkpIHtcclxuXHRcdFx0aWYobWZwLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bilcclxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRpZihtZnAuX2xhc3RGb2N1c2VkRWwpIHtcclxuXHRcdFx0JChtZnAuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCk7IC8vIHB1dCB0YWIgZm9jdXMgYmFja1xyXG5cdFx0fVxyXG5cdFx0bWZwLmN1cnJJdGVtID0gbnVsbDtcdFxyXG5cdFx0bWZwLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG51bGw7XHJcblx0XHRtZnAucHJldkhlaWdodCA9IDA7XHJcblxyXG5cdFx0X21mcFRyaWdnZXIoQUZURVJfQ0xPU0VfRVZFTlQpO1xyXG5cdH0sXHJcblx0XHJcblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24od2luSGVpZ2h0KSB7XHJcblxyXG5cdFx0aWYobWZwLmlzSU9TKSB7XHJcblx0XHRcdC8vIGZpeGVzIGlPUyBuYXYgYmFycyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9NYWduaWZpYy1Qb3B1cC9pc3N1ZXMvMlxyXG5cdFx0XHR2YXIgem9vbUxldmVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB6b29tTGV2ZWw7XHJcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcclxuXHRcdFx0bWZwLndIID0gaGVpZ2h0O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWZwLndIID0gd2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCk7XHJcblx0XHR9XHJcblx0XHQvLyBGaXhlcyAjODQ6IHBvcHVwIGluY29ycmVjdGx5IHBvc2l0aW9uZWQgd2l0aCBwb3NpdGlvbjpyZWxhdGl2ZSBvbiBib2R5XHJcblx0XHRpZighbWZwLmZpeGVkQ29udGVudFBvcykge1xyXG5cdFx0XHRtZnAud3JhcC5jc3MoJ2hlaWdodCcsIG1mcC53SCk7XHJcblx0XHR9XHJcblxyXG5cdFx0X21mcFRyaWdnZXIoJ1Jlc2l6ZScpO1xyXG5cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgY29udGVudCBvZiBwb3B1cCBiYXNlZCBvbiBjdXJyZW50IGluZGV4XHJcblx0ICovXHJcblx0dXBkYXRlSXRlbUhUTUw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbbWZwLmluZGV4XTtcclxuXHJcblx0XHQvLyBEZXRhY2ggYW5kIHBlcmZvcm0gbW9kaWZpY2F0aW9uc1xyXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCk7XHJcblxyXG5cdFx0aWYobWZwLmNvbnRlbnQpXHJcblx0XHRcdG1mcC5jb250ZW50LmRldGFjaCgpO1xyXG5cclxuXHRcdGlmKCFpdGVtLnBhcnNlZCkge1xyXG5cdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIG1mcC5pbmRleCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0eXBlID0gaXRlbS50eXBlO1x0XHJcblxyXG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZUNoYW5nZScsIFttZnAuY3Vyckl0ZW0gPyBtZnAuY3Vyckl0ZW0udHlwZSA6ICcnLCB0eXBlXSk7XHJcblx0XHQvLyBCZWZvcmVDaGFuZ2UgZXZlbnQgd29ya3MgbGlrZSBzbzpcclxuXHRcdC8vIF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHsgfSk7XHJcblx0XHRcclxuXHRcdG1mcC5jdXJySXRlbSA9IGl0ZW07XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0aWYoIW1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pIHtcclxuXHRcdFx0dmFyIG1hcmt1cCA9IG1mcC5zdFt0eXBlXSA/IG1mcC5zdFt0eXBlXS5tYXJrdXAgOiBmYWxzZTtcclxuXHJcblx0XHRcdC8vIGFsbG93cyB0byBtb2RpZnkgbWFya3VwXHJcblx0XHRcdF9tZnBUcmlnZ2VyKCdGaXJzdE1hcmt1cFBhcnNlJywgbWFya3VwKTtcclxuXHJcblx0XHRcdGlmKG1hcmt1cCkge1xyXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSAkKG1hcmt1cCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gbWFya3VwIGZvdW5kIHdlIGp1c3QgZGVmaW5lIHRoYXQgdGVtcGxhdGUgaXMgcGFyc2VkXHJcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZihfcHJldkNvbnRlbnRUeXBlICYmIF9wcmV2Q29udGVudFR5cGUgIT09IGl0ZW0udHlwZSkge1xyXG5cdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtJytfcHJldkNvbnRlbnRUeXBlKyctaG9sZGVyJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHZhciBuZXdDb250ZW50ID0gbWZwWydnZXQnICsgdHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSldKGl0ZW0sIG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0pO1xyXG5cdFx0bWZwLmFwcGVuZENvbnRlbnQobmV3Q29udGVudCwgdHlwZSk7XHJcblxyXG5cdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xyXG5cclxuXHRcdF9tZnBUcmlnZ2VyKENIQU5HRV9FVkVOVCwgaXRlbSk7XHJcblx0XHRfcHJldkNvbnRlbnRUeXBlID0gaXRlbS50eXBlO1xyXG5cdFx0XHJcblx0XHQvLyBBcHBlbmQgY29udGFpbmVyIGJhY2sgYWZ0ZXIgaXRzIGNvbnRlbnQgY2hhbmdlZFxyXG5cdFx0bWZwLmNvbnRhaW5lci5wcmVwZW5kKG1mcC5jb250ZW50Q29udGFpbmVyKTtcclxuXHJcblx0XHRfbWZwVHJpZ2dlcignQWZ0ZXJDaGFuZ2UnKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IEhUTUwgY29udGVudCBvZiBwb3B1cFxyXG5cdCAqL1xyXG5cdGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKG5ld0NvbnRlbnQsIHR5cGUpIHtcclxuXHRcdG1mcC5jb250ZW50ID0gbmV3Q29udGVudDtcclxuXHRcdFxyXG5cdFx0aWYobmV3Q29udGVudCkge1xyXG5cdFx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmIG1mcC5zdC5jbG9zZUJ0bkluc2lkZSAmJlxyXG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPT09IHRydWUpIHtcclxuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAsIHdlIGp1c3QgYXBwZW5kIGNsb3NlIGJ1dHRvbiBlbGVtZW50IGluc2lkZVxyXG5cdFx0XHRcdGlmKCFtZnAuY29udGVudC5maW5kKCcubWZwLWNsb3NlJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRtZnAuY29udGVudC5hcHBlbmQoX2dldENsb3NlQnRuKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1mcC5jb250ZW50ID0gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0FQUEVORF9FVkVOVCk7XHJcblx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtJyt0eXBlKyctaG9sZGVyJyk7XHJcblxyXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1mcC5jb250ZW50KTtcclxuXHR9LFxyXG5cclxuXHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgTWFnbmlmaWMgUG9wdXAgZGF0YSBvYmplY3QgYmFzZWQgb24gZ2l2ZW4gZGF0YVxyXG5cdCAqIEBwYXJhbSAge2ludH0gaW5kZXggSW5kZXggb2YgaXRlbSB0byBwYXJzZVxyXG5cdCAqL1xyXG5cdHBhcnNlRWw6IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF0sXHJcblx0XHRcdHR5cGU7XHJcblxyXG5cdFx0aWYoaXRlbS50YWdOYW1lKSB7XHJcblx0XHRcdGl0ZW0gPSB7IGVsOiAkKGl0ZW0pIH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0eXBlID0gaXRlbS50eXBlO1xyXG5cdFx0XHRpdGVtID0geyBkYXRhOiBpdGVtLCBzcmM6IGl0ZW0uc3JjIH07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoaXRlbS5lbCkge1xyXG5cdFx0XHR2YXIgdHlwZXMgPSBtZnAudHlwZXM7XHJcblxyXG5cdFx0XHQvLyBjaGVjayBmb3IgJ21mcC1UWVBFJyBjbGFzc1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiggaXRlbS5lbC5oYXNDbGFzcygnbWZwLScrdHlwZXNbaV0pICkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IHR5cGVzW2ldO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpdGVtLnNyYyA9IGl0ZW0uZWwuYXR0cignZGF0YS1tZnAtc3JjJyk7XHJcblx0XHRcdGlmKCFpdGVtLnNyYykge1xyXG5cdFx0XHRcdGl0ZW0uc3JjID0gaXRlbS5lbC5hdHRyKCdocmVmJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpdGVtLnR5cGUgPSB0eXBlIHx8IG1mcC5zdC50eXBlIHx8ICdpbmxpbmUnO1xyXG5cdFx0aXRlbS5pbmRleCA9IGluZGV4O1xyXG5cdFx0aXRlbS5wYXJzZWQgPSB0cnVlO1xyXG5cdFx0bWZwLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcblx0XHRfbWZwVHJpZ2dlcignRWxlbWVudFBhcnNlJywgaXRlbSk7XHJcblxyXG5cdFx0cmV0dXJuIG1mcC5pdGVtc1tpbmRleF07XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluaXRpYWxpemVzIHNpbmdsZSBwb3B1cCBvciBhIGdyb3VwIG9mIHBvcHVwc1xyXG5cdCAqL1xyXG5cdGFkZEdyb3VwOiBmdW5jdGlvbihlbCwgb3B0aW9ucykge1xyXG5cdFx0dmFyIGVIYW5kbGVyID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLm1mcEVsID0gdGhpcztcclxuXHRcdFx0bWZwLl9vcGVuQ2xpY2soZSwgZWwsIG9wdGlvbnMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZighb3B0aW9ucykge1xyXG5cdFx0XHRvcHRpb25zID0ge307XHJcblx0XHR9IFxyXG5cclxuXHRcdHZhciBlTmFtZSA9ICdjbGljay5tYWduaWZpY1BvcHVwJztcclxuXHRcdG9wdGlvbnMubWFpbkVsID0gZWw7XHJcblx0XHRcclxuXHRcdGlmKG9wdGlvbnMuaXRlbXMpIHtcclxuXHRcdFx0b3B0aW9ucy5pc09iaiA9IHRydWU7XHJcblx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wdGlvbnMuaXNPYmogPSBmYWxzZTtcclxuXHRcdFx0aWYob3B0aW9ucy5kZWxlZ2F0ZSkge1xyXG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIG9wdGlvbnMuZGVsZWdhdGUgLCBlSGFuZGxlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsO1xyXG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0X29wZW5DbGljazogZnVuY3Rpb24oZSwgZWwsIG9wdGlvbnMpIHtcclxuXHRcdHZhciBtaWRDbGljayA9IG9wdGlvbnMubWlkQ2xpY2sgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubWlkQ2xpY2sgOiAkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7XHJcblxyXG5cclxuXHRcdGlmKCFtaWRDbGljayAmJiAoIGUud2hpY2ggPT09IDIgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGRpc2FibGVPbiA9IG9wdGlvbnMuZGlzYWJsZU9uICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmRpc2FibGVPbiA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5kaXNhYmxlT247XHJcblxyXG5cdFx0aWYoZGlzYWJsZU9uKSB7XHJcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihkaXNhYmxlT24pKSB7XHJcblx0XHRcdFx0aWYoICFkaXNhYmxlT24uY2FsbChtZnApICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgeyAvLyBlbHNlIGl0J3MgbnVtYmVyXHJcblx0XHRcdFx0aWYoIF93aW5kb3cud2lkdGgoKSA8IGRpc2FibGVPbiApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZihlLnR5cGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Ly8gVGhpcyB3aWxsIHByZXZlbnQgcG9wdXAgZnJvbSBjbG9zaW5nIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGFuZCBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZFxyXG5cdFx0XHRpZihtZnAuaXNPcGVuKSB7XHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHRvcHRpb25zLmVsID0gJChlLm1mcEVsKTtcclxuXHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcclxuXHRcdFx0b3B0aW9ucy5pdGVtcyA9IGVsLmZpbmQob3B0aW9ucy5kZWxlZ2F0ZSk7XHJcblx0XHR9XHJcblx0XHRtZnAub3BlbihvcHRpb25zKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlcyB0ZXh0IG9uIHByZWxvYWRlclxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0YXR1czogZnVuY3Rpb24oc3RhdHVzLCB0ZXh0KSB7XHJcblxyXG5cdFx0aWYobWZwLnByZWxvYWRlcikge1xyXG5cdFx0XHRpZihfcHJldlN0YXR1cyAhPT0gc3RhdHVzKSB7XHJcblx0XHRcdFx0bWZwLmNvbnRhaW5lci5yZW1vdmVDbGFzcygnbWZwLXMtJytfcHJldlN0YXR1cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCF0ZXh0ICYmIHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XHJcblx0XHRcdFx0dGV4dCA9IG1mcC5zdC50TG9hZGluZztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0c3RhdHVzOiBzdGF0dXMsXHJcblx0XHRcdFx0dGV4dDogdGV4dFxyXG5cdFx0XHR9O1xyXG5cdFx0XHQvLyBhbGxvd3MgdG8gbW9kaWZ5IHN0YXR1c1xyXG5cdFx0XHRfbWZwVHJpZ2dlcignVXBkYXRlU3RhdHVzJywgZGF0YSk7XHJcblxyXG5cdFx0XHRzdGF0dXMgPSBkYXRhLnN0YXR1cztcclxuXHRcdFx0dGV4dCA9IGRhdGEudGV4dDtcclxuXHJcblx0XHRcdG1mcC5wcmVsb2FkZXIuaHRtbCh0ZXh0KTtcclxuXHJcblx0XHRcdG1mcC5wcmVsb2FkZXIuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1mcC5jb250YWluZXIuYWRkQ2xhc3MoJ21mcC1zLScrc3RhdHVzKTtcclxuXHRcdFx0X3ByZXZTdGF0dXMgPSBzdGF0dXM7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblxyXG5cdC8qXHJcblx0XHRcIlByaXZhdGVcIiBoZWxwZXJzIHRoYXQgYXJlbid0IHByaXZhdGUgYXQgYWxsXHJcblx0ICovXHJcblx0Ly8gQ2hlY2sgdG8gY2xvc2UgcG9wdXAgb3Igbm90XHJcblx0Ly8gXCJ0YXJnZXRcIiBpcyBhbiBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuXHRfY2hlY2tJZkNsb3NlOiBmdW5jdGlvbih0YXJnZXQpIHtcclxuXHJcblx0XHRpZigkKHRhcmdldCkuaGFzQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUykpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjbG9zZU9uQ29udGVudCA9IG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrO1xyXG5cdFx0dmFyIGNsb3NlT25CZyA9IG1mcC5zdC5jbG9zZU9uQmdDbGljaztcclxuXHJcblx0XHRpZihjbG9zZU9uQ29udGVudCAmJiBjbG9zZU9uQmcpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Ly8gV2UgY2xvc2UgdGhlIHBvcHVwIGlmIGNsaWNrIGlzIG9uIGNsb3NlIGJ1dHRvbiBvciBvbiBwcmVsb2FkZXIuIE9yIGlmIHRoZXJlIGlzIG5vIGNvbnRlbnQuXHJcblx0XHRcdGlmKCFtZnAuY29udGVudCB8fCAkKHRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jbG9zZScpIHx8IChtZnAucHJlbG9hZGVyICYmIHRhcmdldCA9PT0gbWZwLnByZWxvYWRlclswXSkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIGNvbnRlbnRcclxuXHRcdFx0aWYoICAodGFyZ2V0ICE9PSBtZnAuY29udGVudFswXSAmJiAhJC5jb250YWlucyhtZnAuY29udGVudFswXSwgdGFyZ2V0KSkgICkge1xyXG5cdFx0XHRcdGlmKGNsb3NlT25CZykge1xyXG5cdFx0XHRcdFx0Ly8gbGFzdCBjaGVjaywgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBpbiBET00sIChpbiBjYXNlIGl0J3MgcmVtb3ZlZCBvbmNsaWNrKVxyXG5cdFx0XHRcdFx0aWYoICQuY29udGFpbnMoZG9jdW1lbnQsIHRhcmdldCkgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmKGNsb3NlT25Db250ZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRfYWRkQ2xhc3NUb01GUDogZnVuY3Rpb24oY05hbWUpIHtcclxuXHRcdG1mcC5iZ092ZXJsYXkuYWRkQ2xhc3MoY05hbWUpO1xyXG5cdFx0bWZwLndyYXAuYWRkQ2xhc3MoY05hbWUpO1xyXG5cdH0sXHJcblx0X3JlbW92ZUNsYXNzRnJvbU1GUDogZnVuY3Rpb24oY05hbWUpIHtcclxuXHRcdHRoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGNOYW1lKTtcclxuXHRcdG1mcC53cmFwLnJlbW92ZUNsYXNzKGNOYW1lKTtcclxuXHR9LFxyXG5cdF9oYXNTY3JvbGxCYXI6IGZ1bmN0aW9uKHdpbkhlaWdodCkge1xyXG5cdFx0cmV0dXJuICggIChtZnAuaXNJRTcgPyBfZG9jdW1lbnQuaGVpZ2h0KCkgOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgPiAod2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCkpICk7XHJcblx0fSxcclxuXHRfc2V0Rm9jdXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0KG1mcC5zdC5mb2N1cyA/IG1mcC5jb250ZW50LmZpbmQobWZwLnN0LmZvY3VzKS5lcSgwKSA6IG1mcC53cmFwKS5mb2N1cygpO1xyXG5cdH0sXHJcblx0X29uRm9jdXNJbjogZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYoIGUudGFyZ2V0ICE9PSBtZnAud3JhcFswXSAmJiAhJC5jb250YWlucyhtZnAud3JhcFswXSwgZS50YXJnZXQpICkge1xyXG5cdFx0XHRtZnAuX3NldEZvY3VzKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9wYXJzZU1hcmt1cDogZnVuY3Rpb24odGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xyXG5cdFx0dmFyIGFycjtcclxuXHRcdGlmKGl0ZW0uZGF0YSkge1xyXG5cdFx0XHR2YWx1ZXMgPSAkLmV4dGVuZChpdGVtLmRhdGEsIHZhbHVlcyk7XHJcblx0XHR9XHJcblx0XHRfbWZwVHJpZ2dlcihNQVJLVVBfUEFSU0VfRVZFTlQsIFt0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtXSApO1xyXG5cclxuXHRcdCQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0aWYodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhcnIgPSBrZXkuc3BsaXQoJ18nKTtcclxuXHRcdFx0aWYoYXJyLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2FyclswXSk7XHJcblxyXG5cdFx0XHRcdGlmKGVsLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHZhciBhdHRyID0gYXJyWzFdO1xyXG5cdFx0XHRcdFx0aWYoYXR0ciA9PT0gJ3JlcGxhY2VXaXRoJykge1xyXG5cdFx0XHRcdFx0XHRpZihlbFswXSAhPT0gdmFsdWVbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCh2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZihhdHRyID09PSAnaW1nJykge1xyXG5cdFx0XHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcclxuXHRcdFx0XHRcdFx0XHRlbC5hdHRyKCdzcmMnLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgoICc8aW1nIHNyYz1cIicrdmFsdWUrJ1wiIGNsYXNzPVwiJyArIGVsLmF0dHIoJ2NsYXNzJykgKyAnXCIgLz4nICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGVsLmF0dHIoYXJyWzFdLCB2YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2tleSkuaHRtbCh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdF9nZXRTY3JvbGxiYXJTaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdC8vIHRoeCBEYXZpZFxyXG5cdFx0aWYobWZwLnNjcm9sbGJhclNpemUgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0c2Nyb2xsRGl2LnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDk5cHg7IGhlaWdodDogOTlweDsgb3ZlcmZsb3c6IHNjcm9sbDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC05OTk5cHg7JztcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xyXG5cdFx0XHRtZnAuc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1mcC5zY3JvbGxiYXJTaXplO1xyXG5cdH1cclxuXHJcbn07IC8qIE1hZ25pZmljUG9wdXAgY29yZSBwcm90b3R5cGUgZW5kICovXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHVibGljIHN0YXRpYyBmdW5jdGlvbnNcclxuICovXHJcbiQubWFnbmlmaWNQb3B1cCA9IHtcclxuXHRpbnN0YW5jZTogbnVsbCxcclxuXHRwcm90bzogTWFnbmlmaWNQb3B1cC5wcm90b3R5cGUsXHJcblx0bW9kdWxlczogW10sXHJcblxyXG5cdG9wZW46IGZ1bmN0aW9uKG9wdGlvbnMsIGluZGV4KSB7XHJcblx0XHRfY2hlY2tJbnN0YW5jZSgpO1x0XHJcblxyXG5cdFx0aWYoIW9wdGlvbnMpIHtcclxuXHRcdFx0b3B0aW9ucyA9IHt9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblxyXG5cdFx0b3B0aW9ucy5pc09iaiA9IHRydWU7XHJcblx0XHRvcHRpb25zLmluZGV4ID0gaW5kZXggfHwgMDtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlLm9wZW4ob3B0aW9ucyk7XHJcblx0fSxcclxuXHJcblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSAmJiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UuY2xvc2UoKTtcclxuXHR9LFxyXG5cclxuXHRyZWdpc3Rlck1vZHVsZTogZnVuY3Rpb24obmFtZSwgbW9kdWxlKSB7XHJcblx0XHRpZihtb2R1bGUub3B0aW9ucykge1xyXG5cdFx0XHQkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHNbbmFtZV0gPSBtb2R1bGUub3B0aW9ucztcclxuXHRcdH1cclxuXHRcdCQuZXh0ZW5kKHRoaXMucHJvdG8sIG1vZHVsZS5wcm90byk7XHRcdFx0XHJcblx0XHR0aGlzLm1vZHVsZXMucHVzaChuYW1lKTtcclxuXHR9LFxyXG5cclxuXHRkZWZhdWx0czogeyAgIFxyXG5cclxuXHRcdC8vIEluZm8gYWJvdXQgb3B0aW9ucyBpcyBpbiBkb2NzOlxyXG5cdFx0Ly8gaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI29wdGlvbnNcclxuXHRcdFxyXG5cdFx0ZGlzYWJsZU9uOiAwLFx0XHJcblxyXG5cdFx0a2V5OiBudWxsLFxyXG5cclxuXHRcdG1pZENsaWNrOiBmYWxzZSxcclxuXHJcblx0XHRtYWluQ2xhc3M6ICcnLFxyXG5cclxuXHRcdHByZWxvYWRlcjogdHJ1ZSxcclxuXHJcblx0XHRmb2N1czogJycsIC8vIENTUyBzZWxlY3RvciBvZiBpbnB1dCB0byBmb2N1cyBhZnRlciBwb3B1cCBpcyBvcGVuZWRcclxuXHRcdFxyXG5cdFx0Y2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXHJcblxyXG5cdFx0Y2xvc2VPbkJnQ2xpY2s6IHRydWUsXHJcblxyXG5cdFx0Y2xvc2VCdG5JbnNpZGU6IHRydWUsIFxyXG5cclxuXHRcdHNob3dDbG9zZUJ0bjogdHJ1ZSxcclxuXHJcblx0XHRlbmFibGVFc2NhcGVLZXk6IHRydWUsXHJcblxyXG5cdFx0bW9kYWw6IGZhbHNlLFxyXG5cclxuXHRcdGFsaWduVG9wOiBmYWxzZSxcclxuXHRcclxuXHRcdHJlbW92YWxEZWxheTogMCxcclxuXHJcblx0XHRwcmVwZW5kVG86IG51bGwsXHJcblx0XHRcclxuXHRcdGZpeGVkQ29udGVudFBvczogJ2F1dG8nLCBcclxuXHRcclxuXHRcdGZpeGVkQmdQb3M6ICdhdXRvJyxcclxuXHJcblx0XHRvdmVyZmxvd1k6ICdhdXRvJyxcclxuXHJcblx0XHRjbG9zZU1hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPicsXHJcblxyXG5cdFx0dENsb3NlOiAnQ2xvc2UgKEVzYyknLFxyXG5cclxuXHRcdHRMb2FkaW5nOiAnTG9hZGluZy4uLidcclxuXHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4kLmZuLm1hZ25pZmljUG9wdXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0X2NoZWNrSW5zdGFuY2UoKTtcclxuXHJcblx0dmFyIGpxRWwgPSAkKHRoaXMpO1xyXG5cclxuXHQvLyBXZSBjYWxsIHNvbWUgQVBJIG1ldGhvZCBvZiBmaXJzdCBwYXJhbSBpcyBhIHN0cmluZ1xyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcclxuXHJcblx0XHRpZihvcHRpb25zID09PSAnb3BlbicpIHtcclxuXHRcdFx0dmFyIGl0ZW1zLFxyXG5cdFx0XHRcdGl0ZW1PcHRzID0gX2lzSlEgPyBqcUVsLmRhdGEoJ21hZ25pZmljUG9wdXAnKSA6IGpxRWxbMF0ubWFnbmlmaWNQb3B1cCxcclxuXHRcdFx0XHRpbmRleCA9IHBhcnNlSW50KGFyZ3VtZW50c1sxXSwgMTApIHx8IDA7XHJcblxyXG5cdFx0XHRpZihpdGVtT3B0cy5pdGVtcykge1xyXG5cdFx0XHRcdGl0ZW1zID0gaXRlbU9wdHMuaXRlbXNbaW5kZXhdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGl0ZW1zID0ganFFbDtcclxuXHRcdFx0XHRpZihpdGVtT3B0cy5kZWxlZ2F0ZSkge1xyXG5cdFx0XHRcdFx0aXRlbXMgPSBpdGVtcy5maW5kKGl0ZW1PcHRzLmRlbGVnYXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aXRlbXMgPSBpdGVtcy5lcSggaW5kZXggKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRtZnAuX29wZW5DbGljayh7bWZwRWw6aXRlbXN9LCBqcUVsLCBpdGVtT3B0cyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZihtZnAuaXNPcGVuKVxyXG5cdFx0XHRcdG1mcFtvcHRpb25zXS5hcHBseShtZnAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyXG5cdFx0fVxyXG5cclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gY2xvbmUgb3B0aW9ucyBvYmpcclxuXHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgb3B0aW9ucyk7XHJcblx0XHRcclxuXHRcdC8qXHJcblx0XHQgKiBBcyBaZXB0byBkb2Vzbid0IHN1cHBvcnQgLmRhdGEoKSBtZXRob2QgZm9yIG9iamVjdHMgXHJcblx0XHQgKiBhbmQgaXQgd29ya3Mgb25seSBpbiBub3JtYWwgYnJvd3NlcnNcclxuXHRcdCAqIHdlIGFzc2lnbiBcIm9wdGlvbnNcIiBvYmplY3QgZGlyZWN0bHkgdG8gdGhlIERPTSBlbGVtZW50LiBGVFchXHJcblx0XHQgKi9cclxuXHRcdGlmKF9pc0pRKSB7XHJcblx0XHRcdGpxRWwuZGF0YSgnbWFnbmlmaWNQb3B1cCcsIG9wdGlvbnMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0anFFbFswXS5tYWduaWZpY1BvcHVwID0gb3B0aW9ucztcclxuXHRcdH1cclxuXHJcblx0XHRtZnAuYWRkR3JvdXAoanFFbCwgb3B0aW9ucyk7XHJcblxyXG5cdH1cclxuXHRyZXR1cm4ganFFbDtcclxufTtcclxuXHJcblxyXG4vL1F1aWNrIGJlbmNobWFya1xyXG4vKlxyXG52YXIgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuXHRpLFxyXG5cdHJvdW5kcyA9IDEwMDA7XHJcblxyXG5mb3IoaSA9IDA7IGkgPCByb3VuZHM7IGkrKykge1xyXG5cclxufVxyXG5jb25zb2xlLmxvZygnVGVzdCAjMTonLCBwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0KTtcclxuXHJcbnN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbmZvcihpID0gMDsgaSA8IHJvdW5kczsgaSsrKSB7XHJcblxyXG59XHJcbmNvbnNvbGUubG9nKCdUZXN0ICMyOicsIHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQpO1xyXG4qL1xyXG5cclxuXHJcbi8qPj5jb3JlKi9cclxuXHJcbi8qPj5pbmxpbmUqL1xyXG5cclxudmFyIElOTElORV9OUyA9ICdpbmxpbmUnLFxyXG5cdF9oaWRkZW5DbGFzcyxcclxuXHRfaW5saW5lUGxhY2Vob2xkZXIsIFxyXG5cdF9sYXN0SW5saW5lRWxlbWVudCxcclxuXHRfcHV0SW5saW5lRWxlbWVudHNCYWNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZihfbGFzdElubGluZUVsZW1lbnQpIHtcclxuXHRcdFx0X2lubGluZVBsYWNlaG9sZGVyLmFmdGVyKCBfbGFzdElubGluZUVsZW1lbnQuYWRkQ2xhc3MoX2hpZGRlbkNsYXNzKSApLmRldGFjaCgpO1xyXG5cdFx0XHRfbGFzdElubGluZUVsZW1lbnQgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSU5MSU5FX05TLCB7XHJcblx0b3B0aW9uczoge1xyXG5cdFx0aGlkZGVuQ2xhc3M6ICdoaWRlJywgLy8gd2lsbCBiZSBhcHBlbmRlZCB3aXRoIGBtZnAtYCBwcmVmaXhcclxuXHRcdG1hcmt1cDogJycsXHJcblx0XHR0Tm90Rm91bmQ6ICdDb250ZW50IG5vdCBmb3VuZCdcclxuXHR9LFxyXG5cdHByb3RvOiB7XHJcblxyXG5cdFx0aW5pdElubGluZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1mcC50eXBlcy5wdXNoKElOTElORV9OUyk7XHJcblxyXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrJy4nK0lOTElORV9OUywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0SW5saW5lOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xyXG5cclxuXHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xyXG5cclxuXHRcdFx0aWYoaXRlbS5zcmMpIHtcclxuXHRcdFx0XHR2YXIgaW5saW5lU3QgPSBtZnAuc3QuaW5saW5lLFxyXG5cdFx0XHRcdFx0ZWwgPSAkKGl0ZW0uc3JjKTtcclxuXHJcblx0XHRcdFx0aWYoZWwubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSWYgdGFyZ2V0IGVsZW1lbnQgaGFzIHBhcmVudCAtIHdlIHJlcGxhY2UgaXQgd2l0aCBwbGFjZWhvbGRlciBhbmQgcHV0IGl0IGJhY2sgYWZ0ZXIgcG9wdXAgaXMgY2xvc2VkXHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZWxbMF0ucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdGlmKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSkge1xyXG5cdFx0XHRcdFx0XHRpZighX2lubGluZVBsYWNlaG9sZGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gaW5saW5lU3QuaGlkZGVuQ2xhc3M7XHJcblx0XHRcdFx0XHRcdFx0X2lubGluZVBsYWNlaG9sZGVyID0gX2dldEVsKF9oaWRkZW5DbGFzcyk7XHJcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gJ21mcC0nK19oaWRkZW5DbGFzcztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyByZXBsYWNlIHRhcmdldCBpbmxpbmUgZWxlbWVudCB3aXRoIHBsYWNlaG9sZGVyXHJcblx0XHRcdFx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IGVsLmFmdGVyKF9pbmxpbmVQbGFjZWhvbGRlcikuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoX2hpZGRlbkNsYXNzKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGlubGluZVN0LnROb3RGb3VuZCk7XHJcblx0XHRcdFx0XHRlbCA9ICQoJzxkaXY+Jyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpdGVtLmlubGluZUVsZW1lbnQgPSBlbDtcclxuXHRcdFx0XHRyZXR1cm4gZWw7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XHJcblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHt9LCBpdGVtKTtcclxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vKj4+aW5saW5lKi9cclxuXHJcbi8qPj5hamF4Ki9cclxudmFyIEFKQVhfTlMgPSAnYWpheCcsXHJcblx0X2FqYXhDdXIsXHJcblx0X3JlbW92ZUFqYXhDdXJzb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmKF9hamF4Q3VyKSB7XHJcblx0XHRcdF9ib2R5LnJlbW92ZUNsYXNzKF9hamF4Q3VyKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9kZXN0cm95QWpheFJlcXVlc3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdF9yZW1vdmVBamF4Q3Vyc29yKCk7XHJcblx0XHRpZihtZnAucmVxKSB7XHJcblx0XHRcdG1mcC5yZXEuYWJvcnQoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEFKQVhfTlMsIHtcclxuXHJcblx0b3B0aW9uczoge1xyXG5cdFx0c2V0dGluZ3M6IG51bGwsXHJcblx0XHRjdXJzb3I6ICdtZnAtYWpheC1jdXInLFxyXG5cdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGNvbnRlbnQ8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xyXG5cdH0sXHJcblxyXG5cdHByb3RvOiB7XHJcblx0XHRpbml0QWpheDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1mcC50eXBlcy5wdXNoKEFKQVhfTlMpO1xyXG5cdFx0XHRfYWpheEN1ciA9IG1mcC5zdC5hamF4LmN1cnNvcjtcclxuXHJcblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XHJcblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlLicgKyBBSkFYX05TLCBfZGVzdHJveUFqYXhSZXF1ZXN0KTtcclxuXHRcdH0sXHJcblx0XHRnZXRBamF4OiBmdW5jdGlvbihpdGVtKSB7XHJcblxyXG5cdFx0XHRpZihfYWpheEN1cilcclxuXHRcdFx0XHRfYm9keS5hZGRDbGFzcyhfYWpheEN1cik7XHJcblxyXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XHJcblxyXG5cdFx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0XHR1cmw6IGl0ZW0uc3JjLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcdFx0XHR2YXIgdGVtcCA9IHtcclxuXHRcdFx0XHRcdFx0ZGF0YTpkYXRhLFxyXG5cdFx0XHRcdFx0XHR4aHI6anFYSFJcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0X21mcFRyaWdnZXIoJ1BhcnNlQWpheCcsIHRlbXApO1xyXG5cclxuXHRcdFx0XHRcdG1mcC5hcHBlbmRDb250ZW50KCAkKHRlbXAuZGF0YSksIEFKQVhfTlMgKTtcclxuXHJcblx0XHRcdFx0XHRpdGVtLmZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xyXG5cclxuXHRcdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XHJcblx0XHRcdFx0XHR9LCAxNik7XHJcblxyXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcclxuXHJcblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignQWpheENvbnRlbnRBZGRlZCcpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcclxuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSBpdGVtLmxvYWRFcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIG1mcC5zdC5hamF4LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBtZnAuc3QuYWpheC5zZXR0aW5ncyk7XHJcblxyXG5cdFx0XHRtZnAucmVxID0gJC5hamF4KG9wdHMpO1xyXG5cclxuXHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcclxuXHJcbi8qPj5hamF4Ki9cclxuXHJcbi8qPj5pbWFnZSovXHJcbnZhciBfaW1nSW50ZXJ2YWwsXHJcblx0X2dldFRpdGxlID0gZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0aWYoaXRlbS5kYXRhICYmIGl0ZW0uZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkKSBcclxuXHRcdFx0cmV0dXJuIGl0ZW0uZGF0YS50aXRsZTtcclxuXHJcblx0XHR2YXIgc3JjID0gbWZwLnN0LmltYWdlLnRpdGxlU3JjO1xyXG5cclxuXHRcdGlmKHNyYykge1xyXG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oc3JjKSkge1xyXG5cdFx0XHRcdHJldHVybiBzcmMuY2FsbChtZnAsIGl0ZW0pO1xyXG5cdFx0XHR9IGVsc2UgaWYoaXRlbS5lbCkge1xyXG5cdFx0XHRcdHJldHVybiBpdGVtLmVsLmF0dHIoc3JjKSB8fCAnJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH07XHJcblxyXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ2ltYWdlJywge1xyXG5cclxuXHRvcHRpb25zOiB7XHJcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPicrXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXHJcblx0XHRcdFx0XHQnPGZpZ3VyZT4nK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHQnPGZpZ2NhcHRpb24+JytcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHQnPC9maWdjYXB0aW9uPicrXHJcblx0XHRcdFx0XHQnPC9maWd1cmU+JytcclxuXHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdGN1cnNvcjogJ21mcC16b29tLW91dC1jdXInLFxyXG5cdFx0dGl0bGVTcmM6ICd0aXRsZScsIFxyXG5cdFx0dmVydGljYWxGaXQ6IHRydWUsXHJcblx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xyXG5cdH0sXHJcblxyXG5cdHByb3RvOiB7XHJcblx0XHRpbml0SW1hZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaW1nU3QgPSBtZnAuc3QuaW1hZ2UsXHJcblx0XHRcdFx0bnMgPSAnLmltYWdlJztcclxuXHJcblx0XHRcdG1mcC50eXBlcy5wdXNoKCdpbWFnZScpO1xyXG5cclxuXHRcdFx0X21mcE9uKE9QRU5fRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnICYmIGltZ1N0LmN1cnNvcikge1xyXG5cdFx0XHRcdFx0X2JvZHkuYWRkQ2xhc3MoaW1nU3QuY3Vyc29yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZihpbWdTdC5jdXJzb3IpIHtcclxuXHRcdFx0XHRcdF9ib2R5LnJlbW92ZUNsYXNzKGltZ1N0LmN1cnNvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF93aW5kb3cub2ZmKCdyZXNpemUnICsgRVZFTlRfTlMpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdF9tZnBPbignUmVzaXplJytucywgbWZwLnJlc2l6ZUltYWdlKTtcclxuXHRcdFx0aWYobWZwLmlzTG93SUUpIHtcclxuXHRcdFx0XHRfbWZwT24oJ0FmdGVyQ2hhbmdlJywgbWZwLnJlc2l6ZUltYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHJlc2l6ZUltYWdlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtZnAuY3Vyckl0ZW07XHJcblx0XHRcdGlmKCFpdGVtIHx8ICFpdGVtLmltZykgcmV0dXJuO1xyXG5cclxuXHRcdFx0aWYobWZwLnN0LmltYWdlLnZlcnRpY2FsRml0KSB7XHJcblx0XHRcdFx0dmFyIGRlY3IgPSAwO1xyXG5cdFx0XHRcdC8vIGZpeCBib3gtc2l6aW5nIGluIGllNy84XHJcblx0XHRcdFx0aWYobWZwLmlzTG93SUUpIHtcclxuXHRcdFx0XHRcdGRlY3IgPSBwYXJzZUludChpdGVtLmltZy5jc3MoJ3BhZGRpbmctdG9wJyksIDEwKSArIHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGl0ZW0uaW1nLmNzcygnbWF4LWhlaWdodCcsIG1mcC53SC1kZWNyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdF9vbkltYWdlSGFzU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRpZihpdGVtLmltZykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpdGVtLmlzQ2hlY2tpbmdJbWdTaXplID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdF9tZnBUcmlnZ2VyKCdJbWFnZUhhc1NpemUnLCBpdGVtKTtcclxuXHJcblx0XHRcdFx0aWYoaXRlbS5pbWdIaWRkZW4pIHtcclxuXHRcdFx0XHRcdGlmKG1mcC5jb250ZW50KVxyXG5cdFx0XHRcdFx0XHRtZnAuY29udGVudC5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRnVuY3Rpb24gdGhhdCBsb29wcyB1bnRpbCB0aGUgaW1hZ2UgaGFzIHNpemUgdG8gZGlzcGxheSBlbGVtZW50cyB0aGF0IHJlbHkgb24gaXQgYXNhcFxyXG5cdFx0ICovXHJcblx0XHRmaW5kSW1hZ2VTaXplOiBmdW5jdGlvbihpdGVtKSB7XHJcblxyXG5cdFx0XHR2YXIgY291bnRlciA9IDAsXHJcblx0XHRcdFx0aW1nID0gaXRlbS5pbWdbMF0sXHJcblx0XHRcdFx0bWZwU2V0SW50ZXJ2YWwgPSBmdW5jdGlvbihkZWxheSkge1xyXG5cclxuXHRcdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkge1xyXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBkZWNlbGVyYXRpbmcgaW50ZXJ2YWwgdGhhdCBjaGVja3MgZm9yIHNpemUgb2YgYW4gaW1hZ2VcclxuXHRcdFx0XHRcdF9pbWdJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID4gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRjb3VudGVyKys7XHJcblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPT09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCgxMCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSA0MCkge1xyXG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGNvdW50ZXIgPT09IDEwMCkge1xyXG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0bWZwU2V0SW50ZXJ2YWwoMSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEltYWdlOiBmdW5jdGlvbihpdGVtLCB0ZW1wbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGd1YXJkID0gMCxcclxuXHJcblx0XHRcdFx0Ly8gaW1hZ2UgbG9hZCBjb21wbGV0ZSBoYW5kbGVyXHJcblx0XHRcdFx0b25Mb2FkQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmKGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uaW1nWzBdLmNvbXBsZXRlKSB7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5pbWcub2ZmKCcubWZwbG9hZGVyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYoaXRlbSA9PT0gbWZwLmN1cnJJdGVtKXtcclxuXHRcdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRfbWZwVHJpZ2dlcignSW1hZ2VMb2FkQ29tcGxldGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBpZiBpbWFnZSBjb21wbGV0ZSBjaGVjayBmYWlscyAyMDAgdGltZXMgKDIwIHNlYyksIHdlIGFzc3VtZSB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvci5cclxuXHRcdFx0XHRcdFx0XHRndWFyZCsrO1xyXG5cdFx0XHRcdFx0XHRcdGlmKGd1YXJkIDwgMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KG9uTG9hZENvbXBsZXRlLDEwMCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9uTG9hZEVycm9yKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0Ly8gaW1hZ2UgZXJyb3IgaGFuZGxlclxyXG5cdFx0XHRcdG9uTG9hZEVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZihpdGVtKSB7XHJcblx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xyXG5cdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xyXG5cdFx0XHRcdFx0XHRcdG1mcC5fb25JbWFnZUhhc1NpemUoaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbWdTdC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRpdGVtLmxvYWRFcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbWdTdCA9IG1mcC5zdC5pbWFnZTtcclxuXHJcblxyXG5cdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKCcubWZwLWltZycpO1xyXG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcclxuXHRcdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblx0XHRcdFx0aW1nLmNsYXNzTmFtZSA9ICdtZnAtaW1nJztcclxuXHRcdFx0XHRpZihpdGVtLmVsICYmIGl0ZW0uZWwuZmluZCgnaW1nJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRpbWcuYWx0ID0gaXRlbS5lbC5maW5kKCdpbWcnKS5hdHRyKCdhbHQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aXRlbS5pbWcgPSAkKGltZykub24oJ2xvYWQubWZwbG9hZGVyJywgb25Mb2FkQ29tcGxldGUpLm9uKCdlcnJvci5tZnBsb2FkZXInLCBvbkxvYWRFcnJvcik7XHJcblx0XHRcdFx0aW1nLnNyYyA9IGl0ZW0uc3JjO1xyXG5cclxuXHRcdFx0XHQvLyB3aXRob3V0IGNsb25lKCkgXCJlcnJvclwiIGV2ZW50IGlzIG5vdCBmaXJpbmcgd2hlbiBJTUcgaXMgcmVwbGFjZWQgYnkgbmV3IElNR1xyXG5cdFx0XHRcdC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gYXZvaWQgc3VjaCBjbG9uaW5nXHJcblx0XHRcdFx0aWYoZWwuaXMoJ2ltZycpKSB7XHJcblx0XHRcdFx0XHRpdGVtLmltZyA9IGl0ZW0uaW1nLmNsb25lKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbWcgPSBpdGVtLmltZ1swXTtcclxuXHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xyXG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2UgaWYoIWltZy53aWR0aCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1mcC5fcGFyc2VNYXJrdXAodGVtcGxhdGUsIHtcclxuXHRcdFx0XHR0aXRsZTogX2dldFRpdGxlKGl0ZW0pLFxyXG5cdFx0XHRcdGltZ19yZXBsYWNlV2l0aDogaXRlbS5pbWdcclxuXHRcdFx0fSwgaXRlbSk7XHJcblxyXG5cdFx0XHRtZnAucmVzaXplSW1hZ2UoKTtcclxuXHJcblx0XHRcdGlmKGl0ZW0uaGFzU2l6ZSkge1xyXG5cdFx0XHRcdGlmKF9pbWdJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xyXG5cdFx0XHRcdFx0dGVtcGxhdGUuYWRkQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XHJcblx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0ZW1wbGF0ZS5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnbG9hZGluZycpO1xyXG5cdFx0XHRpdGVtLmxvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0aWYoIWl0ZW0uaGFzU2l6ZSkge1xyXG5cdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRtZnAuZmluZEltYWdlU2l6ZShpdGVtKTtcclxuXHRcdFx0fSBcclxuXHJcblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKj4+aW1hZ2UqL1xyXG5cclxuLyo+Pnpvb20qL1xyXG52YXIgaGFzTW96VHJhbnNmb3JtLFxyXG5cdGdldEhhc01velRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoaGFzTW96VHJhbnNmb3JtID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0aGFzTW96VHJhbnNmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGhhc01velRyYW5zZm9ybTtcdFx0XHJcblx0fTtcclxuXHJcbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnem9vbScsIHtcclxuXHJcblx0b3B0aW9uczoge1xyXG5cdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRlYXNpbmc6ICdlYXNlLWluLW91dCcsXHJcblx0XHRkdXJhdGlvbjogMzAwLFxyXG5cdFx0b3BlbmVyOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50LmlzKCdpbWcnKSA/IGVsZW1lbnQgOiBlbGVtZW50LmZpbmQoJ2ltZycpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHByb3RvOiB7XHJcblxyXG5cdFx0aW5pdFpvb206IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgem9vbVN0ID0gbWZwLnN0Lnpvb20sXHJcblx0XHRcdFx0bnMgPSAnLnpvb20nLFxyXG5cdFx0XHRcdGltYWdlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZighem9vbVN0LmVuYWJsZWQgfHwgIW1mcC5zdXBwb3J0c1RyYW5zaXRpb24pIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBkdXJhdGlvbiA9IHpvb21TdC5kdXJhdGlvbixcclxuXHRcdFx0XHRnZXRFbFRvQW5pbWF0ZSA9IGZ1bmN0aW9uKGltYWdlKSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3SW1nID0gaW1hZ2UuY2xvbmUoKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2NsYXNzJykuYWRkQ2xhc3MoJ21mcC1hbmltYXRlZC1pbWFnZScpLFxyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uID0gJ2FsbCAnKyh6b29tU3QuZHVyYXRpb24vMTAwMCkrJ3MgJyArIHpvb21TdC5lYXNpbmcsXHJcblx0XHRcdFx0XHRcdGNzc09iaiA9IHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IDk5OTksXHJcblx0XHRcdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdFx0XHR0b3A6IDAsXHJcblx0XHRcdFx0XHRcdFx0Jy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHQgPSAndHJhbnNpdGlvbic7XHJcblxyXG5cdFx0XHRcdFx0Y3NzT2JqWyctd2Via2l0LScrdF0gPSBjc3NPYmpbJy1tb3otJyt0XSA9IGNzc09ialsnLW8tJyt0XSA9IGNzc09ialt0XSA9IHRyYW5zaXRpb247XHJcblxyXG5cdFx0XHRcdFx0bmV3SW1nLmNzcyhjc3NPYmopO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ld0ltZztcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNob3dNYWluQ29udGVudCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9wZW5UaW1lb3V0LFxyXG5cdFx0XHRcdGFuaW1hdGVkSW1nO1xyXG5cclxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJytucywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xyXG5cclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XHJcblx0XHRcdFx0XHRtZnAuY29udGVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQmFzaWNhbGx5LCBhbGwgY29kZSBiZWxvdyBkb2VzIGlzIGNsb25lcyBleGlzdGluZyBpbWFnZSwgcHV0cyBpbiBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgb25lIGFuZCBhbmltYXRlZCBpdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpbWFnZSA9IG1mcC5fZ2V0SXRlbVRvWm9vbSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xyXG5cdFx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGFuaW1hdGVkSW1nID0gZ2V0RWxUb0FuaW1hdGUoaW1hZ2UpOyBcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCgpICk7XHJcblxyXG5cdFx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKGFuaW1hdGVkSW1nKTtcclxuXHJcblx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoIHRydWUgKSApO1xyXG5cdFx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZSA9IGFuaW1hdGVkSW1nID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdab29tQW5pbWF0aW9uRW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0XHR9LCAxNik7IC8vIGF2b2lkIGJsaW5rIHdoZW4gc3dpdGNoaW5nIGltYWdlcyBcclxuXHJcblx0XHRcdFx0XHRcdH0sIGR1cmF0aW9uKTsgLy8gdGhpcyB0aW1lb3V0IGVxdWFscyBhbmltYXRpb24gZHVyYXRpb25cclxuXHJcblx0XHRcdFx0XHR9LCAxNik7IC8vIGJ5IGFkZGluZyB0aGlzIHRpbWVvdXQgd2UgYXZvaWQgc2hvcnQgZ2xpdGNoIGF0IHRoZSBiZWdpbm5pbmcgb2YgYW5pbWF0aW9uXHJcblxyXG5cclxuXHRcdFx0XHRcdC8vIExvdHMgb2YgdGltZW91dHMuLi5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRfbWZwT24oQkVGT1JFX0NMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZihtZnAuX2FsbG93Wm9vbSgpKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KG9wZW5UaW1lb3V0KTtcclxuXHJcblx0XHRcdFx0XHRtZnAuc3QucmVtb3ZhbERlbGF5ID0gZHVyYXRpb247XHJcblxyXG5cdFx0XHRcdFx0aWYoIWltYWdlKSB7XHJcblx0XHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XHJcblx0XHRcdFx0XHRcdGlmKCFpbWFnZSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZyA9IGdldEVsVG9BbmltYXRlKGltYWdlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KHRydWUpICk7XHJcblx0XHRcdFx0XHRtZnAud3JhcC5hcHBlbmQoYW5pbWF0ZWRJbWcpO1xyXG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcclxuXHRcdFx0XHRcdH0sIDE2KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xyXG5cdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XHJcblx0XHRcdFx0XHRpZihhbmltYXRlZEltZykge1xyXG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGltYWdlID0gbnVsbDtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hbGxvd1pvb206IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLnR5cGUgPT09ICdpbWFnZSc7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9nZXRJdGVtVG9ab29tOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYobWZwLmN1cnJJdGVtLmhhc1NpemUpIHtcclxuXHRcdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLmltZztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gR2V0IGVsZW1lbnQgcG9zdGlvbiByZWxhdGl2ZSB0byB2aWV3cG9ydFxyXG5cdFx0X2dldE9mZnNldDogZnVuY3Rpb24oaXNMYXJnZSkge1xyXG5cdFx0XHR2YXIgZWw7XHJcblx0XHRcdGlmKGlzTGFyZ2UpIHtcclxuXHRcdFx0XHRlbCA9IG1mcC5jdXJySXRlbS5pbWc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZWwgPSBtZnAuc3Quem9vbS5vcGVuZXIobWZwLmN1cnJJdGVtLmVsIHx8IG1mcC5jdXJySXRlbSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBvZmZzZXQgPSBlbC5vZmZzZXQoKTtcclxuXHRcdFx0dmFyIHBhZGRpbmdUb3AgPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctdG9wJyksMTApO1xyXG5cdFx0XHR2YXIgcGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KGVsLmNzcygncGFkZGluZy1ib3R0b20nKSwxMCk7XHJcblx0XHRcdG9mZnNldC50b3AgLT0gKCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgLSBwYWRkaW5nVG9wICk7XHJcblxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0XHJcblx0XHRcdEFuaW1hdGluZyBsZWZ0ICsgdG9wICsgd2lkdGgvaGVpZ2h0IGxvb2tzIGdsaXRjaHkgaW4gRmlyZWZveCwgYnV0IHBlcmZlY3QgaW4gQ2hyb21lLiBBbmQgdmljZS12ZXJzYS5cclxuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHR2YXIgb2JqID0ge1xyXG5cdFx0XHRcdHdpZHRoOiBlbC53aWR0aCgpLFxyXG5cdFx0XHRcdC8vIGZpeCBaZXB0byBoZWlnaHQrcGFkZGluZyBpc3N1ZVxyXG5cdFx0XHRcdGhlaWdodDogKF9pc0pRID8gZWwuaW5uZXJIZWlnaHQoKSA6IGVsWzBdLm9mZnNldEhlaWdodCkgLSBwYWRkaW5nQm90dG9tIC0gcGFkZGluZ1RvcFxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gSSBoYXRlIHRvIGRvIHRoaXMsIGJ1dCB0aGVyZSBpcyBubyBhbm90aGVyIG9wdGlvblxyXG5cdFx0XHRpZiggZ2V0SGFzTW96VHJhbnNmb3JtKCkgKSB7XHJcblx0XHRcdFx0b2JqWyctbW96LXRyYW5zZm9ybSddID0gb2JqWyd0cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGUoJyArIG9mZnNldC5sZWZ0ICsgJ3B4LCcgKyBvZmZzZXQudG9wICsgJ3B4KSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b2JqLmxlZnQgPSBvZmZzZXQubGVmdDtcclxuXHRcdFx0XHRvYmoudG9wID0gb2Zmc2V0LnRvcDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vKj4+em9vbSovXHJcblxyXG4vKj4+aWZyYW1lKi9cclxuXHJcbnZhciBJRlJBTUVfTlMgPSAnaWZyYW1lJyxcclxuXHRfZW1wdHlQYWdlID0gJy8vYWJvdXQ6YmxhbmsnLFxyXG5cdFxyXG5cdF9maXhJZnJhbWVCdWdzID0gZnVuY3Rpb24oaXNTaG93aW5nKSB7XHJcblx0XHRpZihtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10pIHtcclxuXHRcdFx0dmFyIGVsID0gbWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdLmZpbmQoJ2lmcmFtZScpO1xyXG5cdFx0XHRpZihlbC5sZW5ndGgpIHsgXHJcblx0XHRcdFx0Ly8gcmVzZXQgc3JjIGFmdGVyIHRoZSBwb3B1cCBpcyBjbG9zZWQgdG8gYXZvaWQgXCJ2aWRlbyBrZWVwcyBwbGF5aW5nIGFmdGVyIHBvcHVwIGlzIGNsb3NlZFwiIGJ1Z1xyXG5cdFx0XHRcdGlmKCFpc1Nob3dpbmcpIHtcclxuXHRcdFx0XHRcdGVsWzBdLnNyYyA9IF9lbXB0eVBhZ2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBJRTggYmxhY2sgc2NyZWVuIGJ1ZyBmaXhcclxuXHRcdFx0XHRpZihtZnAuaXNJRTgpIHtcclxuXHRcdFx0XHRcdGVsLmNzcygnZGlzcGxheScsIGlzU2hvd2luZyA/ICdibG9jaycgOiAnbm9uZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSUZSQU1FX05TLCB7XHJcblxyXG5cdG9wdGlvbnM6IHtcclxuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPicrXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXHJcblx0XHRcdFx0XHQnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBzcmM9XCIvL2Fib3V0OmJsYW5rXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicrXHJcblx0XHRcdFx0JzwvZGl2PicsXHJcblxyXG5cdFx0c3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXHJcblxyXG5cdFx0Ly8gd2UgZG9uJ3QgY2FyZSBhbmQgc3VwcG9ydCBvbmx5IG9uZSBkZWZhdWx0IHR5cGUgb2YgVVJMIGJ5IGRlZmF1bHRcclxuXHRcdHBhdHRlcm5zOiB7XHJcblx0XHRcdHlvdXR1YmU6IHtcclxuXHRcdFx0XHRpbmRleDogJ3lvdXR1YmUuY29tJywgXHJcblx0XHRcdFx0aWQ6ICd2PScsIFxyXG5cdFx0XHRcdHNyYzogJy8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyVpZCU/YXV0b3BsYXk9MSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dmltZW86IHtcclxuXHRcdFx0XHRpbmRleDogJ3ZpbWVvLmNvbS8nLFxyXG5cdFx0XHRcdGlkOiAnLycsXHJcblx0XHRcdFx0c3JjOiAnLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyVpZCU/YXV0b3BsYXk9MSdcclxuXHRcdFx0fSxcclxuXHRcdFx0Z21hcHM6IHtcclxuXHRcdFx0XHRpbmRleDogJy8vbWFwcy5nb29nbGUuJyxcclxuXHRcdFx0XHRzcmM6ICclaWQlJm91dHB1dD1lbWJlZCdcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHByb3RvOiB7XHJcblx0XHRpbml0SWZyYW1lOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0bWZwLnR5cGVzLnB1c2goSUZSQU1FX05TKTtcclxuXHJcblx0XHRcdF9tZnBPbignQmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24oZSwgcHJldlR5cGUsIG5ld1R5cGUpIHtcclxuXHRcdFx0XHRpZihwcmV2VHlwZSAhPT0gbmV3VHlwZSkge1xyXG5cdFx0XHRcdFx0aWYocHJldlR5cGUgPT09IElGUkFNRV9OUykge1xyXG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncygpOyAvLyBpZnJhbWUgaWYgcmVtb3ZlZFxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG5ld1R5cGUgPT09IElGUkFNRV9OUykge1xyXG5cdFx0XHRcdFx0XHRfZml4SWZyYW1lQnVncyh0cnVlKTsgLy8gaWZyYW1lIGlzIHNob3dpbmdcclxuXHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0fS8vIGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaWZyYW1lIHNvdXJjZSBpcyBzd2l0Y2hlZCwgZG9uJ3QgZG8gYW55dGhpbmdcclxuXHRcdFx0XHQvL31cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQgKyAnLicgKyBJRlJBTUVfTlMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRJZnJhbWU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XHJcblx0XHRcdHZhciBlbWJlZFNyYyA9IGl0ZW0uc3JjO1xyXG5cdFx0XHR2YXIgaWZyYW1lU3QgPSBtZnAuc3QuaWZyYW1lO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHQkLmVhY2goaWZyYW1lU3QucGF0dGVybnMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKGVtYmVkU3JjLmluZGV4T2YoIHRoaXMuaW5kZXggKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRpZih0aGlzLmlkKSB7XHJcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiB0aGlzLmlkID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gZW1iZWRTcmMuc3Vic3RyKGVtYmVkU3JjLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLCBlbWJlZFNyYy5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5pZC5jYWxsKCB0aGlzLCBlbWJlZFNyYyApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbWJlZFNyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJyVpZCUnLCBlbWJlZFNyYyApO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGRhdGFPYmogPSB7fTtcclxuXHRcdFx0aWYoaWZyYW1lU3Quc3JjQWN0aW9uKSB7XHJcblx0XHRcdFx0ZGF0YU9ialtpZnJhbWVTdC5zcmNBY3Rpb25dID0gZW1iZWRTcmM7XHJcblx0XHRcdH1cclxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwgZGF0YU9iaiwgaXRlbSk7XHJcblxyXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdyZWFkeScpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8qPj5pZnJhbWUqL1xyXG5cclxuLyo+PmdhbGxlcnkqL1xyXG4vKipcclxuICogR2V0IGxvb3BlZCBpbmRleCBkZXBlbmRpbmcgb24gbnVtYmVyIG9mIHNsaWRlc1xyXG4gKi9cclxudmFyIF9nZXRMb29wZWRJZCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHR2YXIgbnVtU2xpZGVzID0gbWZwLml0ZW1zLmxlbmd0aDtcclxuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xyXG5cdFx0XHRyZXR1cm4gaW5kZXggLSBudW1TbGlkZXM7XHJcblx0XHR9IGVsc2UgIGlmKGluZGV4IDwgMCkge1xyXG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fSxcclxuXHRfcmVwbGFjZUN1cnJUb3RhbCA9IGZ1bmN0aW9uKHRleHQsIGN1cnIsIHRvdGFsKSB7XHJcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8lY3VyciUvZ2ksIGN1cnIgKyAxKS5yZXBsYWNlKC8ldG90YWwlL2dpLCB0b3RhbCk7XHJcblx0fTtcclxuXHJcbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnZ2FsbGVyeScsIHtcclxuXHJcblx0b3B0aW9uczoge1xyXG5cdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRhcnJvd01hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWFycm93IG1mcC1hcnJvdy0lZGlyJVwiPjwvYnV0dG9uPicsXHJcblx0XHRwcmVsb2FkOiBbMCwyXSxcclxuXHRcdG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHJcblx0XHR0UHJldjogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLFxyXG5cdFx0dE5leHQ6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcclxuXHRcdHRDb3VudGVyOiAnJWN1cnIlIG9mICV0b3RhbCUnXHJcblx0fSxcclxuXHJcblx0cHJvdG86IHtcclxuXHRcdGluaXRHYWxsZXJ5OiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBnU3QgPSBtZnAuc3QuZ2FsbGVyeSxcclxuXHRcdFx0XHRucyA9ICcubWZwLWdhbGxlcnknLFxyXG5cdFx0XHRcdHN1cHBvcnRzRmFzdENsaWNrID0gQm9vbGVhbigkLmZuLm1mcEZhc3RDbGljayk7XHJcblxyXG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gdHJ1ZTsgLy8gdHJ1ZSAtIG5leHQsIGZhbHNlIC0gcHJldlxyXG5cdFx0XHRcclxuXHRcdFx0aWYoIWdTdCB8fCAhZ1N0LmVuYWJsZWQgKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtZ2FsbGVyeSc7XHJcblxyXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGlmKGdTdC5uYXZpZ2F0ZUJ5SW1nQ2xpY2spIHtcclxuXHRcdFx0XHRcdG1mcC53cmFwLm9uKCdjbGljaycrbnMsICcubWZwLWltZycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdG1mcC5uZXh0KCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF9kb2N1bWVudC5vbigna2V5ZG93bicrbnMsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRfbWZwT24oJ1VwZGF0ZVN0YXR1cycrbnMsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHRcdFx0XHRpZihkYXRhLnRleHQpIHtcclxuXHRcdFx0XHRcdGRhdGEudGV4dCA9IF9yZXBsYWNlQ3VyclRvdGFsKGRhdGEudGV4dCwgbWZwLmN1cnJJdGVtLmluZGV4LCBtZnAuaXRlbXMubGVuZ3RoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCtucywgZnVuY3Rpb24oZSwgZWxlbWVudCwgdmFsdWVzLCBpdGVtKSB7XHJcblx0XHRcdFx0dmFyIGwgPSBtZnAuaXRlbXMubGVuZ3RoO1xyXG5cdFx0XHRcdHZhbHVlcy5jb3VudGVyID0gbCA+IDEgPyBfcmVwbGFjZUN1cnJUb3RhbChnU3QudENvdW50ZXIsIGl0ZW0uaW5kZXgsIGwpIDogJyc7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJyArIG5zLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSAmJiBnU3QuYXJyb3dzICYmICFtZnAuYXJyb3dMZWZ0KSB7XHJcblx0XHRcdFx0XHR2YXIgbWFya3VwID0gZ1N0LmFycm93TWFya3VwLFxyXG5cdFx0XHRcdFx0XHRhcnJvd0xlZnQgPSBtZnAuYXJyb3dMZWZ0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksICdsZWZ0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSxcdFx0XHRcclxuXHRcdFx0XHRcdFx0YXJyb3dSaWdodCA9IG1mcC5hcnJvd1JpZ2h0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50TmV4dCkucmVwbGFjZSgvJWRpciUvZ2ksICdyaWdodCcpICkuYWRkQ2xhc3MoUFJFVkVOVF9DTE9TRV9DTEFTUyk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGVOYW1lID0gc3VwcG9ydHNGYXN0Q2xpY2sgPyAnbWZwRmFzdENsaWNrJyA6ICdjbGljayc7XHJcblx0XHRcdFx0XHRhcnJvd0xlZnRbZU5hbWVdKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRtZnAucHJldigpO1xyXG5cdFx0XHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdFx0XHRhcnJvd1JpZ2h0W2VOYW1lXShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcclxuXHRcdFx0XHRcdH0pO1x0XHJcblxyXG5cdFx0XHRcdFx0Ly8gUG9seWZpbGwgZm9yIDpiZWZvcmUgYW5kIDphZnRlciAoYWRkcyBlbGVtZW50cyB3aXRoIGNsYXNzZXMgbWZwLWEgYW5kIG1mcC1iKVxyXG5cdFx0XHRcdFx0aWYobWZwLmlzSUU3KSB7XHJcblx0XHRcdFx0XHRcdF9nZXRFbCgnYicsIGFycm93TGVmdFswXSwgZmFsc2UsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRfZ2V0RWwoJ2EnLCBhcnJvd0xlZnRbMF0sIGZhbHNlLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0X2dldEVsKCdiJywgYXJyb3dSaWdodFswXSwgZmFsc2UsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRfZ2V0RWwoJ2EnLCBhcnJvd1JpZ2h0WzBdLCBmYWxzZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0bWZwLmNvbnRhaW5lci5hcHBlbmQoYXJyb3dMZWZ0LmFkZChhcnJvd1JpZ2h0KSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdF9tZnBPbihDSEFOR0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKG1mcC5fcHJlbG9hZFRpbWVvdXQpIGNsZWFyVGltZW91dChtZnAuX3ByZWxvYWRUaW1lb3V0KTtcclxuXHJcblx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRtZnAucHJlbG9hZE5lYXJieUltYWdlcygpO1xyXG5cdFx0XHRcdFx0bWZwLl9wcmVsb2FkVGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0fSwgMTYpO1x0XHRcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfZG9jdW1lbnQub2ZmKG5zKTtcclxuXHRcdFx0XHRtZnAud3JhcC5vZmYoJ2NsaWNrJytucyk7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmKG1mcC5hcnJvd0xlZnQgJiYgc3VwcG9ydHNGYXN0Q2xpY2spIHtcclxuXHRcdFx0XHRcdG1mcC5hcnJvd0xlZnQuYWRkKG1mcC5hcnJvd1JpZ2h0KS5kZXN0cm95TWZwRmFzdENsaWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1mcC5hcnJvd1JpZ2h0ID0gbWZwLmFycm93TGVmdCA9IG51bGw7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sIFxyXG5cdFx0bmV4dDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlO1xyXG5cdFx0XHRtZnAuaW5kZXggPSBfZ2V0TG9vcGVkSWQobWZwLmluZGV4ICsgMSk7XHJcblx0XHRcdG1mcC51cGRhdGVJdGVtSFRNTCgpO1xyXG5cdFx0fSxcclxuXHRcdHByZXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRtZnAuZGlyZWN0aW9uID0gZmFsc2U7XHJcblx0XHRcdG1mcC5pbmRleCA9IF9nZXRMb29wZWRJZChtZnAuaW5kZXggLSAxKTtcclxuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XHJcblx0XHR9LFxyXG5cdFx0Z29UbzogZnVuY3Rpb24obmV3SW5kZXgpIHtcclxuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IChuZXdJbmRleCA+PSBtZnAuaW5kZXgpO1xyXG5cdFx0XHRtZnAuaW5kZXggPSBuZXdJbmRleDtcclxuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XHJcblx0XHR9LFxyXG5cdFx0cHJlbG9hZE5lYXJieUltYWdlczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBwID0gbWZwLnN0LmdhbGxlcnkucHJlbG9hZCxcclxuXHRcdFx0XHRwcmVsb2FkQmVmb3JlID0gTWF0aC5taW4ocFswXSwgbWZwLml0ZW1zLmxlbmd0aCksXHJcblx0XHRcdFx0cHJlbG9hZEFmdGVyID0gTWF0aC5taW4ocFsxXSwgbWZwLml0ZW1zLmxlbmd0aCksXHJcblx0XHRcdFx0aTtcclxuXHJcblx0XHRcdGZvcihpID0gMTsgaSA8PSAobWZwLmRpcmVjdGlvbiA/IHByZWxvYWRBZnRlciA6IHByZWxvYWRCZWZvcmUpOyBpKyspIHtcclxuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleCtpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoaSA9IDE7IGkgPD0gKG1mcC5kaXJlY3Rpb24gPyBwcmVsb2FkQmVmb3JlIDogcHJlbG9hZEFmdGVyKTsgaSsrKSB7XHJcblx0XHRcdFx0bWZwLl9wcmVsb2FkSXRlbShtZnAuaW5kZXgtaSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRfcHJlbG9hZEl0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcclxuXHJcblx0XHRcdGlmKG1mcC5pdGVtc1tpbmRleF0ucHJlbG9hZGVkKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF07XHJcblx0XHRcdGlmKCFpdGVtLnBhcnNlZCkge1xyXG5cdFx0XHRcdGl0ZW0gPSBtZnAucGFyc2VFbCggaW5kZXggKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0X21mcFRyaWdnZXIoJ0xhenlMb2FkJywgaXRlbSk7XHJcblxyXG5cdFx0XHRpZihpdGVtLnR5cGUgPT09ICdpbWFnZScpIHtcclxuXHRcdFx0XHRpdGVtLmltZyA9ICQoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbignbG9hZC5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XHJcblx0XHRcdFx0fSkub24oJ2Vycm9yLm1mcGxvYWRlcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdMYXp5TG9hZEVycm9yJywgaXRlbSk7XHJcblx0XHRcdFx0fSkuYXR0cignc3JjJywgaXRlbS5zcmMpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vKlxyXG5Ub3VjaCBTdXBwb3J0IHRoYXQgbWlnaHQgYmUgaW1wbGVtZW50ZWQgc29tZSBkYXlcclxuXHJcbmFkZFN3aXBlR2VzdHVyZTogZnVuY3Rpb24oKSB7XHJcblx0dmFyIHN0YXJ0WCxcclxuXHRcdG1vdmVkLFxyXG5cdFx0bXVsdGlwbGVUb3VjaGVzO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0dmFyIG5hbWVzcGFjZSA9ICcubWZwJyxcclxuXHRcdGFkZEV2ZW50TmFtZXMgPSBmdW5jdGlvbihwcmVmLCBkb3duLCBtb3ZlLCB1cCwgY2FuY2VsKSB7XHJcblx0XHRcdG1mcC5fdFN0YXJ0ID0gcHJlZiArIGRvd24gKyBuYW1lc3BhY2U7XHJcblx0XHRcdG1mcC5fdE1vdmUgPSBwcmVmICsgbW92ZSArIG5hbWVzcGFjZTtcclxuXHRcdFx0bWZwLl90RW5kID0gcHJlZiArIHVwICsgbmFtZXNwYWNlO1xyXG5cdFx0XHRtZnAuX3RDYW5jZWwgPSBwcmVmICsgY2FuY2VsICsgbmFtZXNwYWNlO1xyXG5cdFx0fTtcclxuXHJcblx0aWYod2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkKSB7XHJcblx0XHRhZGRFdmVudE5hbWVzKCdNU1BvaW50ZXInLCAnRG93bicsICdNb3ZlJywgJ1VwJywgJ0NhbmNlbCcpO1xyXG5cdH0gZWxzZSBpZignb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcclxuXHRcdGFkZEV2ZW50TmFtZXMoJ3RvdWNoJywgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJywgJ2NhbmNlbCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdF93aW5kb3cub24obWZwLl90U3RhcnQsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdHZhciBvRSA9IGUub3JpZ2luYWxFdmVudDtcclxuXHRcdG11bHRpcGxlVG91Y2hlcyA9IG1vdmVkID0gZmFsc2U7XHJcblx0XHRzdGFydFggPSBvRS5wYWdlWCB8fCBvRS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWDtcclxuXHR9KS5vbihtZnAuX3RNb3ZlLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZihlLm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdG11bHRpcGxlVG91Y2hlcyA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRtb3ZlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fSkub24obWZwLl90RW5kICsgJyAnICsgbWZwLl90Q2FuY2VsLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZihtb3ZlZCAmJiAhbXVsdGlwbGVUb3VjaGVzKSB7XHJcblx0XHRcdHZhciBvRSA9IGUub3JpZ2luYWxFdmVudCxcclxuXHRcdFx0XHRkaWZmID0gc3RhcnRYIC0gKG9FLnBhZ2VYIHx8IG9FLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYKTtcclxuXHJcblx0XHRcdGlmKGRpZmYgPiAyMCkge1xyXG5cdFx0XHRcdG1mcC5uZXh0KCk7XHJcblx0XHRcdH0gZWxzZSBpZihkaWZmIDwgLTIwKSB7XHJcblx0XHRcdFx0bWZwLnByZXYoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59LFxyXG4qL1xyXG5cclxuXHJcbi8qPj5nYWxsZXJ5Ki9cclxuXHJcbi8qPj5yZXRpbmEqL1xyXG5cclxudmFyIFJFVElOQV9OUyA9ICdyZXRpbmEnO1xyXG5cclxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFJFVElOQV9OUywge1xyXG5cdG9wdGlvbnM6IHtcclxuXHRcdHJlcGxhY2VTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW0uc3JjLnJlcGxhY2UoL1xcLlxcdyskLywgZnVuY3Rpb24obSkgeyByZXR1cm4gJ0AyeCcgKyBtOyB9KTtcclxuXHRcdH0sXHJcblx0XHRyYXRpbzogMSAvLyBGdW5jdGlvbiBvciBudW1iZXIuICBTZXQgdG8gMSB0byBkaXNhYmxlLlxyXG5cdH0sXHJcblx0cHJvdG86IHtcclxuXHRcdGluaXRSZXRpbmE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0ID0gbWZwLnN0LnJldGluYSxcclxuXHRcdFx0XHRcdHJhdGlvID0gc3QucmF0aW87XHJcblxyXG5cdFx0XHRcdHJhdGlvID0gIWlzTmFOKHJhdGlvKSA/IHJhdGlvIDogcmF0aW8oKTtcclxuXHJcblx0XHRcdFx0aWYocmF0aW8gPiAxKSB7XHJcblx0XHRcdFx0XHRfbWZwT24oJ0ltYWdlSGFzU2l6ZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0aXRlbS5pbWcuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHQnbWF4LXdpZHRoJzogaXRlbS5pbWdbMF0ubmF0dXJhbFdpZHRoIC8gcmF0aW8sXHJcblx0XHRcdFx0XHRcdFx0J3dpZHRoJzogJzEwMCUnXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRfbWZwT24oJ0VsZW1lbnRQYXJzZScgKyAnLicgKyBSRVRJTkFfTlMsIGZ1bmN0aW9uKGUsIGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0aXRlbS5zcmMgPSBzdC5yZXBsYWNlU3JjKGl0ZW0sIHJhdGlvKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuLyo+PnJldGluYSovXHJcblxyXG4vKj4+ZmFzdGNsaWNrKi9cclxuLyoqXHJcbiAqIEZhc3RDbGljayBldmVudCBpbXBsZW1lbnRhdGlvbi4gKHJlbW92ZXMgMzAwbXMgZGVsYXkgb24gdG91Y2ggZGV2aWNlcylcclxuICogQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbW9iaWxlL2FydGljbGVzL2Zhc3RfYnV0dG9uc1xyXG4gKlxyXG4gKiBZb3UgbWF5IHVzZSBpdCBvdXRzaWRlIHRoZSBNYWduaWZpYyBQb3B1cCBieSBjYWxsaW5nIGp1c3Q6XHJcbiAqXHJcbiAqICQoJy55b3VyLWVsJykubWZwRmFzdENsaWNrKGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQhJyk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBUbyB1bmJpbmQ6XHJcbiAqICQoJy55b3VyLWVsJykuZGVzdHJveU1mcEZhc3RDbGljaygpO1xyXG4gKiBcclxuICogXHJcbiAqIE5vdGUgdGhhdCBpdCdzIGEgdmVyeSBiYXNpYyBhbmQgc2ltcGxlIGltcGxlbWVudGF0aW9uLCBpdCBibG9ja3MgZ2hvc3QgY2xpY2sgb24gdGhlIHNhbWUgZWxlbWVudCB3aGVyZSBpdCB3YXMgYm91bmQuXHJcbiAqIElmIHlvdSBuZWVkIHNvbWV0aGluZyBtb3JlIGFkdmFuY2VkLCB1c2UgcGx1Z2luIGJ5IEZUIExhYnMgaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2tcclxuICogXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBnaG9zdENsaWNrRGVsYXkgPSAxMDAwLFxyXG5cdFx0c3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyxcclxuXHRcdHVuYmluZFRvdWNoTW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfd2luZG93Lm9mZigndG91Y2htb3ZlJytucysnIHRvdWNoZW5kJytucyk7XHJcblx0XHR9LFxyXG5cdFx0ZU5hbWUgPSAnbWZwRmFzdENsaWNrJyxcclxuXHRcdG5zID0gJy4nK2VOYW1lO1xyXG5cclxuXHJcblx0Ly8gQXMgWmVwdG8uanMgZG9lc24ndCBoYXZlIGFuIGVhc3kgd2F5IHRvIGFkZCBjdXN0b20gZXZlbnRzIChsaWtlIGpRdWVyeSksIHNvIHdlIGltcGxlbWVudCBpdCBpbiB0aGlzIHdheVxyXG5cdCQuZm4ubWZwRmFzdENsaWNrID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHJcblx0XHRyZXR1cm4gJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIGVsZW0gPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGxvY2s7XHJcblxyXG5cdFx0XHRpZiggc3VwcG9ydHNUb3VjaCApIHtcclxuXHJcblx0XHRcdFx0dmFyIHRpbWVvdXQsXHJcblx0XHRcdFx0XHRzdGFydFgsXHJcblx0XHRcdFx0XHRzdGFydFksXHJcblx0XHRcdFx0XHRwb2ludGVyTW92ZWQsXHJcblx0XHRcdFx0XHRwb2ludCxcclxuXHRcdFx0XHRcdG51bVBvaW50ZXJzO1xyXG5cclxuXHRcdFx0XHRlbGVtLm9uKCd0b3VjaHN0YXJ0JyArIG5zLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRwb2ludGVyTW92ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdG51bVBvaW50ZXJzID0gMTtcclxuXHJcblx0XHRcdFx0XHRwb2ludCA9IGUub3JpZ2luYWxFdmVudCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZS50b3VjaGVzWzBdO1xyXG5cdFx0XHRcdFx0c3RhcnRYID0gcG9pbnQuY2xpZW50WDtcclxuXHRcdFx0XHRcdHN0YXJ0WSA9IHBvaW50LmNsaWVudFk7XHJcblxyXG5cdFx0XHRcdFx0X3dpbmRvdy5vbigndG91Y2htb3ZlJytucywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRwb2ludCA9IGUub3JpZ2luYWxFdmVudCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzIDogZS50b3VjaGVzO1xyXG5cdFx0XHRcdFx0XHRudW1Qb2ludGVycyA9IHBvaW50Lmxlbmd0aDtcclxuXHRcdFx0XHRcdFx0cG9pbnQgPSBwb2ludFswXTtcclxuXHRcdFx0XHRcdFx0aWYgKE1hdGguYWJzKHBvaW50LmNsaWVudFggLSBzdGFydFgpID4gMTAgfHxcclxuXHRcdFx0XHRcdFx0XHRNYXRoLmFicyhwb2ludC5jbGllbnRZIC0gc3RhcnRZKSA+IDEwKSB7XHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlck1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR1bmJpbmRUb3VjaE1vdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSkub24oJ3RvdWNoZW5kJytucywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHR1bmJpbmRUb3VjaE1vdmUoKTtcclxuXHRcdFx0XHRcdFx0aWYocG9pbnRlck1vdmVkIHx8IG51bVBvaW50ZXJzID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRsb2NrID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHRcdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxvY2sgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSwgZ2hvc3RDbGlja0RlbGF5KTtcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxlbS5vbignY2xpY2snICsgbnMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmKCFsb2NrKSB7XHJcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkLmZuLmRlc3Ryb3lNZnBGYXN0Q2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykub2ZmKCd0b3VjaHN0YXJ0JyArIG5zICsgJyBjbGljaycgKyBucyk7XHJcblx0XHRpZihzdXBwb3J0c1RvdWNoKSBfd2luZG93Lm9mZigndG91Y2htb3ZlJytucysnIHRvdWNoZW5kJytucyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbi8qPj5mYXN0Y2xpY2sqL1xyXG4gX2NoZWNrSW5zdGFuY2UoKTsgfSkpOyIsIi8qXHJcbioganF1ZXJ5LW1hdGNoLWhlaWdodCAwLjcuMCBieSBAbGlhYnJ1XHJcbiogaHR0cDovL2JybS5pby9qcXVlcnktbWF0Y2gtaGVpZ2h0L1xyXG4qIExpY2Vuc2UgTUlUXHJcbiovXHJcbiFmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSx0KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJqcXVlcnlcIikpOnQoalF1ZXJ5KX0oZnVuY3Rpb24odCl7dmFyIGU9LTEsbz0tMSxpPWZ1bmN0aW9uKHQpe3JldHVybiBwYXJzZUZsb2F0KHQpfHwwfSxhPWZ1bmN0aW9uKGUpe3ZhciBvPTEsYT10KGUpLG49bnVsbCxyPVtdO3JldHVybiBhLmVhY2goZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLGE9ZS5vZmZzZXQoKS50b3AtaShlLmNzcyhcIm1hcmdpbi10b3BcIikpLHM9ci5sZW5ndGg+MD9yW3IubGVuZ3RoLTFdOm51bGw7bnVsbD09PXM/ci5wdXNoKGUpOk1hdGguZmxvb3IoTWF0aC5hYnMobi1hKSk8PW8/cltyLmxlbmd0aC0xXT1zLmFkZChlKTpyLnB1c2goZSksbj1hfSkscn0sbj1mdW5jdGlvbihlKXt2YXIgbz17XHJcbmJ5Um93OiEwLHByb3BlcnR5OlwiaGVpZ2h0XCIsdGFyZ2V0Om51bGwscmVtb3ZlOiExfTtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT90LmV4dGVuZChvLGUpOihcImJvb2xlYW5cIj09dHlwZW9mIGU/by5ieVJvdz1lOlwicmVtb3ZlXCI9PT1lJiYoby5yZW1vdmU9ITApLG8pfSxyPXQuZm4ubWF0Y2hIZWlnaHQ9ZnVuY3Rpb24oZSl7dmFyIG89bihlKTtpZihvLnJlbW92ZSl7dmFyIGk9dGhpcztyZXR1cm4gdGhpcy5jc3Moby5wcm9wZXJ0eSxcIlwiKSx0LmVhY2goci5fZ3JvdXBzLGZ1bmN0aW9uKHQsZSl7ZS5lbGVtZW50cz1lLmVsZW1lbnRzLm5vdChpKX0pLHRoaXN9cmV0dXJuIHRoaXMubGVuZ3RoPD0xJiYhby50YXJnZXQ/dGhpczooci5fZ3JvdXBzLnB1c2goe2VsZW1lbnRzOnRoaXMsb3B0aW9uczpvfSksci5fYXBwbHkodGhpcyxvKSx0aGlzKX07ci52ZXJzaW9uPVwiMC43LjBcIixyLl9ncm91cHM9W10sci5fdGhyb3R0bGU9ODAsci5fbWFpbnRhaW5TY3JvbGw9ITEsci5fYmVmb3JlVXBkYXRlPW51bGwsXHJcbnIuX2FmdGVyVXBkYXRlPW51bGwsci5fcm93cz1hLHIuX3BhcnNlPWksci5fcGFyc2VPcHRpb25zPW4sci5fYXBwbHk9ZnVuY3Rpb24oZSxvKXt2YXIgcz1uKG8pLGg9dChlKSxsPVtoXSxjPXQod2luZG93KS5zY3JvbGxUb3AoKSxwPXQoXCJodG1sXCIpLm91dGVySGVpZ2h0KCEwKSxkPWgucGFyZW50cygpLmZpbHRlcihcIjpoaWRkZW5cIik7cmV0dXJuIGQuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7ZS5kYXRhKFwic3R5bGUtY2FjaGVcIixlLmF0dHIoXCJzdHlsZVwiKSl9KSxkLmNzcyhcImRpc3BsYXlcIixcImJsb2NrXCIpLHMuYnlSb3cmJiFzLnRhcmdldCYmKGguZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyksbz1lLmNzcyhcImRpc3BsYXlcIik7XCJpbmxpbmUtYmxvY2tcIiE9PW8mJlwiZmxleFwiIT09byYmXCJpbmxpbmUtZmxleFwiIT09byYmKG89XCJibG9ja1wiKSxlLmRhdGEoXCJzdHlsZS1jYWNoZVwiLGUuYXR0cihcInN0eWxlXCIpKSxlLmNzcyh7ZGlzcGxheTpvLFwicGFkZGluZy10b3BcIjpcIjBcIixcclxuXCJwYWRkaW5nLWJvdHRvbVwiOlwiMFwiLFwibWFyZ2luLXRvcFwiOlwiMFwiLFwibWFyZ2luLWJvdHRvbVwiOlwiMFwiLFwiYm9yZGVyLXRvcC13aWR0aFwiOlwiMFwiLFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiOlwiMFwiLGhlaWdodDpcIjEwMHB4XCIsb3ZlcmZsb3c6XCJoaWRkZW5cIn0pfSksbD1hKGgpLGguZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7ZS5hdHRyKFwic3R5bGVcIixlLmRhdGEoXCJzdHlsZS1jYWNoZVwiKXx8XCJcIil9KSksdC5lYWNoKGwsZnVuY3Rpb24oZSxvKXt2YXIgYT10KG8pLG49MDtpZihzLnRhcmdldCluPXMudGFyZ2V0Lm91dGVySGVpZ2h0KCExKTtlbHNle2lmKHMuYnlSb3cmJmEubGVuZ3RoPD0xKXJldHVybiB2b2lkIGEuY3NzKHMucHJvcGVydHksXCJcIik7YS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKSxvPWUuYXR0cihcInN0eWxlXCIpLGk9ZS5jc3MoXCJkaXNwbGF5XCIpO1wiaW5saW5lLWJsb2NrXCIhPT1pJiZcImZsZXhcIiE9PWkmJlwiaW5saW5lLWZsZXhcIiE9PWkmJihpPVwiYmxvY2tcIik7dmFyIGE9e1xyXG5kaXNwbGF5Oml9O2Fbcy5wcm9wZXJ0eV09XCJcIixlLmNzcyhhKSxlLm91dGVySGVpZ2h0KCExKT5uJiYobj1lLm91dGVySGVpZ2h0KCExKSksbz9lLmF0dHIoXCJzdHlsZVwiLG8pOmUuY3NzKFwiZGlzcGxheVwiLFwiXCIpfSl9YS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKSxvPTA7cy50YXJnZXQmJmUuaXMocy50YXJnZXQpfHwoXCJib3JkZXItYm94XCIhPT1lLmNzcyhcImJveC1zaXppbmdcIikmJihvKz1pKGUuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSkraShlLmNzcyhcImJvcmRlci1ib3R0b20td2lkdGhcIikpLG8rPWkoZS5jc3MoXCJwYWRkaW5nLXRvcFwiKSkraShlLmNzcyhcInBhZGRpbmctYm90dG9tXCIpKSksZS5jc3Mocy5wcm9wZXJ0eSxuLW8rXCJweFwiKSl9KX0pLGQuZWFjaChmdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7ZS5hdHRyKFwic3R5bGVcIixlLmRhdGEoXCJzdHlsZS1jYWNoZVwiKXx8bnVsbCl9KSxyLl9tYWludGFpblNjcm9sbCYmdCh3aW5kb3cpLnNjcm9sbFRvcChjL3AqdChcImh0bWxcIikub3V0ZXJIZWlnaHQoITApKSxcclxudGhpc30sci5fYXBwbHlEYXRhQXBpPWZ1bmN0aW9uKCl7dmFyIGU9e307dChcIltkYXRhLW1hdGNoLWhlaWdodF0sIFtkYXRhLW1oXVwiKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIG89dCh0aGlzKSxpPW8uYXR0cihcImRhdGEtbWhcIil8fG8uYXR0cihcImRhdGEtbWF0Y2gtaGVpZ2h0XCIpO2kgaW4gZT9lW2ldPWVbaV0uYWRkKG8pOmVbaV09b30pLHQuZWFjaChlLGZ1bmN0aW9uKCl7dGhpcy5tYXRjaEhlaWdodCghMCl9KX07dmFyIHM9ZnVuY3Rpb24oZSl7ci5fYmVmb3JlVXBkYXRlJiZyLl9iZWZvcmVVcGRhdGUoZSxyLl9ncm91cHMpLHQuZWFjaChyLl9ncm91cHMsZnVuY3Rpb24oKXtyLl9hcHBseSh0aGlzLmVsZW1lbnRzLHRoaXMub3B0aW9ucyl9KSxyLl9hZnRlclVwZGF0ZSYmci5fYWZ0ZXJVcGRhdGUoZSxyLl9ncm91cHMpfTtyLl91cGRhdGU9ZnVuY3Rpb24oaSxhKXtpZihhJiZcInJlc2l6ZVwiPT09YS50eXBlKXt2YXIgbj10KHdpbmRvdykud2lkdGgoKTtpZihuPT09ZSlyZXR1cm47ZT1uO1xyXG59aT8tMT09PW8mJihvPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzKGEpLG89LTF9LHIuX3Rocm90dGxlKSk6cyhhKX0sdChyLl9hcHBseURhdGFBcGkpLHQod2luZG93KS5iaW5kKFwibG9hZFwiLGZ1bmN0aW9uKHQpe3IuX3VwZGF0ZSghMSx0KX0pLHQod2luZG93KS5iaW5kKFwicmVzaXplIG9yaWVudGF0aW9uY2hhbmdlXCIsZnVuY3Rpb24odCl7ci5fdXBkYXRlKCEwLHQpfSl9KTsiXX0=
