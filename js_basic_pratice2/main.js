const [count] = document.getElementsByTagName("span");
const countButton = document.getElementById("count-up-button");

countButton.onclick = (event) => {
  console.log(event);
  if (isNaN(Number(count.innerHTML))) return; // 숫자로 바꾸어도 isNaN이면 내보낸다
  count.innerHTML = Number(count.innerHTML) + 1; // count 1증가를 한다.
};

count.onmouseover = () => {
  count.style.backgroundColor = "gray";
  count.style.color = "white";
};

count.onmouseout = () => {
  count.style.backgroundColor = "transparent";
  count.style.color = "black";
};

const input = document.getElementsByTagName("input")[0];
input.onfocus = () => {
  input.value = "자동 입력";
};

const input2 = document.getElementsByTagName("input")[1];
const result = document.getElementById("result");

input2.onchange = (evnet) => {
  result.innerHTML = event.target.value;
  // event.target -> 이베트가 발생한 DOM
  // event.target.value
};

const test = document.getElementById("test");

new Array(10).fill(0).forEach((_, index) => {
  test.addEventListener("click", () => {
    console.log(`test Clicked ${index + 1}`);
  });
});
