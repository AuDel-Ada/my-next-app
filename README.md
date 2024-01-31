# My Vacation App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Styling by Tailwind

Based on tuto https://www.youtube.com/watch?v=ZVnjOPwW4ZA

As it is my first NextJS app, I am mixing comments and basic tricks.

## Getting Started

First CLI : npx create-next-app@13.4

npm run dev

## Project structure

- app folder : routing system container
- public folder : public assets like "images"

## Learn More

If you don't really know about NextJS :

- framework using "on top" of React to build full-stack app (so React is used as a library to build intective components, and NextJS has libraries + tools, as a specific routing library for example, so we don't use react-router);
- comes with a compiler (to transform and minify JS code) and a NodeJS runtime (to execute JS code). (...so, yep,full-stack)
- allows server-side rendering (SSR) : components are rendered on the server and contents are sending to the client
- allows static site generation : pages or components with static data can be built once, and serve on demand

Benefits :

- faster
- better for SEO

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
