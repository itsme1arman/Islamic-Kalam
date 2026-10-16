"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./css/header.css";
import { useLanguage, type Language, type Theme } from "./LanguageProvider";

const navigation = [
  { key: "home", href: "/" },
  { key: "naat", href: "/naat" },
  { key: "manqabat", href: "/manqabat" },
  { key: "salam", href: "/salam" },
  { key: "hamd", href: "/hamd" },
  { key: "biography", href: "/biography" },
];

export default function Navbar() {
  const { language, setLanguage, theme, setTheme, t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const settingsRef = useRef<HTMLDivElement>(null);

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

  const languageOptions: { value: Language; label: string }[] = [
    { value: "hinglish", label: "Hinglish" },
    { value: "hindi", label: "हिन्दी" },
    { value: "urdu", label: "اردو" },
  ];

  const themeOptions: { value: Theme; label: string; icon: string }[] = [
    { value: "auto", label: t("auto"), icon: "◐" },
    { value: "light", label: t("light"), icon: "☀" },
    { value: "dark", label: t("dark"), icon: "☾" },
  ];

  return (
    <header className="ik-header">
      <nav className="ik-navbar" aria-label="Main navigation">
        <button
          className="ik-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen((open) => !open);
            setSettingsOpen(false);
          }}
        >
          <span className={menuOpen ? "line line-one active" : "line line-one"} />
          <span className={menuOpen ? "line line-two active" : "line line-two"} />
          <span className={menuOpen ? "line line-three active" : "line line-three"} />
        </button>

        <Link href="/" className="ik-brand" onClick={closeMenu}>
          <span className="ik-brand-logo" aria-hidden="true">
            إ
          </span>

          <span className="ik-brand-text">
            <span className="ik-brand-name">Islamic Kalam</span>
            <span className="ik-brand-subtitle">
              {language === "urdu"
                ? "ایمان کا خوبصورت سفر"
                : language === "hindi"
                  ? "आस्था का सुंदर सफ़र"
                  : "A beautiful journey of faith"}
            </span>
          </span>
        </Link>

        <div className="ik-settings" ref={settingsRef}>
          <button
            className="ik-settings-toggle"
            type="button"
            aria-label={t("settings")}
            aria-expanded={settingsOpen}
            onClick={() => {
              setSettingsOpen((open) => !open);
              setMenuOpen(false);
            }}
          >
            <span aria-hidden="true">⋮</span>
          </button>

          {settingsOpen && (
            <div className="ik-settings-popup" role="dialog" aria-label={t("settings")}>
              <div className="ik-popup-heading">{t("settings")}</div>

              <section className="ik-setting-section">
                <p className="ik-setting-label">{t("language")}</p>

                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`ik-setting-option ${
                      language === option.value ? "selected" : ""
                    }`}
                    onClick={() => setLanguage(option.value)}
                  >
                    <span
                      lang={option.value === "urdu" ? "ur" : undefined}
                      dir={option.value === "urdu" ? "rtl" : "ltr"}
                    >
                      {option.label}
                    </span>

                    <span className="ik-option-check">
                      {language === option.value ? "✓" : ""}
                    </span>
                  </button>
                ))}
              </section>

              <section className="ik-setting-section">
                <p className="ik-setting-label">{t("theme")}</p>

                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`ik-setting-option ${
                      theme === option.value ? "selected" : ""
                    }`}
                    onClick={() => setTheme(option.value)}
                  >
                    <span className="ik-option-name">
                      <span aria-hidden="true">{option.icon}</span>
                      {option.label}
                    </span>

                    <span className="ik-option-check">
                      {theme === option.value ? "✓" : ""}
                    </span>
                  </button>
                ))}
              </section>
            </div>
          )}
        </div>
      </nav>

      {menuOpen && (
        <>
          <button
            className="ik-menu-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <aside className="ik-navigation-panel" aria-label={t("explore")}>
            <div className="ik-navigation-heading">
              <span>{t("explore")}</span>

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
                  <span>{t(item.key)}</span>
                  <span className="ik-navigation-arrow">›</span>
                </Link>
              ))}
            </div>

            <div className="ik-navigation-footer">Islamic Kalam</div>
          </aside>
        </>
      )}
    </header>
  );
}
