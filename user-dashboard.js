document.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedRole = (localStorage.getItem("userRole") || "").toLowerCase().trim();

    if (!savedEmail || !savedRole) {
        window.location.replace("login.html");
        return;
    }

    if (savedRole === "admin") {
        window.location.replace("admin-dashboard.html");
        return;
    }

    if (savedRole !== "user") {
        window.location.replace("login.html");
        return;
    }

    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const menuButton = document.getElementById("mobileMenuButton");
    const logoutButton = document.getElementById("logoutButton");

    const welcomeUser = document.getElementById("welcomeUser");
    const sidebarUserName = document.getElementById("sidebarUserName");
    const headerUserName = document.getElementById("headerUserName");
    const currentDate = document.getElementById("currentDate");

    function getDisplayName(email) {
        const name = email
            .split("@")[0]
            .replace(/[0-9]+/g, "")
            .replace(/[._-]+/g, " ")
            .trim();

        if (!name) {
            return "USER";
        }

        return name
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    }

    const displayName = getDisplayName(savedEmail);

    if (welcomeUser) {
        welcomeUser.textContent = displayName.toUpperCase();
    }

    if (sidebarUserName) {
        sidebarUserName.textContent = savedEmail;
    }

    if (headerUserName) {
        headerUserName.textContent = displayName;
    }

    if (currentDate) {
        currentDate.textContent = new Date()
            .toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            })
            .toUpperCase();
    }

    let savedScrollPosition = 0;

    function lockScroll() {
        savedScrollPosition = window.scrollY;

        document.documentElement.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${savedScrollPosition}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.body.classList.add("sidebar-open");
    }

    function unlockScroll() {
        document.documentElement.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.classList.remove("sidebar-open");

        requestAnimationFrame(() => {
            window.scrollTo(0, savedScrollPosition);
        });
    }

    function openSidebar() {
        if (!sidebar || !overlay) {
            return;
        }

        lockScroll();

        sidebar.classList.add("mobile-open");
        overlay.classList.add("active");

        menuButton.innerHTML = '<i class="bi bi-x-lg"></i>';
        menuButton.setAttribute("aria-label", "Close menu");
    }

    function closeSidebar() {
        if (!sidebar || !overlay) {
            return;
        }

        sidebar.classList.remove("mobile-open");
        overlay.classList.remove("active");

        menuButton.innerHTML = '<i class="bi bi-list"></i>';
        menuButton.setAttribute("aria-label", "Open menu");

        unlockScroll();
    }

    if (menuButton) {
        menuButton.addEventListener("click", event => {
            event.preventDefault();

            if (sidebar.classList.contains("mobile-open")) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && sidebar.classList.contains("mobile-open")) {
            closeSidebar();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991 && sidebar.classList.contains("mobile-open")) {
            closeSidebar();
        }
    });

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                closeSidebar();
            }
        });
    });

    if (logoutButton) {
        logoutButton.addEventListener("click", event => {
            event.preventDefault();

            localStorage.removeItem("userEmail");
            localStorage.removeItem("userRole");
            localStorage.removeItem("stacklyUserEmail");
            localStorage.removeItem("stacklyUserPassword");
            localStorage.removeItem("stacklyUserRole");
            localStorage.removeItem("stacklyLoggedIn");
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("stacklyRememberMe");

            sessionStorage.clear();

            window.location.replace("login.html");
        });
    }

    document.querySelectorAll('a[href="error.html"]').forEach(link => {
        link.addEventListener("click", () => {
            if (sidebar.classList.contains("mobile-open")) {
                closeSidebar();
            }
        });
    });

    if (typeof gsap !== "undefined") {
        gsap.fromTo(
            ".welcome-card",
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: .7,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".metric-card",
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: .45,
                stagger: .08,
                delay: .15,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".dashboard-card",
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: .5,
                stagger: .08,
                delay: .3,
                ease: "power3.out"
            }
        );

        gsap.fromTo(
            ".dashboard-tip",
            {
                opacity: 0,
                y: 15
            },
            {
                opacity: 1,
                y: 0,
                duration: .5,
                delay: .55,
                ease: "power3.out"
            }
        );

        gsap.to(".orbit-one", {
            rotation: 360,
            duration: 25,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".orbit-two", {
            rotation: -360,
            duration: 17,
            repeat: -1,
            ease: "none"
        });

        gsap.to(".orbit-dot", {
            scale: 1.5,
            opacity: .55,
            duration: 1,
            repeat: -1,
            yoyo: true,
            stagger: .2,
            ease: "sine.inOut"
        });

        gsap.to(".fitness-core", {
            y: -6,
            duration: 1.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.fromTo(
            ".ring-value",
            {
                strokeDashoffset: 364
            },
            {
                strokeDashoffset: 80,
                duration: 1.5,
                delay: .6,
                ease: "power3.out"
            }
        );
    }
});