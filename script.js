const bg = document.getElementById('bg');
const fg = document.getElementById('fg');
const mount = document.getElementById('mount');
const nameIs = document.getElementById('nameIs');
const about = document.getElementById('aboutSection');
const fadeIn = document.querySelectorAll('.fade-in')

window.addEventListener('scroll', function(){
    const valueY = window.scrollY;
    bg.style.top = valueY * 0.9 + 'px';
    mount.style.top = valueY * 0.5 + 'px';
    nameIs.style.top = valueY * 0.5 + 'px';
});

const fadeInOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};
