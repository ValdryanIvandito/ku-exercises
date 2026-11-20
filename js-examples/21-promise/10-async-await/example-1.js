/* 
  An async function always returns a Promise, even though we write plain `return`.
  Here the Promise resolves with "Hello World!" after 3 seconds.
*/

async function helloWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 3000);
  });
}

/* 
  OLD WAY => chaining .then() to consume the Promise
*/

/*
  helloWorld().then((msg) => {
    console.log(msg);
  });
*/

/*
  NEW WAY => `await` pauses the function until the Promise settles,
  then gives us the resolved value directly, so no .then() chain is needed.
  Note: top-level `await` requires an ES module (.mjs) or a modern runtime.
*/

const message = await helloWorld();
console.log(message);
