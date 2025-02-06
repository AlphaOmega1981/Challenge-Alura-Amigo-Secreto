// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigoSecreto = [];
let ammigoSeleccionado = '';
let maximoLista = 0;
let listado = document.querySelector('#listaAmigos'); // se relaciona la lista html con el JS
    
function agregarAmigo() {
    let nombreIngresado = document.getElementById('amigo').value; //Secaptura el nombre ingresado
    if(/^\d*$/.test(nombreIngresado)){          //se valida que el valor ingresado sea un string
        alert('Nombre no válido');
    }else{
        listaAmigoSecreto.push(nombreIngresado);        //se adiciona a la lista para el sorteo
        document.querySelector('#amigo').value = '';    //se limpia la caja
        listado.innerHTML+=`<li>${nombreIngresado}</li>`    //se adiciona el nombre ingresado a la lista para visualizarlo
    }
    return;
}

function sortearAmigo() {
    maximoLista = listaAmigoSecreto.length;
    
    if(maximoLista>0){
        let ammigoSeleccionado = Math.floor(Math.random()*maximoLista);     //se genera aleatoriamente el número
        ammigoSeleccionado = listaAmigoSecreto[ammigoSeleccionado];         //se recupera el nombre de la lista
        let resultadoAmigo = document.querySelector('#resultado');
        resultadoAmigo.innerHTML = `el amigo secreto sorteado es: ${ammigoSeleccionado}`; //se visualiza el amigo secreto
        listado.innerHTML = "";             //se borra las lista insertada en el HTML
        listaAmigoSecreto = [];             //se borra la lista de nombres
    }else{
        alert('Lista de amigos vacía, introduzca nombres de amigos');   //se lanza una alerta si la lista está vacía
    }
    
    return;
}

