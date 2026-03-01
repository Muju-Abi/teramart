import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Feature } from "@/components/Feature";
import { Testimonial } from "@/components/Testimonial";
import { Cart } from "@/components/Cart";
import { RecommendedTours } from "@/components/RecommendedTours";
import { Page } from "@/components/Page";

export const getStoryblokApi = storyblokInit({
  accessToken: 'FOp2ehJrKTCFioGMUTIONQtt',
//   accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin], // CRITICAL: This must be present
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
