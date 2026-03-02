import Link from "next/link";

export const RecommendedTour = (props: any) => {
    console.log("Its RecommendedTour with props:", props);
    return (
        <div>
            <Link href={`/${props.story.full_slug}`}>
                <h3>{props.story.content.name}</h3>
            </Link>
            <Link className="font-bold text-base mt-8 block underline" href={`/${props.story.full_slug}`}>
              View Tour
            </Link>
        </div>
    );
};

// import Link from "next/link";
// import Image from "next/image"; // Improved for Next.js 16

// // 1. Define the Story structure for better Type Safety
// interface TourStory {
//   story: {
//     full_slug: string;
//     content: {
//       name: string;
//       price: string | number;
//       location: string;
//       main_image: {
//         filename: string;
//         alt: string;
//       };
//     };
//   };
// }

// export const RecommendedTour = ({ story }: TourStory) => {
//   // 2. Destructure for cleaner access
//   const { content, full_slug } = story;

//   // Next.js 16 uses the latest Image component features
//   return (
//     <div className="bg-white rounded-sm shadow overflow-hidden">
//       <div className="relative aspect-video w-full">
//         <Image
//           src={`${content.main_image.filename}/m/736x414/filters:quality(70)`}
//           alt={content.main_image.alt || "Tour image"}
//           fill // Uses the aspect-ratio of the container
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 50vw"
//           loading="lazy"
//         />
//       </div>

//       <div className="p-8">
//         <div className="flex gap-4 justify-between text-lg font-bold">
//           <h3>{content.name}</h3>
//           <p>
//             {Number(content.price).toLocaleString("en-US", {
//               style: "currency",
//               currency: "TWD",
//               minimumFractionDigits: 0,
//             })}
//           </p>
//         </div>
        
//         <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
//           {content.location}, Taiwan
//         </p>

//         <Link
//           className="font-bold text-base mt-8 block underline hover:text-blue-600 transition-colors"
//           href={`/${full_slug}`}
//         >
//           View Tour
//         </Link>
//       </div>
//     </div>
//   );
// };
