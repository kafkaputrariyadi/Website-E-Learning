// JavaScript for PPKn Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Memahami Pancasila sebagai Dasar Negara",
    description:
      "Video ini menjelaskan tentang pengertian, sejarah, dan fungsi Pancasila sebagai dasar negara Republik Indonesia.",
    youtubeId: "5tM9oweRoP0",
    duration: "15:30",
  },
  2: {
    title: "Memahami UUD 1945 dan Perkembangannya",
    description:
      "Video ini menjelaskan tentang sejarah, struktur, dan amandemen Undang-Undang Dasar 1945.",
    youtubeId: "iM_Ksf71Pd0",
    duration: "18:45",
  },
  3: {
    title: "Memahami NKRI dan Bhinneka Tunggal Ika",
    description:
      "Video ini menjelaskan tentang konsep negara kesatuan dan makna Bhinneka Tunggal Ika dalam kehidupan berbangsa.",
    youtubeId: "UVw3fcInSuc",
    duration: "14:20",
  },
  4: {
    title: "Memahami Hak dan Kewajiban sebagai Warga Negara",
    description:
      "Video ini menjelaskan tentang berbagai hak dan kewajiban warga negara Indonesia berdasarkan UUD 1945.",
    youtubeId: "VjeLXzB_DtE",
    duration: "16:15",
  },
  5: {
    title: "Memahami Demokrasi dan Sistem Pemerintahan Indonesia",
    description:
      "Video ini menjelaskan tentang konsep demokrasi Pancasila dan sistem pemerintahan Indonesia.",
    youtubeId: "h32LjRkbNCM",
    duration: "19:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa arti kata 'Pancasila'?",
        options: [
          "Lima prinsip atau asas",
          "Empat pilar",
          "Tiga dasar",
          "Enam ajaran",
        ],
        correct: 0,
      },
      {
        question: "Sila pertama Pancasila adalah...",
        options: [
          "Ketuhanan Yang Maha Esa",
          "Kemanusiaan yang Adil dan Beradab",
          "Persatuan Indonesia",
          "Keadilan Sosial",
        ],
        correct: 0,
      },
      {
        question: "BPUPKI dibentuk pada tanggal...",
        options: [
          "29 April 1945",
          "17 Agustus 1945",
          "1 Maret 1945",
          "10 November 1945",
        ],
        correct: 0,
      },
      {
        question: "Tokoh yang merumuskan Pancasila adalah...",
        options: [
          "Ir. Soekarno",
          "Mohammad Hatta",
          "Sutan Syahrir",
          "Tan Malaka",
        ],
        correct: 0,
      },
      {
        question: "Fungsi utama Pancasila adalah...",
        options: [
          "Sebagai dasar negara",
          "Sebagai lambang negara",
          "Sebagai lagu kebangsaan",
          "Sebagai bendera negara",
        ],
        correct: 0,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Kapan UUD 1945 pertama kali disahkan?",
        options: [
          "18 Agustus 1945",
          "17 Agustus 1945",
          "1 Juni 1945",
          "29 Mei 1945",
        ],
        correct: 0,
      },
      {
        question: "Berapa kali UUD 1945 diamandemen?",
        options: ["4 kali", "3 kali", "2 kali", "5 kali"],
        correct: 0,
      },
      {
        question: "Apa yang dimaksud dengan amandemen?",
        options: [
          "Perubahan terhadap konstitusi",
          "Pembubaran konstitusi",
          "Penambahan bab baru",
          "Penggantian konstitusi",
        ],
        correct: 0,
      },
      {
        question: "Lembaga yang berwenang mengubah UUD 1945 adalah...",
        options: ["MPR", "DPR", "Presiden", "Mahkamah Konstitusi"],
        correct: 0,
      },
      {
        question: "Pembukaan UUD 1945 terdiri dari...",
        options: ["4 alinea", "3 alinea", "5 alinea", "6 alinea"],
        correct: 0,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Apa arti Bhinneka Tunggal Ika?",
        options: [
          "Berbeda-beda tetapi tetap satu jua",
          "Sama rata sama rasa",
          "Bersatu kita teguh",
          "Indonesia raya",
        ],
        correct: 0,
      },
      {
        question: "Bentuk negara Indonesia adalah...",
        options: [
          "Negara kesatuan",
          "Negara federal",
          "Negara serikat",
          "Negara monarki",
        ],
        correct: 0,
      },
      {
        question: "Semboyan Bhinneka Tunggal Ika terdapat pada...",
        options: [
          "Lambang negara Garuda Pancasila",
          "Bendera merah putih",
          "Lagu Indonesia Raya",
          "Pembukaan UUD 1945",
        ],
        correct: 0,
      },
      {
        question: "NKRI berdiri pada tanggal...",
        options: [
          "17 Agustus 1945",
          "18 Agustus 1945",
          "28 Oktober 1928",
          "1 Juni 1945",
        ],
        correct: 0,
      },
      {
        question: "Makna persatuan dalam NKRI adalah...",
        options: [
          "Bersatu dalam keberagaman",
          "Sama dalam segala hal",
          "Tidak ada perbedaan",
          "Mengutamakan keseragaman",
        ],
        correct: 0,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Hak untuk mendapatkan pendidikan diatur dalam pasal...",
        options: [
          "Pasal 31 UUD 1945",
          "Pasal 27 UUD 1945",
          "Pasal 28 UUD 1945",
          "Pasal 30 UUD 1945",
        ],
        correct: 0,
      },
      {
        question: "Kewajiban membela negara diatur dalam pasal...",
        options: [
          "Pasal 27 UUD 1945",
          "Pasal 28 UUD 1945",
          "Pasal 29 UUD 1945",
          "Pasal 30 UUD 1945",
        ],
        correct: 0,
      },
      {
        question: "Hak asasi manusia diatur dalam...",
        options: [
          "Pasal 28A-28J UUD 1945",
          "Pasal 27 UUD 1945",
          "Pasal 29 UUD 1945",
          "Pasal 31 UUD 1945",
        ],
        correct: 0,
      },
      {
        question:
          "Kewajiban warga negara untuk ikut serta dalam pertahanan negara diatur dalam pasal...",
        options: [
          "Pasal 30 UUD 1945",
          "Pasal 27 UUD 1945",
          "Pasal 28 UUD 1945",
          "Pasal 31 UUD 1945",
        ],
        correct: 0,
      },
      {
        question:
          "Hak untuk bekerja dan penghidupan yang layak diatur dalam pasal...",
        options: [
          "Pasal 27 UUD 1945",
          "Pasal 28 UUD 1945",
          "Pasal 29 UUD 1945",
          "Pasal 30 UUD 1945",
        ],
        correct: 0,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Sistem pemerintahan Indonesia adalah...",
        options: ["Presidensial", "Parlamen", "Monarki", "Komunis"],
        correct: 0,
      },
      {
        question: "Demokrasi yang dianut Indonesia adalah...",
        options: [
          "Demokrasi Pancasila",
          "Demokrasi Liberal",
          "Demokrasi Terpimpin",
          "Demokrasi Sosialis",
        ],
        correct: 0,
      },
      {
        question: "Pemilu di Indonesia diselenggarakan setiap...",
        options: [
          "5 tahun sekali",
          "4 tahun sekali",
          "6 tahun sekali",
          "7 tahun sekali",
        ],
        correct: 0,
      },
      {
        question: "Lembaga negara yang memegang kekuasaan legislatif adalah...",
        options: ["DPR", "Presiden", "MA", "MK"],
        correct: 0,
      },
      {
        question: "Kekuasaan eksekutif dipegang oleh...",
        options: ["Presiden", "DPR", "MPR", "Mahkamah Agung"],
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
  console.log("PPKn Page Loaded");

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
  const savedProgress = localStorage.getItem("ppknUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("ppknUserProgress", JSON.stringify(userProgress));
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
  alert("Selamat! Anda telah menyelesaikan semua materi PPKn! 🎓🎉");
}

// Add CSS for visual feedback
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

// Export functions for global access
window.goBackToDashboard = goBackToDashboard;
window.setActiveChapter = setActiveChapter;
window.navigateToChapter = navigateToChapter;
window.submitQuiz = submitQuiz;

console.log("PPKn JavaScript loaded successfully!");
