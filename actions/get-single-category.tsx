import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/categories`;

export const getSingleCategory = async (id: string): Promise<Category> => {
  const resp = await fetch(`${URL}/${id}`);
  return resp.json();
};
