"use client";

import CartItem from "@/components/cart-item";
import CartSummary from "@/components/cart-summary";
import Container from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart";
import { useMounted } from "@/lib/hooks";

interface Props {
  checkoutUrl: string;
}

function CartPageClient({ checkoutUrl }: Props) {
  const isMounted = useMounted();
  const cart = useCart();

  const onCheckout = async (
    ids: string[],
    onSuccess: () => void,
    onFailure: () => void
  ) => {
    try {
      const resp = await fetch(checkoutUrl, {
        method: "POST",
        body: JSON.stringify({
          productIds: ids,
        }),
      });

      const result = await resp.json();

      if (result) {
        console.log("RESULT =>", result);
        onSuccess();
      }
    } catch (e) {
      onFailure();
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart!</p>
              )}
              {cart.items.length > 0 && (
                <ul>
                  {cart.items.map((p) => (
                    <CartItem key={p.id} data={p} />
                  ))}
                </ul>
              )}
            </div>
            <CartSummary onCheckout={onCheckout} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPageClient;
