<?php
header("Acces-Control-Allow-Origin:");
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: Content-Type");
header("Acces-Control-Allow-Methods: GET, POST, OPTIONS");

require 'config.php';

$query= "SELECT ALL Ciudad,Nombre
            FROM usuarioregistro";

$result = mysqli_query($conn,$query);
$usuario = mysqli_fetch_assoc($result);


echo json_encode([
    "data" => $usuarios,
    "status" => ${$usuarios} ?                                                                  
]);
