import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";
import { resetCredentials } from "../features/auth/authSlice";

const useTimerLogOut = () => {
  const dispatch = useDispatch();

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  useEffect(() => {
    console.log(hours, minutes, seconds);
    if (hours === 0 && minutes === 0 && seconds === 10) {
      dispatch(resetCredentials());
    }
  }, [hours, minutes, seconds]);

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    window.addEventListener("click", handleReset);
    window.addEventListener("keypress", handleReset);
    window.addEventListener("keydown", handleReset);
    window.addEventListener("keyup", handleReset);

    return () => {
      window.removeEventListener("click", handleReset);
      window.removeEventListener("keypress", handleReset);
      window.removeEventListener("keydown", handleReset);
      window.removeEventListener("keyup", handleReset);
    };
  }, []);
};

export default useTimerLogOut;
