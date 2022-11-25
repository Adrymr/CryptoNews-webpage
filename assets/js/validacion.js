const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const campos = {
    correo : false,
}

const expresiones =
{
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,//Lleva una forma específica 
}

const validarFormulario = (e) => {
    switch (e.target.name){
    case "txtEmail":
        validarNombre(expresiones.correo, e.target, 'correo');
    break;
    
    } 

}