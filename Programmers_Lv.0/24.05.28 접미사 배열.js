// 문제 설명
// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// my_string은 알파벳 소문자로만 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 100

const solution = (my_string) => {
  return [...my_string]
    .reduce((acc, cur, idx) => {
      const curStr = my_string.slice(idx, my_string.length);
      return [...acc, curStr];
    }, [])
    .sort();
};

// 다른 풀이
function solution(st) {
  var answer = [];

  for (let i = 0; i < st.length; i++) {
    answer.push(st.substr(i, st.length));
  }

  return answer.sort();
}
