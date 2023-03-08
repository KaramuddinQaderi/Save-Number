// document.getElementById("count-el").innerText = 5;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = -1;

function increment() {
  countEl.textContent = ++count;
}
increment();


function save() {
  let countStr = count + "$ _ ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  alert("SAVE YOUR MONEY!");
}