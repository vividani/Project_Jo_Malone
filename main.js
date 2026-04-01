new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    responsiveWidth: 700,
    anchors: ['home', 'bestsellers', 'gifts', 'mens', 'supports', 'footer'],
    // parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
    verticalCentered: false,
    paddingBottom: '0px',
    licenseKey: 'gplv3-license',
});



var swiper = new Swiper('.mySwiper', {
    effect: 'creative',
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    centeredSlides: true,

    creativeEffect: {
        limitProgress: 1,
        prev: {
            scale: 0.6,
            shadow: true,
            rotate: [0,-25,0],
            translate: ["-50%", 0, -200],
        },
        next: {
            scale: 0.6,
            shadow: true,
            rotate: [0,25,0],
            translate: ["50%", 0, -200],
        },
    },

    // pagination: {
    //     el: ".p3__swiper-pagination",
    //     bulletActiveClass: 'on',
    //     clickable: true,
    //     bulletClass: "p3__swiper-pagination-bullet",
    // },
    pagination: {
        el: "#p3__prods__list",
        clickable: true,

        renderBullet: function (index, className) {
            return `
                <li class="${className} p3__swiper-pagination-bullet">
                    <img class="default" src="img/img_products/img_gift${index+1}.png">
                    <img class="hover" src="img/img_products/img_gift_hover${index+1}.png">
                </li>
            `;
        }
    },
    breakpoints: {
        768: {
            creativeEffect: {
                limitProgress: 1,
                speed: 800,
                watchSlidesProgress: true,
                prev: {
                    opacity: 1,
                },
            },
        },
    },

});

// const bullets = document.querySelectorAll(".pe__swiper-pagination-bullet");

// bullets.forEach((bullet, index) => {
//     bullet.addEventListener("click", () => {
//         swiper.slideTo(index);

//         bullets.forEach(b => b.classList.remove("active"));
//         bullet.classList.add("active");
//     });
// });

// swiper.on("slideChange", function () {

//     bullets.forEach(b => b.classList.remove("active"));
//     bullets[swiper.activeIndex].classList.add("active");

// });