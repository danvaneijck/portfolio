import { Link, useParams } from "react-router-dom";
import { ExternalLink, Figures } from "../components/bits";
import { caseStudies, findCaseStudy } from "../content/caseStudies";
import NotFound from "./NotFound";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = findCaseStudy(slug);
  if (!study) return <NotFound />;

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const { Body } = study;

  return (
    <article className="pt-8 pb-20 sm:pt-10">
      <Link to="/#products" className="font-mono text-[13px] text-muted no-underline hover:text-ink">
        <span aria-hidden="true">← </span>All work
      </Link>

      <header className="mt-8 flex flex-col gap-4 border-b border-rule pb-8">
        <p className="eyebrow text-signal">{study.label}</p>
        <h1 className="max-w-[24ch] text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] sm:text-[42px]">
          {study.title}
        </h1>
        <p className="max-w-[64ch] text-[17px] text-muted">{study.description}</p>
        <Figures items={study.figures} className="mt-2" />
      </header>

      <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_240px]">
        <div className="prose-cs min-w-0">
          <Body />
        </div>
        <aside className="flex flex-col gap-6 lg:sticky lg:top-8 lg:mt-9 lg:self-start" aria-label="Details">
          <div>
            <h2 className="eyebrow">Stack</h2>
            <ul className="mt-2 flex flex-wrap gap-1.5 font-mono text-[12px] text-muted lg:flex-col lg:gap-1">
              {study.stack.map((s) => (
                <li key={s} className="border border-rule px-2 py-0.5 lg:border-0 lg:px-0 lg:py-0">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          {study.links && (
            <div>
              <h2 className="eyebrow">Links</h2>
              <ul className="mt-2 flex flex-col gap-1 font-mono text-[13px]">
                {study.links.map((l) => (
                  <li key={l.href}>
                    <ExternalLink href={l.href}>{l.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <nav aria-label="More case studies" className="mt-16 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-6">
        <Link to="/#products" className="font-mono text-[13px] text-muted no-underline hover:text-ink">
          <span aria-hidden="true">← </span>All work
        </Link>
        <Link to={`/work/${next.slug}`} className="text-right no-underline">
          <span className="eyebrow block">Next case study</span>
          <span className="font-semibold hover:text-signal">
            {next.title}
            <span aria-hidden="true"> →</span>
          </span>
        </Link>
      </nav>
    </article>
  );
}
