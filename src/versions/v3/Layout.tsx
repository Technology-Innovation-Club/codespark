import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../../data/siteData";
import { DynamicLogo } from "../../components/DynamicLogo";

export function V3Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = "/3";

  return (
    <div
      className="min-h-screen bg-[#faf8f5] text-[#2d2418]"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#2d2418]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to={basePath} className="flex items-center gap-3">
              <DynamicLogo version={3} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`${basePath}/${item.path}`}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-[#c45d3e] cursor-pointer ${
                    location.pathname === `${basePath}/${item.path}` ||
                    (item.path === "" && location.pathname === basePath)
                      ? "text-[#c45d3e]"
                      : "text-[#2d2418]/70"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-[#c45d3e] text-[#faf8f5] font-semibold rounded-full hover:bg-[#a84d32] transition-all shadow-lg shadow-[#c45d3e]/20 cursor-pointer"
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
                  className={`block h-0.5 w-full bg-[#2d2418] rounded-full transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#2d2418] rounded-full transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#2d2418] rounded-full transition-transform ${
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
              className="md:hidden bg-[#faf8f5] border-t border-[#2d2418]/10 max-h-[calc(100vh-4.25rem)] overflow-y-auto"
            >
              <div className="px-4 sm:px-6 py-6 space-y-4">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#2d2418]/70 hover:text-[#c45d3e] transition-colors font-medium cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://forms.gle/yUDzoJSdGACbA2No8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-[#c45d3e] text-[#faf8f5] font-semibold rounded-full"
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#faf8f5]/95 backdrop-blur-md border border-[#c45d3e]/30 rounded-full text-[#c45d3e] hover:bg-[#c45d3e]/10 hover:border-[#c45d3e]/50 transition-all shadow-lg cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="hidden sm:inline text-sm font-medium">Switch Version</span>
      </Link>

      {/* Main Content */}
      <main className="pt-[4.5rem] sm:pt-20 relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2d2418] text-[#faf8f5]/80 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c45d3e]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6b8f71]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <DynamicLogo version={3} compact />
              </div>
              <p className="text-[#faf8f5]/60 max-w-md leading-relaxed">
                {siteData.brand.tagline}
              </p>
              <div className="flex gap-4 mt-6">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#faf8f5]/10 rounded-full flex items-center justify-center hover:bg-[#c45d3e] transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-medium">{link.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4
                className="font-semibold text-[#faf8f5] mb-6 text-lg"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={`${basePath}/${item.path}`}
                      className="text-[#faf8f5]/60 hover:text-[#c45d3e] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="font-semibold text-[#faf8f5] mb-6 text-lg"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Get in Touch
              </h4>
              <a
                href={`mailto:${siteData.brand.email}`}
                className="text-[#c45d3e] hover:text-[#e07558] transition-colors block mb-3"
              >
                {siteData.brand.email}
              </a>
              <a
                href={`mailto:${siteData.brand.partnerEmail}`}
                className="text-[#faf8f5]/60 hover:text-[#c45d3e] transition-colors block text-sm"
              >
                Partnership Inquiries
              </a>
            </div>
          </div>

          <div className="border-t border-[#faf8f5]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#faf8f5]/40 text-sm">
              © {new Date().getFullYear()} {siteData.brand.name}. Empowering
              student founders.
            </p>
            <div className="flex items-center gap-2 text-[#faf8f5]/40 text-sm">
              <span className="w-2 h-2 bg-[#6b8f71] rounded-full animate-pulse" />
              Built with purpose
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
