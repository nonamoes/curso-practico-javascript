function CalcularMediaAritmetica(lista){
    // let sumaLista = 0;

    // for(let i=0; i<lista.length; i++){
    // sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const lista1 =[
    100,
    200,
    500,
    400000000,
  ];

const mitadLista1=parseInt(lista1.length/2);

// if(lista1 es par?){
//     // necesitamos dos elementos
//     // -> el promedio
//     // -> mediana
// } else{
//     //posicion mitadLista1 dentro de lista1
//     // ->mediana
// }



function esPar(numerito){
    if (numerito % 2 === 0){ //modulo se usa un %
        return true;
    }else{
        return false;
    }
}

let mediana;
if(esPar(lista1.length)){
    const elemento1 =lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2=CalcularMediaAritmetica([elemento1, elemento2,]);
    mediana=promedioElemento1y2;

    } else{
        mediana=lista1[mitadLista1];
    }