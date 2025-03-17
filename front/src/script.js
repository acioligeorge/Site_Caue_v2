document.addEventListener('DOMContentLoaded', function () {
    // Video Items and Gallery
    const videoItems = document.querySelectorAll('.video-item');
    const videoGallery = document.querySelector('.video-gallery');
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close-modal');

    // Projects Page Search and Filter
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category-filter');

    if (searchBar && categoryFilter) {
        function filterVideos() {
            const searchTerm = searchBar.value.toLowerCase();
            const selectedCategory = categoryFilter.value;

            videoItems.forEach(item => {
                const description = item.querySelector('.video-info')?.textContent.toLowerCase() || '';
                const category = item.getAttribute('data-category') || '';
                const matchesSearch = description.includes(searchTerm);
                const matchesCategory = selectedCategory === '' || category === selectedCategory;

                item.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
            });
        }

        searchBar.addEventListener('input', filterVideos);
        categoryFilter.addEventListener('change', filterVideos);
    }

    // Video Modal
    if (modal && videoFrame && closeBtn) {
        videoItems.forEach(item => {
            item.addEventListener('click', function () {
                const iframe = this.querySelector('iframe');
                if (iframe) {
                    videoFrame.src = iframe.src;
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                }
            });
        });

        function closeModal() {
            videoFrame.src = 'about:blank'; // Evita reprodução contínua em alguns navegadores
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }

        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', event => {
            if (event.target === modal) closeModal();
        });

        // Close modal with ESC key
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.classList.add('hamburger'); // Classe inicial

        menuToggle.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent event from bubbling up
            menu.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });

        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('show');
                menuToggle.classList.remove('active');
            });
        });

        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target) && menu.classList.contains('show')) {
                menu.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    }
});
