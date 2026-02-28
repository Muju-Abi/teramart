"use client";

import { getStoryblokApi } from "@/lib/storyblok";
// import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { ReactNode } from "react";
// import { Hero } from "./Hero";
// import { Grid } from "./Grid";
// import { Feature } from "./Feature";
// import { Page } from "./Page";

// 1. Re-initialize for the client side
// storyblokInit({
// //   accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
//   accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
//   use: [apiPlugin],
//   components: {
//     hero: Hero,
//     grid: Grid,
//     feature: Feature,
//     cart: Cart,
//     page: Page,
//   },
//   apiOptions: {
//     region: "eu", // Or "eu"
//   },
// });

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  getStoryblokApi();
  return <>{children}</>;
}
