import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import IngestDiagram from "../components/IngestDiagram";
import { Chips, CopyEmail, ExternalLink, Figures, GitHubIcon, LinkedInIcon } from "../components/bits";
import { experience, injective, links, openSource, person, platform, products, toolbox, type Product } from "../content/site";
import portrait from "../assets/portrait.webp";

function ProductRow({ p }: { p: Product }) {
  return (
    <article className="grid gap-x-8 gap-y-3 border-t border-rule py-6 first:border-t-0 md:grid-cols-[210px_1fr_200px]">
      <div>
        <h3 className="text-[17px] leading-snug font-semibold">
          {p.slug ? (
            <Link to={`/work/${p.slug}`} className="no-underline hover:text-signal">
              {p.name}
            </Link>
          ) : (
            p.name
          )}
        </h3>
        <p className="mt-1 font-mono text-[12px] leading-snug text-muted">{p.context}</p>
      </div>
      <div className="flex max-w-[64ch] flex-col gap-3">
        <p>{p.summary}</p>
        <p>
          <span className="font-semibold">My part: </span>
          {p.part}
        </p>
        <Chips items={p.surfaces} />
      </div>
      <div className="flex flex-col gap-4 md:items-start">
        <Figures items={p.figures} className="md:flex-col md:gap-y-3" />
        {p.slug && (
          <Link to={`/work/${p.slug}`} className="text-link font-mono text-[13px]">
            Case study<span aria-hidden="true"> →</span>
            <span className="sr-only">: {p.name}</span>
          </Link>
        )}
        {p.href && (
          <ExternalLink href={p.href} className="text-link font-mono text-[13px]">
            {new URL(p.href).host}
          </ExternalLink>
        )}
      </div>
    </article>
  );
}

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-6 flex flex-col gap-4">
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      {intro && <p className="max-w-[70ch] text-muted">{intro}</p>}
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pt-10 pb-20 sm:gap-20 sm:pt-14">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <h1 id="hero-title" className="text-[34px] leading-[1.08] font-semibold tracking-[-0.02em] sm:text-[44px]">
            {person.name}
          </h1>
          <p className="mt-3 font-mono text-[14px] leading-relaxed text-signal">
            {person.role} · {person.roleDetail.join(" · ")}
            <span className="text-muted"> · Wellington, NZ</span>
          </p>
          <p className="mt-5 max-w-[52ch]">
            I build and run the software between devices, databases and customers. For six years that has meant IoT
            platforms on AWS for customers in banking, aerospace, hospitality, cold-chain and aged care: ingest
            pipelines, permission models, the release and monitoring tooling that keeps them up, and the React and React
            Native apps people use every day.
          </p>
          <p className="mt-3 max-w-[52ch]">
            Outside my day job I build on the Injective blockchain: a decentralised exchange, its smart contracts, and a
            low-latency trading engine in Rust.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            <li>
              <a href={links.cv} download className="btn btn-primary">
                Download CV <span className="text-[11px] opacity-75">PDF</span>
              </a>
            </li>
            <li>
              <a href={links.github} className="btn" rel="me">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={links.linkedin} className="btn" rel="me">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${person.email}`} className="btn">
                Email
              </a>
            </li>
          </ul>
        </div>
        <figure className="min-w-0 border border-rule bg-sheet p-3 sm:p-4">
          <IngestDiagram />
          <figcaption className="mt-2 font-mono text-[12px] leading-snug text-muted">
            How device data reaches the products. If the backend is down, readings wait in SQS and replay after a health
            check, so an outage doesn't lose customer data.{" "}
            <Link to="/work/device-manager" className="text-link">
              How it works
            </Link>
          </figcaption>
        </figure>
      </section>

      <Section
        id="products"
        title="Products"
        intro="I'm the lead backend engineer at Vention Lab across four products that share one IoT platform. Sensors report over LoRaWAN and other networks, Device Manager takes the data in, and the other three turn it into something customers use. Before Vention I worked on the same products at SenSys."
      >
        <div>
          {products.map((p) => (
            <ProductRow key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section
        id="injective"
        title="Built on Injective"
        intro="Independent projects on blockchain infrastructure, built alongside my day job. They hold real user funds, so they're tested accordingly."
      >
        <div>
          {injective.map((p) => (
            <ProductRow key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section id="platform" title="Across the platform">
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {platform.map((item) => (
            <div key={item.title} className="max-w-[60ch]">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1">{item.text}</p>
            </div>
          ))}
        </div>
        <p>
          <Link to="/work/platform-operations" className="text-link font-mono text-[13px]">
            Platform &amp; operations case study<span aria-hidden="true"> →</span>
          </Link>
        </p>
      </Section>

      <Section id="open-source" title="Open-source crypto projects" intro="Smaller things I've built and run in public on Injective.">
        <ul className="grid border border-rule md:grid-cols-3">
          {openSource.map((o) => (
            <li
              key={o.name}
              className="flex flex-col gap-2 border-rule p-5 not-last:border-b md:not-last:border-r md:not-last:border-b-0"
            >
              <h3 className="font-mono text-[14px] font-medium text-signal">{o.name}</h3>
              <p className="flex-1 text-[15px]">{o.text}</p>
              <ExternalLink href={o.href} className="text-link font-mono text-[12.5px]">
                {o.hrefLabel}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="toolbox" title="Toolbox">
        <dl className="grid gap-x-8 sm:grid-cols-[140px_1fr]">
          {toolbox.map((t) => (
            <div key={t.group} className="contents">
              <dt className="pt-3 font-mono text-[13px] text-muted sm:border-t sm:border-rule sm:py-3">{t.group}</dt>
              <dd className="pb-3 sm:border-t sm:border-rule sm:py-3">{t.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="experience" title="Experience">
        <ol>
          {experience.map((e) => (
            <li
              key={`${e.org}-${e.dates}`}
              className="grid gap-x-8 gap-y-1 border-t border-rule py-4 first:border-t-0 first:pt-1 md:grid-cols-[210px_1fr]"
            >
              <div>
                <p className="font-semibold">{e.org}</p>
                <p className="font-mono text-[12.5px] text-muted">{e.dates}</p>
              </div>
              <p className="max-w-[64ch]">
                <span className="font-semibold">{e.role}.</span> {e.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="about" title="About & contact">
        <div className="grid items-start gap-8 md:grid-cols-[200px_1fr]">
          <img
            src={portrait}
            alt="Dan Van Eijck"
            width={200}
            height={300}
            loading="lazy"
            decoding="async"
            className="w-36 border border-rule md:w-[200px]"
          />
          <div className="flex max-w-[64ch] flex-col gap-4">
            <p>
              I'm based in Wellington and studied software engineering at Victoria University of Wellington. Most of my
              favourite work is the kind nobody notices when it's done well: a permission model that holds, a retry
              queue that turns an outage into a non-event, an alert that fires at the right severity. I like measuring
              things before and after I change them, and writing down what went wrong.
            </p>
            <p>
              Outside work I train most days, mostly tricking: an acrobatic sport that mixes martial-arts kicks, flips
              and twists. I used to coach gymnastics, which taught me to explain a skill clearly and break it into steps
              people can actually practise.
            </p>
            <div className="mt-2 flex flex-col gap-3">
              <h3 className="font-semibold">Get in touch</h3>
              <p>Email is the quickest way to reach me.</p>
              <CopyEmail email={person.email} />
              <ul className="mt-1 flex flex-wrap gap-2.5">
                <li>
                  <a href={links.cv} download className="btn btn-primary">
                    Download CV <span className="text-[11px] opacity-75">PDF</span>
                  </a>
                </li>
                <li>
                  <a href={links.github} className="btn" rel="me">
                    <GitHubIcon /> GitHub
                  </a>
                </li>
                <li>
                  <a href={links.linkedin} className="btn" rel="me">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
