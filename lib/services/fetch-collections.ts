import { COLLECTIONS_API_URL } from "../constants";
import { Category } from "../interfaces";
/**
 * fetches collections and returns only collections that has type SINGLE and viewType TILE
 * @returns filtered collections that has type SINGLE and viewType TILE
 */
export async function fetchCollections(): Promise<Category[]> {
   const res = await fetch(COLLECTIONS_API_URL);
   if (!res.ok) throw new Error(res.statusText);
   const data = await res.json();
   return data.items.filter(
      (item: { type: string; viewType: string }) =>
         item.type === "SINGLE" && item.viewType === "TILE"
   );
}
