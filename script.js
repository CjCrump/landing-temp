const contactButtons = document.querySelectorAll(".contact-btn");

const portfolioContactUrl =
  "https://CjCrump.github.io/personal-portfolio/#contact";

contactButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = portfolioContactUrl;
  });
});
