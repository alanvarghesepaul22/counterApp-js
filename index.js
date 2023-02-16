let counterEl = document.getElementById("counter-el");
let prevEntries = document.getElementById("count-pre");
let count = 0;

function increment() {
  count += 1;
  counterEl.textContent = count;
}

function save() {
  if(count==22){
    window.location="./index1.html"
  }
  prevEntries.textContent += count + " - ";
  counterEl.textContent = 0;
  count = 0;
}
