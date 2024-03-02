document.addEventListener('DOMContentLoaded', function() {
    const bodyContainer = document.getElementById('body-container'); // Asegúrate de tener este contenedor en tu HTML

    bodyContainer.innerHTML = `
        <div class="cover-container">
            <div class="cover-left">
                <h1 class="cover-title">Give Life<br>To Your<br>Home</h1>
                <p class="cover-paragraph">"En BrushPro, transformamos espacios con precisión y pasión. Nuestro enfoque en calidad y detalle garantiza acabados perfectos en cada proyecto, desde casas hasta edificios. Contáctanos y descubre el poder de una pintura excepcional."</p>
                <button class="cover-button">FREE ESTIMATE</button>
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


document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills-container';
    skillsContainer.innerHTML = `
        <div class="skill">
            <img src="path-to-skill-image1.jpg" alt="Skill 1">
            <p>Precisión en Cada Pincelada</p>
        </div>
        <div class="skill">
            <img src="path-to-skill-image2.jpg" alt="Skill 2">
            <p>Trabajo a Tiempo</p>
        </div>
        <div class="skill">
            <img src="path-to-skill-image3.jpg" alt="Skill 3">
            <p>Acabados Duraderos</p>
        </div>
        <div class="skill">
            <img src="path-to-skill-image4.jpg" alt="Skill 4">
            <p>Satisfacción del Cliente</p>
        </div>
    `;

    // Asegúrate de tener un contenedor en tu HTML donde este contenido será insertado
    document.getElementById('body-container').appendChild(skillsContainer); // Ajusta el ID según tu estructura HTML
});



document.addEventListener('DOMContentLoaded', function() {
    const servicesContainer = document.createElement('div');
    servicesContainer.className = 'services-container'; 
    servicesContainer.innerHTML = `
        <div class="services-grid">
            <div class="service-box">
                <img src="path-to-service1-image.jpg" alt="">
                <h3>Título Servicio 1</h3>
                <p>Descripción breve del servicio 1.</p>
            </div>
            <div class="service-box">
                <img src="path-to-service2-image.jpg" alt="">
                <h3>Título Servicio 2</h3>
                <p>Descripción breve del servicio 2.</p>
            </div>
            <div class="service-box">
                <img src="path-to-service3-image.jpg" alt="">
                <h3>Título Servicio 3</h3>
                <p>Descripción breve del servicio 3.</p>
            </div>
        </div>
    `;
    document.getElementById('body-container').appendChild(servicesContainer); // Ajusta el ID según tu estructura HTML
});


document.addEventListener('DOMContentLoaded', function() {
    const workflowContainer = document.createElement('div');
    workflowContainer.className = 'workflowContainer'; 
    workflowContainer.innerHTML = `
        <div class="workflow-title">
            <h2>Cómo Trabajamos</h2>
        </div>
        <div class="workflow-steps">
            <div class="step">
                <img src="path-to-step1-image.png" alt="Paso 1">
                <p>Consulta inicial</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="path-to-step2-image.png" alt="Paso 2">
                <p>Planificación del proyecto</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="path-to-step3-image.png" alt="Paso 3">
                <p>Preparación y protección</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="path-to-step4-image.png" alt="Paso 4">
                <p>Proceso de pintura</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="path-to-step5-image.png" alt="Paso 5">
                <p>Revisión final y limpieza</p>
            </div>
        </div>
    `;
    document.getElementById('body-container').appendChild(workflowContainer); // Ajusta el ID según tu estructura HTML
});


document.addEventListener('DOMContentLoaded', function() {
    const testimonialsContainer = document.createElement('div');
    testimonialsContainer.className = 'testimonialsContainer'; 
    testimonialsContainer.innerHTML = `
        <div class="testimonials-title">
            <h2>Testimonios</h2>
        </div>
        <div class="testimonials-content">
            <div class="testimonial-box">
                <img src="path-to-client-image.jpg" alt="Cliente">
                <div class="testimonial-info">
                    <h3>Nombre del Cliente</h3>
                    <div class="rating">★★★★★</div>
                    <p>Este es un testimonio increíble que habla sobre la calidad y profesionalismo del servicio recibido. La atención al detalle y la eficiencia del equipo fueron excepcionales.</p>
                </div>
            </div>
            <div class="testimonial-image">
                <img src="path-to-additional-image.jpg" alt="Imagen Adicional">
            </div>
        </div>
    `;
    document.getElementById('body-container').appendChild(testimonialsContainer); // Ajusta el ID según tu estructura HTML
});


document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'galleryContainer'; 
    galleryContainer.innerHTML = `
        <div class="gallery-left">
            <h2>Galería</h2>
            <button class="view-gallery-btn">Ver Galería Completa</button>
            <div class="small-images">
                <img src="path-to-small-image1.jpg" alt="Imagen Pequeña 1">
                <img src="path-to-small-image2.jpg" alt="Imagen Pequeña 2">
            </div>
        </div>
        <div class="gallery-right">
            <img src="path-to-large-image.jpg" alt="Imagen Grande">
            <p>Descubre la calidad y detalle en cada proyecto que realizamos. Nuestra galería muestra la pasión y el compromiso que ponemos en cada trabajo.</p>
        </div>
    `;
    document.getElementById('body-container').appendChild(galleryContainer); // Ajusta el ID según tu estructura HTML
});