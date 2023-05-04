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
}
const enviarFormulario = document.getElementById("btn_enviar");
enviarFormulario.addEventListener("click", envioDeFormulario);
