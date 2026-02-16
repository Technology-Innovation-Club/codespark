import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Incubator } from "./pages/Incubator";
import { Event } from "./pages/Event";
import { Startups } from "./pages/Startups";
import { About } from "./pages/About";
import { Partners } from "./pages/Partners";
import { NotFound } from "./pages/NotFound";

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
    const href = "/favicon.webp";
    const type = "image/webp";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="incubator" element={<Incubator />} />
          <Route path="event" element={<Event />} />
          <Route path="startups" element={<Startups />} />
          <Route path="about" element={<About />} />
          <Route path="for-partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);