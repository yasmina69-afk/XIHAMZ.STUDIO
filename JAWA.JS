// Ambil elemen HTML
const homeButton = document.querySelector('.nav-title');
const popup = document.getElementById('social-popup');
const closeBtn = document.getElementById('close-popup');
const previewWrapper = document.getElementById("previewWrapper");
const previewPlayer = document.getElementById("previewPlayer");
let previewEnabled = false;

// Tampilkan popup
homeButton.addEventListener('click', () => {
  popup.classList.add('show');
  popup.style.display = 'block';
});

// Tutup popup dengan tombol ❌
closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
});

// Opsional: Tutup jika klik di luar
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  }
});

// Aktifkan audio preview saat pertama kali klik di mana saja
function enablePreviewAudio() {
  if (!previewEnabled) {
    previewPlayer.play().then(() => {
      previewPlayer.pause();
      previewEnabled = true;
      console.log("✅ Preview audio enabled!");
    }).catch(err => {
      console.warn("⚠️ Preview autoplay blocked again:", err);
    });
  }
}

// Fungsi play preview
function playPreview(src) {
  if (!previewEnabled) return;
  previewPlayer.pause();
  previewPlayer.src = src;
  previewPlayer.currentTime = 0;
  previewPlayer.volume = 0.5;
  previewPlayer.play().catch(err => {
    console.warn("Preview play failed:", err);
  });
}

// Fungsi stop preview
function stopPreview() {
  previewPlayer.pause();
  previewPlayer.currentTime = 0;
}

// Tambahkan class untuk efek gelombang suara saat audio diputar
previewPlayer.addEventListener("play", () => {
  previewWrapper.classList.add("playing");
});

previewPlayer.addEventListener("pause", () => {
  previewWrapper.classList.remove("playing");
});

previewPlayer.addEventListener("ended", () => {
  previewWrapper.classList.remove("playing");
});

    function playPreview(src) {
      previewPlayer.src = src;
      previewPlayer.currentTime = 0;
      previewPlayer.volume = 0.5;
      previewPlayer.play();
    }

    function stopPreview() {
      previewPlayer.pause();
      previewPlayer.currentTime = 0;
    }