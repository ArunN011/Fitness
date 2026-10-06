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

    let adminName = storedName || storedEmail || "Admin";

    if (adminName.includes("@")) {
        adminName = adminName.split("@")[0];
    }

    adminName = adminName.trim() || "Admin";

    const sidebarAdminName = document.getElementById("sidebarAdminName");
    const headerAdminName = document.getElementById("headerAdminName");

    if (sidebarAdminName) {
        sidebarAdminName.textContent = adminName;
    }

    if (headerAdminName) {
        headerAdminName.textContent = adminName;
    }
});