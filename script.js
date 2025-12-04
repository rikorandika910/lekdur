const audio = document.getElementById("audio");
const title = document.getElementById("title");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const repeatBtn = document.getElementById("repeat");

let repeat = false;
let index = 0;

// Daftar musik — ganti URL sesuai kebutuhan
let songs = [
  { title: "Flatline", src: "Flatline.mp3" },
  { title: "Song 2", src: "song2.mp3" },
  { title: "Song 3", src: "song3.mp3" }
];

function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
}

function playMusic() {
  audio.play();
  playBtn.textContent = "⏸";
}

function pauseMusic() {
  audio.pause();
  playBtn.textContent = "▶";
}

playBtn.onclick = () => {
  audio.paused ? playMusic() : pauseMusic();
};

nextBtn.onclick = () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  playMusic();
};

prevBtn.onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  playMusic();
};

repeatBtn.onclick = () => {
  repeat = !repeat;
  repeatBtn.style.color = repeat ? "#4caf50" : "white";
};

audio.onended = () => {
  if (repeat) {
    playMusic();
  } else {
    index = (index + 1) % songs.length;
    loadSong(index);
    playMusic();
  }
};

// Load awal
loadSong(index);
