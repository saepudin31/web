const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('header .navbar');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4, /* Default 4 slides per view untuk desktop */
        spaceBetween: 20,
        loop: true, /* Slider otomatis mengulang setelah slide terakhir */
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10, /* Pada layar kecil, hanya 1 slide yang terlihat */
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20, /* Pada layar tablet, 2 slide per view */
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20, /* Pada layar lebih besar, 3 slide */
            },
            1280: {
                slidesPerView: 4, /* Pada desktop, 4 slide per view */
                spaceBetween: 20,
            },
        },
    });
});



// Fungsi untuk pindah halaman
function pindahHalaman(namaProduk) {
    // Redirect ke halaman lain dengan nama produk di URL
    window.location.href = namaProduk + ".html";
}
