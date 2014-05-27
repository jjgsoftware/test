// JavaScript Document
$(document).ready(function() {
    $('#firstname').blur(function(e) {
		var firstname = $('#firstname').val();
        if (firstname.length > 1 && firstname.length < 112 && !firstname.contains('<','>')) {
            $('#errorfirstname').html('Hello '+firstname);
			$('#errorfirstname').removeClass("lightred");
			$('#errorfirstname').addClass("green");
        }
        else {
             $('#errorfirstname').html('First name is required');
			 $('#errorfirstname').removeClass("green");
			$('#errorfirstname').addClass("lightred");
        }
    });
});