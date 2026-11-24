# Stravin Website (`stravin.dev`)

Single-page marketing site for Stravin built with Astro and configured for Cloudflare Workers Static Assets.

## Local Development

```bash
asdf install
pnpm install
pnpm dev
```

## Build & Verify

```bash
pnpm check
pnpm build
pnpm preview
```

## Cloudflare Workers Preview & Deploy

```bash
pnpm build && pnpm preview:cf
pnpm deploy
```
