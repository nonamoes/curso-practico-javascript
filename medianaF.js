function CalcularMediaAritmetica(listaO){
   
    const sumaLista = listaO.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;

        }
    );

    const promedioLista = sumaLista / listaO.length;
    return promedioLista;
}

function esPar(numerito){
    if (numerito % 2 === 0){ //modulo se usa un %
        return true;
    }else{
        return false;
    }
}

function CalcularMediana(lista1){
    
    //ORDENAR LISTA CON SORT
    const listaO= lista1.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    });
    // FIN SORT

    const mitadLista1=parseInt(listaO.length/2);

    let mediana;
if(esPar(listaO.length)){
    const elemento1 =listaO[mitadLista1-1];
    const elemento2 = listaO[mitadLista1];
    const promedioElemento1y2=CalcularMediaAritmetica([elemento1, elemento2,]);
    mediana=promedioElemento1y2;

    } else{
        mediana=listaO[mitadLista1];
    };

    return mediana;
}