# MRFSMS

Starter code for a virtual SMS provider website with:

- SMSBower-style clean UI
- PKR pricing
- dynamic markup (20% to 30%)
- manual SadaPay / UPaisa deposits
- admin approval flow
- OTP popup-ready webhook endpoint
- NextAuth email + Google auth scaffold
- Prisma schema for users, wallets, orders, deposits
- legal pages + support info placeholders

## Quick start

1. Copy `.env.example` to `.env`
2. Put your real values in `.env`
3. Install packages:
   ```bash
   npm install
   ```
4. Generate Prisma client:
   ```bash
   npm run prisma:generate
   npm run prisma:push
   ```
5. Run dev server:
   ```bash
   npm run dev
   ```
6. Open:
   `http://localhost:3000`

## Notes

- This project includes **real structure** and **working starter routes**, but you still need to:
  - set a real database
  - wire SMTP for verification/reset emails
  - finish NextAuth email verification callbacks
  - add file upload storage for payment screenshots
  - connect webhook URL in SMSBower dashboard
  - deploy to hosting

## Important routes

- `/` Home
- `/login`
- `/register`
- `/dashboard/buy`
- `/dashboard/orders`
- `/dashboard/wallet`
- `/admin/payments`
- `/terms`
- `/privacy`
- `/refund-policy`

## API routes included

- `GET /api/provider/prices`
- `POST /api/provider/buy-number`
- `GET /api/provider/status?id=...`
- `POST /api/provider/webhook`
- `POST /api/deposits/submit`
- `POST /api/deposits/approve`

## SMSBower notes

The code uses:
- `getPrices`
- `getNumberV2`
- `getStatus`
- `setStatus`
- webhook payloads

You should still verify exact country/service code mappings in production.

## Hosting

Can run on:
- VPS
- cheap Node.js hosting
- Railway / Render / Coolify / VPS with PM2 + Nginx

Shared hosting usually won't be ideal unless it supports Node.js properly.
