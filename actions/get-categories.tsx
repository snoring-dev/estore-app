import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const resp = await fetch(URL);
  return resp.json();
};
