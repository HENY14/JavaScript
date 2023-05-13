//Declaración de variable
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0
const cantidadCarrito = document.getElementById("cantCarrito");


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
// Definición de Productos
const maquillaje = new Producto("R01", "Maquillaje", 205, "Base de Maquillaje, cobertura de larga duración", "Rostro", 25);
const desmaquillante = new Producto("R02", "Desmaquillante", 160, "Removedor de maquillaje bifásico para ojos y rostro", "Rostro", 15);
const hidratante = new Producto("R03", "Hidratante", 258, "Hidratante facial con ácido hialurónico", "Rostro", 18);
const rubor = new Producto("R04", "Rubor", 137, " Rubor en polvo compacto de textura suave", "Rostro", 4);
const corrector = new Producto("R05", "Corrector", 96, " Corrector de cobertura alta, textura cremosa", "Rostro", 8);
const fijador = new Producto("R06", "Fijador", 219, " Fijador de Maquillaje Matificante", "Rostro", 3);
const iluminador = new Producto("R07", "Iluminador", 55, "Iluminador compacto de fácil aplicación y difuminado", "Rostro", 3);
const brochas = new Producto("R08", "Set de brochas", 400, "Set de 14 brochas para ojos y cara.", "Rostro", 5);
const labial = new Producto("L01", "Labial", 55, "Labial en barra con fórmula cremosa y acabado mate", "Labios", 10);
const brilloLabial = new Producto("L02", "Brillo Labial", 75, "Brillo de labios con color", "Labios", 2);
const delineador = new Producto("L03", "Delineador Labial", 22, "Delineador Labial cremoso con un acabado de cobertura total", "Labios", 10);
const humectante = new Producto("L04", "Humectante Labial", 30, "Labial orgánico con  bálsamo de cacao", "Labios", 5);
const sombras = new Producto("O01", "Set de sombras", 238, "Paleta de sombras, con 18 tonos neutros mezclables en acabados mate", "Ojos", 8);
const mascaraPestañas = new Producto("O02", "Mascara para pestañas", 169, "Máscara para pestañas, resistente al agua, máximo volumen ", "Ojos", 15);
const delineadorOjos = new Producto("O03", "Delineador Ojos", 120, "Delineador de Ojos, lápiz fino,  ", "Ojos", 15);

/*Array de productos*/
const productos = [maquillaje, desmaquillante, hidratante, rubor, corrector, fijador, iluminador, brochas, labial, brilloLabial, delineador, humectante, sombras, mascaraPestañas, delineadorOjos];

// Filtros
const btnCategorias = document.querySelectorAll(".btn-category-prod")
btnCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id != "Todos"){
            productosSeleccionados = productos.filter((producto) => producto.categoria.includes(e.currentTarget.id))
            renderizarProductos(productosSeleccionados)
        } else {
            renderizarProductos(productos)
        }
               
    })
})

// Agregar productos al Carrito
const agregarCarrito = (id,cantidadAgregar) => {
    contenedorCarrito.innerHTML = " "
    // Buscar el producto que se desea agregar al carrito
    let BuscarProd = carrito.find((el) => el.id === id)
    if (BuscarProd) {
         // Actualizar la cantidad si el producto está en el carrito
        let indexProd = carrito.findIndex((el) => el.id === id)
        carrito[indexProd].cantidad = carrito[indexProd].cantidad + cantidadAgregar
        textoMsj = `La cantidad de ${carrito[indexProd].nombre} fue actualizada en el carrito`;
        fondoMsj = "linear-gradient(to right, #00b09b, #96c93d)";
        msjCarrito(textoMsj, fondoMsj)
    } else {
        //Si el producto no se encuentra en el carrito agregralo
        const producto = productos.find(producto => producto.id === id)
        producto.cantidad = cantidadAgregar
        carrito.push(producto)
        textoMsj = `${producto.nombre} fue agregado al carrito`;
        fondoMsj = "linear-gradient(to right, #00b09b, #96c93d)";
        msjCarrito(textoMsj, fondoMsj)
    }
    savelocal()
    carritoContar()
}

//contar la cantidad de productos
const carritoContar = () => {
    if (carrito.length !== 0) {
        const cantidadProductos = carrito.reduce((acc, el) => acc + el.cantidad, 0);
        cantidadCarrito.style.display = "inline"
        cantidadCarrito.innerText = cantidadProductos;
    } else {
        cantidadCarrito.style.display = "none"
    }
}

// local Storage
const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


// Renderizar Productos
const renderizarProductos = (productos) => {
    const contenedorProductos = document.getElementById("contenedorProductos")
    contenedorProductos.innerHTML = " "
    productos.forEach((producto) =>{
        const prodCard = document.createElement("div")
        prodCard.innerHTML = `
            <div class ="card-prod"  id ="card${producto.id}">
                <img src ="./assests/img/${producto.id}.png" class ="card-img-prod" alt ="${producto.nombre}">
                <div class ="card-body-prod">
                    <p class ="card-title-prod"> ${producto.nombre}</p>
                    <p class ="card-text-prod">${producto.descripcion}</p>
                    <p class ="card-text-prod">$ ${producto.precio} pesos</p>
                    <form id ="formaCantidad${producto.id}">
                        <label for ="cantidadProd${producto.id}">Cantidad</label>
                        <input type ="number" placeholder="0" id ="cantidadProd${producto.id}" min="1" max = ${producto.stock} >
                        <button class = "btn-prod" id ="botonAgrProd${producto.id}">Agregar</button>      
                    </form>
                </div>
            </div>`
        contenedorProductos.appendChild(prodCard)
        const btnAgregar = document.getElementById(`botonAgrProd${producto.id}`)
        btnAgregar.addEventListener("click", (el) => {
            el.preventDefault()
             const cantidadAgregar = Number(document.getElementById(`cantidadProd${producto.id}`).value)
            if (cantidadAgregar > 0) {
                document.getElementById(`formaCantidad${producto.id}`).reset()
                agregarCarrito(producto.id, cantidadAgregar)
            }
            
        })
    })
    carritoContar()
}

renderizarProductos(productos)
