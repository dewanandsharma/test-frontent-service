
// (function () {

//     if (document.readyState === "loading") {
//         document.addEventListener("DOMContentLoaded", init);
//     } else {
//         init();
//     }

//     function init() {
//         const body = document.getElementById("fastloading");
//         if (!body) return;

//         const images = body.querySelectorAll("img[data-src]");

//         const observer = new IntersectionObserver((entries, obs) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const img = entry.target;
//                     img.src = img.dataset.src;
//                     img.removeAttribute("data-src");
//                     obs.unobserve(img);
//                 }
//             });
//         });

//         images.forEach(img => observer.observe(img));
//     }

// })();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Only trigger when the image enters the viewport
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // If you decide to use data-src later for other images:
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }

            // Trigger your AOS animation manually if it hasn't started
            img.style.opacity = "1"; 
            
            // Stop observing once visible
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: "50px" // Trigger slightly before it hits the screen
});

// Select your hero-bg or any other images you want to watch
document.querySelectorAll('.hero-bg').forEach(img => {
    observer.observe(img);
});