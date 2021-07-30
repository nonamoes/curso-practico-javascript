// const precioOriginal = 120;
// const descuento=18;


// const porcentajePrecioConDescuento = 100- descuento;
// const precioConDescuento = (precioOriginal*porcentajePrecioConDescuento)/100;

//console.log("El precio original es " +precioOriginal);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100- descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function calcularDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDesc = document.getElementById("InputDesc");
    const priceDesc = inputDesc.value;

    const precioConDescuento =calcularPrecioConDescuento(priceValue, priceDesc);

    const resultP=document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento ;

}


const coupons =[
    "CuponA",
    "CuponB",
    "CuponC",
]

function calcularCoupon(){
    const inputPrice2 = document.getElementById("InputPrice2");
    const price2Value = inputPrice2.value;

    const InputCoupon =document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;

    let descuento;

    switch(couponValue){
        case "CuponA":
            descuento =15;
        break;
        case "CuponB":
            descuento=30;
        break;
        case "CuponC":
            descuento =25;
        break;
       // default: descuento = 0;
       default: alert("El cupon es invalido, tu total sería: $" +price2Value);
    }

    const precioConDescuento = calcularPrecioConDescuento(price2Value, descuento);
    const resultC=document.getElementById("ResultC");
    resultC.innerText ="El precio con descuento son: $"+ precioConDescuento;

}