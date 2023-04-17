let neto = 0;
let iva = 0;
let descuento = 0;
let total = 0;
function INGRESO_DATOS(){
    do{
        neto = prompt("Ingrese el valor neto del producto");
    }while(neto<=0);
    console.log("El valor neto es: " + neto);
    do{
        iva = prompt("Indeque que alicuota de IVA contiene: \n 1) 10.5% \n 2) 21% \n 3) 27%");
    }while(!(iva<0 || iva==1 || iva==2 || iva==3));
    console.log("La alicuota es: " + iva);
    do{
        descuento = prompt("Ingrese si cuenta con algun descuento");
    }while(descuento<0 || descuento>=100);
    console.log("Tiene un descuento de: " + descuento); 
}
INGRESO_DATOS();
if(descuento == 0){
    total = parseInt(neto) + parseInt(neto)*(parseInt(iva)/100);
    alert("El precio final es de: " + total);
}else{
    total = (parseInt(neto)- parseInt(descuento)) + parseInt(neto)*(parseInt(iva)/100);
    alert("El precio  final es de: " + total);
}


