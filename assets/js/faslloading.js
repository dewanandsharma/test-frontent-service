
(function () {

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    function init() {
        const body = document.getElementById("fastloading");
        if (!body) return;

        const images = body.querySelectorAll("img[data-src]");

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    obs.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }

})();

