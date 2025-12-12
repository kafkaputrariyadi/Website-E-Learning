// JavaScript for Bahasa Jawa Page

// Data video YouTube untuk setiap bab - DIREVISI DENGAN LINK YANG BENAR
const videoData = {
  1: {
    title: "Belajar Aksara Jawa Dasar",
    description:
      "Video ini menjelaskan tentang pengenalan aksara Jawa, aksara dasar, sandhangan, dan cara menulis aksara Jawa.",
    youtubeId: "tVNv3p2UF2E",
    duration: "15:30",
  },
  2: {
    title: "Memahami Tingkat Tutur Bahasa Jawa (Unggah-Ungguh Basa)",
    description:
      "Video ini menjelaskan tentang unggah-ungguh basa, tingkat tutur, dan penggunaan bahasa Jawa yang sopan.",
    youtubeId: "jThH86lIwGM",
    duration: "18:45",
  },
  3: {
    title: "Belajar Tembung Saroja dalam Bahasa Jawa",
    description:
      "Video ini menjelaskan tentang pengertian, jenis-jenis, dan contoh tembung saroja dalam bahasa Jawa.",
    youtubeId: "MjBp2YiJTH8",
    duration: "14:20",
  },
  4: {
    title: "Memahami Paribasan Jawa dan Maknanya",
    description:
      "Video ini menjelaskan tentang pengertian paribasan, contoh-contoh, dan makna yang terkandung di dalamnya.",
    youtubeId: "E4HdZ0C5RjE",
    duration: "16:15",
  },
  5: {
    title: "Belajar Menulis dan Memahami Geguritan",
    description:
      "Video ini menjelaskan tentang pengertian geguritan, unsur-unsur, dan cara menulis geguritan yang baik.",
    youtubeId: "soMUwdUZoHg",
    duration: "19:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa nama lain dari aksara Jawa?",
        options: [
          "Hanacaraka atau Carakan",
          "Huruf Latin",
          "Aksara Sunda",
          "Huruf Arab",
        ],
        correct: 0,
      },
      {
        question: "Berapa jumlah aksara dasar (nglegena)?",
        options: ["20 aksara", "26 aksara", "30 aksara", "15 aksara"],
        correct: 0,
      },
      {
        question: "Sandhangan wulu (ꦶ) melambangkan vokal...",
        options: ["i", "u", "e", "o"],
        correct: 0,
      },
      {
        question: "Aksara 'ꦤ' dibaca...",
        options: ["na", "ha", "ca", "ra"],
        correct: 0,
      },
      {
        question: "Fungsi pasangan aksara adalah...",
        options: [
          "Menutup suku kata",
          "Membuka kalimat",
          "Menandai kata serapan",
          "Menunjukkan aksara kapital",
        ],
        correct: 0,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Apa yang dimaksud dengan unggah-ungguh basa?",
        options: [
          "Tata krama berbahasa dalam budaya Jawa",
          "Cara menulis aksara Jawa",
          "Jenis-jenis tembang Jawa",
          "Alat musik tradisional Jawa",
        ],
        correct: 0,
      },
      {
        question: "Tingkat tutur yang paling halus adalah...",
        options: ["Krama Inggil", "Ngoko", "Madya", "Krama Lugu"],
        correct: 0,
      },
      {
        question: "Bahasa Ngoko digunakan untuk...",
        options: [
          "Teman sebaya atau orang lebih muda",
          "Orang yang lebih tua atau dihormati",
          "Saat acara resmi",
          "Saat berpidato",
        ],
        correct: 0,
      },
      {
        question: "Contoh bahasa Krama adalah...",
        options: [
          "Kula badhe dahar",
          "Aku arep mangan",
          "Aku arep mangan",
          "Aku mau makan",
        ],
        correct: 0,
      },
      {
        question: "Unggah-ungguh basa penting untuk...",
        options: [
          "Menghormati lawan bicara",
          "Menulis aksara Jawa",
          "Membaca geguritan",
          "Memahami paribasan",
        ],
        correct: 0,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Apa yang dimaksud dengan tembung saroja?",
        options: [
          "Kata majemuk dalam bahasa Jawa",
          "Aksara Jawa dasar",
          "Tingkat tutur bahasa Jawa",
          "Jenis tembang Jawa",
        ],
        correct: 0,
      },
      {
        question: "Tembung saroja dwilingga adalah...",
        options: [
          "Pengulangan kata dasar",
          "Gabungan kata yang berbeda",
          "Pengulangan dengan perubahan bunyi",
          "Kata serapan dari bahasa lain",
        ],
        correct: 0,
      },
      {
        question: "Contoh tembung saroja adalah...",
        options: ["tiba-tiba", "mangan", "ngombe", "turu"],
        correct: 0,
      },
      {
        question: "Tembung saroja salin swara adalah...",
        options: [
          "Pengulangan dengan perubahan bunyi",
          "Pengulangan kata dasar",
          "Gabungan kata yang berbeda",
          "Kata dengan arti baru",
        ],
        correct: 0,
      },
      {
        question: "Fungsi tembung saroja adalah...",
        options: [
          "Memperkaya kosakata bahasa Jawa",
          "Menggantikan aksara Jawa",
          "Menggantikan tingkat tutur",
          "Membuat paribasan",
        ],
        correct: 0,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Apa yang dimaksud dengan paribasan?",
        options: [
          "Peribahasa atau pepatah dalam bahasa Jawa",
          "Jenis aksara Jawa",
          "Tingkat tutur bahasa Jawa",
          "Kata majemuk bahasa Jawa",
        ],
        correct: 0,
      },
      {
        question: "Makna dari 'Ajining diri dumunung ana ing lathi' adalah...",
        options: [
          "Harga diri seseorang terletak pada perkataannya",
          "Keselamatan memerlukan pengorbanan",
          "Cinta datang karena terbiasa",
          "Jangan merasa bisa, tapi biasakanlah merasa",
        ],
        correct: 0,
      },
      {
        question: "Paribasan 'Jer basuki mawa beyu' berarti...",
        options: [
          "Segala keselamatan memerlukan pengorbanan",
          "Harga diri terletak pada perkataan",
          "Cinta datang karena terbiasa",
          "Jangan merasa paling bisa",
        ],
        correct: 0,
      },
      {
        question: "Ciri-ciri paribasan adalah...",
        options: [
          "Mengandung makna kiasan",
          "Berisi aksara Jawa",
          "Menggunakan bahasa Indonesia",
          "Berbentuk puisi panjang",
        ],
        correct: 0,
      },
      {
        question: "Paribasan biasanya berisi...",
        options: [
          "Nasihat dan ajaran moral",
          "Cerita wayang",
          "Tata cara menulis",
          "Daftar kosakata",
        ],
        correct: 0,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Apa yang dimaksud dengan geguritan?",
        options: [
          "Puisi tradisional Jawa",
          "Jenis aksara Jawa",
          "Tingkat tutur bahasa Jawa",
          "Peribahasa Jawa",
        ],
        correct: 0,
      },
      {
        question: "Unsur geguritan yang mengatur jumlah baris disebut...",
        options: ["Guru Gatra", "Guru Wilangan", "Guru Lagu", "Tema"],
        correct: 0,
      },
      {
        question: "Guru Wilangan mengatur...",
        options: [
          "Jumlah suku kata per baris",
          "Jumlah baris dalam satu bait",
          "Akhir suara (rima) setiap baris",
          "Pokok pikiran yang diangkat",
        ],
        correct: 0,
      },
      {
        question: "Ciri-ciri geguritan adalah...",
        options: [
          "Menggunakan bahasa Jawa",
          "Menggunakan bahasa Indonesia",
          "Tidak memiliki aturan",
          "Berbentuk prosa",
        ],
        correct: 0,
      },
      {
        question: "Geguritan sering digunakan dalam...",
        options: [
          "Acara adat dan kesenian",
          "Percakapan sehari-hari",
          "Penulisan surat resmi",
          "Pengajaran aksara Jawa",
        ],
        correct: 0,
      },
    ],
  },
};

// State management
let currentChapter = 1;
let userProgress = {
  1: { completed: false, score: 0 },
  2: { completed: false, score: 0 },
  3: { completed: false, score: 0 },
  4: { completed: false, score: 0 },
  5: { completed: false, score: 0 },
};

// Function to go back to dashboard
function goBackToDashboard() {
  if (confirm("Apakah Anda yakin ingin kembali ke dashboard?")) {
    window.location.href = "dashboard.html";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Bahasa Jawa Page Loaded");

  initializePage();
  setupEventListeners();
  loadUserProgress();
});

function initializePage() {
  // Set initial active chapter
  setActiveChapter(1);

  // Render quiz questions for all chapters
  renderAllQuizzes();

  // Update progress display
  updateOverallProgress();
}

function setupEventListeners() {
  // Chapter navigation
  const chapterItems = document.querySelectorAll(".chapter-item");
  chapterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const chapterNumber = parseInt(this.getAttribute("data-chapter"));
      setActiveChapter(chapterNumber);
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      navigateToChapter(currentChapter + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      navigateToChapter(currentChapter - 1);
    }
  });
}

function loadUserProgress() {
  const savedProgress = localStorage.getItem("bahasaJawaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("bahasaJawaUserProgress", JSON.stringify(userProgress));
}

function setActiveChapter(chapterNumber) {
  if (chapterNumber < 1 || chapterNumber > 5) return;

  currentChapter = chapterNumber;

  // Remove active class from all chapters
  document.querySelectorAll(".chapter-item").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".chapter-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Add active class to selected chapter
  const selectedChapter = document.querySelector(
    `.chapter-item[data-chapter="${chapterNumber}"]`
  );
  const selectedContent = document.getElementById(`chapter-${chapterNumber}`);

  if (selectedChapter && selectedContent) {
    selectedChapter.classList.add("active");
    selectedContent.classList.add("active");

    // Update progress bar based on chapter
    updateProgressBar(chapterNumber);

    // Update video content
    updateVideoContent(chapterNumber);

    // Scroll to top of content
    selectedContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function navigateToChapter(chapterNumber) {
  if (chapterNumber >= 1 && chapterNumber <= 5) {
    setActiveChapter(chapterNumber);
  }
}

function updateProgressBar(chapterNumber) {
  const progressBars = document.querySelectorAll(".progress-fill");
  const progressTexts = document.querySelectorAll(".progress-text");

  const progressData = {
    1: { width: "100%", text: "Progress: 100%" },
    2: { width: "80%", text: "Progress: 80%" },
    3: { width: "60%", text: "Progress: 60%" },
    4: { width: "40%", text: "Progress: 40%" },
    5: { width: "20%", text: "Progress: 20%" },
  };

  progressBars.forEach((bar) => {
    if (progressData[chapterNumber]) {
      bar.style.width = progressData[chapterNumber].width;
    }
  });

  progressTexts.forEach((text) => {
    if (progressData[chapterNumber]) {
      text.textContent = progressData[chapterNumber].text;
    }
  });
}

function updateProgressBars() {
  // Update all progress bars based on user progress
  Object.keys(userProgress).forEach((chapter) => {
    const progress = userProgress[chapter];
    if (progress.completed) {
      const chapterItem = document.querySelector(
        `.chapter-item[data-chapter="${chapter}"]`
      );
      if (chapterItem) {
        chapterItem.style.background = "#2980b9";
        chapterItem.style.color = "white";
      }
    }
  });
}

function updateOverallProgress() {
  const completedChapters = Object.values(userProgress).filter(
    (progress) => progress.completed
  ).length;
  const totalChapters = Object.keys(userProgress).length;
  const percentage = (completedChapters / totalChapters) * 100;

  console.log(
    `Overall Progress: ${completedChapters}/${totalChapters} (${percentage}%)`
  );
}

function updateVideoContent(chapterNumber) {
  const videoDataForChapter = videoData[chapterNumber];

  if (videoDataForChapter) {
    // Update video iframe
    const videoIframe = document.querySelector(
      `#chapter-${chapterNumber} iframe`
    );
    if (videoIframe) {
      videoIframe.src = `https://www.youtube.com/embed/${videoDataForChapter.youtubeId}?rel=0&modestbranding=1`;
    }

    // Update video info
    const videoTitle = document.querySelector(
      `#chapter-${chapterNumber} .video-info h4`
    );
    const videoDescription = document.querySelector(
      `#chapter-${chapterNumber} .video-info p`
    );

    if (videoTitle) {
      videoTitle.textContent = videoDataForChapter.title;
      videoTitle.innerHTML += ` <span class="video-duration" style="color: #666; font-size: 12px; font-weight: normal;">(${videoDataForChapter.duration})</span>`;
    }
    if (videoDescription)
      videoDescription.textContent = videoDataForChapter.description;
  }
}

function renderAllQuizzes() {
  for (let chapter = 1; chapter <= 5; chapter++) {
    renderQuiz(chapter);
  }
}

function renderQuiz(chapter) {
  const quizContainer = document.querySelector(
    `#chapter-${chapter} .quiz-container`
  );
  if (!quizContainer || !quizData[chapter]) return;

  const questions = quizData[chapter].questions;
  let quizHTML = "";

  questions.forEach((q, index) => {
    quizHTML += `
            <div class="quiz-question">
                <p><strong>${index + 1}. ${q.question}</strong></p>
                <div class="quiz-options">
                    ${q.options
                      .map(
                        (option, optIndex) => `
                        <label>
                            <input type="radio" name="q${
                              index + 1
                            }-${chapter}" value="${String.fromCharCode(
                          97 + optIndex
                        )}" />
                            <span>${option}</span>
                        </label>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  });

  quizHTML += `
        <button class="submit-quiz" onclick="submitQuiz(${chapter})" id="submitBtn${chapter}">
            <span class="btn-text">Kirim Jawaban</span>
            <span class="loading" style="display: none;"></span>
        </button>
        <div class="quiz-result" id="quizResult${chapter}"></div>
    `;

  const existingQuiz = quizContainer.querySelector(".quiz-questions-container");
  if (existingQuiz) {
    existingQuiz.innerHTML = quizHTML;
  } else {
    quizContainer.innerHTML = `<div class="quiz-questions-container">${quizHTML}</div>`;
  }
}

function submitQuiz(chapter) {
  const submitBtn = document.getElementById(`submitBtn${chapter}`);
  const btnText = submitBtn.querySelector(".btn-text");
  const loading = submitBtn.querySelector(".loading");

  // Show loading
  btnText.style.display = "none";
  loading.style.display = "inline-block";
  submitBtn.disabled = true;

  // Simulate processing delay
  setTimeout(() => {
    processQuizSubmission(chapter);

    // Hide loading
    btnText.style.display = "inline-block";
    loading.style.display = "none";
    submitBtn.disabled = false;
  }, 1000);
}

function processQuizSubmission(chapter) {
  const questions = quizData[chapter].questions;
  let score = 0;
  const totalQuestions = questions.length;
  const unansweredQuestions = [];

  // Reset visual feedback
  document
    .querySelectorAll(".correct, .incorrect, .correct-answer")
    .forEach((el) => {
      el.classList.remove("correct", "incorrect", "correct-answer");
    });

  // Check answers
  questions.forEach((q, index) => {
    const questionName = `q${index + 1}-${chapter}`;
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );

    if (!selectedAnswer) {
      unansweredQuestions.push(index + 1);
      return;
    }

    const selectedOptionIndex = selectedAnswer.value.charCodeAt(0) - 97;

    if (selectedOptionIndex === q.correct) {
      score++;
      selectedAnswer.parentElement.classList.add("correct");
    } else {
      selectedAnswer.parentElement.classList.add("incorrect");

      // Highlight correct answer
      const correctOption = document.querySelector(
        `input[name="${questionName}"][value="${String.fromCharCode(
          97 + q.correct
        )}"]`
      );
      if (correctOption) {
        correctOption.parentElement.classList.add("correct-answer");
      }
    }
  });

  // Update user progress
  userProgress[chapter].completed = true;
  userProgress[chapter].score = score;
  saveUserProgress();
  updateProgressBars();
  updateOverallProgress();

  // Display result
  displayQuizResult(chapter, score, totalQuestions, unansweredQuestions);
}

function displayQuizResult(
  chapter,
  score,
  totalQuestions,
  unansweredQuestions
) {
  const resultElement = document.getElementById(`quizResult${chapter}`);
  const percentage = (score / totalQuestions) * 100;

  let resultHTML = "";

  if (unansweredQuestions.length > 0) {
    resultElement.className = "quiz-result error";
    resultHTML = `
            <h4>📝 Silakan Lengkapi Semua Soal!</h4>
            <p>Anda belum menjawab soal nomor: <strong>${unansweredQuestions.join(
              ", "
            )}</strong></p>
            <p>Silakan jawab semua soal sebelum mengirim.</p>
        `;
  } else {
    userProgress[chapter].completed = true;
    userProgress[chapter].score = score;
    saveUserProgress();

    if (percentage >= 80) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>🎉 Luar Biasa!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Kerja bagus! Anda memahami materi bab ini dengan sangat baik.</p>
                ${
                  chapter < 5
                    ? `
                    <button class="next-chapter-btn" onclick="navigateToChapter(${
                      chapter + 1
                    })" style="background: #2980b9; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Lanjut ke Bab ${chapter + 1}
                    </button>
                `
                    : `
                    <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #2980b9; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Selamat! Anda Menyelesaikan Semua Bab 🎓
                    </button>
                `
                }
            `;
    } else if (percentage >= 60) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>👍 Bagus!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Anda memahami dasar-dasarnya, tapi perlu review beberapa topik.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #2980b9; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Review Bab Ini
                </button>
            `;
    } else {
      resultElement.className = "quiz-result error";
      resultHTML = `
                <h4>📚 Terus Berlatih!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Jangan khawatir! Pelajari kembali materi dan coba lagi.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #2980b9; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Pelajari Ulang Bab Ini
                </button>
            `;
    }
  }

  resultElement.innerHTML = resultHTML;
  resultElement.scrollIntoView({ behavior: "smooth", block: "center" });

  setTimeout(() => {
    document
      .querySelectorAll(".correct, .incorrect, .correct-answer")
      .forEach((el) => {
        el.classList.remove("correct", "incorrect", "correct-answer");
      });
  }, 5000);
}

function celebrateCompletion() {
  alert("Selamat! Anda telah menyelesaikan semua materi Bahasa Jawa! 🎓🎉");
}

const style = document.createElement("style");
style.textContent = `
    .quiz-options label.correct {
        background-color: #d6eaf8 !important;
        border-color: #2980b9 !important;
        color: #2471a3;
    }
    .quiz-options label.incorrect {
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
        color: #721c24;
    }
    .quiz-options label.correct-answer {
        background-color: #d6eaf8 !important;
        border-color: #2980b9 !important;
        border: 2px solid #2980b9 !important;
        color: #2471a3;
    }
`;
document.head.appendChild(style);

window.goBackToDashboard = goBackToDashboard;
window.setActiveChapter = setActiveChapter;
window.navigateToChapter = navigateToChapter;
window.submitQuiz = submitQuiz;

console.log("Bahasa Jawa JavaScript loaded successfully!");
