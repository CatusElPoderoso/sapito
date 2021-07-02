const slider = document.getElementById("slider");
let secSlider = document.querySelectorAll(".sec-slider");
let secSliderLast = secSlider[secSlider.length - 1];

const btnLeft = document.getElementById("btn-slider-left");
const btnRight = document.getElementById("btn-slider-right");

slider.insertAdjacentElement('afterbegin', secSliderLast);

function derecha(){
    let secSliderFirst = document.querySelectorAll(".sec-slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', secSliderFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function izquierda(){
    let secSlider = document.querySelectorAll(".sec-slider");
    let secSliderLast = secSlider[secSlider.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', secSliderLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    derecha();
});

btnLeft.addEventListener('click', function(){
    izquierda();
});

setInterval(function(){
    derecha();
}, 30000);