document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");

  // Show the button when scrolling down
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      // Adjust the value to when you want the button to appear
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });

  // Scroll back to top on click
  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
