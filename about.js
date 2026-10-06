const aboutHero = document.querySelector(".about-hero");

if (aboutHero && typeof gsap !== "undefined") {

    const background = aboutHero.querySelector(".about-hero-bg");
    const overlay = aboutHero.querySelector(".about-hero-overlay");
    const title = aboutHero.querySelector(".about-hero-title");
    const breadcrumb = aboutHero.querySelector(".about-breadcrumb");
    const dots = aboutHero.querySelectorAll(".about-hero-decoration");

    gsap.set(background, {
        scale: 1.15
    });

    gsap.set(
        [title, breadcrumb],
        {
            opacity: 0,
            y: 45
        }
    );

    gsap.set(dots, {
        opacity: 0,
        scale: 0
    });

    const aboutHeroTimeline = gsap.timeline();

    aboutHeroTimeline
        .to(background, {
            scale: 1.05,
            duration: 1.5,
            ease: "power3.out"
        })
        .to(title, {
            opacity: 1,
            y: 0,
            duration: .9,
            ease: "power4.out"
        }, "-=.9")
        .to(breadcrumb, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.45")
        .to(dots, {
            opacity: 1,
            scale: 1,
            duration: .5,
            stagger: .15,
            ease: "back.out(2)"
        }, "-=.35");

    gsap.to(background, {
        yPercent: 6,
        scrollTrigger: {
            trigger: aboutHero,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(
        aboutHero.querySelector(".about-dot-one"),
        {
            y: 25,
            x: 15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );

    gsap.to(
        aboutHero.querySelector(".about-dot-two"),
        {
            y: -20,
            x: -12,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        }
    );
}
const aboutStory = document.querySelector(".about-story");

if (aboutStory && typeof gsap !== "undefined") {

    const image = aboutStory.querySelector(".story-image-wrap");
    const imageElement = aboutStory.querySelector(".story-image-wrap img");
    const content = aboutStory.querySelector(".about-story-content");
    const redBar = aboutStory.querySelector(".story-red-bar");
    const dots = aboutStory.querySelectorAll(".story-dot");
    const stats = aboutStory.querySelectorAll(".story-stat");

    gsap.set(image, {
        opacity: 0,
        x: -70
    });

    gsap.set(content, {
        opacity: 0,
        x: 70
    });

    gsap.set(redBar, {
        scaleY: 0,
        transformOrigin: "bottom center"
    });

    gsap.set(dots, {
        opacity: 0,
        scale: 0
    });

    gsap.set(stats, {
        opacity: 0,
        y: 25
    });

    const storyTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutStory,
            start: "top 72%",
            once: true
        }
    });

    storyTimeline
        .to(redBar, {
            scaleY: 1,
            duration: .7,
            ease: "power3.out"
        })
        .to(image, {
            opacity: 1,
            x: 0,
            duration: .9,
            ease: "power4.out"
        }, "-=.45")
        .to(content, {
            opacity: 1,
            x: 0,
            duration: .9,
            ease: "power4.out"
        }, "-=.65")
        .to(dots, {
            opacity: 1,
            scale: 1,
            duration: .5,
            stagger: .15,
            ease: "back.out(2)"
        }, "-=.55")
        .to(stats, {
            opacity: 1,
            y: 0,
            duration: .5,
            stagger: .1,
            ease: "power3.out"
        }, "-=.3");

    gsap.to(imageElement, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: aboutStory,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}
const aboutValues = document.querySelector(".about-values");

if (aboutValues && typeof gsap !== "undefined") {

    const heading = aboutValues.querySelector(".values-heading");
    const cards = aboutValues.querySelectorAll(".value-card");
    const bottom = aboutValues.querySelector(".values-bottom");

    gsap.set(heading, {
        opacity: 0,
        y: 50
    });

    gsap.set(cards, {
        opacity: 0,
        y: 70
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 25
    });

    const valuesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutValues,
            start: "top 75%",
            once: true
        }
    });

    valuesTimeline
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .65,
            stagger: .13,
            ease: "power3.out"
        }, "-=.35")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");

    cards.forEach(function(card) {

        const icon = card.querySelector(".value-icon");

        card.addEventListener("mouseenter", function() {
            gsap.to(icon, {
                scale: 1.1,
                rotation: 6,
                duration: .3,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", function() {
            gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: .3,
                ease: "power2.out"
            });
        });

    });
}
const aboutTrainers = document.querySelector(".about-trainers");

if (aboutTrainers && typeof gsap !== "undefined") {

    const heading = aboutTrainers.querySelector(".trainers-heading");
    const cards = aboutTrainers.querySelectorAll(".about-trainer-card");
    const bottom = aboutTrainers.querySelector(".trainers-bottom");

    gsap.set(heading, {
        opacity: 0,
        y: 55
    });

    gsap.set(cards, {
        opacity: 0,
        y: 70
    });

    gsap.set(bottom, {
        opacity: 0,
        y: 30
    });

    const trainersTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutTrainers,
            start: "top 75%",
            once: true
        }
    });

    trainersTimeline
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(cards, {
            opacity: 1,
            y: 0,
            duration: .65,
            stagger: .12,
            ease: "power3.out"
        }, "-=.35")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.25");

    cards.forEach(function(card) {

        const image = card.querySelector(".trainer-image img");

        card.addEventListener("mouseenter", function() {
            gsap.to(image, {
                scale: 1.07,
                duration: .7,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", function() {
            gsap.to(image, {
                scale: 1,
                duration: .7,
                ease: "power2.out"
            });
        });

    });
}
const aboutExperience = document.querySelector(".about-experience");

if (aboutExperience && typeof gsap !== "undefined") {

    const content = aboutExperience.querySelector(".experience-content");
    const visual = aboutExperience.querySelector(".experience-visual");
    const features = aboutExperience.querySelectorAll(".experience-feature");
    const stats = aboutExperience.querySelectorAll(".experience-stat");
    const image = aboutExperience.querySelector(".experience-image img");
    const number = aboutExperience.querySelector(".experience-number");
    const circle = aboutExperience.querySelector(".experience-circle");

    gsap.set(content, {
        opacity: 0,
        x: -60
    });

    gsap.set(visual, {
        opacity: 0,
        x: 60
    });

    gsap.set(features, {
        opacity: 0,
        y: 25
    });

    gsap.set(stats, {
        opacity: 0,
        y: 30
    });

    const experienceTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutExperience,
            start: "top 75%",
            once: true
        }
    });

    experienceTimeline
        .to(content, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        })
        .to(visual, {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.65")
        .to(features, {
            opacity: 1,
            y: 0,
            duration: .5,
            stagger: .12,
            ease: "power3.out"
        }, "-=.35")
        .to(stats, {
            opacity: 1,
            y: 0,
            duration: .5,
            stagger: .1,
            ease: "power3.out"
        }, "-=.25");

    gsap.to(image, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
            trigger: aboutExperience,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(circle, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    const counters = aboutExperience.querySelectorAll("[data-count]");

    counters.forEach(function(counter) {

        const target = Number(counter.dataset.count);

        gsap.fromTo(
            counter,
            {
                textContent: 0
            },
            {
                textContent: target,
                duration: 1.8,
                ease: "power2.out",
                snap: {
                    textContent: 1
                },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    once: true
                }
            }
        );

    });

    gsap.to(number, {
        y: -8,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}
const aboutTestimonials = document.querySelector(".about-testimonials");

if (aboutTestimonials && typeof gsap !== "undefined") {

    const main = aboutTestimonials.querySelector(".about-testimonial-main");
    const text = aboutTestimonials.querySelector(".about-testimonial-text");
    const name = aboutTestimonials.querySelector(".about-author-name");
    const role = aboutTestimonials.querySelector(".about-author-role");
    const image = aboutTestimonials.querySelector(".about-author-image img");
    const current = aboutTestimonials.querySelector(".about-current");
    const items = aboutTestimonials.querySelectorAll(".about-testimonial-item");

    const data = [
        {
            name: "ANJALI SHARMA",
            role: "FITNESS MEMBER",
            image: "Assets/IT18.webp",
            text: "\"This gym completely changed the way I look at fitness. The trainers pushed me beyond my limits while making every workout feel achievable.\""
        },
        {
            name: "ROHAN KUMAR",
            role: "WEIGHT TRAINING",
            image: "Assets/IT20.webp",
            text: "\"The training environment keeps me motivated every day. I have become stronger, more confident, and much more consistent.\""
        },
        {
            name: "MEERA RAO",
            role: "FITNESS MEMBER",
            image: "Assets/IT21.webp",
            text: "\"I joined to improve my fitness but discovered a community that genuinely supports my goals. Every session feels meaningful.\""
        },
        {
            name: "VIKRAM SINGH",
            role: "PERSONAL TRAINING",
            image: "Assets/student3.webp",
            text: "\"My trainer helped me build a routine that actually works for me. The progress I have made has completely changed my confidence.\""
        }
    ];

    let currentIndex = 0;
    let autoPlay;
    let changing = false;

    function updateTestimonial(index) {

        if (changing || index === currentIndex) {
            return;
        }

        changing = true;

        const item = data[index];

        gsap.to(
            [text, name, role, image],
            {
                opacity: 0,
                y: 20,
                duration: .25,
                stagger: .03,
                ease: "power2.in",
                onComplete: function() {

                    text.textContent = item.text;
                    name.textContent = item.name;
                    role.textContent = item.role;
                    image.src = item.image;

                    currentIndex = index;

                    current.textContent =
                        String(currentIndex + 1).padStart(2, "0");

                    items.forEach(function(card, cardIndex) {
                        card.classList.toggle(
                            "active",
                            cardIndex === currentIndex
                        );
                    });

                    gsap.set(
                        [text, name, role, image],
                        {
                            y: -20
                        }
                    );

                    gsap.to(
                        [text, name, role, image],
                        {
                            opacity: 1,
                            y: 0,
                            duration: .45,
                            stagger: .04,
                            ease: "power3.out",
                            onComplete: function() {
                                changing = false;
                            }
                        }
                    );
                }
            }
        );
    }

    function nextTestimonial() {
        updateTestimonial(
            (currentIndex + 1) % data.length
        );
    }

    function startAutoPlay() {

        clearInterval(autoPlay);

        autoPlay = setInterval(function() {
            nextTestimonial();
        }, 5000);
    }

    items.forEach(function(item, index) {

        item.addEventListener("click", function() {

            if (index !== currentIndex) {
                updateTestimonial(index);
            }

            startAutoPlay();
        });

    });

    let touchStart = 0;

    main.addEventListener(
        "touchstart",
        function(event) {
            touchStart = event.changedTouches[0].screenX;
        },
        { passive: true }
    );

    main.addEventListener(
        "touchend",
        function(event) {

            const touchEnd =
                event.changedTouches[0].screenX;

            const difference = touchStart - touchEnd;

            if (Math.abs(difference) > 50) {

                if (difference > 0) {
                    nextTestimonial();
                } else {
                    updateTestimonial(
                        (currentIndex - 1 + data.length) % data.length
                    );
                }

                startAutoPlay();
            }
        },
        { passive: true }
    );

    gsap.set(
        [
            aboutTestimonials.querySelector(".about-testimonials-heading"),
            main,
            aboutTestimonials.querySelector(".about-testimonial-list"),
            aboutTestimonials.querySelector(".about-testimonial-bottom")
        ],
        {
            opacity: 0,
            y: 50
        }
    );

    const testimonialTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutTestimonials,
            start: "top 75%",
            once: true
        }
    });

    testimonialTimeline
        .to(
            aboutTestimonials.querySelector(".about-testimonials-heading"),
            {
                opacity: 1,
                y: 0,
                duration: .7,
                ease: "power4.out"
            }
        )
        .to(
            main,
            {
                opacity: 1,
                y: 0,
                duration: .8,
                ease: "power3.out"
            },
            "-=.35"
        )
        .to(
            aboutTestimonials.querySelector(".about-testimonial-list"),
            {
                opacity: 1,
                y: 0,
                duration: .7,
                ease: "power3.out"
            },
            "-=.5"
        )
        .to(
            aboutTestimonials.querySelector(".about-testimonial-bottom"),
            {
                opacity: 1,
                y: 0,
                duration: .5,
                ease: "power3.out"
            },
            "-=.3"
        );

    startAutoPlay();
}
const aboutFinalCta = document.querySelector(".about-final-cta");

if (aboutFinalCta && typeof gsap !== "undefined") {

    const label = aboutFinalCta.querySelector(".about-cta-label");
    const heading = aboutFinalCta.querySelector("h2");
    const paragraph = aboutFinalCta.querySelector(".about-final-cta-container > p");
    const actions = aboutFinalCta.querySelector(".about-cta-actions");
    const bottom = aboutFinalCta.querySelector(".about-cta-bottom");
    const background = aboutFinalCta.querySelector(".about-final-cta-bg img");

    gsap.set(
        [label, heading, paragraph, actions, bottom],
        {
            opacity: 0,
            y: 45
        }
    );

    const ctaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutFinalCta,
            start: "top 75%",
            once: true
        }
    });

    ctaTimeline
        .to(label, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        })
        .to(heading, {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power4.out"
        }, "-=.25")
        .to(paragraph, {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }, "-=.4")
        .to(actions, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.3")
        .to(bottom, {
            opacity: 1,
            y: 0,
            duration: .5,
            ease: "power3.out"
        }, "-=.2");

    gsap.to(background, {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
            trigger: aboutFinalCta,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}