console.log("connected");
//1-Select and stock all necessary elements

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");

const msgError = document.querySelectorAll(".error");
const title = document.getElementById("title");

//trigger form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form sent");
  //Collect input fields value
  let firstnameValue = firstname.value.trim();
  //Test if we've successfully collected input fields values

  console.log(firstnameValue.length, "firstname");
  let lastnameValue = lastname.value.trim();
  console.log(lastnameValue.length, "lastname");
  let emailValue = email.value.trim();
  console.log(emailValue.length, "email");
  let messageValue = message.value.trim();
  console.log(messageValue.length, "message");

  //The UX //All error messages are invisible
  msgError.forEach((error) => {
    error.classList.add("invisible");
  });

  //Verify user informations

  if (firstnameValue.length < 2 || firstnameValue.length > 10) {
    console.log("firstname error");
    firstname.nextElementSibling.classList.remove("invisible");
  } else if (lastnameValue.length < 3 || lastnameValue.length > 15) {
    console.log("lastname error");
    lastname.nextElementSibling.classList.remove("invisible");
  } else if (messageValue.length < 10 || messageValue.length > 100) {
    console.log("message error");
    message.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("success");
  }
});
