export const CORE_REPO_URL = 'https://github.com/stravin-dev/core';

export interface MetricItem {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

export interface FeatureItem {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
}

export const HERO_METRICS: readonly MetricItem[] = [
  {
    value: 'Stateless',
    label: 'Zero mutable storage hosts',
    detail: 'Disposable NVMe caches backed by S3 and DynamoDB',
  },
  {
    value: 'Local-First',
    label: 'Home-region push commits',
    detail: 'Commits locally to S3 + DynamoDB; replicates async across regions',
  },
  {
    value: 'Modular',
    label: 'Five focused Go daemons',
    detail: 'edge, node, pack, ctrl, hook — zero custom Raft or Paxos',
  },
];

export const CORE_FEATURES: readonly FeatureItem[] = [
  {
    tag: 'STORAGE',
    title: 'Immutable S3 Pack Plane',
    description:
      'Content-addressed .pack, .idx, .midx, and commit-graph objects with 256-way hash prefix sharding and durability-before-visibility.',
  },
  {
    tag: 'COORDINATION',
    title: 'Adaptive DynamoDB Ref-CAS',
    description:
      'Per-reference compare-and-swap via TransactWriteItems across sharded partitions—eliminating single-manifest ceilings and custom consensus logs.',
  },
  {
    tag: 'MULTI-REGION',
    title: 'Active-Active High Availability',
    description:
      'Local reads in every region with transparent origin fallback, home-region write routing, fencing epochs, and automated failover scrub.',
  },
  {
    tag: 'HOOKS',
    title: 'Zero-Latency Wasm Gates',
    description:
      'Synchronous wazero WebAssembly hooks run in parallel with S3 uploads (~0 ms net latency), paired with a DynamoDB Streams async webhook outbox.',
  },
  {
    tag: 'COMPUTE',
    title: 'Stateless Sandboxed Nodes',
    description:
      'Disposable NVMe caches routed by tenant-aware rendezvous hashing, Linux namespace and cgroup v2 isolation, and out-of-band sharded compaction.',
  },
  {
    tag: 'SCALE',
    title: 'Built for AI Agent Fleets',
    description:
      'Multi-tenant from day one with per-tenant cache quotas, envelope encryption, OpenTelemetry LGTM tracing, and local Floci chaos testing.',
  },
];
