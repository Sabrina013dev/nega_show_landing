document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    // Menu mobile
    menuIcon.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuIcon.classList.toggle("active");
        
        // Acessibilidade: muda o aria-label
        const isExpanded = nav.classList.contains("active");
        menuIcon.setAttribute("aria-expanded", isExpanded);
    });
    
    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuIcon.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
        });
    });
    
    // Adiciona classe ativa ao link da seção atual
    window.addEventListener("scroll", function() {
        let fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
});