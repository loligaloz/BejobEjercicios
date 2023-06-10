$(document).ready(function() {
  // Obtener el formulario
  var form = $("#formulario");

  // Agregar el evento de envío del formulario
  form.on("submit", function(event) {
    // Realizar las validaciones
    var nombre = $("#input_nombre").val();
    var apellido1 = $("#input_apellido1").val();
    var apellido2 = $("#input_apellido2").val();
    var email = $("#input_email").val();
    var login = $("#input_login").val();
    var contraseña = $("#input_password").val();

    // Validar campos vacíos
    if (nombre === "" || apellido1 === "" || apellido2 === "" || email === "" || login === "" || contraseña === "") {
      $(".valid-feedback").hide();
      $(".invalid-feedback").show();
      event.preventDefault(); // Detener el envío del formulario
      return;
    }

    // Validar formato del correo electrónico
    if (!isValidEmail(email)) {
      $(".valid-feedback").hide();
      $(".invalid-feedback").show();
      event.preventDefault(); // Detener el envío del formulario
      return;
    }

    // Validar longitud de los campos
    if (nombre.length > 50 || apellido1.length > 50 || apellido2.length > 50 || email.length > 100 || login.length > 50 || contraseña.length < 4 || contraseña.length > 8) {
      $(".valid-feedback").hide();
      $(".invalid-feedback").show();
      event.preventDefault(); // Detener el envío del formulario
      return;
    }
  });

  // Agregar eventos de escucha en los campos relevantes
  $("#input_nombre, #input_apellido1, #input_apellido2, #input_email, #input_login, #input_password").on("input", function() {
    validateField($(this)); // Llamar a la función de validación de campo
  });

  // Función para validar el formato del correo electrónico
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
    return emailRegex.test(email);
  }

  // Función para validar un campo individual y actualizar las clases de retroalimentación
  function validateField(field) {
    var fieldValue = field.val();
    var feedbackElement = field.siblings(".invalid-feedback");
    var feedbackElement1 = field.siblings(".valid-feedback");

    if (fieldValue === "") {
      field.removeClass("is-valid").addClass("is-invalid");
      feedbackElement.show();
    } else {
      field.removeClass("is-invalid").addClass("is-valid");
      feedbackElement.hide();
      feedbackElement1.show();
    }
  }



});
