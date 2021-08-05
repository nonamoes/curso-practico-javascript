//Helpers o Utilies

function esPar(numerito){
    return (numerito % 2 === 0);
}

function CalcularMediaAritmetica(lista){
   
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//mediana General

const salariosMex = mexico.map(
    function(personita){
        return personita.salary;
    }
);

//Ordenar nuestros salarios
const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

// function esPar(numerito){
//     if(numerito %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }



function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = CalcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    }else{
        const personitaMitad =lista[mitad];
        return personitaMitad;
    }
}


const medianaGeneralMex = medianaSalarios(salariosMexSorted)

//Mediana del top 10%

//este metodo recibe dos argumentos
const spliceStart = (salariosMexSorted.length*90)/100;
const spliceCount = salariosMexSorted.length-spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount,
);  

const medianaTop10Mex = medianaSalarios(salariosMexTop10);


console.log( 
    {
        medianaGeneralMex,
        medianaTop10Mex,
    }
);