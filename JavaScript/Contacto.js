class CargaDatos {
    constructor (nombre,apellido,mail,mensaje){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.mensaje=mensaje;
    }
}
let Carga = [];
function envioDeFormulario(){
    //GUARDADO DE DATOS DEL ULTIMO CLIENTE INGRESADO.
    let nom = document.getElementById("IpNombre").value;
    let ape = document.getElementById("IpApellido").value; 
    let m = document.getElementById("IpMail").value;
    let msj = document.getElementById("IpMensaje").value;
    //VALIDACIÓN:
    if(nom.length == 0 || ape.length == 0 || m.length == 0 || msj.length == 0){
        console.log("entre");
        document.getElementById("alerta").innerText="Debe completar todos los campos obligatriamente.";
    }else{
        //SUBIDA AL LOCALSTORAGE:
        const ingreso = new CargaDatos (nom,ape,m,msj);
        Carga.push(ingreso);
        let CargaCliente = JSON.stringify(Carga);
        localStorage.setItem("Cliente",CargaCliente);
    }
    //QUE QUEDEN LOS INPUT VACÍOS:
    for (let i=0; i<4;i++){
        document.getElementsByTagName("input")[i].value="";
        document.getElementById("alerta").innerText=""
    }
    //ENVIARLO A LA TARJETA:
    let ObjetoRecuperado = [];
    ObjetoRecuperado = JSON.parse(localStorage.getItem("Cliente"));
    console.log (ObjetoRecuperado);
    for(i=0;i<ObjetoRecuperado.length;i++){
        /*document.getElementById("tarjeta").innerHTML= "<p>Nombre: "+ObjetoRecuperado[i].nombre+"</p>";
        document.getElementById("tarjeta").innerHTML= "<p>Apellido: "+ObjetoRecuperado[i].apellido+"</p>";
        document.getElementById("tarjeta").innerHTML= "<p>Mail: "+ObjetoRecuperado[i].mail+"</p>";
        */
        document.getElementById("tarjetaNombre").innerText = "Nombre: "+ ObjetoRecuperado[i].nombre;
        document.getElementById("tarjetaApellido").innerText = "Apellido: "+ ObjetoRecuperado[i].apellido;
        document.getElementById("tarjetaMail").innerText = "Mail: "+ ObjetoRecuperado[i].mail;
         
    } 
}
const enviarFormulario = document.getElementById("btn_enviar");
enviarFormulario.addEventListener("click", envioDeFormulario);
