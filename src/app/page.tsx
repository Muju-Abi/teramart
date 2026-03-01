import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

const fetchHomePage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  
  try {
    const response = await client.getStory(`home`, {
      version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
      resolve_relations: ["recommended_tours.tours"], // Use array for consistency
    });
    return response.data.story;
  } catch (error) {
    // If Storyblok returns a 404, trigger Next.js notFound
    return null;
  }
};

const HomePage = async () => {
  const story = await fetchHomePage();
  if (!story) {
    notFound();
  }
  // console.log("Rendering HomePage with story:", story);
  return <StoryblokStory story={story} />;
}
// const HomePage = () => {
//   return <div>Home Page - Hello World</div>;
// };


/////////////

// import { getStoryblokApi } from "@/storyblok";
/////
// import { getStoryblokApi } from "@/lib/storyblok";
// import { StoryblokStory } from "@storyblok/react/rsc";
// import { draftMode } from "next/headers";
// import { notFound } from "next/navigation";

// // 1. Fetching logic with Next.js 16 Async DraftMode
// const fetchHomePage = async () => {
//   // In Next.js 16, draftMode() is an async function
//   const { isEnabled } = await draftMode();
//   const client = getStoryblokApi();
  
//   try {
//     const response = await client.getStory(`home`, {
//       version:
//         process.env.NODE_ENV === "development" || isEnabled
//           ? "draft"
//           : "published",
//       resolve_relations: ["recommended_tours.tours"], // Use array for consistency
//     });
//     return response.data.story;
//   } catch (error) {
//     console.error("Storyblok fetch error:", error);
//     return null;
//   }
// };

// const HomePage = async () => {
//   const story = await fetchHomePage();

//   if (!story) {
//     notFound(); // Trigger the Next.js 404 page if "home" slug isn't found
//   }

//   return (
//     <StoryblokStory
//       bridgeOptions={{ resolveRelations: ["recommended_tours.tours"] }}
//       // bridgeOptions={{ resolveRelations: ["recommended_tours.carts"] }}
//       story={story}
//     />
//   );
// };

export default HomePage;

