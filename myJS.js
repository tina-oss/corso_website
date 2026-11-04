
// pure js
document.addEventListener('DOMContentLoaded', function(){
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', function() {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
            navbar.classList.add('nav-bg')
        } else {
            navbar.classList.remove('nav-bg')
        }
    })
})
