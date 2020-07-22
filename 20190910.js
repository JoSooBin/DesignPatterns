// // 자바스크립트 생성자와 리터럴
// // 1. 객체 리터럴
// // 이름:값으로 묶여진 해시 테이블과 비슷

// //객체 리터럴 표현식으로 만든 객체 생성
// var person = {};
// //프로퍼티를 하나 추가해보자.
// person.name = "Alice";
// //메서드도 추가해보자.
// person.drink = function () {
//     return person.name + "음료를 마신다.";
// };
// console.log(person.name);
// console.log(person.drink());
// //새로운 프로퍼티를 추가해보자.
// person.age = 26;
// console.log(person.age)
// //변경해보기

// person.drink = function(type) {
//     return person.name + "가 "+ type + "마심";
// };

// console.log(person.drink("Coffee"))

// delete person.age
// console.log(person.age);

// //물론, 객체를 생성하는 동시에 속성을 정의할 수 있다.
// var person = {
//     name : "Alice",
//     drink : function(type){
//         return this.name + '가' + type + '마심'
//     }
// };

// console.log(person.name);

// //2. 객체리터럴 문법
// //(1) 중괄호({})를 사용하여 객체를 생성.
// //(2) 프로퍼티명과 프로퍼티값은 콜론(:)으로 구분.
// // 각 프로퍼티와 메소드는 콤마(,)로 구분
// // 단, 마지막에는 콤마를 붙이지 않는다.
// //(3) 객체 리터럴를 변수에 할당할 때는 닫는 중괄호(})
// // 에 세미콜론(;)을 붙인다.

// //3. 내장 생성자 함수(Native Constructor function)
// // 객체리터럴 사용해서 객체 생성
// var car = {goes : "far"};
// // 내장생성자를 이용한 객체 생성, 안티패턴
// var car = new Object();
// car.goes = "far";

// // 3.1 객체리터럴 vs 객체생성자
// // 객체리터럴 표기법을 권장하는 이유 :
// // 코드가 더 짧고, 명확하고, 
// // 의도치 않은 객체 생성이 일어날 가능성을 줄여줌.

// // 객체 생성
// var o = new Object();
// console.log(o.constructor === Object);

// // Object()는 인자를 받을 수 있는데, 이를 해석하여 
// // 임의로 다른 생성자에게 객체의 생성을 위임
// var o = new Object(1);
// console.log(o.constructor === Object);
// console.log(o.constructor === Number);

// var o = new Object("I am a string");
// console.log(o.constructor === Object);
// console.log(o.constructor === String);

// var o = new Object(true);
// console.log(o.constructor === Object);
// console.log(o.constructor === Boolean);

// // 결론은 객체리터럴 표현식을 사용하자.

// //4. 사용자 정의 생성자 함수(User Define Constructor Function)
// var Person = function(name) {
//     // 객체리터럴로 새로운 객체를 생성
//     // var this = {}; //빈 객체로 표현하지만, 
//     // 실은 Person의 프포토타입을 상속받는다.

//     // 프로퍼티와 메서드가 추가
//     this.name = name;
//     this.say = function () {
//         return "I am " + this.name
//     // this를 반환한다.
//     // return this;
//     };
// };

// var adam = new Person("Adam");
// //console.log(adam.name);
// //console.log(adam.say());

// //new 키워드와 함께 함수를 호출하면,
// //(1) 빈 객체가 생성. 이 객체는 this 변수로 참조가능하고,
// // 해당함수의 프로토타입을 상속받는다.
// //(2) this로 참조되는 객체에 메서드와 프로퍼티가 추가
// //(3) 다른 객체를 명시적으로 반환(return)하지 않으면
// // this로 참조한 객체가 반환된다.

// Person.prototype.say = function () {
//     return "I am " + this.name;
// };

// //재사용되는 멤버는 프로토타입에 추가해야 한다.

// //5. new를 강제하는 패턴

// // 생성자
// function Coffee () {
//     this.tastes = "sweet";
// };

// var my_coffee = new Coffee(),
//     other_coffee = Coffee();

// console.log(typeof my_coffee);
// console.log(typeof other_coffee);
// console.log(my_coffee.tastes);
// console.log(tastes);
// // new 키워드를 사용하지 않으면, this가 전역객체를 가리킨다.
// // 즉, 전역 객체의 프로퍼티가 추가.
// //6. 생성자 함수의 명명규칙
// // 생성자 함수의 함수의 이름은 대문자로 시작.
// //일반함수
// //function person () {...};

// //생성자 함수
// //function Person () {...};

//7. that 사용
// 전역 네임스페이스를 오염시키지 않는 방법에 대해 알아보자.

// function Coffee () {
//     var that = {};
//     that.tastes = "sweet";
//     return that;
// };

// function Coffeee () {
//     return {
//         tastes : "sweet"
//     };
// };
// Coffee.prototype.price = 100;
// var first = new Coffee(),
//     second = Coffee();

// console.log(first.tastes);
// console.log(second.tastes);

// //7번의 방법의 문제점 : 생성자 함수의 프로토타입의
// // 링크(연결고리)가 잃어버린다.
// // 즉, 생성자의 프로토타입의 속성을 사용할 수 없게 된다.


// console.log(first.price);

// function Milk () {
//     this.tastes = 'sweet';
// };
// Milk.prototype.price = 100;
// var milk = new Milk();
// console.log(milk.price);

// 8. 스스로 호출하는 생성자.
function Coffee () {
    if (this.constructor !== Coffee){
        return new Coffee();
    }
    this.tastes = 'sweet'
}

Coffee.prototype.price = 100;

var first = new Coffee(),
    second = Coffee();

console.log(first.tastes);
console.log(second.tastes);
console.log(first.price);
console.log(second.price);
