<?php


$con = mysqli_connect('localhost', 'root', '', 'zad4_baza');

// get the post records
$email = $_POST['email'];
$password = $_POST['password'];
$password_hash = password_hash($password, PASSWORD_BCRYPT);

// database insert SQL code
$sql = "INSERT INTO `registrovani` (`id`, `fldEmail`, `fldPassword`) VALUES ('0', '$email', '$password_hash')";

// insert in database 
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "Contact Records Inserted";
}
