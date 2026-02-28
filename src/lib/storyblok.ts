import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid";
import { Feature } from "@/components/Feature";
import { Cart } from "@/components/Cart";
import { Page } from "@/components/Page";

export const getStoryblokApi = storyblokInit({
  accessToken: 'FOp2ehJrKTCFioGMUTIONQtt',
  use: [apiPlugin], // CRITICAL: This must be present
  components: {
    hero: Hero,
    grid: Grid,
    feature: Feature,
    cart: Cart,
    page: Page,
  },
  apiOptions: {
    region: "eu", // Change to "eu" if your space is in Europe
  },
  enableFallbackComponent: true, // Optional: Renders a fallback if a component is missing
});
