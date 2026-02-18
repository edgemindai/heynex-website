"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = [
  "Private AI Agent",
  "AI Coworker",
  "Digital Assistant",
  "Second Brain",
  "Personal Secretary",
  "AI Companion",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_DURATION = 2000;

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (phase === "typing") {
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else {
        setPhase("pausing");
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }
  }, [text, phase, currentPhrase]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setText(phrases[0]);
      return;
    }

    const delay =
      phase === "pausing"
        ? PAUSE_DURATION
        : phase === "deleting"
          ? DELETING_SPEED
          : TYPING_SPEED;

    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [tick, phase]);

  return (
    <span className="text-[var(--accent)]">
      {text}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
