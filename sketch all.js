var isPlaying1 = false;
var audio1 = document.getElementById("audioPlayer1");
var playButton1 = document.getElementById("playButton1");

function playPauseMusic1() {
  var playButtonText = isPlaying1 ? "Play Music 1" : "Pause Music 1";
  if (isPlaying1) {
    audio1.pause();
    isPlaying1 = false;
  } else {
    audio1.play();
    isPlaying1 = true;
  }
  playButton1.innerHTML = playButtonText;
}

var isPlaying2 = false;
var audio2 = document.getElementById("audioPlayer2");
var playButton2 = document.getElementById("playButton2");

function playPauseMusic2() {
  var playButtonText = isPlaying2 ? "Play Music 2" : "Pause Music 2";
  if (isPlaying2) {
    audio2.pause();
    isPlaying2 = false;
  } else {
    audio2.volume = 0.4;
    audio2.play();
    isPlaying2 = true;
    audio1.pause();
    isPlaying1 = false;
    playButton1.innerHTML = "Play Music 1";
  }
  playButton2.innerHTML = playButtonText;
}







