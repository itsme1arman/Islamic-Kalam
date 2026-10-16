"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./css/header.css";

type Language = "hinglish" | "hindi" | "urdu";
type Theme = "auto" | "light" | "dark";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Naat Sharif", href: "/naat" },
  { label: "Manqabat", href: "/manqabat" },
  { label: "Biography", href: "/biography" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("hinglish");
  const [theme, setTheme] = useState<Theme>("auto");
  const [loaded, setLoaded] = useState(false);

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
      // Continue with default settings.
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const root = document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    const applySettings = () => {
      const effectiveTheme =
        theme === "auto"
          ? systemTheme.matches
            ? "dark"
            : "light"
          : theme;

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
      // Settings still work for the current page.
    }

    applySettings();

    if (theme === "auto") {
      systemTheme.addEventListener("change", applySettings);
      return () => systemTheme.removeEventListener("change", applySettings);
    }
  }, [language, theme, loaded]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setSettingsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="ik-header">
      <nav className="ik-navbar" aria-label="Main navigation">
        {/* LEFT: MENU */}
        <button
          className="ik-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? "line line-one active" : "line line-one"} />
          <span className={menuOpen ? "line line-two active" : "line line-two"} />
          <span className={menuOpen ? "line line-three active" : "line line-three"} />
        </button>

        {/* CENTER: BRAND */}
        <Link href="/" className="ik-brand" onClick={closeMenu}>
          <span className="ik-brand-logo" aria-hidden="true">
            إ
          </span>

          <span className="ik-brand-text">
            <span className="ik-brand-name">Islamic Kalam</span>
            <span className="ik-brand-subtitle">A beautiful journey of faith</span>
          </span>
        </Link>

        {/* RIGHT: SINGLE SETTINGS BUTTON */}
        <div className="ik-settings" ref={settingsRef}>
          <button
            className="ik-settings-toggle"
            type="button"
            aria-label="Language and theme settings"
            aria-expanded={settingsOpen}
            onClick={() => setSettingsOpen((open) => !open)}
          >
            <span aria-hidden="true">⋮</span>
          </button>

          {settingsOpen && (
            <div className="ik-settings-popup">
              <div className="ik-popup-heading">Settings</div>

              <section className="ik-setting-section">
                <p className="ik-setting-label">Language</p>

                <button
                  type="button"
                  className={`ik-setting-option ${
                    language === "hinglish" ? "selected" : ""
                  }`}
                  onClick={() => setLanguage("hinglish")}
                >
                  <span>Hinglish</span>
                  <span className="ik-option-check">
                    {language === "hinglish" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={`ik-setting-option ${
                    language === "hindi" ? "selected" : ""
                  }`}
                  onClick={() => setLanguage("hindi")}
                >
                  <span>हिन्दी</span>
                  <span className="ik-option-check">
                    {language === "hindi" ? "✓" : ""}
                  </span>
                </button>

                <button
                  type="button"
                  className={`ik-setting-option ${
                    language === "urdu" ? "selected" : ""
                  }`}
                  onClick={() => setLanguage("urdu")}
                >
                  <span lang="ur" dir="rtl">اردو</span>
                  <span className="ik-option-check">
                    {language === "urdu" ? "✓" : ""}
                  </span>
                </button>
              </section>

              <section className="ik-setting-section">
                <p className="ik-setting-label">Theme</p>

                {(
                  [
                    ["auto", "◐", "Auto"],
                    ["light", "☀", "Light"],
                    ["dark", "☾", "Dark"],
                  ] as const
                ).map(([value, icon, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`ik-setting-option ${
                      theme === value ? "selected" : ""
                    }`}
                    onClick={() => setTheme(value)}
                  >
                    <span className="ik-option-name">
                      <span aria-hidden="true">{icon}</span>
                      {label}
                    </span>

                    <span className="ik-option-check">
                      {theme === value ? "✓" : ""}
                    </span>
                  </button>
                ))}
              </section>
            </div>
          )}
        </div>
      </nav>

      {/* MENU PANEL */}
      {menuOpen && (
        <>
          <button
            className="ik-menu-backdrop"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <aside className="ik-navigation-panel">
            <div className="ik-navigation-heading">
              <span>Explore</span>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                ×
              </button>
            </div>

            <div className="ik-navigation-links">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span className="ik-navigation-arrow">›</span>
                </Link>
              ))}
            </div>

            <div className="ik-navigation-footer">
              Islamic Kalam
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
