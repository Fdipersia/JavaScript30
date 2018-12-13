const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skips = player.querySelectorAll('[data-skip');
const progressBar = player.querySelector('.progress');
const progress = player.querySelector('.progress__filled');

function handleToggle(){
  video.paused ? video.play() : video.pause();
};

function handleIcon(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon
};

function handleRange(){
  video[this.name] = this.value;
};

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
};

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100; 
  progress.style.flexBasis = `${percent}%`;
};

function setProgress(e){
  video.currentTime = (e.offsetX / player.offsetWidth) * video.duration;
};

video.addEventListener('pause', handleIcon);
video.addEventListener('play', handleIcon);
video.addEventListener('click', handleToggle);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', handleToggle);
ranges.forEach(range => range.addEventListener("click", handleRange));
ranges.forEach(range => range.addEventListener("mousemove", handleRange));
skips.forEach(button => button.addEventListener("click", skip));
progressBar.addEventListener('click', setProgress);

let mousedown = false; 
progressBar.addEventListener('mousedown', () => mousedown = true ); 
progressBar.addEventListener('mouseup', () => mousedown = false ); 
progressBar.addEventListener('mousemove', (e) => mousedown && setProgress(e)); 