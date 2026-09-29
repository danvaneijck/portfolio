import { useState, type ReactNode } from "react";
import type { Figure } from "../content/site";

export function Figures({ items, className = "" }: { items: Figure[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <dl className={`flex flex-wrap gap-x-7 gap-y-2 font-mono text-[13px] ${className}`}>
      {items.map((f) => (
        <div key={f.label} className="flex flex-col">
          <dt className="text-[11.5px] text-muted">{f.label}</dt>
          <dd className="font-medium tabular-nums">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 font-mono text-[12px] text-muted" aria-label="Surfaces and stack">
      {items.map((s) => (
        <li key={s} className="border border-rule px-2 py-0.5">
          {s}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({ href, children, className = "text-link" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2000);
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <a href={`mailto:${email}`} className="text-link font-mono text-[15px]">
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="cursor-pointer border border-rule px-2 py-0.5 font-mono text-[12px] text-muted hover:border-ink hover:text-ink"
      >
        {state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : "Copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? "Email address copied" : ""}
      </span>
    </span>
  );
}

export function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M0 1.15C0 .51.53 0 1.18 0h13.64C15.47 0 16 .51 16 1.15v13.7c0 .64-.53 1.15-1.18 1.15H1.18C.53 16 0 15.49 0 14.85V1.15Zm4.94 12.24V6.17H2.542v7.22h2.4Zm-1.2-8.21c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01Zm4.91 8.21V9.36c0-.22.02-.43.08-.59.17-.43.57-.88 1.23-.88.87 0 1.22.66 1.22 1.63v3.86h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.27 0-1.84.7-2.16 1.19v.03h-.02l.02-.03V6.17h-2.4c.03.68 0 7.22 0 7.22h2.4Z" />
    </svg>
  );
}
