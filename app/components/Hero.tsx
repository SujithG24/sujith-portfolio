"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroScene from "./HeroScene";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-name-line",
          {
            y: 130,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
          },
          "-=0.35",
        )
        .from(
          ".hero-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.5",
        )
        .from(
          ".hero-actions",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const grid = gridRef.current;
    const glow = glowRef.current;

    if (!hero || !grid || !glow) return;

    const handleMouseMove = (event: MouseEvent) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  gsap.to(grid, {
    x: x * 70,
    y: y * 70,
    duration: 1.2,
    ease: "power3.out",
    overwrite: true,
  });

  gsap.to(glow, {
    x: x * 300,
    y: y * 220,
    duration: 1.5,
    ease: "power3.out",
    overwrite: true,
  });

  gsap.to(".hero-content", {
    x: x * 18,
    y: y * 12,
    duration: 1.2,
    ease: "power3.out",
    overwrite: true,
  });

  gsap.to(".hero-title", {
    x: x * 12,
    y: y * 8,
    duration: 1.4,
    ease: "power3.out",
    overwrite: true,
  });
};

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <HeroScene />
      <div ref={gridRef} className="hero-grid" />

      <div ref={glowRef} className="hero-glow" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          JAVA · FULL STACK · SOFTWARE ENGINEER
        </div>

        <h1 className="hero-title">
          <span className="hero-name-line">
            SUJITH<span className="hero-muted">G.</span>
          </span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            I build modern software systems where
            <br />
            engineering meets experience.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button primary">
              VIEW MY WORK
              <span>↘</span>
            </a>

            <a href="#contact" className="hero-button secondary">
              CONTACT
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}