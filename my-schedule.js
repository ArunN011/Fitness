document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("mobileMenuButton");
    const sidebar = document.getElementById("dashboardSidebar");
    const overlay = document.getElementById("sidebarOverlay");

    const openMenu = () => {
        sidebar.classList.add("open");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    };

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            if (sidebar.classList.contains("open")) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener("click", closeMenu);
    }

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) {
            closeMenu();
        }
    });

    const storedEmail = localStorage.getItem("userEmail");
    const storedName = localStorage.getItem("stacklyUsername");

    let displayName = storedName || storedEmail || "User";

    if (displayName.includes("@")) {
        displayName = displayName.split("@")[0];
    }

    const sidebarUserName = document.getElementById("sidebarUserName");
    const headerUserName = document.getElementById("headerUserName");

    if (sidebarUserName) {
        sidebarUserName.textContent = displayName;
    }

    if (headerUserName) {
        headerUserName.textContent = displayName;
    }
});