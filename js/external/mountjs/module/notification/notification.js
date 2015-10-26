'use strict';

if (typeof m === "undefined"){
	window.m = {};
}
window.m.notification = (function(param){
	//----- Helper functions -----
	//Convert CSS object (like in jQuery) to a CSS string
	var objToCSS = function(obj){
		var css = '';
		
		for (prop in obj){
			var val = obj[prop];
			css += [prop,':',val,';'].join("");
		}
		
		return css;
	}
	
	//----- Main functions -----
	var text = "This is a Mount JS notication bar.";
	if (param){ text = param; }
	
	var css = {
		notification : {
				background : '#8a9bea',
				position : 'absolute',
				top : '0px',
				left: '0px',
				color : '#fff',
				display:'none',
				width : '100%',
				'line-height' : '3em',
				'box-sizing' : 'border-box',
				'text-align':'right',
				},
		a : {
			color: '#fff',
			'text-decoration': 'underline'
			},
		btn : {
				//CSS reset
					color: 'inherit', 
					font: 'inherit',
					margin: 0,
					padding: 0,
					border: 0,
					overflow: 'visible',
					'text-transform': 'none',
					'-webkit-appearance': 'button',
					cursor: 'pointer',
				//Add some style
					display: 'inline-block',
					background: '#687bd4',
					padding: '0 1.5em',
					margin: '0 0 0 0.75em'
				}		
	};

	//Generate HTML
	var html = [
				'<div style="', objToCSS(css.notification) ,'">',
					text,
					'<button style="', objToCSS(css.btn) ,'">OK</button>',
				'</div>'
				].join("");
	
	//Create element (reference) 
	var notification = $(html);
	
	//Append element
	$('body').append(notification);
	
	//Add link CSS
	$('a', notification).css(css.a);

	//Give button bacic functionality
	$('button', notification).on('mousedown', function(e){
		$(this).parent().remove();
		e.preventDefault();
	})
	
	//----- Package module -----
	//Make the notification jQuery object available
	return notification;
}());