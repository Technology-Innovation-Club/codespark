import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteData } from "../../data/siteData";
import { DynamicLogo } from "../../components/DynamicLogo";

export function V4Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = "";
  const attendLink = "https://chat.whatsapp.com/LQ33JW7yiJAKs8Cg85LXKX";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen bg-[#0a0a1a] text-white relative overflow-hidden"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 255, 240, 0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 240, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Circuit Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00fff0]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff00ff]/30 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-[#00fff0]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to={basePath || "/"} className="flex items-center gap-3 group">
              <DynamicLogo version={4} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteData.navigation.map((item) => {
                const isActive =
                  location.pathname === `${basePath}/${item.path}` ||
                  (item.path === "" && (location.pathname === basePath || location.pathname === "/"));
                return (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-all cursor-pointer ${
                      isActive
                        ? "text-[#00fff0]"
                        : "text-white/60 hover:text-white"
                    }`}
                    style={{ fontFamily: '"Space Mono", monospace' }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-[#00fff0]/10 border border-[#00fff0]/50"
                        style={{
                          clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                          boxShadow: "0 0 15px rgba(0, 255, 240, 0.3)",
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
              <a
                href={attendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 bg-[#ff00ff] text-white font-bold uppercase tracking-wider transition-all hover:bg-[#ff00ff]/80 cursor-pointer"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
                  boxShadow: "0 0 25px rgba(255, 0, 255, 0.5)",
                }}
              >
                Attend
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-[#00fff0]/50 bg-[#1a1a2e]"
              style={{ boxShadow: "0 0 10px rgba(0, 255, 240, 0.3)" }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-[#00fff0]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </svg>
              ) : (
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className="block h-0.5 w-full bg-[#00fff0]"
                    style={{ boxShadow: "0 0 5px #00fff0" }}
                  />
                  <span
                    className="block h-0.5 w-full bg-[#00fff0]"
                    style={{ boxShadow: "0 0 5px #00fff0" }}
                  />
                  <span
                    className="block h-0.5 w-full bg-[#00fff0]"
                    style={{ boxShadow: "0 0 5px #00fff0" }}
                  />
                </div>
              )}
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
              className="lg:hidden bg-[#0a0a1a] border-t border-[#00fff0]/20 max-h-[calc(100vh-4.25rem)] overflow-y-auto"
            >
              <div className="px-4 sm:px-6 py-6 space-y-4">
                {siteData.navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={`${basePath}/${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/70 hover:text-[#00fff0] transition-colors font-medium uppercase tracking-wider text-sm cursor-pointer"
                  >
                    {`> ${item.name}`}
                  </Link>
                ))}
                <a
                  href={attendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-[#ff00ff] text-white font-bold uppercase tracking-wider"
                  style={{
                    clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
                    boxShadow: "0 0 25px rgba(255, 0, 255, 0.5)",
                  }}
                >
                  Attend
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close mobile menu overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-14 sm:top-20 z-40 bg-transparent lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-14 sm:pt-20 relative">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0a1a] relative overflow-hidden border-t border-[#00fff0]/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff00ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00fff0]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Perimeter space lights */}
        <div className="absolute top-3 bottom-3 right-3 left-[-4px] sm:top-5 sm:bottom-5 sm:right-5 sm:left-[-6px] pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <motion.rect
              x="1"
              y="1"
              width="98"
              height="98"
              fill="none"
              stroke="#00fff0"
              strokeWidth="0.35"
              strokeLinecap="round"
              strokeDasharray="12 430"
              animate={{ strokeDashoffset: [0, -98, -196, -294, -392] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.2, 0.52, 0.76, 1],
              }}
              style={{ filter: "drop-shadow(0 0 5px rgba(0,255,240,0.8))" }}
            />
            <motion.rect
              x="1"
              y="1"
              width="98"
              height="98"
              fill="none"
              stroke="#ff00ff"
              strokeWidth="0.35"
              strokeLinecap="round"
              strokeDasharray="10 430"
              animate={{ strokeDashoffset: [-140, -238, -336, -434, -532] }}
              transition={{
                duration: 12.5,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.2, 0.52, 0.76, 1],
              }}
              style={{ filter: "drop-shadow(0 0 5px rgba(255,0,255,0.8))" }}
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <DynamicLogo version={4} compact />
              </div>
              <p className="text-white/50 max-w-md leading-relaxed text-sm">
                {`// ${siteData.brand.tagline}`}
              </p>
              <div className="flex gap-4 mt-6">
                {siteData.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a1a2e] border border-[#00fff0]/50 flex items-center justify-center hover:border-[#ff00ff] hover:bg-[#ff00ff]/20 transition-all cursor-pointer"
                    style={{ boxShadow: "0 0 10px rgba(0, 255, 240, 0.2)" }}
                  >
                    <span className="text-xs font-medium text-[#00fff0]">
                      {link.name[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4
                className="font-bold text-[#00fff0] mb-6 text-lg uppercase tracking-wider"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  textShadow: "0 0 10px rgba(0, 255, 240, 0.5)",
                }}
              >
                {"<Links/>"}
              </h4>
              <ul className="space-y-3">
                {siteData.navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={`${basePath}/${item.path}`}
                      className="text-white/50 hover:text-[#00fff0] transition-colors text-sm cursor-pointer"
                    >
                      {`> ${item.name}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="font-bold text-[#ff00ff] mb-6 text-lg uppercase tracking-wider"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  textShadow: "0 0 10px rgba(255, 0, 255, 0.5)",
                }}
              >
                {"<Connect/>"}
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="text-white/50">
                  <span className="text-[#f0ff00]">Email:</span>{" "}
                  {siteData.brand.email}
                </li>
                <li className="text-white/50">
                  <span className="text-[#f0ff00]">Partners:</span>{" "}
                  {siteData.brand.partnerEmail}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a1a2e]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/30 text-sm font-mono">
                {`© ${new Date().getFullYear()} CODESPARK // ALL_RIGHTS_RESERVED`}
              </p>
              <p className="text-white/30 text-sm font-mono">
                {`// BUILDING_THE_FUTURE`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
