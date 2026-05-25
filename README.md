# Website Starter

A production-minded Next.js starter foundation for premium website projects.

This repository is intended to become real project infrastructure. It is not a throwaway sandbox and should stay clean, neutral, reusable, and approval-gated.

## Current Scope

Approved and active:

- Local development foundation
- Premium frontend tooling
- Local QA scripts
- Starter documentation
- Placeholder-only environment configuration

Not active until separately approved:

- Deployment
- GitHub Actions / CI
- Vercel or Netlify linking
- DNS or production domains
- CMS connections
- Analytics or Search Console
- Email providers
- Payments
- Zenoti or other live business integrations
- Real client/customer/business data

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui / Radix-ready component setup
- Framer Motion
- GSAP
- Lenis
- React Hook Form
- Zod
- next-sitemap
- @next/bundle-analyzer
- Playwright
- ESLint

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev        # local development server
npm run lint       # lint check
npm run build      # production build check
npm run qa:browser # Playwright desktop/mobile smoke checks
npm run sitemap    # generate sitemap/robots using configured site URL
npm run analyze    # bundle analyzer build using ANALYZE=true
```

## Environment Variables

Use `.env.local` for local values. Do not commit secrets.

Start from:

```bash
cp .env.example .env.local
```

Current placeholders are intentionally non-production. Replace only after project approval.

## Approval Gates

Stop and ask Casper before:

- Connecting any API/account
- Adding secrets or real environment values
- Deploying to staging or production
- Linking Vercel/Netlify/GitHub automation
- Changing DNS or domains
- Connecting CMS, analytics, Search Console, email, Stripe, Zenoti, or business systems
- Using real business/client/customer/staff data
- Adding significant new dependencies
- Resolving security audit findings through breaking upgrades/downgrades

## Production Readiness Requirements

Before any staging or production deployment:

- `npm run lint` passes
- `npm run build` passes
- `npm run qa:browser` passes
- Dependency audit is reviewed
- No unresolved audit findings launch without explicit approval
- Environment variables are reviewed
- Placeholder copy/assets/domains are replaced
- Accessibility and mobile QA are reviewed
- SEO metadata, sitemap, robots, schema, and canonical strategy are reviewed
- Rollback plan is clear

## Security / Audit Note

The current audit finding previously observed was tied to Next.js' nested PostCSS dependency. Risk was low for local-only work because there was no deployment, no public traffic, no CMS, no APIs, and no untrusted CSS input.

`npm audit fix --force` is rejected unless explicitly approved because it can cause major breaking downgrades. Before staging or production, re-run audit and resolve through safe normal dependency updates where available.

## Project Standard

This starter should remain neutral. Do not hard-code real business names, client data, production domains, tracking IDs, API credentials, or live integration details until that specific project has been approved.
