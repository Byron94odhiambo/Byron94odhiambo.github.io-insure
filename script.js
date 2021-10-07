document.addEventListener('DOMContentLoaded', () => {
    hamburgerBtn = document.querySelector('.hamburger')
    closeButton = document.querySelector('.close-btn')
    mobileMenu = document.querySelector('.mobile-menu')


    function showMenu() {
        mobileMenu.classList.toggle('show')
        closeButton.classList.toggle('show')
        hamburgerBtn.classList.toggle('hide')
    }

    hamburgerBtn.addEventListener('click', showMenu)
    closeButton.addEventListener('click', showMenu)
})

