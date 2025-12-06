<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<?php
session_start();
require_once 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $clave = $_POST["clave"];

    // Consulta 
    $stmt = $conn->prepare("SELECT id, nombre, password FROM cliente WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $cliente = $resultado->fetch_assoc();

        // Comparación
        if ($clave === $cliente["password"]) {

            $_SESSION["usuario_id"] = $cliente["id"];
            $_SESSION["usuario_nombre"] = $cliente["nombre"];

            header("Location: dashboard.php");
            exit();
        } else {
            echo "Contraseña incorrecta";
        }
    } else {
        echo "El usuario no existe";
    }

    $stmt->close();
    $conn->close();
}
?>

</body>
</html>