const age = 27;
const sex = "male";

if (age >= 19) {
  console.log("19세 이상입니다");
} else {
  console.log("19세 미만입니다");
}

console.log(age >= 19 ? "19세 이상입니다" : "19세 미만입니다");

switch (sex) {
  case "female":
    console.log("여성입니다");
    break;
  case "male":
    console.log("남성입니다");
    break;
  default:
    console.log("여성도 남성도 아닙니다.");
}
