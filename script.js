
Those **backticks are not JavaScript**, so VS Code starts treating almost everything afterward as invalid syntax. That's why you suddenly have **222 errors**.

### Fix it right now

Open `script.js` and **delete everything inside it**, then paste the clean code below.

**IMPORTANT:** Copy only the code between the lines. Do **not** copy the ``` marks.

```javascript
/* =========================================================
   HARSH VASHISHTH — GIS DEVELOPER PORTFOLIO
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SMOOTH SCROLLING
    ===================================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 180;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section, .service-card, .project-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    observerInstance.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {

            element.classList.add(
                "reveal-element"
            );

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add(
                "reveal-visible"
            );

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const footerText =
        document.querySelector(".footer-container p");

    if (footerText) {

        const year = new Date().getFullYear();

        footerText.textContent =
            "© " + year +
            " Harsh Vashishth. All rights reserved.";

    }

});