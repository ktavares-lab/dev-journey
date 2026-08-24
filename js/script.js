document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const isExpanded = navLinks.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        navItems.forEach(item => {
            item.addEventListener("click", () => {
                if (navLinks.classList.contains("active")) {
                    navLinks.classList.remove("active");
                    menuToggle.setAttribute("aria-expanded", "false");
                }
            });
        });
    }

    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                projectCards.forEach(card => {
                    const category = card.getAttribute("data-category");

                    if (filterValue === "todos" || filterValue === category) {
                        card.classList.remove("hidden");
                        card.style.display = "";
                    } else {
                        card.classList.add("hidden");
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    const timelineItems = document.querySelectorAll(".timeline-item");

    if (timelineItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };

        const timelineObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.animation = "none";
                    element.offsetHeight;
                    element.style.animation = null;

                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }
});