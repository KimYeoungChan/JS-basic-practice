const person = {
  name: "아무개",
  something: "",
  talk: (sentence) => {
    console.log(sentence);
  },
};

// talk 함수를 이용해서 person의 name 부분 가지고 오기
person.talk(`제 이름은 ${person["name"]}입니다.`);

person.name = "김영찬";
person.talk(`제 이름은 ${person["name"]}입니다.`);

console.log("something" in person); // something 유무 확인
person.something = undefined;
console.log(person);
delete person.something; // 프로퍼티 제거
console.log(person);

for (let key in person) {
  console.log(key);
}

// console.log(person.address.city); // undefined
console.log(person.address?.city); // 옵서널체이닝

// const name = person.name;
// const talk = person.talk;
// 두 개를 하나로 선언 함
const { name: name, talk } = person;
console.log(name, talk);
