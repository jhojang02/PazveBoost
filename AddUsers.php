<?php
include 'config.php';

$Apellido = $_POST ['apellido'];
$Direccion = $_POST ['direccion'];
$ID = $_POST ['id'];
$Telefono = $_POST ['telefono'];
$Nombre = $_POST ['nombre'];
$Ciudad = $_POST ['ciudad'];

$query = "INSERT INTO usuarioregistro (apellido,direccion,id,telefono,nombre,ciudad)
            VALUES ('$Apellido','$Direccion',$ID,$Telefono,'$Nombre','$Ciudad')";


if (mysqli_query($conn, $query)) {
    http_response_code(200);
    echo json_encode(['status' => true, 'message' => 'Usuario ha sido agregado con exito']);
}   else {
    http_response_code(500);
    echo json_encode(['status' => true, 'message' => 'Error al insertar el usuario'.mysqli_error($conn)]);
}