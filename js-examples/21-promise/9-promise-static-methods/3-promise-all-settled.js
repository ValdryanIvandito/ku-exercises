const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-1";
    reject(`${msg} failed!`);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-2";
    reject(`${msg} failed!`);
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-3";
    resolve(msg);
  }, 2000);
});

const mergedPromise = Promise.allSettled([promise1, promise2, promise3]);

mergedPromise
  .then((value) => {
    const fullfilled = value.filter((n) => n.status === "fulfilled");
    const rejected = value.filter((n) => n.status === "rejected");

    console.log("ALL STATUS:\n", value, "\n");
    console.log("FULFILLED:\n", fullfilled, "\n");
    console.log("REJECTED:\n", rejected, "\n");
  })
  .catch((err) => {
    console.error(err);
  });
