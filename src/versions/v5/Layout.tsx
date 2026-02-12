import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../../data/siteData";

export function V5Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = "/5";

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#fce4ec]/30 via-white to-[#e8e4f0]/40 text-[#2d2d2d] relative"
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      {/* Soft gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#e8e4f0]/60 to-[#fce4ec]/40 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#e0f2f1]/50 to-[#fff9e6]/40 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#fce4ec]/40 to-[#e8e4f0]/30 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#e8e4f0]/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={basePath} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#e8e4f0] to-[#fce4ec] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-[#6b5b95] font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-[#2d2d2d]">Code</span>
                <span className="text-[#6b5b95]">Spark</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {siteData.navigation.map((item) => {
                const isActive =
                  location.pathname === `${basePath}/${item.path}` ||
                  (item.path === "" && location.pathname === basePath);
                return (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "text-[#6b5b95]"
                        : "text-[#2d2d2d]/60 hover:text-[#2d2d2d]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill-v5"
                        className="absolute inset-0 bg-[#e8e4f0]/60 rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
              <a
                href="https://forms.gle/yUDzoJSdGACbA2No8"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 bg-[#6b5b95] text-white text-sm font-medium rounded-full hover:bg-[#5a4a84] transition-colors shadow-sm hover:shadow-md cursor-pointer"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-[#e8e4f0]/50 hover:bg-[#e8e4f0] transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-[#6b5b95] rounded-full transition-transform origin-center ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#6b5b95] rounded-full transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-[#6b5b95] rounded-full transition-transform origin-center ${
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
              className="md:hidden bg-white/90 backdrop-blur-xl border-t border-[#e8e4f0]/50"
            >
              <div className="px-6 py-6 space-y-2">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-[#2d2d2d]/70 hover:text-[#6b5b95] hover:bg-[#e8e4f0]/30 rounded-xl transition-all font-medium cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://forms.gle/yUDzoJSdGACbA2No8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 mt-4 bg-[#6b5b95] text-white font-medium rounded-xl hover:bg-[#5a4a84] transition-colors"
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
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-[#6b5b95]/20 rounded-full text-[#6b5b95] hover:bg-[#6b5b95]/10 hover:border-[#6b5b95]/40 transition-all shadow-lg cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span className="text-sm font-medium">Switch Version</span>
      </Link>

      {/* Main Content */}
      <main className="relative pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative mt-32 bg-white/50 backdrop-blur-sm border-t border-[#e8e4f0]/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to={basePath} className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#e8e4f0] to-[#fce4ec] flex items-center justify-center">
                  <span className="text-[#6b5b95] font-bold text-sm">C</span>
                </div>
                <span className="text-lg font-semibold">
                  <span className="text-[#2d2d2d]">Code</span>
                  <span className="text-[#6b5b95]">Spark</span>
                </span>
              </Link>
              <p className="text-sm text-[#2d2d2d]/60 leading-relaxed">
                {siteData.brand.tagline}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#2d2d2d] mb-4">Quick Links</h4>
              <div className="space-y-2">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    className="block text-sm text-[#2d2d2d]/60 hover:text-[#6b5b95] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold text-[#2d2d2d] mb-4">Programs</h4>
              <div className="space-y-2">
                <Link
                  to={`${basePath}/incubator`}
                  className="block text-sm text-[#2d2d2d]/60 hover:text-[#6b5b95] transition-colors"
                >
                  Incubator Program
                </Link>
                <Link
                  to={`${basePath}/event`}
                  className="block text-sm text-[#2d2d2d]/60 hover:text-[#6b5b95] transition-colors"
                >
                  Annual Event
                </Link>
                <Link
                  to={`${basePath}/for-partners`}
                  className="block text-sm text-[#2d2d2d]/60 hover:text-[#6b5b95] transition-colors"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#2d2d2d] mb-4">
                Get in Touch
              </h4>
              <div className="space-y-2">
                <a
                  href={`mailto:${siteData.brand.email}`}
                  className="block text-sm text-[#2d2d2d]/60 hover:text-[#6b5b95] transition-colors"
                >
                  {siteData.brand.email}
                </a>
                <div className="flex gap-3 mt-4">
                  {siteData.socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#e8e4f0]/50 flex items-center justify-center text-[#6b5b95] hover:bg-[#e8e4f0] transition-colors text-xs font-medium cursor-pointer"
                    >
                      {social.name.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#e8e4f0]/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#2d2d2d]/50">
              © 2025 CodeSpark. All rights reserved.
            </p>
            <p className="text-sm text-[#2d2d2d]/50">
              Building Africa's next generation of founders ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
