export default function PlatformOperations() {
  return (
    <>
      <h2>A security gate in CI</h2>
      <p>
        A security review is a snapshot, so I built a gate into CI across 13 apps. It blocks any deploy with a fixable
        high or critical vulnerability. Every run lands in an append-only evidence trail, and anything that genuinely
        can't be fixed yet goes into an exception register with an expiry date, so it can't be quietly ignored forever.
        The trail and register are designed to serve as compliance evidence.
      </p>

      <h2>An MCP server built to be audited</h2>
      <p>
        Our AI support tooling needed to read and change customer data across all four backends. I designed one MCP
        server for it and rolled it out to each, so an agent only ever has the access its operator's role allows:
      </p>
      <ul>
        <li>per-person API keys, stored only as hashes, with rotation and immediate revocation;</li>
        <li>roles and per-environment flags on each key, checked when a tool discovers what it can do and again at call time;</li>
        <li>a fail-closed, two-phase confirmation for any write;</li>
        <li>
          an audit log that records the actor, the role they held at that moment, redacted arguments, the outcome, and
          every denied attempt.
        </li>
      </ul>
      <p>
        I also shipped a versioned, organisation-scoped Customer Data API with per-key rate limits and deprecation
        headers.
      </p>

      <h2>Releases</h2>
      <p>
        A release register covers 13 apps (4 backends, 5 web apps and 4 mobile apps) and links every deploy to its
        commit, its security scan and its rollback path. I moved 142 unversioned RunDeck jobs into version control, and
        fixed a deploy ordering bug where workers started before migrations ran, which had been dropping jobs on schema
        releases.
      </p>
      <p>
        Services ship as Docker images through Bitbucket Pipelines, web apps through AWS Amplify, and mobile apps
        through EAS.
      </p>

      <h2>Observability</h2>
      <p>
        I audited and overhauled logging and monitoring across the fleet: Prometheus, Grafana, Loki and Sentry. That
        included a production service that had been logging nothing. I rebuilt fleet-health alerting so severity
        follows customer impact. The same audit covered AWS spend and found $13–22k a year in savings.
      </p>

      <h2>The team</h2>
      <p>
        I mentor the junior developers, review the team's pull requests, and write design docs and incident write-ups. I
        also set up the team's shared agentic engineering workspace: Claude Code skills for cutting releases, fixing
        security findings and investigating production issues, plus the task tracker the team works from.
      </p>
    </>
  );
}
