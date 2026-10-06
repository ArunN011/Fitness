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