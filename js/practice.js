var number1 = 12;
console.log('一開始number1 = ' + number1);

number1 = 25;
console.log('現在number1 = ' + number1);

console.log(typeof number1);

number1 = number1 + 1;
console.log('現在number1 = ' + number1 + '型別是' + typeof number1);

number1 = number1 + '1';
console.log(number1);
console.log(typeof number1);

//   判斷
console.log(1 == 1);

var number2 = 10;
var number3 = 20;

if (number2 > number3) {
    console.log('number2有大於number3');
} else if (number2 < number3) {
    console.log('number2有小於number3');
} else {
    console.log('number2有小於number3');
}

console.log(typeof true);

var list = [1, 5, 15, 20, "text"];

console.log(list);
console.log(list[4]);

console.log(list.length);
//5
//迴圈
for (var i = 0; i < list.length; i++) {
    console.log(list[i])
};

//function 方法
function addNumber(a, b) {
    var number = a + b;
    console.log(number);
}
addNumber(10, 50);

//物件
var dog = {
    name: '小黃',
    age: 6,
    breed: '黃金獵犬',
    hasPuppy: true,
};
console.log(dog);
console.log(dog.age);


var Dog = function (name, age, breed, hasPuppy) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.hasPuppy = hasPuppy;
}

var dog1 = new Dog('小黃', 10, '黃金獵犬', false);
console.log(dog1);

var dog2 = new Dog('小好', 6, '邊境牧羊犬', true);
var dogs = [dog1, dog2];

console.log(dogs);
