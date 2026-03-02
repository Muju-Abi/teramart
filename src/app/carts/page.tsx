import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { RecommendedTour } from "@/components/RecommendedTour";

const fetchCartsPage = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
  
  try {
    const response = await client.getStory(`carts`, {
      version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
    });
    return response.data.story;
  } catch (error) {
    // If Storyblok returns a 404, trigger Next.js notFound
    return null;
  }
};

const fetchAllCarts = async () => {
  const { isEnabled } = await draftMode();
  const client = getStoryblokApi();
    try {
        const response = await client.getStories({
          version: process.env.NODE_ENV === "development" || isEnabled ? "draft" : "published",
        //   starts_with: "carts/",
          content_type: "cart", // Ensure this matches your Storyblok "Cart" content type technical name
        });
        return response.data.stories;
      } catch (error) {
    // If Storyblok returns a 404, trigger Next.js notFound
    return null;
  }
};

const CartsPage = async () => {
  const story = await fetchCartsPage();
  const carts = await fetchAllCarts();
  if (!story) {
    notFound();
  }
  // console.log("Rendering CartsPage with story:", story);
  return (
    <div>
        <StoryblokStory story={story} />;
        <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
            {carts?.map((cart: any) => (
                <RecommendedTour story={cart} key={cart.uuid || cart.content?._uid} />
            ))}
        </div>
    </div>
  );
    
}

export default CartsPage;

///////////////

// const CartsPage = () => {
//   return <div>Carts Page</div>;
// }

// export default CartsPage;