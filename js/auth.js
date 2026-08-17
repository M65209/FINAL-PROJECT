const ADMIN_USERNAME = "AMA";
const ADMIN_PASSWORD = "65209";

document.addEventListener("DOMContentLoaded", function () {

  if (localStorage.getItem("isAdminLoggedIn") === "true") {
    window.location.href = "admin.html";
    return;
  }

  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem("isAdminLoggedIn", "true");
        window.location.href = "admin.html";
      } else {
        if (loginError) {
          loginError.classList.add("show");
        }
      }
    });
  }

});
