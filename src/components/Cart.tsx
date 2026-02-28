import {
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";

// 1. Define the interfaces for your Cart fields
interface StoryblokImage {
  filename: string;
  alt: string;
}

interface CartBlok extends SbBlokData {
  name: string;
  main_image: StoryblokImage;
  introduction: string;
  body: any; // Storyblok Rich Text is typically typed as 'any' or 'ISbRichtext'
}

interface CartProps {
  blok: CartBlok;
}

// 2. Helper to safely extract dimensions from Storyblok asset URLs
const getDimensions = (url: string) => {
  const parts = url.split("/");
  if (parts.length < 6) return { width: 1500, height: 1000 };
  const dimensions = parts[5].split("x");
  return {
    width: parseInt(dimensions[0]) || 1500,
    height: parseInt(dimensions[1]) || 1000,
  };
};

export const Cart = ({ blok }: CartProps) => {
  const mainImageDims = getDimensions(blok.main_image.filename);

  return (
    <main
      {...storyblokEditable(blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold">{blok.name}</h1>
      
      <Image
        className="mt-12 w-full object-cover rounded-lg"
        src={blok.main_image.filename}
        alt={blok.main_image.alt || "Cart image"}
        width={mainImageDims.width}
        height={mainImageDims.height}
        sizes="(max-width: 1538px) 100vw, 1504px"
        priority={true}
      />

      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {blok.introduction}
      </p>
    </main>
  );
};
