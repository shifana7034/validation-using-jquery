$(document).ready(function () {
    // Initialize form validation
    $("#myForm").validate({
      // Define validation rules
      rules: {
        username: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      // Custom messages for each field
      messages: {
        username: {
          required: "Please enter your username",
          minlength: "Your username must be at least 3 characters long"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 6 characters long"
        }
      },
      // Error message placement
      errorPlacement: function (error, element) {
        error.insertAfter(element); // Place error messages directly below each field
      },
      // On form submission
      submitHandler: function (form) {
        alert("Form submitted successfully!");
        form.submit(); // Submit the form after validation
      }
    });
  });
  