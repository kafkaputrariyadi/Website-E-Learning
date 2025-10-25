function togglePassword() {
  const passwordInput = document.getElementById("password");
  const iconEye = document.getElementById("iconEye");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    iconEye.innerHTML = `<path d="M320 192c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zM288 64C128.9 64 10.7 210.3 0 256c10.7 45.7 128.9 192 288 192s277.3-146.3 288-192c-10.7-45.7-128.9-192-288-192z"/>`;
  } else {
    passwordInput.type = "password";
    iconEye.innerHTML = `<path d="M572.52 241.4C518.88 135.8 407.4 64 288 64S57.12 135.8 3.48 241.4a48.004 48.004 0 000 29.2C57.12 376.2 168.6 448 288 448s230.88-71.8 284.52-177.4a48.004 48.004 0 000-29.2zM288 400c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176zm0-288c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z"/>`;
  }
}

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registrasi Berhasil!");

    window.location.href = "login.html";
  });
