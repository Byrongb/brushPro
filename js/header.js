document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');

    headerContainer.innerHTML = `
        <header class="header">
            <nav class="header-nav">
                <div class="nav-left">
                    <a href="index.html">Home</a>
                    <a href="services.html">Services</a>
                    <a href="gallery.html">Gallery</a>
                    <a href="contact.html" class="btn-contact">Contact</a>
                </div>
                <div class="logo-center">
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/429546598_1149453696046287_6311919650090133459_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CRcZIf76oBcAX8i9yeG&_nc_ht=scontent-sea1-1.xx&oh=00_AfCkRDrwJBzYuGpSKnaDcCmqdVP00LynisZJOiFaB6LyHA&oe=65E5DB46" alt="BrushPro Logo">
                </div>
                <div class="nav-right">
                    <button onclick="location.href='estimate.html'">GET A FREE ESTIMATE</button>
                </div>
            </nav>
        </header>
    `;
});
