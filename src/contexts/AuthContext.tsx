import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authData, setAuthData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@CoopersChallenge:token");
    const user = localStorage.getItem("@CoopersChallenge:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@CoopersChallenge:token", token);
    localStorage.setItem("@CoopersChallenge:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setAuthData({ token, user });
  }

  function signOut() {
    localStorage.removeItem("@CoopersChallenge:token");
    localStorage.removeItem("@CoopersChallenge:user");

    setAuthData({} as AuthState);
  }

  return (
    <AuthContext.Provider value={{ user: authData.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
