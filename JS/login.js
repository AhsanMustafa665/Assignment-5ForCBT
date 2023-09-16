const getPin = () => {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
};
const generatePin = () => {
  document.getElementById("display-pin").value = getPin();
};
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const otpField = document.getElementById("otp");
const warningMsg = document.getElementById("warning-msg");
const accountDetails = {
  email: "faisal@gmail.com",
  password: "123456",
};
const loginBtn = () => {
  const displayPin = document.getElementById("display-pin").value;
  if (
    emailField.value !== "" &&
    passwordField.value !== "" &&
    otpField.value !== ""
  ) {
    if (
      emailField.value === accountDetails.email &&
      passwordField.value === accountDetails.password &&
      otpField.value === displayPin
    ) {
      window.location = "/product.html";
      emailField.value = "";
      passwordField.value = "";
      otpField.value = "";
    } else {
      warningMsg.innerText = "The information you typed is incorrect!";
      warningMsg.style.border = "1px solid red";
      warningMsg.style.borderRadius = "5px";
    }
  } else {
    warningMsg.innerText = "Please fill in the blanks";
    warningMsg.style.border = "1px solid red";
    warningMsg.style.borderRadius = "5px";
  }
};
