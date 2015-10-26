'use strict';


/*
----------------------------------------
Async load Google analytics analytics.js 
----------------------------------------
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


/*
------
Module
------
*/
if (typeof m === "undefined"){
	m = {};
}
window.m.analytics = (function(){
	//----- Main functions -----
	var init = function(id){
		if (m.cookie.get('disableCookies')){
			//Opt-out of Google Analytics tracking [1]
			var str = 'ga-disable-' + id;
			window[ str ] = true;
		}
		
		ga('create', {
					trackingId: id,
					cookieDomain: 'auto',
					anonymizeIp: true,
					});
		ga('send', 'pageview');									
	}
	
	var disable = function(){
		//Remove Google Analytics cookies [2]
		m.cookie.remove('_ga');
		m.cookie.remove('_gat');
		
		//Add cookie to know to disable Google Analytics
		m.cookie.set('disableCookies','true');
	};
	
	var enable = function(){
		m.cookie.remove('disableCookies');
	};
	
	//----- Package module -----
	var analytics = {
		init :  init,
		disable : disable,
		enable : enable
	};
	
	return analytics;
}())

/*
----------
References 
----------
[1] https://developers.google.com/analytics/devguides/collection/analyticsjs/user-opt-out
[2] https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
*/