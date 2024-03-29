// 문제 설명
// 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < rsp의 길이 ≤ 100
// rsp와 길이가 같은 문자열을 return 합니다.
// rsp는 숫자 0, 2, 5로 이루어져 있습니다.

function solution(rsp) {
    return Array.from(rsp).map(v => {
        switch(+v) {
            case 2:
                return 0
            case 0:
                return 5
            default:
                return 2
        }
    }).join('');
}

// 다른 풀이 
function solution(rsp) {
    var answer = '';
    
    for(let i = 0; i < rsp.length; i++) {
        let ch = rsp.charAt(i);
        if(ch === "2") {
            answer += "0";
        }
        else if(ch === "0") {
            answer += "5";
        }
        else if(ch === "5") {
            answer += "2";
        }
    }
    
    return answer;
}

// 다른 풀이 2
function solution(rsp) {
    const rspWin = { 2 : 0, 0 : 5, 5 : 2 };
    return [...rsp].map(x => rspWin[x]).join('')
}
// 객체 생성