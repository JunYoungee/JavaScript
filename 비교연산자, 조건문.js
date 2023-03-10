// 비교연산자, 조건문
console.log(10 > 5); // 10이 5보다 큰지 확인 (true)
console.log(10 == 5); // 10이 5와 같은지 확인 (false)
console.log(10 != 5); // 10이 5와 다른지 확인 (true)

// 동등 연산자 , 일치 연산자
const a = 1;
const b = "1";
console.log(a == b); // 숫자형과 문자열을 비교해도 true가 반환
console.log(a === b); // 숫자형과 문자열을 비교하면 false가 나옴(type까지 비교)

//조건문
const age = 19;

if (age > 19){
    console.log('미성년자입니다.');
}
else if(age === 19){
    console.log('수능 잘치세요.');
}
else{
    console.log('성인입니다.');
}
