//Código del Cuadrado
console.group("Cuadrado"); //agrupa en consola 


function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
} 
console.groupEnd();

//Código del Triangulo
console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base *altura)/2;
}

console.groupEnd();

//Código del Circulo
console.group("Círculo");

//Diámetro
function diametroCirculo(radio){
    return radio *2;
} 

//PI
//primera forma const PI=3.1415; 
const PI= Math.PI;
console.log("PI es: "+PI+"cm"); 

//Circunferencia (Perimetro)
function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}


//Area
function areaCirculo(radio){
    return (radio * radio )*PI
}
console.groupEnd();


//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value; //solo obtengo el valor en el html de mi label

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value; //solo obtengo el valor en el html de mi label

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value1= Number(input.value);

    const input2 = document.getElementById("InputTriangulo1");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTriangulo2");
    const value3= Number(input3.value);

    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo2");
    const value1 = Number(input.value);

    const input2 = document.getElementById("InputTriangulo3");
    const value2 = Number(input2.value);

    const areaT= areaTriangulo(value1, value2);
    alert(areaT);
}

function calcularPerimetroCirculo(){
    const input =document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroC= perimetroCirculo(value);
    alert(perimetroC);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaC= areaCirculo(value);
    alert(areaC);
}

//TRiangulo Isoseles

function trianguloIso(lado1, lado2, base){
    if(lado1===lado2){
       const altura = Math.sqrt((lado1*lado2) - (base/2)*(base/2));
       //Math.sqrt(lado1*2 - (base*2/ 4));
        return altura;
    }
    else{
      alert("los lados 1 y 2 no son iguales, favor de colocarlos nuevamente porfavor :3");
    } 
}

    // return (base *altura)/2;

function calcularTrianguloIso(){
    const input1 =document.getElementById("InputTrianguloIso1");
    const value1 = Number(input1.value);

    const input2 =document.getElementById("InputTrianguloIso2");
    const value2 = Number(input2.value);

    const input3 =document.getElementById("InputTrianguloIso3");
    const value3 = Number(input3.value);
    const iso= trianguloIso(value1,value2,value3);
    alert(iso);

}