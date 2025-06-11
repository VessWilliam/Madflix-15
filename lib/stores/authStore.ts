/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { AuthState } from "@/types/IAuthState";
import { devtools } from "zustand/middleware";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    isLoading: false,
    error: null,

    signIn: async (email, password) => {
      set({ isLoading: true, error: null });
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        set({ user: res.user });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ isLoading: false });
      }
    },

    signUp: async (email: string, password: string) => {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        set({ user: res.user, error: null });
        return true; 
      } catch (error: any) {
        set({ error: error.message });
        return false;
      }
    },

    logout: async () => {
      set({ isLoading: true, error: null });
      try {
        await signOut(auth);
        set({ user: null });
        return true;
      } catch (error: any) {
        set({ error: error.message });
        return false;
      } finally {
        set({ isLoading: false });
      }
    },

    checkAuth: () => {
      onAuthStateChanged(auth, (user) => {
        set({ user });
      });
    },
  }))
);
