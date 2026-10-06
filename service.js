const serviceHero = document.querySelector(".service-hero");

if (serviceHero && typeof gsap !== "undefined") {
    const background = serviceHero.querySelector(".service-hero-bg img");
    const redTitle = serviceHero.querySelector(".service-hero-red");
    const whiteTitle = serviceHero.querySelector(".service-hero-white");
    const breadcrumb = serviceHero.querySelector(".service-hero-breadcrumb");

    gsap.set(background, {
        scale: 1.12,
        opacity: 0
    });

    gsap.set(redTitle, {
        opacity: 0,
        x: -70
    });

    gsap.set(whiteTitle, {
        opacity: 0,
        x: 70
    });

    gsap.set(breadcrumb, {
        opacity: 0,
        y: 25
    });

    const serviceHeroTimeline = gsap.timeline();

    serviceHeroTimeline
        .to(background, {
            opacity: 1,
            scale: 1.03,
            duration: 1.5,
            ease: "power3.out"
        })
        .to(redTitle, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.9")
        .to(whiteTitle, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.65")
        .to(breadcrumb, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.35");

    gsap.to(background, {
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
            trigger: serviceHero,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
}
const serviceIntro = document.querySelector(".service-intro");

if (serviceIntro && typeof gsap !== "undefined") {
    const top = serviceIntro.querySelector(".service-intro-top");
    const heading = serviceIntro.querySelector(".service-intro-heading");
    const cards = serviceIntro.querySelectorAll(".service-intro-card");
    const bottom = serviceIntro.querySelector(".service-intro-bottom");

    gsap.set([top, heading], {
        opacity: 0,
        y: 45
    });

    gsap.set(cards, {
        opacity: 0,
        y: 70
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 25
    });

    const serviceIntroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: serviceIntro,
            start: "top 75%",
            once: true
        }
    });

    serviceIntroTimeline
        .to(top, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        })
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.2")
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .7,
            stagger: .13,
            ease: "power3.out"
        }, "-=.35")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");
}
const serviceFeatured = document.querySelector(".service-featured");

if (serviceFeatured && typeof gsap !== "undefined") {
    const image = serviceFeatured.querySelector(".service-featured-image");
    const content = serviceFeatured.querySelector(".service-featured-content");
    const label = serviceFeatured.querySelector(".service-featured-label");
    const heading = serviceFeatured.querySelector("h2");
    const description = serviceFeatured.querySelector(".service-featured-description");
    const features = serviceFeatured.querySelectorAll(".service-featured-feature");
    const action = serviceFeatured.querySelector(".service-featured-action");

    gsap.set(image, {
        opacity: 0,
        x: -70
    });

    gsap.set([label, heading, description, action], {
        opacity: 0,
        y: 45
    });

    gsap.set(features, {
        opacity: 0,
        x: 40
    });

    const serviceFeaturedTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: serviceFeatured,
            start: "top 75%",
            once: true
        }
    });

    serviceFeaturedTimeline
        .to(image, {
            opacity: 1,
            x: 0,
            duration: .9,
            ease: "power4.out"
        })
        .to(label, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.55")
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power4.out"
        }, "-=.3")
        .to(description, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25")
        .to(features, {
            opacity: 1,
            x: 0,
            duration: .5,
            stagger: .1,
            ease: "power3.out"
        }, "-=.2")
        .to(action, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");
}
const groupFitness = document.querySelector(".group-fitness-section");

if (groupFitness && typeof gsap !== "undefined") {
    const heading = groupFitness.querySelector(".group-fitness-heading");
    const image = groupFitness.querySelector(".group-fitness-main-image");
    const features = groupFitness.querySelectorAll(".group-fitness-feature");
    const button = groupFitness.querySelector(".group-fitness-button");
    const bottom = groupFitness.querySelector(".group-fitness-bottom");

    gsap.set(heading, {
        opacity: 0,
        y: 50
    });

    gsap.set(image, {
        opacity: 0,
        x: -60
    });

    gsap.set(features, {
        opacity: 0,
        x: 50
    });

    gsap.set([button, bottom], {
        opacity: 0,
        y: 25
    });

    const groupTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: groupFitness,
            start: "top 75%",
            once: true
        }
    });

    groupTimeline
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(image, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.35")
        .to(features, {
            opacity: 1,
            x: 0,
            duration: .55,
            stagger: .12,
            ease: "power3.out"
        }, "-=.4")
        .to(button, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");
}
const strengthSection = document.querySelector(".strength-section");

if (strengthSection && typeof gsap !== "undefined") {
    const header = strengthSection.querySelector(".strength-header");
    const content = strengthSection.querySelector(".strength-content");
    const image = strengthSection.querySelector(".strength-visual");
    const points = strengthSection.querySelectorAll(".strength-point");
    const button = strengthSection.querySelector(".strength-button");
    const stats = strengthSection.querySelectorAll(".strength-stats > div");

    gsap.set(header, {
        opacity: 0,
        y: 30
    });

    gsap.set(content, {
        opacity: 0,
        x: -60
    });

    gsap.set(image, {
        opacity: 0,
        x: 60
    });

    gsap.set(points, {
        opacity: 0,
        x: -25
    });

    gsap.set([button, stats], {
        opacity: 0,
        y: 25
    });

    const strengthTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: strengthSection,
            start: "top 75%",
            once: true
        }
    });

    strengthTimeline
        .to(header, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        })
        .to(content, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.2")
        .to(image, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.6")
        .to(points, {
            opacity: 1,
            x: 0,
            duration: .45,
            stagger: .1,
            ease: "power3.out"
        }, "-=.35")
        .to(button, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2")
        .to(stats, {
            opacity: 1,
            y: 0,
            duration: .45,
            stagger: .08,
            ease: "power3.out"
        }, "-=.2");
}
const wellnessSection = document.querySelector(".wellness-section");

if (wellnessSection && typeof gsap !== "undefined") {
    const top = wellnessSection.querySelector(".wellness-top");
    const content = wellnessSection.querySelector(".wellness-content");
    const visual = wellnessSection.querySelector(".wellness-visual");
    const services = wellnessSection.querySelectorAll(".wellness-service");
    const button = wellnessSection.querySelector(".wellness-button");
    const bottom = wellnessSection.querySelector(".wellness-bottom");

    gsap.set(top, {
        opacity: 0,
        y: 25
    });

    gsap.set(content, {
        opacity: 0,
        x: -55
    });

    gsap.set(visual, {
        opacity: 0,
        x: 55
    });

    gsap.set(services, {
        opacity: 0,
        y: 25
    });

    gsap.set([button, bottom], {
        opacity: 0,
        y: 25
    });

    const wellnessTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: wellnessSection,
            start: "top 75%",
            once: true
        }
    });

    wellnessTimeline
        .to(top, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        })
        .to(content, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.2")
        .to(visual, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.6")
        .to(services, {
            opacity: 1,
            y: 0,
            duration: .45,
            stagger: .1,
            ease: "power3.out"
        }, "-=.35")
        .to(button, {
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
}
const pricingSection = document.querySelector(".service-pricing");

if (pricingSection && typeof gsap !== "undefined") {
    const header = pricingSection.querySelector(".pricing-header");
    const cards = pricingSection.querySelectorAll(".pricing-card");
    const bottom = pricingSection.querySelector(".pricing-bottom");

    gsap.set(header, {
        opacity: 0,
        y: 35
    });

    gsap.set(cards, {
        opacity: 0,
        y: 60
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 25
    });

    const pricingTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: pricingSection,
            start: "top 75%",
            once: true
        }
    });

    pricingTimeline
        .to(header, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        })
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .65,
            stagger: .15,
            ease: "power4.out"
        }, "-=.35")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");

    cards.forEach(card => {
        const button = card.querySelector(".pricing-button");

        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                duration: .35,
                ease: "power2.out"
            });

            if (button) {
                gsap.to(button.querySelector("i"), {
                    x: 5,
                    duration: .25,
                    ease: "power2.out"
                });
            }
        });

        card.addEventListener("mouseleave", () => {
            if (button) {
                gsap.to(button.querySelector("i"), {
                    x: 0,
                    duration: .25,
                    ease: "power2.out"
                });
            }
        });
    });
}
const provideSection = document.querySelector(".what-we-provide");

if (provideSection && typeof gsap !== "undefined") {
    const top = provideSection.querySelector(".provide-top");
    const heading = provideSection.querySelector(".provide-heading");
    const cards = provideSection.querySelectorAll(".provide-card");
    const bottom = provideSection.querySelector(".provide-bottom");

    gsap.set(top, {
        opacity: 0,
        y: 25
    });

    gsap.set(heading, {
        opacity: 0,
        y: 40
    });

    gsap.set(cards, {
        opacity: 0,
        y: 55
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 25
    });

    const provideTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: provideSection,
            start: "top 75%",
            once: true
        }
    });

    provideTimeline
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
            ease: "power4.out"
        }, "-=.2")
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .55,
            stagger: .1,
            ease: "power4.out"
        }, "-=.35")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");
}

const provideCards = document.querySelectorAll(".provide-card");

provideCards.forEach(card => {
    const icon = card.querySelector(".provide-icon");

    card.addEventListener("mouseenter", () => {
        if (typeof gsap !== "undefined") {
            gsap.to(icon, {
                rotation: -6,
                scale: 1.05,
                duration: .35,
                ease: "power2.out"
            });
        }
    });

    card.addEventListener("mouseleave", () => {
        if (typeof gsap !== "undefined") {
            gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: .35,
                ease: "power2.out"
            });
        }
    });
});
const faqSection = document.querySelector(".service-faq");

if (faqSection && typeof gsap !== "undefined") {
    const top = faqSection.querySelector(".faq-top");
    const heading = faqSection.querySelector(".faq-heading");
    const intro = faqSection.querySelector(".faq-intro");
    const items = faqSection.querySelectorAll(".faq-item");
    const bottom = faqSection.querySelector(".faq-bottom");

    gsap.set(top, {
        opacity: 0,
        y: 25
    });

    gsap.set(heading, {
        opacity: 0,
        y: 40
    });

    gsap.set(intro, {
        opacity: 0,
        x: -50
    });

    gsap.set(items, {
        opacity: 0,
        x: 50
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 25
    });

    const faqTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: faqSection,
            start: "top 75%",
            once: true
        }
    });

    faqTimeline
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
            ease: "power4.out"
        }, "-=.2")
        .to(intro, {
            opacity: 1,
            x: 0,
            duration: .7,
            ease: "power4.out"
        }, "-=.3")
        .to(items, {
            opacity: 1,
            x: 0,
            duration: .5,
            stagger: .08,
            ease: "power3.out"
        }, "-=.45")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

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
const serviceCta = document.querySelector(".service-cta");

if (serviceCta && typeof gsap !== "undefined") {
    const bg = serviceCta.querySelector(".service-cta-bg img");
    const top = serviceCta.querySelector(".service-cta-top");
    const content = serviceCta.querySelector(".service-cta-content");
    const label = serviceCta.querySelector(".service-cta-label");
    const heading = serviceCta.querySelector("h2");
    const paragraph = serviceCta.querySelector("p");
    const actions = serviceCta.querySelector(".service-cta-actions");
    const bottom = serviceCta.querySelector(".service-cta-bottom");

    gsap.set(bg, {
        scale: 1.12
    });

    gsap.set([top, label, heading, paragraph, actions, bottom], {
        opacity: 0,
        y: 35
    });

    const ctaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: serviceCta,
            start: "top 75%",
            once: true
        }
    });

    ctaTimeline
        .to(bg, {
            scale: 1.04,
            duration: 1.5,
            ease: "power3.out"
        })
        .to(top, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=1")
        .to(label, {
            opacity: 1,
            y: 0,
            duration: .4,
            ease: "power3.out"
        }, "-=.25")
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.2")
        .to(paragraph, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.35")
        .to(actions, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");

    if (typeof ScrollTrigger !== "undefined") {
        gsap.to(bg, {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
                trigger: serviceCta,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }
}