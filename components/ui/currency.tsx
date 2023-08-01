"use client";

import { useMounted } from "@/lib/hooks";
import { priceFormatter } from "@/lib/utils";

interface Props {
  value: string | number;
}

function Currency({ value }: Props) {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{priceFormatter.format(Number(value))}</div>
  );
}

export default Currency;
