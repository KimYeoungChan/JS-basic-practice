fetch("./sample.json").then(async (result) => {
  console.log("result", result);
  if (result.ok) {
    const data = result.json();
  }
});

fetch("https://ohou.se/")
  .then((res) => {
    console.log("success", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
