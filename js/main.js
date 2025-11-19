(function ($) {
    "use strict";

    AOS.init({
            once: true // Animación solo una vez, puedes quitarlo si quieres que se repita
        });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('navbar-shrink shadow-sm');
        } else {
            $('.navbar').removeClass('navbar-shrink shadow-sm');
        }
    });

    const toggleButton = document.getElementById("menuToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    toggleButton.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
    });

    // Optional: close menu when clicking a link (mobile)
    document.querySelectorAll("#navbarMenu .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("show");
        });
    });


    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    function myMove() {
        let id = null;
        const elem = document.getElementById("animate");   
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
          }
        }
      }
      




})(jQuery);

