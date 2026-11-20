async function triple(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });

  return promise;
}

async function main() {
  //   const triple1 = await triple(3);
  //   const triple2 = await triple(5);
  //   const triple3 = await triple(7);

  // Run all triple() calls concurrently with Promise.all, so they finish in ~1s total instead of ~3s when awaited sequentially
  const [triple1, triple2, triple3] = await Promise.all([
    triple(3),
    triple(5),
    triple(7),
  ]);

  console.log(triple1 + triple2 + triple3);
}

main();
