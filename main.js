AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.img-scroll', {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [-200, 0],
            ]
        }
    })
    lax.addElements('.text-scroll-left', {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [0, 50],
            ]
        }
    })
    lax.addElements('.text-scroll-right', {
        scrollY: {
            translateX: [
                ["elInY", "elOutY"],
                [0, -50],
            ]
        }
    })
},


    (function () {
        var bgImgScroll = document.querySelector('.bg-img-scroll');

        function scrollSlide() {
            var scrollTop = window.scrollY;
            var windowsHeight = window.innerHeight;
            var getRelativePosition = bgImgScroll.getBoundingClientRect();
            var getRelativeTop = getRelativePosition.top;
            if (scrollTop + windowsHeight / 2 >= getRelativeTop) {
                bgImgScroll.style['background-position'] = "center -".concat(parseInt(scrollTop / 5), "px");
            }
        }

        window.addEventListener('scroll', scrollSlide);
    })();