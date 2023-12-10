var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    
    centeredSlides: false,
    loop: true,
    autoplay:
    {
    delay: 1500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        
    clickable: true, 
    },
    navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // 375
    375: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
        }
    
    }
    
});


// Our Products
var swiper = new Swiper(".mySwiper-op", {
    slidesPerView: 4,
    spaceBetween: 18,
    
    centeredSlides: false,
    loop: true,
    autoplay:
    {
    delay: 1500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        
    clickable: true, 
    },
    navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // 375
    375: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    // 768px
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18
    },
    // 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18
        }
    
    }
    
});