function changeText() {
  document.getElementById("text").innerText = "The text has been changed!";
}

function changeColor() {
  const box = document.getElementById("box");
  box.style.background = box.style.background === "lightgreen" ? "lightblue" : "lightgreen";
}

function hideBox() {
  document.getElementById("box").style.display = "none";
}

function showBox() {
  document.getElementById("box").style.display = "flex";
}

function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();

  if (value === "") return;

  const li = document.createElement("li");
  li.innerText = value;

  document.getElementById("list").appendChild(li);
  input.value = "";
}