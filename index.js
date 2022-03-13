let audio = new Audio("./music/EnterSandman(Remastered).mp3");
audio.currentTime = 270;

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let lyricsElement = document.getElementById("lyrics");

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());

function display(start, number) {
  lyricsElement.innerHTML = "";
  for (let i = 0; i < number; i++) {
    try {
      let p = document.createElement("p");
      p.innerHTML = lyrics[i + start].lyrics;

      if (i == 0) {
        p.classList.add("color4");
        p.classList.add("bold");
      } else if (i == 1) {
        p.classList.add("color3");
      } else {
        p.classList.add("color2");
      }

      lyricsElement.appendChild(p);
    } catch {
      // Not enough elements to fufil number
    }
  }
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
