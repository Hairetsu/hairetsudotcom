import React from "react";

interface AboutSectionProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function AboutSection({
  isMobile,
  isTablet,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`${
        isMobile ? "px-4 py-8" : isTablet ? "px-6 py-12" : "px-8 py-16"
      }`}
      style={{
        borderTop: `1px solid var(--window-border)`,
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`${
            isMobile
              ? "text-xl mb-4 text-center"
              : isTablet
              ? "text-2xl mb-5 text-center"
              : "text-3xl mb-6 text-left"
          } font-light`}
          style={{ color: "var(--taskbar-text)" }}
        >
          About Me
        </h2>
        <div className="max-w-3xl">
          <p
            className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4"
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.8,
            }}
          >
            My career started two decades ago in web security, hacking APIs and
            finding vulnerabilities. That foundation shaped how I approach
            development: security-first, robust, and built to scale.
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4"
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.8,
            }}
          >
            As a full stack developer, I&apos;ve architected systems handling
            millions of daily requests, from fraud detection platforms to job
            search engines with over 5.4M+ opportunities. I specialize in
            building solutions that scale gracefully under pressure.
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.8,
            }}
          >
            Now focused on Machine Learning and AI, I&apos;m creating tools like
            Notate that empower researchers while keeping their data private.
            Every project is a chance to merge cutting-edge technology with
            real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}
