document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const englishOnly = /^[A-Za-z]+$/;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
      const isOnlyDigits = /^\d+$/;
  
      
      usernameError.textContent = "";
      passwordError.textContent = "";
  
      let isValid = true;
  
      
      if (username === "") {
        usernameError.textContent = "Username is required.";
        isValid = false;
      } else if (!englishOnly.test(username)) {
        usernameError.textContent = "Please use English letters only.";
        isValid = false;
      }
  
      
      if (password === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
      } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
      } else if (!hasSpecialChar.test(password)) {
        passwordError.textContent = "Password must include at least one special character (!, @, #).";
        isValid = false;
      } else if (isOnlyDigits.test(password)) {
        passwordError.textContent = "Password cannot be only numbers.";
        isValid = false;
      }
  
      if (isValid) {
        alert("Login successful!");
        form.reset();
      }
    });
  });