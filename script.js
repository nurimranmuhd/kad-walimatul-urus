// Fungsi navigasi ke halaman lain
function navigate(page) {
    window.location.href = page;
}

// Simpan dan Paparkan Ucapan
function simpanUcapan() {
    let ucapanInput = document.getElementById("ucapan");
    let ucapan = ucapanInput.value.trim();
    
    if (ucapan === "") {
        alert("Sila tulis ucapan terlebih dahulu!");
        return;
    }
    
    // Dapatkan senarai ucapan
    let list = document.getElementById("senarai-ucapan");
    let item = document.createElement("li");
    item.textContent = ucapan;
    
    // Masukkan ke dalam senarai
    list.appendChild(item);

    // Kosongkan input selepas hantar
    ucapanInput.value = "";
}

// Pastikan butang boleh ditekan
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("Butang ditekan:", this.innerText);
        });
    });
});
