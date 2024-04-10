// Selecciona el contenedor para la página de contacto
const contactContainer = document.getElementById('contact-container');

// Añade el formulario de contacto al contenedor seleccionado
contactContainer.innerHTML = `
  <h1>Contact Us</h1>
  <form id="contact-form">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    
    <button type="submit">Send</button>
  </form>
`;
