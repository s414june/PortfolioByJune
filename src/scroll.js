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

function scrollAnimateMulti(allElement, animation) {
    let node = document.querySelectorAll(allElement)
    let elparent = node[0].parentElement
    let elementOffsetTop = elparent.offsetTop
    let winInnerHeight = window.innerHeight / 2
    let animateOffset = elementOffsetTop - winInnerHeight
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= animateOffset && window.pageYOffset < animateOffset + 50) {
            for (let i = 0; i < node.length; i++) {
                animateCSSJ(node[i], animation)
            }
        }
    })
}

function scrollAnimate(element, animation) {
    let node = document.querySelector(element)
    let elementOffsetTop = node.offsetTop
    let elementHeight = node.offsetHeight
    let winHeightHalf = window.innerHeight / 2
    let animateOffset = elementOffsetTop - elementHeight - winHeightHalf
    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= animateOffset && window.pageYOffset < animateOffset + 50) {
            animateCSSJ(node, animation);
        }
    })
}

scrollAnimateMulti('#skills img', 'zoomIn')
scrollAnimate('#about h2', 'bounce')
scrollAnimate('#about img', 'flipInX')