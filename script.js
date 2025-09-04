function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
});