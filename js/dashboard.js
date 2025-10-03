// script.js

function scrollProgress(direction) {
    const container = document.querySelector('.progress-cards');
    const scrollAmount = 350;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function openLesson(subject) {
    alert('Membuka pelajaran: ' + subject);
    // Ganti dengan navigasi atau modal sesuai kebutuhan
}

function openSubject(subject) {
    alert('Membuka mata pelajaran: ' + subject);
    // Ganti dengan navigasi atau modal sesuai kebutuhan
}

function openSchedule(subject) {
    alert('Membuka jadwal: ' + subject);
    // Ganti dengan navigasi atau modal sesuai kebutuhan
}

// Smooth scroll untuk anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});