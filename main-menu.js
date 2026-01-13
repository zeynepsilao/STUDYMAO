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
    event.preventDefault();
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
    const startBtn = document.getElementById('getStartedBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            const userStatus = localStorage.getItem('isLoggedIn');
            if (userStatus === 'true') {
                window.location.href = 'study-zone.html';
            } else {
                window.location.href = 'signup.html';
            }
        });
    }
});

function updateProfileMenu() {
    const profileDropdown = document.getElementById("profileDropdown");
    if (!profileDropdown) return;
    const userStatus = localStorage.getItem('isLoggedIn'); 

    // Menüyü temizle
    profileDropdown.innerHTML = "";

    if (userStatus === 'true') {
        // --- GİRİŞ YAPMIŞ KULLANICI MENÜSÜ ---
        // Study Zone 
        const studyLink = document.createElement("a");
        studyLink.href = "study-zone.html";
        studyLink.innerHTML = '<i class="fas fa-brain"></i> Study Zone';
        
        // 2. Profile Settings
        const profileLink = document.createElement("a");
        profileLink.href = "profile.html"; // Yeni sayfaya gider
        profileLink.innerHTML = '<i class="fas fa-user-cog"></i> Profile Settings';
        
        // 3. Çıkış Yap
        const logoutLink = document.createElement("a");
        logoutLink.href = "#";
        logoutLink.innerHTML = '<i class="fas fa-sign-out-alt"></i> Log Out';
        logoutLink.onclick = function() {
            logoutUser();
        };

        // Hepsini menüye ekle
        profileDropdown.appendChild(studyLink);
        profileDropdown.appendChild(profileLink);
        profileDropdown.appendChild(logoutLink);

    } else {
        // --- MİSAFİR MENÜSÜ ---
        const loginLink = document.createElement("a");
        loginLink.href = "login.html";
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