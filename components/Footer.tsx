"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="ik-footer">
      <div className="ik-footer-main">
        <div className="ik-footer-brand">
          <Link href="/" className="ik-footer-logo">
            <span className="ik-footer-icon">☾</span>
            <span>Islamic Kalam</span>
          </Link>

          <p className="ik-footer-description">{t("footerDescription")}</p>

          <div className="ik-footer-motto">
            <span>✦</span>
            <span>{t("motto")}</span>
          </div>
        </div>

        <div className="ik-footer-column">
          <h3>{t("explore")}</h3>
          <Link href="/">{t("home")}</Link>
          <Link href="/naat">{t("naat")}</Link>
          <Link href="/manqabat">{t("manqabat")}</Link>
          <Link href="/salam">{t("salam")}</Link>
          <Link href="/hamd">{t("hamd")}</Link>
          <Link href="/biography">{t("personalities")}</Link>
        </div>

        <div className="ik-footer-column">
          <h3>{language === "urdu" ? "معلومات" : language === "hindi" ? "जानकारी" : "Information"}</h3>
          <Link href="/about">{t("about")}</Link>
          <Link href="/contact">{t("contact")}</Link>
          <Link href="/privacy-policy">{t("privacy")}</Link>
          <Link href="/disclaimer">{t("disclaimer")}</Link>
          <Link href="/terms">{t("terms")}</Link>
        </div>

        <div className="ik-footer-column ik-footer-purpose">
          <h3>{t("purpose")}</h3>

          <p>{t("purposeDescription")}</p>

          <Link href="/about" className="ik-footer-about-button">
            {t("knowMore")} <span>→</span>
          </Link>
        </div>
      </div>

      <div className="ik-footer-bottom">
        <p>
          © {new Date().getFullYear()} Islamic Kalam. {t("allRights")}
        </p>

        <p className="ik-footer-credit">
          {t("footerCredit")}
        </p>
      </div>
    </footer>
  );
}
