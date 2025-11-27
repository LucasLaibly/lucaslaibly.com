"use client"

import { useState, useEffect } from "react"

export default function Vigil() {
  const [year, setYear] = useState(2026)
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)

  const messages = ["Be vigiliant about agents acting on your behalf", "Agentic observation without the overhead"]

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    // Wait 2 seconds before starting to type
    const initialDelay = setTimeout(() => {
      setIsTyping(true)
    }, 2000)

    return () => clearTimeout(initialDelay)
  }, [])

  useEffect(() => {
    if (!isTyping || currentLine >= messages.length) return

    const currentMessage = messages[currentLine]

    if (currentChar < currentMessage.length) {
      // Type next character
      const typingTimer = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev]
          if (!newText[currentLine]) {
            newText[currentLine] = ""
          }
          newText[currentLine] = currentMessage.slice(0, currentChar + 1)
          return newText
        })
        setCurrentChar(currentChar + 1)
      }, 50) // Typing speed

      return () => clearTimeout(typingTimer)
    } else if (currentLine < messages.length - 1) {
      const pauseTimer = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, 1000) // 1 second pause before next line

      return () => clearTimeout(pauseTimer)
    }
  }, [isTyping, currentChar, currentLine, messages])

  const handleYearClick = () => {
    if (year <= 2035) {
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
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center" style={{ minHeight: "calc(100vh - 120px)" }}>
        <div className="w-full max-w-2xl mx-4 bg-gray-900 rounded-lg border border-gray-700 shadow-2xl">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-2 rounded-t-lg flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2">vigil — terminal</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm min-h-[200px]">
            <div className="text-green-400">
              {displayedText.map((line, index) => (
                <div key={index} className="mb-2">
                  <span className="text-gray-500 mr-2">$</span>
                  {line}
                </div>
              ))}
              {currentLine < messages.length && (
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <span className={showCursor ? "opacity-100" : "opacity-0"}>▋</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
