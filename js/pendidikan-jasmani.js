// JavaScript for Pendidikan Jasmani & Olahraga Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Teknik Dasar Permainan Bola Besar",
    description:
      "Video ini menjelaskan tentang teknik dasar sepak bola, bola basket, dan bola voli serta peraturan permainan yang berlaku.",
    youtubeId: "4w8pQlwh7bk", // Sepak Bola Dasar
    duration: "12:45",
  },
  2: {
    title: "Teknik Dasar Permainan Bola Kecil",
    description:
      "Video ini menjelaskan tentang teknik dasar bulu tangkis, tenis meja, dan peraturan permainan bola kecil lainnya.",
    youtubeId: "LCVSTQ94fYg", // Bulu Tangkis Dasar
    duration: "15:20",
  },
  3: {
    title: "Teknik Dasar Lari, Lompat, dan Lempar",
    description:
      "Video ini menjelaskan tentang teknik dasar berbagai nomor atletik, termasuk lari sprint, lompat jauh, dan lempar lembing.",
    youtubeId: "rYK0-b4Nvc4", // Atletik Dasar
    duration: "18:30",
  },
  4: {
    title: "Teknik Dasar Senam Lantai",
    description:
      "Video ini menjelaskan tentang gerakan-gerakan dasar senam lantai seperti guling depan, guling belakang, handstand, dan meroda.",
    youtubeId: "p4_mg5ULjdc", // Senam Lantai Dasar
    duration: "14:15",
  },
  5: {
    title: "Latihan Kebugaran Jasmani untuk Pemula",
    description:
      "Video ini menjelaskan tentang berbagai latihan kebugaran jasmani, komponen-komponen kebugaran, dan manfaat menjaga kebugaran tubuh.",
    youtubeId: "mlVr3Co5Vro", // Kebugaran Jasmani
    duration: "20:45",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Berapa jumlah pemain dalam satu tim sepak bola?",
        options: ["9 pemain", "11 pemain", "7 pemain", "5 pemain"],
        correct: 1,
      },
      {
        question:
          "Teknik menendang bola dengan kaki bagian dalam digunakan untuk...",
        options: [
          "Tendangan jarak jauh",
          "Umpan pendek dan akurat",
          "Shooting ke gawang",
          "Lemparan ke dalam",
        ],
        correct: 1,
      },
      {
        question:
          "Dalam bola basket, pelanggaran membawa bola tanpa didribble disebut...",
        options: ["Double dribble", "Travelling", "Charging", "Blocking"],
        correct: 1,
      },
      {
        question: "Tinggi ring basket standar internasional adalah...",
        options: ["2.75 meter", "3.05 meter", "2.90 meter", "3.15 meter"],
        correct: 1,
      },
      {
        question:
          "Teknik dasar dalam bola voli yang digunakan untuk memulai permainan disebut...",
        options: ["Smash", "Block", "Service", "Passing"],
        correct: 2,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Berapa berat bola tenis meja standar internasional?",
        options: ["2.7 gram", "4.5 gram", "5.2 gram", "3.8 gram"],
        correct: 0,
      },
      {
        question: "Pukulan keras dan menukik dalam bulu tangkis disebut...",
        options: ["Lob", "Drop shot", "Smash", "Drive"],
        correct: 2,
      },
      {
        question:
          "Dalam tenis meja, servis harus melambungkan bola minimal setinggi...",
        options: ["10 cm", "16 cm", "20 cm", "25 cm"],
        correct: 1,
      },
      {
        question: "Jumlah bulu pada kok/shuttlecock standar adalah...",
        options: ["14 bulu", "16 bulu", "18 bulu", "20 bulu"],
        correct: 1,
      },
      {
        question: "Sistem penilaian dalam tenis meja adalah...",
        options: [
          "Best of 3 game",
          "Permainan hingga 21 poin",
          "Permainan hingga 11 poin",
          "Permainan hingga 15 poin",
        ],
        correct: 2,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Atletik sering disebut sebagai...",
        options: [
          "Raja olahraga",
          "Ibu dari segala cabang olahraga",
          "Olahraga tertua",
          "Olahraga terpopuler",
        ],
        correct: 1,
      },
      {
        question: "Start yang digunakan untuk lari jarak pendek adalah...",
        options: [
          "Start berdiri",
          "Start jongkok",
          "Start melayang",
          "Start duduk",
        ],
        correct: 1,
      },
      {
        question: "Urutan yang benar dalam lompat jangkit adalah...",
        options: [
          "Hop-step-jump",
          "Jump-hop-step",
          "Step-hop-jump",
          "Hop-jump-step",
        ],
        correct: 0,
      },
      {
        question: "Lempar lembing termasuk dalam cabang atletik nomor...",
        options: ["Lari", "Lompat", "Lempar", "Lari gawang"],
        correct: 2,
      },
      {
        question: "Jarak standar lari sprint 100 meter adalah...",
        options: [
          "100 meter lurus",
          "100 meter dengan tikungan",
          "110 meter dengan rintangan",
          "200 meter lurus",
        ],
        correct: 0,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Gerakan berdiri dengan tangan sebagai tumpuan disebut...",
        options: ["Headstand", "Handstand", "Shoulder stand", "Cartwheel"],
        correct: 1,
      },
      {
        question:
          "Gerakan berguling ke depan dengan bertumpu pada tengkuk disebut...",
        options: ["Guling belakang", "Guling depan", "Meroda", "Salto"],
        correct: 1,
      },
      {
        question: "Gerakan memutar tubuh dengan tumpuan tangan disebut...",
        options: ["Handstand", "Cartwheel", "Forward roll", "Backward roll"],
        correct: 1,
      },
      {
        question:
          "Alat yang digunakan sebagai alas dalam senam lantai adalah...",
        options: ["Kasur", "Matras", "Karpet", "Tikar"],
        correct: 1,
      },
      {
        question:
          "Gerakan senam lantai yang dilakukan dengan berguling ke belakang disebut...",
        options: ["Guling depan", "Guling belakang", "Meroda", "Handstand"],
        correct: 1,
      },
    ],
  },
  5: {
    questions: [
      {
        question:
          "Kemampuan tubuh melakukan aktivitas fisik dalam waktu lama disebut...",
        options: ["Kekuatan", "Daya tahan", "Kelenturan", "Kecepatan"],
        correct: 1,
      },
      {
        question: "Latihan push-up bertujuan untuk menguatkan otot...",
        options: ["Perut", "Paha", "Dada dan lengan", "Punggung"],
        correct: 2,
      },
      {
        question: "Latihan yang baik untuk meningkatkan kelenturan adalah...",
        options: ["Angkat beban", "Lari sprint", "Peregangan", "Sit-up"],
        correct: 2,
      },
      {
        question:
          "Frekuensi latihan kebugaran yang dianjurkan per minggu adalah...",
        options: ["1-2 kali", "3-5 kali", "6-7 kali", "Setiap hari"],
        correct: 1,
      },
      {
        question: "Manfaat utama latihan kebugaran jasmani adalah...",
        options: [
          "Meningkatkan prestasi akademik",
          "Meningkatkan kesehatan tubuh",
          "Menambah berat badan",
          "Mengurangi tinggi badan",
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
  console.log("Pendidikan Jasmani & Olahraga Page Loaded");

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
  const savedProgress = localStorage.getItem("penjasUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("penjasUserProgress", JSON.stringify(userProgress));
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
              }-${chapter}" value="${String.fromCharCode(97 + optIndex)}" />
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
        <p>Kerja bagus! Anda memahami materi pendidikan jasmani dengan sangat baik.</p>
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
            Selamat! Anda Menyelesaikan Semua Bab PJOK 🏃‍♂️🏀
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
        <p>Jangan khawatir! Pelajari kembali materi pendidikan jasmani dan coba lagi.</p>
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
    "Selamat! Anda telah menyelesaikan semua materi Pendidikan Jasmani & Olahraga! 🏃‍♂️⚽🏀"
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

console.log("Pendidikan Jasmani & Olahraga JavaScript loaded successfully!");
