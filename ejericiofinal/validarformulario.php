<?php
// Conexión con la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "datosregistrousuarios";



    // Creamos la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Comprobamos la conexión
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    // Inicio de sesión
    session_start();


    // Verificar si el formulario ha sido enviado
    if ($_POST) {
        $nombre = $_POST['nombre'];
        $apellido1 = $_POST['apellido1'];
        $apellido2 = $_POST['apellido2'];
        $email = $_POST['email'];
        $login = $_POST['login'];
        $contraseña = $_POST['password'];

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Por favor, ingrese un correo electrónico válido.";
    }

    // Verificar si el correo electrónico ya está registrado en la base de datos
    $stmt = $conn->prepare("SELECT * FROM tabla_usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $error_message = "El email ya existe en la base de datos.";
    }

    // Verificar campos vacíos después de la verificación de duplicados
    if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($login) || empty($contraseña)) {
        $error_message = "Por favor, complete todos los campos.";
    } 
    



    // Si no hay errores, insertar los datos en la base de datos
    if (empty($error_message)) {
        $stmt = $conn->prepare("INSERT INTO tabla_usuarios (nombre, apellido1, apellido2, email, login, password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $nombre, $apellido1, $apellido2, $email, $login, $contraseña);
        if ($stmt->execute()) {
            $success_message = "Registro completado con éxito";
            $_SESSION['registro_exitoso'] = true;
        } else {
               $error_message = "Error al registrar los datos: " . $stmt->error;
            }
        }
    }

// Cerrar la conexión
$conn->close();

?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado formulario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body class="bg-success p-2 text-light" style="--bs-bg-opacity: .5;">
    <h1 class="pb-3 mx-auto">Resultado del formulario</h1>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    


    <?php
    if (isset($error_message)) {
        echo '<div class="alert alert-danger">'.$error_message.'</div>';
    }

    if (isset($success_message)) {
        echo '<div class="alert alert-success">'.$success_message.'</div>';
        echo '<br>';
        echo '<div class="d-grid gap-2 col-6 mx-auto">';
        echo '<button class="btn btn-success btn-lg" onclick="mostrarLista()"><a class="text-decoration-none text-reset" href="lista_usuarios.php">Consulta</a></button>';
        echo '</div>';
        echo '<br>';

    }

    ?>


    <div class="d-grid gap-2 col-6 mx-auto">
        <button type="button" class="btn btn-success btn-lg" id="listaUsuarios" name="submit">
            <a href="index.html" class="text-decoration-none text-reset">Volver al formulario</a>
        </button>
    </div>



</body>
</html>
