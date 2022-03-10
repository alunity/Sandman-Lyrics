let audio = new Audio("./music/EnterSandman (Remastered).mp3");
audio.currentTime = 69;

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let lyricsElement = document.getElementById("lyrics");

let timings = {
  0: 0,
  1: 70.752884,
  2: 75.120462,
  3: 78.482299,
  4: 82.7642,
  5: 86.338973,
  6: 90.706289,
  7: 94.115164,
  8: 97.721132,
  9: 101.520281,
};

play.addEventListener("click", () => audio.play());
pause.addEventListener("click", () => audio.pause());

// setInterval(() => console.log(audio.currentTime), 1000);

let lyrics = `(Instrumental Intro)

[Verse 1]
Say your prayers, little one, don't forget, my son
To include everyone
I tuck you in, warm within, keep you free from sin
'Til the Sandman, he comes

[Pre-Chorus]
Sleep with one eye open
Gripping your pillow tight

[Chorus]
Exit light
Enter night
Take my hand
We're off to never-never land

[Verse 2]
Something's wrong, shut the light, heavy thoughts tonight
And they aren't of Snow White
Dreams of war, dreams of liars, dreams of dragons' fire
And of things that will bite, yeah

[Pre-Chorus]
Sleep with one eye open
Gripping your pillow tight
[Chorus]
Exit light
Enter night
Take my hand
We're off to never-never land
Yeah-hah

(Guitar Solo)

[Bridge]
Now, I lay me down to sleep (Now, I lay me down to sleep)
Pray the Lord my soul to keep (Pray the Lord my soul to keep)
If I die before I wake (If I die before I wake)
Pray the Lord my soul to take (Pray the Lord my soul to take)
Hush, little baby, don't say a word
And never mind that noise you heard
It's just the beasts under your bed
In your closet, in your head

[Chorus 2]
Exit light
Enter night
Grain of sand

[Chorus]
Exit light
Enter night
Take my hand
We're off to never-never land (yeah, haha haha)
[Outro]
Oh! Yeah-yeah, yo-oh
We're off to never-never land
Take my hand
We're off to never-never land
Take my hand
We're off to never-never land
We're off to never-never land
We're off to never-never land
We're off to never-never land`;

lyrics = lyrics.split("\n");
// console.log(lyrics);
let allLyricElements = [];

for (let i = 0; i < lyrics.length; i++) {
  let x = document.createElement("p");
  if (lyrics[i] == "") {
    x.innerHTML = "&nbsp;";
  } else {
    x.innerHTML = lyrics[i];
    if (lyrics[i][0] != "[") {
      allLyricElements.push(x);
    }
  }
  // x.classList.add("color2");
}
// setInterval(() => {
//   let time = audio.currentTime;
//   let currLyric = -1;
//   for (let i = 0; i < Object.keys(timings).length; i++) {
//     if (timings[i] < time) {
//       currLyric = i;
//     }
//   }
//   if (currLyric != -1) {
//     if (currLyric != 0) {
//       allLyricElements[currLyric - 1].classList.remove("color4");
//       allLyricElements[currLyric - 1].classList.remove("bold");
//       allLyricElements[currLyric - 1].classList.add("color2");
//     }
//     allLyricElements[currLyric].classList.remove("color3");
//     allLyricElements[currLyric].classList.add("color4");
//     allLyricElements[currLyric].classList.add("bold");
//     allLyricElements[currLyric + 1].classList.add("color3");
//   }
// }, 250);
let displayedElements;

function displayedElementsMove(starting, number) {
  displayedElements = allLyricElements.slice(starting, starting + number);
}

function display() {
  lyricsElement.innerHTML = "";

  for (let i = 0; i < displayedElements.length; i++) {
    lyricsElement.appendChild(displayedElements[i]);
  }
}

function getCurrTimingIndex() {
  let time = audio.currentTime;
  let currLyric = -1;
  for (let i = 0; i < Object.keys(timings).length; i++) {
    if (timings[i] < time) {
      currLyric = i;
    }
  }
  return currLyric;
}

function colorLyrics() {
  displayedElements[0].classList.add("color4");
  displayedElements[0].classList.add("bold");
  displayedElements[1].classList.add("color3");

  for (let i = 2; i < displayedElements.length; i++) {
    displayedElements[i].classList.add("color2");
  }
}

currentIndex = getCurrTimingIndex();

setInterval(() => {
  x = getCurrTimingIndex();
  if (x != currentIndex) {
    currentIndex = x;
    displayedElementsMove(currentIndex, 5);
    colorLyrics();
    display();
  }
}, 250);

displayedElementsMove(currentIndex, 5);
colorLyrics();
display();
