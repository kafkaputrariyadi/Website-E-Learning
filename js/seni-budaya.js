// JavaScript for Seni Budaya Page

// Data video YouTube untuk setiap bab - DIPERBARUI DENGAN LINK YANG DIBERIKAN
const videoData = {
  1: {
    title: "Memahami Unsur dan Aliran Seni Rupa",
    description: "Video ini menjelaskan tentang unsur-unsur seni rupa, jenis-jenis seni rupa, dan perkembangan aliran seni rupa di Indonesia.",
    youtubeId: "BqnpZT_Ux7Q",
    duration: "15:30"
  },
  2: {
    title: "Memahami Unsur dan Jenis Musik",
    description: "Video ini menjelaskan tentang unsur-unsur musik, jenis alat musik, dan perkembangan musik tradisional Indonesia.",
    youtubeId: "4G2QjVRL7yk",
    duration: "18:45"
  },
  3: {
    title: "Memahami Ragam Tari Tradisional Indonesia",
    description: "Video ini menjelaskan tentang berbagai jenis tari tradisional Indonesia, unsur-unsur tari, dan makna filosofis dibalik gerakan tari.",
    youtubeId: "CQgqE1kfkJA",
    duration: "22:10"
  },
  4: {
    title: "Memahami Seni Pertunjukan Teater",
    description: "Video ini menjelaskan tentang perkembangan teater tradisional Indonesia, teknik akting, dan produksi pertunjukan teater.",
    youtubeId: "TALN2aq_apY",
    duration: "20:15"
  },
  5: {
    title: "Kekayaan Kerajinan Tradisional Indonesia",
    description: "Video ini menjelaskan tentang berbagai jenis kerajinan tradisional Indonesia, teknik pembuatan, dan makna filosofis di balik motif-motifnya.",
    youtubeId: "RIcM1eywmYo",
    duration: "25:20"
  }
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "Apa yang dimaksud dengan seni rupa?",
        options: [
          "Cabang seni yang hanya bisa didengar",
          "Cabang seni yang membentuk karya dengan media visual",
          "Cabang seni yang hanya berupa gerakan tubuh",
          "Cabang seni yang hanya berupa suara"
        ],
        correct: 1
      },
      {
        question: "Unsur seni rupa yang paling dasar adalah...",
        options: [
          "Garis",
          "Warna",
          "Titik",
          "Bentuk"
        ],
        correct: 2
      },
      {
        question: "Contoh seni rupa terapan adalah...",
        options: [
          "Lukisan di museum",
          "Patung di taman",
          "Desain bangunan rumah",
          "Gambar abstrak"
        ],
        correct: 2
      },
      {
        question: "Aliran seni rupa yang menggambarkan objek sesuai kenyataan disebut...",
        options: [
          "Ekspresionisme",
          "Kubisme",
          "Realisme",
          "Impressionisme"
        ],
        correct: 2
      },
      {
        question: "Seniman Indonesia yang dikenal dengan aliran ekspresionisme adalah...",
        options: [
          "Raden Saleh",
          "Basuki Abdullah",
          "Affandi",
          "Pablo Picasso"
        ],
        correct: 2
      }
    ]
  },
  2: {
    questions: [
      {
        question: "Unsur musik yang berupa rangkaian nada berurutan disebut...",
        options: [
          "Ritme",
          "Melodi",
          "Harmoni",
          "Tempo"
        ],
        correct: 1
      },
      {
        question: "Alat musik tradisional Jawa yang terkenal adalah...",
        options: [
          "Angklung",
          "Gamelan",
          "Kolintang",
          "Sasando"
        ],
        correct: 1
      },
      {
        question: "Alat musik yang termasuk kategori ritmis adalah...",
        options: [
          "Piano",
          "Biola",
          "Drum",
          "Gitar"
        ],
        correct: 2
      },
      {
        question: "Genre musik asli Indonesia yang menggunakan gendang dan suling adalah...",
        options: [
          "Jazz",
          "Rock",
          "Dangdut",
          "Keroncong"
        ],
        correct: 2
      },
      {
        question: "Unsur musik yang mengatur keras lembutnya suara disebut...",
        options: [
          "Tempo",
          "Dinamika",
          "Timbre",
          "Harmoni"
        ],
        correct: 1
      }
    ]
  },
  3: {
    questions: [
      {
        question: "Tari Saman berasal dari daerah...",
        options: [
          "Aceh",
          "Bali",
          "Jawa Barat",
          "Sumatera Barat"
        ],
        correct: 0
      },
      {
        question: "Unsur utama dalam seni tari adalah...",
        options: [
          "Suara",
          "Gerak",
          "Warna",
          "Teks"
        ],
        correct: 1
      },
      {
        question: "Tari yang dibawakan oleh satu orang disebut...",
        options: [
          "Tari berpasangan",
          "Tari kelompok",
          "Tari massal",
          "Tari tunggal"
        ],
        correct: 3
      },
      {
        question: "Tari tradisional Bali yang terkenal adalah...",
        options: [
          "Tari Saman",
          "Tari Kecak",
          "Tari Jaipong",
          "Tari Piring"
        ],
        correct: 1
      },
      {
        question: "Alat musik pengiring tari tradisional biasanya berupa...",
        options: [
          "Gamelan",
          "Orkestra",
          "Band rock",
          "DJ set"
        ],
        correct: 0
      }
    ]
  },
  4: {
    questions: [
      {
        question: "Orang yang bertugas mengarahkan pertunjukan teater disebut...",
        options: [
          "Produser",
          "Sutradara",
          "Stage manager",
          "Penulis naskah"
        ],
        correct: 1
      },
      {
        question: "Teater tradisional dari Jawa yang menggunakan boneka kulit adalah...",
        options: [
          "Lenong",
          "Wayang",
          "Ludruk",
          "Ketoprak"
        ],
        correct: 1
      },
      {
        question: "Naskah dalam teater berfungsi sebagai...",
        options: [
          "Pedoman akting",
          "Dekorasi panggung",
          "Kostum pemain",
          "Tata cahaya"
        ],
        correct: 0
      },
      {
        question: "Teater yang mengkombinasikan dialog, nyanyian, dan tarian disebut...",
        options: [
          "Drama",
          "Komedi",
          "Musikal",
          "Tragedi"
        ],
        correct: 2
      },
      {
        question: "Properti dalam teater adalah...",
        options: [
          "Alat-alat pendukung pementasan",
          "Naskah cerita",
          "Pemain utama",
          "Tempat duduk penonton"
        ],
        correct: 0
      }
    ]
  },
  5: {
    questions: [
      {
        question: "Kota yang terkenal dengan kerajinan batik adalah...",
        options: [
          "Pekalongan",
          "Bandung",
          "Makassar",
          "Medan"
        ],
        correct: 0
      },
      {
        question: "Kerajinan anyaman biasanya menggunakan bahan...",
        options: [
          "Tanah liat",
          "Bambu atau rotan",
          "Logam perak",
          "Kain sutra"
        ],
        correct: 1
      },
      {
        question: "Tenun ikat berasal dari daerah...",
        options: [
          "Jawa",
          "Bali",
          "Nusa Tenggara Timur",
          "Sumatera"
        ],
        correct: 2
      },
      {
        question: "Kerajinan gerabah dibuat dari bahan...",
        options: [
          "Kayu",
          "Batu",
          "Tanah liat",
          "Logam"
        ],
        correct: 2
      },
      {
        question: "Ukiran kayu tradisional yang terkenal berasal dari...",
        options: [
          "Jepara",
          "Surabaya",
          "Jakarta",
          "Semarang"
        ],
        correct: 0
      }
    ]
  }
};

// State management
let currentChapter = 1;
let userProgress = {
  1: { completed: false, score: 0 },
  2: { completed: false, score: 0 },
  3: { completed: false, score: 0 },
  4: { completed: false, score: 0 },
  5: { completed: false, score: 0 }
};

// Function to go back to dashboard
function goBackToDashboard() {
  if (confirm("Apakah Anda yakin ingin kembali ke dashboard?")) {
    window.location.href = "dashboard.html";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function() {
  console.log("Seni Budaya Page Loaded");
  
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
  chapterItems.forEach(item => {
    item.addEventListener("click", function() {
      const chapterNumber = parseInt(this.getAttribute("data-chapter"));
      setActiveChapter(chapterNumber);
    });
  });
  
  // Keyboard navigation
  document.addEventListener("keydown", function(e) {
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
  const savedProgress = localStorage.getItem("seniBudayaUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("seniBudayaUserProgress", JSON.stringify(userProgress));
}

function setActiveChapter(chapterNumber) {
  if (chapterNumber < 1 || chapterNumber > 5) return;
  
  currentChapter = chapterNumber;
  
  // Remove active class from all chapters
  document.querySelectorAll(".chapter-item").forEach(item => {
    item.classList.remove("active");
  });
  
  document.querySelectorAll(".chapter-content").forEach(content => {
    content.classList.remove("active");
  });
  
  // Add active class to selected chapter
  const selectedChapter = document.querySelector(`.chapter-item[data-chapter="${chapterNumber}"]`);
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
    5: { width: "20%", text: "Progress: 20%" }
  };
  
  progressBars.forEach(bar => {
    if (progressData[chapterNumber]) {
      bar.style.width = progressData[chapterNumber].width;
    }
  });
  
  progressTexts.forEach(text => {
    if (progressData[chapterNumber]) {
      text.textContent = progressData[chapterNumber].text;
    }
  });
}

function updateProgressBars() {
  // Update all progress bars based on user progress
  Object.keys(userProgress).forEach(chapter => {
    const progress = userProgress[chapter];
    if (progress.completed) {
      const chapterItem = document.querySelector(`.chapter-item[data-chapter="${chapter}"]`);
      if (chapterItem) {
        chapterItem.style.background = "#3498db";
        chapterItem.style.color = "white";
      }
    }
  });
}

function updateOverallProgress() {
  const completedChapters = Object.values(userProgress).filter(
    progress => progress.completed
  ).length;
  const totalChapters = Object.keys(userProgress).length;
  const percentage = (completedChapters / totalChapters) * 100;
  
  console.log(`Overall Progress: ${completedChapters}/${totalChapters} (${percentage}%)`);
}

function updateVideoContent(chapterNumber) {
  const videoDataForChapter = videoData[chapterNumber];
  
  if (videoDataForChapter) {
    // Update video iframe
    const videoIframe = document.querySelector(`#chapter-${chapterNumber} iframe`);
    if (videoIframe) {
      videoIframe.src = `https://www.youtube.com/embed/${videoDataForChapter.youtubeId}?rel=0&modestbranding=1`;
    }
    
    // Update video info
    const videoTitle = document.querySelector(`#chapter-${chapterNumber} .video-info h4`);
    const videoDescription = document.querySelector(`#chapter-${chapterNumber} .video-info p`);
    
    if (videoTitle) {
      videoTitle.textContent = videoDataForChapter.title;
      videoTitle.innerHTML += ` <span class="video-duration" style="color: #666; font-size: 12px; font-weight: normal;">(${videoDataForChapter.duration})</span>`;
    }
    if (videoDescription) videoDescription.textContent = videoDataForChapter.description;
  }
}

function renderAllQuizzes() {
  for (let chapter = 1; chapter <= 5; chapter++) {
    renderQuiz(chapter);
  }
}

function renderQuiz(chapter) {
  const quizContainer = document.querySelector(`#chapter-${chapter} .quiz-container`);
  if (!quizContainer || !quizData[chapter]) return;
  
  const questions = quizData[chapter].questions;
  let quizHTML = "";
  
  questions.forEach((q, index) => {
    quizHTML += `
      <div class="quiz-question">
        <p><strong>${index + 1}. ${q.question}</strong></p>
        <div class="quiz-options">
          ${q.options.map((option, optIndex) => `
            <label>
              <input type="radio" name="q${index + 1}-${chapter}" value="${String.fromCharCode(97 + optIndex)}" />
              <span>${option}</span>
            </label>
          `).join("")}
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
  document.querySelectorAll(".correct, .incorrect, .correct-answer").forEach(el => {
    el.classList.remove("correct", "incorrect", "correct-answer");
  });
  
  // Check answers
  questions.forEach((q, index) => {
    const questionName = `q${index + 1}-${chapter}`;
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
    
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
        `input[name="${questionName}"][value="${String.fromCharCode(97 + q.correct)}"]`
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

function displayQuizResult(chapter, score, totalQuestions, unansweredQuestions) {
  const resultElement = document.getElementById(`quizResult${chapter}`);
  const percentage = (score / totalQuestions) * 100;
  
  let resultHTML = "";
  
  if (unansweredQuestions.length > 0) {
    resultElement.className = "quiz-result error";
    resultHTML = `
      <h4>📝 Silakan Lengkapi Semua Soal!</h4>
      <p>Anda belum menjawab soal nomor: <strong>${unansweredQuestions.join(", ")}</strong></p>
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
        <p>Kerja bagus! Anda memahami materi seni budaya dengan sangat baik.</p>
        ${chapter < 5 ? `
          <button class="next-chapter-btn" onclick="navigateToChapter(${chapter + 1})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
            Lanjut ke Bab ${chapter + 1}
          </button>
        ` : `
          <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
            Selamat! Anda Menyelesaikan Semua Bab Seni Budaya 🎨🎶
          </button>
        `}
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
        <p>Jangan khawatir! Pelajari kembali materi seni budaya dan coba lagi.</p>
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
    document.querySelectorAll(".correct, .incorrect, .correct-answer").forEach(el => {
      el.classList.remove("correct", "incorrect", "correct-answer");
    });
  }, 5000);
}

function celebrateCompletion() {
  alert("Selamat! Anda telah menyelesaikan semua materi Seni Budaya! 🎨🎶🎭");
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

console.log("Seni Budaya JavaScript loaded successfully!");