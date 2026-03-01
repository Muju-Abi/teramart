import { RecommendedTour } from "@/components/RecommendedTour";

export const RecommendedTours = (params: any) => {
//   console.log("Rendering RecommendedTours with params:", params);
  return (
        <section>
            <h2>{params.blok.headline}</h2>
            {params.blok.tours?.map((tour: any) => (
                <RecommendedTour story={tour} key={tour.content?._uid} />
            ))}
        </section>
    );
};

// import { RecommendedTour } from "@/components/RecommendedTour";
// import { storyblokEditable, type StoryblokComponentType } from "@storyblok/react/rsc";

// // 1. Define a strict interface for the Storyblok 'Blok' 
// interface RecommendedToursProps {
//   blok: {
//     headline: string;
//     tours: any[]; // Ideally, replace 'any' with your Tour story type
//     _uid: string;
//     component: string;
//   };
// }

// export const RecommendedTours = ({ blok }: RecommendedToursProps) => {
//   // 2. Next.js 16 / React 19 safety: Ensure blok exists before rendering
//   if (!blok) return null;

//   return (
//     <section
//       {...storyblokEditable(blok)}
//       className="py-16 container mx-auto w-full px-4"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-center">
//         {blok.headline}
//       </h2>
      
//       <div className="grid md:grid-cols-2 gap-8 mt-16">
//         {blok.tours?.map((tour) => (
//           <RecommendedTour 
//             story={tour} 
//             key={tour.uuid || tour.content?._uid} 
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
