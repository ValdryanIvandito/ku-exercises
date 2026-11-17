export function formatDuration(duration) {
  const MILLISECONDS_IN_SECONDS = 1000;
  const SECONDS_IN_MINUTE = 60;

  const seconds = duration / MILLISECONDS_IN_SECONDS;

  const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
  const remainingSeconds = Math.ceil(seconds % SECONDS_IN_MINUTE);

  let str = "";
  str += String(minutes).padStart(2, "0");
  str += ":";
  str += String(remainingSeconds).padStart(2, "0");

  return str;
}