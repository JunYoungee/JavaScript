/*
연산자 
+ (더하기)
- (빼기)
* (곱하기)
** (거듭제곱)
/ (나누기)
% (나머지)
*/

let num = 10;
num = num + 5;
console.log(num);

// 연산자 간략화
let num2 = 10;
num2 += 5; // num에 5를 더해줌
num2 *= 5; // num에 5를 곱해줌
num2 -= 5; // num에 5를 빼줌
num2 %= 5; // num에 5를 나눴을 때 나머지를 출력
console.log(num2)

// 증가 연산자, 감소 연산자
let num3 = 10;
let result = num3++; // num3의 값을 result에 할당 후 값 증가
let result2 = num3--; // num3의 값을 result2에 할당 후 값 감소
let result3 = ++num3; // num3의 값을 증가시킨 후 result3에 할당
let result4 = --num3; // num3의 값을 감소시킨 후 result4에 할당
console.log(num3);