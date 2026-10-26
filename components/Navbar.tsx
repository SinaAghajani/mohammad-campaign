"use client";

import { useState } from "react";
import { ArrowLeft, Menu, X, Zap } from "lucide-react";
import { candidate } from "../lib/site-data";

const links = [
  { href: "#about", label: "درباره من" },
  { href: "#plans", label: "برنامه‌ها" },
  { href: "#activities", label: "ایده‌ها" },
  { href: "#suggestions", label: "پیشنهاد تو" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar container">
      <a className="brand" href="#home" aria-label="صفحه اصلی">
        <span className="brand-mark">
          <Zap size={21} fill="currentColor" />
        </span>
        <span className="brand-copy">
          <strong>{candidate.name}</strong>
          <small>انتخابات شورای دانش‌آموزی</small>
        </span>
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links${menuOpen ? " nav-open" : ""}`}
        aria-label="ناوبری اصلی"
      >
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="#support"
          onClick={() => setMenuOpen(false)}
        >
          همراهی با کمپین <ArrowLeft size={16} />
        </a>
      </nav>
    </header>
  );
}
