This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# ALX Listing App

The **ALX Listing App** is a simplified Airbnb clone built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It focuses on showcasing property listings using reusable UI components, a scalable project structure, and responsive design principles.

---

## 📌 Project Goals

The goal of this project is to:

- Recreate a functional and responsive **Airbnb-style property listing page**
- Practice building reusable and maintainable **React components**
- Structure a real-world **Next.js project** with best practices
- Use **TypeScript** for type safety and scalability
- Apply **Tailwind CSS** for efficient and consistent styling

---

## 🗂️ Project Structure

```plaintext
components/
  common/
    Card.tsx        → Reusable UI card for displaying property data
    Button.tsx      → Reusable button for actions like "Book Now"

interfaces/
  index.ts          → TypeScript interfaces for props (CardProps, ButtonProps, etc.)

constants/
  index.ts          → Constants such as API URLs, static strings, or configuration values

public/
  assets/           → Static images, icons, or SVGs used across the UI

pages/
  index.tsx         → Main landing/listing page of the app

styles/
  globals.css       → Tailwind imports and global styles
