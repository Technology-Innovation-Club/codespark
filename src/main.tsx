import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// Version 4 imports only
import { V4Layout } from "./versions/v4/Layout";
import { V4Home } from "./versions/v4/Home";
import { V4Incubator } from "./versions/v4/Incubator";
import { V4Event } from "./versions/v4/Event";
import { V4Startups } from "./versions/v4/Startups";
import { V4About } from "./versions/v4/About";
import { V4Partners } from "./versions/v4/Partners";
import { V4NotFound } from "./versions/v4/NotFound";

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
  useEffect(() => {
    const href = "/codespark.svg";
    const type = "image/svg+xml";

    let icon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.type = type;
    icon.href = href;
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <DynamicFavicon />
      <Routes>
        {/* Main site - Cyber Neon design */}
        <Route path="/" element={<V4Layout />}>
          <Route index element={<V4Home />} />
          <Route path="incubator" element={<V4Incubator />} />
          <Route path="event" element={<V4Event />} />
          <Route path="startups" element={<V4Startups />} />
          <Route path="about" element={<V4About />} />
          <Route path="for-partners" element={<V4Partners />} />
          <Route path="*" element={<V4NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
