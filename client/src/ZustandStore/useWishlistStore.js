// store/useWishlistStore.js

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      // Add / Remove Toggle
      toggleWishlist: (product) => {
        const { wishlist } = get();

        const exists = wishlist.find(
          (item) => item.id === product.id
        );

        if (exists) {
          set({
            wishlist: wishlist.filter(
              (item) => item.id !== product.id
            ),
          });
        } else {
          set({
            wishlist: [...wishlist, product],
          });
        }
      },

      // Check Exists
      isInWishlist: (id) => {
        return get().wishlist.some(
          (item) => item.id === id
        );
      },

      // Remove Directly
      removeWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter(
            (item) => item.id !== id
          ),
        });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);

export default useWishlistStore;