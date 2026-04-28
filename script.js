/* MENU SHOW/HIDE */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLink = document.querySelectorAll('.nav__link')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
}))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* DARK LIGHT THEME */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-mode'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.firstElementChild.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.firstElementChild.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.firstElementChild.classList.toggle(iconTheme)
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* FORM VALIDATION & FEEDBACK */
const contactForm = document.getElementById('contact-form')
const formFeedback = document.getElementById('form-feedback')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById('name').value
    
    // Simulação de envio
    formFeedback.textContent = "Enviando..."
    formFeedback.style.color = "var(--first-color)"
    
    setTimeout(() => {
        formFeedback.textContent = `Obrigado, ${name}! Recebemos sua mensagem.`
        formFeedback.style.color = "green"
        contactForm.reset()
    }, 1500)
})

/* SCROLL REVEAL ANIMATION */
const observerOptions = {
    threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
    })
}, observerOptions)

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)