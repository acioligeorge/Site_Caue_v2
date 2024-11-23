document.addEventListener('DOMContentLoaded', function() {
    // Image Slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    if (slides.length > 0) {
        showSlides();
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        backToTopButton.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Video Gallery
    const videoItems = document.querySelectorAll('.video-item');
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeBtn = document.querySelector('.close');

    if (modal && videoFrame && closeBtn) {
        videoItems.forEach(item => {
            item.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                videoFrame.src = `https://player.vimeo.com/video/${videoId}`;
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            videoFrame.src = '';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
                videoFrame.src = '';
            }
        });
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            console.log('Menu toggled'); // Log to check if this runs
        });
    }

    // Window Resize Event
    window.addEventListener('resize', function() {
        console.log('Viewport size: ' + window.innerWidth + 'x' + window.innerHeight);
    });
});