# Triangletech — Landlord Portal

A professional subscription-based landlord database platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Pages Included

| Route | Page |
|---|---|
| `/dashboard` | Overview dashboard with KPIs, recent checks, activity feed |
| `/search` | Tenant search form + Equifax results table |
| `/addrecord` | Multi-section form to submit tenancy records |
| `/reports` | Report history with filters and PDF download |
| `/members` | Members directory with plan and stats |
| `/compliance` | Alerts, SAR tracking, Privacy Act checklist |
| `/audit` | Immutable audit log with filtering |
| `/disputes` | Dispute management with resolution tracking |
| `/subscription` | Plan comparison, PayPal billing, invoice history |
| `/settings` | Profile, security, 2FA, and notifications |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Mock Data:** `/lib/data.ts`

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it auto-redirects to `/dashboard`.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
triangletech/
├── app/
│   ├── layout.tsx          # Root layout (sidebar + topbar)
│   ├── page.tsx            # Redirects to /dashboard
│   ├── globals.css         # Tailwind + component styles
│   ├── dashboard/page.tsx
│   ├── search/page.tsx
│   ├── addrecord/page.tsx
│   ├── reports/page.tsx
│   ├── members/page.tsx
│   ├── compliance/page.tsx
│   ├── audit/page.tsx
│   ├── disputes/page.tsx
│   ├── subscription/page.tsx
│   └── settings/page.tsx
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Topbar.tsx          # Top header bar
│   └── ui/
│       └── shared.tsx      # Reusable UI components
├── lib/
│   └── data.ts             # All mock data
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Next Steps (Real Integration)

- **Equifax API** — Replace mock credit check results with live Equifax Consumer Data API calls
- **PayPal** — Integrate PayPal Subscriptions API for billing management
- **Database** — Connect PostgreSQL (via Prisma or Drizzle ORM) for persistent tenant records
- **Auth** — Add NextAuth.js or Clerk for landlord authentication
- **File Storage** — S3 or Cloudflare R2 for uploaded supporting documents
- **Email** — Resend or SendGrid for dispute notifications and billing receipts
- **Compliance** — Australian Privacy Act — ensure all data handling follows APP guidelines
