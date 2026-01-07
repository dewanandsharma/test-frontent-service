const nav = document.getElementById("ProductNav");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const scrollAmount = 200;

nextBtn.onclick = () => {
  nav.scrollLeft += scrollAmount;
};

prevBtn.onclick = () => {
  nav.scrollLeft -= scrollAmount;
};

// Auto hide buttons
function toggleButtons() {
  prevBtn.disabled = nav.scrollLeft <= 0;
  nextBtn.disabled =
    nav.scrollLeft + nav.clientWidth >= nav.scrollWidth - 5;
}

nav.addEventListener("scroll", toggleButtons);
window.addEventListener("resize", toggleButtons);
toggleButtons();
