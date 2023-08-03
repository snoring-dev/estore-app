import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/${process.env.NEXT_STORE_ID}`;

export const getStoreData = async (): Promise<Store> => {
  const resp = await fetch(`${URL}`);
  return resp.json();
};
