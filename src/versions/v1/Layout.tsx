import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../../data/siteData";
import { DynamicLogo } from "../../components/DynamicLogo";

export function V1Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = "/1";

  return (
    <div
      className="min-h-screen bg-[#0a0f1c] text-white"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/95 backdrop-blur-md border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to={basePath} className="flex items-center gap-2">
              <DynamicLogo version={1} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`${basePath}/${item.path}`}
                  className={`text-sm tracking-wide transition-colors hover:text-amber-400 cursor-pointer ${
                    location.pathname === `${basePath}/${item.path}` ||
                    (item.path === "" && location.pathname === basePath)
                      ? "text-amber-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0f1c] border-t border-[#1e293b] max-h-[calc(100vh-4.25rem)] overflow-y-auto"
            >
              <div className="px-4 sm:px-6 py-4 space-y-4">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-300 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://forms.gle/yUDzoJSdGACbA2No8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-[#0a0f1c] font-semibold rounded-lg"
                >
                  Apply Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Version Switcher Button */}
      <Link
        to="/"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0a0f1c]/90 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all shadow-lg cursor-pointer group"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="hidden sm:inline text-sm font-medium">Switch Version</span>
      </Link>

      {/* Main Content */}
      <main className="pt-[4.5rem] sm:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#060a14] border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <DynamicLogo version={1} compact />
              </div>
              <p className="text-gray-400 max-w-md">{siteData.brand.tagline}</p>
            </div>
            <div>
              <h4
                className="font-semibold text-amber-400 mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={`${basePath}/${item.path}`}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="font-semibold text-amber-400 mb-4"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Connect
              </h4>
              <div className="space-y-2">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${siteData.brand.email}`}
                className="block mt-4 text-amber-400 hover:text-amber-300 cursor-pointer"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1e293b] text-center text-gray-500 text-sm">
            Made with ♥ in Africa. © 2025 CodeSpark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
