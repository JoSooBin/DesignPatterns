//6. 즉시실행함수

(function () {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today = new Date(),
        msg = "Today is " + days[today.getDay()] 
            + ', ' + today.getDate();
    console.log(msg);
}());

// 이 패턴은 초기화 코드에 유효범위 샌드박스를 제공한다는 점에서 유용
// 어떤 변수도 전역유효범위로 새어나가지 않게 한다.

(function (who, when) {
   console.log("I met " + who + "on " + when) 
}("Joe Black", new Date()));

//7. 함수의 프로퍼티 - 메모이제이션(Memoization 패턴)
// 함수는 객체이기 때문에 프로퍼티를 가질 수 있음.
// 예) 함수는 length라는 프로퍼티를 갖는다.

var func = function (a, b, c) {};
console.log(func.length);

//함수에 프로퍼티를 추가하여 결과값(반환값)을 
//캐시(cache)하면 다음 호출 시점에 복잡한 연산을
//반복하지 않아 효율적으로 활용할 수 있는데,
// 이를 메모이제이션 패턴이라고 부름.

function mySqrt(arg) {
    return Math.sqrt(arg);
}

console.log(mySqrt(16));//제곱근
// console.log(mySqrt(9));
// console.log(mySqrt(4));

function sqrt(arg) {
    if (!sqrt.cache) {
        sqrt.cache = {}
    }
    if (!sqrt.cache[arg]) {
        sqrt.cache[arg] = Math.sqrt(arg)
    }
    return sqrt.cache[arg];
}
console.log(sqrt(4));
console.log(sqrt(4));
console.log(sqrt.cache);
console.log(sqrt(4));
console.log(sqrt(16));
console.log(sqrt.cache);
console.log(sqrt(4));
console.log(sqrt.cache);

var Fibonacci = (function () { 
    function Fibonacci () {

    }
    Fibonacci.prototype.memorizedValues = [];
    Fibonacci.prototype.MemoFib = function (n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        if (!this.memorizedValues[n]) {
            this.memorizedValues[n] = this.MemoFib(n - 1) 
                                 + this.MemoFib(n - 2);
        }
        return this.memorizedValues[n];
    };

    Fibonacci.prototype.NaiveFib = function (n) {
        //0, 1, 1, 2, 3, 5, 8,...
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        return this.NaiveFib(n-1) + this.NaiveFib(n-2);
    };
    return Fibonacci;
}());
start = new Date();
console.log(Fibonacci.prototype.NaiveFib(40)); //원소의 합이 40이 될때까지의 피보나치 수열을 만들어라
end = new Date();
console.log('소요시간: ', end - start)

start1 = new Date();
console.log(Fibonacci.prototype.MemoFib(40));
end1 = new Date();
console.log('소요시간: ', end1 - start1)