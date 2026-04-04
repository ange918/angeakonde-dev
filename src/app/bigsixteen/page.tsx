"use client";

import { useState, useEffect } from "react";
import { Users, Eye, Globe, Clock } from "lucide-react";

const PASSWORD = "bigsixteen2026";
const STORAGE_KEY = "bs_bigsixteen_auth";

const TRACKED_EVENTS = [
  { event: "project_click", description: "Clic sur un projet", where: "components/Projects.tsx" },
  { event: "contact_click", description: "Clic sur le bouton contact", where: "components/Hero.tsx" },
  { event: "whatsapp_click", description: "Envoi via WhatsApp", where: "components/CTAWhatsApp.tsx" },
  { event: "cv_download", description: "Téléchargement du CV", where: "app/about/page.tsx" },
];

const QUICK_LINKS = [
  { label: "Vercel Dashboard", url: "https://vercel.com/ange918/angeakonde-dev" },
  { label: "Google Search Console", url: "https://search.google.com/search-console" },
  { label: "Google Analytics", url: "https://analytics.google.com" },
  { label: "Sitemap", url: "https://angeakonde-dev.vercel.app/sitemap.xml" },
];

export default function DashboardPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setAuthed(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthed(false);
    setPassword("");
  };

  if (!mounted) return null;

  if (!authed) {
    return (
      <div
        style={{ background: "#000000", minHeight: "100vh", fontFamily: "var(--font-inter, sans-serif)" }}
        className="flex items-center justify-center px-4"
      >
        <div
          style={{
            background: "#0D1F1C",
            border: "1px solid #08453A",
            padding: "40px",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h1
            style={{ fontFamily: "var(--font-montserrat, sans-serif)", color: "#ffffff", fontSize: "1.75rem", fontWeight: 700, marginBottom: "8px" }}
          >
            Dashboard
          </h1>
          <p style={{ color: "#AACBC4", marginBottom: "32px", fontSize: "0.95rem" }}>
            Accès privé — BigSixteen
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                height: "48px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.05)",
                padding: "0 16px",
                color: "#ffffff",
                fontSize: "1rem",
                outline: "none",
              }}
            />
            {error && (
              <p style={{ color: "#ff4d4d", fontSize: "0.875rem" }}>{error}</p>
            )}
            <button
              type="submit"
              style={{
                background: "#00DF81",
                color: "#000000",
                fontWeight: 700,
                border: "none",
                borderRadius: "999px",
                padding: "14px 32px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Accéder →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#000000", minHeight: "100vh", color: "#ffffff", fontFamily: "var(--font-inter, sans-serif)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>

        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <a
              href="/"
              style={{ color: "#AACBC4", fontSize: "0.875rem", textDecoration: "none", display: "inline-block", marginBottom: "16px" }}
            >
              ← Retour au portfolio
            </a>
            <h1
              style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}
            >
              Dashboard Analytics
            </h1>
            <p style={{ color: "#AACBC4", fontSize: "1rem" }}>Bienvenue, Ange 👋</p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.6)",
              borderRadius: "999px",
              padding: "10px 24px",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            Déconnexion
          </button>
        </div>

        <div className="grid gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[
            { label: "Total Visiteurs", value: "—", icon: <Users size={22} color="#00DF81" /> },
            { label: "Pages vues", value: "—", icon: <Eye size={22} color="#00DF81" /> },
            { label: "Pays atteints", value: "—", icon: <Globe size={22} color="#00DF81" /> },
            { label: "Temps moyen", value: "—", icon: <Clock size={22} color="#00DF81" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#0D1F1C",
                border: "1px solid #08453A",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div style={{ marginBottom: "12px" }}>{stat.icon}</div>
              <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "#00DF81", fontFamily: "var(--font-montserrat, sans-serif)" }}>
                {stat.value}
              </div>
              <div style={{ color: "#AACBC4", fontSize: "0.875rem", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 mb-10">
          {[
            {
              title: "Vercel Analytics",
              btnLabel: "Voir sur Vercel →",
              btnUrl: "https://vercel.com/ange918/angeakonde-dev/analytics",
              info: "Connectez-vous à votre compte Vercel pour voir les analytics détaillés.",
            },
            {
              title: "Google Analytics",
              btnLabel: "Voir sur Google Analytics →",
              btnUrl: "https://analytics.google.com",
              info: "Accédez à Google Analytics pour voir pays, pages, appareils et comportements.",
            },
          ].map((section) => (
            <div
              key={section.title}
              style={{
                background: "#0D1F1C",
                border: "1px solid #08453A",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <h2
                style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}
              >
                {section.title}
              </h2>
              <a
                href={section.btnUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#00DF81",
                  color: "#000000",
                  fontWeight: 700,
                  borderRadius: "999px",
                  padding: "10px 24px",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  marginBottom: "12px",
                }}
              >
                {section.btnLabel}
              </a>
              <p style={{ color: "#AACBC4", fontSize: "0.875rem" }}>{section.info}</p>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "#0D1F1C",
            border: "1px solid #08453A",
            borderRadius: "12px",
            padding: "28px",
            marginBottom: "32px",
          }}
        >
          <h2
            style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px" }}
          >
            Événements trackés
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  {["Événement", "Description", "Où tracker"].map((col) => (
                    <th
                      key={col}
                      style={{ textAlign: "left", padding: "10px 16px", color: "#AACBC4", fontWeight: 600 }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TRACKED_EVENTS.map((ev, i) => (
                  <tr
                    key={ev.event}
                    style={{ borderBottom: i < TRACKED_EVENTS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                  >
                    <td style={{ padding: "12px 16px", color: "#00DF81", fontFamily: "monospace" }}>{ev.event}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.7)" }}>{ev.description}</td>
                    <td style={{ padding: "12px 16px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", fontSize: "0.8rem" }}>{ev.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            background: "#0D1F1C",
            border: "1px solid #08453A",
            borderRadius: "12px",
            padding: "28px",
          }}
        >
          <h2
            style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}
          >
            Liens rapides
          </h2>
          <div className="flex flex-wrap gap-3">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#00DF81";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#00DF81";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
