"use client";

import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiApachemaven,
  SiJson,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
  SiDocker,
  SiVercel,
  SiPython,
  SiOpencv,
} from "react-icons/si";
import { FaJava, FaAws, FaCss3Alt } from "react-icons/fa6";
import {
  TbClick,
  TbApi,
  TbDatabase,
  TbSchema,
  TbPhotoSearch,
  TbEyeCheck,
  TbCube,
  TbBinaryTree,
} from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  brandColor: string;
  isPrimary?: boolean;
}

interface TechCategory {
  index: string;
  title: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    index: "01",
    title: "FRONTEND DEVELOPMENT",
    items: [
      { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
      { name: "React.js", icon: SiReact, brandColor: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, brandColor: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, brandColor: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, brandColor: "#1572B6" },
      { name: "DOM & Events", icon: TbClick, brandColor: "#94A3B8" },
      { name: "REST API Integration", icon: TbApi, brandColor: "#94A3B8" },
    ],
  },
  {
    index: "02",
    title: "BACKEND DEVELOPMENT",
    items: [
      { name: "Java", icon: FaJava, brandColor: "#ED8B00", isPrimary: true },
      { name: "Spring Boot", icon: SiSpringboot, brandColor: "#6DB33F", isPrimary: true },
      { name: "Spring Web / MVC", icon: SiSpring, brandColor: "#6DB33F" },
      { name: "REST APIs", icon: TbApi, brandColor: "#94A3B8" },
      { name: "Spring Data JPA", icon: SiSpring, brandColor: "#6DB33F" },
      { name: "Hibernate", icon: SiHibernate, brandColor: "#BCAE79" },
      { name: "Maven", icon: SiApachemaven, brandColor: "#C71A36" },
      { name: "JSON", icon: SiJson, brandColor: "#94A3B8" },
    ],
  },
  {
    index: "03",
    title: "DATABASES & PERSISTENCE",
    items: [
      { name: "SQL", icon: TbDatabase, brandColor: "#38BDF8" },
      { name: "MySQL", icon: SiMysql, brandColor: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" },
      { name: "Database Design", icon: TbSchema, brandColor: "#94A3B8" },
    ],
  },
  {
    index: "04",
    title: "CLOUD & DEVELOPER TOOLS",
    items: [
      { name: "AWS", icon: FaAws, brandColor: "#FF9900" },
      { name: "Git", icon: SiGit, brandColor: "#F05032" },
      { name: "GitHub", icon: SiGithub, brandColor: "#FFFFFF" },
      { name: "Linux / Terminal", icon: SiLinux, brandColor: "#FCC624" },
      { name: "Maven", icon: SiApachemaven, brandColor: "#C71A36" },
      { name: "Postman", icon: SiPostman, brandColor: "#FF6C37" },
      { name: "Docker", icon: SiDocker, brandColor: "#2496ED" },
      { name: "Vercel", icon: SiVercel, brandColor: "#FFFFFF" },
    ],
  },
  {
    index: "05",
    title: "ARCHITECTURE & AI",
    items: [
      { name: "Python", icon: SiPython, brandColor: "#38BDF8" },
      { name: "Image Processing", icon: TbPhotoSearch, brandColor: "#94A3B8" },
      { name: "Computer Vision", icon: TbEyeCheck, brandColor: "#94A3B8" },
      { name: "OpenCV", icon: SiOpencv, brandColor: "#5C3EE8" },
      { name: "Object-Oriented Programming", icon: TbCube, brandColor: "#94A3B8" },
      { name: "Data Structures", icon: TbBinaryTree, brandColor: "#94A3B8" },
    ],
  },
];

export default function TechDNA() {
  return (
    <div className="skills-grid">
      {CATEGORIES.map((category) => (
        <div key={category.index} className="skill-card">
          <div className="skill-card-top">
            <span className="skill-index">{category.index}</span>
            <h3 className="skill-card-title">{category.title}</h3>
          </div>

          <div className="skill-card-divider" />

          <div className="skill-list">
            {category.items.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className={`skill-item ${tech.isPrimary ? "skill-item-primary" : ""}`}
                >
                  <span
                    className="skill-item-icon"
                    style={{ color: tech.brandColor }}
                  >
                    <IconComponent size={19} />
                  </span>
                  <span className="skill-item-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
