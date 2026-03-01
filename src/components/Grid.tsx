import {
  StoryblokServerComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";

// 1. Define the interface for the Grid fields
interface GridBlok extends SbBlokData {
  headline: string;
  // 'items' is an array of other Storyblok components (like Feature)
  items: SbBlokData[]; 
}

interface GridProps {
  blok: GridBlok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-red-100 py-16">
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          {blok.headline}
        </h2>
        <div className="grid md:grid-flow-col auto-cols-fr mt-12 gap-8">
          {/* Map through items using the built-in StoryblokServerComponent */}
          {blok.items.map((nestedBlok) => (
            <StoryblokServerComponent 
              blok={nestedBlok} 
              key={nestedBlok._uid} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
