import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const resp = await fetch(URL);
  return resp.json();
};
