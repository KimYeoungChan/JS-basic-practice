const obj = {};

let result = "";
try {
  result = obj.property.a;
} catch (error) {
  result = "모듈"; // 기본값
  console.dir(error);
} finally {
  console.log(`result = ${result}`);
}

try {
  throw new Error("이건 커스텀 에러입니다.");
} catch (error) {
  console.log(error);
}
