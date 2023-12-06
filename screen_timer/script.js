const passive = document.querySelector("#passive");
const active = document.querySelector("#active");
var buzzer = new Audio("buzzer.wav");

window.onload = beginTimer();

function beginTimer() {
  buzzer.play();
  document.title = "Screen Timer";
  passive.style.display = "block";
  active.style.display = "none";
  setTimeout(beginBreak, 120000);
}

function beginBreak() {
  buzzer.play();
  document.title = "TIME FOR A BREAK";
  passive.style.display = "none";
  active.style.display = "block";
  setTimeout(beginTimer, 90000);
}
