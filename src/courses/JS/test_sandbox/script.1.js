var audioCtx;
var audioBuffer;
function init() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  } catch (e) {
    alert("Your browser doesn't support Web Audio API");
  }

  loadSound();
  // playSound();  // comment here
}
function loadSound() {
  var audioURL = 'https://mdn.github.io/voice-change-o-matic/audio/concert-crowd.ogg';

  //creating a new request
  var request = new XMLHttpRequest();
  request.open('GET', audioURL, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    //take the audio from http request and decode it in an audio buffer
    audioCtx.decodeAudioData(request.response, function(buffer) {
      console.log(buffer);
      if (buffer) {
        // check here
        playSound();
      }
    });
  };

  request.send();
}

//playing the audio file
function playSound() {
  //creating source node
  var source = audioCtx.createBufferSource();
  //passing in file
  source.buffer = audioBuffer;

  //start playing
  source.connect(audioCtx.destination); // added
  source.start(0);
  console.log('playing');
}

document.getElementById('audiobutton').addEventListener('click', init);
