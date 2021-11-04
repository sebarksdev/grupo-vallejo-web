/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const targetDiv = document.getElementById("first");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

const targetDiv2 = document.getElementById("second");
const btn2 = document.getElementById("toggle2");
btn2.onclick = function () {
  if (targetDiv2.style.display !== "none") {
    targetDiv2.style.display = "none";
  } else {
    targetDiv2.style.display = "block";
  }
};

const targetDiv3 = document.getElementById("third");
const btn3 = document.getElementById("toggle3");
btn3.onclick = function () {
  if (targetDiv3.style.display !== "none") {
    targetDiv3.style.display = "none";
  } else {
    targetDiv3.style.display = "block";
  }
};

// dafffffffffggsddsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
