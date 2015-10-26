'use strict';

/*
-------------------
Cookie notification
-------------------
*/
if (!m.cookie.get('notifiedCookies')
 && !m.cookie.get('disableCookies')){
	var $note = m.notification([
								'This website uses cookies for ',
								'analytics and functionality.', 
								'See ', 
								'<a href="/cookies/">',
								'cookie policy & settings',
								'</a>',
								' for details.'
								].join('')
								);

	//Button press: confirm notification received
	$('button', $note).on('mousedown', function(e){
		m.cookie.set('notifiedCookies','true');
	}) 
	
	//Display notification
	$note.show();	
}


/*
---------------
Cookie settings
---------------
*/
//----- If cookie enabled, make checked true -----
$(document).ready(function(){
	var isChecked = true;
	if (m.cookie.get('disableCookies')){
		isChecked = false;
	}

	var inputEl = [
					'<label>',
					'<input type="checkbox"', isChecked, '>',
					'Google Analytics</label>'
					].join('')
	$('#enableAnalytics').html(inputEl);
})

//----- Enable toogle -----
$('#enableAnalytics input').on('change', function(){
	if ( $(this).is(':checked') ){
		m.analytics.enable();
		/*
		If someone enables cookies manually, 
		they already know the Cookie policy
		*/
		m.cookie.set('notifiedCookies','true');	
	}
	else{
		m.analytics.disable();
	}
})