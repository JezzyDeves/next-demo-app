import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useBasicStore = create<{
  value: string;
  setValue: (value: string) => void;
}>()(
  immer((set) => ({
    value: "",
    setValue: (v) =>
      set((state) => {
        state.value = v;
      }),
  })),
);
