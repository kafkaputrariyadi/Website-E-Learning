// Data jadwal lengkap
const allSchedules = [
  {
    subject: "Matematika",
    image: "img/matematika.jpg",
    day: "Senin",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Ilmu Pengetahuan Alam",
    image: "img/IPA.jpg",
    day: "Senin",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Pendidikan Agama dan Budi Pekerti",
    image: "img/pendidikan agama.jpg",
    day: "Senin",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Bahasa Indonesia",
    image: "img/bahasa indonesia.jpg",
    day: "Senin",
    start: "12:30",
    end: "14:00",
  },
  {
    subject: "Bahasa Inggris",
    image: "img/inggris.jpg",
    day: "Selasa",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Bahasa Indonesia",
    image: "img/bahasa indonesia.jpg",
    day: "Selasa",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Ilmu Pengetahuan Sosial",
    image: "img/IPS.png",
    day: "Selasa",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Pendidikan Jasmani dan Olahraga",
    image: "img/pjok.jpg",
    day: "Selasa",
    start: "12:30",
    end: "14:00",
  },
  {
    subject: "Pendidikan Seni dan Budaya",
    image: "img/seni budaya.jpg",
    day: "Rabu",
    start: "07:00",
    end: "08:30",
  },
  {
    subject: "Informatika",
    image: "img/informatika.jpg",
    day: "Rabu",
    start: "08:30",
    end: "09:45",
  },
  {
    subject: "Pendidikan Pancasila",
    image: "img/pkn.jpg",
    day: "Rabu",
    start: "10:00",
    end: "11:45",
  },
  {
    subject: "Bahasa Jawa",
    image: "img/bahasa jawa.png",
    day: "Rabu",
    start: "12:30",
    end: "14:00",
  },
];

// Fungsi untuk menampilkan semua jadwal
function toggleAllSchedules() {
  const initialSchedule = document.getElementById("initialSchedule");
  const allSchedulesContainer = document.getElementById(
    "allSchedulesContainer"
  );
  const allSchedulesScrollable = document.getElementById(
    "allSchedulesScrollable"
  );
  const lihatSemuaBtn = document.getElementById("lihatSemua");

  if (allSchedulesContainer.style.display === "none") {
    // Tampilkan semua jadwal
    allSchedulesScrollable.innerHTML = "";

    // Tambahkan semua jadwal ke dalam container scrollable
    allSchedules.forEach((schedule) => {
      const scheduleCard = document.createElement("div");
      scheduleCard.className = "all-schedule-card";
      scheduleCard.onclick = () => openSchedule(schedule.subject);

      scheduleCard.innerHTML = `
        <img src="${schedule.image}" class="all-schedule-image" alt="${schedule.subject}" />
        <div class="all-schedule-info">
          <div class="all-schedule-title">${schedule.subject}</div>
          <div class="all-schedule-details">
            <div class="all-schedule-detail-row">
              <span class="detail-label">${schedule.day}</span>
            </div>
            <div class="all-schedule-detail-row">
              <span class="detail-label">Mulai:</span>
              <span class="detail-value">${schedule.start}</span>
            </div>
            <div class="all-schedule-detail-row">
              <span class="detail-label">Selesai:</span>
              <span class="detail-value">${schedule.end}</span>
            </div>
          </div>
        </div>
      `;

      allSchedulesScrollable.appendChild(scheduleCard);
    });

    allSchedulesContainer.style.display = "block";
    lihatSemuaBtn.classList.add("active");
    lihatSemuaBtn.textContent = "lihat sedikit";

    // Scroll ke bagian jadwal
    allSchedulesContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    // Sembunyikan semua jadwal
    allSchedulesContainer.style.display = "none";
    lihatSemuaBtn.classList.remove("active");
    lihatSemuaBtn.textContent = "lihat semua";

    // Scroll kembali ke awal jadwal
    initialSchedule.scrollIntoView({ behavior: "smooth" });
  }
}

// Fungsi scroll untuk progress cards
function scrollProgress(direction) {
  const container = document.querySelector(".progress-cards");
  const scrollAmount = 300;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

function openLesson(subject) {
  alert("Membuka pelajaran: " + subject);
}

function openSubject(subject) {
  console.log("Subject clicked:", subject); // Debug log

  // Validasi jika subject null atau undefined
  if (!subject) {
    console.error("Subject is null or undefined");
    alert("Mata pelajaran tidak ditemukan");
    return;
  }

  // Mapping subject ke halaman yang sesuai - DIPERBAIKI DENGAN ILMU PENGETAHUAN SOSIAL
  const subjectPages = {
    "bahasa-indonesia": "bahasa-indonesia.html",
    matematika: "matematika.html",
    "ilmu-pengetahuan-alam": "ilmu-pengetahuan-alam.html",
    "bahasa-inggris": "bahasa-inggris.html",
    "ilmu-pengetahuan-sosial": "ilmu-pengetahuan-sosial.html", // TAMBAHAN INI
    ipa: "ilmu-pengetahuan-alam.html", // Alternatif untuk IPA
    mtk: "matematika.html", // Alternatif untuk Matematika
    inggris: "bahasa-inggris.html", // Alternatif untuk Bahasa Inggris
    indonesia: "bahasa-indonesia.html", // Alternatif untuk Bahasa Indonesia
    "pengetahuan-alam": "ilmu-pengetahuan-alam.html",
    ips: "ilmu-pengetahuan-sosial.html", // Alternatif untuk IPS
    "pengetahuan-sosial": "ilmu-pengetahuan-sosial.html",
    informatika: "informatika.html",
    bahasajawa: "bahasa-jawa.html",
    "bahasa-jawa": "bahasa-jawa.html",
    ppkn: "ppkn.html", // TAMBAHAN INI
    "Pendidikan Pancasila dan Kewarganegaraan": "ppkn.html",
    senibudaya: "seni-budaya.html",
    "seni-budaya": "seni-budaya.html",
    "Pendidikan Jasmani dan Olahraga": "pjok.html",
    penjaskes: "pjok.html",
  };

  const page = subjectPages[subject];
  if (page) {
    window.location.href = page;
  } else {
    alert(
      "Membuka mata pelajaran: " +
        subject +
        "\n\nMata pelajaran tidak ditemukan atau belum tersedia."
    );
  }
}

function openSchedule(subject) {
  console.log("Schedule clicked:", subject); // Debug log

  // Validasi jika subject null atau undefined
  if (!subject) {
    console.error("Subject is null or undefined");
    alert("Jadwal tidak ditemukan");
    return;
  }

  const schedulePages = {
    Matematika: "matematika.html",
    "Bahasa Indonesia": "bahasa-indonesia.html",
    "Ilmu Pengetahuan Alam": "ilmu-pengetahuan-alam.html",
    "Bahasa Inggris": "bahasa-inggris.html",
    "Ilmu Pengetahuan Sosial": "ilmu-pengetahuan-sosial.html",
    "Pendidikan Pancasila": "ppkn.html", // TAMBAHAN INI
    ppkn: "ppkn.html", // TAMBAHAN INI - HARUS DENGAN HURUF KECIL
    "pendidikan-pancasila": "ppkn.html", // Alternatif
    "Pendidikan Pancasila": "ppkn.html", // TAMBAHAN INI
    "Pendidikan Pancasila dan Kewarganegaraan": "ppkn.html", // Alternatif
    pkn: "ppkn.html", // Alternatif lain
    IPA: "ilmu-pengetahuan-alam.html", // Alternatif untuk IPA
    MTK: "matematika.html", // Alternatif untuk Matematika
    IPS: "ilmu-pengetahuan-sosial.html", // Alternatif untuk IPS
    senibudaya: "seni-budaya.html",
    "seni-budaya": "seni-budaya.html",
    "Pendidikan Jasmani dan Olahraga": "pjok.html",
    informatika: "informatika.html",
    bahasajawa: "bahasa-jawa.html",
    "bahasa-jawa": "bahasa-jawa.html",
  };

  const page = schedulePages[subject];

  if (page) {
    window.location.href = page;
  } else {
    alert(
      "Membuka jadwal: " + subject + "\n\nFitur ini sedang dalam pengembangan."
    );
  }
}

// Event listener untuk DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded"); // Debug log

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Event listener untuk tombol "lihat semua"
  const lihatSemuaBtn = document.getElementById("lihatSemua");
  if (lihatSemuaBtn) {
    lihatSemuaBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggleAllSchedules();
    });
  }

  // Event listener untuk card mata pelajaran di dashboard
  const subjectCards = document.querySelectorAll(".subject-card");
  console.log("Subject cards found:", subjectCards.length); // Debug log

  subjectCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Ambil subject dari data attribute
      const subject = this.getAttribute("data-subject");
      console.log("Card clicked, data-subject:", subject); // Debug log
      openSubject(subject);
    });
  });

  // Event listener untuk progress cards
  const progressCards = document.querySelectorAll(".progress-card");
  progressCards.forEach((card) => {
    card.addEventListener("click", function () {
      const subject = this.getAttribute("data-subject");
      console.log("Progress card clicked, data-subject:", subject); // Debug log
      openSubject(subject);
    });
  });

  // Event listener untuk all schedule cards (yang dibuat secara dinamis)
  document.addEventListener("click", function (e) {
    if (e.target.closest(".all-schedule-card")) {
      const scheduleCard = e.target.closest(".all-schedule-card");
      const subject = scheduleCard.querySelector(
        ".all-schedule-title"
      ).textContent;
      console.log("All schedule card clicked, subject:", subject);
      openSchedule(subject);
    }
  });

  // Debug: Cek semua elemen yang bisa diklik
  console.log("=== DEBUG INFO ===");
  console.log(
    "Subject cards:",
    document.querySelectorAll(".subject-card").length
  );
  console.log(
    "Progress cards:",
    document.querySelectorAll(".progress-card").length
  );
  console.log(
    "All schedule cards:",
    document.querySelectorAll(".all-schedule-card").length
  );
});
