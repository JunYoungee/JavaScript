// for 문
// for (초기값; 조건문; 코드 실행 후 작업){}
for (let i = 1; i <= 10; i++){
    console.log(i)
}

// while 문
// while (조건문){}
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}

// do - while 문
// 코드를 한번 실행하고 while 문을 돌림
let j = 0;
do {
    console.log('do 먼저 한번 실행')
    break;
} while( j < 10)

// 반복문을 빠져나가는 기능
// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

// break
while(true){
    let answer = confirm('계속 할까요?');
    if (!answer){
        break;
    }
}

// continue
for(let i = 0; i < 10; i++){
    if (i%2){
        continue;
    }
    console.log(i)
}