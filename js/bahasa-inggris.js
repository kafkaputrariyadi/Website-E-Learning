// JavaScript for English Page

// Data video YouTube untuk setiap bab
const videoData = {
  1: {
    title: "Understanding and Writing Descriptive Text",
    description:
      "This video explains about the definition, structure, and how to write good and correct descriptive text in English.",
    youtubeId: "0hQArH479FU",
    duration: "15:30",
  },
  2: {
    title: "Understanding and Writing Procedure Text",
    description:
      "This video explains about structure, language features, and examples of procedure text in daily life.",
    youtubeId: "07tW8JcEg9w",
    duration: "18:45",
  },
  3: {
    title: "Understanding and Writing Narrative Text",
    description:
      "This video explains about structure, intrinsic elements, and techniques for writing interesting narrative text.",
    youtubeId: "vrQS03rVSNc",
    duration: "20:20",
  },
  4: {
    title: "Understanding and Writing Recount Text",
    description:
      "This video explains about structure, language features, and techniques for writing good recount text.",
    youtubeId: "aNy0a_OM3JQ",
    duration: "22:15",
  },
  5: {
    title: "Understanding and Writing Announcement Text",
    description:
      "This video explains about structure, language features, and how to write effective announcement text.",
    youtubeId: "C5jjOaPLlGg",
    duration: "16:30",
  },
};

// Data kuis lengkap untuk semua bab
const quizData = {
  1: {
    questions: [
      {
        question: "What is descriptive text?",
        options: [
          "Text that tells sequence of events",
          "Text that describes objects in detail",
          "Text that contains steps",
          "Text that conveys opinions",
        ],
        correct: 1,
      },
      {
        question: "The structure of descriptive text consists of...",
        options: [
          "Orientation, complication, resolution",
          "Thesis, arguments, reiteration",
          "Identification, description",
          "Introduction, content, closing",
        ],
        correct: 2,
      },
      {
        question: "Correct language features of descriptive text are...",
        options: [
          "Using many imperative verbs",
          "Using descriptive adjectives",
          "Dominantly using command sentences",
          "Using persuasive language",
        ],
        correct: 1,
      },
      {
        question: "The main purpose of descriptive text is...",
        options: [
          "To persuade readers",
          "To give instructions",
          "To describe objects in detail",
          "To tell experiences",
        ],
        correct: 2,
      },
      {
        question: "Example of object that can be described is...",
        options: [
          "Mathematical formula",
          "Beach scenery",
          "Cooking steps",
          "Debate arguments",
        ],
        correct: 1,
      },
    ],
  },
  2: {
    questions: [
      {
        question: "What is procedure text?",
        options: [
          "Text that describes objects in detail",
          "Text that contains steps to do something",
          "Text that tells personal experiences",
          "Text that conveys opinions",
        ],
        correct: 1,
      },
      {
        question: "The structure of procedure text consists of...",
        options: [
          "Orientation, complication, resolution",
          "Identification, description",
          "Goal, materials, steps",
          "Introduction, content, closing",
        ],
        correct: 2,
      },
      {
        question: "Correct language features of procedure text are...",
        options: [
          "Using many adjectives",
          "Using imperative sentences",
          "Dominantly using persuasive language",
          "Using interrogative sentences",
        ],
        correct: 1,
      },
      {
        question: "The main purpose of procedure text is...",
        options: [
          "To persuade readers",
          "To give guidance to do something",
          "To tell experiences",
          "To describe objects",
        ],
        correct: 1,
      },
      {
        question: "Example of procedure text is...",
        options: [
          "Holiday story",
          "Cooking recipe",
          "Experiment report",
          "Movie review",
        ],
        correct: 1,
      },
    ],
  },
  3: {
    questions: [
      {
        question: "What is narrative text?",
        options: [
          "Text that contains steps",
          "Text that tells events in sequence",
          "Text that describes objects",
          "Text that conveys opinions",
        ],
        correct: 1,
      },
      {
        question: "The structure of narrative text consists of...",
        options: [
          "Goal, materials, steps",
          "Identification, description",
          "Orientation, complication, resolution",
          "Introduction, content, closing",
        ],
        correct: 2,
      },
      {
        question: "Correct language features of narrative text are...",
        options: [
          "Using many imperative verbs",
          "Using time connectives",
          "Dominantly using adjectives",
          "Using persuasive language",
        ],
        correct: 1,
      },
      {
        question: "The main purpose of narrative text is...",
        options: [
          "To give instructions",
          "To entertain readers",
          "To describe objects",
          "To persuade readers",
        ],
        correct: 1,
      },
      {
        question: "Example of narrative text is...",
        options: [
          "Cooking recipe",
          "User manual",
          "Folk tale",
          "Observation report",
        ],
        correct: 2,
      },
    ],
  },
  4: {
    questions: [
      {
        question: "What is recount text?",
        options: [
          "Text that tells future events",
          "Text that retells past experiences",
          "Text that describes objects",
          "Text that gives instructions",
        ],
        correct: 1,
      },
      {
        question: "The structure of recount text consists of...",
        options: [
          "Orientation, complication, resolution",
          "Goal, materials, steps",
          "Orientation, events, reorientation",
          "Identification, description",
        ],
        correct: 2,
      },
      {
        question: "Correct language features of recount text are...",
        options: [
          "Using many imperative verbs",
          "Using past tense",
          "Dominantly using adjectives",
          "Using time connectives",
        ],
        correct: 1,
      },
      {
        question: "The main purpose of recount text is...",
        options: [
          "To entertain readers",
          "To give instructions",
          "To tell about past experiences",
          "To describe objects",
        ],
        correct: 2,
      },
      {
        question: "Example of recount text is...",
        options: [
          "Short story",
          "Cooking recipe",
          "Holiday experience",
          "Observation report",
        ],
        correct: 2,
      },
    ],
  },
  5: {
    questions: [
      {
        question: "What is announcement text?",
        options: [
          "Text that tells stories",
          "Text that contains official information",
          "Text that describes objects",
          "Text that gives steps",
        ],
        correct: 1,
      },
      {
        question: "The structure of announcement text consists of...",
        options: [
          "Orientation, complication, resolution",
          "Thesis, arguments, reiteration",
          "Title, content, closing",
          "Goal, materials, steps",
        ],
        correct: 2,
      },
      {
        question: "Correct language features of announcement text are...",
        options: [
          "Using many imperative verbs",
          "Using clear and concise language",
          "Dominantly using adjectives",
          "Using time connectives",
        ],
        correct: 1,
      },
      {
        question: "The main purpose of announcement text is...",
        options: [
          "To entertain readers",
          "To give instructions",
          "To inform something to public",
          "To describe objects",
        ],
        correct: 2,
      },
      {
        question: "Example of announcement text is...",
        options: [
          "Short story",
          "Cooking recipe",
          "School announcement",
          "Research report",
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
  if (confirm("Are you sure you want to go back to dashboard?")) {
    window.location.href = "dashboard.html";
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  console.log("English Page Loaded");

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
  const savedProgress = localStorage.getItem("englishUserProgress");
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
    updateProgressBars();
  }
}

function saveUserProgress() {
  localStorage.setItem("englishUserProgress", JSON.stringify(userProgress));
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
            <span class="btn-text">Submit Answers</span>
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
            <h4>📝 Please Complete All Questions!</h4>
            <p>You haven't answered question number: <strong>${unansweredQuestions.join(
              ", "
            )}</strong></p>
            <p>Please answer all questions before submitting.</p>
        `;
  } else {
    userProgress[chapter].completed = true;
    userProgress[chapter].score = score;
    saveUserProgress();

    if (percentage >= 80) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>🎉 Excellent!</h4>
                <p><strong>Your Score: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Great job! You understand this chapter's material very well.</p>
                ${
                  chapter < 5
                    ? `
                    <button class="next-chapter-btn" onclick="navigateToChapter(${
                      chapter + 1
                    })" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Continue to Chapter ${chapter + 1}
                    </button>
                `
                    : `
                    <button class="next-chapter-btn" onclick="celebrateCompletion()" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                        Congratulations! You Completed All Chapters 🎓
                    </button>
                `
                }
            `;
    } else if (percentage >= 60) {
      resultElement.className = "quiz-result success";
      resultHTML = `
                <h4>👍 Good Job!</h4>
                <p><strong>Your Score: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>You understand the basics, but need to review some topics.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Review This Chapter
                </button>
            `;
    } else {
      resultElement.className = "quiz-result error";
      resultHTML = `
                <h4>📚 Keep Practicing!</h4>
                <p><strong>Your Score: ${score}/${totalQuestions} (${percentage}%)</strong></p>
                <p>Don't worry! Study the material again and try once more.</p>
                <button class="review-chapter-btn" onclick="setActiveChapter(${chapter})" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 10px;">
                    Study This Chapter Again
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
  alert("Congratulations! You have completed all English materials! 🎓🎉");
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

console.log("English JavaScript loaded successfully!");
