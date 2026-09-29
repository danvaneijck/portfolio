export const SITE_URL = "https://danvan.xyz";

export const person = {
  name: "Dan Van Eijck",
  fullName: "Daniel Van Eijck",
  role: "Senior full-stack engineer",
  roleDetail: ["Backend focus", "Rust", "AWS", "Web & mobile"],
  location: "Wellington, New Zealand",
  email: "danielvaneijck@gmail.com",
};

export const links = {
  cv: "/Daniel_Van_Eijck_CV.pdf",
  github: "https://github.com/danvaneijck",
  linkedin: "https://www.linkedin.com/in/dan-van-eijck-30391718b",
  source: "https://github.com/danvaneijck/portfolio",
};

export type Figure = { label: string; value: string };

export type Product = {
  slug?: string;
  name: string;
  context: string;
  summary: string;
  part: string;
  figures: Figure[];
  surfaces: string[];
  href?: string;
};

export const products: Product[] = [
  {
    slug: "benchmarker",
    name: "BenchMarker",
    context: "Building & cold-chain monitoring",
    summary:
      "Monitoring and building management for hotels, food-safety and cold-chain operations, and commercial property. It watches temperature, humidity, CO2, doors, HVAC and energy, raises alarms, and produces compliance reports.",
    part:
      "The multi-tenant permission model, the ingestion and alarm pipeline, the iOS and Android app and the security review. I'm the main contributor to the React web app, and I led the new building-management app.",
    figures: [
      { label: "organisations", value: "~70" },
      { label: "device types", value: "~15" },
    ],
    surfaces: ["Web dashboard", "iOS & Android", "Building management", "Django · Hasura"],
  },
  {
    slug: "gasowl",
    name: "GasOwl",
    context: "LPG level monitoring",
    summary:
      "A sensor on a household or business LPG bottle reports how much gas is left. The app warns you before you run out and can reorder a refill from your supplier. Two subscription tiers, billed through Stripe on the web and in-app on mobile.",
    part: "The serverless backend, built largely solo, the Expo app for iOS, Android and web, and the subscription integrations.",
    figures: [
      { label: "installations", value: "260+" },
      { label: "Lambda functions", value: "26" },
    ],
    surfaces: ["iOS, Android & web", "Lambda · CDK", "Cognito", "Stripe & in-app"],
  },
  {
    name: "UltraCall",
    context: "Connected aged care · R&D",
    summary:
      "A sound-activated personal alarm for older people living at home. When someone calls for help, the carers they've invited are alerted by push, SMS and email. Over time it learns daily patterns and raises care requests for clinicians.",
    part: "I've worked on both the backend and the mobile app.",
    figures: [],
    surfaces: ["iOS & Android", "Clinician web portal", "Django · Hasura"],
  },
  {
    slug: "device-manager",
    name: "Device Manager",
    context: "IoT ingest hub",
    summary:
      "The internal hub between the device fleet and the products. It takes packets from LoRaWAN network servers, AWS IoT and CoAP devices, normalises them, sends commands back down, and routes data to each product.",
    part: "Lead developer, plus the serverless front door that stops an outage losing data, and the self-hosted network infrastructure behind it.",
    figures: [
      { label: "gateways", value: "~720" },
      { label: "active devices", value: "~1,400" },
    ],
    surfaces: ["Django · Celery", "API Gateway · Lambda · SQS", "LoRaWAN · MQTT · CoAP"],
  },
];

export const injective: Product[] = [
  {
    slug: "choice-exchange",
    name: "Choice Exchange",
    context: "Decentralised exchange",
    summary:
      "A DEX on Injective with liquidity pools, vaults, staking rewards and zaps. Its order router splits trades across its own pools and Injective's orderbook when that gets a better price. 0.05% of every swap goes to Injective's burn auction.",
    part: "The CosmWasm contracts, the trading app, the order router, and the indexing and API platform behind them.",
    figures: [
      { label: "cumulative volume", value: "$10.8M" },
      { label: "user deposits", value: "~$600k" },
    ],
    surfaces: ["Rust · CosmWasm", "React · TypeScript", "Postgres · Hasura"],
    href: "https://choice.exchange",
  },
  {
    slug: "trading-engine",
    name: "Low-latency trading engine",
    context: "Rust · in production",
    summary:
      "An async Rust engine that streams market data over gRPC and websockets into event-sourced, single-actor state with no locks. Any production session replays deterministically, so every release is tested against recorded real-world data. Only one crate can sign.",
    part: "I designed and built it, from Node.js to Rust v1 to Rust v2, measuring each version.",
    figures: [
      { label: "~250 routes evaluated in", value: "~60 ms" },
      { label: "tests", value: "~2,000" },
    ],
    surfaces: ["Rust · tokio", "gRPC · websockets", "event sourcing"],
  },
];

export const platform = [
  {
    title: "Security",
    text: "A CI gate across 13 apps that blocks deploys with fixable high or critical vulnerabilities, and a role-based API for support tooling with hashed per-person keys and a full audit log.",
  },
  {
    title: "Releases",
    text: "A release register that links every deploy across 13 apps to its commit, security scan and rollback path.",
  },
  {
    title: "Observability",
    text: "Overhauled logging and monitoring across the fleet (Prometheus, Grafana, Loki, Sentry) and found $13–22k a year in AWS savings.",
  },
  {
    title: "Infrastructure",
    text: "Self-hosted LoRaWAN network server and MQTT broker, and a gateway manager on EC2 with zero-touch provisioning and remote-access tunnels.",
  },
];

export const openSource = [
  {
    name: "trippy-mcp",
    href: "https://www.npmjs.com/package/trippy-mcp",
    hrefLabel: "npm",
    text: "An MCP server that lets AI agents trade on Injective with guardrails: a policy engine with spend caps and a contract allowlist, an encrypted keystore that stays on your machine, and an append-only audit log.",
  },
  {
    name: "Trippy Terminal",
    href: "https://trade.trippyinj.xyz",
    hrefLabel: "trade.trippyinj.xyz",
    text: "A non-custodial trading terminal for Injective. It combines GraphQL, REST, websocket and gRPC-web feeds into real-time market views, with swaps through the Choice router and perps you manage on the chart.",
  },
  {
    name: "sprout.fun",
    href: "https://trysprout.fun",
    hrefLabel: "trysprout.fun",
    text: "A token launch platform on Injective's EVM, with its own Solidity contracts, indexer and real-time websocket API. Tokens graduate into Choice Exchange pools. 200+ launches so far.",
  },
];

export const toolbox: { group: string; items: string }[] = [
  { group: "Languages", items: "Rust, Python, TypeScript, SQL. Working knowledge of Solidity, Go and Java." },
  { group: "Rust", items: "tokio, tonic (gRPC), serde, tracing, CosmWasm, fuzz and mutation testing" },
  {
    group: "AWS",
    items: "Lambda, API Gateway, SQS, EventBridge, Cognito, Aurora/RDS, ECS Fargate, IoT Core, S3, CloudWatch, CDK, CodePipeline",
  },
  { group: "Data", items: "PostgreSQL, Redis, Hasura GraphQL, Elasticsearch, event sourcing" },
  { group: "Security", items: "Multi-tenant isolation, RBAC, JWT/Cognito, audit logging, OWASP ASVS, CI vulnerability scanning" },
  {
    group: "Ops",
    items: "Docker, Linux, GitHub Actions, Bitbucket Pipelines, AWS Amplify, Expo EAS, Traefik, nginx, Prometheus, Grafana, Loki, Sentry",
  },
  { group: "Protocols", items: "REST, GraphQL, gRPC, WebSockets, MQTT, CoAP, LoRaWAN" },
  { group: "Frontend", items: "React, TypeScript, Next.js, Vite, React Native / Expo, Apollo GraphQL, Tailwind, real-time charts" },
  { group: "AI tooling", items: "MCP servers, LLM agent integrations with role-gated, audited access, Claude Code" },
];

export const experience = [
  {
    org: "Vention Lab",
    dates: "2023 – now",
    role: "Lead Web Services Software Engineer",
    text: "Lead backend engineer across BenchMarker, GasOwl, UltraCall and Device Manager. I also build the mobile apps, mentor the junior developers and review the team's pull requests.",
  },
  {
    org: "Injective ecosystem",
    dates: "2023 – now",
    role: "Independent Rust & distributed systems engineer",
    text: "Choice Exchange, the trading engine, and the open-source projects above, all running on servers I manage.",
  },
  {
    org: "Design Electronics (SenSys)",
    dates: "2020 – 2023",
    role: "Software Engineer",
    text: "GasOwl's serverless backend, BenchMarker's ingestion and alarm pipeline, and a REST to GraphQL migration.",
  },
  {
    org: "Victoria University of Wellington",
    dates: "2019 – 2020",
    role: "Research Assistant",
    text: "Blockchain in supply chains: using oracles to record each production step as an auditable record.",
  },
  {
    org: "Victoria University of Wellington",
    dates: "2016 – 2020",
    role: "Bachelor of Engineering with Honours",
    text: "Software engineering.",
  },
];
