// Tüm galeri resimlerini seç
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

// resme tıklama
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';// ortalamak icin
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});