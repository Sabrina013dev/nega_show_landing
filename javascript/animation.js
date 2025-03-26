AOS.init();

gsap.to(".testimonials", {
    x: "-50%",
    ease: "none",
    repeat: -1,
    duration: 15,
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        toggleActions: "play pause resume reset"
    }
});