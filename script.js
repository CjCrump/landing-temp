const contactButtons = document.querySelectorAll(".contact-btn");

contactButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});

