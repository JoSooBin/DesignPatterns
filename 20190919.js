//2) 콜백과 유효범위
//객체의 메서드를 콜백함수로 사용하는 경우
var objCal = {
    //여러 개의 메서드들과 프로퍼티들 있음
    //myAdd는 a,b를 받아 a+b를 출력
    myAdd : function (a, b) {
        console.log(a + b);
    }
};
//myCal은 a가 b보다 크면 myAdd메서드를 적용
//아니면 a를 출력해주는 함수
function myCal(a,b, callback) {
    if (a > b) {
        callback(a, b);
    } else {
        console.log(a);
    }
}
myCal(4, 1, objCal.myAdd); //5 출력
myCal(3, 7, objCal.myAdd); //3 출력

var studentData = {
    id : 2019123,
    fullName : 'Not set',
    setUserName : function (firstName, lastName) {
        //this는 studentData 객체를 가리킴
        this.fullName = firstName + " " + lastName;
    }
};

// function getUserInput(firstName, lastName, callback) {
//     callback(firstName, lastName);
// }

// getUserInput("Alice", "Liddell", studentData.setUserName);
// console.log(studentData.fullName);
// console.log(fullName);

//getUserInput()함수가 전역함수라서 
//studentData.setUser() 함수의 내부의 this가
//전역객체를 가리킴
//->이를 해결하기 위해, 콜백의 컨텍스트(context)를
// 전달해 줘야 함. 방법 : apply, call
function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}
getUserInput("Alice", "Liddell", studentData.setUserName, studentData);
console.log(studentData.fullName);
//console.log(fullName); //error

//3) 콜백예제2
// setTimeout()
var callback = function () {
    console.log('hello, world');
};

console.log('첫 번째');
setTimeout(callback, 3000); //3초 후에 callback 실행
console.log('두 번째');
console.log('세 번째');

//5. 함수를 반환하는 함수
// 자바스크립트에서 함수는 객체이므로, 함수의 반환 값이 될 수 있음.

//[note] 클로저(closure) : 내부함수가 외부함수의 맥락(context)에
// 접근할 수 있는 것

// 아래의 예제의 outer(): 외부함수, inner():내부함수
function outer () {
    var name = 'jsdp';
    function inner () {
        console.log(name);
    }
    inner();
}
outer();

//(2) 클로저 
//내부함수는 외부함의 지역변수에 접근할 수 있고,
//외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도
//내부함수가 외부함수에 접근할 수 있음.

var setup = function () {
    var count = 0;
    return function () {
        return (count += 1);
    }
};
//return 되는 함수는 내부함수.
//함수의 실행 결과 값이 아닌 함수 자체를 리턴.
//함수가 소멸된 이후에도 내부함수가 외부함수에 접근.

// var next = setup();
// console.log(next());
// console.log(next());
// console.log(next());
// setup()함수가 실행되면서 클로저가 생성
// 비공개 데이터를 저장하는데 사용될 수 있음.

//6. 즉시실행함수
// 함수 표현식을 생성하자마자 즉시 실행되는 패턴.
(function () {
    console.log('hello, world');
}());

//즉시실행함수의 장점 : 임시변수가 전역 네임스페이스를
//오염시키지 않도록 함.






