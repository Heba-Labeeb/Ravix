const formLogin = document.querySelector(".form-login");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");

function emailValidation() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(emailInput.value)) {
    document.querySelector(".emailError").textContent =
      "The email you entered is incorrect.";
    return false;
  } else {
    document.querySelector(".emailError").textContent = "";
    return true;
  }
}
function passwordValidation() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!passwordRegex.test(passwordInput.value)) {
    document.querySelector(".passwordError").textContent =
      "Your password is incorrect. Try again.";
    return false;
  } else {
    document.querySelector(".passwordError").textContent = "";
    return true;
  }
}
emailInput.onblur = function () {
  emailValidation();
};
passwordInput.onblur = function () {
  passwordValidation();
};

formLogin.onsubmit = (e) => {
  e.preventDefault();
  let isvalid = true;
  const profile = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (!emailValidation() || !passwordValidation()) {
    isvalid = false;
  }
  if (isvalid == false) return;
};

