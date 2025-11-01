import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

interface ContactSectionProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function ContactSection({
  isMobile,
  isTablet,
}: ContactSectionProps) {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hairetsu@hairetsu.com",
      href: "mailto:hairetsu@hairetsu.com",
      primary: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "hairetsu",
      href: "https://github.com/hairetsu",
      primary: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "thomas-whidden",
      href: "https://www.linkedin.com/in/hairetsu/",
      primary: false,
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      value: "@hairetsu",
      href: "https://x.com/hairetsu",
      primary: false,
    },
  ];

  return (
    <section
      id="contact"
      className={`${
        isMobile ? "px-4 py-8" : isTablet ? "px-6 py-12" : "px-8 py-16"
      }`}
      style={{
        borderTop: `1px solid var(--window-border)`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`${
            isMobile
              ? "text-xl mb-6 text-center"
              : isTablet
              ? "text-2xl mb-7 text-center"
              : "text-3xl mb-8 text-left"
          } font-semibold`}
          style={{ color: "var(--taskbar-text)" }}
        >
          Let&apos;s Build Something Together
        </h2>
        <div className={`max-w-3xl ${isMobile ? "mb-8" : "mb-10"}`}>
          <p
            className={`${
              isMobile ? "text-sm text-center" : "text-base text-left"
            } leading-relaxed mb-3`}
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.85,
            }}
          >
            Whether you&apos;re looking to scale your infrastructure, build an
            AI-powered application, or secure your platform—I&apos;m here to
            help. Let&apos;s discuss how we can turn your vision into reality.
          </p>
          <p
            className={`${
              isMobile ? "text-xs text-center" : "text-sm text-left"
            } leading-relaxed`}
            style={{
              color: "var(--taskbar-text)",
              opacity: 0.6,
            }}
          >
            Available for consulting, contract work, and exciting full-time
            opportunities. Typically respond within 24 hours.
          </p>
        </div>

        <div
          className={`grid ${
            isMobile
              ? "grid-cols-1 gap-4"
              : isTablet
              ? "grid-cols-2 gap-4"
              : "grid-cols-4 gap-5"
          } mb-8`}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.primary ? undefined : "_blank"}
                rel={method.primary ? undefined : "noopener noreferrer"}
                className={`group p-5 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center text-center ${
                  method.primary && !isMobile && !isTablet ? "col-span-2" : ""
                }`}
                style={{
                  backgroundColor: method.primary
                    ? "var(--color-purple-600)"
                    : "var(--window-bg)",
                  borderColor: method.primary
                    ? "transparent"
                    : "var(--window-border)",
                  textDecoration: "none",
                }}
              >
                <Icon
                  size={isMobile ? 24 : method.primary ? 28 : 24}
                  className="mb-3"
                  style={{
                    color: method.primary ? "white" : "var(--color-purple-400)",
                  }}
                />
                <h3
                  className={`${
                    isMobile ? "text-sm" : "text-base"
                  } font-semibold mb-1`}
                  style={{
                    color: method.primary ? "white" : "var(--taskbar-text)",
                  }}
                >
                  {method.label}
                </h3>
                <p
                  className={`${isMobile ? "text-xs" : "text-sm"} break-all`}
                  style={{
                    color: method.primary ? "white" : "var(--taskbar-text)",
                    opacity: method.primary ? 0.9 : 0.7,
                  }}
                >
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
