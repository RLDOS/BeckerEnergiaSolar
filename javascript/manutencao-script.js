document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para o Menu Lateral Deslizante ---
    const menuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if(menuButton) {
        function openMenu() { sideMenu.classList.add('menu-aberto'); menuOverlay.classList.remove('hidden'); }
        function closeMenu() { sideMenu.classList.remove('menu-aberto'); menuOverlay.classList.add('hidden'); }

        menuButton.addEventListener('click', openMenu);
        closeMenuButton.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }

    // --- Lógica para o Menu Accordion ---
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const submenu = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.arrow');

            // Fecha outros submenus abertos
            accordionToggles.forEach(otherToggle => {
                const otherSubmenu = otherToggle.nextElementSibling;
                if (otherSubmenu !== submenu && otherSubmenu.classList.contains('collapsible-content') && otherSubmenu.style.maxHeight) {
                    otherSubmenu.style.maxHeight = null;
                    otherToggle.querySelector('.arrow').classList.remove('rotate-90');
                }
            });
            
            // Abre ou fecha o submenu atual
            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                if (arrow) arrow.classList.remove('rotate-90');
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                if (arrow) arrow.classList.add('rotate-90');
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

   
});