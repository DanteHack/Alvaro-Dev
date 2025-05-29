// Cargar noticias desde archivo JSON
document.addEventListener("DOMContentLoaded", () => {
    fetch("data/noticias.json")
        .then(res => res.json())
        .then(data => {
            const contenedor = document.getElementById("contenedor-noticias");
            data.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("noticia");
                div.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <img src="img/${noticia.imagen}" width="300" height="200" alt="${noticia.titulo}">
                    <p>${noticia.descripcion}</p>
                `;
                contenedor.appendChild(div);
            });
        });
});
