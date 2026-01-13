document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Otomatik giriş şeklinde ayarladım
    localStorage.setItem('isLoggedIn', 'true');
    alert("Account created successfully! Welcome to StudyMao. 🚀");
    window.location.href = "study-zone.html";
});