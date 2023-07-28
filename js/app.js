//Scroll contact
let contactForm = document.getElementById('target_contact');

function scrollContact() {
  let go = contactForm;
  go.scrollIntoView({ behavior: 'smooth'});
}



// CONTACT VALIDATIONS
const emailInput = document.getElementById("email_input");
const nameInput = document.getElementById("name_input");
const textAreaInput = document.getElementById("textarea_input");
const errorMessageContainer = document.getElementById("error_message_container");

emailInput.addEventListener("input", function () {
  let email = emailInput.value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    emailInput.style.borderColor = "rgb(78, 225, 160)";
    removeErrorMessage();
  } else if (email === ""){
    emailInput.style.borderColor = "var(--darker_grey_letters)";
    removeErrorMessage();
  } else {
    emailInput.style.borderColor = "rgb(255, 111, 91)";
    errorMessage();
  }
});

function errorMessage() {
  if (!document.getElementById("error_message")) {
    let errorDiv = document.createElement("div");
    errorDiv.id = "error_message";
    errorDiv.innerHTML = `<span>Sorry, invalid format here</span>`;
    errorMessageContainer.appendChild(errorDiv); 
  }
}

function removeErrorMessage() {
  let errorDiv = document.getElementById("error_message");
  if (errorDiv) {
    errorDiv.parentNode.removeChild(errorDiv);
  }
}


// submitInput.addEventListener("click", function() {
//   emailField = emailInput.value
//   textField = textAreaInput.value
//   nameField = nameInput.value
//   if ( emailFlied === "" || textField  || nameField === "") {
//     notSent()
//   } else {
//     sent()
//   }
// })

nameInput.addEventListener("input", function () {
  content = nameInput.value
  if(content !== "") {
    nameInput.style.borderColor = "rgb(78, 225, 160)";
  } else {
    nameInput.style.borderColor = "var(--darker_grey_letters)";
  }
})

const textareaInput = document.getElementById("textarea_input");
textareaInput.addEventListener("input", function () {
  content = textareaInput.value
  if(content !== "") {
    textareaInput.style.borderColor = "rgb(78, 225, 160)";
  } else {
    textareaInput.style.borderColor = "var(--darker_grey_letters)";
  }
})

//Form submission
const submitInput = document.getElementById('submit_button');

function notSent() {
    let errorSending = document.createElement("div");
    errorSending.id = "not_sent";
    errorSending.innerHTML = `<span>Sorry, all fields are required</span>`;
    document.querySelector('.form_message').appendChild(errorSending); 
}

function removeNotSent() {
  let errorSending = document.getElementById("not_sent");
  if (errorSending) {
    errorSending.parentNode.removeChild(errorSending);
  }
}

function sent() {
    let successfullySend = document.createElement("div");
    successfullySend.id = "sent";
    successfullySend.innerHTML = `<span>Thanks for your message, i will be replying soon.</span>`;
    document.querySelector('.form_message').appendChild(successfullySend); 
}

function removeSent() {
  let successfullySend = document.getElementById("sent");
  if (successfullySend) {
    successfullySend.parentNode.removeChild(successfullySend);
  }
}

$(document).ready(function () {
  $('.contact_form').submit(function (event) {
    event.preventDefault();

    var name = $("#name_input").val();
    var email = $("#email_input").val();
    var textarea = $("#textarea_input").val();

    if (name === "" || email === "" || textarea === "") {
      notSent();
      setTimeout(function() {
        removeNotSent()
      }, 4000)
    } else {
      var formData = {
        name: name,
        email: email,
        textarea: textarea
      };

      $.ajax({
          url: "https://formsubmit.co/ajax/anto.garrido.98@gmail.com",
          method: "POST",
          data: formData,
          dataType: "json",
          success: function (response) {
              sent()
              setTimeout(function() {
                removeSent()
              }, 7000)
              
              console.log("Form submitted successfully!");
              console.log(response);
          },
          error: function (xhr, status, error) {   
              console.error("Error submitting the form:");
              console.error(error);
          }
      });
    }
  });
});