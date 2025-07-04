const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const userContainer = document.getElementById("userContainer");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

const fistForm = document.getElementById("form1");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const showPasswordCIcon = document.querySelector("#show__password");
const inputsFirstForm = fistForm.getElementsByTagName("input");

let isFormValid = false;

fistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (validateInputs()) {
    setToLocalStor(nameSingUp, emailSingUp, passworSingdUp);
    for (const elem of inputsFirstForm) {
      elem.classList.remove("valid");
    }
    fistForm.reset();
  }
});

const validateInputs = () => {
  const name = !validator.isEmpty(nameInput.value);
  const email = validator.isEmail(emailInput.value);
  const password = validator.isStrongPassword(passwordInput.value);
  let valid = false;

  if (name === false) {
    displayError(nameInput, "Name is required!");
  } else {
    setSuccess(nameInput);
  }
  if (email === false) {
    displayError(emailInput, "Email is required!");
  } else {
    setSuccess(emailInput);
  }
  if (password === false) {
    displayError(
      passwordInput,
      "Week password! Use Uppercase,Lowercase,special characters"
    );
  } else {
    setSuccess(passwordInput);
  }
  if (name && email && password) {
    valid = true;
  }
  return valid;
};

const displayError = (element, msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = msg;
  element.classList.add("invalid");
  element.classList.remove("valid");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = "";
  element.classList.add("valid");
  element.classList.remove("invalid");
};

/*Show and hide password in input*/
showPasswordCIcon.addEventListener("mousedown", () => {
  passwordInput.type = "text";
});
showPasswordCIcon.addEventListener("mouseup", () => {
  passwordInput.type = "password";
});

const nameSingUp = fistForm.querySelector("#name");
const emailSingUp = fistForm.querySelector("#email");
const passworSingdUp = fistForm.querySelector("#password");
const btnSingUp = document.getElementById("btnSingUp");

function setToLocalStor(name, email, password) {
  const setName = name.value;
  const setEmail = email.value;
  const setPassword = password.value;
  const validInt =
    name.classList.contains("valid") &&
    email.classList.contains("valid") &&
    password.classList.contains("valid");
  if (validInt) {
    const user = {
      name: setName,
      email: setEmail,
      password: setPassword,
    };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isDuplicate = users.some((user) => user.email === setEmail);
    if (isDuplicate) {
      alert("A user with this email already exists!");
      return;
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }
}

const emailSignIn = document.getElementById("emailSingIn");
const passwordSingIn = document.getElementById("passwordSingIn");

secondForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userLogIn = corectInputSingIn();
  if (userLogIn) {
    localStorage.setItem("activeUser", JSON.stringify(userLogIn));
    openUserContainer(userLogIn.name);
  }
});

function getItemLocalStor(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userFound = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (userFound) {
    return userFound;
  } else {
    displayError(emailSignIn, "Invalid email or password");
    displayError(passwordSingIn, "Invalid email or password");
    return null;
  }
}

const corectInputSingIn = () => {
  const email = emailSignIn.value.trim();
  const password = passwordSingIn.value.trim();

  if (email === "") {
    displayError(emailSignIn, "Please enter your email");
  } else {
    setSuccess(emailSignIn);
  }

  if (password === "") {
    displayError(passwordSingIn, "Please enter your password");
  } else {
    setSuccess(passwordSingIn);
  }
  const valid = getItemLocalStor(email, password);
  return valid;
};

function openUserContainer(name) {
  userContainer.classList.remove("unvisible2");
  container.classList.add("unvisible2");
  document.getElementById("hiUser").textContent = `Hello! ${name}`;
}
function closeUserContainer() {
  container.classList.remove("unvisible2");
  userContainer.classList.add("unvisible2");
  localStorage.removeItem("activeUser");
}

const singOutBtn = document.getElementById("singOut");
singOutBtn.addEventListener("click", () => {
  closeUserContainer();
});

window.addEventListener("DOMContentLoaded", () => {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  if (activeUser) {
    openUserContainer(activeUser.name);
  }
});
