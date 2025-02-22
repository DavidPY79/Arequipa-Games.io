// Array que almacenará los productos del carrito
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    // Crear un objeto del videojuego con nombre y precio
    let producto = { nombre: nombre, precio: precio };
    
    // Añadir el producto al carrito
    carrito.push(producto);
    
    // Actualizar el carrito en la interfaz
    actualizarCarrito();
}

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    // Obtener el contenedor del carrito y la lista de productos
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    
    // Limpiar la lista de productos en el carrito (para evitar duplicados)
    listaCarrito.innerHTML = '';
    
    // Inicializar el total
    let total = 0;
    
    // Recorrer el carrito para mostrar los productos
    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
        
        // Sumar el precio al total
        total += producto.precio;
    });
    
    // Actualizar el total en la página
    totalCarrito.textContent = total;
}

// Función para finalizar la compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Mostrar un mensaje con los productos y el total
    let productosEnCarrito = carrito.map(p => p.nombre).join(', ');
    let totalCompra = carrito.reduce((total, producto) => total + producto.precio, 0);
    
    alert(`¡Gracias por tu compra!\nProductos: ${productosEnCarrito}\nTotal: $${totalCompra}`);
    
    // Limpiar el carrito después de finalizar la compra
    carrito = [];
    actualizarCarrito();
}

function mostrarMensajeCompra() {
    let mensaje = document.getElementById("mensaje-compra");
    mensaje.style.display = "block"; // Muestra el mensaje
    setTimeout(() => {
        mensaje.style.display = "none"; // Lo oculta después de 3 segundos
    }, 3000);
}

function finalizarCompra() {
    // Aquí puedes agregar la lógica para limpiar el carrito, enviar datos, etc.
    
    // Mostrar animación de compra
    mostrarMensajeCompra();

    // Reproducir sonido de compra
    document.getElementById('audio4').play();

    // Reiniciar el carrito después de la compra
    document.getElementById("lista-carrito").innerHTML = "";
    document.getElementById("total-carrito").innerText = "0";
}



