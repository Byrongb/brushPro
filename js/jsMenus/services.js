document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container'); // Asegúrate de tener este contenedor en tu HTML

    servicesContainer.innerHTML = `
        <div class="services-header" style="background-image: url('https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429652912_1149465979378392_4991933585073011959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qidI-S6YM2QAX8mxH74&_nc_ht=scontent-sea1-1.xx&oh=00_AfCJlzzVgyVvTjK3MBZsvqXesKjfOm9PtodR30iK6iwvHg&oe=65E610A5');">
            <h1 class="services-title">Nuestros Servicios</h1>
        </div>
        <div class="services-grid">
            ${Array.from({ length: 9 }).map((_, index) => `
                <div class="service-item">
                    <img src="URL_DE_LA_IMAGEN_DEL_SERVICIO_${index + 1}" alt="Servicio ${index + 1}">
                    <h2>Título del Servicio ${index + 1}</h2>
                    <p>Descripción breve del servicio ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button class="more-info-btn">Saber más</button>
                </div>
            `).join('')}
        </div>
    `;
});
