import React from "react";

interface AboutSectionProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function AboutSection({
  isMobile,
  isTablet,
}: AboutSectionProps) {
  const skills = {
    "Languages & Frameworks": [
      "Python",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Elixir",
    ],
    "ML & AI": [
      "Machine Learning",
      "Neural Networks",
      "NLP",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
    ],
    Infrastructure: [
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Kafka",
    ],
    Security: [
      "API Security",
      "Penetration Testing",
      "Fraud Detection",
      "Auth Systems",
      "Encryption",
    ],
  };

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
      <div className="max-w-6xl mx-auto">
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
          About Me
        </h2>

        <div
          className={`grid ${
            isMobile || isTablet ? "grid-cols-1" : "grid-cols-2"
          } gap-8 mb-10`}
        >
          {/* Left Column - Story */}
          <div className="space-y-5">
            <div
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "var(--window-bg)",
                borderColor: "var(--window-border)",
              }}
            >
              <h3
                className="text-base sm:text-lg font-semibold mb-3"
                style={{ color: "var(--color-purple-400)" }}
              >
                Background
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.85,
                }}
              >
                My journey began 20+ years ago in web security, discovering
                vulnerabilities and hardening systems against threats. This
                security-first mindset became the foundation for everything I
                build—robust, scalable, and production-ready from day one.
              </p>
            </div>

            <div
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "var(--window-bg)",
                borderColor: "var(--window-border)",
              }}
            >
              <h3
                className="text-base sm:text-lg font-semibold mb-3"
                style={{ color: "var(--color-purple-400)" }}
              >
                Expertise
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed mb-3"
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.85,
                }}
              >
                As a full-stack engineer, I architect systems that process
                millions of daily requests. From fraud detection platforms
                analyzing billions of data points to job search engines serving
                5.4M+ opportunities—I build solutions that scale gracefully
                under real-world pressure.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: "var(--color-purple-600)",
                    color: "white",
                  }}
                >
                  Millions of Users
                </span>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: "var(--color-purple-600)",
                    color: "white",
                  }}
                >
                  High-Traffic Systems
                </span>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: "var(--color-purple-600)",
                    color: "white",
                  }}
                >
                  99.9% Uptime
                </span>
              </div>
            </div>

            <div
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "var(--window-bg)",
                borderColor: "var(--window-border)",
              }}
            >
              <h3
                className="text-base sm:text-lg font-semibold mb-3"
                style={{ color: "var(--color-purple-400)" }}
              >
                Current Focus
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.85,
                }}
              >
                Today, I&apos;m focused on Machine Learning and AI applications
                that solve real problems. Building tools like Notate—a
                privacy-first research assistant—where cutting-edge AI meets
                practical, user-centric design. Every project is an opportunity
                to push boundaries while maintaining security and performance
                standards.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-5">
            <div
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "var(--window-bg)",
                borderColor: "var(--window-border)",
              }}
            >
              <h3
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ color: "var(--taskbar-text)" }}
              >
                Technical Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4
                      className="text-xs font-semibold mb-2 uppercase tracking-wide"
                      style={{
                        color: "var(--taskbar-text)",
                        opacity: 0.6,
                      }}
                    >
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: "var(--taskbar-text)",
                            color: "var(--window-bg)",
                            opacity: 0.85,
                            cursor: "default",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
