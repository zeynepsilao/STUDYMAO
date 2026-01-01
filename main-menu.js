console.log("Made by zeynepsilao. Have fun :)");


const modal = document.getElementById("contactModal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// fake message
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); //sayfa yenilenmesin
    alert("Message Sent! We will get back to you soon."); 
    closeModal(); 
});

/* GET STARTED */

const startBtn = document.getElementById('getStartedBtn');

if (startBtn) {
    startBtn.addEventListener('click', function() {
        const userStatus = localStorage.getItem('isLoggedIn');

        if (userStatus === 'true') {
            console.log("User already loged in.");
            window.location.href = 'study-zone.html';
        } else {
            console.log("User not loged in");
            window.location.href = 'signup.html';
        }
    });
}

/* PROFİL MENÜSÜ YÖNETİMİ */

// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function() {
    updateProfileMenu();
});

function updateProfileMenu() {
    const profileDropdown = document.getElementById("profileDropdown");
    const userStatus = localStorage.getItem('isLoggedIn'); // Hafızaya bak

    // Menüyü temizle
    profileDropdown.innerHTML = "";

    if (userStatus === 'true') {
        // DURUM A: KULLANICI GİRİŞ YAPMIŞ
        // Profilim ve Çıkış Yap seçeneklerini ekle
        
        // 1. Profilim Linki (Study Zone'a gider)
        const profileLink = document.createElement("a");
        profileLink.href = "study-zone.html";
        profileLink.innerHTML = '<i class="fas fa-id-card"></i> My Dashboard';
        
        // 2. Çıkış Yap Butonu
        const logoutLink = document.createElement("a");
        logoutLink.href = "#";
        logoutLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Log Out';
        logoutLink.onclick = function() {
            logoutUser(); // Çıkış fonksiyonunu çağır
        };

        // Menüye ekle
        profileDropdown.appendChild(profileLink);
        profileDropdown.appendChild(logoutLink);

    } else {
        // DURUM B: MİSAFİR (GİRİŞ YAPMAMIŞ)
        // Giriş Yap / Kayıt Ol seçeneğini ekle
        
        const loginLink = document.createElement("a");
        loginLink.href = "login.html"; // Yeni yapacağımız giriş sayfası
        loginLink.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In / Sign Up';
        
        profileDropdown.appendChild(loginLink);
    }
}

// Çıkış Yapma Fonksiyonu
function logoutUser() {
    localStorage.removeItem('isLoggedIn'); // Hafızayı sil
    alert("You have logged out.");
    window.location.href = "index.html"; // Ana sayfaya dön
}