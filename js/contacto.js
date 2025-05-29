document.addEventListener("DOMContentLoaded", () => {
    const miUbicacion = [36.840280, -2.463540]; // Almería

    const mapa = L.map('mapa').setView(miUbicacion, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);

    L.marker(miUbicacion).addTo(mapa)
        .bindPopup("Oficina de Álvaro Dev<br>Calle Ficticia 123, Almería")
        .openPopup();

    // Formulario seguro
    const form = document.getElementById("formContacto");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Gracias por tu mensaje. Te responderemos pronto.");
            this.reset();
        });
    }
});