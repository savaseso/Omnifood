// Mobile nav

const nav = document.querySelector('.js-main-nav');
const icon = document.querySelector('.ion-ios-menu');


document.querySelector('.js-nav-icon').addEventListener('click',()=>{

    if(nav.classList.contains('is-visible')){
        nav.classList.remove('is-visible');
        icon.className='ion-ios-close';
    }else {
        nav.classList.add('is-visible');
        icon.className='ion-ios-menu';     
    };
})
