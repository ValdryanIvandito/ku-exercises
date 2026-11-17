import { useState, useEffect, useCallback } from "react";

/**
 * @typedef {Object} UseTimerReturnValue
 * @property {number} remainingDuration
 * @property {() => void} reset
 */

/**
 * This hooks return and object that contains remaining duration
 * that keeps updating every second and a reset function.
 * @param {number} duration
 * @returns {UseTimerReturnValue}
 */

export function useTimer(duration) {
  const [remainingDuration, setRemainingDuration] = useState(duration);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    let endMs = Date.now() + duration;
    let handleInterval;

    const intervalHandler = () => {
      const remainingDuration = Math.max(0, endMs - Date.now());
      setRemainingDuration(remainingDuration);
      if (remainingDuration <= 0 && handleInterval)
        clearInterval(handleInterval);
    };

    intervalHandler();
    handleInterval = setInterval(intervalHandler, 1000);

    return () => clearInterval(handleInterval);
  }, [duration, flag]);

  const reset = useCallback(() => {
    setFlag((flag) => !flag);
  }, []);

  return { remainingDuration, reset };
}
