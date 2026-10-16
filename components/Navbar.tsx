"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import "./css/header.css";

type Language = "hinglish" | "hindi" | "urdu";
type Theme = "auto" | "light" | "dark";

const navItems = [
  {
    label: "Naat Sharif",
    href: "/naat",
    children: [
      { label: "Hindi Naat", href: "/naat?language=hindi" },
      { label: "Urdu Naat", href: "/naat?language=urdu" },
      { label: "Popular Naat", href: "/naat?sort=popular" },
    ],
  },
  {
    label: "Manqabat",
    href: "/manqabat",
    children: [
      { label: "Manqabat Collection", href: "/manqabat" },
    ],
  },
  {
    label: "Biography",
    href: "/biography",
    children: [
      { label: "Islamic Personalities", href: "/biography" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState<Language>("hinglish");
  const [theme, setTheme] = useState<Theme>("auto");
  const [settingsLoaded, setSettingsLoaded] = useState(false);

  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("ik-language");
      const savedTheme = localStorage.getItem("ik-theme");

      if (
        savedLanguage === "hinglish" ||
        savedLanguage === "hindi" ||
        savedLanguage === "urdu"
      ) {
        setLanguage(savedLanguage);
      }

      if (
        savedTheme === "auto" ||
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        setTheme(savedTheme);
      }
    } catch {
      // Settings remain usable if localStorage is unavailable.
    } finally {
      setSettingsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!settingsLoaded) return;

    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applySettings = () => {
      const effectiveTheme =
        theme === "auto" ? (media.matches ? "dark" : "light") : theme;

      root.dataset.ikTheme = effectiveTheme;
      root.dataset.ikThemePreference = theme;

      window.dispatchEvent(
        new CustomEvent("ik-settings-change", {
          detail: {
            language,
            theme: effectiveTheme,
            themePreference: theme,
          },
        })
      );
    };

    try {
      localStorage.setItem("ik-language", language);
      localStorage.setItem("ik-theme", theme);
    } catch {
      // The selected settings still apply to the current page.
    }

    applySettings();

    if (theme === "auto") {
      media.addEventListener("change", applySettings);
      return () => media.removeEventListener("change", applySettings);
    }
  }, [language, theme, settingsLoaded]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSettingsOpen(false);
        setMobileOpen(false);
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();
    if (!query) return;

    window.location.href = `/naat?search=${encodeURIComponent(query)}`;
    setMobileOpen(false);
  }

  return (
    <header className="ik-header">
      <div className="ik-header-pattern" />

      <nav className="ik-navbar" aria-label="Main navigation">
        {/* Left: mobile menu */}
        <button
          className="ik-mobile-toggle"
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Brand */}
        <Link
          href="/"
          className="ik-brand"
          onClick={() => setMobileOpen(false)}
        >
          <span className="ik-logo" aria-hidden="true">
            إ
          </span>

          <span className="ik-brand-copy">
            <span className="ik-brand-name">Islamic Kalam</span>
            <span className="ik-brand-tagline">
              A beautiful journey of faith
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="ik-desktop-nav">
          <Link className="ik-nav-link ik-home-link" href="/">
            Home
          </Link>

          {navItems.map((item) => (
            <div
              className="ik-menu-wrap"
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="ik-nav-link ik-menu-button"
                aria-expanded={activeMenu === item.label}
                onClick={() =>
                  setActiveMenu((current) =>
                    current === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <span className="ik-chevron">⌄</span>
              </Link>

              {activeMenu === item.label && (
                <div className="ik-dropdown">
                  {item.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.label}
                      className="ik-dropdown-link"
                      onClick={() => setActiveMenu(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop search */}
        <form className="ik-search ik-desktop-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search kalam..."
            aria-label="Search kalam"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>

        {/* The ONLY settings button */}
        <div className="ik-header-settings" ref={settingsRef}>
          <button
            className="ik-header-settings-button"
            type="button"
            aria-label="Settings"
            aria-expanded={settingsOpen}
            onClick={() => setSettingsOpen((value) => !value)}
          >
            <span>⋮</span>
          </button>

          {settingsOpen && (
            <div className="ik-header-settings-menu">
              <div className="ik-header-settings-title">Settings</div>

              <div className="ik-header-setting-group">
                <span className="ik-header-setting-label">Language</span>

                <button
                  type="button"
                  className={
                    language === "hinglish"
                      ? "ik-setting-option selected"
                      : "ik-setting-option"
                  }
                  onClick={() => setLanguage("hinglish")}
                >
                  <span>Hinglish</span>
                  <span className="ik-setting-check">
                    {language === "hinglish" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    language === "hindi"
                      ? "ik-setting-option selected"
                      : "ik-setting-option"
                  }
                  onClick={() => setLanguage("hindi")}
                >
                  <span>हिन्दी</span>
                  <span className="ik-setting-check">
                    {language === "hindi" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    language === "urdu"
                      ? "ik-setting-option selected"
                      : "ik-setting-option"
                  }
                  onClick={() => setLanguage("urdu")}
                >
                  <span lang="ur" dir="rtl">
                    اردو
                  </span>
                  <span className="ik-setting-check">
                    {language === "urdu" ? "✓" : ""}
                  </span>
                </button>
              </div>

              <div className="ik-header-setting-group">
                <span className="ik-header-setting-label">Theme</span>

                {(
                  [
                    ["auto", "◐", "Auto"],
                    ["light", "☀", "Light"],
                    ["dark", "☾", "Dark"],
                  ] as const
                ).map(([value, icon, label]) => (
                  <button
                    type="button"
                    key={value}
                    className={
                      theme === value
                        ? "ik-setting-option selected"
                        : "ik-setting-option"
                    }
                    onClick={() => setTheme(value)}
                  >
                    <span className="ik-setting-option-name">
                      <span aria-hidden="true">{icon}</span>
                      {label}
                    </span>
                    <span className="ik-setting-check">
                      {theme === value ? "✓" : ""}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation: no duplicate settings here */}
      <div className={`ik-mobile-panel ${mobileOpen ? "is-open" : ""}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        {navItems.map((item) => (
          <div className="ik-mobile-nav-group" key={item.label}>
            <Link
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>

            {item.children.map((child) => (
              <Link
                href={child.href}
                className="ik-mobile-sub-link"
                key={child.label}
                onClick={() => setMobileOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        ))}

        <form className="ik-search ik-mobile-search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search kalam..."
            aria-label="Search kalam"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>
      </div>
    </header>
  );
                }
