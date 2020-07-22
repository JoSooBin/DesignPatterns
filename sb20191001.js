var arr=[1, 2, 3, 4];

console.log(arr.slice(0,1));
console.log(arr);
console.log(arr.splice(0,1));
console.log(arr.splice(0,1));
console.log(arr.splice(0,1));
console.log(arr);// 입력이 같으면 출력이 같아야되는게 순수함수인데 splice는 순수함수라고 보기 어렵다

var arr=[1, 2, 3, 4];

var mapArr = arr.map(function(x){
    return x*2;
});
console.log(mapArr);
console.log(arr);//순수함수

//filterArr는 주어진거를 걸러주는 필터효과
var cnodi = function (x) {
    return x % 2 === 0;
};
var filterArr = function(arr){
    return arr.filter(condi);
};

console.log(filterArr(arr));
//순수함수라 할수없음
//들어온인자갖고 판단가능해야하는데 얘는 외부(이미 정해진)거에따라 값이 달라진다
//condi를 인자로 받지 않았기 때문에

var filterArrS = function (arr, cnodi){
    return arr.filter(condi);
};
console.log(filterArrS(arr, condi));
//순수함수로 만들어준거.


// //1.파이프(교재6장)
// //함수를 파이프로 연결하면, 이해하기 쉽고 구현하기 쉬워짐.
// //임시변수의 사용을 회피하고, 코드를 간결하게 만들 수 있음.

// // 파이썬 "hello,world".strip().split()
// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //2,4,6,8,10
// var tempItem = [];
// for(var i = 0; i <items.length; i++){
//     if (items[i]%2 === 0){
//         tempItem.push(items[i]);
//     }
// }
// console.log(tempItem);

// //3, 6 ,9
// var tempItems = [];
// for(var i = 0; i <items.length; i++){
//     if (items[i]%3 === 0){
//         tempItems.push(items[i]);
//     }
// }
// console.log(tempItems);

// Array.prototype.where = function (testfn) {
//     var results = [];
//     for (var i = 0; i<this.length; i++){
//         if (testfn(this[i])){
//             results.push(this[i]);
//         }
//     }
//     return results;
// };

// console.log(items.where(function (thing){
//     return thing % 2 === 0
// })//2의배수찾기
// .where(function (thing){
//     return thing % 3 === 0
// })//그러한것들중에 3의 배수를 찾아서 맞으면 넣는다.
// ); //판단하고 맞으면 배열에 넣는다

// Array.prototype.select = function (projection) {
//     var results = [];
//     for (var i = 0; i<this.length; i++){
//             results.push(projection(this[i]));
//     }
//     return results;
// };


