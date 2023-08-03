import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const resp = await fetch(URL);
  return resp.json();
};
