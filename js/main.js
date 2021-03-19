let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
let valid = true;
pwreg = /^[a-zA-Z]\w{3,14}$/;
/*document
  .getElementById("myForm")
  .addEventListener("submit", function validacija(e) {
    e.preventDefault();
    validationEmail();
    validationPw();
    if (validationEmail(valid) == true && validationPw(valid) == true) {
      document.getElementById("myForm").submit();
    }
  });*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-nav").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main-nav").style.marginLeft = "0";
}

function validationEmail() {
  let email = document.getElementById("email").value;
  if (email.value == "") {
    email.style.border = "2px solid red";
    document.getElementById(
      "validation-warning"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Empty field!</i>`;
    valid = false;
  } else if (email.match(reg)) {
    email.border = "2px solid green";
    document.getElementById("validation-warning").innerHTML = null;
    valid = true;
  } else {
    email.border = "2px solid red";
    document.getElementById(
      "validation-warning"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">  E-mail mora biti u formatu example@google.com</i>`;
    valid = false;
  }
  if (valid == false) {
    focus();
  }
  return valid;
}
function validationPw() {
  let password1 = document.getElementById("password").value;
  let password2 = document.getElementById("confirm_password").value;
  if (
    password1.match(pwreg) &&
    password2.match(pwreg) &&
    password1 === password2
  ) {
    confirm_password.style.border = "1px solid green";
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
