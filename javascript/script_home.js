document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para o Menu Lateral Deslizante ---
    const menuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // CORREÇÃO APLICADA AQUI
    function openMenu() {
        // Adiciona a classe que torna o menu visível
        sideMenu.classList.add('menu-aberto'); 
        menuOverlay.classList.remove('hidden');
    }

    function closeMenu() {
        // Remove a classe para esconder o menu novamente
        sideMenu.classList.remove('menu-aberto');
        menuOverlay.classList.add('hidden');
    }

    menuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // --- Lógica para o Menu Accordion ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.arrow');

            // Fecha outros submenus abertos
            accordionToggles.forEach(otherToggle => {
                const otherSubmenu = otherToggle.nextElementSibling;
                if (otherSubmenu !== submenu && otherSubmenu.style.maxHeight) {
                    otherSubmenu.style.maxHeight = null;
                    otherToggle.querySelector('.arrow').classList.remove('rotate-90');
                }
            });
             
            // Abre ou fecha o submenu atual
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                arrow.classList.remove('rotate-90');
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                arrow.classList.add('rotate-90');
            }
        });
    });
     
    // --- Lógica para destacar sub-botão ativo ---
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            submenuItems.forEach(i => i.style.backgroundColor = '');
            e.target.style.backgroundColor = '#e5e7eb';
        });
    });

    // --- Lógica para o Carrossel com Slide ---
    const carouselTrack = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const items = document.querySelectorAll('.carousel-item');
    
    if (items.length > 0) {
        let currentIndex = 0;
        const totalItems = items.length;
        let slideInterval;

        function showSlide(index) {
            currentIndex = (index + totalItems) % totalItems;
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function startCarousel() {
            stopCarousel();
            slideInterval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 15000);
        }

        function stopCarousel() {
            clearInterval(slideInterval);
        }

        nextBtn.addEventListener('click', () => {
            stopCarousel();
            showSlide(currentIndex + 1);
            startCarousel();
        });

        prevBtn.addEventListener('click', () => {
            stopCarousel();
            showSlide(currentIndex - 1);
            startCarousel();
        });
        
        showSlide(currentIndex);
        startCarousel();
    }
});