<?php
include 'config.php';

$ID = $_POST['id'];

$query = "DELETE FROM usuarioregistro WHERE id = $ID";

if (mysqli_query($conn, $query)) {
    http_response_code(200);
    echo json_encode(['status' => true, 'message' => 'Usuario eliminado con éxito']);
} else {
    http_response_code(500);
    echo json_encode(['status' => false, 'message' => 'Error al eliminar el usuario: ' . mysqli_error($conn)]);
}
?>
