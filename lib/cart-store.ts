import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getProductBySlug } from "./products";

export interface CartLine {
  slug: string;
  quantity: number;
}

interface CartState {
  items: CartLine[];
  isDrawerOpen: boolean;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isDrawerOpen: false,
      addItem: (slug, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((line) => line.slug === slug);
          if (existing) {
            return {
              items: state.items.map((line) =>
                line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line
              ),
              isDrawerOpen: true,
            };
          }
          return { items: [...state.items, { slug, quantity }], isDrawerOpen: true };
        }),
      removeItem: (slug) =>
        set((state) => ({ items: state.items.filter((line) => line.slug !== slug) })),
      setQuantity: (slug, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((line) => line.slug !== slug)
              : state.items.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
        })),
      clear: () => set({ items: [] }),
      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
    }),
    {
      name: "maison-coffee-cart",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export function cartSubtotal(items: CartLine[]): number {
  return items.reduce((total, line) => {
    const product = getProductBySlug(line.slug);
    return product ? total + product.priceVnd * line.quantity : total;
  }, 0);
}

export function cartCount(items: CartLine[]): number {
  return items.reduce((total, line) => total + line.quantity, 0);
}

/**
 * Checkout integration seam: a real checkout provider (Stripe, VNPay, MoMo)
 * hooks in here. Swap this function's implementation to redirect to a
 * hosted checkout / create a payment session — nothing else in the cart
 * layer needs to change.
 */
export function beginCheckout(items: CartLine[]): never {
  throw new Error(
    `Checkout is not yet configured. Wire a provider in lib/cart-store.ts#beginCheckout (${items.length} line item(s) ready).`
  );
}
