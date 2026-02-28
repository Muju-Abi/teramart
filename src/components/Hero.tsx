import { storyblokEditable, SbBlokData } from "@storyblok/react/rsc";

// 1. Define the specific fields for the Hero component
interface HeroBlok extends SbBlokData {
  headline: string;
  content: string;
}

interface HeroProps {
  blok: HeroBlok;
}

export const Hero = ({ blok }: HeroProps) => {
  return (
    <section
      {...storyblokEditable(blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-center text-5xl md:text-7xl font-bold">
        {blok.headline}
      </h1>
      <p className="text-center text-xl mt-8">{blok.content}</p>
    </section>
  );
};
