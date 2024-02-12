const A3 = async () => {
  const a = "A 함수 실행 후 생기는 데이터";
  return a;
};

const B3 = (a) => {
  console.log(`${a}를 이용하는 B`); // 순서 2, 순서 4
};

A3()
  .then((a) => {
    console.log("A3 실행 성공!"); // 순서 1
    B3(a);
  })
  .catch((error) => {
    console.log(error.message);
  });

const func = async () => {
  const a = await A3();
  console.log("A3 실행 성공!"); // 순서 3
  B3(a);
};
func();
