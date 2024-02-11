const button = document.getElementById("count-up-button");
const buttonWrapper = document.getElementById("button-wapper");
const buttonSubWrapper = document.getElementById("button-subWrapper");

button.onclick = (event) => {
  event.stopPropagation();
  console.log("button event triger");
};

buttonWrapper.onclick = () => {
  console.log("button-wapper triger");
};

buttonSubWrapper.onclick = () => {
  console.log("button-subWrapper triger");
};
