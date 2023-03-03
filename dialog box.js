/*
alert() = 메세지를 보여줌
prompt() = 메세지를 보여주고 입력받는 필드 제공
confirm() = 사용자에게 확인을 받기 위한 용도
*/

//prompt
const name = prompt("이름을 입력하세요.");
alert("환영합니다, " + name + "님. 환영합니다 .");

const sub = prompt("예약일을 입력해주세요.", "2023-03-"); // 프롬프트는 두개의 인수를 받을 수 있음.
console.log(sub); // 디폴트 값을 넣을 수 있음

//confirm
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult) // 확인을 눌렀을 때 true 취소를 눌렀을 때 false