//Obtener los datos del susuario
const getUsuario = (email) => {
    const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", manejador);
    xhr.open("GET", url);
    xhr.send();
 };

//Función de manejador
 function manejador(){
    if (this.readyState === 4 && this.status === 200){
        const datos = JSON.parse(this.response);
        console.log(datos);
        mostrarDatos(datos)
    }
}

//Mostrar datos de compra
function mostrarDatos(datos) {
    datos.forEach(el => {
        Swal.fire({
            title: "Compra Finalizada",
            imageUrl: "./assests/img/bolsa_regalo.png",
            html: `<p>Estimada(o) ${el.name}</p>Dirección: ${el.address.street}, ${el.address.suite}, ${el.address.city}, Zipcode ${el.address.zipcode}</p><p>Télefono ${el.phone}<\p>\n<p>Gracias por su compra, disfruta tus artículos y te esperamos pronto</p>`,    
            icon: "success",
            confirmButtonText: "Aceptar",
            background: "#ffd3c7",
        })
        contenedorCarrito.innerHTML = " ";
        
        actualizarStock()  
    });
    
    
}

   
