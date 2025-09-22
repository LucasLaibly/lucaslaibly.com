export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-start px-8 py-8 max-w-4xl mx-auto">
        <div className="w-80">
          <h1 className="text-xl font-medium text-white">Lucas Laibly</h1>
          <p className="text-gray-400 text-sm mb-4">Technical Product Manager</p>
          <nav className="flex gap-6">
          <a
            href="/lucaslaibly_resume.pdf"
            target="_blank"
            className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v2H6v-2z" />
            </svg>
            Resume
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
        {/* Hero Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-balance mb-8">
            {"I am a technical product manager who started as a software engineer. I do not like to sit around and wait for an assignment."}               
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            I am currently working as a product manager for integrations at Informa TechTarget. My previous expereince is based in software engineering and technology consultant.
            I am fascinated with companies and people who move fast and take risks to redefine the world around us.
          </p>
        </section>

        {/* Previous Work Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-medium mb-6">Job History</h3>

          <div className="space-y-6">
            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Product Manager, Integrations @ Informa TechTarget</span>
                <span className="text-gray-400">2024-Current</span>
              </div>
            </div>

            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Product Manager @ Simon-Kucher Engine</span>
                <span className="text-gray-400">2022-2024</span>
              </div>
            </div>

            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Software Engineer @ Bateau</span>
                <span className="text-gray-400">2021-2022</span>
              </div>
            </div>

            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Software Engineer | Tech Lead @ Wisconsin Company</span>
                <span className="text-gray-400">2019-2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* Delivered Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-medium mb-6">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Tile - Financial Services */}
            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-4">
                <h4 className="text-white font-medium leading-tight">
                  Led start to finish application development for financial services.
                </h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• 18-month project from start to finish.</li>
                  <li>• Early results showed 70% increase in sales wins.</li>
                </ul>
              </div>
            </div>

            {/* Second Tile - Centralized Portal */}
            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-4">
                <h4 className="text-white font-medium leading-tight">
                  Led start to finish development of partner portal.
                </h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Worked as tech lead, product owner, and backend engineer to ensure success.</li>
                  <li>• Onboarded 3,000+ partnered organizations.</li>
                </ul>
              </div>
            </div>

            {/* Third Tile - Integration Platform */}
            <div className="relative bg-gray-900/50 border border-gray-800 p-6 group hover:bg-gray-900/70 transition-colors">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-white"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-white"></div>

              <div className="space-y-4">
                <h4 className="text-white font-medium leading-tight">
                  Built new suite of integrations to enable a new cohort of customers.
                </h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Focused on a new cohort of the customer base to refresh product offering. </li>
                  <li>• Enabled 110 clients at launch.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
