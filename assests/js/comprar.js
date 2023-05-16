// Ver Carrito de compras
const verCarrito = document.getElementById("img-carrito")
verCarrito.addEventListener("click", () => {
      desplegarCarrito()
  
})

// Desplegar Elementos del carrito
const desplegarCarrito = () => {
    if (carrito.length !== 0) {
        const contenedorCarrito = document.getElementById("contenedorCarrito")
        contenedorCarrito.innerHTML = " "
        contenedorCarrito.style.display = "contents"
        const carritoHeader = document.createElement("div");
        carritoHeader.innerHTML = `<h3>Carrito de compras</h3>`
        contenedorCarrito.appendChild(carritoHeader)
        // Botón cerrar carrito
        const carritoCerrar = document.createElement("button")
        carritoCerrar.className = "btn-cierre"
        carritoCerrar.innerText = "Cerrar Carrito";
        carritoCerrar.addEventListener("click", () => {
            contenedorCarrito.style.display = "none"
        })
        carritoHeader.appendChild(carritoCerrar)
        desplegarProductos()
    } else {
        contenedorCarrito.innerHTML = " ";
        textoMsj = `Su carrito está vacio`;
        fondoMsj = "linear-gradient(to right, #ff5f6d, #ffc371)";
        msjCarrito(textoMsj,fondoMsj)
    }
    
}

// Desplegar Productos del carrito
const desplegarProductos = () => {
    carrito.forEach(({id, nombre, precio, cantidad}) => {
        const carritoProd = document.createElement("div");
        carritoProd.classList.add("col-xl-3,col-md-6,col-xs-12");
        carritoProd.className = "productosCarrito"
        subtotal = cantidad * precio
        carritoProd.innerHTML = `<div>
                                <img src ="./assests/img/${id}.png" class ="card-carrito-img" alt ="${nombre}">
                                <span class = "carrito-texto">${nombre}</span> 
                                <span class = "carrito-texto">${cantidad} piezas</span>
                                <span class ="carrito-texto">Precio Unitario:$${precio} pesos</span> 
                                <span class = "carrito-texto">SubTotal:$${subtotal} pesos</span> 
                                <button class = "btn-prod" id ="eliminar${id}">Eliminar</button>
                            </div>`
        contenedorCarrito.appendChild(carritoProd)
        const btnEliminar = document.getElementById(`eliminar${id}`)
        btnEliminar.addEventListener("click", (e) => {
            e.preventDefault()
            let buscarId = carrito.find((el) => el.id)
            carrito = carrito.filter((carritoId) => {
                return carritoId !== buscarId;
            })
            textoMsj = `${nombre} fue eliminado del carrito`;
            fondoMsj = "linear-gradient(to right, #ff5f6d, #ffc371)";
            msjCarrito(textoMsj, fondoMsj)
            carritoContar()
            desplegarCarrito()
            savelocal()
        })
})

    // Calcular Total
    const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    const totalCarrito = document.createElement("div");
    totalCarrito.innerHTML = `Total a pagar: $${total} pesos`
    totalCarrito.className = "carrito-texto-total"
    contenedorCarrito.appendChild(totalCarrito)

    // Boton para Finalizar compra
    const finalizar = document.createElement("button")
    finalizar.className = "btn-termino"
    finalizar.innerText = "Finalizar Compra"
    finalizar.addEventListener("click", () => {
        finalizarCompra()
    })
    contenedorCarrito.appendChild(finalizar)
}


   // Finalizar compra
finalizarCompra = () => {
    // Capturar los datos de usuario de acuerdo a https://jsonplaceholder.typicode.com/users
        Swal.fire({
            title: "Ingresar",
            html: `<input type ="email" id ="correo" class ="swal2-input" placeholder="email">`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Salir',
        }).then((result) => {
            if (result.isConfirmed) {
                const email = document.getElementById("correo").value
                if (email != null && email != "") {
                    // Funcion para conectarse a la API
                    getUsuario(email)
                } else {
                    textoMsj = `Datos no validos, vuelva a intentar`;
                    fondoMsj = "linear-gradient(to right, #ff5f6d, #ffc371)";
                      msjCarrito(textoMsj, fondoMsj)
                  
                }  
            }
         })
    }
         


// Borrar Carrito
const borrarCarrito = () => {
    cantidadCarrito.style.display = "none"
    carrito = []
}

//Mensajes para agregar, borrar y actualizar productos en el carrito
const msjCarrito = (texto,fondo) => {
    Toastify({
        text: texto,
        duration: 2000,
        gravity: "top",
        positition: "right",
        style: {
            background: fondo
        }
    }).showToast();
}

