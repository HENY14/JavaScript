const precioMaquillaje = 220
const precioDesMaquillante = 220
const precioHidratante = 220
const precioLabial = 80
const precioDelineador = 40
const precioHumectante = 80
const precioSombras = 400
const precioDelineadorOjos = 90
const precioMascaraPestañas = 150
let total = 0
let contadorProductos = 0
concatenar = ""


const comprar = (deseaComprar) => {

    if (deseaComprar) {
        let categoria = Number(prompt(` Seleccione la categoría que desea comprar \n 1. Rostro \n 2. Labios \n 3. Ojos`))
        seleccion(categoria)
    } else {
        alert(`El monto total de su compra es: ${total} \n ¡Gracias por tu visita te esperamos muy pronto de nuevo!`)
    }

 }

const seleccion = (categoria) => { 
        switch (categoria) {
            case 1:
                let producto = Number(prompt(`Seleccione el producto que desea comprar \n 1. Maquillaje \n 2. Desmaquillante \n 3 Hidratante`));
                comprarRostro(producto)
                break
            case 2:
                let producto1 = Number(prompt(`Seleccione el producto que desea comprar \n 1. Labial \n 2. Delineador \n 3. Humectante`));
                comprarLabios(producto1)
                break
            case 3:
                let producto2 = Number(prompt(`Seleccione el producto que desea comprar \n 1. Sombras \n 2. Máscara para pestañas \n 3. Delineador de ojos`));
                comprarOjos(producto2)
                break
            default:
                alert("Ingrese un valor inválido")
                continuar = confirm("Desea continuar")
                comprar(continuar) 
          
        }
   
       
} 


const comprarRostro = (producto) => {
    switch (producto) {
        case 1:
            respuesta = confirm(`El costo del Maquillaje es $${precioMaquillaje} pesos, ¿Deseas comprarlo?`)
            precio = precioMaquillaje
            nombreProducto = "Maquillaje"
            agregar(respuesta, precio, nombreProducto)
            break
        case 2:
            respuesta = confirm(`El costo del Desmaquillante es $${precioDesMaquillante} pesos, ¿Deseas comprarlo?`)
            precio = precioDesMaquillante
            nombreProducto = "Desmaquillante"
            agregar(respuesta, precio, nombreProducto)
            break
        case 3:
            respuesta = confirm(`El costo del Hidratante es $${precioHidratante} pesos, ¿Deseas comprarlo?`)
            precio = precioHidratante
            nombreProducto = "Hidratante para el rostro"
            agregar(respuesta, precio, nombreProducto)
            break
        
        default:
            alert("Ingrese un valor inválido")
            continuar = confirm("Desea continuar")
            comprar(continuar) 
    }        
    
} 

const comprarLabios = (producto1) => {
    switch (producto1) {
        case 1:
            respuesta = confirm(`El costo del Labial es $${precioLabial} pesos, ¿Deseas comprarlo?`)
            precio = precioDesLabial
            nombreProducto = "Labial"
            agregar(respuesta, precio, nombreProducto)
            break
        case 2:
            respuesta = confirm(`El costo del Delineador de labios es $${precioDelineador} pesos, ¿Deseas comprarlo?`)
            precio = precioDelineador
            nombreProducto = "Delineador de labios"
            agregar(respuesta, precio, nombreProducto)
            break
        case 3:
            respuesta = confirm(`El costo del Humectante es $${precioHumectante} pesos, ¿Deseas comprarlo?`)
            precio = precioHumectante
            nombreProducto = "Humectante"
            agregar(respuesta, precio, nombreProducto)
            break
       default:
            alert("Ingrese un valor inválido")
            continuar = confirm("Desea continuar")
            comprar(continuar) 
        }        
        
} 

const comprarOjos = (producto2) => {
    switch (producto2) {
        case 1:        
            respuesta = confirm(`El costo del set de Sombras es $${precioSombras} pesos, ¿Deseas comprarlo?`)
            precio = precioSombras
            nombreProducto = "Sombras"
            agregar(respuesta, precio, nombreProducto)
            break
        case 2:
            respuesta = confirm(`El costo de la Mascara de pestañas de labios es $${precioMascaraPestañas} pesos, ¿Deseas comprarlo?`)
            precio = precioMascaraPestañas
            nombreProducto = "Máscara para Pestañas"
            agregar(respuesta, precio, nombreProducto)
            break
        case 3:
            respuesta = confirm(`El costo del Delineador de ojos es $${precioDelineadorOjos} pesos, ¿Deseas comprarlo?`)
            precio = precioDelineadorOjos
            nombreProducto = "Delineador de ojos"
            agregar(respuesta, precio, nombreProducto)
            break
        default:
            alert("Ingrese un valor inválido")
            continuar = confirm("¿Desea continuar?")
            comprar(continuar) 
    }        
                
} 
  
const agregar = (respuesta, precio, nombreProducto) => { 
    if (respuesta) {
        total = total + precio
        contadorProductos = contadorProductos+ 1
        concatenar = concatenar + "\n" + " El  Producto No. "+ contadorProductos + " es: "  + nombreProducto + " y tiene un precio de " + precio+ " pesos"
        console.log(`Producto: ${nombreProducto} Precio: ${precio}`)
        console.log(`El monto total de su compra es: ${total} `)
        seguirComprando = confirm("¿Desea seguir comprando?")
    } else {
        seguirComprando = confirm("¿Desea seguir comprando?")
    }
    if (seguirComprando) {
            comprar(seguirComprando)
    } else {
        alert(concatenar)
        alert(`El monto total de su compra es: ${total} \n ¡Gracias por tu visita te esperamos muy pronto de nuevo!`)
        console.log(`El monto total de su compra es: ${total} `)
       
    }
}






function iniciar() {
    while (true) {
        var comprador = prompt("Ingrese su nombre")
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

