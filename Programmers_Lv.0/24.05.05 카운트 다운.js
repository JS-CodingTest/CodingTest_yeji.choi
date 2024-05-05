// 문제 설명
// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ end_num ≤ start_num ≤ 50

function solution(start, end) {
  let list = [];
  for (i = start; i >= end; i--) {
    list.push(i);
  }

  return list;
}

// 다른 풀이
const solution = (start, end) =>
  Array(start - end + 1)
    .fill(start)
    .map((v, i) => v - i);
