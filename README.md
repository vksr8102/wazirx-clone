# Next.js WazirX Landing Page Clone

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Folder Structure

```
/src
  ├── components
  │   ├──layout
  │      ├── Navbar.tsx
  │      ├── Footer.tsx
  │      ├── Layout.tsx
  │   
  │
  ├── contents
  │   ├── home
  │   │   ├── HeroSection.jsx
  │   │   ├── FeatureSection.jsx
  │   │   ├── CompanyTicker.jsx
  │   │   ├── CryptoTicker.jsx
  │   │   ├── FutureSectionSecond.jsx
  │   │   ├── Security.jsx
  │   │   ├── QuickStartGuide.jsx
  │
  │
  ├── styles
  │   ├── globals.css
  │   ├── home.module.css (or Tailwind setup if preferred)
  │
  ├── public
  │   ├── assets (Images, icons, etc.)
  │
  ├── app 
  │   ├── layout.jsx
  │   ├── page.tsx
```

## Project Overview

This project is a **WazirX landing page clone** built using Next.js. The home page is structured under `contents/home`, where all sections like Hero, Features, and Testimonials are included.

### Features
- Responsive UI using Tailwind CSS / CSS Modules
- Modular components for easy scalability
- Optimized fonts with Next.js automatic font loading
- Deployed on **Vercel** for fast global accessibility

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

