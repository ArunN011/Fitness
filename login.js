document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const emailField = document.getElementById("emailField");
    const passwordField = document.getElementById("passwordField");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const roleError = document.getElementById("roleError");
    const loginStatus = document.getElementById("loginStatus");
    const submitButton = document.getElementById("loginSubmit");
    const passwordToggle = document.getElementById("passwordToggle");
    const rememberMe = document.getElementById("rememberMe");
    const roleInputs = document.querySelectorAll('input[name="role"]');

    function getSelectedRole() {
        const selected = document.querySelector('input[name="role"]:checked');
        return selected ? selected.value : "";
    }

    function validateEmail() {
        const value = email.value.trim();
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            emailError.textContent = "Email address is required.";
            emailField.classList.remove("valid");
            emailField.classList.add("invalid");
            return false;
        }

        if (!pattern.test(value)) {
            emailError.textContent = "Enter a valid email address.";
            emailField.classList.remove("valid");
            emailField.classList.add("invalid");
            return false;
        }

        emailError.textContent = "";
        emailField.classList.remove("invalid");
        emailField.classList.add("valid");
        return true;
    }

    function validatePassword() {
        const value = password.value;

        if (!value) {
            passwordError.textContent = "Password is required.";
            passwordField.classList.remove("valid");
            passwordField.classList.add("invalid");
            return false;
        }

        if (value.length < 6) {
            passwordError.textContent = "Password must contain at least 6 characters.";
            passwordField.classList.remove("valid");
            passwordField.classList.add("invalid");
            return false;
        }

        passwordError.textContent = "";
        passwordField.classList.remove("invalid");
        passwordField.classList.add("valid");
        return true;
    }

    function validateRole() {
        const role = getSelectedRole();

        if (!role) {
            roleError.textContent = "Please select an account type.";
            return false;
        }

        roleError.textContent = "";
        return true;
    }

    function clearStatus() {
        loginStatus.textContent = "";
        loginStatus.className = "login-status";
    }

    email.addEventListener("input", () => {
        validateEmail();
        clearStatus();
    });

    password.addEventListener("input", () => {
        validatePassword();
        clearStatus();
    });

    roleInputs.forEach(input => {
        input.addEventListener("change", () => {
            validateRole();
            clearStatus();
        });
    });

    passwordToggle.addEventListener("click", () => {
        const icon = passwordToggle.querySelector("i");

        if (password.type === "password") {
            password.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
            passwordToggle.setAttribute("aria-label", "Hide password");
        } else {
            password.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
            passwordToggle.setAttribute("aria-label", "Show password");
        }
    });

   

    form.addEventListener("submit", event => {
        event.preventDefault();

        const roleValid = validateRole();
        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (!roleValid || !emailValid || !passwordValid) {
            loginStatus.textContent = "Please correct the highlighted fields.";
            loginStatus.className = "login-status error";
            return;
        }

        const selectedRole = getSelectedRole();
        const emailValue = email.value.trim();
        const passwordValue = password.value;

        localStorage.setItem("stacklyUserEmail", emailValue);
        localStorage.setItem("stacklyUserPassword", passwordValue);
        localStorage.setItem("stacklyUserRole", selectedRole);
        localStorage.setItem("userEmail", emailValue);
        localStorage.setItem("userRole", selectedRole);

        if (rememberMe.checked) {
            localStorage.setItem("stacklyRememberMe", "true");
        } else {
            localStorage.removeItem("stacklyRememberMe");
        }

        submitButton.classList.add("loading");

        setTimeout(() => {
            if (selectedRole === "admin") {
                window.location.href = "admin-dashboard.html";
            } else if (selectedRole === "client") {
                window.location.href = "client-dashboard.html";
            } else if (selectedRole === "user") {
                window.location.href = "user-dashboard.html";
            }
        }, 700);
    });

    const savedEmail = localStorage.getItem("stacklyUserEmail");
    const savedRole = localStorage.getItem("stacklyUserRole");
    const savedRemember = localStorage.getItem("stacklyRememberMe");

    if (savedRemember === "true") {
        rememberMe.checked = true;

        if (savedEmail) {
            email.value = savedEmail;
            validateEmail();
        }

        if (savedRole) {
            const savedRoleInput = document.querySelector(
                'input[name="role"][value="' + savedRole + '"]'
            );

            if (savedRoleInput) {
                savedRoleInput.checked = true;
            }
        }
    }

    window.addEventListener("pageshow", () => {
        submitButton.classList.remove("loading");
        password.type = "password";

        const icon = passwordToggle.querySelector("i");
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    });
});