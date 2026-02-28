// import { getStoryblokApi } from "@storyblok/react/rsc";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

// 1. Define types for the Page Props
interface CartPageProps {
  params: Promise<{ slug: string }>;
}

// export const generateStaticParams = async () => {
//   const client = getStoryblokApi();
//   const response = await client.getStories({
//     // Ensure this matches your Storyblok "Tour" content type technical name
//     content_type: "cart", 
//     version: process.env.NODE_ENV === "development" ? "draft" : "published",
//   });

//   return response.data.stories.map((story: any) => ({ 
//     slug: story.slug 
//   }));
// };

const fetchCartPage = async (slug: string) => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  
  try {
    const response = await client.getStory(`carts/${slug}`, {
      version:
        process.env.NODE_ENV === "development" || isEnabled
          ? "draft"
          : "published",
    });
    return response.data.story;
  } catch (error) {
    // If Storyblok returns a 404, trigger Next.js notFound
    return null;
  }
};

// 2. Updated Component for Next.js 16 (Async Params)
const CartPage = async ({ params }: CartPageProps) => {
  // MUST await params in Next.js 16
  const { slug } = await params;
  
  const story = await fetchCartPage(slug);

  if (!story) {
    notFound();
  }

  return <StoryblokStory story={story} />;
};

  ///////
// const fetchCartPage = async (slug: string) => {
//   const client = getStoryblokApi();
//   const response = await client.getStory(`carts/${slug}`, {
//     version: "draft",
//   });
//   return response.data.story;
// }

// const CartPage = () => {
//   const story = await fetchCartPage("cart-page");
//   return <div>Cart Page</div>;
// };

export default CartPage;