function showInfo(index) {
    // Hide all sections
    let sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById('info-' + index).style.display = 'flex';
}


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".info-section, .card, .school-card");
  
    const observerOptions = {
      root: null, // Observing relative to the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, observerOptions);
  
    elements.forEach((el) => observer.observe(el));
  });

  


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

document.addEventListener('DOMContentLoaded', function () {
  const swiperConfig = JSON.parse(document.querySelector('.swiper-config').textContent);
  const swiper = new Swiper('.init-swiper', swiperConfig);
});





  