var Redirector={regExUA:/ip(hone|od)|android.*(mobile)|blackberry.*applewebkit|iemobile/i,location:window.location,mapProxyToOrigin:{"http://m.perryellis.com":"http://www.perryellis.com","https://m.perryellis.com":"https://www.perryellis.com","http://m.es-us.perryellis.com":"http://es-us.perryellis.com","https://m.es-us.perryellis.com":"https://es-us.perryellis.com","http://m.es-bo.perryellis.com":"http://es-us.perryellis.com","https://m.es-bo.perryellis.com":"https://es-us.perryellis.com","http://m.es-bz.perryellis.com":"http://es-us.perryellis.com","https://m.es-bz.perryellis.com":"https://es-us.perryellis.com","http://m.es-cl.perryellis.com":"http://es-us.perryellis.com","https://m.es-cl.perryellis.com":"https://es-us.perryellis.com","http://m.es-cr.perryellis.com":"http://es-us.perryellis.com","https://m.es-cr.perryellis.com":"https://es-us.perryellis.com","http://m.es-do.perryellis.com":"http://es-us.perryellis.com","https://m.es-do.perryellis.com":"https://es-us.perryellis.com","http://m.es-ec.perryellis.com":"http://es-us.perryellis.com","https://m.es-ec.perryellis.com":"https://es-us.perryellis.com","http://m.es-es.perryellis.com":"http://es-us.perryellis.com","https://m.es-es.perryellis.com":"https://es-us.perryellis.com","http://m.es-gt.perryellis.com":"http://es-us.perryellis.com","https://m.es-gt.perryellis.com":"https://es-us.perryellis.com","http://m.es-mx.perryellis.com":"http://es-us.perryellis.com","https://m.es-mx.perryellis.com":"https://es-us.perryellis.com","http://m.es-ni.perryellis.com":"http://es-us.perryellis.com","https://m.es-ni.perryellis.com":"https://es-us.perryellis.com","http://m.es-pa.perryellis.com":"http://es-us.perryellis.com","https://m.es-pa.perryellis.com":"https://es-us.perryellis.com","http://m.es-pe.perryellis.com":"http://es-us.perryellis.com","https://m.es-pe.perryellis.com":"https://es-us.perryellis.com","http://m.es-py.perryellis.com":"http://es-us.perryellis.com","https://m.es-py.perryellis.com":"https://es-us.perryellis.com","http://m.es-sv.perryellis.com":"http://es-us.perryellis.com","https://m.es-sv.perryellis.com":"https://es-us.perryellis.com"},mapOriginToProxy:{"http://www.perryellis.com":"http://m.perryellis.com","https://www.perryellis.com":"https://m.perryellis.com","http://es-us.perryellis.com":"http://m.es-us.perryellis.com","https://es-us.perryellis.com":"https://m.es-us.perryellis.com","http://es-bo.perryellis.com":"http://m.es-us.perryellis.com","https://es-bo.perryellis.com":"https://m.es-us.perryellis.com","http://es-bz.perryellis.com":"http://m.es-us.perryellis.com","https://es-bz.perryellis.com":"https://m.es-us.perryellis.com","http://es-cl.perryellis.com":"http://m.es-us.perryellis.com","https://es-cl.perryellis.com":"https://m.es-us.perryellis.com","http://es-cr.perryellis.com":"http://m.es-us.perryellis.com","https://es-cr.perryellis.com":"https://m.es-us.perryellis.com","http://es-do.perryellis.com":"http://m.es-us.perryellis.com","https://es-do.perryellis.com":"https://m.es-us.perryellis.com","http://es-ec.perryellis.com":"http://m.es-us.perryellis.com","https://es-ec.perryellis.com":"https://m.es-us.perryellis.com","http://es-es.perryellis.com":"http://m.es-us.perryellis.com","https://es-es.perryellis.com":"https://m.es-us.perryellis.com","http://es-gt.perryellis.com":"http://m.es-us.perryellis.com","https://es-gt.perryellis.com":"https://m.es-us.perryellis.com","http://es-mx.perryellis.com":"http://m.es-us.perryellis.com","https://es-mx.perryellis.com":"https://m.es-us.perryellis.com","http://es-ni.perryellis.com":"http://m.es-us.perryellis.com","https://es-ni.perryellis.com":"https://m.es-us.perryellis.com","http://es-pa.perryellis.com":"http://m.es-us.perryellis.com","https://es-pa.perryellis.com":"https://m.es-us.perryellis.com","http://es-pe.perryellis.com":"http://m.es-us.perryellis.com","https://es-pe.perryellis.com":"https://m.es-us.perryellis.com","http://es-py.perryellis.com":"http://m.es-us.perryellis.com","https://es-py.perryellis.com":"https://m.es-us.perryellis.com","http://es-sv.perryellis.com":"http://m.es-us.perryellis.com","https://es-sv.perryellis.com":"https://m.es-us.perryellis.com","http://perryellis.com":"http://m.perryellis.com","https://perryellis.com":"https://m.perryellis.com"},isMobileBrowser:function(e){return e=e||navigator.userAgent,e.match(this.regExUA)!==null},currentHost:function(){var e=window.location;return e.protocol+"//"+e.host},constructNewLocation:function(e){var t=window.location,n=this.appendDocumentReferrerAsUtmReferrer();return e+t.pathname+this.queryParameters()+t.hash+n},redirectTo:function(e){window.location.replace(e)},onMobile:function(){var e=this.currentHost();return this.mapProxyToOrigin.hasOwnProperty(e)},redirectToMobile:function(){var e=this.currentHost(),t=this.mapOriginToProxy[e];if(t!=undefined){var n=this.constructNewLocation(t);this.redirectTo(n)}},queryParameters:function(){return window.location.search},documentReferrer:function(){return document.referrer},appendDocumentReferrerAsUtmReferrer:function(){var e=this.documentReferrer()!==""?this.documentReferrer():"direct/not provided",t="utm_referrer="+encodeURIComponent(e);return t=this.queryParameters().indexOf("?")!==0?"?"+t:"&"+t,t},redirectToOrigin:function(){var e=this.currentHost(),t=this.mapProxyToOrigin[e];if(t!=undefined){var n=this.constructNewLocation(t);this.redirectTo(n)}},readCookie:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null},mobileCookie:function(){return this.readCookie("mw_mobile_site")},execute:function(){forceMobile=this.mobileCookie()==="true",forceOrigin=this.mobileCookie()==="false",this.onMobile()?this.onMobile()&&window.navigator&&!this.isMobileBrowser()&&!forceMobile&&this.redirectToOrigin():window.navigator&&this.isMobileBrowser()&&!forceOrigin&&this.redirectToMobile()}};Redirector.execute()