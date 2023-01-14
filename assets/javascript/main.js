const navBtn =  document.getElementById('nav-btn');
const nav_menu = document.getElementById('nav-menu');
navBtn.addEventListener('click', () => {
    nav_menu.classList.add('show_menu');
})


const nav_links = document.querySelectorAll('.menu_item_link');
nav_links.forEach( link => link.addEventListener('click', () => {
    nav_menu.classList.remove('show_menu')
}))


const scrollBtn = document.querySelector('.scroll_up')
this.window.addEventListener('scroll', () => {
    if( this.scrollY >= 500 ){
        scrollBtn.classList.add('show-scroll')
        return
    }
    scrollBtn.classList.remove('show-scroll')
})

// const scrollUp = () => {
//     const scrollBtn = document.querySelector('scroll_up')
//     if( this.scrollY >= 560 ){
//         screenTop.clas
//     }
// }


