let counterEl = document.getElementById("counter-el");
let prevEntries = document.getElementById("count-pre");
let count = 0;

function increment() {
  count += 1;
  counterEl.textContent = count;
}

function save() {
  prevEntries.textContent += count + " - ";
  counterEl.textContent = 0;
  count = 0;
}
