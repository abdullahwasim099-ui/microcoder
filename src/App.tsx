/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-6 font-mono">
      <div className="max-w-2xl w-full space-y-8">
        <header className="space-y-4">
          <div className="flex items-center gap-4 text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="16" height="16" x="4" y="4" rx="2" />
              <rect width="6" height="6" x="9" y="9" rx="1" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M19 5.5l-1.5 1.5" />
              <path d="M6.5 18.5L5 20" />
              <path d="M19 18.5l-1.5-1.5" />
              <path d="M6.5 5.5L5 4" />
            </svg>
            <h1 className="text-2xl font-bold tracking-tight">Universal IoT Architect</h1>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            System Initialized. Awaiting input for universal embedded development across any MCU architecture.
          </p>
        </header>
        
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-sm text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Loaded Architectures & Capabilities
          </div>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">▹</span>
              <span><strong>Supported MCUs:</strong> RP2040/2350, ESP32/8266, ARM Cortex-M, RISC-V, AVR, & more.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">▹</span>
              <span><strong>Hardware Engineering:</strong> ASCII Schematics, BOM generation, precise component calculations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">▹</span>
              <span><strong>Circuit & Power:</strong> Logic level safety checks, power budgets, and current draw estimates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">▹</span>
              <span><strong>Firmware:</strong> MicroPython, CircuitPython, C/C++ with strict memory & uasyncio optimization.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">▹</span>
              <span><strong>Full-Stack IoT:</strong> Async socket servers, self-contained HTML/JS dashboards, & embedded user guides.</span>
            </li>
          </ul>
        </div>
        
        <footer className="text-sm text-slate-500 flex items-center justify-between border-t border-slate-800 pt-4">
          <span>Status: <span className="text-emerald-400">Online</span></span>
          <span>Ready for your first project request.</span>
        </footer>
      </div>
    </div>
  );
}
