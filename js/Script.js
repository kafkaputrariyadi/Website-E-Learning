// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navButtons = document.getElementById("navButtons");

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    navButtons.classList.toggle("mobile-visible");
    navButtons.classList.toggle("mobile-hidden");

    // Change icon
    const icon = mobileMenuBtn.querySelector("i");
    if (navButtons.classList.contains("mobile-visible")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".header") && window.innerWidth <= 768) {
      navButtons.classList.remove("mobile-visible");
      navButtons.classList.add("mobile-hidden");

      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navButtons.classList.remove("mobile-hidden", "mobile-visible");

      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      navButtons.classList.add("mobile-hidden");
    }
  });

  // Initialize mobile menu state
  if (window.innerWidth <= 768) {
    navButtons.classList.add("mobile-hidden");
  }

  // Image upload functionality
  const imageUpload = document.getElementById("imageUpload");
  const studentImage = document.getElementById("studentImage");

  imageUpload.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = function (event) {
        studentImage.src = event.target.result;
        studentImage.alt = "Custom Student Image";
      };

      reader.readAsDataURL(file);
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Add scroll animation for feature cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe feature cards for animation
document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(card);
});
