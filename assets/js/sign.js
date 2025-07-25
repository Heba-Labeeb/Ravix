
const passwordSignInput = document.querySelector('.passwordSign');
const emailSignInput = document.querySelector(".emailSign");

const userNameinput = document.querySelector(".userName");
const confirmPassInput = document.querySelector(".confirmPass");
const formSignUp = document.querySelector(".form-signUp");


function userNameValidation() {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

  if (!usernameRegex.test(userNameinput.value)) {
    document.querySelector(".userSignError").textContent = "Invaild userName";
    return false;
  } else {
    document.querySelector(".userSignError").textContent = "";
    return true;
  }
}
userNameinput.onblur = function () {
  userNameValidation();
};

function emailSignValidation() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(emailSignInput.value)) {
    document.querySelector(".emailSignError").textContent =
      "The email you entered is incorrect.";
    return false;
  } else {
    document.querySelector(".emailSignError").textContent = "";
    return true;
  }
}
function passwordSignValidation() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!passwordRegex.test(passwordSignInput.value)) {
    document.querySelector(".passwordSignError").textContent =
      "Your password is incorrect. Try again.";
    return false;
  } else {
    document.querySelector(".passwordSignError").textContent = "";
    return true;
  }
}
emailSignInput.onblur = function () {
  emailSignValidation();
};
passwordSignInput.onblur = function () {
  passwordSignValidation();
};

function passwordConfirm() {
  if (confirmPassInput.value !== passwordSignInput.value) {
    document.querySelector(".confirmPassError").textContent =
      "Your password does not match";
    return false;
  } else {
    document.querySelector(".confirmPassError").textContent = "";
    return true;
  }
}

confirmPassInput.onblur = function () {
  passwordConfirm();
};

formSignUp.onsubmit = (e) => {
  e.preventDefault();
  let isValid = true;

  const signUpFun = {
    userName: userNameinput.value,
    email: emailSignInput.value,
    password: passwordSignInput.value,
    confirmPass: confirmPassInput.value,
  };

  if (
    !userNameValidation() ||
    !emailSignValidation() ||
    !passwordSignValidation() ||
    !passwordConfirm()
  ) {
    isValid = false;
  }
  if (isValid == false) return;
};
