const sidebar = document.getElementById('sidebar')
const header = document.querySelector('header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const nav = document.querySelector('nav')
const heroList = document.getElementById('hero-list')
const heroCircle = document.getElementById('hero-circle')
const fixedBtn = document.getElementById('fixed-btn')
const heroBtn = document.getElementById('hero-btn')
const overview = document.querySelector('.overview')
const solutions = document.querySelector('.solutions')
const partners = document.querySelector('.partners')
const resources = document.querySelector('.resources')
const accordion = document.getElementById('accordion')
const accordionItem = accordion.querySelectorAll('.accordion-item')
const accordionIcon = accordion.querySelectorAll('i')
const sec1MobContent = document.getElementById('sec1-mob-content')
const contentMobLi = sec1MobContent.querySelectorAll('li')
const moBtn = document.querySelectorAll('.swiper2 button')
const desImg = document.querySelector('.des-img')
const desImgLi = desImg.querySelectorAll('li')
const desContent = document.querySelector('.des-content')
const desContentLi = desContent.querySelectorAll('li')
const desBtn = document.querySelector('.des-btn')
const desBtnLi = desBtn.querySelectorAll('button')
let interval = setInterval(count, 3000)
let x = 0
let kod = ''
let y = false
let j = false

function sideBtn(flag) {
    if (flag) {
        sidebar.style.transform = 'translateX(0)'
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        fixedBtn.style.display = 'none'
        nav.style.zIndex = '-1'
    } else {
        sidebar.style.transform = 'translateX(-300%)'
        header.style.display = 'block'
        main.style.display = 'block'
        footer.style.display = 'block'
        fixedBtn.style.display = 'block'
        nav.style.zIndex = '1000'
    }
}
function dropBtn(drop) {
    if (drop == 1) {
        overview.style.transform = 'translateX(0)'
    } else if (drop == 2) {
        solutions.style.transform = 'translateX(0)'
    } else if (drop == 3) {
        partners.style.transform = 'translateX(0)'
    } else if (drop == 4) {
        resources.style.transform = 'translateX(0)'
    } else {
        overview.style.transform = 'translateX(-300%)'
        solutions.style.transform = 'translateX(-300%)'
        partners.style.transform = 'translateX(-300%)'
        resources.style.transform = 'translateX(-300%)'
    }
}
function count() {
    x++
    if (x == 1) {
        kod = `<li style="color: #C5221F ;" class="animate__fadeInDown animate__animated">Stand out</li>
                <li class="animate__fadeInDown animate__animated">
                    <img width="250px" src="img/2.webp" alt="image" />
                </li>`
        heroCircle.style.background = '#FCE8E6'
    } else if (x == 2) {
        kod = `<li style="color: #F29900 ;" class="animate__fadeInDown animate__animated">Be found</li>
                <li class="animate__fadeInDown animate__animated">
                    <img width="250px" src="img/3.webp" alt="image" />
                </li>`
        heroCircle.style.background = '#FEF7E0'
    } else if (x == 3) {
        kod = `<li style="color: #1E8E3E ;" class="animate__fadeInDown animate__animated">Show up</li>
        <li class="animate__fadeInDown animate__animated">
            <img width="220px" src="img/4.webp" alt="image" />
        </li>`
        heroCircle.style.background = '#CEEAD6'
    } else if (x > 3) {
        x = 0
        kod = `<li class="animate__fadeInDown animate__animated">Drive sales</li>
                <li class="animate__fadeInDown animate__animated">
                    <img width="180px" src="img/1.webp" alt="image" />
                </li>`
        heroCircle.style.background = '#D2E3FC'
    }
    heroList.innerHTML = kod
}
function animateBtn() {
    if (!y) {
        clearInterval(interval)
        y = true
        heroBtn.innerHTML = `<i class="fas fa-play"></i>`
    } else {
        interval = setInterval(() => {
            count()
        }, 3000)
        y = false
        heroBtn.innerHTML = `<i class="fas fa-pause"></i>`
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
});
var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
function accordionBtn(z) {
    if (!j) {
        accordionItem[z].style.zIndex = '0'
        accordionItem[z].style.height = 'auto'
        accordionItem[z].style.opacity = '1'
        accordionItem[z].style.transition = '0.4s'
        accordionIcon[z].style.transform = 'rotate(180deg)'
        j = true
    } else {
        accordionItem[z].style.zIndex = '-1'
        accordionItem[z].style.height = '0'
        accordionItem[z].style.opacity = '0'
        accordionItem[z].style.transition = '0.0s'
        accordionIcon[z].style.transform = 'rotate(0)'
        j = false
    }
}
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
});
function slide3Ac(v) {
    for (let i = 0; i < contentMobLi.length; i++) {
        contentMobLi[i].style.display = 'none'
        moBtn[i].style.background = '#fff'
        moBtn[i].style.color = 'black'
    }
    contentMobLi[v].style.display = 'block'
    moBtn[v].style.background = 'black'
    moBtn[v].style.color = '#fff'
}
function slide3desAc(v) {
    for (let i = 0; i < contentMobLi.length; i++) {
        desBtnLi[i].style.background = '#fff'
        desBtnLi[i].style.color = 'black'
        desImgLi[i].style.display = 'none'
        desContentLi[i].style.display = 'none'
    }
    desImgLi[v].style.display = 'block'
    desContentLi[v].style.display = 'block'
    desBtnLi[v].style.background = 'black'
    desBtnLi[v].style.color = '#fff'
    desBtn[v].style.background = 'black'
    desBtn[v].style.color = '#fff'
}