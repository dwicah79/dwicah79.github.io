document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("typed-text");
  const texts = [
    "I'm a Freelancer",
    "I'm a Web Developer",
    "I'm a Informatics Student",
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;
  let textIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function type() {
    if (!isErasing && charIndex < texts[textIndex].length) {
      typedText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else if (!isErasing) {
      isErasing = true;
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (isErasing && charIndex > 0) {
      typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else if (isErasing) {
      isErasing = false;
      textIndex++;
      if (textIndex >= texts.length) textIndex = 0; // Reset the text index
      setTimeout(type, typingDelay + 500);
    }
  }

  function startTyping() {
    if (isErasing) {
      erase();
    } else {
      type();
    }
  }

  setTimeout(startTyping, newTextDelay);
});
