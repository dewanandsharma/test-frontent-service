(function () {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    function init() {
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

        document.querySelectorAll("img[data-src], .hero-bg").forEach(img => {
            observer.observe(img);
        });
    }
})();
