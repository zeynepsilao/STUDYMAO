function derseBasla() {
    // 1. Hide Pop-up (ID: welcome-popup)
    document.getElementById('welcome-popup').style.display = 'none';
            
    // 2. Unblur the Desk (ID: main-desk)
    var masa = document.getElementById('main-desk');
    masa.style.filter = 'none';
    masa.style.pointerEvents = 'all'; // Make clickable
}

// --- SIDE MENU TOGGLE ---
function menuyuAcKapa() {
    var panel = document.getElementById('side-panel');
    // Toggle 'open' class instead of 'acik'
    panel.classList.toggle('open');
}

// --- POMODORO TIMER ---
var sure = 25 * 60; // 25 minutes in seconds
var timer; // Timer engine

// --- POMODORO WIDGET OPEN/CLOSE ---
function pomoWidgetAc() {
    // 1. Show Widget
    document.getElementById('pomo-widget').style.display = 'block';
        
    // 2. Auto-close Side Menu
    document.getElementById('side-panel').classList.remove('open');
}

function pomoWidgetKapat() {
    // Hide Widget
    document.getElementById('pomo-widget').style.display = 'none';
}
            
function baslat() {
    if(timer) clearInterval(timer); // If running, stop first
        
    timer = setInterval(function() {
        sure--; // Decrease time
            
        // Calculate Minutes and Seconds
        var dakika = Math.floor(sure / 60);
        var saniye = sure % 60;
            
        // Add leading zero if seconds < 10
        if (saniye < 10) saniye = "0" + saniye;
            
        // Write to Screen (ID: pomodoro-timer)
        document.getElementById('pomodoro-timer').innerText = dakika + ":" + saniye;
            
        // Time's up
        if (sure <= 0) {
            clearInterval(timer);
            alert("Time's up! Break Time 😺");
        }
    }, 1000); // Run every 1 second
}

function sifirla() {
    clearInterval(timer); // Stop
    sure = 25 * 60; // Reset
    document.getElementById('pomodoro-timer').innerText = "25:00";
}

// --- CALCULATOR FUNCTIONS ---

function calcWidgetAc() {
    document.getElementById('calc-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function calcWidgetKapat() {
    document.getElementById('calc-widget').style.display = 'none';
    calcTemizle(); // Clear screen on close
}

// Type to screen
function calcYaz(deger) {
    // ID: calc-display
    document.getElementById('calc-display').value += deger;
}

// Clear screen (C button)
function calcTemizle() {
    document.getElementById('calc-display').value = '';
}

// Calculate Result (= button)
function calcHesapla() {
    var ekran = document.getElementById('calc-display');
    try {
        // eval() solves string math (e.g., "2+2" -> 4)
        ekran.value = eval(ekran.value); 
    } catch (e) {
        ekran.value = 'Error';
    }
}

// --- DRAGGING FUNCTION ---
// Enable dragging for widgets
pencereyiSurukle(document.getElementById("pomo-widget"));
pencereyiSurukle(document.getElementById("calc-widget"));

function pencereyiSurukle(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
    // Look for '.widget-header' instead of '.widget-baslik'
    var baslik = elmnt.querySelector(".widget-header");
        
    if (baslik) {
        baslik.onmousedown = suruklemeyiBaslat;
    } else {
        elmnt.onmousedown = suruklemeyiBaslat;
    }

    function suruklemeyiBaslat(e) {
        e = e || window.event;
        e.preventDefault();
        // Get initial mouse position
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set functions on mouse move
        document.onmouseup = suruklemeyiBitir;
        document.onmousemove = elementSurukle;
    }

    function elementSurukle(e) {
        e = e || window.event;
        e.preventDefault();
        // Calculate new position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function suruklemeyiBitir() {
        // Stop tracking when mouse is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// --- NOTEPAD FUNCTIONS ---

function noteWidgetAc() {
    document.getElementById('notes-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function noteWidgetKapat() {
    document.getElementById('notes-widget').style.display = 'none';
}

// --- MAGIC FUNCTION: Auto-resize & Word Count ---
function notKontrol(alan) {
    // 1. AUTO RESIZE
    alan.style.height = 'auto'; // Reset height
    alan.style.height = (alan.scrollHeight) + 'px'; // Stretch to fit text

    // Show scrollbar if > 400px
    if (alan.scrollHeight > 400) {
        alan.style.overflowY = "scroll";
    } else {
        alan.style.overflowY = "hidden";
    }

    // 2. WORD COUNTER
    var metin = alan.value.trim();
    // Split by whitespace
    var kelimeler = metin.split(/\s+/).filter(function(n) { return n != '' });
    var sayi = kelimeler.length;

    // Write to screen (ID: word-count)
    document.getElementById('word-count').innerText = sayi;

    // WORD LIMIT
    if (sayi > 1000) {
        alert("MEOW! You've exceeded 1000 words. Are you writing a novel? 😺");
        document.getElementById('word-count').style.color = "red";
    } else {
        document.getElementById('word-count').style.color = "#777";
    }
}
pencereyiSurukle(document.getElementById("notes-widget"));

// --- TO-DO LIST FUNCTIONS ---

function todoWidgetAc() {
    document.getElementById('todo-widget').style.display = 'flex';
    document.getElementById('side-panel').classList.remove('open');
}

function todoWidgetKapat() {
    document.getElementById('todo-widget').style.display = 'none';
}

// ADD TASK
function gorevEkle() {
    var input = document.getElementById("new-task-input"); // ID changed
    var metin = input.value.trim();

    if (metin === "") {
        alert("Cannot add empty task! 😿");
        return;
    }

    var liste = document.getElementById("todo-list"); // ID changed

    // Create new item (li)
    var yeniMadde = document.createElement("li");
    yeniMadde.className = "task-item"; // Class changed from .gorev-maddesi

    // Fill content (HTML) - Updated classes here too!
    yeniMadde.innerHTML = `
        <input type="checkbox" onclick="gorevCiz(this)">
        <span>${metin}</span>
        <span class="delete-btn" onclick="gorevSil(this)">🗑️</span>
    `;

    // Add to list
    liste.appendChild(yeniMadde);

    // Clear input
    input.value = "";
}

// DELETE TASK
function gorevSil(copKutusu) {
    var satir = copKutusu.parentElement;
    satir.remove();
}

// CROSS OUT TASK (CHECKBOX)
function gorevCiz(kutu) {
    var satir = kutu.parentElement;
        
    if (kutu.checked) {
        satir.classList.add("completed"); // Class changed from .tamamlandi
    } else {
        satir.classList.remove("completed");
    }
}

// Add on Enter key
document.getElementById("new-task-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        gorevEkle();
    }
});

pencereyiSurukle(document.getElementById("todo-widget"));

// --- PHOTO WIDGET FUNCTIONS ---
function photoWidgetAc() {
    document.getElementById('photo-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function photoWidgetKapat() {
    document.getElementById('photo-widget').style.display = 'none';
}

// 1. SHOW PHOTO
function fotoyuGoster(input) {
    if (input.files && input.files[0]) {
        var okuyucu = new FileReader();

        okuyucu.onload = function(e) {
            // IDs changed: displayed-photo, photo-placeholder
            var resim = document.getElementById('displayed-photo');
            var placeholder = document.getElementById('photo-placeholder');

            resim.src = e.target.result; 
                
            resim.style.display = 'block';
            placeholder.style.display = 'none';
        }

        okuyucu.readAsDataURL(input.files[0]);
    }
}

// --- RESIZE FUNCTION ---

boyutlandirabilirYap(document.getElementById("photo-widget"));

function boyutlandirabilirYap(kutu) {
    // Look for '.resize-handle' instead of '.resize-tutac'
    var tutac = kutu.querySelector(".resize-handle");
        
    if (!tutac) return;

    tutac.addEventListener("mousedown", baslatBoyutlandirma);

    function baslatBoyutlandirma(e) {
        e.preventDefault();
            
        window.baslangicX = e.clientX;
        window.baslangicY = e.clientY;
        window.baslangicGenislik = parseInt(document.defaultView.getComputedStyle(kutu).width, 10);
        window.baslangicYukseklik = parseInt(document.defaultView.getComputedStyle(kutu).height, 10);
            
        window.addEventListener("mousemove", boyutlandir);
        window.addEventListener("mouseup", bitirBoyutlandirma);
    }

    function boyutlandir(e) {
        var yeniGenislik = window.baslangicGenislik + (e.clientX - window.baslangicX);
        var yeniYukseklik = window.baslangicYukseklik + (e.clientY - window.baslangicY);
            
        kutu.style.width = yeniGenislik + "px";
        kutu.style.height = yeniYukseklik + "px";
    }

    function bitirBoyutlandirma() {
        window.removeEventListener("mousemove", boyutlandir);
        window.removeEventListener("mouseup", bitirBoyutlandirma);
    }
}

pencereyiSurukle(document.getElementById("photo-widget"));