document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("mobileMenuBtn");
    const closeBtn = document.getElementById("mobileCloseBtn");
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("mobileOverlay");

    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    const mobileActions = document.querySelectorAll(
        ".mobile-login-btn, .mobile-register-btn"
    );

    function openMenu() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");

        menuBtn.setAttribute("aria-expanded", "true");
        sidebar.setAttribute("aria-hidden", "false");
    }

    function closeMenu() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuBtn.setAttribute("aria-expanded", "false");
        sidebar.setAttribute("aria-hidden", "true");
    }

    menuBtn.addEventListener("click", function () {
        if (sidebar.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeBtn.addEventListener("click", function () {
        closeMenu();
    });

    overlay.addEventListener("click", function () {
        closeMenu();
    });

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    mobileActions.forEach(function (button) {
        button.addEventListener("click", function () {
            closeMenu();
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && sidebar.classList.contains("active")) {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) {
            closeMenu();
        }
    });

});

































document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector(".fitness-hero");

    if (!hero) {
        return;
    }

    const background = hero.querySelector(".hero-background");
    const overlay = hero.querySelector(".hero-overlay");
    const label = hero.querySelector(".hero-label");
    const titleWhite = hero.querySelector(".hero-title-white");
    const titleRed = hero.querySelector(".hero-title-red");
    const description = hero.querySelector(".hero-description");
    const button = hero.querySelector(".hero-btn");
    const offer = hero.querySelector(".hero-offer");
    const athlete = hero.querySelector(".hero-athlete");
    const redShapeOne = hero.querySelector(".hero-red-shape-one");
    const redShapeTwo = hero.querySelector(".hero-red-shape-two");
    const glow = hero.querySelector(".hero-glow");
    const circle = hero.querySelector(".hero-floating-circle");
    const decorOne = hero.querySelector(".hero-decor-one");
    const decorTwo = hero.querySelector(".hero-decor-two");
    const scrollText = hero.querySelector(".hero-scroll");

    gsap.set(background, {
        scale: 1.16,
        opacity: 0
    });

    gsap.set(overlay, {
        opacity: 0
    });

    gsap.set(label, {
        y: 45,
        opacity: 0
    });

    gsap.set(titleWhite, {
        x: -100,
        opacity: 0
    });

    gsap.set(titleRed, {
        x: -130,
        opacity: 0
    });

    gsap.set(description, {
        y: 40,
        opacity: 0
    });

    gsap.set(button, {
        y: 40,
        opacity: 0,
        scale: 0.8
    });

    gsap.set(offer, {
        y: 25,
        opacity: 0
    });

    gsap.set(redShapeOne, {
        x: 180,
        scale: 0.7,
        opacity: 0
    });

    gsap.set(redShapeTwo, {
        x: 240,
        scale: 0.7,
        opacity: 0
    });

    gsap.set(athlete, {
        x: 180,
        y: 100,
        scale: 0.82,
        opacity: 0
    });

    gsap.set(glow, {
        scale: 0.5,
        opacity: 0
    });

    gsap.set(circle, {
        scale: 0,
        opacity: 0
    });

    gsap.set(decorOne, {
        x: -150,
        opacity: 0
    });

    gsap.set(decorTwo, {
        x: 150,
        opacity: 0
    });

    gsap.set(scrollText, {
        y: 20,
        opacity: 0
    });

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power4.out"
        }
    });

    heroTimeline
        .to(background, {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power2.out"
        })
        .to(overlay, {
            opacity: 1,
            duration: 1.2
        }, "-=1.4")
        .to(decorOne, {
            x: 0,
            opacity: 1,
            duration: 1.2
        }, "-=1")
        .to(decorTwo, {
            x: 0,
            opacity: 1,
            duration: 1.2
        }, "-=1")
        .to(redShapeOne, {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(1.3)"
        }, "-=1")
        .to(redShapeTwo, {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: "back.out(1.3)"
        }, "-=1")
        .to(glow, {
            scale: 1,
            opacity: 1,
            duration: 1.2
        }, "-=1")
        .to(athlete, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power4.out"
        }, "-=1")
        .to(label, {
            y: 0,
            opacity: 1,
            duration: 0.7
        }, "-=1.1")
        .to(titleWhite, {
            x: 0,
            opacity: 1,
            duration: 0.9
        }, "-=0.4")
        .to(titleRed, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        }, "-=0.65")
        .to(description, {
            y: 0,
            opacity: 1,
            duration: 0.8
        }, "-=0.5")
        .to(button, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .to(offer, {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.4")
        .to(circle, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(2)"
        }, "-=0.4")
        .to(scrollText, {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.3");

    gsap.to(athlete, {
        y: -14,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(redShapeOne, {
        y: -12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(redShapeTwo, {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(circle, {
        scale: 1.25,
        opacity: 0.55,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(glow, {
        scale: 1.12,
        opacity: 0.75,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(decorOne, {
        y: 35,
        rotation: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(decorTwo, {
        y: -35,
        rotation: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    if (window.innerWidth >= 992) {

        hero.addEventListener("mousemove", function (event) {

            const rect = hero.getBoundingClientRect();

            const mouseX =
                (event.clientX - rect.left) / rect.width - 0.5;

            const mouseY =
                (event.clientY - rect.top) / rect.height - 0.5;

            gsap.to(athlete, {
                x: mouseX * 22,
                y: -14 + mouseY * 16,
                duration: 0.7,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(redShapeOne, {
                x: mouseX * -16,
                y: mouseY * -8,
                duration: 0.9,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(redShapeTwo, {
                x: mouseX * -25,
                y: mouseY * -12,
                duration: 1,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(titleWhite, {
                x: mouseX * -8,
                y: mouseY * -5,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(titleRed, {
                x: mouseX * -12,
                y: mouseY * -7,
                duration: 0.9,
                ease: "power2.out",
                overwrite: "auto"
            });

        });

        hero.addEventListener("mouseleave", function () {

            gsap.to(athlete, {
                x: 0,
                y: -14,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(redShapeOne, {
                x: 0,
                y: -12,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(redShapeTwo, {
                x: 0,
                y: 15,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(titleWhite, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(titleRed, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

        });
    }

    gsap.to(".hero-scroll i", {
        y: 7,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".offer-line", {
        width: 65,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(background, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.5
        }
    });

    gsap.to(athlete, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(redShapeOne, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2
        }
    });
});
const statsSection = document.querySelector(".fitness-stats");

if (statsSection) {

    const statItems = statsSection.querySelectorAll(".stat-item");
    const statNumbers = statsSection.querySelectorAll(".stat-number");

    gsap.set(statItems, {
        opacity: 0,
        y: 35
    });

    const statsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: statsSection,
            start: "top 85%",
            once: true
        }
    });

    statsTimeline.to(statItems, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    statNumbers.forEach(function (number) {

        const target = Number(number.dataset.target);
        const suffix = number.dataset.suffix || "";

        const counter = {
            value: 0
        };

        gsap.to(counter, {
            value: target,
            duration: 1.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: statsSection,
                start: "top 85%",
                once: true
            },
            onUpdate: function () {
                number.textContent =
                    Math.floor(counter.value) + suffix;
            }
        });

    });
}

const aboutSection = document.querySelector(".fitness-about");

if (aboutSection) {

    const aboutImage = aboutSection.querySelector(".about-image");
    const aboutBar = aboutSection.querySelector(".about-red-bar");
    const aboutDot = aboutSection.querySelector(".about-image-dot");
    const aboutSubtitle = aboutSection.querySelector(".about-subtitle");
    const aboutTitle = aboutSection.querySelector(".about-title");
    const aboutDescription = aboutSection.querySelector(".about-description");
    const aboutFeatures = aboutSection.querySelectorAll(".about-feature");
    const aboutButton = aboutSection.querySelector(".about-btn");

    gsap.set(aboutImage, {
        scale: 1.18,
        opacity: 0
    });

    gsap.set(aboutBar, {
        scaleY: 0,
        transformOrigin: "bottom center"
    });

    gsap.set(aboutDot, {
        scale: 0
    });

    gsap.set(aboutSubtitle, {
        y: 30,
        opacity: 0
    });

    gsap.set(aboutTitle, {
        y: 70,
        opacity: 0
    });

    gsap.set(aboutDescription, {
        y: 35,
        opacity: 0
    });

    gsap.set(aboutFeatures, {
        x: 60,
        opacity: 0
    });

    gsap.set(aboutButton, {
        y: 30,
        opacity: 0
    });

    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 75%",
            once: true
        }
    });

    aboutTimeline
        .to(aboutBar, {
            scaleY: 1,
            duration: 0.8,
            ease: "power3.out"
        })
        .to(aboutImage, {
            scale: 1,
            opacity: 1,
            duration: 1.3,
            ease: "power3.out"
        }, "-=0.5")
        .to(aboutDot, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)"
        }, "-=0.8")
        .to(aboutSubtitle, {
            y: 0,
            opacity: 1,
            duration: 0.5
        }, "-=0.7")
        .to(aboutTitle, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.3")
        .to(aboutDescription, {
            y: 0,
            opacity: 1,
            duration: 0.6
        }, "-=0.4")
        .to(aboutFeatures, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.3")
        .to(aboutButton, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, "-=0.3");

    gsap.to(aboutImage, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: aboutSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(aboutDot, {
        scale: 1.25,
        opacity: 0.55,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    aboutFeatures.forEach(function (feature) {

        const icon = feature.querySelector(".feature-icon");

        feature.addEventListener("mouseenter", function () {

            gsap.to(feature, {
                x: 8,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(icon, {
                scale: 1.15,
                rotate: 5,
                duration: 0.3,
                ease: "back.out(1.5)"
            });

        });

        feature.addEventListener("mouseleave", function () {

            gsap.to(feature, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });
    });
}
const servicesSection = document.querySelector(".fitness-services");

if (servicesSection) {

    const heading = servicesSection.querySelector(".services-heading");
    const cards = servicesSection.querySelectorAll(".service-card");
    const button = servicesSection.querySelector(".services-main-btn");

    gsap.set(heading, {
        y: 60,
        opacity: 0
    });

    gsap.set(cards, {
        y: 80,
        opacity: 0,
        scale: 0.94
    });

    gsap.set(button, {
        y: 35,
        opacity: 0
    });

    const servicesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: servicesSection,
            start: "top 75%",
            once: true
        }
    });

    servicesTimeline
        .to(heading, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out"
        })
        .to(cards, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out"
        }, "-=0.35")
        .to(button, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, "-=0.25");

    cards.forEach(function (card) {

        const icon = card.querySelector(".service-icon");
        const number = card.querySelector(".service-number");

        card.addEventListener("mouseenter", function () {

            gsap.to(card, {
                y: -8,
                duration: 0.35,
                ease: "power2.out"
            });

            gsap.to(icon, {
                scale: 1.12,
                rotate: 5,
                duration: 0.35,
                ease: "back.out(1.5)"
            });

            gsap.to(number, {
                scale: 1.12,
                opacity: 0.25,
                duration: 0.35,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", function () {

            gsap.to(card, {
                y: 0,
                duration: 0.35,
                ease: "power2.out"
            });

            gsap.to(icon, {
                scale: 1,
                rotate: 0,
                duration: 0.35,
                ease: "power2.out"
            });

            gsap.to(number, {
                scale: 1,
                opacity: 0.13,
                duration: 0.35,
                ease: "power2.out"
            });

        });
    });
}

const trainersSection = document.querySelector(".fitness-trainers");

if (trainersSection) {

    const heading = trainersSection.querySelector(".trainers-heading");
    const cards = trainersSection.querySelectorAll(".trainer-card");
    const bottomButton = trainersSection.querySelector(".trainers-btn");

    gsap.set(heading, {
        y: 60,
        opacity: 0
    });

    gsap.set(cards, {
        y: 80,
        opacity: 0,
        scale: 0.94
    });

    gsap.set(bottomButton, {
        y: 30,
        opacity: 0
    });

    const trainersTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: trainersSection,
            start: "top 75%",
            once: true
        }
    });

    trainersTimeline
        .to(heading, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out"
        })
        .to(cards, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.13,
            ease: "power3.out"
        }, "-=0.35")
        .to(bottomButton, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, "-=0.3");

    cards.forEach(function (card) {

        const image = card.querySelector(".trainer-image");
        const social = card.querySelector(".trainer-social");
        const arrow = card.querySelector(".trainer-arrow");

        card.addEventListener("mouseenter", function () {

            gsap.to(image, {
                scale: 1.12,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(social, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.to(arrow, {
                rotate: -45,
                duration: 0.35,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", function () {

            gsap.to(image, {
                scale: 1.05,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.to(social, {
                y: 15,
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(arrow, {
                rotate: 0,
                duration: 0.35,
                ease: "power2.out"
            });

        });

    });
}
const transformationSection = document.querySelector(".fitness-transformation");

if (transformationSection) {

    const content = transformationSection.querySelector(".transformation-content");
    const visual = transformationSection.querySelector(".transformation-visual");
    const points = transformationSection.querySelectorAll(".transformation-point");
    const image = transformationSection.querySelector(".transformation-image");
    const accent = transformationSection.querySelector(".transformation-accent");
    const progressCard = transformationSection.querySelector(".progress-card");
    const experienceCard = transformationSection.querySelector(".experience-card");
    const button = transformationSection.querySelector(".transformation-btn");
    const progress = transformationSection.querySelector(".progress-bar span");

    gsap.set(content, {
        x: -70,
        opacity: 0
    });

    gsap.set(visual, {
        x: 70,
        opacity: 0
    });

    gsap.set(points, {
        x: -30,
        opacity: 0
    });

    gsap.set(button, {
        y: 25,
        opacity: 0
    });

    gsap.set(progressCard, {
        x: -40,
        opacity: 0
    });

    gsap.set(experienceCard, {
        scale: 0,
        rotation: 12
    });

    gsap.set(progress, {
        width: "0%"
    });

    gsap.set(image, {
        scale: 1.12
    });

    const transformationTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: transformationSection,
            start: "top 75%",
            once: true
        }
    });

    transformationTimeline
        .to(content, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out"
        })
        .to(points, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.14,
            ease: "power3.out"
        }, "-=0.45")
        .to(button, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.5)"
        }, "-=0.25")
        .to(visual, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        }, "-=1")
        .to(image, {
            scale: 1,
            duration: 1.3,
            ease: "power3.out"
        }, "-=0.8")
        .to(accent, {
            scaleX: 1,
            transformOrigin: "right center",
            duration: 0.8,
            ease: "power3.out"
        }, "-=1")
        .to(progressCard, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, "-=0.4")
        .to(experienceCard, {
            scale: 1,
            rotation: 0,
            duration: 0.7,
            ease: "back.out(1.8)"
        }, "-=0.5")
        .to(progress, {
            width: "87%",
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.3");

    gsap.to(image, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
            trigger: transformationSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(experienceCard, {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(progressCard, {
        y: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

const testimonialSection = document.querySelector(".fitness-testimonials");

if (testimonialSection) {

    const mainCard = testimonialSection.querySelector(".testimonial-main");
    const textElement = testimonialSection.querySelector(".testimonial-text");
    const nameElement = testimonialSection.querySelector(".testimonial-name");
    const roleElement = testimonialSection.querySelector(".testimonial-role");
    const avatarElement = testimonialSection.querySelector(".testimonial-avatar img");
    const miniCards = testimonialSection.querySelectorAll(".testimonial-mini");
    const currentElement = testimonialSection.querySelector(".current-testimonial");
    const progressBar = testimonialSection.querySelector(".testimonial-progress-bar");
    const prevButton = testimonialSection.querySelector(".testimonial-prev");
    const nextButton = testimonialSection.querySelector(".testimonial-next");

    const testimonials = [
        {
            name: "ANJALI SHARMA",
            role: "FITNESS MEMBER",
            image: "Assets/IT18.webp    ",
            text: "Joining this fitness center completely changed my approach to training. The trainers understand your goals and genuinely help you become stronger."
        },
        {
            name: "ROHAN KUMAR",
            role: "WEIGHT TRAINING",
            image: "Assets/IT20.webp",
            text: "The training environment is amazing. Every workout feels challenging but achievable, and I have seen a huge improvement in my strength."
        },
        {
            name: "MEERA RAO",
            role: "FITNESS MEMBER",
            image: "Assets/IT21.webp",
            text: "I finally found a place where fitness feels enjoyable. The personalized guidance and positive atmosphere keep me motivated every day."
        },
        {
            name: "VIKRAM SINGH",
            role: "PERSONAL TRAINING",
            image: "Assets/student3.webp",
            text: "My trainer helped me build a proper routine and stay consistent. The results have been better than I expected when I started."
        }
    ];

    let currentIndex = 0;
    let autoPlay;
    let isAnimating = false;
    const duration = 5000;

    function animateProgress() {

        gsap.killTweensOf(progressBar);

        gsap.set(progressBar, {
            width: "0%"
        });

        gsap.to(progressBar, {
            width: "100%",
            duration: duration / 1000,
            ease: "none"
        });
    }

    function updateMiniCards() {

        miniCards.forEach(function (card, index) {

            card.classList.toggle(
                "active",
                index === currentIndex
            );

        });
    }

    function updateCounter() {

        currentElement.textContent =
            String(currentIndex + 1).padStart(2, "0");

    }

    function changeTestimonial(index, direction) {

        if (isAnimating) {
            return;
        }

        isAnimating = true;

        currentIndex =
            (index + testimonials.length) %
            testimonials.length;

        const testimonial = testimonials[currentIndex];

        const elements = [
            textElement,
            nameElement,
            roleElement,
            avatarElement
        ];

        gsap.to(elements, {
            opacity: 0,
            y: direction * -20,
            duration: 0.22,
            ease: "power2.in",
            onComplete: function () {

                textElement.textContent = `"${testimonial.text}"`;
                nameElement.textContent = testimonial.name;
                roleElement.textContent = testimonial.role;
                avatarElement.src = testimonial.image;

                gsap.set(elements, {
                    y: direction * 20
                });

                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.04,
                    ease: "power3.out",
                    onComplete: function () {
                        isAnimating = false;
                    }
                });

            }
        });

        updateMiniCards();
        updateCounter();
        animateProgress();
    }

    function nextTestimonial() {
        changeTestimonial(currentIndex + 1, 1);
    }

    function previousTestimonial() {
        changeTestimonial(currentIndex - 1, -1);
    }

    function startAutoPlay() {

        clearInterval(autoPlay);

        autoPlay = setInterval(function () {
            nextTestimonial();
        }, duration);

    }

    function resetAutoPlay() {
        startAutoPlay();
    }

    nextButton.addEventListener("click", function () {
        nextTestimonial();
        resetAutoPlay();
    });

    prevButton.addEventListener("click", function () {
        previousTestimonial();
        resetAutoPlay();
    });

    miniCards.forEach(function (card, index) {

        card.addEventListener("click", function () {

            if (index === currentIndex) {
                return;
            }

            const direction =
                index > currentIndex ? 1 : -1;

            changeTestimonial(index, direction);
            resetAutoPlay();

        });

    });

    let touchStartX = 0;
    let touchEndX = 0;

    mainCard.addEventListener(
        "touchstart",
        function (event) {
            touchStartX = event.changedTouches[0].screenX;
        },
        { passive: true }
    );

    mainCard.addEventListener(
        "touchend",
        function (event) {

            touchEndX = event.changedTouches[0].screenX;

            const difference =
                touchStartX - touchEndX;

            if (Math.abs(difference) < 50) {
                return;
            }

            if (difference > 0) {
                nextTestimonial();
            } else {
                previousTestimonial();
            }

            resetAutoPlay();

        },
        { passive: true }
    );

    testimonialSection.addEventListener(
        "mouseenter",
        function () {
            clearInterval(autoPlay);
            gsap.pauseTweensOf(progressBar);
        }
    );

    testimonialSection.addEventListener(
        "mouseleave",
        function () {
            gsap.resumeTweensOf(progressBar);
            startAutoPlay();
        }
    );

    gsap.set(
        [
            testimonialSection.querySelector(".testimonials-header"),
            mainCard,
            testimonialSection.querySelector(".testimonial-side"),
            testimonialSection.querySelector(".testimonial-controls")
        ],
        {
            y: 50,
            opacity: 0
        }
    );

    const testimonialIntroAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: testimonialSection,
            start: "top 75%",
            once: true
        }
    });

    testimonialIntroAnimation
        .to(
            testimonialSection.querySelector(".testimonials-header"),
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power4.out"
            }
        )
        .to(
            mainCard,
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            },
            "-=0.4"
        )
        .to(
            testimonialSection.querySelector(".testimonial-side"),
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out"
            },
            "-=0.55"
        )
        .to(
            testimonialSection.querySelector(".testimonial-controls"),
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            },
            "-=0.35"
        );

    updateMiniCards();
    updateCounter();
    animateProgress();
    startAutoPlay();
}

const offerSection = document.querySelector(".fitness-offer");

if (offerSection && typeof gsap !== "undefined") {

    const offerTop = offerSection.querySelector(".offer-top");
    const offerCards = offerSection.querySelectorAll(".offer-card");
    const offerFooter = offerSection.querySelector(".offer-footer");

    gsap.set(
        [offerTop, offerCards, offerFooter],
        {
            opacity: 0,
            y: 55
        }
    );

    const offerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: offerSection,
            start: "top 75%",
            once: true
        }
    });

    offerTimeline
        .to(offerTop, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power4.out"
        })
        .to(offerCards, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out"
        }, "-=0.4")
        .to(offerFooter, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.25");

    offerCards.forEach(function(card) {

        const icon = card.querySelector(".offer-card-top i");

        card.addEventListener("mouseenter", function() {

            gsap.to(icon, {
                rotation: 8,
                scale: 1.08,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", function() {

            gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });
}
const ctaSection = document.querySelector(".fitness-cta-newsletter");

if (ctaSection && typeof gsap !== "undefined") {

    const ctaMain = ctaSection.querySelector(".cta-main");
    const newsletterBox = ctaSection.querySelector(".newsletter-box");
    const ctaBottom = ctaSection.querySelector(".cta-bottom");
    const glowOne = ctaSection.querySelector(".cta-glow-one");
    const glowTwo = ctaSection.querySelector(".cta-glow-two");

    gsap.set(
        [ctaMain, newsletterBox, ctaBottom],
        {
            opacity: 0,
            y: 60
        }
    );

    const ctaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 75%",
            once: true
        }
    });

    ctaTimeline
        .to(ctaMain, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: "power4.out"
        })
        .to(newsletterBox, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power3.out"
        }, "-=.45")
        .to(ctaBottom, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.35");

    gsap.to(glowOne, {
        x: 60,
        y: 40,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(glowTwo, {
        x: -40,
        y: -30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterConsent = document.getElementById("newsletterConsent");
    const newsletterMessage = document.getElementById("newsletterMessage");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function(event) {

            event.preventDefault();

            newsletterMessage.textContent = "";

            if (!newsletterEmail.value.trim()) {
                newsletterMessage.textContent = "Please enter your email address.";
                newsletterEmail.focus();
                return;
            }

            if (!newsletterEmail.checkValidity()) {
                newsletterMessage.textContent = "Please enter a valid email address.";
                newsletterEmail.focus();
                return;
            }

            if (!newsletterConsent.checked) {
                newsletterMessage.textContent = "Please accept the newsletter terms.";
                return;
            }

            newsletterMessage.textContent =
                "You're subscribed. Welcome to the fitness community.";
                window.location.href="error.html";

            newsletterForm.reset();

            gsap.fromTo(
                newsletterMessage,
                {
                    opacity: 0,
                    y: 8
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .4,
                    ease: "power2.out"
                }
            );

        });
    }
}


const footerSection = document.querySelector(".fitness-footer");

if (footerSection && typeof gsap !== "undefined") {

    const footerMain = footerSection.querySelector(".footer-main");
    const footerColumns = footerSection.querySelectorAll(".footer-column");
    const footerContact = footerSection.querySelector(".footer-contact-strip");
    const footerBottom = footerSection.querySelector(".footer-bottom");

    gsap.set(
        [footerMain, footerColumns, footerContact, footerBottom],
        {
            opacity: 0,
            y: 35
        }
    );

    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: footerSection,
            start: "top 85%",
            once: true
        }
    });

    footerTimeline
        .to(footerMain, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power3.out"
        })
        .to(footerColumns, {
            opacity: 1,
            y: 0,
            duration: .55,
            stagger: .08,
            ease: "power3.out"
        }, "-=.5")
        .to(footerContact, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.25")
        .to(footerBottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");
}