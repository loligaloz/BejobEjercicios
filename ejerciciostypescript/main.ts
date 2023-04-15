import { Persona } from './persona';
import { direccion } from './direccion';
import { mails } from './mail';
import { telefonos } from './telefonos';

const primeraDireccionEzequiel = new direccion (
    "Calle San Juan",
    28,
    2,
    "B",
    46005,
    "Valencia",
    "Valencia"
)

const segundaDireccionEzequiel = new direccion (
    "Avenida Los Matorrales",
    4,
    1,
    "A",
    28015,
    "Madrid",
    "Madrid"
)

const mailEzequiel = new mails (
    "personal",
    "ezequiel.gonzalez@gmail.com",
)

const telefonoFijoEzequiel = new telefonos (
    "fijo",
    921456789,
)

const telefonoMovilEzequiel = new telefonos (
    "movil",
    695288878
)

const datosEzequiel = new Persona (
    "Ezequiel",
    "Gonzalez Arribas",
    25,
    "00484164W",
    new Date (1998, 15, 4),
    "verde",
    "hombre",
    [primeraDireccionEzequiel, segundaDireccionEzequiel],
    [mailEzequiel],
    [telefonoFijoEzequiel, telefonoMovilEzequiel],
    "Estudia y vive en la segunda residencia"
)

const primeraDireccionMarta = new direccion (
    "Calle Maria Magdalena",
    18,
    5,
    "C",
    28005,
    "Madrid",
    "Madrid"
)

const segundaDireccionMarta = new direccion (
    "Plaza Mayor",
    1,
    1,
    "A",
    40004,
    "Segovia",
    "Segovia"
)

const mailMarta = new mails (
    "personal",
    "marta.alvarez@gmail.com"
)

const telefonoMovilMarta = new telefonos (
    "movil",
    653473615
)


const  datosMarta = new Persona (
    "Marta",
    "Alvarez Luengo",
    35,
    "07586541S",
    new Date (1988, 10, 15),
    "blanco",
    "mujer",
    [primeraDireccionMarta, segundaDireccionMarta],
    [mailMarta],
    [telefonoMovilMarta],
    "Esta trabjando en la primera residencia"
)

const primeraDireccionAzucena = new direccion (
    "Calle Santa Maria",
    15,
    3,
    "Izquierda",
    40313,
    "Torreadrada",
    "Segovia"
)

const mailAzucena = new mails (
    "personal",
    "azucena.martinez@hotmail.com"
)

const telefonoMovilAzucenaPersona = new telefonos (
    "movil",
    698741352
)

const telefonoMovilAzucenaTrabajo = new telefonos (
    "movil",
    724587956
)


const datosAzucena = new Persona (
    "Azucena",
    "Martinez",
    35,
    "07411191R",
    new Date (1988, 10, 25),
    "rojo",
    "mujer",
    [primeraDireccionAzucena],
    [mailAzucena],
    [telefonoMovilAzucenaPersona, telefonoMovilAzucenaTrabajo],
    "Esta trabajando en la segunda residencia"
)

console.log("Datos Agenda antes de cambios");
console.log(datosEzequiel);
console.log(datosMarta);
console.log(datosAzucena);
console.log(datosAzucena);

const agendaUsuarios: Array<Persona> = new Array(datosEzequiel, datosMarta, datosAzucena);

const dniBuscar: string = "07411191R";

const personaEditada: Persona = agendaUsuarios.find(persona => persona.dni === dniBuscar) as Persona;

const nuevoMail = new mails (
    "personal",
    "martinez.azu.85@gmail.com"
)

const nuevaDireccion = new direccion (
    "Avenida la riba",
    5,
    1,
    "A",
    40450,
    "Nava de la Asuncion",
    "Segovia"
)

const nuevoTelefono = new telefonos (
    "fijo",
    912583247
)


personaEditada.añadimosNuevaDireccion(nuevaDireccion);
personaEditada.añadimosNuevoMail(nuevoMail);
personaEditada.añadimosNuevoTelefono(nuevoTelefono);


console.log("Datos Agenda despues de cambios");
console.log(datosEzequiel);
console.log(datosMarta);
console.log(datosAzucena);
