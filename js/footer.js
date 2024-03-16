document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container'); // Asegúrate de tener este contenedor en tu HTML

    footerContainer.innerHTML = `
    <div class="footer-background">
        <div class="footer-intro">
            <img onclick="window.location.href='index.html'" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/430044994_1152783739046616_5867596447605418755_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QZA0q7O_h60AX8cK4zj&_nc_ht=scontent-sea1-1.xx&oh=00_AfBgAxJG_E-hvy_kVyivxT0vbSnUueOmMVQn7kUr8wIbVQ&oe=65EF1B17" alt="Logo de BrushPro" class="footer-logo">
            <p>At BrushPro, we transform your space with vibrant colors and flawless finishes. Our commitment to quality and customer satisfaction makes us your best choice for painting projects. Let our team of experts make your home's vision a reality.</p>
        </div>
        <div class="footer-content">
            <div class="contact-info">
                <h3>Contact Us</h3>
                <p><i class="fas fa-map-marker-alt"></i> 1234 Calle Ficticia, Ciudad Inventada</p>
                <p><i class="fas fa-phone"></i> +1 234 567 8900</p>
                <p><i class="fas fa-envelope"></i> contacto@brushpro.com</p>
                <p>Horarios: L-V: 9am - 6pm</p>
            </div>
        <div class="useful-links">
            <h3>Useful Links</h3>
            <div class="links-columns">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                </ul>
                <ul class="columnRight">
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                </ul>
                </div>
                <div class="links-center">
                    <a href="estimate.html">Get Estimate</a>
                </div>
            </div>

            <div class="footer-right">
                <h3>Send Us Your Review</h3>
                <p>Your opinion is important to us. Send us your comments and help us improve our services.</p>
                <form id="review-form">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <textarea id="message" name="message" placeholder="Your Review" required></textarea>
                    <div class="ratingF">
                        <input type="radio" id="star5" name="ratingF" value="5"><label for="star5" title="5 stars">★</label>
                        <input type="radio" id="star4" name="ratingF" value="4"><label for="star4" title="4 stars">★</label>
                        <input type="radio" id="star3" name="ratingF" value="3"><label for="star3" title="3 stars">★</label>
                        <input type="radio" id="star2" name="ratingF" value="2"><label for="star2" title="2 stars">★</label>
                        <input type="radio" id="star1" name="ratingF" value="1"><label for="star1" title="1 star">★</label>
                    </div>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
`;
});