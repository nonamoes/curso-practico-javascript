//Código del Cuadrado
console.group("Cuadrado"); //agrupa en consola 
const ladoCuadrado=5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

const perimetroCuadrado =ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm^2");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado+"cm^3");
console.groupEnd();

//Código del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "los lados del triángulo miden: "
    +ladoTriangulo1
    +"cm, "
    +ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm"
);

console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del cuadrado es: "+perimetroTriangulo+"cm^2");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: "+areaTriangulo+"cm^3");

console.groupEnd();

//Código del Circulo
console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: "+radioCirculo+"cm"); 

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: "+diametroCirculo+"cm"); 

//PI
//primera forma const PI=3.1415; 
const PI= Math.PI;
console.log("PI es: "+PI+"cm"); 

//Circunferencia (Perimetro)
const perimetroCirculo= diametroCirculo * PI;
console.log("El perimetro del círculo es: "+perimetroCirculo+"cm"); 


//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI; 
console.log("El area del círculo es: "+areaCirculo+"cm"); 

console.groupEnd();


