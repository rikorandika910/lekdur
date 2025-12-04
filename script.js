const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const playlistEl = document.getElementById("playlist");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const repeatBtn = document.getElementById("repeat");

let index = 0;
let repeat = false;

let songs = [
  { title: "Flatline", src: "Flatline.mp3" },
  { title: "Lagu Kedua", src: "song2.mp3" },
  { title: "Lagu Ketiga", src: "song3.mp3" }
];

function renderPlaylist() {
  playlistEl.innerHTML = "";
  songs.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = s.title;
    if (i === index) li.classList.add("active");
    li.onclick = () => {
      index = i;
      loadSong();
      playMusic();
    };
    playlistEl.appendChild(li);
  });
}

function loadSong() {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  renderPlaylist();
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
  loadSong();
  playMusic();
};

prevBtn.onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  playMusic();
};

repeatBtn.onclick = () => {
  repeat = !repeat;
  repeatBtn.style.color = repeat ? "lime" : "cyan";
};

audio.onended = () => {
  if (repeat) {
    playMusic();
  } else {
    nextBtn.onclick();
  }
};

loadSong();
