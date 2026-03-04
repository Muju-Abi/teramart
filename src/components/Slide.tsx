"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const Slide = ({ blok }: { blok: any }) => {
  return (
    <div 
      {...storyblokEditable(blok)} 
      className="relative w-full h-[400px] overflow-hidden rounded-xl transition-transform duration-500 ease-in-out group-active:scale-110"
    >
      <Image
        src={blok.slide_image.filename}
        alt={blok.slide_image.alt || "Carousel slide"}
        fill
        className="object-cover"
      />
      {blok.title && (
        <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
          <h3 className="text-white text-xl font-bold">{blok.title}</h3>
        </div>
      )}
    </div>
  );
};
