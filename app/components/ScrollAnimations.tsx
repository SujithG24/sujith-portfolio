"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ================= PAGE LOAD — NAVBAR ================= */

      gsap.from(".navbar", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      /* ================= MARQUEE ================= */

      gsap.from(".marquee-section", {
        scrollTrigger: {
          trigger: ".marquee-section",
          start: "top 90%",
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      /* ================= SECTION HEADINGS ================= */

      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((heading) => {
        gsap.from(heading.children, {
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
          },
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        });
      });

      /* ================= ABOUT ================= */

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".about-content > p", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".about-stats div", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 88%",
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      /* ================= SKILLS ================= */

      gsap.from(".skills-intro h2", {
        scrollTrigger: {
          trigger: ".skills-intro",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
      });

      gsap.from(".skills-intro p", {
        scrollTrigger: {
          trigger: ".skills-intro",
          start: "top 78%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 82%",
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });

      /* ================= PROJECTS ================= */

      gsap.from(".projects-intro h2", {
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
      });

      gsap.from(".projects-intro p", {
        scrollTrigger: {
          trigger: ".projects-intro",
          start: "top 78%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 82%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".projects-explore", {
        scrollTrigger: {
          trigger: ".projects-explore",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ================= EXPERIENCE ================= */

      gsap.from(".experience-label", {
        scrollTrigger: {
          trigger: ".experience-layout",
          start: "top 80%",
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".experience-company", {
        scrollTrigger: {
          trigger: ".experience-layout",
          start: "top 78%",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".experience-top h2", {
        scrollTrigger: {
          trigger: ".experience-top",
          start: "top 82%",
        },
        y: 100,
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
      });

      gsap.from(".experience-date", {
        scrollTrigger: {
          trigger: ".experience-top",
          start: "top 82%",
        },
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".experience-location", {
        scrollTrigger: {
          trigger: ".experience-location",
          start: "top 90%",
        },
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".experience-description p", {
        scrollTrigger: {
          trigger: ".experience-description",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
      });

      gsap.from(".experience-stack span", {
        scrollTrigger: {
          trigger: ".experience-stack",
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      });

      /* ================= ACHIEVEMENTS ================= */

      gsap.from(".achievement-heading", {
        scrollTrigger: {
          trigger: ".achievements-layout",
          start: "top 82%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".achievement-item", {
        scrollTrigger: {
          trigger: ".achievement-list",
          start: "top 82%",
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".certification-card", {
        scrollTrigger: {
          trigger: ".certification-list",
          start: "top 82%",
        },
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      /* ================= RESUME ================= */

      gsap.from(".resume-inner", {
        scrollTrigger: {
          trigger: ".resume-section",
          start: "top 80%",
        },
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".resume-content > *", {
        scrollTrigger: {
          trigger: ".resume-section",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
      });

      /* ================= CONTACT ================= */

      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 82%",
        },
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        },
        y: 120,
        opacity: 0,
        duration: 1.3,
        delay: 0.1,
        ease: "power4.out",
      });

      gsap.from(".contact-description", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.from(".contact-email", {
        scrollTrigger: {
          trigger: ".contact-email",
          start: "top 88%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-bottom", {
        scrollTrigger: {
          trigger: ".contact-bottom",
          start: "top 92%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      /* ================= FOOTER ================= */

      gsap.from(".footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
        },
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}