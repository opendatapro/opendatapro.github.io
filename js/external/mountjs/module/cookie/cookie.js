'use strict';

if (typeof m === 'undefined'){
	window.m = {};
}
window.m.cookie = (function(){
	//----- Helper functions -----		
	//Remove whitespace from start of string
	function trimLeft(str){ 
		return str.replace(/^\s+/,'');
	}
	
	//Sets time in GMT relative to now
	function offsetTime(daysParam){
		var days = 180;
		if (typeof daysParam === 'number'){ 
			days = daysParam;
		}    
	
		var date = new Date();
		date.setTime(date.getTime() + (days * 1000 * 60 * 60 * 24) );   
		
		return date.toGMTString();
	}
		
	//----- Main functions -----
	//Will return value as a string
	function getCookie(key) {
		key = key + '='; //= is there to not match substring, such as key 'test' for key 'test2'
		
		if (!document.cookie){ return null	} //if cookies disabled		
		var cookieString = document.cookie.split(';');

		for (var i = 0; i < cookieString.length; i++) {
		    var str = cookieString[i];
		    str = trimLeft(str);
		    
		    if (str.indexOf(key) === 0){
				return str.substring(key.length, str.length);
			}
		}
		return null;
	}

	function setCookie(key, value, exp, domain, path) {
		//Set default domain *setting* to ''
		var domainSetting = '';
		if (typeof domain === 'string'){
			domainSetting = 'domain=' + domain + ';';
		}
		
		//Set default path to '/'
		var pathVal = '/';
	    if(typeof path === 'string'){ 
		    pathVal = path;
	    }

		//Set cookie    
	    document.cookie = [
	    					key, '=', value, ';',
	    					'expires=' + offsetTime(exp), ';',
	    					domainSetting,
	    					'path=', pathVal
	    					].join('');
	}
	
	function removeCookie(key, domain, path){	    
		//Remove cookie by setting expiration to 1 day before now		    
	    setCookie(key, 'emptyCookie', -1, domain, path);
	}

	//----- Package module -----
	var cookie = {
		get : getCookie,
		set : setCookie,
		remove : removeCookie
	};
	
	return cookie;
}());