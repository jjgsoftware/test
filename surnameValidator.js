// JavaScript Document
$(document).ready(function() {
    $('#surname').blur(function(e) {
		var surname = $('#surname').val();
        if (surname.length > 1 && surname.length < 112 && !surname.contains('<','>')) {
            $('#errorsurname').html('Your surname is '+surname);
			$('#errorsurname').removeClass("lightred");
			$('#errorsurname').addClass("green");
        }
        else {
             $('#errorsurname').html('Surname is required');
			 $('#errorsurname').removeClass("green");
			$('#errorsurname').addClass("lightred");
        }
    });
});