export default function ChoiceExchange() {
  return (
    <>
      <h2>The product</h2>
      <p>
        Choice Exchange is a decentralised exchange on Injective. You can swap tokens, provide liquidity in classic or
        concentrated-liquidity pools, stake LP tokens for rewards, or deposit into vaults that compound for you. Zaps
        turn a single token into a liquidity position in one step. The order router finds the best way to fill a
        trade across Choice's own pools and Injective's orderbook, and splits it across several routes when that gives
        a better price.
      </p>
      <p>
        0.05% of every swap goes to Injective's weekly burn auction. Tokens that launch on sprout.fun graduate into
        Choice pools.
      </p>

      <h2>The contracts</h2>
      <p>
        The contracts are CosmWasm, written in Rust. The original AMM was forked from TerraSwap. I upgraded it from
        CosmWasm v1 to v2, moved LP tokens to Injective's native token factory, and added the burn-auction fee. On top
        of that sit concentrated-liquidity pools, vaults, staking rewards, zaps, an aggregator contract that runs
        multi-venue routes atomically, and an admin timelock so no configuration change takes effect instantly.
      </p>
      <p>
        They hold real user funds, so they're treated that way: externally audited by SCV Security, and covered by fuzz
        tests, mutation testing with cargo-mutants, and integration tests.
      </p>

      <h2>The trading app</h2>
      <p>
        I built the React and TypeScript frontend, with some help from partners: swaps, pools, vaults and portfolio
        views, wired to the router and the indexer's GraphQL API.
      </p>

      <h2>Indexing, routing and API</h2>
      <ul>
        <li>
          <strong>Indexing:</strong> a Rust blockchain indexer (Firehose and Substreams) writing to Postgres.
        </li>
        <li>
          <strong>API:</strong> Django, Celery, Redis and Hasura behind a rate-limited gateway. It also serves
          market-data listings and a read-only MCP server for AI agents.
        </li>
        <li>
          <strong>Routing graph:</strong> a liquidity graph across several venues, cached in Redis and kept live by
          Postgres LISTEN/NOTIFY and gRPC order-book deltas. It reseeds when it spots a sequence gap. The router
          searches it for multi-hop, split routes.
        </li>
        <li>
          <strong>Signing services:</strong> a transaction co-signing service, and wallet-signature sign-in with roles
          derived on the server.
        </li>
        <li>
          <strong>Delivery:</strong> Docker on self-managed Linux servers, GitHub Actions for tests, vulnerability
          scanning and deploys, and Prometheus, Grafana and Loki for monitoring.
        </li>
      </ul>

      <h2>What's next</h2>
      <p>
        Choice v2 runs on Injective's EVM side and is live on testnet. It uses PancakeSwap Infinity's core contracts
        unchanged, with Choice's own fee controller, router and settlement contracts on top.
      </p>
    </>
  );
}
