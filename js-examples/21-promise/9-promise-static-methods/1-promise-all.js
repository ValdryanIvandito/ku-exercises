const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-1 done...";
    resolve(msg);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-2 done...";
    resolve(msg);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const msg = "Task-3 done...";
    resolve(msg);
  }, 3000);
});

const mergedPromise = Promise.all([promise1, promise2, promise3]);

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

promise2
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

promise3
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

mergedPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
