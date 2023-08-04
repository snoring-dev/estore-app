import { create } from "zustand";
import { Product } from "@/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  items: Product[];
  addItem: (p: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (p: Product) => {
        const existingItem = get().items.find((pr) => pr.id === p.id);

        if (existingItem) {
          return toast("Item already added to the cart.");
        }

        const allItems = get().items;
        set({ items: [...allItems, p] });
        toast.success("Item added successfully!");
      },
      removeAll: () => set({ items: [] }),
      removeItem: (id: string) => {
        const filtredItems = get().items.filter((p) => p.id !== id);
        set({ items: [...filtredItems] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
