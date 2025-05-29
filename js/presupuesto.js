document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPresupuesto");
    const totalSpan = document.getElementById("total");

    const preciosProducto = {
        web: 500,
        tienda: 800,
        app: 1200
    };

    const preciosExtras = {
        seo: 100,
        mantenimiento: 150,
        seguridad: 200
    };

    function calcularTotal() {
        let total = 0;
        const producto = document.getElementById("producto").value;
        const plazo = parseInt(document.getElementById("plazo").value) || 1;

        total += preciosProducto[producto];

        document.querySelectorAll("input[name='extras']:checked").forEach(extra => {
            total += preciosExtras[extra.value];
        });

        // Descuento del 5% por cada mes extra sobre 6, máximo 20%
        let descuento = 0;
        if (plazo > 6) {
            descuento = Math.min(0.05 * (plazo - 6), 0.20);
            total *= (1 - descuento);
        }

        totalSpan.textContent = total.toFixed(2) + "€";
    }

    form.addEventListener("change", calcularTotal);
    form.addEventListener("input", calcularTotal);
    calcularTotal();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;

        const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
        const soloNumeros = /^\d{9}$/;
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!soloLetras.test(nombre) || nombre.length > 15) {
            alert("Nombre inválido.");
            return;
        }
        if (!soloLetras.test(apellidos) || apellidos.length > 40) {
            alert("Apellidos inválidos.");
            return;
        }
        if (!soloNumeros.test(telefono)) {
            alert("Teléfono inválido.");
            return;
        }
        if (!correoValido.test(email)) {
            alert("Correo electrónico inválido.");
            return;
        }
        if (!document.getElementById("condiciones").checked) {
            alert("Debe aceptar las condiciones.");
            return;
        }

        alert("Formulario enviado correctamente.");
    });
});
