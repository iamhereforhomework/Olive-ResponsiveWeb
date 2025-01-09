let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto play
let autoPlay = setInterval(nextSlide, 3000);

// Pause autoplay on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 3000));



const albums = document.querySelectorAll('.album');
        let currentAlbum = 0;

        function showAlbum(index) {
            albums.forEach((album, i) => {
                if (i === index) {
                    album.classList.add('active');
                } else {
                    album.classList.remove('active');
                }
            });
        }

        function handleScroll(event) {
            if (event.deltaY > 0) {
                // 滾輪向下
                currentAlbum = (currentAlbum + 1) % albums.length;
            } else {
                // 滾輪向上
                currentAlbum = (currentAlbum - 1 + albums.length) % albums.length;
            }
            showAlbum(currentAlbum);
        }

        window.addEventListener('wheel', handleScroll);

        // 初始顯示第一個專輯
        showAlbum(currentAlbum);