"use client";
import { useEffect, useState } from "react";

const LINES = [
  { prompt: "whoami", output: "emanuel_enrico — full-stack developer" },
  { prompt: "cat skills.txt", output: "react.js · laravel · node.js · flutter" },
  { prompt: "cat focus.txt", output: "frontend UI + backend API + data security" },
  { prompt: "status", output: "available_for_work: true" },
];

export default function TerminalCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (lineIndex >= LINES.length) return;

    const current = LINES[lineIndex].prompt;

    if (!showOutput && charIndex < current.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(timeout);
    }

    if (!showOutput && charIndex === current.length) {
      const timeout = setTimeout(() => setShowOutput(true), 300);
      return () => clearTimeout(timeout);
    }

    if (showOutput) {
      const timeout = setTimeout(() => {
        setHistory((h) => [...h, LINES[lineIndex]]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
        setShowOutput(false);
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, showOutput, lineIndex]);

  const isTyping = lineIndex < LINES.length;
  const currentPrompt = isTyping ? LINES[lineIndex].prompt.slice(0, charIndex) : "";

  return (
    <div className="w-full lg:w-130 rounded-lg border border-(--line) bg-=(--bg-raised)]= overflow-hidden font-mono text-xs">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-(--line)">
        <span className="w-2.5 h-2.5 rounded-full bg-(--seal)/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-(--accent)/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-(--line)" />
        <span className="ml-2 text-[var(--muted)]">emanuel@portfolio: ~</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3 min-h-[180px]">
        {history.map((line, i) => (
          <div key={i}>
            <div className="text-(--muted)">
              <span className="text-(--accent)">$</span> {line.prompt}
            </div>
            <div className="text-(--ink) pl-3">{line.output}</div>
          </div>
        ))}

        {isTyping && (
          <div>
            <div className="text-(--muted)">
              <span className="text-(--accent)">$</span> {currentPrompt}
              <span className="inline-block w-1.5 h-3 bg-(--accent) ml-0.5 animate-pulse align-middle" />
            </div>
            {showOutput && (
              <div className="text-(--ink) pl-3">{LINES[lineIndex].output}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}