import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create()(
  persist(
    (set, get) => ({
      users: [],
      add: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
      removeUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
    }),
    {
      name: "users",
    }
  )
);
