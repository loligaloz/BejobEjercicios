<?php
// Conexión a la base de datos (mismos valores que en el script anterior)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "datosregistrousuarios";

// Crear conexión a la base de datos
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
// Configurar el modo de error para que lance excepciones en caso de error
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Obtener la lista de usuarios desde la base de datos
$consulta = "SELECT nombre, apellido1, apellido2, email FROM tabla_usuarios";
$stmt = $conn->query($consulta);

if ($stmt->rowCount() > 0) {
    // Mostrar la lista de usuarios
    echo '<div class="d-grid gap-2 col-6 mx-auto">';
    echo "<h1>Lista de usuarios registrados:</h1>";
    echo "<ul>";

    while ($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<li>{$fila['nombre']} {$fila['apellido1']} {$fila['apellido2']} (Email: {$fila['email']})</li>";
    }

    echo "</ul>";
    echo '</div>';
} else {
    // No hay usuarios registrados
    echo "No hay usuarios registrados.";
}

// Cerrar la conexión
$conn = null;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Registro</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body class="bg-success p-2 text-light" style="--bs-bg-opacity: .5;">


<div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-success btn-lg" id="listaUsuarios" name="submit">
            <a href="index.html" class="text-decoration-none text-reset">Volver al formulario</a>
        </button>
    </div>



</body>
</html>
