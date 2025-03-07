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

    if (!nama || !ttl || !pendidikan) {
        alert("Harap isi semua data!");
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("ttl", ttl);
    localStorage.setItem("pendidikan", pendidikan);

    window.location.href = "cv.html";
}

function tampilkanCV() {
    checkLogin();
    
    document.getElementById("cvNama").innerText = localStorage.getItem("nama");
    document.getElementById("cvTTL").innerText = localStorage.getItem("ttl");
    document.getElementById("cvPendidikan").innerText = localStorage.getItem("pendidikan");
    document.getElementById("cvEmail").innerText = localStorage.getItem("email");
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}