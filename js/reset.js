let currentStep = 1;

document.addEventListener("DOMContentLoaded", function () {
  setupCodeInputs();
  showStep(1);
});

function showStep(stepNumber) {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => step.classList.add("hidden"));
  const currentStepElement = document.getElementById(`step${stepNumber}`);
  if (currentStepElement) {
    currentStepElement.classList.remove("hidden");
  }
  currentStep = stepNumber;
}

function nextStep(stepNumber) {
  if (validateCurrentStep()) {
    showStep(stepNumber);
  }
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      return validateEmail();
    case 2:
      return validateVerificationCode();
    case 4:
      return validatePasswords();
    default:
      return true;
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    showNotification("Silakan masukkan email Anda", "error");
    return false;
  }
  if (!emailRegex.test(email)) {
    showNotification("Format email tidak valid", "error");
    return false;
  }

  document.getElementById("emailDisplay").textContent = email;
  showNotification("Email reset password telah dikirim!", "success");
  return true;
}

function validateVerificationCode() {
  const codeInputs = document.querySelectorAll(".code-input");
  let code = "";
  codeInputs.forEach((input) => (code += input.value));

  if (code.length !== 5) {
    showNotification("Silakan masukkan kode verifikasi 5 digit", "error");
    return false;
  }
  showNotification("Kode verifikasi berhasil!", "success");
  return true;
}

function validatePasswords() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!newPassword || !confirmPassword) {
    showNotification("Silakan isi kedua field password", "error");
    return false;
  }
  if (newPassword.length < 6) {
    showNotification("Password minimal 6 karakter", "error");
    return false;
  }
  if (newPassword !== confirmPassword) {
    showNotification("Password tidak cocok", "error");
    return false;
  }
  return true;
}

function setupCodeInputs() {
  const codeInputs = document.querySelectorAll(".code-input");
  codeInputs.forEach((input, index) => {
    input.addEventListener("input", function (e) {
      const value = e.target.value;
      if (!/^\d*$/.test(value)) {
        e.target.value = "";
        return;
      }
      if (value && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !e.target.value && index > 0) {
        codeInputs[index - 1].focus();
      }
    });

    input.addEventListener("paste", function (e) {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text");
      const numbers = pastedData.replace(/\D/g, "").slice(0, 5);
      numbers.split("").forEach((num, i) => {
        if (codeInputs[i]) codeInputs[i].value = num;
      });
      const lastIndex = Math.min(numbers.length - 1, codeInputs.length - 1);
      if (lastIndex >= 0) codeInputs[lastIndex].focus();
    });
  });
}

function verifyCode() {
  if (validateVerificationCode()) {
    nextStep(3);
  }
}

function updatePassword() {
  if (validatePasswords()) {
    showNotification("Password berhasil diupdate!", "success");
    setTimeout(() => {
      nextStep(5);
    }, 1000);
  }
}

function togglePassword(inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const toggleIcon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
}

function resendCode() {
  showNotification("Kode verifikasi telah dikirim ulang!", "success");
  const codeInputs = document.querySelectorAll(".code-input");
  codeInputs.forEach((input) => (input.value = ""));
  if (codeInputs.length > 0) codeInputs[0].focus();
}

function goToLogin() {
  showNotification("Mengarahkan ke halaman login...", "success");
  setTimeout(() => {
    showStep(1);
    document.getElementById("email").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
    const codeInputs = document.querySelectorAll(".code-input");
    codeInputs.forEach((input) => (input.value = ""));
  }, 2000);
}

function showNotification(message, type = "success") {
  const notification = document.getElementById("notification");
  const messageElement = document.getElementById("notificationMessage");
  messageElement.textContent = message;
  notification.className = `notification ${type}`;
  notification.classList.remove("hidden");
  setTimeout(() => notification.classList.add("show"), 10);
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.classList.add("hidden"), 300);
  }, 3000);
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    switch (currentStep) {
      case 1:
        nextStep(2);
        break;
      case 2:
        verifyCode();
        break;
      case 3:
        nextStep(4);
        break;
      case 4:
        updatePassword();
        break;
      case 5:
        goToLogin();
        break;
    }
  }
});
