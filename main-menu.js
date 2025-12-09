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