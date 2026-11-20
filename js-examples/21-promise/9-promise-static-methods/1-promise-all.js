/*
  METHOD => Promise.all()

  BEHAVIOR => Waits for all promises to fulfill and returns an array of their results.

  WHEN IT REJECTS => Immediately, as soon as any single promise rejects (fail-fast).

*/

// FAILED SCENARIO

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task-1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task-2");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task-3");
  }, 2000);
});

// SUCCESS SCENARIO

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task-1");
//   }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task-2");
//   }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task-3");
//   }, 2000);
// });

const mergedPromise = Promise.all([promise1, promise2, promise3]);

promise1
  .then((value) => {
    console.log(`${value} succeed!`);
  })
  .catch((err) => {
    console.error(`${err} failed!`);
  });

promise2
  .then((value) => {
    console.log(`${value} succeed!`);
  })
  .catch((err) => {
    console.error(`${err} failed!`);
  });

promise3
  .then((value) => {
    console.log(`${value} succeed!`);
  })
  .catch((err) => {
    console.error(`${err} failed!`);
  });

mergedPromise
  .then((value) => {
    console.log("\nFULFILLED TASK:\n", value, "\n");
  })
  .catch((err) => {
    console.error("\nREJECTED TASK:\n", err, "\n");
  });
