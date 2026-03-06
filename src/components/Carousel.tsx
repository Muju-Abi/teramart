"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Add Navigation and Pagination to imports
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'; 

export const Carousel = ({ blok }: { blok: any }) => {
  return (
    <section {...storyblokEditable(blok)} className="py-12 relative px-10">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]} 
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        // slidesPerView={2}
        loop={true}
        // 3. Enable Navigation (Arrows)
        navigation={true} 
        // 4. Enable Pagination (Dots)
        pagination={{ 
          clickable: true, 
          dynamicBullets: true // Optional: makes bullets smaller further from active
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        // Tailwind class to style arrows/dots container
        className="max-w-5xl mx-auto !pb-12" 
      >
        {blok.body?.map((nestedBlok: any) => (
          <SwiperSlide key={nestedBlok._uid} className="max-w-[400px]">
            <StoryblokComponent blok={nestedBlok} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
