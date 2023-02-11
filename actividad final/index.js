//crear las variables para acceder al formulario y los inpust del mismo y as expresiones regulares

const formu = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//expresiones  a poder usar con los impust
const expresiones_Regulares = {
    nombre: /^[a-zA-ZÀ-ÿ\s\-]+$/, //letras y espacios, con acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^.{1,8}$/,
}



//validar los inpusts formularios 

const validarForm = function(e) {
   switch (e.target.name) {
        case "nombre":
            validamosCampos(expresiones_Regulares.nombre, e.target, 'nombre');
        break;
        case "email":
            validamosCampos(expresiones_Regulares.email, e.target, 'email');
        break;
        case "clave":
            validamosCampos(expresiones_Regulares.clave, e.target, 'clave');
            validamosClave2();
        break;
        case "clave2":
            validamosClave2();
        break;
   }
}

//funcion para validar los inputs con las expresiones regulares usando una misma funcion que varia segun la seleccion del campo

const validamosCampos = function (expresiones_Regulares, input, campos) {
    if (expresiones_Regulares.test(input.value)){
        document.getElementById(`campo_${campos}`).classList.remove('formulario__campos-mal');
        document.getElementById(`campo_${campos}`).classList.add('formulario__campos-ok');
        document.querySelector(`#campo_${campos} .formulario_validacion`).src='./imagenes/success-icon.svg';
        document.querySelector(`#campo_${campos} .formulario__error`).classList.remove('formulario__error-activo');
        campos_form[campos] = true;
    } else {
        document.getElementById(`campo_${campos}`).classList.add('formulario__campos-mal');
        document.getElementById(`campo_${campos}`).classList.remove('formulario__campos-ok');
        document.querySelector(`#campo_${campos} .formulario_validacion`).src='./imagenes/error-icon.svg';
        document.querySelector(`#campo_${campos} .formulario__error`).classList.add('formulario__error-activo');
        campos_form[campos] = false;
    }
}

//comprobar que las contraseñas coinciden

const validamosClave2  = function() {
    const inputClave1 = document.getElementById('clave');
    const inputClave2 = document.getElementById('clave2');

    if (inputClave1.value !== inputClave2.value) {
        document.getElementById(`campo_clave2`).classList.add('formulario__campos-mal');
        document.getElementById(`campo_clave2`).classList.remove('formulario__campos-ok');
        document.querySelector(`#campo_clave2 .formulario_validacion`).src='./imagenes/error-icon.svg';
        document.querySelector(`#campo_clave2 .formulario__error`).classList.add('formulario__error-activo');
        campos_form['clave'] = false;
    } else {
        document.getElementById(`campo_clave2`).classList.remove('formulario__campos-mal');
        document.getElementById(`campo_clave2`).classList.add('formulario__campos-ok');
        document.querySelector(`#campo_clave2 .formulario_validacion`).src='./imagenes/success-icon.svg';
        document.querySelector(`#campo_clave2 .formulario__error`).classList.remove('formulario__error-activo');
        campos_form['clave'] = true;
    }
}




//comprobar cuando se escriba en el formluario y cuadno ya no se escriba
inputs.forEach( function(input) {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

//campos validos o no

const campos_form = {
    nombre: formu.nombre.value,
    email: formu.email.value,
    clave: formu.clave.value,
    clave2: formu.clave2.value
}


formulario.addEventListener('submit', function(e) {
        e.preventDefault();  //esto lo hago para que no se envie el formulario hasta que esten todos los inputs rellenos, queda bloqueado
    

    if (campos_form.nombre && campos_form.email && campos_form.clave && campos_form.clave2 ) {
         formulario.reset();
         alert('La inscription ha sido rellena correctamentee');
    } else {
        alert('completa los campos');
       
    }
        
    
});
  



