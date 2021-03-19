<?php


$con = mysqli_connect('localhost', 'root', '', 'zad4_baza');

// get the post records
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$message = $_POST['subject'];

// database insert SQL code
$sql = "INSERT INTO `kontakt_poruke` (`id`, `fldIme`, `fldPrezime`, `fldPoruka`) VALUES ('0', '$firstname', '$lastname', '$message')";

// insert in database 
$rs = mysqli_query($con, $sql);

if ($rs) {
    echo "Contact Records Inserted";
    header('Location: ../index.html');
}
