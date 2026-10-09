import { Navigate, Outlet, useLocation } from "react-router-dom";

// Placeholder de protecao. A logica real sera implementada numa proxima fase.
const AUTH_ENABLED = false;

export default function ProtectedRoute() {
  const location = useLocation();

  if (!AUTH_ENABLED) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace state={{ from: location.pathname }} />;
}
