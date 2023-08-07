"use client";

import { Review } from "@/types";
import { format, parseISO } from "date-fns";
import { Star } from "lucide-react";

interface Props {
  data: Review[];
}

function ListOfReviews({ data }: Props) {
  if (!data || data.length === 0) {
    return (
      <span className="text-sm text-center">No reviews for this product</span>
    );
  }

  const getRatingStars = (rating: number) => {
    if (rating === 0) return null;

    const count = Array.from({ length: rating }, (_, i) => i + 1);
    const stars = count.map((i) => (
      <Star key={i} className="w-4 h-4 text-black" />
    ));
    return stars;
  };

  return (
    <>
      {data.map((review) => (
        <div key={review.id} className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 p-4 border-b">
            <div className="flex justify justify-between">
              <div className="flex gap-2 items-center justify-center">
                <div className="w-10 h-10 p-2 uppercase text-center rounded-full bg-black flex items-center justify-center font-semibold text-white">
                  {`${review.firstName.charAt(0)}${review.lastName.charAt(0)}`}
                </div>
                <span className="capitalize">{`${review.firstName} ${review.lastName}`}</span>
              </div>
              <div className="flex p-1 gap-1 text-orange-300">
                {getRatingStars(review.rating ?? 0)}
              </div>
            </div>

            <div>{review.message}</div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">
                {format(parseISO(review.createdAt), "MMMM do, yyyy")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ListOfReviews;
