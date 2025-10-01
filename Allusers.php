<?php
header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: Content-Type");
header("Acces-Control-Allow-Methods: GET, POST, OPTIONS");

require 'configuracion.php';

$query = "SELECT users.*, login_data.*
            FROM users INNER JOIN login_data
                ON users.number_document=login_data.number_document";

$result = mysqli_query($conn, $query);
$usuarios= mysqli_fetch_assoc($result);
echo json_encode($usuarios);