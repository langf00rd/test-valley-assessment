import { BANNERS_API_URL } from "../constants";
import { Banner } from "../interfaces";
/**
 * fetches banners from banners API
 * @returns banners
 */
export async function fetchBanners(): Promise<Banner[]> {
   const res = await fetch(BANNERS_API_URL);
   if (!res.ok) throw new Error(res.statusText);
   return await res.json();
}
