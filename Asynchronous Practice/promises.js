// Promise Chain
function getData(dataId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("Success");
    }, 3000);
  });
}

// Second Method for Promise Chaining
console.log("Fetching Data1...");
getData(1)
  .then((res) => {
    console.log("Fetching Data2...");
    return getData(2);
  })
  .then((res) => {
    console.log("Fetching Data3...");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });

// FIrst Method for Promise Chaining
// console.log("Fetching Data1...");
// getData(1).then((res) => {
//   console.log(res);

//   console.log("Fetching Data2...");
//   getData(2).then((res) => {
//     console.log(res);

//     console.log("Fetching Data3...");
//     getData(3).then((res) => {
//       console.log(res);
//     });
//   });
// });
