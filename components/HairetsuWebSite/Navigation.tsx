import React from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isMobile: boolean;
  isDesktop: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  isMobile,
  isDesktop,
  menuOpen,
  setMenuOpen,
}: NavigationProps) {
  return (
    <>
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between ${
          isMobile ? "p-4" : "py-4 px-8"
        } backdrop-blur-sm sticky top-0 z-50`}
        style={{
          borderBottom: `1px solid var(--window-border)`,
          backgroundColor: "var(--window-bg)",
        }}
      >
        <div
          className={`${isMobile ? "text-base" : "text-lg"} font-bold`}
          style={{ color: "var(--color-purple-400)" }}
        >
          hairetsu.com
        </div>

        {/* Desktop Menu */}
        {isDesktop && (
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: "var(--taskbar-text)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-purple-400)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--taskbar-text)";
              }}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: "var(--taskbar-text)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-purple-400)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--taskbar-text)";
              }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                color: "white",
                backgroundColor: "var(--color-purple-600)",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        {!isDesktop && (
          <button
            className="p-2 rounded-lg transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "var(--taskbar-text)",
              backgroundColor: menuOpen ? "var(--taskbar-hover)" : "transparent",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && !isDesktop && (
        <div
          className="border-b backdrop-blur-sm"
          style={{
            backgroundColor: "var(--window-bg)",
            borderColor: "var(--window-border)",
          }}
        >
          <div
            className={`flex flex-col space-y-3 ${isMobile ? "p-4" : "p-6"}`}
          >
            <a
              href="#about"
              className="text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200"
              style={{
                color: "var(--taskbar-text)",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--taskbar-hover)";
                e.currentTarget.style.color = "var(--color-purple-400)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--taskbar-text)";
              }}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200"
              style={{
                color: "var(--taskbar-text)",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--taskbar-hover)";
                e.currentTarget.style.color = "var(--color-purple-400)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--taskbar-text)";
              }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-200 text-center"
              style={{
                color: "white",
                backgroundColor: "var(--color-purple-600)",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
