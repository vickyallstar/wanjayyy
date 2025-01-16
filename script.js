// Daftar musik untuk setiap halaman
const pageMusic = {
    home: "https://files.catbox.moe/owx3sk.opus",
    about: "https://files.catbox.moe/iazo3f.mp3",
    gallery: "https://files.catbox.moe/39cmv7.mp3"
};

// Fungsi untuk mengganti musik sesuai halaman
function loadPageMusic(page) {
    const audioElement = document.getElementById("audio");
    audioElement.src = pageMusic[page] || "";
    audioElement.play();
}

// Fungsi untuk menampilkan animasi ketik di halaman About
function typeWriter(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            document.getElementById("aboutImage").style.display = "block"; // Tampilkan gambar setelah teks selesai

            // Tampilkan teks "Cantik gak?" dan tombol setelah gambar muncul
            const afterImageContent = `
                <div id="questionContainer" style="text-align: center; margin-top: 10px;">
                    <p id="beautyQuestion">Cantik gak?</p>
                    <div id="buttonsContainer">
                        <button id="yesButton" class="small-button">Iya</button>
                        <button id="noButton" class="small-button">Tidak</button>
                    </div>
                </div>
            `;
            document.getElementById("aboutImage").insertAdjacentHTML("afterend", afterImageContent);

            // Tambahkan event listener untuk tombol
            document.getElementById("yesButton").addEventListener("click", () => {
                window.location.href = "https://www.tiktok.com/@nalput5";
            });

            const noButton = document.getElementById("noButton");
            noButton.addEventListener("mouseover", () => {
                noButton.style.position = "absolute";
                noButton.style.top = `${Math.random() * 80}%`;
                noButton.style.left = `${Math.random() * 80}%`;
            });
        }
    }, speed);
}

// Fungsi untuk menampilkan halaman About
function showPage(page) {
    const pageContent = document.getElementById("pageContent");
    const dashboardImage = document.getElementById("dashboardImage");
    const dashboardHeader = document.getElementById("dashboardHeader");

    dashboardImage.style.display = "none";
    dashboardHeader.style.display = "none";

    if (page === "home") {
        // Konten Home
        pageContent.innerHTML = `
            <p>Thanks to<p> <p>Allah SWT<p> <p>Ortu Saya<p> <p>ChatGPT<p> <p>myself.</p>
            <p>Sumber Picture: <a href="https://www.tiktok.com/@nalput5?_t=ZS-8t79kYiodla&_r=1" target="_blank">Kaa Cinta<3</a></p>
            <p id="websiteText" class="typewriter"></p>
        `;
        typeWriter("Hanya bercanda bree,cuma gabut aja,kalau mau dibikinin boleh,wkwk.", "websiteText", 100);
    } else if (page === "about") {
        // Konten About
        pageContent.innerHTML = `
            <p id="aboutText" class="typewriter"></p>
            <div id="aboutImage" class="about-image" style="display: none;">
                <img src="https://files.catbox.moe/vb4as4.jpeg" alt="About Image">
            </div>
        `;
        typeWriter("Hallo,nama dia nabila,kenapa aku pakai foto dia?,karna dia lucu,yasudahlah,saya cuma gwabut.", "aboutText", 100);
    } else if (page === "gallery") {
        // Konten Gallery
        pageContent.innerHTML = `
            <div class="gallery-container">
                <img src="https://files.catbox.moe/e6wwd9.jpg" alt="Gallery Image 1">
                <img src="https://files.catbox.moe/tpqi6h.jpg" alt="Gallery Image 2">
                <img src="https://files.catbox.moe/sa72n1.jpg" alt="Gallery Image 3">
                <img src="https://files.catbox.moe/c7tpva.jpg" alt="Gallery Image 4">
                <img src="https://files.catbox.moe/u0b0gi.jpg" alt="Gallery Image 5">
                <img src="https://files.catbox.moe/pq9qsz.jpg" alt="Gallery Image 6">
            </div>
        `;
    }

    loadPageMusic(page);
}

// Data pengguna (simulasi database)
const users = [
    { username: 'vicky', password: 'vicky' },
    { username: '', password: '' },
    { username: '', password: '' },
    { username: '', password: '' },
    { username: '', password: '' }
];

// Fungsi untuk menangani login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Memeriksa apakah username dan password sesuai dengan data pengguna
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Jika username dan password benar
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboardPage").style.display = "block";
    } else {
        // Jika username atau password salah, kirim ke WhatsApp
        const phoneNumber = "6285274582343";
        const teksnya = "Kak passwordnya apa?";
        const url = `https://wa.me/${phoneNumber}?text=${teksnya}`;
        window.location.href = url;

        // Tampilkan pesan error
        document.getElementById("error-message").innerText = "Username atau password salah!";
    }
});

// Inisialisasi musik untuk halaman pertama (Home)
loadPageMusic("home");