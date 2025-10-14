window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Show text for 4 minutes (240000 ms)
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => preloader.remove(), 600); // fade out smoothly
  }, 240000); // 4 minutes
});