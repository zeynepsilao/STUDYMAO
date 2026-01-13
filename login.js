document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    localStorage.setItem('isLoggedIn', 'true');

    alert("Login Successful! Redirecting to Home...");

    window.location.href = "index.html";
});