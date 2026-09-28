"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;

      follower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .skill-card",
    );

    const enterInteractive = () => {
      cursor.classList.add("cursor-active");
      follower.classList.add("cursor-follower-active");
    };

    const leaveInteractive = () => {
      cursor.classList.remove("cursor-active");
      follower.classList.remove("cursor-follower-active");
    };

    window.addEventListener("mousemove", moveCursor);

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", enterInteractive);
      element.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", enterInteractive);
        element.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}