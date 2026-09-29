import type { ComponentType } from "react";
import type { Figure } from "./site";
import BenchMarker from "../pages/work/BenchMarker";
import GasOwl from "../pages/work/GasOwl";
import DeviceManager from "../pages/work/DeviceManager";
import ChoiceExchange from "../pages/work/ChoiceExchange";
import TradingEngine from "../pages/work/TradingEngine";
import PlatformOperations from "../pages/work/PlatformOperations";

export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  description: string;
  figures: Figure[];
  stack: string[];
  links?: { label: string; href: string }[];
  Body: ComponentType;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "benchmarker",
    title: "BenchMarker",
    label: "Building & cold-chain monitoring · Vention Lab and SenSys",
    description:
      "Building and cold-chain monitoring for ~70 organisations: a database-enforced permission model, the ingestion and alarm pipeline, and the web and mobile apps.",
    figures: [
      { label: "organisations", value: "~70" },
      { label: "device types", value: "~15" },
      { label: "ASVS L2 controls reviewed", value: "260" },
    ],
    stack: ["Django", "Hasura GraphQL", "PostgreSQL", "Celery · RabbitMQ", "Cognito", "React", "React Native / Expo", "Elasticsearch"],
    Body: BenchMarker,
  },
  {
    slug: "gasowl",
    title: "GasOwl",
    label: "LPG monitoring · SenSys and Vention Lab",
    description:
      "LPG bottle monitoring at 260+ installations: a serverless AWS backend built largely solo, and one Expo app for iOS, Android and web.",
    figures: [
      { label: "installations", value: "260+" },
      { label: "Lambda functions", value: "26" },
      { label: "subscription tiers", value: "2" },
    ],
    stack: ["AWS CDK", "Lambda", "API Gateway", "Aurora PostgreSQL", "Hasura on Fargate", "Cognito", "EventBridge · SQS", "Stripe", "Expo / React Native"],
    Body: GasOwl,
  },
  {
    slug: "device-manager",
    title: "Device Manager",
    label: "IoT ingest · Vention Lab · lead developer",
    description:
      "The ingest hub behind ~1,400 active devices: one interface over five network providers, and a serverless front door so an outage doesn't lose data.",
    figures: [
      { label: "gateways", value: "~720" },
      { label: "active devices", value: "~1,400" },
      { label: "network providers", value: "5" },
    ],
    stack: ["Python", "Django", "Celery", "PostgreSQL", "AWS CDK", "API Gateway", "Lambda", "SQS", "CloudWatch", "LoRaWAN", "MQTT", "CoAP"],
    Body: DeviceManager,
  },
  {
    slug: "choice-exchange",
    title: "Choice Exchange",
    label: "Decentralised exchange · Injective",
    description:
      "A DEX on Injective with $10.8M in volume: audited CosmWasm contracts, a multi-venue order router, a Rust indexer and the React trading app.",
    figures: [
      { label: "cumulative volume", value: "$10.8M" },
      { label: "user deposits, Sept 2026", value: "~$600k" },
      { label: "external audit", value: "SCV Security" },
    ],
    stack: ["Rust", "CosmWasm", "cargo-mutants", "Substreams", "PostgreSQL", "Django", "Celery · Redis", "Hasura", "React", "TypeScript", "Solidity / Foundry"],
    links: [
      { label: "choice.exchange", href: "https://choice.exchange" },
      { label: "Contracts on GitHub", href: "https://github.com/choice-exchange/choice_exchange" },
    ],
    Body: ChoiceExchange,
  },
  {
    slug: "trading-engine",
    title: "A low-latency trading engine in Rust",
    label: "Rust · Injective · in production",
    description:
      "An event-sourced async Rust engine that evaluates ~250 routes in ~60 ms, replays production deterministically and has ~2,000 tests.",
    figures: [
      { label: "~250 routes evaluated in", value: "~60 ms" },
      { label: "tests", value: "~2,000" },
      { label: "contested opportunities won", value: "~80%" },
    ],
    stack: ["Rust", "tokio", "tonic (gRPC)", "websockets", "serde", "tracing", "event sourcing"],
    Body: TradingEngine,
  },
  {
    slug: "platform-operations",
    title: "Keeping four products safe to change",
    label: "Security, releases & observability · Vention Lab",
    description:
      "A CI security gate across 13 apps, an audited role-based API for support tooling, a release register, and a monitoring overhaul.",
    figures: [
      { label: "apps behind the CI gate", value: "13" },
      { label: "RunDeck jobs versioned", value: "142" },
      { label: "AWS savings a year", value: "$13–22k" },
    ],
    stack: ["Trivy", "pip-audit", "Bitbucket Pipelines", "GitHub Actions", "AWS Amplify", "Expo EAS", "Prometheus", "Grafana", "Loki", "Sentry"],
    Body: PlatformOperations,
  },
];

export const findCaseStudy = (slug: string | undefined) => caseStudies.find((c) => c.slug === slug);
