    //acceder al formulario y a los input del mismo

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll ('#formulario input');

//expresiones regulares
const expresiones_Regulares = {
    nombre: /^[a-zA-ZÀ-ÿ\s\-]+$/, //letras y espacios, con acentos.
    apellido1: /^[a-zA-ZÀ-ÿ\s\-]+$/,
    apellido2: /^[a-zA-ZÀ-ÿ\s\-]+$/,
    login: /^[a-zA-ZÀ-ÿ\s\-]+$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,8}$/,
}


//comprobar si los campos de los inputs están vacíos o no
const campos_form = {
    nombre: false,
    apellido1: false,
    apellido2: false,
    email: false,
    login:false,
    password: false
}


//validar los inputs formularios 

const validarFormulario = function(e) {
    switch (e.target.name) {
        case 'nombre':
            validamosInputs(expresiones_Regulares.nombre, e.target, 'nombre');
        break;
        case 'apellido1':
            validamosInputs(expresiones_Regulares.apellido1, e.target, 'apellido1');
        break;
        case 'apellido2':
            validamosInputs(expresiones_Regulares.apellido2, e.target, 'apellido2');
        break;
        case 'email':
            validamosInputs(expresiones_Regulares.email, e.target, 'email');
        break;
        case 'login':
                validamosInputs(expresiones_Regulares.login, e.target, 'login');
        break;
        case 'password':
           validamosInputs(expresiones_Regulares.password, e.target, 'password');
        break;
            
    }
}

//validamos los inputs

const validamosInputs = function (expresiones_Regulares, input, campos) {

    if (!input.value || input.value == '') {
        document.getElementById(`input_${campos}`).classList.add(`is-invalid`);
        document.getElementById(`input_${campos}`).classList.remove(`is-valid`);
        campos_form[campos] = false;
    } else if (expresiones_Regulares.test(input.value)) {
        document.getElementById(`input_${campos}`).classList.add(`is-valid`);
        document.getElementById(`input_${campos}`).classList.remove(`is-invalid`);
        campos_form[campos] = true;
    }
    else {
        document.getElementById(`input_${campos}`).classList.add(`is-invalid`);
        document.getElementById(`input_${campos}`).classList.remove(`is-valid`);
        campos_form[campos] = false;
    }
}




inputs.forEach(function(input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})



formulario.addEventListener ('submit', function(e) {
    e.preventDefault();

    if (campos_form.nombre && campos_form.apellido1 && campos_form.apellido2 && campos_form.email && campos_form.login && campos_form.password) {
        formulario.reset();

        document.getElementById('input_nombre').classList.remove('is-valid');
        document.getElementById('input_apellido1').classList.remove('is-valid');
        document.getElementById('input_apellido2').classList.remove('is-valid');
        document.getElementById('input_email').classList.remove('is-valid');
        document.getElementById('input_login').classList.remove('is-valid');
        document.getElementById('input_password').classList.remove('is-valid');

        campos_form["nombre"] = false;
        campos_form["apellido1"] = false;
        campos_form["apellido2"] = false;
        campos_form["email"] = false;
        campos_form["login"] = false;
        campos_form["password"] = false;

    } else {
        validamosInputs(expresiones_Regulares.nombre, document.getElementById('input_nombre'), 'nombre');
        validamosInputs(expresiones_Regulares.apellido1, document.getElementById('input_apellido1'), 'apellido1');
        validamosInputs(expresiones_Regulares.apellido2, document.getElementById('input_apellido2'), 'apellido2');
        validamosInputs(expresiones_Regulares.email, document.getElementById('input_email'), 'email');
        validamosInputs(expresiones_Regulares.login, document.getElementById('input_login'), 'login');
        validamosInputs(expresiones_Regulares.password, document.getElementById('input_password'), 'password');
        
    }
})