const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navMenu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const navChange = document.getElementsByClassName("navBar")[0];

toggleButton.addEventListener("click", () => {
  navChange.classList.toggle("active");
});
