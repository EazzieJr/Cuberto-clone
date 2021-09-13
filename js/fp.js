gsap.registerPlugin(ScrollTrigger);

// gsap.to('.containers', {
//     y: -20,
//     duration: 2,
// })

gsap.to('body', {
    backgroundColor: 'white',
})

gsap.to('.featured-projects', {
    scrollTrigger: {
        trigger:'.riy',
        pin:'.image',
        start: 'center center',
        endTrigger: '.end',
        end: 'center center',
        // markers: true,
        scrub: 1,
    },
})

gsap.fromTo('.body', {
    scrollTrigger: {
        trigger: '.featured-projects-texts',
        start: 'center 90%',
        endTrigger: '.fer .image',
        end: 'top 80vh',
        // markers: true,
        id: 'from',
        scrub: true,
    },
    backgroundColor: 'white',
}, {
    scrollTrigger: {
        trigger: '.riy .image',
        start: 'top center',
        endTrigger: '.fer .image',
        end: 'top center',
        // markers: true,
        scrub: true,
    },
    duration: 1,
    backgroundColor: '#EFF6FF',
})

gsap.fromTo('body', {
    scrollTrigger: {
        trigger: '.fer .image',
        start: 'center center',
        endTrigger: '.ule .image',
        end: 'cente center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#EFF6FF',
}, {
    scrollTrigger: {
        trigger: '.fer .image',
        start: 'center center',
        endTrigger: '.ule .image',
        end: 'center center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#FDF2F8',
})

gsap.fromTo('body', {
    scrollTrigger: {
        trigger: '.ule .image',
        start: 'center center',
        endTrigger: '.fli .image',
        end: 'cente center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#FDF2F8',
}, {
    scrollTrigger: {
        trigger: '.ule .image',
        start: 'center center',
        endTrigger: '.fli .image',
        end: 'center center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#FCE7F3',
})

gsap.fromTo('body', {
    scrollTrigger: {
        trigger: '.fli .image',
        start: 'center center',
        endTrigger: '.nan .image',
        end: 'cente center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#FCE7F3',
}, {
    scrollTrigger: {
        trigger: '.fli .image',
        start: 'center center',
        endTrigger: '.nan .image',
        end: 'center center',
        // markers: true,
        scrub: true,
    },
    backgroundColor: '#EFF6FF',
})



gsap.to('.menu-btn', {
    scrollTrigger: {
        trigger: '.right-col',
        pin: '.menu-btn',
        start: 'bottom 9%',
        endTrigger: '.nan',
        // markers: true,
        scrub: true,
    }
})

gsap.to('body', {
    scrollTrigger: {
        trigger: '.right-col',
        start: 'bottom 9%',
        pin: '.contact',
        endTrigger: '.nan',
        // markers: true,
    }
})
