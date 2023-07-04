/** Programa para calculae el área de un rectangulo */
//VAR es de ambito global
/*
var base = 10;
var altura = 20;
var figura = 'Triángulo';
var area = base * altura ;*/

/*
{
    //LET es ambito de bloque {}
    let base = 10;
    let altura = 20;
    let area = base * altura;
    {        
        console.log(area);
    }
    altura = 15;
    area = base * altura;
    console.log(area);
}
*/


{
    {
        //CONST es ambito de bloque {}
        //y no se puede cambiar
        const base = 10;
        const altura = 20;
        const area = base * altura;

        console.log(area);
    }
    console.log(area);
}


//if(figura == 'Rectangulo'){
//    console.log(area);
//}

//puedo usar una variable ante de declararla: joisting
//var area;
