// TOGGLE DARK MODE
const darkModeBtn = document.querySelector(".btn-dark-mode");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
  if (!body.classList.contains("dark-mode")) {
    body.classList.add("dark-mode");
    darkModeBtn.innerHTML = "View profile in Light Mode";
  } else {
    body.classList.remove("dark-mode");
    darkModeBtn.innerHTML = "View profile in Dark Mode";
  }
});
