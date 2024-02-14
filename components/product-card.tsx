import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Publication } from "@/lib/interfaces";

export default function ProductCard(props: { data: Publication }) {
   return (
      <div>
         <div className="relative">
            {props.data.tagsOnImage[0] && (
               <div className="absolute bottom-2 left-2 rounded-sm bg-secondary flex gap-1 px-2">
                  <Image src="/arrow-up.svg" alt="arrow-up" width={10} height={10} />
                  <small className="text-white">{props.data.tagsOnImage[0]}</small>
               </div>
            )}
            <Image
               alt="title"
               src={props.data.media[0].uri}
               width={300}
               height={300}
               className="rounded-sm"
            />
         </div>
         <div className="py-4 space-y-1">
            <p className="text-[15px]">{props.data.title ?? props.data.productName}</p>
            <p className="font-bold">
               <span className="text-[#ff5023]">
                  {props.data.priceInfo.discountRate ?? 5}%
               </span>
               <span>
                  {props.data.priceInfo.discountPrice
                     ? props.data.priceInfo.discountPrice.toLocaleString()
                     : props.data.priceInfo.price.toLocaleString()}{" "}
               </span>
               <span className="font-[400]"> 원</span>
            </p>
            {props.data.tagsOnDesc[0] && (
               <small className="text-[#eb1c1c] bg-[#fff7f7] p-1 rounded-sm">
                  {props.data.tagsOnDesc[0]}
               </small>
            )}
            <p className="flex items-center gap-1">
               <Star fill="#333" size={10} />
               <small>{props.data.rating}</small>
            </p>
            {props.data.prefaceIconUrl && props.data.preface && (
               <div className="border flex gap-2 w-max rounded-sm p-1">
                  <Image
                     src={props.data.prefaceIconUrl}
                     alt={props.data.title}
                     className="scale-[0.9]"
                     width={20}
                     height={20}
                  />
                  <small>{props.data.preface}</small>
               </div>
            )}
         </div>
      </div>
   );
}
