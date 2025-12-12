// JavaScript for Ilmu Pengetahuan Sosial Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Interaksi Sosial dalam Kehidupan Sehari-hari",
    description:
      "Video ini menjelaskan tentang pengertian, bentuk-bentuk, dan contoh interaksi sosial dalam masyarakat.",
    youtubeId: "-QJMMU3xab0",
    duration: "15:30",
  },
  2: {
    title: "Peran Lembaga Sosial dalam Masyarakat",
    description:
      "Video ini menjelaskan tentang jenis-jenis lembaga sosial dan fungsinya dalam kehidupan bermasyarakat.",
    youtubeId: "qW-7jPfGZrs",
    duration: "18:45",
  },
  3: {
    title: "Dampak Globalisasi di Era Modern",
    description:
      "Video pembelajaran tentang pengertian, faktor pendorong, dan dampak globalisasi dalam berbagai aspek kehidupan.",
    youtubeId: "q52WbOmAeTc",
    duration: "22:15",
  },
  4: {
    title: "Keragaman Budaya Indonesia",
    description:
      "Video tentang kekayaan dan keragaman budaya di Indonesia serta pentingnya melestarikannya.",
    youtubeId: "Qq67SHLWM-I",
    duration: "20:30",
  },
  5: {
    title: "Pembangunan Ekonomi Berkelanjutan",
    description:
      "Video pembelajaran tentang konsep dan implementasi pembangunan ekonomi berkelanjutan.",
    youtubeId: "bdI59W1-dlA",
    duration: "25:10",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa yang dimaksud dengan interaksi sosial?",
        options: [
          "Hubungan timbal balik antar manusia dalam masyarakat",
          "Kegiatan ekonomi dalam masyarakat",
          "Perubahan sosial dalam masyarakat",
          "Struktur organisasi masyarakat",
        ],
        correct: 0,
      },
      {
        question: "Manakah yang termasuk interaksi asosiatif?",
        options: ["Kerja sama", "Konflik", "Persaingan", "Kontravensi"],
        correct: 0,
      },
      {
        question:
          "Faktor apa yang mendorong seseorang meniru perilaku orang lain?",
        options: ["Imitasi", "Sugesti", "Identifikasi", "Simpati"],
        correct: 0,
      },
      {
        question: "Apa yang dimaksud dengan asimilasi?",
        options: [
          "Percampuran budaya yang menghasilkan budaya baru",
          "Penyelesaian konflik secara damai",
          "Usaha bersama mencapai tujuan",
          "Pertentangan terbuka antar kelompok",
        ],
        correct: 0,
      },
      {
        question: "Manakah contoh interaksi disosiatif?",
        options: [
          "Kerja bakti membersihkan lingkungan",
          "Persaingan dalam bisnis",
          "Gotong royong membangun jembatan",
          "Musyawarah mencapai mufakat",
        ],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "Apa yang dimaksud dengan lembaga sosial?",
        options: [
          "Sistem norma yang mengatur perilaku manusia",
          "Gedung tempat kegiatan sosial",
          "Organisasi kemasyarakatan",
          "Kelompok sosial informal",
        ],
        correct: 0,
      },
      {
        question: "Manakah yang termasuk lembaga keluarga?",
        options: [
          "Unit sosial terkecil dalam masyarakat",
          "Tempat bekerja",
          "Lembaga pemerintah",
          "Organisasi bisnis",
        ],
        correct: 0,
      },
      {
        question: "Apa fungsi utama lembaga pendidikan?",
        options: [
          "Media transfer ilmu pengetahuan",
          "Mengatur produksi barang",
          "Menjaga keamanan negara",
          "Mengatur perdagangan",
        ],
        correct: 0,
      },
      {
        question: "Lembaga apa yang mengatur kekuasaan dan pemerintahan?",
        options: [
          "Lembaga Politik",
          "Lembaga Ekonomi",
          "Lembaga Keluarga",
          "Lembaga Pendidikan",
        ],
        correct: 0,
      },
      {
        question: "Mengapa lembaga sosial penting dalam masyarakat?",
        options: [
          "Memberikan pedoman perilaku dan menjaga keutuhan masyarakat",
          "Meningkatkan pendapatan individu",
          "Memperbanyak jumlah penduduk",
          "Mengurangi interaksi sosial",
        ],
        correct: 0,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "Apa pengertian globalisasi?",
        options: [
          "Proses mendunianya berbagai aspek kehidupan",
          "Perdagangan internasional",
          "Penyebaran budaya barat",
          "Kemajuan teknologi informasi",
        ],
        correct: 0,
      },
      {
        question: "Manakah dampak positif globalisasi?",
        options: [
          "Pertukaran informasi yang cepat",
          "Hilangnya budaya lokal",
          "Kesenjangan ekonomi",
          "Pencemaran lingkungan",
        ],
        correct: 0,
      },
      {
        question: "Apa yang dimaksud dengan westernisasi?",
        options: [
          "Peniruan budaya barat secara berlebihan",
          "Penyebaran budaya timur",
          "Pembentukan pasar global",
          "Kemajuan teknologi",
        ],
        correct: 0,
      },
      {
        question: "Bagaimana cara menghadapi globalisasi?",
        options: [
          "Memfilter budaya asing dan memperkuat budaya lokal",
          "Menutup diri dari pengaruh luar",
          "Menerima semua budaya asing",
          "Mengabaikan perkembangan global",
        ],
        correct: 0,
      },
      {
        question: "Manakah contoh globalisasi di bidang ekonomi?",
        options: [
          "Perdagangan bebas antar negara",
          "Pertukaran pelajar",
          "Festival budaya internasional",
          "Konferensi ilmiah",
        ],
        correct: 0,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "Apa yang dimaksud dengan keragaman budaya?",
        options: [
          "Keanekaragaman kebudayaan dalam masyarakat",
          "Persamaan budaya antar daerah",
          "Penyebaran budaya nasional",
          "Pembentukan budaya baru",
        ],
        correct: 0,
      },
      {
        question: "Apa manfaat keragaman budaya?",
        options: [
          "Memperkaya khazanah budaya bangsa",
          "Menyulitkan komunikasi",
          "Menimbulkan konflik",
          "Menghambat pembangunan",
        ],
        correct: 0,
      },
      {
        question: "Bagaimana cara melestarikan budaya lokal?",
        options: [
          "Mengajarkan kepada generasi muda",
          "Mengabaikan budaya tradisional",
          "Hanya mempelajari budaya asing",
          "Menutup diri dari budaya lain",
        ],
        correct: 0,
      },
      {
        question: "Apa yang dimaksud dengan akulturasi?",
        options: [
          "Percampuran dua budaya yang berbeda",
          "Penghapusan budaya lama",
          "Pembentukan budaya baru",
          "Penyebaran budaya asing",
        ],
        correct: 0,
      },
      {
        question: "Manakah contoh sikap toleransi terhadap keragaman?",
        options: [
          "Menghormati perbedaan tradisi",
          "Memaksakan budaya sendiri",
          "Mengejek budaya lain",
          "Mengisolasi kelompok tertentu",
        ],
        correct: 0,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "Apa tujuan pembangunan ekonomi?",
        options: [
          "Meningkatkan kesejahteraan masyarakat",
          "Memperkaya segelintir orang",
          "Menambah utang negara",
          "Menguasai pasar internasional",
        ],
        correct: 0,
      },
      {
        question: "Apa yang dimaksud dengan pembangunan berkelanjutan?",
        options: [
          "Pembangunan yang memenuhi kebutuhan sekarang tanpa mengorbankan generasi mendatang",
          "Pembangunan yang cepat tanpa perencanaan",
          "Pembangunan hanya untuk jangka pendek",
          "Pembangunan yang mengutamakan keuntungan",
        ],
        correct: 0,
      },
      {
        question: "Manakah indikator keberhasilan pembangunan ekonomi?",
        options: [
          "Pertumbuhan PDB dan penurunan kemiskinan",
          "Peningkatan impor barang mewah",
          "Pembangunan gedung pencakar langit",
          "Peningkatan jumlah kendaraan pribadi",
        ],
        correct: 0,
      },
      {
        question: "Apa peran UMKM dalam pembangunan ekonomi?",
        options: [
          "Menyerap tenaga kerja dan mendorong perekonomian lokal",
          "Hanya untuk bisnis keluarga",
          "Tidak berpengaruh pada perekonomian",
          "Hanya menguntungkan pemiliknya",
        ],
        correct: 0,
      },
      {
        question: "Bagaimana cara mencapai pembangunan berkelanjutan?",
        options: [
          "Mengintegrasikan aspek ekonomi, sosial, dan lingkungan",
          "Hanya fokus pada pertumbuhan ekonomi",
          "Mengabaikan dampak lingkungan",
          "Hanya memperhatikan keuntungan",
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
  console.log("Ilmu Pengetahuan Sosial Page Loaded");

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
  const savedProgress = localStorage.getItem("ipsUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("ipsUserProgress", JSON.stringify(userProgress));
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
    "Selamat! Anda telah menyelesaikan semua materi Ilmu Pengetahuan Sosial! 🎓🎉"
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
window.playVideo = function (videoName) {
  const videoDataForChapter = videoData[currentChapter];
  if (videoDataForChapter) {
    window.open(
      `https://www.youtube.com/watch?v=${videoDataForChapter.youtubeId}`,
      "_blank"
    );
  }
};

console.log("Ilmu Pengetahuan Sosial JavaScript loaded successfully!");
