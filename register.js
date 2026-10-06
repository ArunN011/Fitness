document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const role = document.getElementById("role");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");
    const registerButton = document.getElementById("registerButton");
    const formStatus = document.getElementById("formStatus");
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");

    const setFieldState = (field, valid, message) => {
        const group = field.closest(".form-group");
        const error = document.getElementById(field.id + "Error");

        if (!group || !error) return valid;

        group.classList.remove("valid", "invalid");

        if (valid) {
            group.classList.add("valid");
            error.textContent = "";
        } else {
            group.classList.add("invalid");
            error.textContent = message;
        }

        return valid;
    };

    const validateName = () => {
        const value = fullName.value.trim();

        if (!value) {
            return setFieldState(fullName, false, "Full name is required.");
        }

        if (value.length < 3) {
            return setFieldState(fullName, false, "Enter at least 3 characters.");
        }

        if (!/^[A-Za-z ]+$/.test(value)) {
            return setFieldState(fullName, false, "Use letters and spaces only.");
        }

        return setFieldState(fullName, true, "");
    };

    const validateEmail = () => {
        const value = email.value.trim();

        if (!value) {
            return setFieldState(email, false, "Email address is required.");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
            return setFieldState(email, false, "Enter a valid email address.");
        }

        return setFieldState(email, true, "");
    };

    const validatePhone = () => {
        const value = phone.value.trim();

        if (!value) {
            return setFieldState(phone, false, "Phone number is required.");
        }

        if (!/^[6-9]\d{9}$/.test(value)) {
            return setFieldState(phone, false, "Enter a valid 10-digit phone number.");
        }

        return setFieldState(phone, true, "");
    };

    const validateRole = () => {
        if (!role.value) {
            return setFieldState(role, false, "Please select a role.");
        }

        return setFieldState(role, true, "");
    };

    const getPasswordStrength = value => {
        let score = 0;

        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[a-z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        return score;
    };

    const updatePasswordStrength = () => {
        const value = password.value;
        const score = getPasswordStrength(value);

        if (!value) {
            strengthBar.style.width = "0%";
            strengthText.textContent = "Password strength";
            return;
        }

        const percentages = [0, 20, 40, 60, 80, 100];
        strengthBar.style.width = percentages[score] + "%";

        if (score <= 2) {
            strengthText.textContent = "Weak password";
        } else if (score === 3) {
            strengthText.textContent = "Medium password";
        } else if (score === 4) {
            strengthText.textContent = "Strong password";
        } else {
            strengthText.textContent = "Very strong";
        }
    };

    const validatePassword = () => {
        const value = password.value;

        updatePasswordStrength();

        if (!value) {
            return setFieldState(password, false, "Password is required.");
        }

        if (value.length < 8) {
            return setFieldState(password, false, "Password must contain at least 8 characters.");
        }

        if (!/[A-Z]/.test(value)) {
            return setFieldState(password, false, "Include at least one uppercase letter.");
        }

        if (!/[a-z]/.test(value)) {
            return setFieldState(password, false, "Include at least one lowercase letter.");
        }

        if (!/[0-9]/.test(value)) {
            return setFieldState(password, false, "Include at least one number.");
        }

        if (!/[^A-Za-z0-9]/.test(value)) {
            return setFieldState(password, false, "Include at least one special character.");
        }

        return setFieldState(password, true, "");
    };

    const validateConfirmPassword = () => {
        const value = confirmPassword.value;

        if (!value) {
            return setFieldState(confirmPassword, false, "Please confirm your password.");
        }

        if (value !== password.value) {
            return setFieldState(confirmPassword, false, "Passwords do not match.");
        }

        return setFieldState(confirmPassword, true, "");
    };

    const validateTerms = () => {
        const error = document.getElementById("termsError");

        if (!terms.checked) {
            error.textContent = "You must accept the Terms & Conditions.";
            return false;
        }

        error.textContent = "";
        return true;
    };

    fullName.addEventListener("input", validateName);
    fullName.addEventListener("blur", validateName);

    email.addEventListener("input", validateEmail);
    email.addEventListener("blur", validateEmail);

    phone.addEventListener("input", () => {
        phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
        validatePhone();
    });

    phone.addEventListener("blur", validatePhone);

    role.addEventListener("change", validateRole);

    password.addEventListener("input", () => {
        validatePassword();

        if (confirmPassword.value) {
            validateConfirmPassword();
        }
    });

    password.addEventListener("blur", validatePassword);

    confirmPassword.addEventListener("input", validateConfirmPassword);
    confirmPassword.addEventListener("blur", validateConfirmPassword);

    terms.addEventListener("change", validateTerms);

    document.querySelectorAll(".password-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const target = document.getElementById(button.dataset.target);
            const icon = button.querySelector("i");

            if (target.type === "password") {
                target.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                target.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const validName = validateName();
        const validEmail = validateEmail();
        const validPhone = validatePhone();
        const validRole = validateRole();
        const validPassword = validatePassword();
        const validConfirmPassword = validateConfirmPassword();
        const validTerms = validateTerms();

        const isValid =
            validName &&
            validEmail &&
            validPhone &&
            validRole &&
            validPassword &&
            validConfirmPassword &&
            validTerms;

        formStatus.className = "form-status";

        if (!isValid) {
            formStatus.textContent = "Please correct the highlighted fields.";
            formStatus.classList.add("error");
            return;
        }

        registerButton.classList.add("loading");
        registerButton.disabled = true;
        formStatus.textContent = "";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 900);
    });

    window.addEventListener("pageshow", () => {
        registerButton.classList.remove("loading");
        registerButton.disabled = false;
    });
});