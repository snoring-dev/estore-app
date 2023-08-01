import { Product } from "@/types";
import React from "react";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface Props {
  title: string;
  items: Product[];
}

function ProductList({ title, items }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      {items.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
