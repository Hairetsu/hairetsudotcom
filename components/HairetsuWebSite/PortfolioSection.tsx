import React from "react";

interface PortfolioSectionProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function PortfolioSection({
  isMobile,
  isTablet,
}: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className={`${
        isMobile ? "px-4 py-8" : isTablet ? "px-6 py-12" : "px-8 py-16"
      } border-t`}
      style={{
        borderColor: "var(--window-border)",
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
          } font-light`}
          style={{ color: "var(--taskbar-text)" }}
        >
          Featured Projects
        </h2>
        <div
          className={`grid ${
            isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"
          } ${isMobile ? "gap-4" : "gap-6"}`}
        >
          {/* Notate */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://notate.hairetsu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Notate
              </a>
              <a
                href="https://notate.hairetsu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                Visit →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              AI Research Assistant
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              Cross-platform desktop application enabling researchers to analyze
              documents, webpages, and videos using AI—all while maintaining
              complete data privacy with local-first architecture. Built for
              power users who refuse to compromise on security.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Python
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                TypeScript
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Electron
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                SQLite
              </span>
            </div>
          </div>

          {/* danielleguelbart.com */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://www.danielleguelbart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Danielle Guelbart
              </a>
              <a
                href="https://www.danielleguelbart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                Visit →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              E-Commerce Portfolio
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              Full-stack e-commerce platform for NYC-based illustrator and
              photographer. Seamless integration with Stripe payment processing,
              print-on-demand fulfillment, and real-time inventory management.
              Built for artists who want to sell their work professionally.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Next.js
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Stripe
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Printify
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Convex
              </span>
            </div>
          </div>
          {/* Apex Ads */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://apexads.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Apex Ads
              </a>
              <a
                href="https://apexads.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                Visit →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              Ad Campaign Platform
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              All-in-one platform to launch high-converting ad campaigns across
              Facebook, Google, TikTok, and more. Paste your product link,
              choose a template, and deploy multi-platform campaigns with one
              click—eliminating the complexity of managing multiple ad managers.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Next.js
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Redis
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Clickhouse
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Convex
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Postgres
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Cloudflare
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Go
              </span>
            </div>
          </div>

          {/* Hiring.fm */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://hiring.fm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Hiring.fm
              </a>
              <a
                href="https://hiring.fm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                Visit →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              Job Search Engine
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              High-performance job search platform aggregating 5.4M+
              opportunities from multiple sources. Features intelligent
              matching, user profiles, and resume tools—architected to handle
              millions of daily searches with sub-second response times.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Next.js
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                MySQL
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Python
              </span>
            </div>
          </div>

          {/* Not T3 Chat */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://github.com/hairetsu/NOT-T3-Chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Not T3 Chat
              </a>
              <a
                href="https://github.com/hairetsu/NOT-T3-Chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                GitHub →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              Open Source AI Chat
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              Full-featured AI chat application built for T3.Chat&apos;s
              cloneathon competition. Multi-provider support (OpenAI, Anthropic,
              Gemini), conversation branching, and intelligent retry logic—all
              on Next.js 15&apos;s latest features with type-safe database
              access.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Next.js 15
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                TypeScript
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Prisma
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Multiple AI
              </span>
            </div>
          </div>

          {/* Hairetsu.com */}
          <div
            className="group p-4 sm:p-6 rounded-lg border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <a
                href="https://github.com/hairetsu/hairetsudotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                style={{
                  color: "var(--taskbar-text)",
                }}
              >
                Hairetsu.com
              </a>
              <a
                href="https://github.com/hairetsu/hairetsudotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "var(--color-purple-600)",
                  color: "white",
                }}
              >
                GitHub →
              </a>
            </div>
            <p
              className="text-xs sm:text-sm font-medium mb-2"
              style={{
                color: "var(--color-purple-400)",
                opacity: 0.9,
              }}
            >
              Interactive Portfolio
            </p>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
              style={{
                color: "var(--taskbar-text)",
                opacity: 0.8,
              }}
            >
              Open-source portfolio featuring a fully functional desktop OS
              interface in the browser. Demonstrates advanced React patterns,
              state management, and responsive design—creating an engaging,
              memorable user experience that stands out.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Next.js
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                TypeScript
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                React
              </span>
              <span
                className="px-2 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: "var(--taskbar-text)",
                  color: "var(--window-bg)",
                  opacity: 0.8,
                }}
              >
                Open Source
              </span>
            </div>
          </div>

          {/* Vocals.dev */}
          <div
            className="group p-4 sm:p-6 rounded-lg border relative transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="absolute top-3 left-0 right-0 flex justify-center z-10">
              <span
                className="text-xs px-3 py-1 rounded-full border backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.2)",
                  borderColor: "rgba(255, 165, 0, 0.4)",
                  color: "var(--taskbar-text)",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  opacity: 0.95,
                }}
              >
                Under Development
              </span>
            </div>
            <div className="pt-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <a
                  href="https://www.vocals.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                  style={{
                    color: "var(--taskbar-text)",
                  }}
                >
                  Vocals.dev
                </a>
                <a
                  href="https://www.vocals.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--color-purple-600)",
                    color: "white",
                  }}
                >
                  Visit →
                </a>
              </div>
              <p
                className="text-xs sm:text-sm font-medium mb-2"
                style={{
                  color: "var(--color-purple-400)",
                  opacity: 0.9,
                }}
              >
                Voice AI SDK Platform
              </p>
              <p
                className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.8,
                }}
              >
                Developer-first voice AI platform providing SDKs and tools to
                build custom voice chatbots and interactive applications.
                Real-time speech processing with enterprise-grade reliability.
                Currently in closed beta with select partners.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Voice AI
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  SDK
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Speech-to-Text
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Text-to-Speech
                </span>
              </div>
            </div>
          </div>
          <div
            className="group p-4 sm:p-6 rounded-lg border relative transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col"
            style={{
              backgroundColor: "var(--window-bg)",
              borderColor: "var(--window-border)",
            }}
          >
            <div className="absolute top-3 left-0 right-0 flex justify-center z-10">
              <span
                className="text-xs px-3 py-1 rounded-full border backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.2)",
                  borderColor: "rgba(255, 165, 0, 0.4)",
                  color: "var(--taskbar-text)",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  opacity: 0.95,
                }}
              >
                Under Development
              </span>
            </div>
            <div className="pt-6 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <a
                  href="https://decipher.hairetsu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-semibold transition-colors hover:underline"
                  style={{
                    color: "var(--taskbar-text)",
                  }}
                >
                  Decipher
                </a>
                <a
                  href="https://decipher.hairetsu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: "var(--color-purple-600)",
                    color: "white",
                  }}
                >
                  Visit →
                </a>
              </div>
              <p
                className="text-xs sm:text-sm font-medium mb-2"
                style={{
                  color: "var(--color-purple-400)",
                  opacity: 0.9,
                }}
              >
                ML-Powered Fraud Detection
              </p>
              <p
                className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow"
                style={{
                  color: "var(--taskbar-text)",
                  opacity: 0.8,
                }}
              >
                Enterprise fraud and spam protection system built for
                high-traffic applications. Custom ML models provide real-time
                threat detection while processing millions of requests daily.
                Low-latency architecture ensures security without compromising
                user experience.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Python
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Next.js
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  Elixir
                </span>
                <span
                  className="px-2 py-1 text-xs rounded-full font-medium"
                  style={{
                    backgroundColor: "var(--taskbar-text)",
                    color: "var(--window-bg)",
                    opacity: 0.8,
                  }}
                >
                  MySQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
