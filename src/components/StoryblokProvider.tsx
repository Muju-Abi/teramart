"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Feature } from "@/components/Feature";
import { Testimonial } from "@/components/Testimonial";
import { Cart } from "@/components/Cart";
import { RecommendedTours } from "./RecommendedTours";
import { Page } from "@/components/Page";

import { getStoryblokApi } from "@/lib/storyblok";
import { ReactNode } from "react";

storyblokInit({
  accessToken: 'FOp2ehJrKTCFioGMUTIONQtt',
//   accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_API_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    cart: Cart,
    recommended_tours: RecommendedTours,
    page: Page,
  },
  apiOptions: {
    region: process.env.STORYBLOK_REGION || 'eu',
    endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
  },
  enableFallbackComponent: true, // Optional: Renders a fallback if a component is missing
});

export default function StoryblokProvider({ children }: { children: ReactNode }) {
  getStoryblokApi();
  return <>{children}</>;
}
