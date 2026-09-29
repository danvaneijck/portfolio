export default function TradingEngine() {
  return (
    <>
      <h2>What it does</h2>
      <p>
        The engine watches live market data on Injective over gRPC and websocket streams, evaluates about 250 candidate
        routes, and submits a transaction when one is worth taking. Other systems compete for the same arbitrage
        opportunities, so latency decides the outcome. It wins about 80% of the contested ones.
      </p>

      <h2>Architecture</h2>
      <ul>
        <li>
          A Cargo workspace built on tokio. Streams feed a single actor that owns all state, so there are no locks to
          contend on.
        </li>
        <li>
          Event-sourced: every state change is a serialisable event. That gives deterministic replay of any production
          session, recorded fixtures for CI, and shadow runs that diff a new build against the old one on real data.
        </li>
        <li>Key isolation: signing lives in one crate, and the dependency graph enforces that nothing else can reach it.</li>
      </ul>

      <h2>How it's tested</h2>
      <p>
        About 2,000 tests, <code>clippy -D warnings</code>, and a differential gate that replays recorded production
        data through the new version and the previous one before a release goes out.
      </p>

      <h2>Three versions</h2>
      <p>
        It started in Node.js, then became Rust v1, then Rust v2. I measured each rewrite before moving on. Moving to
        Rust cut latency variance from 200–500 ms to 50–150 ms. Each stage has a latency budget, and incidents get a
        dated postmortem.
      </p>
      <p>
        This is where I learned to treat correctness, concurrency and key security as design constraints rather than
        things to check at the end. Mistakes here cost real money.
      </p>
    </>
  );
}
