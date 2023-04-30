/* Constructor de productos */
class Producto {
    constructor(id, nombre, precio, descripcion, categoria, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
        }
}
//Definición de Productos
const maquillaje = new Producto("R01","Maquillaje", 205, "Base de Maquillaje, cobertura de larga duración", "Rostro", 25);
const desmaquillante = new Producto("R02","Desmaquillante", 160, "Removedor de maquillaje bifásico para ojos y rostro", "Rostro", 15);
const hidratante = new Producto("R03","Hidratante", 258, "Hidratante facial con ácido hialurónico", "Rostro", 18);
const rubor = new Producto("R04","Rubor", 137, " Rubor en polvo compacto de textura suave", "Rostro", 4);
const corrector = new Producto("R05","Corrector", 96, " Corrector de cobertura alta, textura cremosa", "Rostro", 8);
const fijador = new Producto("R06","Fijador", 219, " Fijador de Maquillaje Matificante", "Rostro", 3);
const iluminador = new Producto("R07","Iluminador", 55, "Iluminador compacto de fácil aplicación y difuminado", "Rostro", 3);
const brochas = new Producto("R08","Set de brochas", 400, "Set de 14 brochas para ojos y cara.", "Rostro", 5);
const labial = new Producto("L01", "Labial", 55, "Labial en barra con fórmula cremosa y acabado mate", "Labios", 10);
const brilloLabial = new Producto("L02","Brillo Labial", 75, "Brillo de labios con color", "Labios", 2);
const delineador = new Producto("L03","Delineador Labial", 22, "Delineador Labial cremoso con un acabado de cobertura total", "Labios", 10);
const humectante = new Producto("L04","Humectante Labial", 30, "Labial orgánico con  bálsamo de cacao", "Labios", 5);
const sombras = new Producto("O01","Set de sombras", 238, "Paleta de sombras, con 18 tonos neutros mezclables en acabados mate", "Ojos", 8);
const mascaraPestañas = new Producto("O02","Mascara para pestañas", 169, "Máscara para pestañas, resistente al agua, máximo volumen ", "Ojos", 15);
const delineadorOjos = new Producto("O03","Delineador Ojos", 120, "Delineador de Ojos, lápiz fino,  ", "Ojos", 15);

/*Array de productos*/
const productos = [maquillaje, desmaquillante, hidratante, rubor, corrector, fijador, iluminador, brochas, labial, brilloLabial, delineador, humectante, sombras, mascaraPestañas, delineadorOjos];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0


//Ver Carrito de compras
const verCarrito = document.getElementById("img-carrito")
verCarrito.addEventListener("click", () => {
    desplegarCarrito()
}     
)


//Agregar Carrito
const agregarCarrito = (ObjetoProd) => {
    carrito.push(ObjetoProd)
    savelocal()
 
}

//Desplegar Elementso del carrito
const desplegarCarrito = () =>{
const contenedorCarrito = document.getElementById("contenedorCarrito")
    contenedorCarrito.innerHTML =" "
    contenedorCarrito.style.display = "contents"
    const carritoHeader = document.createElement("div");
    carritoHeader.innerHTML = `<h3>Carrito de compras</h3>`
    contenedorCarrito.appendChild(carritoHeader)
     //Botón cerrar carrito
    const carritoCerrar = document.createElement("button")
    carritoCerrar.className = "btn-cierre"
    carritoCerrar.innerText = "Cerrar Carrito";
    carritoCerrar.addEventListener("click", () => {
        contenedorCarrito.style.display ="none"
    })
    carritoHeader.appendChild(carritoCerrar)
    desplegarProductos()
}

//Desplegar Productos del carrito
const desplegarProductos = () =>{
carrito.forEach(({id,nombre,precio,cantidad}) => {
    const carritoProd = document.createElement("div");
    carritoProd.className ="productosCarrito"
    subtotal = cantidad*precio
    carritoProd.innerHTML = `<div>
                                <img src ="./assests/img/${id}.png" class ="card-carrito-img" alt ="${nombre}">
                                <span class = "carrito-texto">${nombre}</span> 
                                <span class = "carrito-texto">${cantidad} piezas</span>
                                <span class ="carrito-texto">Precio Unitario:$${precio} pesos</span> 
                                <span class = "carrito-texto">SubTotal:$${subtotal} pesos</span> 
                                <button class = "btn" id ="eliminar${id}">Eliminar</button>
                            </div>`
    contenedorCarrito.appendChild(carritoProd)
    const btnEliminar = document.getElementById(`eliminar${id}`)
    btnEliminar.addEventListener("click", (e) => {
        e.preventDefault()
        let buscarId = carrito.find((el) => el.id)
        carrito = carrito.filter((carritoId) => {
            return carritoId !== buscarId;
        })
        desplegarCarrito()
        savelocal()
  })
})
    
//Calcular Total
const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
const totalCarrito = document.createElement("div");
totalCarrito.innerHTML = `Total a pagar: $${total} pesos`
totalCarrito.className = "carrito-texto-total"
    contenedorCarrito.appendChild(totalCarrito)
    
//Boton para Finalizar compra 
const finalizar = document.createElement("button")
finalizar.className = "btn-termino"
    finalizar.innerText = "Finalizar Compra"
    finalizar.addEventListener("click", () => { finalizarCompra() })
    contenedorCarrito.appendChild(finalizar)
}


finalizarCompra=() =>{
    const msjFinal = document.createElement("div")
    msjFinal.className = "mensajeFinal"
    if (carrito.length !== 0) {
        msjFinal.innerHTML = "<p>Gracias por su compra, disfruta tus artículos y te esperamos pronto<p>"
        contenedorCarrito.appendChild(msjFinal)
        localStorage.clear()
        borrarCarrito()
    }
    contenedorCarrito.appendChild(msjFinal)
}

//Borrar Carrito
const borrarCarrito = () => {
    carrito = []
}

//local Storage
const savelocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


// Renderizar Productos
const renderizarProductos = () => {
    const contenedorProductos = document.getElementById("contenedorProductos")
    productos.forEach(({id, nombre, precio, descripcion, categoria, stock}) =>{
        const prodCard = document.createElement("div")
        prodCard.innerHTML = `
            <div class ="card"  id ="card${id}">
                <img src ="./assests/img/${id}.png" class ="card-img" alt ="${nombre}">
                <div class ="card-body">
                    <p class ="card-title"> ${nombre}</p>
                    <p class ="card-text">${descripcion}</p>
                    <p class ="card-text">$ ${precio} pesos</p>
                    <form id ="formaCantidad${id}">
                        <label for ="cantidadProd${id}">Cantidad</label>
                        <input type ="number" placeholder="0" id ="cantidadProd${id}" min="1" max = ${stock} >
                        <button class = "btn" id ="botonAgrProd${id}">Agregar</button>      
                    </form>
                </div>
            </div>`
        contenedorProductos.appendChild(prodCard)
        const btnAgregar = document.getElementById(`botonAgrProd${id}`)
        btnAgregar.addEventListener("click", (el) => {
            el.preventDefault()
             const cantidadAgregar = Number(document.getElementById(`cantidadProd${id}`).value)
            if (cantidadAgregar > 0) {
                document.getElementById(`formaCantidad${id}`).reset()
                agregarCarrito({id, nombre, precio, descripcion, categoria, stock, cantidad:cantidadAgregar})
            }
            
        })
    })
}

renderizarProductos()
