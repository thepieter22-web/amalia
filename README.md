# Carpetz E-commerce Website

Premium Next.js e-commerce foundation for **Carpetz**, focused on **logomatten op maat** with:

- Homepage with premium conversion-focused layout
- Product overview and dedicated custom logo mat page
- Configurator-first shopping flow
- Hybrid quote flow (round shapes, >10 qty, manual quote)
- Cart and checkout
- Quote request page
- Payment-ready checkout architecture (no live provider yet)
- Dutch copy, Belgium / Benelux oriented

## Tech stack

- Next.js App Router
- TypeScript
- Zustand for cart/configurator/quote state
- Plain CSS for easy maintenance

## Install

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to GitHub + Vercel

### GitHub

```bash
git init
git add .
git commit -m "Initial Carpetz ecommerce build"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPO.git
git push -u origin main
```

### Vercel

1. Create a new project in Vercel
2. Import your GitHub repo
3. Keep default settings
4. Deploy

## Notes

- Payment is **payment-ready only** in this phase.
- Logo upload is **frontend-only** and stored in browser state.
- If the customer chooses a **round shape** or **quantity above 10**, the configurator switches to **quote mode**.
- VAT is shown both **excl.** and **incl.**
