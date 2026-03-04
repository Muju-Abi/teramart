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
  bgimage?: { filename: string };
  bgcolor?: { color: string };
}

interface GridProps {
  blok: GridBlok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-green-100 py-16" style={{ backgroundImage: blok.bgimage && typeof blok.bgimage === 'object' && 'filename' in blok.bgimage ? `url(${blok.bgimage.filename})` : undefined, backgroundColor: blok.bgcolor && typeof blok.bgcolor === 'object' && 'color' in blok.bgcolor ? blok.bgcolor.color : undefined }}>
      <div className="container mx-auto w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
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
