const inputTarjeta = document.getElementById('inputTarjeta');
const inputFecha = document.getElementById('inputFecha');
const inputCVV = document.getElementById('inputCVV');

const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCVV = "###";

/*arreglo guarda la posicion */

/*primer arreglo*/
let TarjetaNumero =[];
/*segundo arreglo*/
let FechaNumero =[];
/*tercer arreglo*/
let cvvNumero = [];

/*capturamos el numero de la tarjeta escuche cuando se oprime una tecla KEYDOWN*/
/*si oprimi el tab lo mando a return no haga nada*/ 
inputTarjeta.addEventListener("keydown",(e) => {
    if (e.key === "Tab") {
        return;
    }
    /*PREVENTDEFAULT detener un comportamiento por defecto...impide que el usuario ingrese datos que esta por fuera evento lo que la funcion tenga*/ 
    e.preventDefault();
   ingresoDatos(mascaraNumero, e.key, TarjetaNumero);
    /*lo que el usuario ingresa va para el arreglo*/
    inputTarjeta.value = TarjetaNumero.join('');
});

inputFecha.addEventListener("keydown", (e) => {
    if (e.key === "Tab"){
        return;
    }
    e.preventDefault();
   ingresoDatos(mascaraFecha, e.key, FechaNumero);
    inputFecha.value = FechaNumero.join('');
});

inputCVV.addEventListener("keydown", (e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();
   ingresoDatos(mascaraCVV, e.key, cvvNumero);
    inputCVV.value = cvvNumero.join('');
});

function ingresoDatos(mascara, key, arreglo){
    let numeros = ["0", "1", "2", "3","4", "5", "6", "7", "8","9"];

    /*validamos si el usuario esta oprimiendo la barra de retroceso backspace borra a la izquierda y que si el arreglo es mayor a 0*/
    if ( key === "backspace" && arreglo.length > 0 ) {
        arreglo.pop();   /*borre lo ultimo con pop*/
        return;
    }
    /*si tecla incluye numeros mandelo para el arreglo y si aparte de arreglo mas el utlimo que digito es inferior a la mascara podemos seguir*/
    if (numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        if(mascara[arreglo.length] === "-" || mascara[arreglo.length] === "/"){/*busco 4 numeros pongo - || o busco 2 numeros ponga / esta llamando a la mascara de la fecha*/
        arreglo.push(mascara[arreglo.length],key);/*encuentra entonces agrega 4546-*/
        }else{
            arreglo.push(key);/*agrega lo que el usuario va escribiendo*/
        }
    }
};