// Smooth scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior:"smooth" });
}

// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}