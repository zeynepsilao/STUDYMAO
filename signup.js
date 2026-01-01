// signup.js - Kayıt işlemlerini yönetir

document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault(); // Sayfa yenilenmesin

    // 1. Sanki veritabanına kaydetmişiz gibi davranalım
    // (Burada ileride gerçek kayıt kodları olur)

    // 2. Otomatik giriş yapılmış sayalım
    localStorage.setItem('isLoggedIn', 'true');

    // 3. Kullanıcıya haber verelim
    alert("Account created successfully! Welcome to StudyMao. 🚀");

    // 4. Ana sayfaya (veya Study Zone'a) yönlendirelim
    window.location.href = "study-zone.html";
});