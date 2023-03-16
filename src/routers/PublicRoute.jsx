import { useSelector } from "react-redux";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from "../features/auth/authSlice";
import routes from "../helpers/routes";

// function PublicRoute({ children }) {
//   const token = useSelector(selectCurrentToken);

//   if (token) {
//     return <Navigate to={routes.dashboard} />;
//   }
//   return children;
// }

function PublicRoute() {
  const token = useSelector(selectCurrentToken);

  if (token) {
    return <Navigate to={routes.dashboard} />;
  }
  return <Outlet />;
}

export default PublicRoute;
