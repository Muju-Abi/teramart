import {
  StoryblokServerComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";

// 1. Define the interface for the Page Content Type
interface PageBlok extends SbBlokData {
  // In Storyblok, the field holding components is usually called 'body' or 'blocks'
  blocks: SbBlokData[];
}

interface PageProps {
  blok: PageBlok;
}

export const Page = ({ blok }: PageProps) => {
  return (
    <main {...storyblokEditable(blok)}>
      {/* 
          Next.js 16 handles the rendering of these child 
          Server Components automatically. 
      */}
      {blok.blocks.map((nestedBlok) => (
        <StoryblokServerComponent 
          blok={nestedBlok} 
          key={nestedBlok._uid} 
        />
      ))}
    </main>
  );
};
