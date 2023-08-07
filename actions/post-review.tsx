import { Review } from "@/types";

export const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/products`;

type PostReview = Omit<Review, "createdAt">;

export const postReview = async (
  url: string,
  id: string,
  data: PostReview
): Promise<Review> => {
  const resp = await fetch(`${url}/${id}/reviews`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return resp.json();
};
