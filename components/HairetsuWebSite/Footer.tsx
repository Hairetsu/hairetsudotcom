import React from "react";

interface FooterProps {
  isMobile: boolean;
}

export default function Footer({ isMobile }: FooterProps) {
  return (
    <footer
      className={`${isMobile ? "px-4 py-6" : "px-8 py-8"} backdrop-blur-sm`}
      style={{
        borderTop: `1px solid var(--window-border)`,
        backgroundColor: "var(--window-bg)",
      }}
    >
      <div
        className={`flex ${
          isMobile ? "flex-col gap-4" : "flex-row gap-0"
        } justify-between items-center max-w-6xl mx-auto`}
      >
        <div className={isMobile ? "text-center" : "text-left"}>
          <p
            className={`${
              isMobile ? "text-xs mb-1" : "text-sm mb-1"
            } font-semibold`}
            style={{
              color: "var(--color-purple-400)",
            }}
          >
            hairetsu.com
          </p>
          <p
            className={`${isMobile ? "text-xs" : "text-xs"}`}
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.6,
            }}
          >
            © 2025 Thomas Whidden. All rights reserved.
          </p>
        </div>
        <div className={`flex items-center ${isMobile ? "gap-3" : "gap-5"}`}>
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
          <a
            href="https://www.instagram.com/hairetsu/"
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
            Instagram ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
