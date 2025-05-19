AOS.init();

// Configuração do carrossel infinito
gsap.to(".testimonials", {
    x: () => -(document.querySelector(".testimonials").scrollWidth - document.querySelector(".testimonials-wrapper").offsetWidth) + "px",
    ease: "none",
    duration: 20,
    repeat: -1, // Loop infinito
    scrollTrigger: {
        trigger: ".depoimentos",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 // Suaviza a animação com o scroll
    }
});

// Efeito de rotação (opcional)
gsap.from(".testimonial", {
    rotationY: -15, // Pequena inclinação 3D
    opacity: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".testimonials-wrapper",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});