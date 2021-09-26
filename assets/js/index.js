/*
const [elem1, elem2] = document.querySelectorAll('h1');

window.onresize = fun2;
window.onload = fun2;

window.ondblclick = function (e) {
    console.log(e);
};

window.onclick = function (e) {
    console.log(e);
};

window.onkeydown = function (e) {
    console.log(e);
};

function fun2(e) {
elem1.innerText = `window width = ${window.innerWidth}px`;
elem2.innerText = `window heigh = ${window.innerHeight}px`;
};
*/

/*
function logWindowEvent(e) {
    console.log(e);
};

const input = document.querySelector('input[type="text"]');
input.oninput = logWindowEvent;
input.onchange = logWindowEvent;
input.onfocus = logWindowEvent;
input.onblur = logWindowEvent;
*/

const colors = document.querySelectorAll('label>input[type="range"]');
const BG_COLOR_KEY = 'BG_COLOR_KEY';
const COLORS_PATTERN = /[0-9.]{1,4}/g;

for (const i of colors) {
    i.oninput = updateBodyColor;
}

function updateBodyColor() {
    let value = 'rgba(';
    colors.forEach(function (range, index, list) {
      if (index == list.length - 1) {
        value += range.value + ')';
      } else {
        value += range.value + ',';
      }
    });

    localStorage.setItem(BG_COLOR_KEY, value);
    document.body.style.backgroundColor = value;
    console.log(value);
}

window.onload = function () {
    const value = localStorage.getItem(BG_COLOR_KEY);
    document.body.style.backgroundColor = value;
    const sliders = value.match(COLORS_PATTERN);
    sliders.forEach(function (value, index) {
      colors[index].value = value;
    });
};