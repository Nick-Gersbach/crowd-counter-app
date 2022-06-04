let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  countEl.innerText = count += 1;
  console.log(count);
}

function decrement() {
  countEl.innerText = count -= 1;
  console.log(count);
}

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
function save() {
  let savedCount = " " + count + " " + "-";
  saveEl.innerText += savedCount;
  countEl.textContent = 0;
  count = 0;
}
