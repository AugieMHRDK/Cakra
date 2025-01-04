(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    $(document).ready(function () {
        // Tampilkan tombol saat scroll lebih dari 300px
        console.log("jQuery Loaded");
        $(window).scroll(function () {
            console.log("Scroll Top:", $(this).scrollTop());
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
    
        // Scroll ke atas saat tombol diklik
        $('.back-to-top').click(function (e) {
            e.preventDefault(); // Mencegah aksi default
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        });
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Toggle visibility of the search form
document.getElementById("searchToggle").addEventListener("click", function () {
    const searchContainer = document.getElementById("searchContainer");
    searchContainer.classList.toggle("d-none");
});

})(jQuery);