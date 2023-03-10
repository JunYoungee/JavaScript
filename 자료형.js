// 문자형의 3가지 작성방식
const name1 = "Mike" // 큰따옴표
const name2 = 'Mike' // 작은따옴표
const name3 = `Mike` // 백틱

const message = "I'm a boy.";
const message2 = 'I\'m a boy.'; // 백슬래쉬를 앞에 두면 특수문자로 인식

const message3 = `My name is ${name1}`; // 백틱은 문자열 내부에 변수를 넣을 때 편리
console.log(message3); // My name is Mike

const message4 = `나는 ${30+1}살 입니다.`; // 표현식을 넣는 것도 가능
console.log(message4); // 나는 31살 입니다.

// 숫자형
const age = 30; // 숫자형 Number
const PI = 3.14;

console.log(1 + 2); // 더하기 3
console.log(10 - 3); // 빼기 7
console.log(3 * 2); // 곱하기 6
console.log(6 / 3); // 나누기 2
console.log(6 % 4); // 나머지 2

const x = 1/0; // 숫자를 0으로 나눴을 때
console.log(x); // Infinity(무한대)

const name = "Mike";
const y = name/2; // 문자열을 숫자로 나눴을 때
console.log(y); // NaN = Not a Number

// oolean
const a = true;
const b = false;
console.log(name == 'Mike') // true
console.log(age > 40); // false

// null 과 undefined
let age2;
console.log(age2); // undefined = 정의되지 않음

let user = null; // user는 존재하지 않는다

// typeof 연산자
const name4 = "Mike";
console.log(typeof 3); // number
console.log(typeof name4); // string
console.log(typeof true); // boolean
console.log(typeof null); // object = 객체형
console.log(typeof undefined); // undefined
