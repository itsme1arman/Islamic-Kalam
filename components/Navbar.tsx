"use client";

import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    title: "Naat Sharif",
    href: "/naat",
    items: [
      { title: "All Naat Sharif", href: "/naat" },
      { title: "Popular Naat", href: "/naat?sort=popular" },
      { title: "Latest Naat", href: "/naat?sort=latest" },
    ],
  },
  {
    title: "Manqabat",
    href: "/manqabat",
    items: [
      { title: "All Manqabat", href: "/manqabat" },
      { title: "Popular Manqabat", href: "/manqabat?sort=popular" },
    ],
  },
  {
    title: "Biography",
    href: "/biography",
    items: [
      { title: "Islamic Personalities", href: "/biography" },
      { title: "Islamic Scholars", href: "/biography?category=scholars" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    window.location.href = `/naat?search=${encodeURIComponent(query)}`;
    setMobileOpen(false);
  }

  return (
    <header className="ik-header">
      <div className="ik-header-pattern" />

      <nav className="ik-navbar">
        {/* Logo */}
        <Link href="/" className="ik-brand" aria-label="Islamic Kalam Home">
          <span className="ik-logo">
            <svg
              viewBox="0 0 64 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M32 3 54 22V49L32 68 10 49V22L32 3Z"
                stroke="#C69B43"
                strokeWidth="2"
              />
              <path
                d="M32 8 49 24V47L32 62 15 47V24L32 8Z"
                stroke="#075B46"
                strokeWidth="2.5"
              />
              <path
                d="M20 48V37C20 30 25 25 32 22C39 25 44 30 44 37V48L32 57 20 48Z"
                fill="#075B46"
              />
              <path
                d="M28 16C28 12 31 10 34 11C31 13 31 16 34 18C30 19 28 18 28 16Z"
                fill="#C69B43"
              />
              <path
                d="M8 56 32 70 56 56M13 63 32 74 51 63"
                stroke="#075B46"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span className="ik-brand-copy">
            <span className="ik-brand-name">Islamic Kalam</span>
            <span className="ik-brand-tagline">
              NAAT <i>·</i> MANQABAT <i>·</i> BIOGRAPHY
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="ik-desktop-nav">
          <Link href="/" className="ik-nav-link ik-home-link">
            Home
          </Link>

          {menus.map((menu) => (
            <div
              className="ik-menu-wrap"
              key={menu.title}
              onMouseEnter={() => setActiveMenu(menu.title)}
              onMouseLeave={() => setActiveMenu("")}
            >
              <button
                type="button"
                className={`ik-nav-link ik-menu-button ${
                  activeMenu === menu.title ? "ik-menu-active" : ""
                }`}
                onClick={() =>
                  setActiveMenu(
                    activeMenu === menu.title ? "" : menu.title
                  )
                }
                aria-expanded={activeMenu === menu.title}
              >
                {menu.title}
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="m5 7 5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {activeMenu === menu.title && (
                <div className="ik-dropdown">
                  <div className="ik-dropdown-heading">
                    <span className="ik-dropdown-symbol">✦</span>
                    <span>Explore {menu.title}</span>
                  </div>

                  {menu.items.map((item) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      className="ik-dropdown-link"
                      onClick={() => setActiveMenu("")}
                    >
                      <span>{item.title}</span>
                      <span className="ik-dropdown-arrow">↗</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop search */}
        <form className="ik-search ik-desktop-search" onSubmit={handleSearch}>
          <svg
            className="ik-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10.8"
              cy="10.8"
              r="6.8"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="m16 16 4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <input
            type="search"
            placeholder="Search naat, manqabat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search Islamic Kalam"
          />

          <button type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m16 16 4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>

        {/* Mobile menu button */}
        <button
          type="button"
          className="ik-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div className={`ik-mobile-panel ${mobileOpen ? "ik-panel-open" : ""}`}>
        <div className="ik-mobile-panel-inner">
          <Link
            href="/"
            className="ik-mobile-link ik-mobile-home"
            onClick={() => setMobileOpen(false)}
          >
            <span className="ik-mobile-link-icon">⌂</span>
            <span>Home</span>
            <span className="ik-mobile-arrow">→</span>
          </Link>

          {menus.map((menu) => (
            <div className="ik-mobile-menu-group" key={menu.title}>
              <button
                type="button"
                className="ik-mobile-link"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === menu.title ? "" : menu.title
                  )
                }
                aria-expanded={activeMenu === menu.title}
              >
                <span className="ik-mobile-link-icon">
                  {menu.title === "Naat Sharif"
                    ? "◈"
                    : menu.title === "Manqabat"
                    ? "✧"
                    : "❋"}
                </span>

                <span>{menu.title}</span>

                <svg
                  className={`ik-mobile-chevron ${
                    activeMenu === menu.title ? "ik-chevron-open" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m5 7 5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {activeMenu === menu.title && (
                <div className="ik-mobile-submenu">
                  {menu.items.map((item) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      onClick={() => {
                        setMobileOpen(false);
                        setActiveMenu("");
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <form className="ik-search ik-mobile-search" onSubmit={handleSearch}>
            <svg
              className="ik-search-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="m16 16 4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              placeholder="Search naat, manqabat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search Islamic Kalam"
            />

            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="10.8"
                  cy="10.8"
                  r="6.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m16 16 4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>

          <div className="ik-mobile-bottom">
            <span className="ik-bottom-crescent">☾</span>
            <p>Words of love, faith &amp; devotion.</p>
            <span className="ik-bottom-divider">✦ ━━━━━ ✦</span>
          </div>
        </div>
      </div>
    </header>
  );
}
