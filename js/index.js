// === INDEX.JS ===
// Game Prism TD (Revisi: hanya Level 2, tanpa next level)

// Ambil parameter dari URL (tapi abaikan level lain)
const params = new URLSearchParams(window.location.search);

// === SET DEFAULT LEVEL KE LEVEL 2 ===
// Level disimpan di window.levels dengan index: 0=Level1, 1=Level2, dst
let currentLevel = 1; // langsung pakai Level 2 (window.levels[1])

// Variabel utama
let game;
let isGameOver = false;

// === LOAD LEVEL ===
function loadLevel(levelIndex) {
  // paksa selalu Level 2
  currentLevel = 1; 
  const levelData = window.levels[currentLevel];

  // setup game baru
  game = new Game(levelData);
  game.start();
}

// === EVENT: GAME COMPLETE ===
function onGameComplete() {
  isGameOver = true;

  // tampilkan menu Level Complete
  document.querySelector(".levelCompleteMenu").style.display = "flex";
  document.getElementById("currentLevel").textContent = "2"; // selalu Level 2
  document.querySelectorAll(".score").forEach(s => s.textContent = game.score);

  // tidak ada next level (hapus tombol next)
}

// === EVENT: GAME OVER ===
function onGameOver() {
  isGameOver = true;

  // tampilkan menu Game Over
  document.querySelector(".gameOverMenu").style.display = "flex";
  document.querySelectorAll(".score").forEach(s => s.textContent = game.score);
}

// === BUTTON HANDLERS ===

// restart game
document.getElementById("levelCompleteRestart").addEventListener("click", () => {
  document.querySelector(".levelCompleteMenu").style.display = "none";
  isGameOver = false;
  loadLevel(currentLevel);
});

document.getElementById("gameOverRestart").addEventListener("click", () => {
  document.querySelector(".gameOverMenu").style.display = "none";
  isGameOver = false;
  loadLevel(currentLevel);
});

// home button (kembali ke menu utama)
document.querySelectorAll(".homeButton").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "main-menu.html";
  });
});

// === MULAI GAME ===
window.onload = () => {
  loadLevel(currentLevel);
};
