// 문제 설명
// 정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.
// arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  const arr = Array(n).fill(Array(n).fill(0));
  return arr.map((v, i) => {
    return v.map((v2, i2) => (v2 = i == i2 ? 1 : 0));
  });
}

// 다른 풀이
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
