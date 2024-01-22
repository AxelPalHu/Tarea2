const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const caracteristicas = {
    mainModelo: /^[0-9]{1,6}$/,
    mainProducto: /^.{4,40}$/,
    mainDetalle: /^.{10,100}$/,
    maintPeso: /^[0-9.]{1,6}$/,
    mainMaterial: /^.{1,15}$/,
    maintStock: /^[0-9]{1,6}$/
}

const detalles = {
    mainProducto: false,
    mainModelo: false,
    mainProducto: false,
    mainDetalle: false,
    mainPeso: false,
    mainMaterial: false,
    mainStock: false
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add('is-valid');
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        detalles[detalles] = true;
    }
    else{
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-ivalid');
        detalles[detalles] = false;
    }
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "inputProducto":
              validarCampo(caracteristicas.inputProducto,e.target,'inputProducto');
        break;
        case "inputModelo":
            validarCampo(caracteristicas.inputModelo,e.target,'inputModelo');
        break;
        case "inputProducto":
        validarCampo(caracteristicas.inputProducto,e.target,'inputProducto');
        break;
        case "inputDetalle":
            validarCampo(caracteristicas.inputDetalle,e.target,'inputDetalle');
        break;
        case "inputPeso":
            validarCampo(caracteristicas.inputPeso,e.target,'inputPeso');
        break;
        case "inputMaterial":
            validarCampo(caracteristicas.inputMaterial,e.target,'inputMaterial');
        break;
        case "inputStock":
            validarCampo(caracteristicas.inputStock,e.target,'inputStock');
        break; 
        case "inputTalla":
            if(e.target.value !==''){
                document.getElementById('inputTalla').classList.remove('is-invalid');
                document.getElementById('inputTalla').classList.add('is-valid');
             
            } else {
                document.getElementById('inputTalla').classList.remove('is-valid');
                document.getElementById('inputTalla').classList.add('is-invalid');
                
            }
         break;  
         case "inputImagen":
            if(e.target.value !==''){
                document.getElementById('inputImagen').classList.remove('is-invalid');
                document.getElementById('inputImagen').classList.add('is-valid');
             
            } else {
                document.getElementById('inputImagen').classList.remove('is-valid');
                document.getElementById('inputImagen').classList.add('is-invalid');
                
            }
         break; 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

selects.forEach((select) => {
    console.log(select);
    select.addEventListener('blur' , validarFormulario);
});
