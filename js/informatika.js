// JavaScript for Informatika Page

// Data video YouTube untuk setiap bab - DIPERBARUI
const videoData = {
  1: {
    title: "Belajar Mengenal Komputer dan Komponennya",
    description:
      "Video ini menjelaskan tentang pengertian komputer, komponen-komponen utama, dan cara kerja komputer.",
    youtubeId: "fSGSzAYftz0",
    duration: "12:30",
  },
  2: {
    title: "Memahami Sistem Operasi Komputer",
    description:
      "Video ini menjelaskan tentang pengertian, fungsi, dan jenis-jenis sistem operasi komputer.",
    youtubeId: "gSImFfrlsE0",
    duration: "15:45",
  },
  3: {
    title: "Belajar Dasar Microsoft Word",
    description:
      "Video ini menjelaskan tentang pengenalan Microsoft Word, fitur-fitur dasar, dan cara membuat dokumen sederhana.",
    youtubeId: "Ua2ws-LcLxE",
    duration: "18:20",
  },
  4: {
    title: "Belajar Dasar Microsoft Excel",
    description:
      "Video ini menjelaskan tentang pengenalan Microsoft Excel, rumus-rumus dasar, dan cara mengolah data sederhana.",
    youtubeId: "6WgvzCU3TI8",
    duration: "20:15",
  },
  5: {
    title: "Belajar Internet dan Email dengan Aman",
    description:
      "Video ini menjelaskan tentang pengenalan internet, cara menggunakan email, dan etika berinternet yang aman.",
    youtubeId: "x5aERTeEYrI",
    duration: "16:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa yang dimaksud dengan CPU?",
        options: [
          "Central Processing Unit - otak komputer",
          "Computer Power Unit - unit daya komputer",
          "Central Power Unit - unit daya pusat",
          "Computer Processing Unit - unit pemroses komputer",
        ],
        correct: 0,
      },
      {
        question: "Manakah yang termasuk perangkat input?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        correct: 2,
      },
      {
        question: "Fungsi utama RAM adalah...",
        options: [
          "Menyimpan data secara permanen",
          "Memproses data sementara",
          "Menampilkan gambar di layar",
          "Menyuplai daya listrik",
        ],
        correct: 1,
      },
      {
        question: "Manakah yang BUKAN jenis komputer?",
        options: ["Laptop", "Tablet", "Smartphone", "Televisi"],
        correct: 3,
      },
      {
        question: "Motherboard berfungsi sebagai...",
        options: [
          "Papan sirkuit utama yang menghubungkan komponen",
          "Penyimpan data permanen",
          "Pemroses data utama",
          "Penyuplai daya listrik",
        ],
        correct: 0,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Apa fungsi utama sistem operasi?",
        options: [
          "Mengelola sumber daya perangkat keras",
          "Mengetik dokumen",
          "Bermain game",
          "Mengakses internet",
        ],
        correct: 0,
      },
      {
        question: "Manakah yang BUKAN sistem operasi?",
        options: ["Windows", "macOS", "Microsoft Word", "Linux"],
        correct: 2,
      },
      {
        question: "Sistem operasi yang dikembangkan oleh Apple adalah...",
        options: ["Windows", "macOS", "Linux", "Android"],
        correct: 1,
      },
      {
        question: "Manakah yang termasuk fungsi sistem operasi?",
        options: [
          "Manajemen memori dan proses",
          "Mengedit foto",
          "Membuat presentasi",
          "Mengetik dokumen",
        ],
        correct: 0,
      },
      {
        question: "Sistem operasi Linux bersifat...",
        options: [
          "Open source dan gratis",
          "Berbayar dan tertutup",
          "Hanya untuk Apple",
          "Hanya untuk gaming",
        ],
        correct: 0,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Microsoft Word digunakan untuk...",
        options: [
          "Mengolah kata dan membuat dokumen",
          "Membuat presentasi",
          "Mengolah data angka",
          "Mengedit gambar",
        ],
        correct: 0,
      },
      {
        question: "Tab yang berisi pengaturan font dan paragraf adalah...",
        options: ["Home", "Insert", "Layout", "Review"],
        correct: 0,
      },
      {
        question: "Fitur untuk memeriksa ejaan terdapat di tab...",
        options: ["Home", "Insert", "Review", "View"],
        correct: 2,
      },
      {
        question: "Untuk menyisipkan gambar, kita menggunakan tab...",
        options: ["Home", "Insert", "Layout", "Design"],
        correct: 1,
      },
      {
        question: "Shortcut untuk menyimpan dokumen adalah...",
        options: ["Ctrl+S", "Ctrl+C", "Ctrl+V", "Ctrl+P"],
        correct: 0,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Microsoft Excel digunakan untuk...",
        options: [
          "Mengolah data numerik dan membuat grafik",
          "Mengetik dokumen teks",
          "Membuat presentasi",
          "Mengedit foto",
        ],
        correct: 0,
      },
      {
        question: "Fungsi untuk menjumlahkan data adalah...",
        options: ["SUM", "AVERAGE", "MAX", "MIN"],
        correct: 0,
      },
      {
        question: "Tempat dimana data dimasukkan di Excel disebut...",
        options: ["Cell", "Box", "Field", "Area"],
        correct: 0,
      },
      {
        question: "Fungsi IF digunakan untuk...",
        options: [
          "Memberikan kondisi pada data",
          "Menjumlahkan data",
          "Mencari rata-rata",
          "Menggabungkan teks",
        ],
        correct: 0,
      },
      {
        question: "Kumpulan dari beberapa worksheet disebut...",
        options: ["Workbook", "File", "Document", "Sheet"],
        correct: 0,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Apa kepanjangan dari WWW?",
        options: [
          "World Wide Web",
          "World Web Wide",
          "Web World Wide",
          "Wide World Web",
        ],
        correct: 0,
      },
      {
        question: "Email digunakan untuk...",
        options: [
          "Mengirim surat elektronik",
          "Menelpon seseorang",
          "Mengirim pesan singkat",
          "Bermain game online",
        ],
        correct: 0,
      },
      {
        question: "CC dalam email berarti...",
        options: [
          "Carbon Copy - salinan untuk penerima lain",
          "Computer Copy - salinan komputer",
          "Copy Center - pusat salinan",
          "Cyber Copy - salinan digital",
        ],
        correct: 0,
      },
      {
        question: "Manakah etika berinternet yang benar?",
        options: [
          "Menggunakan bahasa yang sopan",
          "Menyebarkan informasi pribadi",
          "Percaya semua informasi di internet",
          "Menggunakan password yang mudah",
        ],
        correct: 0,
      },
      {
        question: "Attachment dalam email adalah...",
        options: [
          "File yang dilampirkan",
          "Subjek email",
          "Isi pesan email",
          "Alamat penerima",
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
  console.log("Informatika Page Loaded");

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
  const savedProgress = localStorage.getItem("informatikaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("informatikaUserProgress", JSON.stringify(userProgress));
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
  alert("Selamat! Anda telah menyelesaikan semua materi Informatika! 🎓🎉");
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

console.log("Informatika JavaScript loaded successfully!");
