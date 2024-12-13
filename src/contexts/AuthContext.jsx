import { createContext } from "react";
import AuthProvider from "../providers/AuthProvider";
const AuthContext = createContext(AuthProvider);
export default AuthContext;