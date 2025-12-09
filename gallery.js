// Tüm galeri resimlerini seç
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

// Her bir resme tıklama özelliği ekle
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Tıklanan resmin kaynağını (src) al
        const imgSrc = image.src;
        
        // Lightbox içindeki büyük resme bu kaynağı ver
        lightboxImg.src = imgSrc;
        
        // Lightbox'ı görünür yap (CSS'te flex kullanacağız ortalamak için)
        lightbox.style.display = 'flex';
    });
});

// Çarpı işaretine basınca kapat
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Siyah boşluğa basınca da kapat (Kullanıcı dostu özellik)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});