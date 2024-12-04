function showInfo(index) {
    // Hide all sections
    let sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById('info-' + index).style.display = 'flex';
}


document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("video-frame");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add autoplay to the iframe source
                const currentSrc = iframe.src;
                if (!currentSrc.includes("autoplay=1")) {
                    iframe.src = currentSrc + (currentSrc.includes("?") ? "&" : "?") + "autoplay=1";
                }
            } else {
                // Stop the video by resetting the iframe source
                iframe.src = iframe.src.replace("&autoplay=1", "").replace("?autoplay=1", "");
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the iframe is visible
    });

    observer.observe(iframe);
});
