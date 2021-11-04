const div = document.getElementById("submenu-servicios");
const button = document.getElementById("cambiar");
button.onclick = function () {
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
};
const div2 = document.getElementById("submenu-servicios2");
const button2 = document.getElementById("cambiar2");
button2.onclick = function () {
  if (div2.style.display !== "none") {
    div2.style.display = "none";
  } else {
    div2.style.display = "block";
  }
};
