const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-btn");
const form = document.querySelector("form");
const emailInput = form.querySelector("input#email");
const nameText = document.getElementById("name-text");
const emailText = document.getElementById("email-text");
const messageText = document.getElementById("message-text");
const nameDone = document.getElementById("name-done");
const emailDone = document.getElementById("email-done");
const messageDone = document.getElementById("message-done");
const nameRegex = /^[[\p{L}\s'\-]+$/u;

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function addErrorClass(inputElement, textElement) {
  inputElement.classList.add("error");
  textElement.classList.add("error");
}

function removeErrorClass(inputElement, textElement) {
  inputElement.classList.remove("error");
  textElement.classList.remove("error");
}

function addValidationClass(inputElement, textElement, doneElement) {
  textElement.style.visibility = "hidden";
  inputElement.classList.add("valid");
  doneElement.classList.add("valid-icon");
}

function removeValidationClass(inputElement, textElement, doneElement) {
  textElement.style.visibility = "visible";
  inputElement.classList.remove("valid");
  doneElement.classList.remove("valid-icon");
}

function removeAll(inputElement, textElement, doneElement) {
  removeErrorClass(inputElement, textElement);
  removeValidationClass(inputElement, textElement, doneElement);
}

function validateName() {
  removeAll(nameInput, nameText, nameDone);
  if (nameInput.value.trim() === "") {
    addErrorClass(nameInput, nameText);
    nameText.textContent = "Name is required";
  } else if (
    nameInput.value.trim().length < 3 ||
    nameInput.value.trim().length > 50
  ) {
    addErrorClass(nameInput, nameText);
    nameText.textContent = "Invalid name length.";
  } else if (/\d/.test(nameInput.value.trim())) {
    addErrorClass(nameInput, nameText);
    nameText.textContent = "Name should not contain numbers.";
  } else if (!nameRegex.test(nameInput.value.trim())) {
    addErrorClass(nameInput, nameText);
    nameText.textContent = "Name should not contain special characters.";
  } else {
    removeErrorClass(nameInput, nameText);
    addValidationClass(nameInput, nameText, nameDone);
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValue = emailInput.value.trim();
  removeAll(emailInput, emailText, emailDone);
  if (emailValue === "") {
    addErrorClass(emailInput, emailText);
    emailText.textContent = "Email is required";
  } else if (!emailRegex.test(emailValue)) {
    addErrorClass(emailInput, emailText);
    emailText.textContent = "Email is not valid";
  } else {
    removeErrorClass(emailInput, emailText);
    addValidationClass(emailInput, emailText, emailDone);
  }
}

function validateMessage() {
  removeAll(messageInput, messageText, messageDone);
  if (messageInput.value.trim() === "") {
    addErrorClass(messageInput, messageText);
    messageText.textContent = "Message is required";
  } else {
    removeErrorClass(messageInput, messageText);
    addValidationClass(messageInput, messageText, messageDone);
  }
}
