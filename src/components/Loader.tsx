"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FULL_TEXT = "j'ai commencé le développement web parce que j'avais le dos au mur, c'est devenu une passion par la suite. Suivez moi dans mon univers";
const CHAR_INTERVAL = 20; // ms per character

export default function Loader() {
  const [count, setCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [visible, setVisible] = useState(true);

  const textDone = typed.length >= FULL_TEXT.length;
  const counterDone = count >= 100;

  // Progress counter (0 → 100, every 30ms)
  useEffect(() => {
    if (counterDone) return;
    const t = setTimeout(() => setCount((c) => c + 1), 30);
    return () => clearTimeout(t);
  }, [count, counterDone]);

  // Fade out only when BOTH counter and text are done
  useEffect(() => {
    if (!counterDone || !textDone) return;
    const t = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(t);
  }, [counterDone, textDone]);

  // Typewriter effect (starts immediately)
  useEffect(() => {
    if (textDone) return;
    const t = setTimeout(() => {
      setTyped(FULL_TEXT.slice(0, typed.length + 1));
    }, CHAR_INTERVAL);
    return () => clearTimeout(t);
  }, [typed, textDone]);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

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
            padding: "0 24px",
          }}
        >
          {/* Top: icon + name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                filter: [
                  "drop-shadow(0 0 0px #4AFF00)",
                  "drop-shadow(0 0 12px #4AFF00)",
                  "drop-shadow(0 0 0px #4AFF00)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="72"
                height="72"
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
            </motion.div>

            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Ange Akonde
            </p>

            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "#4AFF00",
                margin: 0,
              }}
            >
              BigSixteen
            </p>
          </motion.div>

          {/* Typewriter text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              marginTop: "40px",
              maxWidth: "480px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: "0.875rem",
                lineHeight: "1.7",
                color: "rgba(255,255,255,0.45)",
                margin: 0,
                minHeight: "3.4em",
              }}
            >
              {typed}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: "#4AFF00",
                  marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                }}
              />
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
