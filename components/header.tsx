import React from "react";
import WidthConstraint from "./width-constraint";
import Image from "next/image";
import { Menu, Search } from "lucide-react";

export default function Header() {
   return (
      <header className="py-6 sticky top-0 bg-white z-[50]">
         <WidthConstraint className="flex flex-col px-5 lg:flex-row gap-4 justify-between h-full items-start lg:items-center">
            <div className="flex gap-4 w-full lg:w-max justify-between">
               <Image src="/logo.svg" alt="logo" width={100} height={100} />
               <button className="flex gap-2">
                  <Menu color="#00d094" />
                  <p className="text-primary">카테고리</p>
               </button>
            </div>
            <div className="border p-2 flex gap-2 w-full lg:w-[400px] rounded-sm items-center">
               <Search size={18} />
               <input
                  type="text"
                  className="flex-1 outline-none border-none text-[14px]"
                  placeholder="If you're wondering whether to buy it or not "
               />
            </div>
            <div className="flex gap-2 items-center">
               <Image src="/arrow-down.svg" alt="arrow-down" width={30} height={30} />{" "}
               <span className="text-gray-400">|</span>
               <p>로그인 / 회원가입</p>
            </div>
         </WidthConstraint>
      </header>
   );
}
