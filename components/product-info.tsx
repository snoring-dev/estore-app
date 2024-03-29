"use client";

import { useMounted } from "@/lib/hooks";
import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import { useCart } from "@/hooks/use-cart";

interface Props {
  data: Product;
}

function ProductInfo({ data }: Props) {
  const isMounted = useMounted();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Sizes:</h3>
          <div>{data.sizes.map((s) => s.name).join(",  ")}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="flex space-x-2">
            {data.colors.map((c) => (
              <div
                key={c.id}
                className="h-6 w-6 rounded-full border border-gray-300"
                style={{ backgroundColor: c.value }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start">
          {data.shortDescription && (
            <p
              className="text-sm text-black"
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
            />
          )}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
