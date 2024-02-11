const product = {
  date: new Date("2022-07-16T00:00:00"),
  names: ["가지", "오이", "파프리카", "당근"],
  buyAll: function () {
    // this => product
    const buy = (name) => {
      // 화살표 함수
      console.log(`${this.date.toLocaleDateString()}에 ${name}를 구매합니다.`);
    };

    const buy2 = function (name) {
      // 함수 표현식 기본
      console.log(`${this.date.toLocaleDateString()}에 ${name}를 구매합니다.`);
    }.bind(this);

    this.names.forEach((name) => {
      buy(name);
      buy2(name);
    });
  },
};

product.buyAll();
