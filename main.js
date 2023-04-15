/* Declaración de variables */
let total = 0
let carritoCompra = []
let numProductos = 0
let concatenar = ""


/*Agregar Boton para inicar el algoritmo de compra*/
const botonInicio = document.createElement("button");
botonInicio.innerText = "Iniciar Compra";
botonInicio.className = "buttom";
document.body.appendChild(botonInicio);
botonInicio.onclick = iniciar

/* Constructor de productos */
class Producto {
    constructor(nombre, precio, descripcion,  categoria, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio).toFixed(2);
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
    }
}
//Definición de Productos
const maquillaje = new Producto("Maquillaje", 205, "Base de Maquillaje, cobertura de larga duración", "Rostro", 25);
const desmaquillante = new Producto("Desmaquillante", 160, "Removedor de maquillaje bifásico para ojos y rostro", "Rostro", 15);
const hidratante = new Producto("Hidratante", 258, "Hidratante facial con ácido hialurónico", "Rostro", 18);
const rubor = new Producto("Rubor", 137, " Rubor en polvo compacto de textura suave", "Rostro", 4);
const corrector = new Producto("Corector", 96, " Corrector de cobertura alta, textura cremosa", "Rostro", 8);
const fijador = new Producto("Fijador", 219, " Fijador de Maquillaje Matificante", "Rostro", 3);
const iluminador = new Producto("Iluminador", 55, "Iluminador compacto de fácil aplicación y difuminado", "Rostro", 3);
const labial = new Producto("Labial", 55, "Labial en barra con fórmula cremosa y acabado mate", "Labios", 10);
const brilloLabial = new Producto("Brillo Labial", 75, "Brillo de labios con color", "Labios", 2);
const delineador = new Producto("Delineador Labial", 22, "Delineador Labial cremoso con un acabado de cobertura total", "Labios", 10);
const humectante = new Producto("Humectante Labial", 30, "Labial orgánico con  bálsamo de cacao", "Labios", 5);
const sombras = new Producto("Set de sombras", 238, "Paleta de sombras, con 16 tonos neutros mezclables en acabados mate", "Ojos", 8);
const mascaraPestañas = new Producto("Máscara para pestañas", 169, "Máscara para pestañas, resistente al agua, máximo volumen ", "Ojos", 15);
const delineadorOjos = new Producto("Delineador Ojos", 120, "Delineador de Ojos, retráctil, lápiz fino,  ", "Ojos", 15);

/*Array de productos*/
const productos = [maquillaje, desmaquillante, hidratante, rubor, corrector, fijador, iluminador, labial, brilloLabial, delineador, humectante, sombras, mascaraPestañas, delineadorOjos]
console.log(productos)


/* Función para comprar */
const comprar = (deseaComprar) => {
    if (deseaComprar) {
        /* Seleccionar categoría */
        let categoria = Number(prompt(` Seleccione la categoría que desea comprar \n 1. Rostro \n 2. Labios \n 3. Ojos`));
        seleccion(categoria);
   } else {
        alert(`El monto total de su compra es: ${total} \n ¡Gracias por tu visita te esperamos muy pronto de nuevo!`);
    }

}
 
 /* Función para seleccionar la categoria */
const seleccion = (categoria) => { 
    switch (categoria) {
        case 1:
            const rostro = productos.filter((producto) => producto.categoria.includes('Rostro'))
            let productosRostro = ""
            const numProductosRostro = rostro.length
            for (let i = 0; i < numProductosRostro; i++){
                productosRostro = productosRostro + "\n" + (i + 1) + ". " + rostro[i].nombre + " Precio $  " + rostro[i].precio + " pesos."
            }
            let numProductoRostro = Number(prompt(`Seleccione el número del producto que desea comprar ${productosRostro}`));
            if (numProductoRostro <= numProductosRostro && numProductoRostro != null && numProductoRostro != "") {
                const productoComprarRostro = rostro[numProductoRostro - 1];
                comprarProductos(productoComprarRostro);
                
            } else {
                alert("Ingrese un valor inválido")
                continuar = confirm("Desea continuar")
                comprar(continuar)  
            }
            break
        case 2:
            const labios = productos.filter((producto) => producto.categoria.includes('Labios'))
            let productosLabios = ""
            const numProductosLabios = labios.length
            for (let i = 0; i < numProductosLabios; i++){
                 productosLabios = productosLabios + "\n" + (i + 1) + ". " + labios[i].nombre + " Precio $  " + labios[i].precio + " pesos."
            }
            let numProductoLabios = Number(prompt(`Seleccione el producto que desea comprar ${productosLabios}`));
            if (numProductoLabios <= numProductosLabios && numProductoLabios != null && numProductoLabios != "") {
                const productoComprarLabios = labios[numProductoLabios - 1]
                comprarProductos(productoComprarLabios)
                
            } else {
                alert("Ingrese un valor inválido")
                continuar = confirm("Desea continuar")
                comprar(continuar)  
            }
            break
          
        case 3:
            const ojos = productos.filter((producto) => producto.categoria.includes('Ojos'))
            let productosOjos = ""
            const numProductosOjos = ojos.length
           for (let i = 0; i < numProductosOjos; i++){
                productosOjos = productosOjos + "\n" + (i + 1) + ". " + ojos[i].nombre + " Precio $  " + ojos[i].precio + " pesos."
            }
            let numProductoOjos = Number(prompt(`Seleccione el producto que desea comprar ${productosOjos}`));
            if (numProductoOjos <= numProductosOjos && numProductoOjos != null && numProductoOjos != "") {
                const productoComprarOjos = ojos[numProductoOjos - 1]
                comprarProductos(productoComprarOjos)
                
            } else {
                alert("Ingrese un valor inválido")
                continuar = confirm("Desea continuar")
                comprar(continuar)  
            }
            break
        default:
            alert("Ingrese un valor inválido")
            continuar = confirm("Desea continuar")
            comprar(continuar) 
      
    } 
} 

//  /* Función para confirmar la compra de la Categoría Cosmeticos Rostro */
const comprarProductos = (productoComprar) => {
    respuesta = confirm(`¿Desea agregar al carrito de compras el producto ${productoComprar.nombre} con un costo de ${productoComprar.precio} pesos?`)
    if (respuesta) {
        carritoCompra.push(productoComprar)
        seguirComprando = confirm("¿Desea seguir comprando?")
    } else {
        seguirComprando = confirm("¿Desea seguir comprando?")
    }

    if (seguirComprando) {
        comprar(seguirComprando)
    } else {
        carritoCompra.forEach((producto) => {
            numProductos++    
            total = total + Number(producto.precio)
            let indexProd = productos.findIndex((el) => el.nombre === producto.nombre)
            console.log(`El stock del producto ${productos[indexProd].nombre} era ${productos[indexProd].stock}`)
            productos[indexProd].stock = productos[indexProd].stock -1
            console.log(`El stock del producto ${productos[indexProd].nombre} actualizado es de ${productos[indexProd].stock}`)
            concatenar = concatenar + "\n" + " El  Producto No. " + numProductos + " es " + producto.nombre + " tiene un precio de " + producto.precio + " pesos"
            console.log(`El monto total de la compra es: ${total} `)
            console.log(`Producto ${numProductos}: ${producto.nombre} Precio: ${producto.precio}`)
        })
        alert("Total de productos comprados: " + numProductos +"\n" + concatenar)
        alert(`El monto total de su compra es: ${total} \n ¡Gracias por tu visita te esperamos muy pronto de nuevo!`)
    }
    
}


/* Función de inicio*/
function iniciar() {
    total = 0
    carritoCompra = []
    numProductos = 0
    concatenar = ""
    while (true) {
        var comprador = prompt("Ingrese su nombre").toUpperCase()
            if (comprador != "" && comprador != null) {
                break;
    
            } else {
                alert("Ingrese su nombre por favor");
                continue;
            }
    }
   
    let deseaComprar = confirm(`Bienvenido ${comprador} ¿Desea comprar algún producto?`)
    comprar(deseaComprar)
}

