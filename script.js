document.addEventListener("DOMContentLoaded", function(event) {
    let showAll = document.querySelector('.brands__button');
    let brands = document.querySelector('.brands-slider');
    showAll.addEventListener('click', () => {
        showAll.classList.toggle('show');
        brands.classList.toggle('show');
        if (showAll.classList.contains('show')) {
            showAll.querySelector('span').textContent = 'Скрыть все';
        } else {
            showAll.querySelector('span').textContent = 'Показать все';
        }
    });

    if (window.innerWidth <= 550) {
        document.querySelector(".swiper-container").classList.add('swiper');
        document.querySelector(".brands-slider").classList.add('swiper-wrapper');
        document.querySelectorAll(".brands-slider__item").forEach((item)=>{
            item.classList.add('swiper-slide')
        })
        let swiper = new Swiper(".swiper-container", {
            slidesPerView: "auto",
            slidesOffsetBefore: 32,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
});


