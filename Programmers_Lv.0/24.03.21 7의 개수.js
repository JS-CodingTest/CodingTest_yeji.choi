// 문제 설명
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000


function solution(array) {
    let answer = 0;
      let str = array.toString()
    for(let i=0;i<str.length;i++)
        if(str[i]=='7'){
    answer++;
        }
    return answer;
}

// 다른 풀이 
function solution(array) {
    return array.join('').split('7').length-1;
}
