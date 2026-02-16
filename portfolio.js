const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const themeBtn = document.getElementById("theme");
const drawerBtn = document.getElementById("drawerBtn");
const drawer = document.getElementById("drawer");
const msg = document.getElementById("msg");
const form = document.getElementById("form");

// Theme
const savedTheme = localStorage.getItem("t");
if (savedTheme === "light") document.body.classList.add("light");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("t", document.body.classList.contains("light") ? "light" : "dark");
  themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☀︎";
});

// Drawer
drawerBtn.addEventListener("click", () => drawer.classList.toggle("open"));
drawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => drawer.classList.remove("open"));
});

// Contact demo
form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "تم الإرسال (تجريبي). إذا تبي ربط حقيقي: EmailJS أو PHP/Node.";
  form.reset();
});
