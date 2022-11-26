// Write your code here!
element.classList.remove("main#main");

document.body.append(h1);
const newHeader = document.createElement("h1");
for (let i = 0; i < 3; i++) {
    const victory = document.createElement("victory");
    victory.textContent = (i + 1).toString();
    ul.append(victory);
  }
element.append(h1);

const main = document.getElementById("main");
main.innerHTML = "<h1>Lexi</h1><h3>is the champion</h3>";


