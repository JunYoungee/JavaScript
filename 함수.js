/*
함수 작성요령
function.함수명(매개변수){
    함수의 실행코드
}
*/

// 매개변수가 없는 함수
function showError(){
    console.log('에러가 발생했습니다. 다시 시도해주세요.');
}

showError();

// 매개변수가 있는 함수
function sayHello(name){
    let msg = `Hello`;
    if(name){
        msg = `Hello, ${name}`;
    }
    console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('JunYoung');
sayHello();

// 지역변수 : 함수 내부에서만 접근할 수 있는 ㅎㅇgcrDㅇㄹ변수
// 전역변수 : 어디서나 접근할 수 있는 변수
let msg1 = "welcome"; // 전역변수 msg1

function sayHello1(name){
    let msg1 = "Hello" // 지역변수 msg1
    console.log(msg1 + ' ' + name);
}

sayHello1('Mike');
console.log(msg1);


// return 값으로 반환
function add (num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result); // 5

// 화살표 함수
let add = (num1, num2)=>{
    return num1 + num2;
}