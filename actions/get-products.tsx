import qs from "query-string";
import { Product } from "@/types";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  excludeId?: string;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { ...query },
  });

  const resp = await fetch(url);
  return resp.json();
};
