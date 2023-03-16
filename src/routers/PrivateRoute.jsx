import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice";
import routes from "../helpers/routes";
import { useTimer, useStopwatch } from "react-timer-hook";
import { useEffect } from "react";
import useTimerLogOut from "../hooks/useTimerLogOut";

// function PrivateRoute({ children }) {
//   const token = useSelector(selectCurrentToken);

//   if (!token) {
//     return <Navigate to={routes.login} />;
//   }
//   return children;
// }

function PrivateRoute() {
  // const dispatch = useDispatch();

  // const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
  //   useStopwatch({ autoStart: true });

  // useEffect(() => {
  //   console.log(hours, minutes, seconds);
  //   if (hours === 0 && minutes === 0 && seconds === 10) {
  //     dispatch(logOut());
  //   }
  // }, [hours, minutes, seconds]);

  // useEffect(() => {
  //   document.addEventListener("click", () => reset());
  //   document.addEventListener("keypress", () => reset());
  //   document.addEventListener("keydown", () => reset());
  //   document.addEventListener("keyup", () => reset());
  //   window.addEventListener("scroll", () => reset());
  // }, []);
  //useTimerLogOut();

  const token = useSelector(selectCurrentToken);

  if (!token) {
    return <Navigate to={routes.login} />;
  }
  return <Outlet />;
}
export default PrivateRoute;
