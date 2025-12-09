console.log("Made by zeynepsilao. Have fun :)");

// Modal Elementlerini Seçelim
const modal = document.getElementById("contactModal");

// Modalı AÇMA Fonksiyonu
function openModal() {
    modal.style.display = "block";
}

// Modalı KAPATMA Fonksiyonu
function closeModal() {
    modal.style.display = "none";
}

// Modalı dışarı tıklayınca kapatma özelliği (Kullanıcı dostu olsun)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form gönderilince sayfa yenilenmesin, sahte bir uyarı versin
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Sayfa yenilemeyi engeller
    alert("Message Sent! We will get back to you soon."); // Uyarı verir
    closeModal(); // Pencereyi kapatır
});

/* GET STARTED BUTONU MANTIĞI */

// 1. Butonu seçiyoruz
const startBtn = document.getElementById('getStartedBtn');

// 2. Eğer buton sayfada varsa (hata almamak için kontrol) tıklama özelliği ekle
if (startBtn) {
    startBtn.addEventListener('click', function() {
        
        // 3. Tarayıcı hafızasını kontrol et: Kullanıcı daha önce giriş yapmış mı?
        const userStatus = localStorage.getItem('isLoggedIn');

        if (userStatus === 'true') {
            // DURUM A: Giriş Yapmış -> Ders Alanına git
            console.log("Kullanıcı giriş yapmış, panele yönlendiriliyor...");
            window.location.href = 'study-zone.html';
        } else {
            // DURUM B: Giriş Yapmamış -> Kayıt Sayfasına git
            console.log("Kullanıcı misafir, kayıt sayfasına yönlendiriliyor...");
            window.location.href = 'signup.html';
        }
    });
}