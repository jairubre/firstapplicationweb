/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



class mensaje{
        //Ponemmos el _ para que los atributos de la clase sean privados 
        
        //No hace falta inicializar los atrubutis con definirlos en el constructor ya los reconoce
        constructor(texto,fecha){
            this.texto=texto;
            this.fecha=fecha;
        }
        
        get gettexto(){
            return this.texto;
        }
        
        
        
     
        get getfecha(){
            //Tenemos que formatear el formato de la fecha para poder mostar por pantalla,
            //Porque si no sale un número muy raro
            return this.fecha;
        }
}

export{mensaje}

