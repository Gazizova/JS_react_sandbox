function init() {
  // create web audio api context
  //   window.onload = function() {
  //     debugger;
  //     var context = new AudioContext();
  //     var mp3 = './don-diablo-amp-steve-aoki-x-lush-amp-simon-what-we-started.mp3';

  //     // var buff = () => mp3.arrayBuffer();

  //     var oscillatorNode = context.createOscillator();
  //     var gainNode = context.createGain();
  //     var finish = context.destination;

  //     var decode = context.decodeAudioData(() => mp3.arrayBuffer());

  //     decode.start();
  //   };
  // }
  // init();

  function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }

  BufferLoader.prototype.loadBuffer = function(url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    var loader = this;

    request.onload = function() {
      // Asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response,
        function(buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
          }
          loader.bufferList[index] = buffer;
          if (++loader.loadCount == loader.urlList.length) loader.onload(loader.bufferList);
        },
        function(error) {
          console.error('decodeAudioData error', error);
        }
      );
    };

    request.onerror = function() {
      alert('BufferLoader: XHR error');
    };

    request.send();
  };

  BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i) this.loadBuffer(this.urlList[i], i);
  };

  var NOISE_FACTOR = 0.05;

  function ScriptSample() {
    this.BUFFER_SIZE = 2048;

    this.isPlaying = false;
    this.isNoise = true;
    this.isChannelFlip = false;
    // Load a sound.
    loadSounds(this, {
      buffer: 'chrono.mp3'
    });
  }

  ScriptSample.prototype.play = function() {
    var source = context.createBufferSource();
    source.buffer = this.buffer;

    // Hook it up to a ScriptProcessorNode.
    var processor = context.createScriptProcessor(this.BUFFER_SIZE);
    processor.onaudioprocess = this.onProcess;

    source.connect(processor);

    console.log('start');
    source[source.start ? 'start' : 'noteOn'](0);
    this.source = source;
  };

  ScriptSample.prototype.stop = function() {
    console.log('stop');
    this.source[this.source.stop ? 'stop' : 'noteOff'](0);
  };

  ScriptSample.prototype.onProcess = function(e) {
    var leftIn = e.inputBuffer.getChannelData(0);
    var rightIn = e.inputBuffer.getChannelData(1);
    var leftOut = e.outputBuffer.getChannelData(0);
    var rightOut = e.outputBuffer.getChannelData(1);

    for (var i = 0; i < leftIn.length; i++) {
      // Flip left and right channels.
      if (this.isChannelFlip) {
        leftOut[i] = rightIn[i];
        rightOut[i] = leftIn[i];
      } else {
        leftOut[i] = leftIn[i];
        rightOut[i] = rightIn[i];
      }

      // Add some noise
      if (true) {
        leftOut[i] += (Math.random() - 0.5) * NOISE_FACTOR;
        rightOut[i] += (Math.random() - 0.5) * NOISE_FACTOR;
      }
    }
  };

  ScriptSample.prototype.toggle = function() {
    this.isPlaying ? this.stop() : this.play();
    this.isPlaying = !this.isPlaying;
  };
  ////////////////////////////////////////////////////////////////////
  var context = new (window.AudioContext || window.webkitAudioContext)();

  if (!context.createGain) context.createGain = context.createGainNode;
  if (!context.createDelay) context.createDelay = context.createDelayNode;
  if (!context.createScriptProcessor) context.createScriptProcessor = context.createJavaScriptNode;

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source[source.start ? 'start' : 'noteOn'](time);
  }

  function loadSounds(obj, soundMap, callback) {
    // Array-ify
    var names = [];
    var paths = [];
    for (var name in soundMap) {
      var path = soundMap[name];
      names.push(name);
      paths.push(path);
    }
    var bufferLoader = new BufferLoader(context, paths, function(bufferList) {
      for (var i = 0; i < bufferList.length; i++) {
        var buffer = bufferList[i];
        var name = names[i];
        obj[name] = buffer;
      }
      if (callback) {
        callback();
      }
    });
    bufferLoader.load();
  }
}

var button = document.getElementById('audio');
// var script = new ScriptSample();
// button.addEventListener('click', script.toggle);
