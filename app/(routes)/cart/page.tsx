import React from "react";
import CartPageClient from "./components/client";

function CartPage() {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_STORE_ID}/checkout`;

  return <CartPageClient checkoutUrl={URL} />;
}

export default CartPage;
