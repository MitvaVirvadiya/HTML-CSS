function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    
    let valid = true;
    
    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        valid = false;
    }
    
    if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        valid = false;
    }
    
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }
    
    applyValidationStyles(username, valid, usernameError);
    applyValidationStyles(email, valid, emailError);
    applyValidationStyles(password, valid, passwordError);
    
    return valid;
}

function applyValidationStyles(inputValue, isValid, errorElement) {
    if (!isValid) {
        errorElement.style.color = "red";
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
