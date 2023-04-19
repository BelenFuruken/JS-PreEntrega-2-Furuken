/*let neto = 0;
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
*/

class ingresos{
    constructor(nombre, neto){
        this.nombre = nombre.toUpperCase();
        this.pNeto = neto;
        this.pFinal = parseInt(neto) + parseInt(neto) * 0.21;
    }
}
let totalIngresos =[];
let respuesta = "SI";
do {
    let nombre = prompt("Nombre del producto");
    let neto = prompt("Precio del producto");
    const nuevoIngreso = new ingresos(nombre,neto);
    totalIngresos.push(nuevoIngreso);
    respuesta = prompt("Quiere seguir cargando? SI/NO");
}while(respuesta.toUpperCase() =="SI");
//LA RESOUESTA QUEDO EN "NO"
console.log("Se ingresaron " +totalIngresos.length+ " productos.");
respuesta = prompt("Quiere ver los datos de los productos ingresados? SI/NO");
if (respuesta.toUpperCase() == "SI"){
    for(const nuevoIngreso of totalIngresos){
        console.log(nuevoIngreso);
    }
}
respuesta = "NO";
respuesta = prompt("Desea buscar algún producto ingresado? SI/NO");
if( respuesta.toUpperCase() =="SI"){
    let productoBuscado = prompt("Qué producto quiere buscar?");
    // console.log(productoBuscado);
    const resultado = totalIngresos.find((tt) => tt.nombre.includes(productoBuscado.toUpperCase()));
    //console.log(resultado);
    if (resultado){
        console.log("Producto: " + resultado.nombre + "\nPrecio neto: $" + resultado.pNeto + "\nPrecio final (con IVA 21%): $" + resultado.pFinal);
    }else{
        console.log("No esta ingresado ese producto");
    }
}


