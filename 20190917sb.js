//함수
//일급객체(first-class) & 유효범위(scope))를 제공

//1. 자바스크립트 함수의 특징
// - 프로그램이 실행되는 동안 동적으로 생성가능
// - 변수에 할당할 수 있고, 다른 변수에 참조를 복사할 수 있으며, 확장 가능
// - 몇몇 특별한 경우를 제외하면 삭제도 가능
// - 다른 함수의 인자로 전달할 수 있고, 다른 함수의 반환 값이 될 수 있음.
// - 자기 자신의 프로퍼티와 메서드를 가질 수 있음
// 또, 자바스크립트에서 변수(var)는 함수 유효범위를 갖기 때문에,
// 전역 변수를 최소화하는데 있어서 함수는 꼭 필요한 존재임.

//2. 함수를 정의하는 방법
//1) 함수 선언문(function declaration)
//2) 함수 표현식(function expression)
//  (1) 익명함수(이름이 없는 함수, anonymous function expression)
//  (2) 기명함수(이름이 있는 함수, named function expression)

//함수 표현식 - 기명함수 표현식
// var myAdd = function myAdd (a, b) {
//     return a + b;
// };

// //함수 표현식 - 익명함수 표현식

// var myAdd1 = function (a,b) {
//     return a + b;  
// };

// //함수 선언문
// function myAdd2 (a,b) {
//     return a + b;
// }

// //예제: factorial(n) = n(n-1)..3*2*1
// //기명함수 표현방식
// var myFactorial = function myFactorial(n) {
//     if (n >= 2) {
//         return n * myFactorial(n-1);
//     }  else {
//         return 1;
//     }
// };

// console.log(factorial(3));

// // 함수표현식은 콜백패턴을 사용할 때나 객체의 메서드 값으로 할당할 대 주로 사용

// // 함수 callMe()의 전달인자로 익명함수를 전달
// callMe(function() {})

// // 함수 callMe()의 전달인자로 기명함수를 전달
// callMe(function me () {})

// // 객체 myobj의 메소드(Method)를 익명함수값으로 설정
// var myobj = {
//     say : function () {
//         //내용
//     }
// };

//3. 함수 선언문과 함수표현식의 차이 : 함수 호이스팅(hoisting)
// 모든 변수(var)는 해당 영역의 맨 윗 부분으로 끌어올려진다(hoisting).

//안티패턴. 설명을 위해 작성
//전역 함수

function foo () {
    console.log('global foo');
}

function bar () {
    console.log('global bar');
}

function hoistMe() {
    console.log(typeof foo);//함수 모양만 올라옴
    console.log(typeof bar);//var만 올라옴

    foo();//
    bar();//var만 올라왔기에 에러

    //foo()는 함수선언문
    function foo() {
        console.log('local foo');
    }
    //bar()는 함수표현식 - 익명함수표현식
    var bar = function () {
        console.log('local bar');
    };

}

hoistMe();

//함수 선언문을 사용하면, 함수 자체가 호이스팅되기 때문에
// 코드의 오류가 발생할 가능성이 있다.

// 4. 콜백 패턴
// 자바스크립트의 함수는 객체로, 다른 함수의 전달인자로 전달될 수 있다.
// 예) you() 함수에 me()함수를 전달인자로 전달하면,
// 특정시점에 you() 는 me()를 호출할 수 있다.
// me()를 콜백함수 또는 콜백이라고 부름.

// function me () {
//     console.log('Hi');
// }

// function you(callback) {
//     //여러 코드
//     console.log('pre_test');
//     if (typeof callback === 'function' ) {
//         callback();
//     } else {
//         console.log('post_test');
//     };
// }

// you(me); //함수의 참조만 전달하여 실행은 추후진행되도록 만든 점을 주목!
// you(me());

//1) 콜백 예제
// var findNodes = function () {
//     var i = 100, // 긴 반복 시뮬레이션
//         nodes = [], // 결과를 저장할 배열
//         found = 1; // found 는 노드탐색의 결과
//     while (i) {
//         i -= 1;
//         // 복잡한 로직이 있다고 가정
//         nodes.push(found);
//     }
//     return nodes;
// };

// //console.log(findNodes());

// var myAdd = function(nodes) {
//     var i = 0,
//         max = nodes.length;
//     for(; i < max; i += 1){
//         nodes[i] += 10;
//     }
//     return nodes;
// };

// console.log(myAdd(findNodes()));

// var findNodes = function(callback) {
//     var i = 5, // 긴 반복 시뮬레이션
//         nodes = [], // 결과를 저장할 배열
//         found = 1; // found 는 노드탐색의 결과
    
//     if ( typeof callback !== 'function') {
//         callback = false;
//     }

//     while (i) {
//         i -= 1;
//         if (callback){
//             nodes.push(callback(found));
//         } else{
//             nodes.push(found);
//         }
//     }
//     return nodes;
// };

// var myAdd = function (node) {
//     node += 10;
//     return node;
// };

// console.log(findNodes(myAdd)); // [11, 11, 11,..]
// console.log(findNodes()); // [1, 1, 1, 1, ...]
// console.log(findNodes( function (node) {
//     node += 10;
//     return node;}
//     ));
