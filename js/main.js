let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let valid = true;
pwreg = /^[a-zA-Z]\w{3,14}$/;
document
  .getElementById("myForm")
  .addEventListener("submit", function validacija(e) {
    e.preventDefault();
    validationEmail();
    validationPw();
    if (validationEmail(valid) == true && validationPw(valid) == true) {
      document.getElementById("myForm").submit();
    }
    console.log(valid);
    console.log(document.myForm);
  });
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-nav").style.marginLeft = "0";
}

function validationEmail() {
  if (document.getElementById("email").value == "") {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("email").style.margin = "7px 57px 0 0";
    document.getElementById(
      "validation-warning"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Empty Field</i>`;
    valid = false;
  } else if (document.getElementById("email").value.match(reg)) {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("validation-warning").innerHTML = null;
    valid = true;
  } else {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("email").style.margin = "7px 57px 0 0";
    document.getElementById(
      "validation-warning"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; "> E-mail format example@google.com</i>`;
    valid = false;
  }
  if (valid == false) {
    document.getElementById("email").focus();
  }
  return valid;
}
function validationPw() {
  if (
    document.getElementById("password").value == "" &&
    document.getElementById("confirm_password").value == ""
  ) {
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Empty fields</i>`;
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("confirm_password").style.border = "2px solid red";
    valid = false;
  } else if (
    document.getElementById("password").value.match(pwreg) &&
    document.getElementById("confirm_password").value.match(pwreg) &&
    document.getElementById("password").value ===
      document.getElementById("confirm_password").value
  ) {
    document.getElementById("password").style.border = "2px solid green";
    document.getElementById("confirm_password").style.border =
      "1px solid green";
    document.getElementById("validation-warning2").innerHTML = null;
    valid = true;
  } else {
    document.getElementById(
      "validation-warning2"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Passwords are not matching</i>`;
    valid = false;
  }

  return valid;
}
