import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../../data/siteData";
import { DynamicLogo } from "../../components/DynamicLogo";

export function V2Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = "/2";

  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: '"Archivo", sans-serif' }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to={basePath} className="flex items-center gap-3">
              <DynamicLogo version={2} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`${basePath}/${item.path}`}
                  className={`text-sm font-bold uppercase tracking-wider hover:underline decoration-4 underline-offset-4 cursor-pointer ${
                    location.pathname === `${basePath}/${item.path}` ||
                    (item.path === "" && location.pathname === basePath)
                      ? "underline"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white font-black uppercase tracking-wider hover:bg-gray-900 transition-colors cursor-pointer"
              >
                Apply
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-8 h-6 flex flex-col justify-between">
                <span
                  className={`block h-1 w-full bg-black transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />
                <span
                  className={`block h-1 w-full bg-black transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-1 w-full bg-black transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
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
              className="md:hidden bg-white border-t-4 border-black max-h-[calc(100vh-4.25rem)] overflow-y-auto"
            >
              <div className="px-4 sm:px-6 py-6 space-y-4">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold uppercase tracking-wider hover:underline cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://forms.gle/yUDzoJSdGACbA2No8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-black text-white font-black uppercase tracking-wider"
                >
                  Apply
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Version Switcher Button */}
      <Link
        to="/"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="hidden sm:inline text-sm font-bold uppercase tracking-wider">Switch</span>
      </Link>

      {/* Main Content */}
      <main className="pt-[4.5rem] sm:pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <DynamicLogo version={2} compact />
              </div>
              <p className="text-gray-400 max-w-md uppercase tracking-wide text-sm">
                {siteData.brand.tagline}
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-wider mb-4">
                Links
              </h4>
              <ul className="space-y-2">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={`${basePath}/${item.path}`}
                      className="text-gray-400 hover:text-white uppercase text-sm tracking-wide cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="space-y-2">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white uppercase text-sm tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm uppercase tracking-wider">
            © 2025 CodeSpark. Built in Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}
