// import { useRef, useState, useEffect } from "react";
import { useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import { formatDuration } from "../utils/formatDuration";

/**
 * @typedef {Object} TimerProps
 * @property {string} label
 * @property {number} duration
 */

/**
 * @param {TimerProps} props
 */

export function TimerFunc({ label, duration }) {
  const { remainingDuration, reset } = useTimer(duration);

  // // eslint-disable-next-line react-hooks/purity
  // const endMsRef = useRef(Date.now() + duration);

  // const endMsRef = useRef(null);

  // useEffect(() => {
  //   endMsRef.current = Date.now() + duration;
  // }, [duration]);

  useEffect(() => {
    reset();
  }, [label, reset]);

  return (
    <div>
      <p>{label}</p>
      <h3>{formatDuration(remainingDuration)}</h3>
    </div>
  );
}
