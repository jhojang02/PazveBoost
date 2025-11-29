<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pazveboost</title>
</head>
<body>
    <?php
        $conex = mysqli_connect ('localhost','root','') or die ('<center><h3><font color=red>MySql no se conecto');
        mysqli_select_db ($conex,'pazveboost')  or die ('<center><h2><font color=red>base de datos no encontrada');
    ?>
</body>
</html>

