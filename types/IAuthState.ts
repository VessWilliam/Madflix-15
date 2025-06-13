import type { User } from "firebase/auth";

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => void;
}