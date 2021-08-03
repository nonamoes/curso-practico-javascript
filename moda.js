const lista1=[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count ={};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1; //incrementa lo mismo mas 1     
        }else{
            lista1Count[elemento] =1;
        }
        
    }
);

const lista1Array = Object.entries(lista1Count).sort(// OBJECT.entries = se manda como argumento el objeto que queremos transformar a un array
    function(elementoA, elementoB){
       return elementoA[1] - elementoB[1]; //Aqui si valor acumulaod es  mayor a numero , si llegan a ser iguales resta va a ser cero, entonces se van poniendo ordenados
    }
);

const moda= lista1Array[lista1Array.length-1];
