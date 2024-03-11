document.addEventListener('DOMContentLoaded', function() {
    const bodyContainer = document.getElementById('body-container'); // Asegúrate de tener este contenedor en tu HTML

    bodyContainer.innerHTML = `
        <div class="cover-container">
            <div class="cover-left">
                <h1 class="cover-title">Give Life<br>To Your<br>Home</h1>
                <p class="cover-paragraph">"At BrushPro, we transform spaces with precision and passion. Our focus on quality and detail guarantees perfect finishes on every project, from homes to buildings. Contact us and discover the power of exceptional paint."</p>
                <button href="./index.html" class="cover-button">FREE ESTIMATE</button>
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
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429639503_1150597165931940_3609805543538488287_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=3iLlk58PbOcAX-QcBkI&_nc_ht=scontent-sea1-1.xx&oh=00_AfCkz2VTwZOenYV1rE2rmuKBT6rRwMAw71IfdkzZAGT1uA&oe=65E9E92E" alt="Skill 1">
            <p>PRECISION IN EVERY BRUSH STROKE</p>
        </div>
        <div class="skill">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/430074202_1150597545931902_392644784083930647_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vOsSLx5q1psAX_D3VIi&_nc_ht=scontent-sea1-1.xx&oh=00_AfA32fBBoyWqruKh2Nkav3dISgANgYHBnCl_sbO_AcvAjQ&oe=65E96266" alt="Skill 2">
            <p>WORK ON TIME</p>
        </div>
        <div class="skill">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429924731_1150598719265118_6350956577379565530_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=QIMabesfq2gAX8r0Lo_&_nc_ht=scontent-sea1-1.xx&oh=00_AfDNCHw7ho92E5B3YNkuQae8XU98msmF9uGVpPD75xwahA&oe=65E9E881" alt="Skill 3">
            <p>DURABLE FINISHES</p>
        </div>
        <div class="skill">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429801385_1150597175931939_7300898890477336487_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=v3OivzZPJEkAX8cBtAy&_nc_ht=scontent-sea1-1.xx&oh=00_AfDseTGIonJUbkZiDatFKE8zTgPrwGSHNkT70wnJ9bYn-Q&oe=65E8154D" alt="Skill 4">
            <p>CUSTOMER SATISFACTION</p>
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
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429671613_1150626099262380_6427868742397061230_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=WgAFCAXukWYAX9zYCkR&_nc_ht=scontent-sea1-1.xx&oh=00_AfA1L6-x3GV7NWwGABaOi6C6P52R1mDsAp1crAnnbJnEAQ&oe=65E8A601" alt="">
                <h3>Interior Painting</h3>
                <p>Transform your interior space with our professional painting service. Our expert team works meticulously to refresh your home with vibrant colors and impeccable finishes. We use high quality paints, ensuring a long-lasting result and a healthy environment for your family.</p>
            </div>
            <div class="service-box">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/430034976_1150632405928416_3501796603874884621_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Maz8yA6RVdYAX_6JuRi&_nc_ht=scontent-sea1-1.xx&oh=00_AfCqHGknAHl79Q0We5PFpnfwLnVf1alPuw0DYZ81jMH4lQ&oe=65E9A559" alt="">
                <h3>Exterior Painting</h3>
                <p>Improve the appearance and increase the value of your property with our exterior painting service. Applying advanced techniques to deal with weather and wear. Our commitment is to provide an aesthetic and protective finish that highlights the beauty of your home.</p>
            </div>
            <div class="service-box">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429591723_1150635165928140_8811971451326467773_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KkzoOqHnN-EAX-oCONb&_nc_ht=scontent-sea1-1.xx&oh=00_AfDygHkdhRlXlM979pqHENkNcmD-MfmYq1_JIeSqc22-kw&oe=65E9DF9E" alt="">
                <h3>Custom Painting</h3>
                <p>Every project is unique, which is why we offer custom painting solutions to meet your specific needs. Whether you're looking for decorative effects, specialty finishes, or custom colors, our team is ready to provide expert advice and execute your vision to perfection.</p>
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
            <h2>HOW WE WORK?</h2>
        </div>
        <div class="workflow-steps">
            <div class="step">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431688650_1153813362276987_3401528458261278877_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=reor_rCuYvUAX8yPAUS&_nc_ht=scontent-sea1-1.xx&oh=00_AfA-qLuNVQYd_mayRZD3swmzpuhDdc7qCvT01M9Wj0_pEw&oe=65F01FF0" alt="Paso 1">
                <p>Connect With Us</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431622924_1153813342276989_8325074291930269162_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fOvoJojVmsgAX_1edNc&_nc_ht=scontent-sea1-1.xx&oh=00_AfCTAGHBwAJTvSxcDF8Yp4VLhKfCwUsbaotN7pSzUUiwwQ&oe=65F16EDD" alt="Paso 2">
                <p>Initial Consultation</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431393029_1153813275610329_3799226941206540899_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gtUEA574kfUAX-INQUb&_nc_ht=scontent-sea1-1.xx&oh=00_AfBWLsn5i8zVORlGRosFsdMtr2aVOdMgBq8m8vAksBYI3Q&oe=65F10824" alt="Paso 3">
                <p>Project Planning</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431624787_1153813278943662_1273141486358756429_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b5F6t-dHjV4AX-DLBa1&_nc_ht=scontent-sea1-1.xx&oh=00_AfDKWkB29WQaCq1mSy-5JFHRC0rQ-HpgbhYEKi0kZPEhgg&oe=65F074DE" alt="Paso 4">
                <p>Painting Process</p>
            </div>
            <div class="arrow">&#8594;</div> <!-- Flecha hacia la derecha -->
            <div class="step">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431737068_1153813272276996_7301408072499183303_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UtpZTUcmtBkAX-kO23J&_nc_ht=scontent-sea1-1.xx&oh=00_AfBxu4iP49gwzEE2QJedvCQ5EuDSTDaIlEDceQJQzU_KAw&oe=65EFF929" alt="Paso 5">
                <p>Final Check and Cleaning</p>
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
            <h2>TESTIMONIALS</h2>
        </div>
    <div class="containerCarousel">
        <div class="slide">
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">Carlos Jiménez</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"The attention to detail from this company is simply outstanding. They completely transformed the look of my house with their work. I'm more than satisfied!""</div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">Mariana Rodríguez</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"Incredible professionalism and quality of service. The company met the agreed deadlines, and the result exceeded my expectations. I highly recommend their services."</div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">Sofía Hernández</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"I'm really impressed with the dedication and effort they put into every detail. My house looks like new thanks to their high-quality painting work." </div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">Eduardo López</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"The team was very kind and respectful. They answered all my questions and helped me choose the perfect color for my house. The final result is beautiful. Exceptional service!" </div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>
            <div class="itemCarousel" style="background-image: url(https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429946319_1151715542486769_9129708214941704805_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=6xAaE180z94AX9_46nF&_nc_ht=scontent-sea1-1.xx&oh=00_AfAKXOoAZP6M5qI4Ut2bP9aOQjLGseM_TqAg0SXnrQuoqw&oe=65EACEC1);">
                <div class="contentCarousel">
                    <div class="name">Ana Torres</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This company did a fantastic job painting the exterior of my house. They were efficient, clean, and very professional. I will definitely hire them again in the future." </div>
                    <button>GET ESTIMATE</button>
                </div>
            </div>

        </div>

        <div class="button">
            <button class="prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button class="next"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
 
    `;

    document.getElementById('body-container').appendChild(testimonialsContainer); // Ajusta el ID según tu estructura HTML
    
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.itemCarousel')
        document.querySelector('.slide').appendChild(items[0])
    })
    
    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.itemCarousel')
        document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
    })
    
  });



document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'galleryContainer'; 
    galleryContainer.innerHTML = `
        <div class="gallery-left">
            <h2 class="titleGale">Get inspired <br> by our <br> achievements</h2>
            <button class="view-gallery-btn">SEE FULL GALLERY</button>
            <div class="small-images">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431270934_1152761855715471_9080144677491339795_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Zb8nZZr6ssgAX-Uubq0&_nc_ht=scontent-sea1-1.xx&oh=00_AfBihCzOf86vVA7T-et_JEnXvngKTM4qzQu1bvw5gX7UbA&oe=65ED996C" alt="Imagen Pequeña 1">
                <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431367979_1152761629048827_2225055565111845027_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QApy9A9RH-QAX8PXnnk&_nc_ht=scontent-sea1-1.xx&oh=00_AfDGdXkEOigctus-zIdAeDDhbS8pdiVwPayfRSSd8IbqBQ&oe=65EDBCAE" alt="Imagen Pequeña 2">
            </div>
        </div>
        <div class="gallery-right">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431319664_1152760379048952_4935509954112375173_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UbWjk0WcPNEAX_fqf32&_nc_ht=scontent-sea1-1.xx&oh=00_AfAX_drdYa2JXcZnn81xJz32DmebkXMxvI8QhxRuUqhJbA&oe=65ED3729" alt="Imagen Grande">
            <p>Discover the quality and detail in each project we carry out. Our gallery shows the passion and commitment we put into each job.</p>
        </div>
    `;
    document.getElementById('body-container').appendChild(galleryContainer); // Ajusta el ID según tu estructura HTML
});