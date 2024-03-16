document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.getElementById('services-container');

    let servicesHTML = `<div class="services-header" style="background-image: url('https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431652610_1155314005460256_5819060631673807926_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uj-dBlKNtdkAX-TnVVX&_nc_ht=scontent-sea1-1.xx&oh=00_AfA3e-VhJyG-W3N7LUXvHZkEjjejKea-LTyJ_9_L_aCFbA&oe=65F42728');">
        <h1 class="services-title">Nuestros Servicios</h1>
    </div>
    <div class="services-grid">`;

    servicesData.forEach((service, index) => {
        servicesHTML += `
            <div class="service-item">
                <img src="${service.imageUrl}" alt="Servicio ${index + 1}">
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <button class="more-info-btn" onclick="window.location.href='services2.html?serviceId=${service.id}'">Saber más</button>
            </div>
        `;
    });

    servicesHTML += `</div>`;
    servicesContainer.innerHTML = servicesHTML;
});
