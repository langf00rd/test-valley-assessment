import { CATEGORIES_API_URL } from "../constants";
import { ItemCategory } from "../interfaces";
/**
 * fetches categories from categories API
 * @returns categories
 */
export async function fetchCategories(): Promise<ItemCategory[]> {
   const res = await fetch(CATEGORIES_API_URL);
   if (!res.ok) throw new Error(res.statusText);
   return await res.json();
}
