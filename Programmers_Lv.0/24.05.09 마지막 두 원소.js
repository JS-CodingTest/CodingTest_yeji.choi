// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
  const num1 = num_list.slice(-1);
  const num2 = num_list.slice(-2, -1);
  let result;

  if (num1 > num2) {
    result = num1 - num2;
  } else {
    result = num1 * 2;
  }
  num_list.push(result);
  return num_list;
}

// 다른 풀이
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
