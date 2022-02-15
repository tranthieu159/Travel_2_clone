const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

let searchBtn = $('#search-btn')
let searchBar = $('.search-btn-container')
let formBtn = $('#login-btn')
let loginForm = $('.login-form-container')
let loginClose = $('#form-close')
let menu = $('#menu-bar')
let navbar = $('.navbar')
let videoBtn = $$('.vid-btn')

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active')
})

loginClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        $('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        $('#video-slider').src = src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableObservation: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2800,
        disableObservation: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        }
    }
})