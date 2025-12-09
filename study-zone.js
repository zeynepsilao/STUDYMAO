function derseBasla() {
    document.getElementById('welcome-popup').style.display = 'none';
    // Unblur the Desk 
    var masa = document.getElementById('main-desk');
    masa.style.filter = 'none';
    masa.style.pointerEvents = 'all'; // Make clickable
}

// SIDE MENU
function menuyuAcKapa() {
    var panel = document.getElementById('side-panel');
    panel.classList.toggle('open');
}

// POMODORO 
var sure = 25 * 60; 
var timer; 

function pomoWidgetAc() {
    
    document.getElementById('pomo-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function pomoWidgetKapat() {
    document.getElementById('pomo-widget').style.display = 'none';
}
            
function baslat() {
    if(timer) clearInterval(timer); 
        
    timer = setInterval(function() {
        sure--;
        
        var dakika = Math.floor(sure / 60);
        var saniye = sure % 60;
            
        if (saniye < 10) saniye = "0" + saniye;
            
        document.getElementById('pomodoro-timer').innerText = dakika + ":" + saniye;
            
        if (sure <= 0) {
            clearInterval(timer);
            alert("Time's up! Break Time 😺");
        }
    }, 1000);
}

function sifirla() {
    clearInterval(timer); 
    sure = 25 * 60; 
    document.getElementById('pomodoro-timer').innerText = "25:00";
}

// CALCULATOR

function calcWidgetAc() {
    document.getElementById('calc-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function calcWidgetKapat() {
    document.getElementById('calc-widget').style.display = 'none';
    calcTemizle();
}

function calcYaz(deger) {
    document.getElementById('calc-display').value += deger;
}

function calcTemizle() {
    document.getElementById('calc-display').value = '';
}

function calcHesapla() {
    var ekran = document.getElementById('calc-display');
    try {
        ekran.value = eval(ekran.value); // eval() solves string math 
    } catch (e) {
        ekran.value = 'Error';
    }
}

// DRAGGING 
pencereyiSurukle(document.getElementById("pomo-widget"));
pencereyiSurukle(document.getElementById("calc-widget"));

function pencereyiSurukle(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
    var baslik = elmnt.querySelector(".widget-header");
        
    if (baslik) {
        baslik.onmousedown = suruklemeyiBaslat;
    } else {
        elmnt.onmousedown = suruklemeyiBaslat;
    }

    function suruklemeyiBaslat(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = suruklemeyiBitir;
        document.onmousemove = elementSurukle;
    }

    function elementSurukle(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function suruklemeyiBitir() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// NOTEPAD 

function noteWidgetAc() {
    document.getElementById('notes-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function noteWidgetKapat() {
    document.getElementById('notes-widget').style.display = 'none';
}


function notKontrol(alan) {
    //AUTO RESIZE
    alan.style.height = 'auto'; // Reset height
    alan.style.height = (alan.scrollHeight) + 'px'; // Stretch to fit text

    if (alan.scrollHeight > 400) {
        alan.style.overflowY = "scroll";
    } else {
        alan.style.overflowY = "hidden";
    }

    // WORD COUNTER
    var metin = alan.value.trim();
    var kelimeler = metin.split(/\s+/).filter(function(n) { return n != '' });
    var sayi = kelimeler.length;

    document.getElementById('word-count').innerText = sayi;

    if (sayi > 1000) {
        alert("MEOW! You've exceeded 1000 words. Are you writing a novel? 😺");
        document.getElementById('word-count').style.color = "red";
    } else {
        document.getElementById('word-count').style.color = "#777";
    }
}
pencereyiSurukle(document.getElementById("notes-widget"));

//TO-DO LIST 

function todoWidgetAc() {
    document.getElementById('todo-widget').style.display = 'flex';
    document.getElementById('side-panel').classList.remove('open');
}

function todoWidgetKapat() {
    document.getElementById('todo-widget').style.display = 'none';
}

// ADD TASK
function gorevEkle() {
    var input = document.getElementById("new-task-input");
    var metin = input.value.trim();

    if (metin === "") {
        alert("Cannot add empty task! 😿");
        return;
    }

    var liste = document.getElementById("todo-list"); 

    var yeniMadde = document.createElement("li");
    yeniMadde.className = "task-item"; 

    yeniMadde.innerHTML = `
        <input type="checkbox" onclick="gorevCiz(this)">
        <span>${metin}</span>
        <span class="delete-btn" onclick="gorevSil(this)">🗑️</span>
    `;

    liste.appendChild(yeniMadde);

    input.value = "";
}

// DELETE TASK
function gorevSil(copKutusu) {
    var satir = copKutusu.parentElement;
    satir.remove();
}

// CHECKBOX
function gorevCiz(kutu) {
    var satir = kutu.parentElement;
        
    if (kutu.checked) {
        satir.classList.add("completed"); 
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

// PHOTO WIDGET 
function photoWidgetAc() {
    document.getElementById('photo-widget').style.display = 'block';
    document.getElementById('side-panel').classList.remove('open');
}

function photoWidgetKapat() {
    document.getElementById('photo-widget').style.display = 'none';
}

// SHOW PHOTO
function fotoyuGoster(input) {
    if (input.files && input.files[0]) {
        var okuyucu = new FileReader();

        okuyucu.onload = function(e) {
            var resim = document.getElementById('displayed-photo');
            var placeholder = document.getElementById('photo-placeholder');

            resim.src = e.target.result; 
                
            resim.style.display = 'block';
            placeholder.style.display = 'none';
        }

        okuyucu.readAsDataURL(input.files[0]);
    }
}

// RESIZE 

boyutlandirabilirYap(document.getElementById("photo-widget"));

function boyutlandirabilirYap(kutu) {
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