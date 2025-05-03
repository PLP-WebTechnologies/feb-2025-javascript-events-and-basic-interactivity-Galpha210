// Button Click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "green";
});

// Hover Effect handled in CSS

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keydown", function (e) {
  console.log(`You pressed: ${e.key}`);
});

// Secret Action (Double Click or Long Press)
let secretBox = document.getElementById("secretAction");
secretBox.addEventListener("dblclick", () => {
  alert("You discovered the secret double-click!");
});
let pressTimer;
secretBox.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => alert("Long press activated!"), 1000);
});
secretBox.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Image Gallery
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;
document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  document.getElementById("galleryImage").src = images[index];
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
    document.getElementById("tab" + tab.dataset.tab).style.display = "block";
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (!/\S+@\S+\.\S+/.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
});

// Real-time Password Feedback
document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("feedback");
  feedback.textContent = this.value.length < 8 ? "Password too short!" : "Looking good!";
});
