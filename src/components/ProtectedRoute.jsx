import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, role }) {
  const { user } = useSelector((state) => state.auth);

  // not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
