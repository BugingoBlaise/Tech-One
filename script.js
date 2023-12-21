document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href"); // Use e.target instead of this
    const targetElement = document.querySelector(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID " + id + " not found.");
    }
  }
});
document.querySelector(".sublinks").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href"); // Use e.target instead of this
    const targetElement = document.querySelector(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with ID " + id + " not found.");
    }
  }
});
