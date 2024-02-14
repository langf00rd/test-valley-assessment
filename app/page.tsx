import Categories from "@/components/categories";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductSlider from "@/components/sliders/product-slider";
import { fetchCollections } from "@/lib/services/fetch-collections";

export default async function Home() {
   const categoryData = await fetchCollections();
   return (
      <main className="relative">
         <Header />
         <Hero />
         <Categories />
         <section className="space-y-10 pb-20">
            {categoryData.map((category) => (
               <ProductSlider
                  key={category.code}
                  title={category.title}
                  description={category.subtitle}
                  data={category.items}
               />
            ))}
         </section>
      </main>
   );
}
