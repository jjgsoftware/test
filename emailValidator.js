// JavaScript Document
$(document).ready(function(e) {
    $('#email').blur(function() {
        var sEmail = $('#email').val();
        if ($.trim(sEmail).length == 0) {
			$('#erroremail').html('Email is required');
			$('#erroremail').removeClass("green");
			$('#erroremail').addClass("lightred");
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $('#erroremail').html('Email is valid');
			$('#erroremail').removeClass("lightred");
			$('#erroremail').addClass("green");
        }
        else {
            $('#erroremail').html('Invalid email address');
			$('#erroremail').removeClass("green");
			$('#erroremail').addClass("lightred");
            e.preventDefault();
        }
    });
	
	
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}