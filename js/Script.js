// Smooth hover effects
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for decorations
document.addEventListener("mousemove", function (e) {
  const decorations = document.querySelectorAll(".decoration");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  decorations.forEach((decoration, index) => {
    const speed = (index + 1) * 0.5;
    decoration.style.transform = `translate(${x * speed * 10}px, ${
      y * speed * 10
    }px)`;
  });
});

