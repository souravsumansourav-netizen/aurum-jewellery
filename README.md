# AURUM — Fine Jewellery Store

A luxury jewellery product listing page (PLP) with in-store availability checking.  
Built with React + TypeScript + Tailwind CSS + Vite.

---

## What This App Does

- Shows 9 premium jewellery products in an editorial grid
- User adds products to cart — cart is saved across sessions via localStorage
- When user returns in a new session, a popup appears showing saved cart items
- User enters a PIN code to check store availability
- Three scenarios are handled:
  - **Scenario A** — Both products available at a nearby store
  - **Scenario B** — Partial availability nearby + full availability at a farther store
  - **Scenario C** — Nothing available in city → shows similar products from nearest store

---

## Folder Structure

aurum-jewellery/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── src/
    ├── main.tsx
    ├── index.css
    ├── App.tsx
    ├── data/
    │   ├── products.ts
    │   └── stores.ts
    ├── hooks/
    │   └── useCart.ts
    └── components/
        ├── Navbar.tsx
        ├── ProductCard.tsx
        ├── StoreCTAs.tsx
        ├── ReturnPopup.tsx
        ├── ScenarioA.tsx
        ├── ScenarioB.tsx
        └── ScenarioC.tsx

---

## Run Locally

Prerequisites: Node.js v18 or above

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Open in browser:
   http://localhost:5173

---

## Test All 3 Scenarios

Use these PIN codes after adding products to cart and returning in a new session:

PIN Code  | Scenario | Result
560001    | B        | 1 product at Indiranagar (2.3km), all at Koramangala (18km)
560034    | A or B   | Malabar Gold Malleshwaram (5km)
110001    | C        | Nothing available, shows similar products
Any other | C        | Nothing available, shows similar products

---

## Deploy to Netlify

Option 1 — Via GitHub (Recommended)
1. Push this project to a GitHub repository
2. Go to netlify.com → Add new site → Import from Git
3. Select your GitHub repo
4. Netlify auto-detects from netlify.toml:
   - Build command: npm run build
   - Publish directory: dist
5. Click Deploy site

Option 2 — Manual
1. Run: npm run build
2. Drag the generated /dist folder to netlify.com/drop

---

## Tech Stack

React 18        — UI components
TypeScript      — Type safety
Tailwind CSS v3 — Styling
Vite            — Build tool
lucide-react    — Icons
localStorage    — Cart and session persistence

---

## Color Palette

Ivory    #FAF7F2   Background
Gold     #B8960C   Accents, CTAs
Charcoal #1A1A1A   Primary text
Muted    #6B6B6B   Secondary text
Emerald  #2D6A4F   Scenario A (available)
Sienna   #A0522D   Scenario C (unavailable)

---

## How Session Detection Works

1. First visit: user adds to cart, aurum_cart saved in localStorage
2. aurum_session_seen flag set to true on first visit
3. Next visit: both flag and cart detected, popup fires automatically
4. Popup shows saved cart items + PIN code input

To test: add items to cart, close the tab, reopen the URL.

---

Built as a prototype demo for jewellery retail store availability UX.
