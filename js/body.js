document.addEventListener('DOMContentLoaded', function() {
    const bodyContainer = document.getElementById('body-container'); // Asegúrate de tener este contenedor en tu HTML

    bodyContainer.innerHTML = `
        <div class="cover-container">
            <div class="cover-left">
                <h1 class="cover-title">Título de<br>3 Filas</h1>
                <p class="cover-paragraph">Aquí va el párrafo explicativo sobre los servicios o la misión de BrushPro.</p>
                <button class="cover-button">Nuestros Servicios</button>
            </div>
            <div class="cover-right">
                <div class="image-container">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429652912_1149465979378392_4991933585073011959_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=qidI-S6YM2QAX8mxH74&_nc_ht=scontent-sea1-1.xx&oh=00_AfCJlzzVgyVvTjK3MBZsvqXesKjfOm9PtodR30iK6iwvHg&oe=65E610A5" alt="Imagen 1" class="image-u-reverse">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429658015_1149465999378390_6518425892919222942_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xq8hULdtfOwAX_dBrgA&_nc_ht=scontent-sea1-1.xx&oh=00_AfCbwVfFlLlPWc8ZjpqS42o2xXoRTmdJEa3Ewd3oM-FwSg&oe=65E6C024" alt="Imagen 2" class="image-u">
                </div>
            </div>
        </div>
    `;
});
