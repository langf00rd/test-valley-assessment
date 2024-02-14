"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import WidthConstraint from "../width-constraint";
import { EmblaCarouselType } from "embla-carousel";

export default function HeroSlider({ data }: { data: any }): JSX.Element {
   const [emblaRef, emblaApi] = useEmblaCarousel(
      {
         slidesToScroll: 1,
         align: "center",
         loop: true,
      },
      [Autoplay(), ClassNames()]
   );
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

   const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
   }, []);

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;
      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
   }, [emblaApi, onInit, onSelect]);

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);

   return (
      <>
         <div className="overflow-hidden relative w-screen h-[350px]" ref={emblaRef}>
            <div className="embla__container flex relative gap-8">
               {data.map((item: { title: string; pcImageUrl: string }) => (
                  <div
                     className="flex-[0_0_30%] lg:flex-[0_0_1000px] embla__class-names h-full cursor-pointer min-w-[1000px] min-h-max mx-auto items-center flex justify-center"
                     key={item.title}
                  >
                     <Image
                        src={item.pcImageUrl}
                        width={800}
                        className="w-full h-full object-cover"
                        height={500}
                        alt=""
                     />
                  </div>
               ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
               <WidthConstraint className="flex h-max w-full px-5 justify-between text-[#fff]">
                  <button
                     className=" p-2 bg-[#33333380] h-[40px] w-[40px] flex items-center justify-center rounded-full"
                     onClick={scrollPrev}
                     type="button"
                  >
                     <ChevronLeft color="#fff" />
                  </button>
                  <button
                     className=" p-2 bg-[#33333380] h-[40px] w-[40px] flex items-center justify-center rounded-full"
                     onClick={scrollNext}
                     type="button"
                  >
                     <ChevronRight color="#fff" />
                  </button>
               </WidthConstraint>

               <div className=" absolute bottom-10 left-[50%] flex gap-3 -translate-x-[50%]">
                  {scrollSnaps.map((_, index) => (
                     <button
                        key={index}
                        className={`${
                           index === selectedIndex ? "bg-[#fff]" : "bg-[#00000033]"
                        } w-[8px] h-[8px] rounded-full`}
                     ></button>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
