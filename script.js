let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarCarrito(){

    let contenedor =
    document.getElementById("lista-carrito");

    let total = 0;

    contenedor.innerHTML = "";

    carrito.forEach((producto,index)=>{

        total += producto.precio;

        contenedor.innerHTML += `

        <div class="carrito-producto">

            <div>

                <h3>${producto.nombre}</h3>

                <p>$${producto.precio}</p>

            </div>

            <button onclick="eliminarProducto(${index})">

                Eliminar

            </button>

        </div>

        `;

    });

    document.getElementById("total")
    .innerText = "$" + total;

}

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

}

mostrarCarrito();
function comprar(){

    const { jsPDF } = window.jspdf;

    let doc =
    new jsPDF();

    doc.text(
    "Factura Orión Store",
    20,
    20
    );

    let y = 40;

    let total = 0;

    carrito.forEach(producto => {

        doc.text(
            producto.nombre +
            " $" +
            producto.precio,
            20,
            y
        );

        y += 10;

        total += producto.precio;

    });

    doc.text(
        "Total: $" + total,
        20,
        y + 20
    );

    doc.save(
    "Factura_Orion.pdf"
    );

    window.location.href =
    "https://wa.me/573181076442";

}