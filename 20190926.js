//1. 설정객체 패턴
// 장점 :
//   - 매개변수의 순서를 기억할 필요가 없음.
//   - 선택적인 매개변수를 안전하게 생략
//   - 읽기 쉽고, 유지보수하기 편함.
//   - 매개변수의 추가와 제거가 편함

// 단점 :
//   - 매개변수의 이름을 기억해야 함.

var addProduct = function (product) {
    var name = product.name,
        date = product.date,
        old = product.old,
        use = product.use || 'Not set' // a || b
        spec = product.spec || 'Not set';
    //함수 실행 코드 
    console.log(name, date, old, use, spec);
};

var mugcup = {
    name : "머그컵",
    date : new Date(),
    old : "새 제품",
    use : "음료"
};

addProduct(mugcup);

var sayHi = function (who) {
    return "Hello" + (who ? ", " + who : " ")
    //false, 0, undefined, null, NaN, 빈문자열
};
//함수 호출
console.log(sayHi());
console.log(sayHi("Min"));
console.log("=====================");

//함수 적용(apply)
//자바스크립트에서 Function.prototype.apply()를 사용하여 함수를 적용할 수 있음.

console.log(sayHi.apply(null, ["Min"]));
console.log("========================");
prop = "global";
var person = {
    prop : "local",
    test : function () {
        return this.prop; 
    },
    sayHi : function (who) {
        return "Hello" + (who ? ", " + who : " ");
    }
};
console.log(person.sayHi());
console.log(person.sayHi.apply(person, []));
console.log(person.test.apply(null, []));
console.log(person.test.apply(person, []));
console.log(person.test.call(person, ));


//2.4 범용 커리함수 만들기
// 1. Array.prototype.slice([begin[, end]])
// 어떤 배열의 begin부터 end까지(end 미포함)에 대한 복사본을  새로운 배열 객체로 반환
// 2. Array.concat()
// 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
// 3. function.arguments 
// 함수로 넘겨 받은 arguments에 해당하는 배열과 같은 객체

// function add(x, y) {
//     if (typeof y === "undefined") {
//         return function (y) {
//             return x + y;
//         };
//     }
//     return x + y;
// }

// console.log(add(3, 4));
// console.log(typeof add(4));
// var myAdd = add(4);
// console.log(myAdd(2));

// var abc = ['a', 'b', 'c', 'd', 'e'];
// console.log(abc.slice(2));
// console.log(abc.slice(2, 4));
// console.log(abc.slice(1, 5));

// var arr1 = ['a', 'b', 'c'];
// var arr2 = ['d', 'e'];
// console.log(arr1.concat(arr2));

// function add(a, b, c) {
//     return a + b + c;
// }

// function test(fn) {
//     console.log(arguments);
// }
// var a = test(add);
// console.log(a);
// var b = test(add, 3, 13, 4);
// console.log(b);

