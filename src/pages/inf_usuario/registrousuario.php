<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <?php
    //Conexion con la base de Datos
    require_once 'conexion.php';

    //insertar registro en la tabla
    mysqli_query($conex,"INSERT INTO cliente(mail_cl,contr_cl,dir_cl,cc_cl,tel_cl,ciu_cl) VALUES 
    ('$_REQUEST[mail]','$_REQUEST[contr]','$_REQUEST[dir]','$_REQUEST[cc]','$_REQUEST[tel]','$_REQUEST[ciu]')") or die ("error: ".mysqli_error($conex));

    echo "<br><br><center><h3> Datos Agregados Correctamente <br><br><br>";

    //desconectar mysql de php
    mysqli_close($conex);
    ?>
</body>
</html>