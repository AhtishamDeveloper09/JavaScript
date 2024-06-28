// Async Await

function getData(dataId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("Success");
    }, 3000);
  });
}
//
(async function () {
  console.log("Fetching Data1...");
  await getData(1);
  console.log("Fetching Data2...");
  await getData(2);
  console.log("Fetching Data3...");
  await getData(3);
  console.log("Fetching Data4...");
  await getData(4);
})();
// getAllData();
