import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export default function HeroSection({
  isMobile,
  isTablet,
  isDesktop,
}: HeroSectionProps) {
  return (
    <section
      className={`${
        isMobile ? "px-4 py-8" : isTablet ? "px-6 py-12" : "px-8 py-16"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid ${isDesktop ? "grid-cols-2" : "grid-cols-1"} ${
            isMobile ? "gap-6" : isTablet ? "gap-8" : "gap-12"
          } items-center`}
        >
          {/* Text Content */}
          <div
            className={`${
              isMobile ? "order-2" : isDesktop ? "order-1" : "order-2"
            } ${isMobile || isTablet ? "text-center" : "text-left"}`}
          >
            <p
              className={`${
                isMobile ? "text-xs mb-4" : "text-sm mb-6"
              } tracking-wide font-medium`}
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.8,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Washington DC • 20+ Years Experience
            </p>

            <h1
              className={`${
                isMobile
                  ? "text-3xl mb-4"
                  : isTablet
                  ? "text-4xl mb-5"
                  : "text-6xl mb-6"
              } font-bold leading-tight`}
            >
              <span
                className="font-bold"
                style={{ color: "var(--taskbar-text)" }}
              >
                Thomas Whidden
              </span>
            </h1>

            <div className={isMobile ? "mb-6" : "mb-8"}>
              <p
                className={`${
                  isMobile
                    ? "text-lg mb-3"
                    : isTablet
                    ? "text-xl mb-4"
                    : "text-2xl mb-4"
                } font-medium leading-relaxed`}
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.9,
                }}
              >
                ML Engineer • Full Stack Developer • Security Expert
              </p>
              <p
                className={`${
                  isMobile ? "text-sm" : "text-base"
                } leading-relaxed max-w-2xl`}
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.75,
                }}
              >
                Architecting high-performance systems that handle millions of
                daily requests. From web security foundations to cutting-edge ML
                applications, I build solutions that scale with purpose and
                precision.
              </p>
            </div>

            <div
              className={`flex ${
                isMobile
                  ? "flex-col gap-3 justify-center"
                  : isTablet
                  ? "flex-row gap-4 justify-center"
                  : "flex-row gap-4 justify-start"
              } mb-6`}
            >
              <button
                className={`group flex items-center justify-center gap-3 ${
                  isMobile ? "px-5 py-3 text-xs" : "px-8 py-4 text-sm"
                } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg`}
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                  border: "none",
                  minWidth: "0",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                  flex: "1 1 auto",
                }}
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Featured Work
              </button>
              <button
                className={`flex items-center justify-center gap-3 ${
                  isMobile ? "px-5 py-3 text-xs" : "px-8 py-4 text-sm"
                } font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg`}
                style={{
                  backgroundColor: "transparent",
                  color: "var(--taskbar-text)",
                  border: `2px solid var(--window-border)`,
                  minWidth: "0",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                  flex: "1 1 auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--taskbar-hover)";
                  e.currentTarget.style.borderColor = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "var(--window-border)";
                }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex ${
                isMobile || isTablet ? "justify-center" : "justify-start"
              } gap-4`}
            >
              <a
                href="https://github.com/hairetsu"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isMobile ? "text-xs" : "text-sm"
                } font-medium transition-all duration-200 hover:scale-110`}
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.6,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.color = "var(--taskbar-text)";
                }}
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/hairetsu/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isMobile ? "text-xs" : "text-sm"
                } font-medium transition-all duration-200 hover:scale-110`}
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.6,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.color = "var(--taskbar-text)";
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://x.com/hairetsu"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isMobile ? "text-xs" : "text-sm"
                } font-medium transition-all duration-200 hover:scale-110`}
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.6,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.color = "var(--taskbar-text)";
                }}
              >
                X ↗
              </a>
            </div>
          </div>

          <div
            className={`${
              isMobile ? "order-1" : isDesktop ? "order-2" : "order-1"
            } flex justify-center`}
          >
            <div className="relative">
              {/* Gradient background effect */}
              <div
                className={`absolute inset-0 ${
                  isMobile ? "w-48 h-48" : isTablet ? "w-48 h-48" : "w-64 h-64"
                } rounded-full blur-2xl opacity-30`}
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-purple-600), var(--color-blue-400))",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              ></div>
              <Image
                src="/hairetsu.png"
                alt="Thomas Whidden"
                className={`${
                  isMobile ? "w-48 h-48" : isTablet ? "w-48 h-48" : "w-64 h-64"
                } rounded-full object-cover shadow-2xl relative z-10`}
                width={356}
                height={356}
                style={{
                  filter: "grayscale(10%)",
                  transition: "all 0.4s ease",
                  maxWidth: "100%",
                  height: "auto",
                  border: "3px solid var(--window-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.borderColor = "var(--color-purple-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(10%)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "var(--window-border)";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
