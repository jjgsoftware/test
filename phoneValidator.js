// JavaScript Document
$(document).ready(function() {
    $('#phone').blur(function(e) {
        if (validatePhone('phone')) {
            $('#errorphone').html('Phone number is valid');
			$("#errorphone").removeClass("lightred");
			$("#errorphone").addClass("green");
        }
        else {
             $('#errorphone').html('Invalid phone number');
			 $("#errorphone").removeClass("green");
			$("#errorphone").addClass("lightred");
        }
    });
});

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^[0-9-+]+$/;
    if (filter.test(a) && a.length>2) {
        return true;
    }
    else {
        return false;
    }
}