document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    document.getElementById("porto"),
    document.getElementById("portofolio"),
    document.getElementById("about"),
    document.getElementById("skill"),
    document.getElementById("contact"),
    document.getElementById("footer"),
  ];

  const options = {
    root: null, // viewport default
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("invisible");
      } else {
        entry.target.classList.remove("visible");
        entry.target.classList.add("invisible");
      }
    });
  }, options);

  elements.forEach((element) => {
    if (element) {
      observer.observe(element); // Observe each element
      element.classList.add("invisible"); // Initialize with invisible class
    }
  });
});
