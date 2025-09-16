function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleBtn = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "👁️";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "🙈";
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login Berhasil!");
});
