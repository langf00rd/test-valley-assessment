import React from "react";
import HeroSlider from "./sliders/hero-slider";
import { fetchBanners } from "@/lib/services/fetch-banners";

export default async function Hero() {
   const data = await fetchBanners();
   return (
      <div className="max-h-[350px] overflow-x-clip">
         <HeroSlider data={data} />
      </div>
   );
}
