import { getStoryblokApi } from "@storyblok/react/rsc";

const fetchCartPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(slug, {});
}

const CartPage = () => {
  return <div>Cart Page</div>;
};

export default CartPage;