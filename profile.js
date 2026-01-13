const fileInput = document.getElementById('fileInput');
const profilePic = document.getElementById('profilePic');
const updateForm = document.getElementById('updateForm');

//RESİM DEĞİŞTİRME
if (fileInput) {
    fileInput.addEventListener('change', function() {
        const file = this.files[0]; // Seçilen ilk dosyayı al

        if (file) {
            // Dosyayı okumak için bir okuyucu (Reader) oluştur
            const reader = new FileReader();

            // Okuma bitince ne yapacağını söyle
            reader.onload = function(e) {
                // resminin kaynağını (src) yeni seçilen resim yap
                profilePic.src = e.target.result;
            }

            // Dosyayı okumayı başlat
            reader.readAsDataURL(file);
        }
    });
}

// Save Changes
if (updateForm) {
    updateForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Sayfa yenilenmesin

        // Yeni ismi kutudan al
        const nameInput = document.getElementById('nameInput');
        const displayName = document.getElementById('userNameDisplay');
        
        if (nameInput && displayName) {
            // Sol taraftaki ismi güncelle
            displayName.innerText = nameInput.value;
        }

        alert("Changes Saved Successfully! ✅");
    });
}