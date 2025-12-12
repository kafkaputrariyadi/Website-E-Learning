// JavaScript for Matematika Page

// Data video YouTube untuk setiap bab - DIPERBARUI
const videoData = {
  1: {
    title: "Memahami dan Mengoperasikan Bilangan Bulat",
    description:
      "Video ini menjelaskan tentang konsep bilangan bulat, operasi hitung, dan penerapannya dalam kehidupan sehari-hari.",
    youtubeId: "V2G6vTxRdec",
    duration: "15:30",
  },
  2: {
    title: "Memahami Konsep Dasar Aljabar",
    description:
      "Video ini menjelaskan tentang variabel, koefisien, konstanta, dan operasi aljabar dasar.",
    youtubeId: "F3mW_ugYqFc",
    duration: "18:45",
  },
  3: {
    title: "Memahami Bangun Datar dan Bangun Ruang",
    description:
      "Video ini menjelaskan tentang konsep geometri, rumus luas, volume, dan penerapannya.",
    youtubeId: "ma0nXqwVZY8",
    duration: "22:15",
  },
  4: {
    title: "Analisis Data dengan Statistika",
    description:
      "Video ini menjelaskan tentang pengolahan data, ukuran pemusatan, dan penyajian data.",
    youtubeId: "-61DOakCxrs",
    duration: "16:20",
  },
  5: {
    title: "Memahami Konsep Probabilitas",
    description:
      "Video ini menjelaskan tentang peluang, frekuensi harapan, dan penerapannya dalam kehidupan sehari-hari.",
    youtubeId: "3mnvcG8os_s",
    duration: "19:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Hasil dari (-15) + 8 adalah...",
        options: ["23", "-7", "7", "-23"],
        correct: 1,
      },
      {
        question: "Hasil dari (-4) × (-6) adalah...",
        options: ["-24", "24", "10", "-10"],
        correct: 1,
      },
      {
        question: "Sifat operasi yang ditunjukkan oleh a + b = b + a adalah...",
        options: [
          "Sifat Asosiatif",
          "Sifat Distributif",
          "Sifat Komutatif",
          "Sifat Identitas",
        ],
        correct: 2,
      },
      {
        question: "Hasil dari 20 ÷ (-5) + 3 adalah...",
        options: ["-7", "-1", "1", "7"],
        correct: 1,
      },
      {
        question:
          "Suhu di sebuah kota adalah -5°C. Jika suhu naik 8°C, suhu sekarang adalah...",
        options: ["-13°C", "-3°C", "3°C", "13°C"],
        correct: 2,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Hasil sederhana dari 3x + 2y - x + 5y adalah...",
        options: ["2x + 7y", "4x + 7y", "2x + 3y", "4x + 3y"],
        correct: 0,
      },
      {
        question: "Hasil dari 2a × 3b adalah...",
        options: ["5ab", "6ab", "2a3b", "23ab"],
        correct: 1,
      },
      {
        question: "Nilai x dari persamaan 3x - 7 = 8 adalah...",
        options: ["3", "4", "5", "6"],
        correct: 2,
      },
      {
        question: "Jika p = 3 dan q = -2, nilai dari 2p - q adalah...",
        options: ["4", "5", "7", "8"],
        correct: 3,
      },
      {
        question: "Bentuk sederhana dari 4(2x - 3) + 5 adalah...",
        options: ["8x - 7", "8x - 12", "8x + 7", "8x + 17"],
        correct: 0,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Luas persegi dengan sisi 7 cm adalah...",
        options: ["14 cm²", "28 cm²", "49 cm²", "56 cm²"],
        correct: 2,
      },
      {
        question:
          "Keliling persegi panjang dengan panjang 10 cm dan lebar 6 cm adalah...",
        options: ["16 cm", "32 cm", "60 cm", "160 cm"],
        correct: 1,
      },
      {
        question: "Volume kubus dengan sisi 5 cm adalah...",
        options: ["15 cm³", "25 cm³", "100 cm³", "125 cm³"],
        correct: 3,
      },
      {
        question:
          "Sebuah segitiga siku-siku memiliki sisi 9 cm dan 12 cm. Panjang sisi miringnya adalah...",
        options: ["15 cm", "18 cm", "21 cm", "24 cm"],
        correct: 0,
      },
      {
        question: "Luas lingkaran dengan jari-jari 14 cm adalah... (π = 22/7)",
        options: ["88 cm²", "154 cm²", "308 cm²", "616 cm²"],
        correct: 3,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Mean dari data: 5, 7, 8, 6, 9 adalah...",
        options: ["6", "6,5", "7", "7,5"],
        correct: 2,
      },
      {
        question: "Median dari data: 4, 6, 7, 3, 8, 5, 9 adalah...",
        options: ["5", "6", "6,5", "7"],
        correct: 1,
      },
      {
        question: "Modus dari data: 5, 6, 7, 5, 8, 6, 5, 9 adalah...",
        options: ["5", "6", "7", "8"],
        correct: 0,
      },
      {
        question: "Data tentang warna favorit termasuk jenis data...",
        options: [
          "Data Kualitatif",
          "Data Kuantitatif",
          "Data Kontinu",
          "Data Diskrit",
        ],
        correct: 0,
      },
      {
        question: "Diagram yang cocok untuk menampilkan persentase adalah...",
        options: [
          "Diagram Batang",
          "Diagram Garis",
          "Diagram Lingkaran",
          "Histogram",
        ],
        correct: 2,
      },
    ],
  },
  5: {
    questions: [
      {
        question:
          "Peluang munculnya mata dadu ganjil pada pelemparan sebuah dadu adalah...",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
      },
      {
        question:
          "Dalam sebuah kantong terdapat 3 bola merah dan 5 bola biru. Peluang terambil bola merah adalah...",
        options: ["3/5", "3/8", "5/8", "5/3"],
        correct: 1,
      },
      {
        question:
          "Frekuensi harapan munculnya angka dalam 60 kali pelemparan koin adalah...",
        options: ["15 kali", "20 kali", "30 kali", "40 kali"],
        correct: 2,
      },
      {
        question: "Peluang suatu kejadian yang mustahil terjadi adalah...",
        options: ["0", "0,5", "1", "2"],
        correct: 0,
      },
      {
        question:
          "Dalam seperangkat kartu bridge, peluang terambilnya kartu As adalah...",
        options: ["1/13", "1/12", "1/10", "1/8"],
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
  console.log("Matematika Page Loaded");

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
  const savedProgress = localStorage.getItem("matematikaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("matematikaUserProgress", JSON.stringify(userProgress));
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
  alert("Selamat! Anda telah menyelesaikan semua materi Matematika! 🎓🎉");
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

console.log("Matematika JavaScript loaded successfully!");
