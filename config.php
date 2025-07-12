<?php
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: Content-Type");
header("Acces-Control-Allow-Methods: GET, POST, OPTIONS");

$database = "proyecto";
$host = "localhost";
$userDB = "root";
$password = "";

$conn = mysqli_connect($host,$userDB,$password,$database);

if(!$conn){
    echo '{
    "status":true,
    "message":"se realizo la accion",
    "error": '.mysqli_connect_errno().'

    }';
    exit;
}

?>