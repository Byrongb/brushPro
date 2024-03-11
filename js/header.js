document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');


    headerContainer.innerHTML = `
    <header class="header">
    <nav class="header-nav">
        <div class="nav-left">
            <a href="index.html">Home</a>
            <a href="./services.html">Services</a>
            <a href="./gallery.html">Gallery</a>
            <a href="./contact.html" class="btn-contact">Contact</a>
        </div>
        <a href="./index.html" class="logo-center">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431830313_1152777749047215_2648738110435602200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6YNUyLsZ6FAAX-Wz_ww&_nc_ht=scontent-sea1-1.xx&oh=00_AfAdmR1MC2H8wEltcVn6LmZK_x1ezW3ZqqcER6-dWH_6lw&oe=65EEBC58" alt="BrushPro Logo">
        </a>
        <div class="nav-right">
            <button onclick="location.href='estimate.html'">GET A FREE ESTIMATE</button>
        </div>
    </nav>
</header>
    `;

    
    const header = document.querySelector('.header');
    const logoImage = document.querySelector('.logo-center img');

    const originalLogo = "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431830313_1152777749047215_2648738110435602200_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6YNUyLsZ6FAAX-Wz_ww&_nc_ht=scontent-sea1-1.xx&oh=00_AfAdmR1MC2H8wEltcVn6LmZK_x1ezW3ZqqcER6-dWH_6lw&oe=65EEBC58";
    const fixedLogo = "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/431629060_1153705545621102_4846985786634439632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_CeCUL_UkhkAX8qwGJE&_nc_ht=scontent-sea1-1.xx&oh=00_AfCNely4X6qqACtxr8n1KSD97cjXqvuJ1VRKM3yLj0D0yg&oe=65F12BF9";

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('fixed-header');
            logoImage.src = fixedLogo;
        } else {
            header.classList.remove('fixed-header');
            logoImage.src = originalLogo;
        }
    });
});
