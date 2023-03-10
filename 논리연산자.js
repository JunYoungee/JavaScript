/*
논리 연산자
|| (OR) 
    - 여러개 중 하나라도 true면 true
    - 모든값이 false일 때만 false
&& (AND)
    - 모든 값이 true면 true
    - 하나라도 false라면 false
! (NOT)
    - true면 false
    - flase면 true
*/

const name = 'Mike';
const age = 30;

// 이름이 Tom이거나 성인이면 통과, 둘다 아닐시 돌아가
if(name === 'Tom' || age > 19){
    console.log('통과');
} else {
    console.log('돌아가.')
}

// 이름이 Mike이고 성인이면 통과, 하나라도 다를 시 돌아가
if(name === 'Mike' &&  age > 19){
    console.log('통과');
} else {
    console.log('돌아가.')
}

// 나이를 입력받았을 떄 성인이 아니면 돌아가
const age2 = 20;
const isAdult = age2 > 19;
if (!isAdult){
    console.log('돌아가');
} else{
    console.log('성인이시군요');
}

// 우선 순위
const gender = 'F';
const name2 = 'Jone';
const isAdult2 = true;

if (gender === 'M' && name === 'Mike' || isAdult2){ // &&가 || 보다 우선순위가 높아 통과가 출력
    console.log('통과')
} else {
    console.log('돌아가')
}
