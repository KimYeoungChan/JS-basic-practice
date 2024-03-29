const obj = {
  property1: "1",
  property2: {
    subProperty1: "2-1",
    subProperty2: "2-2",
  },
};

const obj2 = Object.assign({}, obj);
obj2.property2.subProperty1 = "new 2-1";
console.log(obj);

const deepCopy = (origin) => {
  const result = {};

  for (let i in origin) {
    // subProperty2
    if ((origin[i] != null) & (typeof origin[i] === "object")) {
      result[i] = deepCopy(origin[i]);
    } else {
      result[i] = origin[i];
    }
  }

  return result;
};

const obj3 = deepCopy(obj);
obj3.property2.subProperty2 = "obj 2-1";
console.log(obj, obj3);
