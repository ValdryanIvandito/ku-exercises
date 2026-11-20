const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-1";
    resolve(msg);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-2";
    reject(msg);
  }, 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-3";
    resolve(msg);
  }, 2000);
});

const mergedPromise = Promise.race([promise1, promise2, promise3]);

mergedPromise
  .then((value) => {
    console.log(`${value} finished first!`);
  })
  .catch((err) => {
    console.error(`${err} failed first!`);
  });
