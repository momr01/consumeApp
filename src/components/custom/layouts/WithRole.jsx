import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentRole } from "../../../features/auth/authSlice";
import routes from "../../../helpers/routes";

const WithRole =
  (Component, type) =>
  ({ ...props }) => {
    const role = useSelector(selectCurrentRole);
    const isAdmin = role === "Administrador";

    if ((type === "admin" && isAdmin) || (type === "user" && !isAdmin))
      return <Component {...props} />;

    if ((type === "admin" && !isAdmin) || (type === "user" && isAdmin))
      return <Navigate to={routes.dashboard} />;
  };

export default WithRole;
