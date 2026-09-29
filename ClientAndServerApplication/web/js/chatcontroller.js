/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//Importamos la clase de mensaje para que la pueda usar y se combierte en un modulo 
import {mensaje} from './mensaje.js'

//Array de javaScript 
        var mensajes = new Array();
//mensasjes es la colección de mensajes a mostrrar

function actualizarMensajes() {
    //alert("Estas dentro de actualizar");
    //ordenar los mensajes de mas recciente a mas antiguo



    //Sirve para limpiar el ul cada vez q   ue hacemos una interración con el bucle
    let  msglist = document.getElementById("msglist");
    //poenemos nodo padre y va borrando mientras tenga hijos
    while (msglist.firstChild) {
        msglist.removeChild(msglist.firstChild);
    }
    //Le recomendamos al cliente que lo 
    //mensajes.reverse();
    for (var i = 0; i < mensajes.length; i++) {
        //document.getElementById("msglist").textContent="<li>"+mensajes[i].gettexto+"</li>";
        //Nos creamos un elemento li
        let li = document.createElement("li");
        //El añadimos el contenido del objeto
        // Formato corto estándar (ej: "25/9/2026")
        let contenido = document.createTextNode(mensajes[i].gettexto + " " + 
           new Date(mensajes[i].getfecha).toLocaleTimeString("es-ES", {hour: "2-digit", minute: "2-digit"}));

        li.appendChild(contenido);

        //Lo añadimos al textarea
        msglist.insertBefore(li, null);
    }

    /*
     //Este método da la vuelta al array
     var DelReves=mensajes.reverse();
     for(let msg of DelReves){
     //Nos creamos un documento li para poder escribir lo q tenemos guardado en el array
     let li = document.createElement("li");
     li.textContent=msg.gettexto +" "+ msg.getfecha;
     lstUl.appendChild(li);
     
     }*/

    // En cada interracion añadimos al elemento <div> contenido
    //cosnsistente en el texto del mensaje, dentro de un elemento <li>

}




function enviarMensaje() {
    //Obetenmos el mensaje 
    let texto = document.getElementById("msgText").value;

    // lo añadimos a la coleccion de mensajes
    // mensajes.push(new mensaje(texto, Date.now()));
    //Array de javi de clase
    mensajes.push(new mensaje(texto, new Date()));
    //HAcemos un atributo con el text area y lo limpiamos con el value
    let escritura = document.getElementById("msgText");
    //Lo usamos para limpiar la escritura cada vez q le damos al boton de enviar
    escritura.value = "";
    escritura.focus();
    /*for (let msg of mensajes) {
     //alert("Estas dentro del bucle");
     //console.log(msg.texto + "  " + msg.fecha);
     
     }*/

    actualizarMensajes();
}
//Asociamos un listenner, click es la funcion que usa para el click del boton
document.getElementById("sendbutton").addEventListener('click', enviarMensaje);

//DOMContentloaded Cada vez q cargar o actualizas la pagina salta esta acción y llama a la función
document.addEventListener("DOMContentLoaded", actualizarMensajes());

