document.addEventListener('DOMContentLoaded', () => {
  const imagenesWeb = [{ archivo: 'lanzamiento.jpg', titulo: 'Landing page' }]
  const imagenesBranding = [
    { archivo: 'servicios.jpg', titulo: 'Logo corporativo' },
  ]
  const imagenesApps = [{ archivo: 'moviles.jpg', titulo: 'App móvil' }]

  function cargarImagenes(arr, id) {
    const contenedor = document.getElementById(id)
    arr.forEach(img => {
      const figura = document.createElement('figure')
      figura.innerHTML = `
                <img src="img/${img.archivo}" width="800" height="533" alt="${img.titulo}">
                <figcaption>${img.titulo}</figcaption>
            `
      contenedor.appendChild(figura)
    })
  }

  cargarImagenes(imagenesWeb, 'galeria-web')
  cargarImagenes(imagenesBranding, 'galeria-branding')
  cargarImagenes(imagenesApps, 'galeria-apps')
})
