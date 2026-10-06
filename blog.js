document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".blog-hero");

    if (!hero || typeof gsap === "undefined") return;

    const bg = hero.querySelector(".blog-hero-bg img");
    const heading = hero.querySelector(".blog-hero-content h1");
    const breadcrumb = hero.querySelector(".blog-hero-breadcrumb");

    gsap.set(bg, {
        scale: 1.12
    });

    gsap.set([heading, breadcrumb], {
        opacity: 0,
        y: 35
    });

    const tl = gsap.timeline();

    tl.to(bg, {
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
    })
    .to(heading, {
        opacity: 1,
        y: 0,
        duration: .8,
        ease: "power4.out"
    }, "-=.9")
    .to(breadcrumb, {
        opacity: 1,
        y: 0,
        duration: .5,
        ease: "power3.out"
    }, "-=.4");

    gsap.to(bg, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") return;

    const section = document.querySelector(".blog-intro");

    if (!section) return;

    const top = section.querySelector(".blog-intro-top");
    const heading = section.querySelector(".blog-intro-heading");
    const feature = section.querySelector(".blog-feature-main");
    const cards = section.querySelectorAll(".blog-small-card");
    const bottom = section.querySelector(".blog-intro-bottom");

    gsap.set([top, heading, feature, ...cards, bottom], {
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
        .to(feature, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        }, "-=.25")
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .6,
            stagger: .15,
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
    if (typeof gsap === "undefined") return;

    const section = document.querySelector(".blog-categories");

    if (!section) return;

    const top = section.querySelector(".blog-categories-top");
    const heading = section.querySelector(".blog-categories-heading");
    const cards = section.querySelectorAll(".blog-category-card");
    const bottom = section.querySelector(".blog-categories-bottom");

    gsap.set([top, heading, ...cards, bottom], {
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
            duration: .7,
            stagger: .12,
            ease: "power3.out"
        }, "-=.3")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.3");
});
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") return;

    const section = document.querySelector(".blog-latest");

    if (!section) return;

    const top = section.querySelector(".blog-latest-top");
    const heading = section.querySelector(".blog-latest-heading");
    const cards = section.querySelectorAll(".blog-article-card");
    const strip = section.querySelector(".blog-article-strip");

    gsap.set([top, heading, ...cards, strip], {
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
            duration: .7,
            stagger: .15,
            ease: "power3.out"
        }, "-=.35")
        .to(strip, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.3");
});
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".blog-faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".blog-faq-question");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    if (typeof gsap === "undefined") return;

    const section = document.querySelector(".blog-faq");

    if (!section) return;

    const top = section.querySelector(".blog-faq-top");
    const heading = section.querySelector(".blog-faq-heading");
    const intro = section.querySelector(".blog-faq-intro");
    const items = section.querySelectorAll(".blog-faq-item");
    const bottom = section.querySelector(".blog-faq-bottom");

    gsap.set([top, heading, intro, ...items, bottom], {
        opacity: 0,
        y: 40
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
            duration: .7,
            ease: "power3.out"
        }, "-=.25")
        .to(items, {
            opacity: 1,
            y: 0,
            duration: .55,
            stagger: .1,
            ease: "power3.out"
        }, "-=.4")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");
});