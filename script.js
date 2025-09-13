
// Global variable (bad practice in real projects, but shown here for scope demo)
let clickCount = 0;

// Function with parameter & return value
function calculateDouble(num) {
  return num * 2;
}

// Function demonstrating local scope
function logClick() {
  let localMessage = "Box clicked " + calculateDouble(clickCount) + " times (doubled)";
  console.log(localMessage);
}

// ===============================
// Part 3: JS Triggering Animations
// ===============================

const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");

// Toggle animation class
animateBtn.addEventListener("click", () => {
  clickCount++;
  box.classList.toggle("active");
  logClick(); // Calls function using scope + return value
});

// Modal functionality
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
