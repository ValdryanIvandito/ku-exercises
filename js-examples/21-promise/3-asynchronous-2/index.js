let seconds = 0;

const handle = setInterval(() => {
  const remainingSeconds = seconds % 60;
  const minute = Math.floor(seconds / 60);

  let str = String(minute).padStart(2, "0");
  str += ":";
  str += String(remainingSeconds).padStart(2, "0");

  console.log(str);
  seconds++;
}, 1000);

setTimeout(() => {
  clearTimeout(handle);
  console.log("Process Finished!");
}, 5000);

console.log("Running...");
