funA();
funB();
funC();

// 정의 이전 시점
function funA() {
  // 정의
  console.log("function A");
}

const funB = function () {
  console.log("function B");
};

const funC = () => {
  console.log("function C");
};

funA();
funB();
funC();
