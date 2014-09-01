$(document).ready(function() {

	var text = $('body').text();
	for (i = 1; text.length > i; i++) {
		if (i % 2 === 0) {
			console.log('here are the even letters:' + text.charAt(i));
		}

		else if (i % 2 !== 0) {
			console.log('here are the odd letters:' + text.charAt(i));
		}
		
	}

});