const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const animateCSSJ = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element
        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

let about = document.querySelector('#about')
let aboutoffsetTop = [about][0].offsetTop
let skills = document.querySelector('#skills')
let skillsoffsetTop = [skills][0].offsetTop
let skillsImgs = document.querySelectorAll('#skills img')
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= aboutoffsetTop && window.pageYOffset < aboutoffsetTop + 20) {
        animateCSS('#about h2', 'bounce');
        animateCSS('#about img', 'flipInX');
    }
    if (window.pageYOffset >= skillsoffsetTop - 20 && window.pageYOffset < skillsoffsetTop + 20) {
        for (let i = 0; i < skillsImgs.length; i++) {
            animateCSSJ(skillsImgs[i], 'zoomIn')
        }
    }
})