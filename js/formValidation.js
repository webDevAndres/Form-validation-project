$(document).ready(() => {
	$("#sendForm").click(function() {
	var validForm=true;

	if($("#custFirstName").val().match(/[ <>']/g) ) 
	{
		$("#custFirstNameError").html("invalid format");
		validForm=false;
	} 
	else if($("#custFirstName").val() )
	{
		$("#custFirstNameError").html("");
		
	}
	else 
	{
		$("#custFirstNameError").html("Please enter your first name");
		validForm=false;
	}


	if($("#custLastName").val().match(/[ <>']/g) ) 
	{
		$("#custLastNameError").html("invalid format");
		validForm=false;
	} 
	else if($("#custLastName").val() )
	{
		$("#custLastNameError").html("");
		 
	}
	else 
	{
		$("#custLastNameError").html("Please enter your last name.");
		validForm=false;
	}



	 if ($("#custPhone").val().match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g))
	 {
		$("#custPhoneError").html("");
		
	 }
	 else if ($("#custPhone").val())
	 {
		$("#custPhoneError").html("please use format 555-555-555");
		validForm=false;
		
	 }
	 else {
      $("#custPhoneError").html("");
	 }
	

	if($("#custEmail").val().match(/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.([A-Z]{2,4})$/i) )
	{
		$("#custEmailError").html("");
	}
	else 
	{
		$("#custEmailError").html("invalid email");
		validForm=false;
	}

	if ($("input[name=custProducts]:checked").val() )
	{
		$("#custProductsError").html("");
	}
	else
	{
		$("#custProductsError").html("you must select one");
		validForm=false;
		
	}



	if($("#custComplaint").val().match(/[<>']/g))
	{
		$("#custComplaintError").html("character < > not allowed");
		validForm=false;
	}
	else if($("#custComplaint").val())
	{
		$("#custComplaintError").html("");
	}

	else 
	{
		$("#custComplaintError").html("cannot be blank");
		validForm=false;
	}




	if(validForm) 
	{
		alert("Valid form will be submitted");
	} else{
		alert("Invalid form. Display form and error messages");
	}



});
});

