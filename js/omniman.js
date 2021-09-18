let img = document.getElementById('brrr');
let start = img.src;

img.onmouseover = () => { img.src = './img/thick/thiccomniman.png'; }
img.onmouseout = () => { img.src = start; } //to revert back to start


var playBtn = document.getElementById('brrr'),
  hearbeat = document.getElementById('beep')
	audios = document.querySelectorAll('audio');
console.log(audios);

playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);
