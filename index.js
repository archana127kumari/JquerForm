$(document).ready(function() {
  $("#registrationForm").submit(function(event) {
    event.preventDefault();
 
    var isValid = true;

    // $('#lastName').prop('required', true);
    // $('.lreq').prop('required',true);

    //_______________________________ First Name_________________________________________________________________
 
    var firstName = $("#firstName").val();
    if(!firstName){
      $("#firstNameError").text("First name is required");

    }
    else if(/\s/.test(firstName)){
      $("#firstNameError").text("First name should not contain white space.");
      isValid = false;
    }
    else if (!/^[A-Za-z]+$/.test(firstName)) {
      $("#firstNameError").text("First name should only contain alphabets.");
      isValid = false;
    } else {
      $("#firstNameError").text("");
    }


//  _______________________________________LAST NAME___________________________________________________________________

    var lastName = $("#lastName").val();
    if(!lastName){
      $("#lastNameError").text("Last name is required");
      isValid = false;

    }
    else if(/\s/.test(lastName)){
      $("#lastNameError").text("Last name should not contain white space.");
      isValid = false;


    }
    else if (!/^[A-Za-z]+$/.test(lastName)) {
      $("#lastNameError").text("Last name should only contain alphabets.");
      isValid = false;
    } else if (lastName.length > 20) {
      $("#lastNameError").text("Last name cannot exceed 20 characters.");
      isValid = false;
    } else {
      $("#lastNameError").text("");
    }
 

    // _______________________________________________EMAIL__________________________________________________


    var email = $("#email").val();
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))  {
      $("#emailError").text("Invalid email format.");
      isValid = false;
    } else {
      $("#emailError").text("");
    }



 


// _______________________________________________PASSWORD_____________________________________________________

var password = $("#password").val();
var confirmPassword = $("#confirmPassword").val();


    if (password.length < 8) {
      $("#PPError").text("Password must be at least 8 characters long.");
      isValid = false;
    } else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    $("#PPError").text("Password must contain at least one letter, one number, and one special character.");
    isValid = false;
    } else {
    $("#PPError").text("");
    }


    // ____________________________________________CONFIRM PASSWORD_____________________________________________________

    if (password !== confirmPassword) {
      $("#passwordError").text("Passwords do not match.");
      isValid = false;
    } else {
      $("#passwordError").text("");
    }


    //____________________________________________DOB___________________________________________________________________
 
    var dob = $("#dob").val();
    if (!dob) {
      $("#dobError").text("Please enter your date of birth.");
      isValid = false;
    } else {
      $("#dobError").text("");
    }

    //_____________________________________________PHONE____________________________________________________________
 
    var phone = $("#phone").val();
    if (!/^\d{10}$/.test(phone)) {

      $("#phoneError").text("Phone number should contain 10 digits and start with +91.");
      isValid = false;
    } else {
      $("#phoneError").text("");
    }


    //______________________________________HEIGHT_______________________________________________________
    
    var height = $("#height").val();
    if (height <= 0 || height > 300) { 
      $("#heightError").text("Please enter a valid height.");
      isValid = false;
    } else {
      $("#heightError").text("");
    }

    //_________________________________________WEIGHT__________________________________________________
 
    var weight = $("#weight").val();
    if (weight <= 0 || weight > 500) { 
      $("#weightError").text("Please enter a valid weight.");
      isValid = false;
    } else {
      $("#weightError").text("");
    }
 
    if (isValid) {
      $("#registrationMessage").text("Registration is completed.").addClass('success').removeClass('error');
      // console.log("First Name: ", $("#firstName").val());
      displayFormValues();

 
      $("#registrationForm")[0].reset();
 
      // displayFormValues();
    } else {
      $("#registrationMessage").text("We are sorry we couldn’t complete the registration.").addClass('error').removeClass('success');
    }

    // console.log("First Name: ", $("#firstName").val());

  });
});
 

function displayFormValues() {
  $("#formValuesTable").show(); 
 
  // console.log("First Name: ", $("#firstName").val());
 
  $("#firstNameValue").text($("#firstName").val());
  $("#lastNameValue").text($("#lastName").val());
  $("#emailValue").text($("#email").val());
  $("#dobValue").text($("#dob").val());
  $("#phoneValue").text($("#phone").val());
  $("#heightValue").text($("#height").val());
  $("#weightValue").text($("#weight").val());
  // $("#genderValue").text($("#gender").val());

}



function visible() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}