const person = {
  name: "아무개",
  something: "",
  talk: (sentence) => {
    console.log(sentence);
  },
  obj: {
    changed: false,
  },
};

// 객체 복사
const person2 = person;
person2.name = "김영찬";
person2.talk(`제 이름은 ${person.name}입니다`);

// 객체 값을 복사하고 싶으면 assign으로 복사를 하면 된다.

// 결국 person2의 name이랑 person3의 name3랑 같다
const person3 = Object.assign({}, person); // 값 복사
person3.name = "홍길동";
person3.talk(`제 이름은 ${person.name}입니다`);
