function validatePass() {
  let pass = document.getElementById("password");
  let confirmPass = document.getElementById("confirm-password");
  let validationNotice = document.getElementById("validation-notice");
  if (pass.value === confirmPass.value && pass.value != "") {
    pass.classList.remove("error");
    confirmPass.classList.remove("error");
    validationNotice.classList.add("validation-success");
  } else {
    pass.classList.add("error");
    confirmPass.classList.add("error");
    validationNotice.classList.remove("validation-success");
  }
}
