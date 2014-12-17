/*! iFrame Resizer (iframeSizer.min.js ) - v2.0.0 - 2014-03-22
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeSizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!window.requestAnimationFrame;a+=1)window.requestAnimationFrame=window[b[a]+"RequestAnimationFrame"];window.requestAnimationFrame||(c(" RequestAnimationFrame not supported"),window.requestAnimationFrame=function(a){a()})}function c(a){k.log&&"console"in window&&console.log(i+"[Host page]"+a)}function d(a){function b(){function a(a){window.requestAnimationFrame(function(){m.iframe.style[a]=m[a]+"px",c(" IFrame ("+m.iframe.id+") "+a+" set to "+m[a]+"px")})}k.sizeHeight&&a("height"),k.sizeWidth&&a("width")}function d(a){c("iFrame "+a.id+" removed."),a.parentNode.removeChild(a)}function e(){var a=l.substr(j).split(":");return{iframe:document.getElementById(a[0]),height:a[1],width:a[2],type:a[3]}}function f(){"close"===m.type?d(m.iframe):b()}function g(){var b=a.origin,d=m.iframe.src.split("/").slice(0,3).join("/");if(k.checkOrigin&&(c(" Checking conection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpect message received from: "+b+" for "+m.iframe.id+". Message was: "+a.data);return!0}function h(){return i===""+l.substr(0,j)}var l=a.data,m={};h()&&(m=e(),g()&&(f(),k.resizedCallback(m)))}function e(){function b(a){return""===a&&(l.id=a="iFrameResizer"+h++,c(" Added missing iframe ID: "+a)),a}function d(){c(" IFrame scrolling "+(k.scrolling?"enabled":"disabled")+" for "+m),l.style.overflow=!1===k.scrolling?"hidden":"auto",l.scrolling=!1===k.scrolling?"no":"yes"}function e(){("number"==typeof k.bodyMargin||"0"===k.bodyMargin)&&(k.bodyMarginV1=k.bodyMargin,k.bodyMargin=""+k.bodyMargin+"px")}function f(){return m+":"+k.bodyMarginV1+":"+k.sizeWidth+":"+k.log+":"+k.interval+":"+k.enablePublicMethods+":"+k.autoResize+":"+k.bodyMargin}function g(a,b){c("["+a+"] Sending init msg to iframe ("+b+")"),l.contentWindow.postMessage(i+b,"*")}function j(b){a(l,"load",function(){g("iFrame.onload",b)}),g("init",b)}var l=this,m=b(l.id);d(),e(),j(f())}function f(){function a(a){if("IFRAME"!==a.tagName)throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");e.call(a)}function b(a){if(a=a||{},"object"!=typeof a)throw new TypeError("Options is not an object.");for(var b in l)l.hasOwnProperty(b)&&(k[b]=a.hasOwnProperty(b)?a[b]:l[b])}window.iFrameResize=function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function g(){jQuery.fn.iFrameResize=function(a){return k=$.extend({},l,a),this.filter("iframe").each(e).end()}}var h=0,i="[iFrameSizer]",j=i.length,k={},l={autoResize:!0,bodyMargin:null,bodyMarginV1:8,checkOrigin:!0,enablePublicMethods:!1,interval:32,log:!1,resizedCallback:function(){},scrolling:!1,sizeHeight:!0,sizeWidth:!1};b(),a(window,"message",d),f(),"jQuery"in window&&g()}();
//# sourceMappingURL=../src/iframeResizer.map