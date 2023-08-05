"use client";

import { cn } from "@/lib/utils";
import { Review } from "@/types";
import { Tab } from "@headlessui/react";
import ReviewForm from "./review-form";

interface Props {
  data: Review[];
}

const ReviewTab = ({ name, className }: { name: string; className?: string }) => {
  return (
    <Tab className={className}>
      {({ selected }) => (
        <p
          className={cn(
            "text-md font-medium text-left",
            selected ? "text-black" : "text-gray-400"
          )}
        >
          {name}
        </p>
      )}
    </Tab>
  );
};

function ProductReviews({ data }: Props) {
  return (
    <Tab.Group
      as="div"
      className="mb-4 mt-8 border-t border-gray-200 dark:border-gray-700"
    >
      <Tab.List className="flex flex-wrap -mb-px space-x-4 py-4">
        <ReviewTab name="Reviews"/>
        <ReviewTab className="border-l pl-4" name="Leave a review" />
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">All product reviews here</p>
        </Tab.Panel>
        <Tab.Panel className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
          <ReviewForm />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ProductReviews;
