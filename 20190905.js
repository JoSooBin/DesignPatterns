// // 일관성있게 코드를 작성하는 것이 중요!

// // 1. 전역변수 최소화

// function func(){
//     var a;
// }

// // 1.1 전역변수의 문제점
// function mySum(a, b){
//     //안티패턴
//     result = a + b;
//     return result
// }

// function mySum1(a, b){
//     //개선안
//     var result = a + b;
//     return result
// }

// console.log(mySum(3, 5))
// //1.2 단일 var 패턴
// // 함수 상단에서 var 선언을 한 번만 쓰고,
// // 여러 개의 변수를 쉼표로 연결하여 선언

// function func(){
//     var a = 1,
//         b = 3,
//         sum = a + b,
//         i,
//         j;
// }

// myName = 'global'
// function func(){
//     console.log(myName);
//     var myName = 'local';
//     console.log(myName);
// }
// func();
// // 모두 함수 상단에서 변수가 선언된 것과 동일하게 작동
// // 이를 호이스팅(hoisting, 끌어올리다.)
// // 아래의 코드는 바로 위의 코드와 동일하게 동작
// myName = 'global';
// function func1(){
//     var myName;
//     console.log(myName);
//     myName = 'local';
//     console.log(myName);
// }
// func1()

//2. 코딩규칙 - 일관성있게 코드를 작성하라.
//2.1 들여쓰기
// 들여쓰기를 해야하는 곳 : 중괄호 안에 있는 것

// function outer(a, b){
//     var c = 1,
//         d = 2,
//         inner;
//     if (a > b){
//         inner = function (){
//             return {
//                 r : c - d
//             };
//         };
//     }else {
//         inner = function (){
//             return {
//                 r : c + d
//             };
//         };
//     }
//     return inner;
// }

//2.2 중괄호
//중괄호를 생략할 수 있을 때도, 항상 쓴다.

// for (var i = 0; i < 10; i += 1){
//     console.log(i);
//     console.log(i + " is " + (i % 2 ? "odd" : "even"));
// }

//2.3 여는 중괄호의 위치
// 항상 중괄호를 쓰고, 여는 중괄호는 선행하는 명령문과 동일한 
// 행에 두는 것이 좋다.

if (true){
    console.log("it's true")
}

if (true)
{
    console.log("it's true")
}
// 여는 중괄호의 위치는 함수의 리턴값이 객체일 때
// 문제가 발생할 수 있다.
function func(){
    return 
    {
        name : "Batman"
    }
}
console.log(func()) //undefined

// //2.4 공백
// // 공백을 활용하여 일관성과 가독성을 향상시키기
// //(1) for 루프의 구성요소를 분리하는 세미콜론 다음
// for (var i = 0; i < 10; i += 1){...}

// //(2) for 루프내에서 여러 개의 변수를 초기화한 다음
// for (var i = 0, max = 10; i < max; i += 1){...}

// //(3) 배열의 원소들을 분리하는 쉼표 다음
// var a = [1, 2, 3]

// //(4) 객체의 프로퍼티를 분리하는 쉼표 다음,
// //프로퍼티의 이름과 값을 분리하는 콜론 다음.
// var o = {a: 1, b: 2};

// //(5) 함수들의 인자들을 분리할 때
// myFunc(a, b, c)

// //(6) 함수를 정의하는 중괄호 전
// function myFunc() {}

// //(7) 익명함수 표현식에서 function 다음
// var myFunc = function () {};

// //(8) 모든 연산자(+, -, *, / 등)와 피연산자 사이
// var d = 0,
//     f = d + 5;

//2.5 명명규칙
// 변수와 함수명은 일관된 방식으로 결정하자.
// (1) 변수 선언하기
// 적절한 정보 담고 있어야 함. 
// ex) name - 이름, age - 나이, isDay

// (a) 낙타표기법(Camel case)
// 연결되는 단어의 첫글자만 대문자로 지정해 주는 방식
// ex) myName, firstName

// (b) 팟홀표기법(Pothole case, 움푹 패인 곳)
// ex) my_name, first_name

// (2) 생성자 함수는 대문자로 표기

// var animal = new Animal;
// function Animal(type){
// }

// 만약에 어떤 특성이 포함된다면, 예) cat
// anml - animal
var anmlcat = new Animal('cat');
function Animal(type){
}

//(3) 그외의 명명규칙
var PI = 3.14,
    MAX_WIDTH = 30;
