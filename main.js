// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fade out the loader once page is ready
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
