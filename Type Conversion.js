/* 
String() = 문자형으로 변환
Number() = 숫자형으로 변환
Boolean() = 불리언형으로 변환
*/

const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2;
console.log(result); // 85

//String
String(3); // 3
String(true); // true
String(false); // false
String(null); // null
String(undefined); // undefined

//Number - 괄호안의 타입을 숫자형으로 변경
Number("1234"); // 1234
Number("asd"); // NaN
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN

//Boolean (0, 빈 문자열, null, undefined, NaN은 false / 나머진 다 true)
Boolean(1); // true
Boolean("asd"); // true
Boolean(' ') // true (공백이 있기 때문에 true)

Boolean(0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false