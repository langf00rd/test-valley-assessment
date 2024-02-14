"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClassNames from "embla-carousel-class-names";
import ProductCard from "../product-card";
import WidthConstraint from "../width-constraint";
import { EmblaCarouselType } from "embla-carousel";
import { Product } from "@/lib/interfaces";

export default function ProductSlider(props: {
   title: string;
   description: string;
   data: Product[];
}): JSX.Element {
   const [emblaRef, emblaApi] = useEmblaCarousel(
      {
         slidesToScroll: 1,
         align: "start",
         dragFree: false,
      },
      [Autoplay(), ClassNames()]
   );

   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
   }, [emblaApi, onSelect]);

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);

   return (
      <>
         <WidthConstraint className="flex flex-col px-5 lg:flex-row gap-5">
            <div className="w-full lg:w-[200px] gap-2 pb-6  flex lg:flex-col flex-row justify-between">
               <div className="space-y-2">
                  <h1 className="text-2xl font-[600] max-lines-2">{props.title}</h1>
                  <p className="text-[12px]">{props.description}</p>
               </div>
               <div className="flex gap-2">
                  <button
                     disabled={prevBtnDisabled}
                     onClick={scrollPrev}
                     className={prevBtnDisabled ? "opacity-30" : ""}
                  >
                     <ChevronLeft />
                  </button>
                  <button
                     disabled={nextBtnDisabled}
                     onClick={scrollNext}
                     className={nextBtnDisabled ? "opacity-30" : ""}
                  >
                     <ChevronRight />
                  </button>
               </div>
            </div>
            <div className="overflow-hidden relative flex-1 mask-border" ref={emblaRef}>
               <div className="embla__container flex gap-2">
                  {props.data.map((item) => (
                     <div
                        className="flex-[0_0_25%]  h-full cursor-pointer min-w-[180px] min-h-max mx-auto items-center flex justify-center"
                        key={item.name}
                     >
                        <ProductCard data={item.publication} />
                     </div>
                  ))}
               </div>
            </div>
         </WidthConstraint>
      </>
   );
}
