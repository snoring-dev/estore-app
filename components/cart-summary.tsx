"use client";

import { useCart } from "@/hooks/use-cart";
import Currency from "./ui/currency";
import { useEffect, useMemo } from "react";
import Button from "./ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

interface Props {
  onCheckout: (
    ids: string[],
    onSuccess: (url: string) => void,
    onFailure: () => void
  ) => void;
}

function CartSummary({ onCheckout }: Props) {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();
  const totalPrice = useMemo(
    () => items.reduce((c, v) => c + Number(v.price), 0),
    [items]
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong!");
    }
  }, [removeAll, searchParams]);

  const handleCheckout = () => {
    onCheckout(
      items.map((p) => p.id),
      (url) => {
        window.location.href = url;
      },
      () => toast.error("Something went wrong!")
    );
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-x-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={handleCheckout}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartSummary;
