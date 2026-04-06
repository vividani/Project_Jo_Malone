new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',
    responsiveWidth: 700,
    anchors: ['home', 'bestsellers', 'gifts', 'mens', 'supports', 'footer'],
    // parallax: true,
    onLeave: function(origin, destination, direction){
        if(destination.index === 3){
            document.body.classList.add("header-white");
        }else{
            document.body.classList.remove("header-white");
        }
    },
    verticalCentered: true,
    // paddingBottom: '0px',
    licenseKey: 'gplv3-license',
});



const p2Backgrounds = [
"img/background/Bg_page2_texture1.png",
"img/background/Bg_page2_texture2.png"
];

const section2 = document.querySelector("#section2");

var p2Swiper = new Swiper('.p2Swiper', {
    effect: "flip",
    grabCursor: true,
    slidesPerView: 1,
    loop: false,
    speed: 600,
    initialSlide: 1,

    fadeEffect: {
        crossFade: true,
    },

    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    },

    on: {
        slideChange: function () {
            const index = this.realIndex;

            section2.style.backgroundImage = `url(${p2Backgrounds[index]})`
        }
    },

});



const p3Texts = [
    "Fragrant Festivities Cologne Collection",
    "Twelve Day Ornament Collection",
    "Lime Basil & Mandarin & Peony Blush Suede Diffuser Duo",
    "Green & Blue Ornament",
    "Ginger Biscuit Cologne"
];

var p3swiper = new Swiper('.p3Swiper', {
    effect: 'creative',
    loop: true,
    slidesPerView: 2,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,

    creativeEffect: {
        limitProgress: 1,
        prev: {
            scale: 0.6,
            shadow: true,
            rotate: [0,0,0],
            translate: ["-50%", 0, -200],
        },
        next: {
            scale: 0.6,
            shadow: true,
            rotate: [0,0,0],
            translate: ["50%", 0, -200],
        },
    },

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

    on:{
        slideChange: function () {

            const textEl = document.querySelector("#p3__txt p");
            const index = this.realIndex;

            textEl.style.opacity = 0;

            setTimeout(() => {
                textEl.textContent = p3Texts[index];
                textEl.style.opacity = 1;
            }, 150)
        }
    } 
});



const navItems = document.querySelectorAll(".nav__item");

navItems.forEach(item => {
    item.addEventListener("click", () => {

        const target = item.dataset.anchor;
        fullpage_api.moveTo(target);

    });
});