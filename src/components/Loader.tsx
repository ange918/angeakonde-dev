"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (count >= 100) {
      const t = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCount((c) => c + 1), 30);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
          >
            {/* Laptop icon */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <path d="M2 20h20" />
              <path d="M9 17l1 3h4l1-3" />
            </svg>

            {/* Name */}
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "2.25rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Ange Akonde
            </p>

            {/* Brand */}
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "1.125rem",
                fontWeight: 500,
                color: "#4AFF00",
                margin: 0,
              }}
            >
              BigSixteen
            </p>
          </motion.div>

          {/* Progress bar + counter */}
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.75rem",
                color: "#4AFF00",
                letterSpacing: "0.05em",
              }}
            >
              {count}%
            </span>
            <div
              style={{
                width: "200px",
                height: "4px",
                background: "#1a1a1a",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${count}%`,
                  background: "#4AFF00",
                  borderRadius: "2px",
                  transition: "width 0.03s linear",
                  boxShadow: "0 0 8px rgba(74,255,0,0.6)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
