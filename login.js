// login.js - Sadece giriş sayfasını yönetir

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Sayfanın yenilenmesini engelle

    // 1. Tarayıcı hafızasına 'Giriş Yapıldı' notunu düş
    localStorage.setItem('isLoggedIn', 'true');

    // 2. Kullanıcıya bilgi ver
    alert("Login Successful! Redirecting to Home...");

    // 3. Ana sayfaya geri gönder
    window.location.href = "index.html";
});