import Image from "next/image";
import React from "react";
import WidthConstraint from "./width-constraint";
import { fetchCategories } from "@/lib/services/fetch-categories";

export default async function Categories() {
   const categories = await fetchCategories();
   return (
      <WidthConstraint className="my-10">
         <ul className="flex gap-6 justify-center lg:justify-between items-center flex-wrap">
            {categories.map((item) => (
               <li key={item.title} className="flex flex-col items-center">
                  <Image src={item.imageUrl} alt={item.title} width={50} height={50} />
                  <p>{item.title}</p>
               </li>
            ))}
         </ul>
      </WidthConstraint>
   );
}
