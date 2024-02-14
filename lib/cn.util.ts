import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * merges class names
 * @param classNamesInput - class names to merge
 * @returns merged class names
 */
export default function cn(...classNamesInput: ClassValue[]): string {
   return twMerge(clsx(classNamesInput));
}
