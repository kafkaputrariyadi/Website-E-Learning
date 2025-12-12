// JavaScript for Ilmu Pengetahuan Alam Page - Sama persis dengan Matematika

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Belajar Sistem Organisasi Kehidupan",
    description:
      "Video ini menjelaskan tentang tingkatan organisasi kehidupan mulai dari sel hingga sistem organ dalam tubuh makhluk hidup.",
    youtubeId: "YO1O7Xz3tvU",
    duration: "15:30",
  },
  2: {
    title: "Belajar Interaksi Makhluk Hidup dengan Lingkungan",
    description:
      "Video ini menjelaskan tentang ekosistem, komponen biotik dan abiotik, serta hubungan antar makhluk hidup dalam lingkungan.",
    youtubeId: "_B_Awz3Ci4o",
    duration: "18:45",
  },
  3: {
    title: "Belajar Pencemaran Lingkungan",
    description:
      "Video ini menjelaskan tentang jenis-jenis pencemaran lingkungan, dampaknya, dan upaya penanggulangan yang dapat dilakukan.",
    youtubeId: "QsE-_PS43Lo",
    duration: "22:15",
  },
  4: {
    title: "Belajar Gerak dan Gaya",
    description:
      "Video ini menjelaskan tentang konsep gerak, gaya, dan Hukum Newton dalam fisika beserta contoh penerapannya dalam kehidupan sehari-hari.",
    youtubeId: "-whzxEfRcmQ",
    duration: "16:20",
  },
  5: {
    title: "Belajar Energi dalam Sistem Kehidupan",
    description:
      "Video ini menjelaskan tentang berbagai bentuk energi, fotosintesis, respirasi sel, dan transformasi energi dalam ekosistem.",
    youtubeId: "ni9fvLu6IKw",
    duration: "19:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question:
          "Unit struktural dan fungsional terkecil makhluk hidup adalah...",
        options: ["Jaringan", "Sel", "Organ", "Molekul"],
        correct: 1,
      },
      {
        question: "Berikut ini yang termasuk sistem organ adalah...",
        options: ["Jantung", "Darah", "Sistem Peredaran Darah", "Otot"],
        correct: 2,
      },
      {
        question: "Perbedaan sel hewan dan sel tumbuhan yang tepat adalah...",
        options: [
          "Sel hewan memiliki dinding sel",
          "Sel tumbuhan memiliki kloroplas",
          "Sel hewan dapat berfotosintesis",
          "Sel tumbuhan tidak memiliki nukleus",
        ],
        correct: 1,
      },
      {
        question: "Organ yang berfungsi untuk menyaring darah adalah...",
        options: ["Hati", "Ginjal", "Paru-paru", "Jantung"],
        correct: 1,
      },
      {
        question:
          "Kumpulan sel yang memiliki struktur dan fungsi sama disebut...",
        options: ["Organ", "Jaringan", "Sistem Organ", "Organisme"],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Organisme yang dapat membuat makanan sendiri disebut...",
        options: ["Konsumen", "Produsen", "Dekomposer", "Herbivora"],
        correct: 1,
      },
      {
        question:
          "Hubungan simbiosis yang menguntungkan kedua pihak disebut...",
        options: ["Parasitisme", "Komensalisme", "Mutualisme", "Kompetisi"],
        correct: 2,
      },
      {
        question: "Contoh komponen abiotik dalam ekosistem adalah...",
        options: ["Tumbuhan", "Hewan", "Bakteri", "Suhu"],
        correct: 3,
      },
      {
        question: "Urutan rantai makanan yang benar adalah...",
        options: [
          "Elang → ular → tikus → padi",
          "Padi → tikus → ular → elang",
          "Tikus → padi → elang → ular",
          "Ular → elang → tikus → padi",
        ],
        correct: 1,
      },
      {
        question: "Organisme pengurai dalam ekosistem adalah...",
        options: [
          "Tumbuhan hijau",
          "Karnivora",
          "Herbivora",
          "Bakteri dan jamur",
        ],
        correct: 3,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Gas yang menyebabkan hujan asam adalah...",
        options: [
          "Oksigen (O₂)",
          "Nitrogen (N₂)",
          "Karbon dioksida (CO₂)",
          "Belerang dioksida (SO₂)",
        ],
        correct: 3,
      },
      {
        question: "Prinsip 3R dalam pengelolaan sampah adalah...",
        options: [
          "Reduce, Reuse, Recycle",
          "Read, Write, Count",
          "Run, Rest, Relax",
          "Reduce, Remove, Replace",
        ],
        correct: 0,
      },
      {
        question:
          "Penyakit yang dapat ditimbulkan oleh pencemaran air adalah...",
        options: ["Asma", "Bronkitis", "Diare", "Migrain"],
        correct: 2,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Hukum Newton yang menyatakan tentang inersia adalah...",
        options: [
          "Hukum I Newton",
          "Hukum II Newton",
          "Hukum III Newton",
          "Hukum Pascal",
        ],
        correct: 0,
      },
      {
        question: "Rumus yang benar untuk Hukum II Newton adalah...",
        options: ["F = m × a", "F = m × v", "F = a × v", "F = m × g"],
        correct: 0,
      },
      {
        question: "Gaya yang menghambat gerak benda adalah...",
        options: [
          "Gaya gravitasi",
          "Gaya gesek",
          "Gaya magnet",
          "Gaya listrik",
        ],
        correct: 1,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Proses pembuatan makanan oleh tumbuhan hijau disebut...",
        options: ["Respirasi", "Fotosintesis", "Transpirasi", "Digesti"],
        correct: 1,
      },
      {
        question: "Pigmen yang berperan dalam fotosintesis adalah...",
        options: ["Hemoglobin", "Klorofil", "Melanin", "Karoten"],
        correct: 1,
      },
      {
        question: "Bentuk energi yang dihasilkan dalam respirasi sel adalah...",
        options: ["ATP", "DNA", "RNA", "Protein"],
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
  console.log("Ilmu Pengetahuan Alam Page Loaded");

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
  const savedProgress = localStorage.getItem("ipaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("ipaUserProgress", JSON.stringify(userProgress));
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
        chapterItem.style.background = "#3498db";
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
                    })" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Lanjut ke Bab ${chapter + 1}
                    </button>
                `
                    : `
                    <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
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
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Review Bab Ini
                </button>
            `;
    } else {
      resultElement.className = "quiz-result error";
      resultHTML = `
                <h4>📚 Terus Berlatih!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Jangan khawatir! Pelajari kembali materi dan coba lagi.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Pelajari Ulang Bab Ini
                </button>
            `;
    }
  }

  resultElement.innerHTML = resultHTML;
  resultElement.scrollIntoView({ behavior: "smooth", block: "center" });

  // Remove visual feedback after 5 seconds
  setTimeout(() => {
    document
      .querySelectorAll(".correct, .incorrect, .correct-answer")
      .forEach((el) => {
        el.classList.remove("correct", "incorrect", "correct-answer");
      });
  }, 5000);
}

function celebrateCompletion() {
  alert(
    "Selamat! Anda telah menyelesaikan semua materi Ilmu Pengetahuan Alam! 🎓🎉"
  );
}

// Add CSS for visual feedback
const style = document.createElement("style");
style.textContent = `
    .quiz-options label.correct {
        background-color: #e8f4fc !important;
        border-color: #3498db !important;
        color: #2980b9;
    }
    .quiz-options label.incorrect {
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
        color: #721c24;
    }
    .quiz-options label.correct-answer {
        background-color: #e8f4fc !important;
        border-color: #3498db !important;
        border: 2px solid #3498db !important;
        color: #2980b9;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.goBackToDashboard = goBackToDashboard;
window.setActiveChapter = setActiveChapter;
window.navigateToChapter = navigateToChapter;
window.submitQuiz = submitQuiz;

console.log("Ilmu Pengetahuan Alam JavaScript loaded successfully!");
