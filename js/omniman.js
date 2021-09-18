let img = document.getElementById('brrr');
let start = img.src;

img.onmouseover = () => { img.src = './img/thick/thiccomniman.png'; }
img.onmouseout = () => { img.src = start; } //to revert back to start