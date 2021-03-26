const namereg = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
valid = true;

document
  .getElementById("contact-form")
  .addEventListener("submit", function validacija(e) {
    e.preventDefault();
    validationName();
    validationSubject();

    if (validationName(valid) == true && validationSubject(valid) == true) {
      document.getElementById("contact-form").submit();
    }
  });
function validationName() {
  if (
    document.getElementById("fname").value.match(namereg) &&
    document.getElementById("lname").value.match(namereg)
  ) {
    document.getElementById("fname").style.border = "2px solid green";
    document.getElementById("lname").style.border = "2px solid green";
    document.getElementById("validation-warning3").innerHTML = null;
    valid = true;
  } else if (
    document.getElementById("fname").value == "" &&
    document.getElementById("lname").value == ""
  ) {
    document.getElementById("fname").style.border = "2px solid red";
    document.getElementById("lname").style.border = "2px solid red";
    document.getElementById(
      "validation-warning3"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Empty Fields</i>`;
    valid = false;
  }
  return valid;
}

function validationSubject() {
  if (document.getElementById("subject").value == "") {
    document.getElementById("subject").style.border = "2px solid red";
    document.getElementById(
      "validation-warning4"
    ).innerHTML = `<i class="fa fa-exclamation-circle" style="font-size: 17px;color: red; ">Empty Field</i>`;
    valid = false;
  } else {
    document.getElementById("subject").style.border == "2px solid green";
    document.getElementById("validation-warning4").innerHTML = null;
    valud = true;
  }
  return valid;
}
