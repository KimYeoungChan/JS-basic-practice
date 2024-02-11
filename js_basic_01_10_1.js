const colors = ["red", "blue", "green", "pink", "mint"];

const lastColor = colors.pop();
console.log(`${lastColor} popped`);

colors.push("purple");
console.log(colors);

const firstColor = colors.shift();
console.log(`${firstColor} shifted`);
console.log(colors);

console.log(colors.length);
colors.length = 2;
console.log(colors);

for (let color of colors) {
  console.log(color);
}
colors.forEach((color) => {
  console.log(color);
});

const newColor = colors.map((color) => {
  return `new ${color}`;
});
console.log(newColor);

const [, newGreen] = newColor;
console.log(newGreen);
