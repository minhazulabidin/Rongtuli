// store/useWishlistStore.js

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],

      // Add / Remove Toggle
      toggleWishlist: (productId) => {
        const { wishlist } = get();

        const exists = wishlist.find(
          (itemId) => itemId === productId
        );

        if (exists) {
          set({
            wishlist: wishlist.filter(
              (itemId) => itemId !== productId
            ),
          });
        } else {
          set({
            wishlist: [...wishlist, productId],
          });
        }
      },

      // Check Exists
      isInWishlist: (id) => {
        return get().wishlist.some(
          (itemId) => itemId === id
        );
      },

      // Remove Directly
      removeWishlist: (id) => {
        set({
          wishlist: get().wishlist.filter(
            (itemId) => itemId !== id
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