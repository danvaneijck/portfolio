import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="flex max-w-[60ch] flex-col gap-4 py-20">
      <p className="eyebrow">404</p>
      <h1 id="nf-title" className="text-[32px] leading-tight font-semibold tracking-[-0.02em]">
        That page doesn't exist
      </h1>
      <p>It may have moved when the site was rebuilt. The old About, Projects and Contact pages now live on the home page.</p>
      <p>
        <Link to="/" className="btn">
          Back to the home page
        </Link>
      </p>
    </section>
  );
}
