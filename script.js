
// Find the navigation menu and its button in the HTML.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open or close the navigation menu when clicked.
menuToggle.addEventListener("click", function () {
    // Adds "open" if it is missing, or removes it if present.
    navLinks.classList.toggle("open");

    // Check whether the menu is currently open.
    const isOpen = navLinks.classList.contains("open");

    // Update the accessibility state of the button.
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the menu icon.
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link.
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Display the current year in the footer automatically.
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Get the back-to-top button.
const backToTop = document.getElementById("backToTop");

// Show the button after the visitor scrolls down.
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

// Scroll smoothly to the top when the button is clicked.
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
