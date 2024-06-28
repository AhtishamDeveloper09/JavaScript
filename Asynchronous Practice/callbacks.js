// Callback Hell

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}

console.log("Fetching Data1...");
getData(1, () => {
  console.log("Fetching Data2...");
  getData(2, () => {
    console.log("Fetching Data3...");
    getData(3, () => {
      console.log("Fetching Data4...");
      getData(4);
    });
  });
});
