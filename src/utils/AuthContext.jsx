import { createContext } from "react";

// Have to set default value
export const AuthContext = createContext({
  token: undefined,
  setToken: () => {},
});
