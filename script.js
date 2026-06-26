const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.innerHTML = navMenu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        navLinks.forEach(link => { link.addEventListener('click', () => { navMenu.classList.remove('active'); hamburger.innerHTML = '<i class="fas fa-bars"></i>'; }); });

        function filterGallery(category, btn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            if(btn) btn.classList.add('active');
            const gallery = document.getElementById('gallery');
            const optionsGrid = document.getElementById('options-grid');
            const items = document.querySelectorAll('.item');

            if (category === 'todos') { gallery.style.display = 'none'; optionsGrid.style.display = 'grid'; }
            else {
                optionsGrid.style.display = 'none'; gallery.style.display = 'grid';
                items.forEach(item => {
                    item.style.display = 'none';
                    if (item.classList.contains(category)) {
                        item.style.display = 'flex';
                        item.style.animation = 'fadeIn 0.5s ease forwards';
                    }
                });
            }
        }

        function selectCategory(category) { 
            const btn = document.querySelector(`.filter-btn[onclick*="'${category}'"]`); 
            if(btn) {
                filterGallery(category, btn);
                document.getElementById('coleccion').scrollIntoView();
            }
        }

        function openLightbox(imageSrc) { const lightbox = document.getElementById('lightbox'); const img = document.getElementById('lightbox-img'); img.src = imageSrc; lightbox.style.display = 'flex'; }
        function closeLightbox() { document.getElementById('lightbox').style.display = 'none'; }
        document.getElementById('lightbox').addEventListener('click', function(e) { if(e.target === this) closeLightbox(); });

        document.getElementById('current-year').textContent = new Date().getFullYear();

        function orderWhatsApp(btn) {
            const productTitle = btn.parentElement.querySelector('.card-title').innerText;
            const message = `Hola Mimositos ✨, me encantó este detalle y quiero pedirlo: *${productTitle}* 💖`;
            const url = `https://wa.me/51953334558?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // Ocultar sección del Día del Padre a partir del Lunes 22 de Junio
        const promoPadre = document.getElementById('promo-padre');
        if (promoPadre) {
            const expirationDate = new Date('2026-06-22T00:00:00');
            if (new Date() >= expirationDate) {
                promoPadre.remove();
            }
        }
