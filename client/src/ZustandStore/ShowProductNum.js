import { create } from "zustand";

export const useProductStore = create((set) => ({
    productsNum: [],
    currentPage: 1,
    limit: 12,

    setProductsNum: (products) => set({ products }),

    setPage: (page) => set({ currentPage: page }),
}));