// JavaScript for Penjaskes Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Teknik Dasar Sepak Bola untuk Pemula",
    description:
      "Video ini menjelaskan tentang teknik dasar sepak bola seperti passing, dribbling, shooting, dan kontrol bola yang benar.",
    youtubeId: "d4DnK8Mh5k8",
    duration: "12:45",
  },
  2: {
    title: "Teknik Dasar Bulutangkis untuk Pemula",
    description:
      "Video ini menjelaskan tentang cara memegang raket, footwork, dan berbagai jenis pukulan dalam bulutangkis.",
    youtubeId: "3x9KRSfksWc",
    duration: "15:20",
  },
  3: {
    title: "Teknik Start yang Benar dalam Lari Sprint",
    description:
      "Video ini menjelaskan tentang teknik start jongkok, posisi blocks start, dan fase akselerasi dalam lari sprint.",
    youtubeId: "6lM2zj5r6wY",
    duration: "10:30",
  },
  4: {
    title: "Latihan Kebugaran Jasmani untuk Pemula",
    description:
      "Video ini menjelaskan tentang berbagai latihan untuk meningkatkan komponen kebugaran jasmani seperti kekuatan, daya tahan, dan kelenturan.",
    youtubeId: "dZgVO2NJ1tU",
    duration: "18:15",
  },
  5: {
    title: "Teknik Dasar Senam Lantai untuk Pemula",
    description:
      "Video ini menjelaskan tentang gerakan-gerakan dasar senam lantai seperti roll depan, roll belakang, handstand, dan meroda.",
    youtubeId: "6L_kc7B6c08",
    duration: "14:40",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Jumlah pemain sepak bola dalam satu tim adalah...",
        options: ["9 pemain", "11 pemain", "7 pemain", "13 pemain"],
        correct: 1,
      },
      {
        question:
          "Teknik mengoper bola dengan kepala dalam sepak bola disebut...",
        options: ["Dribbling", "Heading", "Tackling", "Shooting"],
        correct: 1,
      },
      {
        question: "Dalam bola basket, tembakan dari luar area bernilai...",
        options: ["1 poin", "2 poin", "3 poin", "4 poin"],
        correct: 2,
      },
      {
        question: "Teknik membendung serangan lawan dalam bola voli disebut...",
        options: ["Servis", "Smash", "Block", "Passing"],
        correct: 2,
      },
      {
        question:
          "Lama waktu permainan bola basket untuk satu quarter adalah...",
        options: ["8 menit", "10 menit", "12 menit", "15 menit"],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Bola dalam permainan tenis meja disebut...",
        options: ["Shuttlecock", "Ball", "Pingpong", "Kok"],
        correct: 2,
      },
      {
        question: "Teknik memegang raket seperti berjabat tangan disebut...",
        options: [
          "Penhold grip",
          "Shakehand grip",
          "Backhand grip",
          "Forehand grip",
        ],
        correct: 1,
      },
      {
        question: "Sistem poin yang digunakan dalam tenis meja adalah...",
        options: ["15 poin", "21 poin", "11 poin", "25 poin"],
        correct: 2,
      },
      {
        question: "Pukulan keras dan menukik dalam bulutangkis disebut...",
        options: ["Drop shot", "Lob", "Smash", "Drive"],
        correct: 2,
      },
      {
        question: "Tinggi net dalam permainan tenis meja adalah...",
        options: ["10.25 cm", "15.25 cm", "20.25 cm", "25.25 cm"],
        correct: 1,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Jarak lari sprint terpendek dalam atletik adalah...",
        options: ["50 meter", "100 meter", "200 meter", "400 meter"],
        correct: 1,
      },
      {
        question:
          "Teknik start yang menggunakan blocks start biasanya untuk...",
        options: [
          "Lari marathon",
          "Lari sprint",
          "Lari estafet",
          "Lari gawang",
        ],
        correct: 1,
      },
      {
        question: "Gaya lompat tinggi yang paling modern adalah...",
        options: ["Gaya gunting", "Gaya guling", "Gaya flop", "Gaya straddle"],
        correct: 2,
      },
      {
        question: "Urutan yang benar dalam lompat jangkit adalah...",
        options: [
          "Hop-step-jump",
          "Step-hop-jump",
          "Jump-hop-step",
          "Step-jump-hop",
        ],
        correct: 0,
      },
      {
        question:
          "Alat yang digunakan atlet untuk tolakan dalam lompat tinggi adalah...",
        options: ["Tongkat", "Beban", "Tidak ada alat", "Blocks"],
        correct: 2,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Kemampuan otot mengatasi beban disebut...",
        options: ["Daya tahan", "Kekuatan", "Kecepatan", "Kelenturan"],
        correct: 1,
      },
      {
        question: "Latihan push-up bertujuan untuk melatih kekuatan otot...",
        options: ["Kaki", "Perut", "Lengan dan dada", "Punggung"],
        correct: 2,
      },
      {
        question:
          "Kemampuan melakukan gerakan dalam ruang gerak sendi disebut...",
        options: ["Kelincahan", "Kelenturan", "Koordinasi", "Keseimbangan"],
        correct: 1,
      },
      {
        question:
          "Tes kebugaran yang mengukur daya tahan kardiovaskular adalah...",
        options: ["Push-up", "Sit-up", "Lari 2.4 km", "Shuttle run"],
        correct: 2,
      },
      {
        question: "Latihan sit-up bertujuan untuk melatih otot...",
        options: ["Punggung", "Perut", "Dada", "Kaki"],
        correct: 1,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Gerakan berguling ke depan dalam senam lantai disebut...",
        options: ["Backward roll", "Forward roll", "Handstand", "Cartwheel"],
        correct: 1,
      },
      {
        question:
          "Posisi tubuh tegak lurus dengan tangan sebagai tumpuan disebut...",
        options: ["Headstand", "Handstand", "Bridge", "Cartwheel"],
        correct: 1,
      },
      {
        question:
          "Gerakan memutar tubuh dengan tumpuan tangan dan kaki disebut...",
        options: ["Roll", "Handstand", "Cartwheel", "Bridge"],
        correct: 2,
      },
      {
        question: "Alas yang digunakan untuk senam lantai adalah...",
        options: ["Kasur", "Matras", "Karpet", "Tikar"],
        correct: 1,
      },
      {
        question: "Gerakan kayang bertujuan untuk melatih...",
        options: [
          "Kekuatan lengan",
          "Kelenturan punggung",
          "Keseimbangan",
          "Kelincahan",
        ],
        correct: 1,
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
  console.log("Penjaskes Page Loaded");

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
  const savedProgress = localStorage.getItem("penjaskesUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("penjaskesUserProgress", JSON.stringify(userProgress));
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
        chapterItem.style.background = "#27ae60";
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
                    })" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Lanjut ke Bab ${chapter + 1}
                    </button>
                `
                    : `
                    <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
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
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Review Bab Ini
                </button>
            `;
    } else {
      resultElement.className = "quiz-result error";
      resultHTML = `
                <h4>📚 Terus Berlatih!</h4>
                <p><strong>Nilai Anda: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Jangan khawatir! Pelajari kembali materi dan coba lagi.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
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
    "Selamat! Anda telah menyelesaikan semua materi Pendidikan Jasmani dan Olahraga! 🎓🏆"
  );
}

// Add CSS for visual feedback
const style = document.createElement("style");
style.textContent = `
    .quiz-options label.correct {
        background-color: #e8f8f1 !important;
        border-color: #27ae60 !important;
        color: #219653;
    }
    .quiz-options label.incorrect {
        background-color: #f8d7da !important;
        border-color: #f5c6cb !important;
        color: #721c24;
    }
    .quiz-options label.correct-answer {
        background-color: #e8f8f1 !important;
        border-color: #27ae60 !important;
        border: 2px solid #27ae60 !important;
        color: #219653;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.goBackToDashboard = goBackToDashboard;
window.setActiveChapter = setActiveChapter;
window.navigateToChapter = navigateToChapter;
window.submitQuiz = submitQuiz;

console.log("Penjaskes JavaScript loaded successfully!");
