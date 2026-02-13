import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import "./index.css";

// Version imports
import { V1Layout } from "./versions/v1/Layout";
import { V1Home } from "./versions/v1/Home";
import { V1Incubator } from "./versions/v1/Incubator";
import { V1Event } from "./versions/v1/Event";
import { V1Startups } from "./versions/v1/Startups";
import { V1About } from "./versions/v1/About";
import { V1Partners } from "./versions/v1/Partners";

import { V2Layout } from "./versions/v2/Layout";
import { V2Home } from "./versions/v2/Home";
import { V2Incubator } from "./versions/v2/Incubator";
import { V2Event } from "./versions/v2/Event";
import { V2Startups } from "./versions/v2/Startups";
import { V2About } from "./versions/v2/About";
import { V2Partners } from "./versions/v2/Partners";

import { V3Layout } from "./versions/v3/Layout";
import { V3Home } from "./versions/v3/Home";
import { V3Incubator } from "./versions/v3/Incubator";
import { V3Event } from "./versions/v3/Event";
import { V3Startups } from "./versions/v3/Startups";
import { V3About } from "./versions/v3/About";
import { V3Partners } from "./versions/v3/Partners";

import { V4Layout } from "./versions/v4/Layout";
import { V4Home } from "./versions/v4/Home";
import { V4Incubator } from "./versions/v4/Incubator";
import { V4Event } from "./versions/v4/Event";
import { V4Startups } from "./versions/v4/Startups";
import { V4About } from "./versions/v4/About";
import { V4Partners } from "./versions/v4/Partners";

import { V5Layout } from "./versions/v5/Layout";
import { V5Home } from "./versions/v5/Home";
import { V5Incubator } from "./versions/v5/Incubator";
import { V5Event } from "./versions/v5/Event";
import { V5Startups } from "./versions/v5/Startups";
import { V5About } from "./versions/v5/About";
import { V5Partners } from "./versions/v5/Partners";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    root.style.scrollBehavior = previousBehavior;
  }, [pathname]);

  return null;
}

function DynamicFavicon() {
  const { pathname } = useLocation();

  useEffect(() => {
    const match = pathname.match(/^\/([1-5])(?:\/|$)/);
    const version = match?.[1];
    const href = version ? `/favicons/v${version}.svg` : "/codespark.svg";
    const type = "image/svg+xml";

    let icon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.type = type;
    icon.href = href;
  }, [pathname]);

  return null;
}

// Version Picker Component
function VersionPicker() {
  const versions = [
    {
      id: "1",
      name: "Navy & Gold",
      description: "Editorial elegance with refined typography",
      colors: ["#0a1628", "#f4a942"],
      accent: "#f4a942",
    },
    {
      id: "2",
      name: "Brutalist",
      description: "High contrast, raw typographic energy",
      colors: ["#000000", "#ffffff"],
      accent: "#ffffff",
    },
    {
      id: "3",
      name: "Earth Tones",
      description: "Warm terracotta with organic feel",
      colors: ["#2d2a26", "#e07a5f"],
      accent: "#e07a5f",
    },
    {
      id: "4",
      name: "Cyber Neon",
      description: "Futuristic gradients and neon accents",
      colors: ["#0a0a0f", "#00fff0", "#ff00ff"],
      accent: "#00fff0",
    },
    {
      id: "5",
      name: "Pastel",
      description: "Light, airy with gentle gradients",
      colors: ["#faf8f5", "#6366f1", "#f472b6"],
      accent: "#6366f1",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start md:justify-center px-4 py-10 sm:px-6 md:p-8">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(255, 154, 139, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, #0f0f12 0%, #16161a 50%, #0f0f12 100%)
          `,
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className="text-center mb-10 sm:mb-16 relative z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-500 mb-3 sm:mb-4"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          Design Prototypes
        </motion.p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-4 sm:mb-5"
          style={{
            fontFamily: '"Fraunces", serif',
            color: "#fafafa",
            fontVariationSettings: '"opsz" 144, "wght" 500',
          }}
        >
          CodeSpark
        </h1>
        <p
          className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          Select a design iteration to preview
        </p>
      </motion.div>

      {/* Version Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl w-full relative z-10">
        {versions.map((version, index) => (
          <motion.div
            key={version.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + index * 0.08,
              ease: [0.25, 0.1, 0, 1],
            }}
          >
            <Link to={`/${version.id}`} className="block group">
              <div
                className="relative p-4 sm:p-6 rounded-2xl cursor-pointer overflow-hidden transition-all duration-500"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${version.accent}15 0%, transparent 50%)`,
                  }}
                />

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: `1px solid ${version.accent}30`,
                  }}
                />

                {/* Version number */}
                <div
                  className="text-xs font-medium mb-4 opacity-40 group-hover:opacity-60 transition-opacity"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: version.accent,
                  }}
                >
                  0{version.id}
                </div>

                {/* Color palette */}
                <div className="flex gap-2 mb-5">
                  {version.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-md transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: color,
                        border: color === "#ffffff" ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Title */}
                <h2
                  className="text-lg font-medium mb-2 transition-colors duration-300"
                  style={{
                    fontFamily: '"Fraunces", serif',
                    color: "#fafafa",
                  }}
                >
                  {version.name}
                </h2>

                {/* Description */}
                <p
                  className="text-sm text-zinc-500 leading-relaxed mb-4 group-hover:text-zinc-400 transition-colors duration-300"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                >
                  {version.description}
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    color: version.accent,
                  }}
                >
                  <span>VIEW</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 relative z-10"
      >
        <p
          className="text-xs text-zinc-600 tracking-wide"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          Building Africa's Most Principled Student Founders
        </p>
      </motion.div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <DynamicFavicon />
      <Routes>
        {/* Version Picker Home */}
        <Route path="/" element={<VersionPicker />} />

        {/* Version 1 - Deep Navy & Gold Editorial */}
        <Route path="/1" element={<V1Layout />}>
          <Route index element={<V1Home />} />
          <Route path="incubator" element={<V1Incubator />} />
          <Route path="event" element={<V1Event />} />
          <Route path="startups" element={<V1Startups />} />
          <Route path="about" element={<V1About />} />
          <Route path="for-partners" element={<V1Partners />} />
        </Route>

        {/* Version 2 - Brutalist Black & White */}
        <Route path="/2" element={<V2Layout />}>
          <Route index element={<V2Home />} />
          <Route path="incubator" element={<V2Incubator />} />
          <Route path="event" element={<V2Event />} />
          <Route path="startups" element={<V2Startups />} />
          <Route path="about" element={<V2About />} />
          <Route path="for-partners" element={<V2Partners />} />
        </Route>

        {/* Version 3 - Warm Earth Tones */}
        <Route path="/3" element={<V3Layout />}>
          <Route index element={<V3Home />} />
          <Route path="incubator" element={<V3Incubator />} />
          <Route path="event" element={<V3Event />} />
          <Route path="startups" element={<V3Startups />} />
          <Route path="about" element={<V3About />} />
          <Route path="for-partners" element={<V3Partners />} />
        </Route>

        {/* Version 4 - Cyber Neon */}
        <Route path="/4" element={<V4Layout />}>
          <Route index element={<V4Home />} />
          <Route path="incubator" element={<V4Incubator />} />
          <Route path="event" element={<V4Event />} />
          <Route path="startups" element={<V4Startups />} />
          <Route path="about" element={<V4About />} />
          <Route path="for-partners" element={<V4Partners />} />
        </Route>

        {/* Version 5 - Soft Pastel Minimalist */}
        <Route path="/5" element={<V5Layout />}>
          <Route index element={<V5Home />} />
          <Route path="incubator" element={<V5Incubator />} />
          <Route path="event" element={<V5Event />} />
          <Route path="startups" element={<V5Startups />} />
          <Route path="about" element={<V5About />} />
          <Route path="for-partners" element={<V5Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
