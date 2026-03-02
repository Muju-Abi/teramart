import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

// 1. Define the specific fields from your Storyblok schema
interface FeatureBlok extends SbBlokData {
  headline: string;
  content: string;
  // Add other fields like 'image' or 'link' here if needed
}

// 2. Type the props using the interface
interface FeatureProps {
  blok: FeatureBlok;
}

export const Feature = ({ blok }: FeatureProps) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white p-8 rounded-sm shadow"
    >
      <h3 className="font-bold text-3xl text-orange-600">{blok.headline}</h3>
      <p className="mt-6 text-lg">{blok.content}</p>
    </div>
  );
};
