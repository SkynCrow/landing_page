import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

/**
 * Hook para obtener el contexto de autenticación.
 * @returns {Object} Contexto de autenticación.
 * @see AuthContext
 * @see AuthProvider
 */
export default function useAuth() {
  return useContext(AuthContext);
}
