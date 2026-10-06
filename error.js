document.addEventListener("DOMContentLoaded", () => {
    const goBackButton = document.getElementById("goBack");

    if (goBackButton) {
        goBackButton.addEventListener("click", () => {
            if (document.referrer && window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "index.html";
            }
        });
    }

    const number = document.querySelector(".error-number");
    const content = document.querySelector(".error-content");
    const header = document.querySelector(".error-header");
    const footer = document.querySelector(".error-footer");

    if (typeof gsap !== "undefined") {
        gsap.from(header, {
            opacity: 0,
            y: -25,
            duration: .7,
            ease: "power3.out"
        });

        gsap.from(number, {
            opacity: 0,
            scale: .7,
            y: 30,
            duration: 1,
            delay: .15,
            ease: "back.out(1.4)"
        });

        gsap.from(content.querySelectorAll(".error-label, h1, p, .error-actions"), {
            opacity: 0,
            y: 25,
            duration: .6,
            stagger: .12,
            delay: .45,
            ease: "power3.out"
        });

        gsap.from(footer, {
            opacity: 0,
            y: 20,
            duration: .6,
            delay: .8,
            ease: "power3.out"
        });
    }
});