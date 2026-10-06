document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".contact-hero");

    if (!hero || typeof gsap === "undefined") return;

    const heading = hero.querySelector(".contact-hero-content h1");
    const breadcrumb = hero.querySelector(".contact-hero-breadcrumb");
    const particles = hero.querySelectorAll(".contact-hero-particles span");

    gsap.set([heading, breadcrumb], {
        opacity: 0,
        y: 35
    });

    gsap.set(particles, {
        scale: 0,
        opacity: 0
    });

    const timeline = gsap.timeline();

    timeline
        .to(particles, {
            scale: 1,
            opacity: 0.8,
            duration: .5,
            stagger: .08,
            ease: "back.out(2)"
        })
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.25")
        .to(breadcrumb, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.4");

    particles.forEach((particle, index) => {
        gsap.to(particle, {
            y: index % 2 === 0 ? -12 : 12,
            x: index % 2 === 0 ? 8 : -8,
            duration: 2 + index * .3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") return;

    const section = document.querySelector(".contact-info");

    if (!section) return;

    const top = section.querySelector(".contact-info-top");
    const heading = section.querySelector(".contact-info-heading");
    const cards = section.querySelectorAll(".contact-info-card");
    const side = section.querySelector(".contact-info-side");
    const bottom = section.querySelector(".contact-info-bottom");

    gsap.set([top, heading, ...cards, side, bottom], {
        opacity: 0,
        y: 45
    });

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true
        }
    });

    timeline
        .to(top, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        })
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        }, "-=.25")
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .1,
            ease: "power3.out"
        }, "-=.3")
        .to(side, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        }, "-=.4")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) return;

    const fields = {
        name: document.getElementById("contactName"),
        email: document.getElementById("contactEmail"),
        phone: document.getElementById("contactPhone"),
        service: document.getElementById("contactService"),
        subject: document.getElementById("contactSubject"),
        message: document.getElementById("contactMessage"),
        consent: document.getElementById("contactConsent")
    };

    const progressBar = document.getElementById("contactProgressBar");
    const progressValue = document.getElementById("contactProgressValue");
    const characterCount = document.getElementById("contactCharacterCount");
    const status = document.getElementById("contactFormStatus");
    const submitButton = document.getElementById("contactSubmit");

    const validators = {
        name(value) {
            const clean = value.trim();

            if (!clean) {
                return "Full name is required.";
            }

            if (clean.length < 3) {
                return "Please enter at least 3 characters.";
            }

            if (!/^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)+$/.test(clean)) {
                return "Enter your first and last name.";
            }

            return "";
        },

        email(value) {
            const clean = value.trim();

            if (!clean) {
                return "Email address is required.";
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) {
                return "Enter a valid email address.";
            }

            return "";
        },

        phone(value) {
            const clean = value.replace(/\D/g, "");

            if (!clean) {
                return "Phone number is required.";
            }

            if (!/^[6-9]\d{9}$/.test(clean)) {
                return "Enter a valid 10-digit mobile number.";
            }

            return "";
        },

        service(value) {
            if (!value) {
                return "Please select a service.";
            }

            return "";
        },

        subject(value) {
            const clean = value.trim();

            if (!clean) {
                return "Subject is required.";
            }

            if (clean.length < 5) {
                return "Subject must contain at least 5 characters.";
            }

            return "";
        },

        message(value) {
            const clean = value.trim();

            if (!clean) {
                return "Message is required.";
            }

            if (clean.length < 20) {
                return "Message must contain at least 20 characters.";
            }

            return "";
        }
    };

    function getFieldContainer(field) {
        return field.closest(".contact-field");
    }

    function showError(field, message) {
        const container = getFieldContainer(field);

        if (!container) return;

        const error = container.querySelector(".contact-error");

        container.classList.remove("valid");
        container.classList.add("invalid");

        if (error) {
            error.textContent = message;
        }
    }

    function showValid(field) {
        const container = getFieldContainer(field);

        if (!container) return;

        const error = container.querySelector(".contact-error");

        container.classList.remove("invalid");
        container.classList.add("valid");

        if (error) {
            error.textContent = "";
        }
    }

    function clearValidation(field) {
        const container = getFieldContainer(field);

        if (!container) return;

        container.classList.remove("valid", "invalid");

        const error = container.querySelector(".contact-error");

        if (error) {
            error.textContent = "";
        }
    }

    function validateField(field, force = false) {
        const key = Object.keys(fields).find(
            item => fields[item] === field
        );

        if (!validators[key]) return true;

        const message = validators[key](field.value);

        if (message) {
            if (force || field.value.trim() !== "") {
                showError(field, message);
            }

            return false;
        }

        showValid(field);
        return true;
    }

    function validateConsent(force = false) {
        const error = form.querySelector(".contact-consent-error");

        if (!fields.consent.checked) {
            if (force) {
                fields.consent.closest(".contact-form-consent").classList.add("invalid");
                error.textContent = "Please accept the confirmation before submitting.";
            }

            return false;
        }

        fields.consent.closest(".contact-form-consent").classList.remove("invalid");
        error.textContent = "";

        return true;
    }

    function updateProgress() {
        const requiredFields = [
            fields.name,
            fields.email,
            fields.phone,
            fields.service,
            fields.subject,
            fields.message,
            fields.consent
        ];

        let completed = 0;

        requiredFields.forEach(field => {
            if (field.type === "checkbox") {
                if (field.checked) completed++;
            } else if (field.value.trim() !== "") {
                completed++;
            }
        });

        const percentage = Math.round(
            (completed / requiredFields.length) * 100
        );

        progressBar.style.width = percentage + "%";
        progressValue.textContent = percentage + "%";
    }

    fields.phone.addEventListener("input", () => {
        fields.phone.value = fields.phone.value.replace(/\D/g, "").slice(0, 10);
        validateField(fields.phone);
        updateProgress();
    });

    fields.message.addEventListener("input", () => {
        const length = fields.message.value.length;

        characterCount.textContent = length + " / 1000";

        if (length > 1000) {
            fields.message.value = fields.message.value.slice(0, 1000);
        }

        validateField(fields.message);
        updateProgress();
    });

    Object.values(fields).forEach(field => {
        if (!field) return;

        field.addEventListener("input", () => {
            if (field.type !== "checkbox") {
                validateField(field);
            }

            updateProgress();
        });

        field.addEventListener("change", () => {
            if (field.type === "checkbox") {
                validateConsent(true);
            } else {
                validateField(field, true);
            }

            updateProgress();
        });

        field.addEventListener("blur", () => {
            if (field.type === "checkbox") {
                validateConsent(true);
            } else {
                validateField(field, true);
            }
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        status.textContent = "";
        status.className = "contact-form-status";

        let formIsValid = true;

        [
            fields.name,
            fields.email,
            fields.phone,
            fields.service,
            fields.subject,
            fields.message
        ].forEach(field => {
            if (!validateField(field, true)) {
                formIsValid = false;
            }
        });

        if (!validateConsent(true)) {
            formIsValid = false;
        }

        updateProgress();

        if (!formIsValid) {
            status.textContent = "Please correct the highlighted fields before submitting.";
            status.classList.add("error");

            const firstInvalid = form.querySelector(
                ".contact-field.invalid input, .contact-field.invalid select, .contact-field.invalid textarea"
            );

            if (firstInvalid) {
                firstInvalid.focus({
                    preventScroll: true
                });

                firstInvalid.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            return;
        }

        submitButton.classList.add("loading");

        setTimeout(() => {
            form.reset();

            document.querySelectorAll(".contact-field").forEach(field => {
                field.classList.remove("valid", "invalid");

                const error = field.querySelector(".contact-error");

                if (error) {
                    error.textContent = "";
                }
            });

            const consentContainer = form.querySelector(".contact-form-consent");

            if (consentContainer) {
                consentContainer.classList.remove("invalid");
            }

            const consentError = form.querySelector(".contact-consent-error");

            if (consentError) {
                consentError.textContent = "";
            }

            characterCount.textContent = "0 / 1000";
            progressBar.style.width = "0%";
            progressValue.textContent = "0%";

            window.location.href = "error.html";
        }, 900);
    });

    updateProgress();

    if (typeof gsap !== "undefined") {
        const section = document.querySelector(".contact-form-section");

        if (section) {
            const top = section.querySelector(".contact-form-top");
            const heading = section.querySelector(".contact-form-heading");
            const visual = section.querySelector(".contact-form-visual");
            const formBox = section.querySelector(".contact-form");
            const icon = section.querySelector(".contact-form-visual-icon");
            const orbits = section.querySelectorAll(".contact-form-orbit");

            gsap.set(
                [top, heading, visual, formBox],
                {
                    opacity: 0,
                    y: 50
                }
            );

            gsap.set(icon, {
                scale: 0,
                rotation: -90
            });

            gsap.set(orbits, {
                scale: .7,
                opacity: 0
            });

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    once: true
                }
            });

            timeline
                .to(top, {
                    opacity: 1,
                    y: 0,
                    duration: .5,
                    ease: "power3.out"
                })
                .to(heading, {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    ease: "power3.out"
                }, "-=.25")
                .to(visual, {
                    opacity: 1,
                    y: 0,
                    duration: .8,
                    ease: "power4.out"
                }, "-=.25")
                .to(formBox, {
                    opacity: 1,
                    y: 0,
                    duration: .8,
                    ease: "power4.out"
                }, "-=.6")
                .to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: .7,
                    ease: "back.out(1.7)"
                }, "-=.4")
                .to(orbits, {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    stagger: .15,
                    ease: "power3.out"
                }, "-=.7");

            gsap.to(".orbit-one", {
                rotation: 360,
                duration: 18,
                repeat: -1,
                ease: "none"
            });

            gsap.to(".orbit-two", {
                rotation: -360,
                duration: 12,
                repeat: -1,
                ease: "none"
            });

            gsap.to(icon, {
                y: -8,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
});
window.addEventListener("pageshow", () => {
    const form = document.getElementById("contactForm");
    const submitButton = document.getElementById("contactSubmit");

    if (!form || !submitButton) return;

    submitButton.classList.remove("loading");

    form.reset();

    document.querySelectorAll(".contact-field").forEach(field => {
        field.classList.remove("valid", "invalid");

        const error = field.querySelector(".contact-error");

        if (error) {
            error.textContent = "";
        }
    });

    const consentContainer = form.querySelector(".contact-form-consent");

    if (consentContainer) {
        consentContainer.classList.remove("invalid");
    }

    const consentError = form.querySelector(".contact-consent-error");

    if (consentError) {
        consentError.textContent = "";
    }

    const characterCount = document.getElementById("contactCharacterCount");
    const progressBar = document.getElementById("contactProgressBar");
    const progressValue = document.getElementById("contactProgressValue");
    const status = document.getElementById("contactFormStatus");

    if (characterCount) {
        characterCount.textContent = "0 / 1000";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

    if (progressValue) {
        progressValue.textContent = "0%";
    }

    if (status) {
        status.textContent = "";
        status.className = "contact-form-status";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".contact-map-section");

    if (!section || typeof gsap === "undefined") return;

    const top = section.querySelector(".contact-map-top");
    const heading = section.querySelector(".contact-map-heading");
    const info = section.querySelector(".contact-map-info");
    const map = section.querySelector(".contact-map-frame");
    const overlay = section.querySelector(".contact-map-overlay");
    const bottom = section.querySelector(".contact-map-bottom");
    const icon = section.querySelector(".contact-map-icon");

    gsap.set(
        [top, heading, info, map, bottom],
        {
            opacity: 0,
            y: 45
        }
    );

    gsap.set(icon, {
        scale: 0,
        rotation: -45
    });

    gsap.set(overlay, {
        opacity: 0,
        y: 20
    });

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true
        }
    });

    timeline
        .to(top, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        })
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        }, "-=.25")
        .to(info, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.25")
        .to(map, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.55")
        .to(icon, {
            scale: 1,
            rotation: 0,
            duration: .65,
            ease: "back.out(1.7)"
        }, "-=.35")
        .to(overlay, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");

    gsap.to(icon, {
        y: -7,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".contact-faq-section");

    if (!section) return;

    const items = section.querySelectorAll(".contact-faq-item");

    items.forEach(item => {
        const button = item.querySelector(".contact-faq-question");

        button.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            items.forEach(other => {
                other.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    if (typeof gsap !== "undefined") {
        const top = section.querySelector(".contact-faq-top");
        const heading = section.querySelector(".contact-faq-heading");
        const intro = section.querySelector(".contact-faq-intro");
        const list = section.querySelector(".contact-faq-list");
        const bottom = section.querySelector(".contact-faq-bottom");

        gsap.set([top, heading, intro, list, bottom], {
            opacity: 0,
            y: 45
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true
            }
        });

        timeline
            .to(top, {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: "power3.out"
            })
            .to(heading, {
                opacity: 1,
                y: 0,
                duration: .7,
                ease: "power3.out"
            }, "-=.25")
            .to(intro, {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power4.out"
            }, "-=.25")
            .to(list, {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power4.out"
            }, "-=.55")
            .to(bottom, {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: "power3.out"
            }, "-=.3");
    }
});