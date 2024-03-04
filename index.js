let sectionImg = document.querySelector('.section-login')
let headerHamburger = document.querySelector('.header-btn')
let sectionn = document.querySelector('.section-login')
let hamburger = document.querySelector('header-hamburger')
let headerr = document.querySelector('.header')
let body = document.querySelector('body')
let section = document.querySelector('.section')
let section1 = document.querySelector('.section-1')
let footer = document.querySelector('.footer')


sectionn .addEventListener('click', function () {
    sectionn.style.display = 'none'
    section.style.display = 'block'
    section1.style.display = 'block'
    footer.style.display = 'block'

})

headerHamburger.addEventListener('click', function () {
    sectionn.style.display = 'block'
    body.classList = 'bgsg'
    section.style.display = 'none'
    section1.style.display = 'none'
    footer.style.display = 'none'
})



