// JavaScript for Bahasa Indonesia Page

// Data video YouTube untuk setiap bab - DIPERBARUI
const videoData = {
  1: {
    title: "Memahami dan Menulis Teks Deskripsi",
    description:
      "Video ini menjelaskan tentang pengertian, struktur, dan cara menulis teks deskripsi yang baik dan benar.",
    youtubeId: "cTidIp76Dqg",
    duration: "10:45",
  },
  2: {
    title: "Memahami dan Menulis Teks Prosedur",
    description:
      "Video ini menjelaskan tentang struktur, ciri kebahasaan, dan contoh teks prosedur dalam kehidupan sehari-hari.",
    youtubeId: "RMuE2FX-q10",
    duration: "12:30",
  },
  3: {
    title: "Memahami dan Menulis Teks Narasi",
    description:
      "Video ini menjelaskan tentang struktur, unsur intrinsik, dan teknik menulis teks narasi yang menarik.",
    youtubeId: "CfhmEyvUKTo",
    duration: "15:20",
  },
  4: {
    title: "Memahami dan Menulis Teks Eksposisi",
    description:
      "Video ini menjelaskan tentang struktur, ciri kebahasaan, dan teknik menyusun argumentasi dalam teks eksposisi.",
    youtubeId: "HgdtvYH_IeI",
    duration: "14:15",
  },
  5: {
    title: "Memahami dan Menulis Teks Laporan Hasil Observasi",
    description:
      "Video ini menjelaskan tentang struktur, teknik observasi, dan cara menyusun laporan hasil pengamatan yang baik.",
    youtubeId: "mwJeFysblag",
    duration: "18:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa yang dimaksud dengan teks deskripsi?",
        options: [
          "Teks yang menceritakan urutan kejadian",
          "Teks yang menggambarkan objek secara rinci",
          "Teks yang berisi langkah-langkah",
          "Teks yang menyampaikan pendapat",
        ],
        correct: 1,
      },
      {
        question: "Struktur teks deskripsi terdiri dari...",
        options: [
          "Orientasi, komplikasi, resolusi",
          "Tesis, argumentasi, penegasan ulang",
          "Identifikasi, deskripsi bagian, simpulan",
          "Pendahuluan, isi, penutup",
        ],
        correct: 2,
      },
      {
        question: "Ciri kebahasaan teks deskripsi yang tepat adalah...",
        options: [
          "Banyak menggunakan kata kerja imperatif",
          "Menggunakan kata sifat yang menggambarkan",
          "Dominan menggunakan kalimat perintah",
          "Menggunakan bahasa persuasif",
        ],
        correct: 1,
      },
      {
        question: "Tujuan utama teks deskripsi adalah...",
        options: [
          "Membujuk pembaca",
          "Memberi instruksi",
          "Menggambarkan objek secara detail",
          "Menceritakan pengalaman",
        ],
        correct: 2,
      },
      {
        question: "Contoh objek yang dapat dideskripsikan adalah...",
        options: [
          "Rumus matematika",
          "Pemandangan pantai",
          "Langkah memasak",
          "Argumentasi debat",
        ],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Apa yang dimaksud dengan teks prosedur?",
        options: [
          "Teks yang menggambarkan objek secara detail",
          "Teks yang berisi langkah-langkah melakukan sesuatu",
          "Teks yang menceritakan pengalaman pribadi",
          "Teks yang menyampaikan pendapat",
        ],
        correct: 1,
      },
      {
        question: "Struktur teks prosedur terdiri dari...",
        options: [
          "Orientasi, komplikasi, resolusi",
          "Identifikasi, deskripsi bagian, simpulan",
          "Tujuan, material, langkah-langkah",
          "Pendahuluan, isi, penutup",
        ],
        correct: 2,
      },
      {
        question: "Ciri kebahasaan teks prosedur yang tepat adalah...",
        options: [
          "Banyak menggunakan kata sifat",
          "Menggunakan kalimat imperatif",
          "Dominan menggunakan bahasa persuasif",
          "Menggunakan kalimat tanya",
        ],
        correct: 1,
      },
      {
        question: "Tujuan utama teks prosedur adalah...",
        options: [
          "Membujuk pembaca",
          "Memberi petunjuk melakukan sesuatu",
          "Menceritakan pengalaman",
          "Menggambarkan objek",
        ],
        correct: 1,
      },
      {
        question: "Contoh teks prosedur adalah...",
        options: [
          "Cerita liburan",
          "Resep masakan",
          "Laporan percobaan",
          "Ulasan film",
        ],
        correct: 1,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Apa yang dimaksud dengan teks narasi?",
        options: [
          "Teks yang berisi langkah-langkah",
          "Teks yang menceritakan kejadian secara berurutan",
          "Teks yang menggambarkan objek",
          "Teks yang menyampaikan pendapat",
        ],
        correct: 1,
      },
      {
        question: "Struktur teks narasi terdiri dari...",
        options: [
          "Tujuan, material, langkah-langkah",
          "Identifikasi, deskripsi bagian, simpulan",
          "Orientasi, komplikasi, resolusi",
          "Pendahuluan, isi, penutup",
        ],
        correct: 2,
      },
      {
        question: "Ciri kebahasaan teks narasi yang tepat adalah...",
        options: [
          "Banyak menggunakan kalimat imperatif",
          "Menggunakan kata sambung waktu",
          "Dominan menggunakan kata sifat",
          "Menggunakan bahasa persuasif",
        ],
        correct: 1,
      },
      {
        question: "Tujuan utama teks narasi adalah...",
        options: [
          "Memberi instruksi",
          "Menghibur pembaca",
          "Menggambarkan objek",
          "Membujuk pembaca",
        ],
        correct: 1,
      },
      {
        question: "Contoh teks narasi adalah...",
        options: [
          "Resep masakan",
          "Petunjuk penggunaan",
          "Cerita rakyat",
          "Laporan observasi",
        ],
        correct: 2,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Apa yang dimaksud dengan teks eksposisi?",
        options: [
          "Teks yang menceritakan kejadian",
          "Teks yang memaparkan pendapat dengan argumentasi",
          "Teks yang menggambarkan objek",
          "Teks yang berisi langkah-langkah",
        ],
        correct: 1,
      },
      {
        question: "Struktur teks eksposisi terdiri dari...",
        options: [
          "Orientasi, komplikasi, resolusi",
          "Tujuan, material, langkah-langkah",
          "Tesis, argumentasi, penegasan ulang",
          "Identifikasi, deskripsi bagian, simpulan",
        ],
        correct: 2,
      },
      {
        question: "Ciri kebahasaan teks eksposisi yang tepat adalah...",
        options: [
          "Banyak menggunakan kalimat imperatif",
          "Menggunakan kata penghubung logis",
          "Dominan menggunakan kata sifat",
          "Menggunakan kata sambung waktu",
        ],
        correct: 1,
      },
      {
        question: "Tujuan utama teks eksposisi adalah...",
        options: [
          "Menghibur pembaca",
          "Memberi instruksi",
          "Mempengaruhi pembaca dengan argumentasi",
          "Menggambarkan objek",
        ],
        correct: 2,
      },
      {
        question: "Contoh teks eksposisi adalah...",
        options: [
          "Cerpen",
          "Resep masakan",
          "Artikel opini",
          "Laporan pengamatan",
        ],
        correct: 2,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Apa yang dimaksud dengan teks laporan hasil observasi?",
        options: [
          "Teks yang menceritakan kejadian",
          "Teks yang menyajikan informasi berdasarkan pengamatan",
          "Teks yang berisi langkah-langkah",
          "Teks yang menyampaikan pendapat",
        ],
        correct: 1,
      },
      {
        question: "Struktur teks laporan hasil observasi terdiri dari...",
        options: [
          "Orientasi, komplikasi, resolusi",
          "Tesis, argumentasi, penegasan ulang",
          "Pernyataan umum, deskripsi bagian, deskripsi manfaat",
          "Tujuan, material, langkah-langkah",
        ],
        correct: 2,
      },
      {
        question:
          "Ciri kebahasaan teks laporan hasil observasi yang tepat adalah...",
        options: [
          "Banyak menggunakan kalimat imperatif",
          "Menggunakan bahasa yang subjektif",
          "Menggunakan istilah teknis dan kalimat definisi",
          "Menggunakan kata sambung waktu",
        ],
        correct: 2,
      },
      {
        question: "Tujuan utama teks laporan hasil observasi adalah...",
        options: [
          "Menghibur pembaca",
          "Memberi instruksi",
          "Menyajikan informasi faktual berdasarkan pengamatan",
          "Membujuk pembaca",
        ],
        correct: 2,
      },
      {
        question: "Contoh teks laporan hasil observasi adalah...",
        options: [
          "Cerita pendek",
          "Resep masakan",
          "Laporan penelitian ilmiah",
          "Artikel opini",
        ],
        correct: 2,
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
  console.log("Bahasa Indonesia Page Loaded");

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
  const savedProgress = localStorage.getItem("bahasaIndonesiaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem(
    "bahasaIndonesiaUserProgress",
    JSON.stringify(userProgress)
  );
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
    "Selamat! Anda telah menyelesaikan semua materi Bahasa Indonesia! 🎓🎉"
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

console.log("Bahasa Indonesia JavaScript loaded successfully!");
