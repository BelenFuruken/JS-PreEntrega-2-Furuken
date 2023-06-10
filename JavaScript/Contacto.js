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
    let nom = document.getElementById("IpNombre").value;
    let ape = document.getElementById("IpApellido").value; 
    let m = document.getElementById("IpMail").value;
    let msj = document.getElementById("IpMensaje").value;
    
    //VALIDACIÓN:
    if(nom.length == 0 || ape.length == 0 || m.length == 0 || msj.length == 0){
        alert("Debe completar todos los campos.");
        return;
    }
    toggleLoadingContainer();
    //QUE QUEDEN LOS INPUT VACÍOS:
    setTimeout(()=>{
        for (let i=0; i<4;i++){
            document.getElementsByTagName("input")[i].value="";
        }
    }, 2000);
    
}

function toggleLoadingContainer() {
    const loadingContainer = document.getElementById("loadingMessage");
    loadingContainer.classList.remove("visually-hidden");
    setTimeout(()=>{
        loadingContainer.classList.add("visually-hidden");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se guardo correctamente!',
            showConfirmButton: false,
            timer: 1500
        })
    }, 2000);
}
//Carga de tabla con los administradores cargados en la Api
let datosTabla=document.getElementById("cargaDatosTabla");
datosTabla.innerHTML="";
function tablaAdministradores(){
    fetch("./../data/myApi.json")
    .then((res) => (res).json())
    .then((info) => {
        info.forEach((element) => {
        let agregar=document.createElement("tr");
        agregar.innerHTML=
        `<th scope="row">${element.id}</th>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>`;
        datosTabla.append(agregar);
        });
    })
}

tablaAdministradores();
document.getElementById("btn_enviar").addEventListener("click", envioDeFormulario);
