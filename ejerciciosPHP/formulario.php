<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Registro</title>
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
</head>

<body>
    <div class="contenedor">
        <form action=" " method="post" class="formulario" id="formulario">
            <h2>Formulario de Registro</h2>

                <label for="nombre" class="formulario_label">Nombre</label>
                <input type="text" name="nombre" id="nom_input" class="style-input" value="" >

                <label for="apellido" class="formulario_label">Apellido</label>
                <input type="text" name="apellido" id="apl_input" class="style-input" value="" >

                <label for="email" class="formulario_label">Email</label>
                <input type="email" name="email" id="eml_input" class="style-input" value="" >


                <input type="submit" name="submit" value="Registro" class="style-btn" id="btn_input">   
            

        <?php

        if($_POST){
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $email = $_POST['email'];
        


            //Conexión con PDO

            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "cursosqlsamsung";

            //Crear conexión a BBDD

            $conn = new mysqli($servername, $username, $password, $dbname);
        
            //Comprobar conexión

            if ($conn->connect_error) {
                die("Conexión fallida: " . $conn->connect_error);
            }

            $sql = "INSERT INTO usuarios (nombre, apellido, email)VALUES ('$nombre', '$apellido', '$email')";

            if ($conn->query($sql) === TRUE) {
                //echo "Nuevo registro creado correctamente";
                header("Location: registro_exitoso.php");
                exit();
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

            $conn->close();

        }
        ?>
        </form>
    </div>
    
    <script>
        // Capturar el formulario
        var formulario = document.getElementById('formulario');

        // Agregar el evento submit
            formulario.addEventListener('submit', function(event) {
   
        // Obtener los valores de los campos
            var nombre = document.getElementById('nom_input').value;
            var apellido = document.getElementById('apl_input').value;
            var email = document.getElementById('eml_input').value;

        // Realizar validaciones
            if (nombre === '' || apellido === '' || email === '') {
                event.preventDefault(); // Detener el envío del formulario
                alert('Por favor, complete todos los campos.');
            }
        });

    </script>
</body>
</html>