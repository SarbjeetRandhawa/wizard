const clickedNavbar = document.querySelector('.shape');
const homeNav = document.querySelector('.home');
const aboutNav = document.querySelector('.about');
const serviceNav = document.querySelector('.service');
const contactNav = document.querySelector('.contact');

homeNav.addEventListener('click', ()=>{
    if(!homeNav.classList.contains('clicked')){
        homeNav.classList.add('clicked');
        aboutNav.classList.remove('clicked');
        serviceNav.classList.remove('clicked');
        contactNav.classList.remove('clicked');
    }
});
aboutNav.addEventListener('click', ()=>{
    if(!aboutNav.classList.contains('clicked')){
        aboutNav.classList.add('clicked');
        homeNav.classList.remove('clicked');
        serviceNav.classList.remove('clicked');
        contactNav.classList.remove('clicked');
    }
});
serviceNav.addEventListener('click', ()=>{
    if(!serviceNav.classList.contains('clicked')){
        serviceNav.classList.add('clicked');
        aboutNav.classList.remove('clicked');
        homeNav.classList.remove('clicked');
        contactNav.classList.remove('clicked');
    }
});
contactNav.addEventListener('click', ()=>{
    if(!contactNav.classList.contains('clicked')){
        contactNav.classList.add('clicked');
        aboutNav.classList.remove('clicked');
        serviceNav.classList.remove('clicked');
        homeNav.classList.remove('clicked');
    }
});