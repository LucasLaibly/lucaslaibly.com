"use client"

import { useState } from "react"

export default function Vigil() {
  const [year, setYear] = useState(2026)

  const handleYearClick = () => {
    if (year < 2035) {
      setYear(year + 1)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-start px-8 py-8 max-w-4xl mx-auto">
        <div className="w-80">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-medium text-white">Lucas Laibly</h1>
          </a>
          <p className="text-gray-400 text-sm mb-4">Technical Product Manager</p>
          <nav className="flex gap-6">
            <a
              href="/lucaslaibly_resume.pdf"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2"
              rel="noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v2H6v-2z" />
              </svg>
              Resume
            </a>
            <a href="/vigil" className="text-gray-300 hover:text-white transition-colors text-sm">
              Vigil
            </a>
          </nav>
        </div>
        <div className="flex gap-4">
          <a
            href="folder/lucaslaibly_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/LucasLaibly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-balance mb-8 text-center">
            Coming Soon{" "}
            {year < 2035 && (
              <span
                onClick={handleYearClick}
                className="cursor-pointer hover:text-gray-300 transition-colors inline-block"
              >
                {year}
              </span>
            )}
          </h2>
        </section>

        <section className="mb-16">
          <div className="relative flex items-center justify-between max-w-2xl mx-auto px-8">
            {/* Left Bot */}
            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-20">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>

            {/* Connection Line */}
            <div className="absolute left-14 right-14 h-0.5 bg-gray-700"></div>

            {/* Animated Ball */}
            <div
              className="absolute w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50 z-10"
              style={{
                animation: "moveBall 12s ease-in-out infinite",
              }}
            ></div>

            {/* Right Bot */}
            <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center z-20">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>

          <style jsx>{`
            @keyframes moveBall {
              0% {
                left: 3rem;
              }
              33.33% {
                left: calc(100% - 3rem);
              }
              50% {
                left: calc(100% - 3rem);
              }
              83.33% {
                left: 3rem;
              }
              100% {
                left: 3rem;
              }
            }
          `}</style>
        </section>

        {/* Feature Boxes Section */}
        <section>
          <div className="space-y-6">
            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-3">
                <h4 className="text-white font-medium text-lg">Agentic Transparency </h4>
                <p className="text-gray-400">
                  See the details about how your agents are communicating, both to customers and to other agents.
                </p>
              </div>
            </div>

            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-3">
                <h4 className="text-white font-medium text-lg">Agentic Freedoms </h4>
                <p className="text-gray-400">
                  Set tolerances and thresholds for your agents to operate within, avoiding dead end conversations.
                </p>
              </div>
            </div>

            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-3">
                <h4 className="text-white font-medium text-lg">Agentic Trust</h4>
                <p className="text-gray-400">
                  Vigil acts as second level of evaluation before responses go to customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
