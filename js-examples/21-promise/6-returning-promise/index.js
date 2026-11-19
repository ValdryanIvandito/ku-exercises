function laughAfterSeconds(seconds) {
  const MILLISECONDS_IN_SECOND = 1000;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hahaha");
    }, seconds * MILLISECONDS_IN_SECOND);
  });

  return promise;
}

laughAfterSeconds(3)
  .then((laugh) => {
    console.log(laugh);
  })
  .catch((err) => {
    console.error(err);
  });
