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




document.addEventListener("DOMContentLoaded", function () {
  // Select all navbar links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        // Close the navbar by removing 'show' class
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the section is visible
  });

  sections.forEach((section) => observer.observe(section));
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.header-section').offsetHeight,
      behavior: 'smooth'
    });
  });
});



function openPdfFullscreen(event) {
  event.preventDefault();

  const pdfUrl = event.target.href;
  const fullscreenWindow = window.open(
    pdfUrl,
    "_blank",
    "toolbar=0,location=0,menubar=0,width=" + screen.width + ",height=" + screen.height
  );
  fullscreenWindow.moveTo(0, 0);
}

const disclaimerLink = document.getElementById('disclaimerLink');
const disclaimerModal = document.getElementById('disclaimerModal');
const closeModalButton = document.getElementById('closeModal');

disclaimerLink.addEventListener('click', () => {
  disclaimerModal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
  disclaimerModal.style.display = 'none';
});
