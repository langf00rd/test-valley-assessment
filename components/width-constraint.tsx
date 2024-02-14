import cn from "@/lib/cn.util";
import type { ReactNode } from "react";

export default function WidthConstraint(props: {
   children: ReactNode;
   className?: string;
}): JSX.Element {
   return (
      <div className={cn("max-w-[1000px] mx-auto", props.className)}>
         {props.children}
      </div>
   );
}
