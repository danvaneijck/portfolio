import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { Link, useLocation } from "react-router-dom";
import { canonical, metaFor } from "../content/meta";
import { links, person } from "../content/site";
import { GitHubIcon, LinkedInIcon } from "./bits";

const nav = [
  { label: "Products", to: "/#products" },
  { label: "Injective", to: "/#injective" },
  { label: "Open source", to: "/#open-source" },
  { label: "About", to: "/#about" },
];

function setMeta(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

/** Keeps the document head and scroll/focus position in step with client-side navigation. */
function useRouteEffects(mainRef: RefObject<HTMLElement | null>) {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", canonical(meta.path));
    setMeta('link[rel="canonical"]', "href", canonical(meta.path));
  }, [pathname]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash, mainRef]);
}

export default function Layout({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  useRouteEffects(mainRef);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only z-50 bg-ink px-3 py-2 font-mono text-sm text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <header className="mx-auto w-full max-w-[1120px] px-4 sm:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule py-4 font-mono text-[13.5px]">
          <Link to="/" className="font-medium text-ink no-underline">
            {person.name}
          </Link>
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-muted">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="no-underline hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={links.cv} download className="text-signal no-underline hover:underline">
                  CV (PDF)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" ref={mainRef} tabIndex={-1} className="mx-auto w-full max-w-[1120px] flex-1 px-4 outline-none sm:px-8">
        {children}
      </main>

      <footer className="mx-auto w-full max-w-[1120px] px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule py-6 font-mono text-[12.5px] text-muted">
          <p>
            © {new Date().getFullYear()} {person.name} · {person.location}
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            <li>
              <a href={links.github} className="inline-flex items-center gap-1.5 no-underline hover:text-ink" rel="me">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={links.linkedin} className="inline-flex items-center gap-1.5 no-underline hover:text-ink" rel="me">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
            <li>
              <a href={links.source} className="no-underline hover:text-ink">
                Site source
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
