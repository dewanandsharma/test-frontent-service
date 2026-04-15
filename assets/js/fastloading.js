(function () {
    const init = () => {
        // 1. Define the observer first
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute("data-src");
                    }
                    img.style.opacity = "1";
                    observer.unobserve(img);
                }
            });
        }, { rootMargin: "50px" });

        // 2. Apply the logic to your elements
        document.querySelectorAll("img[data-src], .hero-bg").forEach((img, index) => {
            // Immediately load the first hero image to boost LCP score
            if (index === 0) { 
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                }
                img.style.opacity = "1";
            } else {
                // Lazy load everything else as the user scrolls
                observer.observe(img);
            }
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();