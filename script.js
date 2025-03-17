function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (!email.includes("@")) {
        alert("Masukkan email yang valid!");
        return;
    }
    
    let domain = email.split("@")[1];
    if (password !== domain) {
        alert("Password harus sesuai dengan domain email!");
        return;
    }

    localStorage.setItem("email", email);
    window.location.href = "form.html";
}

function checkLogin() {
    if (!localStorage.getItem("email")) {
        alert("Anda harus login terlebih dahulu!");
        window.location.href = "index.html";
    }
}

function simpanData() {
    let nama = document.getElementById("nama").value;
    let ttl = document.getElementById("ttl").value;
    let pendidikan = document.getElementById("pendidikan").value;
    let fotoInput = document.getElementById("foto").files[0];

    if (!nama || !ttl || !pendidikan || !fotoInput) {
        alert("Harap isi semua data!");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        localStorage.setItem("nama", nama);
        localStorage.setItem("ttl", ttl);
        localStorage.setItem("pendidikan", pendidikan);
        localStorage.setItem("foto", e.target.result);

        window.location.href = "cv.html";
    };
    reader.readAsDataURL(fotoInput);
}

function tampilkanCV() {
    checkLogin();
    
    document.getElementById("cvNama").innerText = localStorage.getItem("nama");
    document.getElementById("cvTTL").innerText = localStorage.getItem("ttl");
    document.getElementById("cvPendidikan").innerText = localStorage.getItem("pendidikan");
    document.getElementById("cvEmail").innerText = localStorage.getItem("email");
    
    let foto = localStorage.getItem("foto");
    if (foto) {
        document.getElementById("cvFoto").src = foto;
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
