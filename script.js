function largerButton(button) {
  button.style.padding = "5px 10px";
}

function normalButton(button) {
  button.style.padding = "2px 5px";
}

function blink() {
  let h1 = document.getElementById("shadow");
  if (h1.style.visibility === 'visible') {
    h1.style.visibility = 'hidden';
  } else {
    h1.style.visibility = 'visible';
  }
}
window.setInterval(blink, 1000);

function visible() {
  document.getElementById("funFact").style.visibility = 'visible';
}

function blinkBorder() {
  let img = document.getElementById("me");
  if (img.style.border === '4px dashed brown') {
    img.style.border = 'hidden';
  } else {
    img.style.border = '4px dashed brown';
  }
  window.setInterval(blinkBorder, 1000);
}
let border = window.setInterval(blinkBorder, 1000);

function normalBorder() {
  clearInterval(border);
  document.getElementById("me").style.border = '4px dashed brown';
}