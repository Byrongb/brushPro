document.addEventListener('DOMContentLoaded', function() {
    const serviceDetailContainer = document.getElementById('service-detail-container');
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = parseInt(urlParams.get('serviceId'));

    const selectedService = servicesData.find(service => service.id === serviceId);

    if (selectedService) {
        serviceDetailContainer.innerHTML = `
            <div class="service-detail-container">
                <div class="service-detail-image">
                    <img src="${selectedService.imageUrl}" alt="${selectedService.title}">
                </div>
                <div class="service-detail-info">
                    <h2>${selectedService.title}</h2>
                    <p>${selectedService.fullDescription}</p>
                    <ul class="service-checks">
                        <li><i class="fas fa-check"></i> Característica 1</li>
                        <li><i class="fas fa-check"></i> Característica 2</li>
                        <li><i class="fas fa-check"></i> Característica 3</li>
                    </ul>
                        <button class="quote-btn" onclick="window.location.href='estimate.html'">Cotizar Servicio</button>

                </div>
            </div>
            <h3 class="title-other">Otros servicios</h3>
            <div class="services-grid">
                ${servicesData.filter(service => service.id !== serviceId).map(service => `
                    <div class="service-item">
                        <img src="${service.imageUrl}" alt="${service.title}">
                        <h4 class="service-title">${service.title}</h4>
                        <p>${service.description}</p>
                        <button class="more-info-btn" onclick="window.location.href='services2.html?serviceId=${service.id}'">Saber más</button>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        serviceDetailContainer.innerHTML = `<p>Service not found.</p>`;
    }
});
