document.addEventListener('DOMContentLoaded', function () {
    const formularioVenta = document.querySelector('form');
    const tablaVentas = document.querySelector('table tbody');

    formularioVenta.addEventListener('submit', function (event) {
        event.preventDefault(); 


        const nombreLibro = document.getElementById('nombreLibro').value;
        const codigo = document.getElementById('codigo').value;
        const categoria = document.getElementById('categoria').value;
        const precio = parseFloat(document.getElementById('precio').value);
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const cliente = document.getElementById('cliente').value;
        const edadCliente = parseInt(document.getElementById('edadCliente').value);
        const fechaVenta = document.getElementById('fechaVenta').value;
        const iva = parseFloat(document.getElementById('iva').value);


        let descuento = 0;
        let recargo = 0;


        const esViernesNegro = true; 
        if (esViernesNegro) {
            descuento += 0.3; 
        }


        if (edadCliente >= 65) {
            descuento += 0.08; 
        }


        if (precio * cantidad > 100) {
            descuento += 0.03;
        }


        if (precio * cantidad > 500) {
            recargo += 0.08; 
        }


        const subtotal = precio * cantidad;
        const totalPagar = subtotal * (1 - descuento + recargo) + iva;


        mostrarResultadoVenta(totalPagar);


        agregarVentaATabla(nombreLibro, codigo, categoria, precio, cantidad, cliente, edadCliente, fechaVenta, iva, totalPagar);
    });

    function agregarVentaATabla(nombreLibro, codigo, categoria, precio, cantidad, cliente, edadCliente, fechaVenta, iva, totalPagar) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombreLibro}</td>
            <td>${codigo}</td>
            <td>${categoria}</td>
            <td>${precio.toFixed(2)}</td>
            <td>${cantidad}</td>
            <td>${cliente}</td>
            <td>${edadCliente}</td>
            <td>${fechaVenta}</td>
            <td>${iva.toFixed(2)}</td>
            <td>${totalPagar.toFixed(2)}</td>
        `;
        tablaVentas.appendChild(fila);


        formularioVenta.reset();
    }

    function mostrarResultadoVenta(totalPagar) {
        const campoTotalPagar = document.getElementById('ttt');
    }

});
