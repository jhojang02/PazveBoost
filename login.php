<?php
require 'config.php';

$query= "SELECT ALL Ciudad,Nombre
            FROM usuarioregistro";

$result = mysqli_query($conn,$query);
$usuario = mysqli_fetch_assoc($result);
echo json_encode($usuario);
