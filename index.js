let audio = new Audio("./music/EnterSandman(Remastered).mp3");
audio.currentTime = 0;

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let restart = document.getElementById("restart");
let lyricsElement = document.getElementById("lyrics");

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());
restart.addEventListener("click", () => audio.currentTime = 0);

function display(start, number) {
  lyricsElement.innerHTML = "";
  lyricsElement.className = "";
  for (let i = 0; i < number + 1; i++) {
    try {
      let p = document.createElement("h3");
      p.innerHTML = lyrics[i + start - 1].lyrics;

      if (i == 0) {
        p.classList.add("fadeIn");
        p.classList.add("color4");

        setTimeout(() => {
          p.classList.remove("fadeIn");
          p.classList.add("fadeOut");
        }, 1);
      } else if (i == 1) {
        p.classList.add("color3");
        setTimeout(() => {
          p.classList.remove("color3");
          p.classList.add("color4");
        }, 1);
      } else if (i == 2) {
        p.classList.add("color3");
      } else if (i == number) {
        p.classList.add("fadeOut");
        p.classList.add("color1");
        setTimeout(() => {
          p.classList.remove("fadeOut");
          p.classList.remove("color1");
          p.classList.add("fadeIn");
          p.classList.add("color2");
        }, 300);
      } else {
        p.classList.add("color2");
      }

      lyricsElement.appendChild(p);
    } catch {
      // Not enough elements to fufil number
      if (start == 0) {
        let p = document.createElement("h3");
        p.innerHTML = "&nbsp;";
        lyricsElement.appendChild(p);
      }
    }
  }
  setTimeout(() => {
    lyricsElement.classList.add("shiftUp");
  }, 1);
}

function getCurrentIndex() {
  let index = 0;
  for (let i = 0; i < lyrics.length; i++) {
    if (audio.currentTime > lyrics[i].seconds) {
      index = i;
    }
  }
  return index;
}

let lastIndex = getCurrentIndex();

display(lastIndex, 5);

setInterval(() => {
  let currentIndex = getCurrentIndex();
  if (currentIndex != lastIndex) {
    lastIndex = currentIndex;
    display(lastIndex, 5);
  }
}, 250);
