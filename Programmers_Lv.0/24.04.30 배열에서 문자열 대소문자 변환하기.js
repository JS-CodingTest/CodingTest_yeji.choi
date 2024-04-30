// 문제 설명
// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ strArr ≤ 20
// 1 ≤ strArr의 원소의 길이 ≤ 20
// strArr의 원소는 알파벳으로 이루어진 문자열 입니다.

function solution(strArr) {
    for (let i = 0; i < strArr.length; i++) {
      if (i % 2 === 1) {
        strArr[i] = strArr[i].toUpperCase();
      } else {
        strArr[i] = strArr[i].toLowerCase();
      }
    }
    return strArr;
  }

  // 다른 풀이 
  function solution(strArr) {
    return strArr.map((v, i) => i % 2 === 0 ?
v.toLowerCase() : v.toUpperCase());
  }