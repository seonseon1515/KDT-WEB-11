// HTML 요소 내용 읽고 쓰기
//자바스크립트의 돔을 활용하기 위해서 요소를 만들었으면 항상 불러와야 함
const text = document.getElementById('text')
console.log(text);

const link = document.getElementById('link');

console.log(link);

const img = document.getElementById('img');

const input = document.getElementById('input');
// 위에서 부터 읽기 때문에 같은 위치에 넣을 경우 맨 아래코드가 제일 최근에 실행됨
text.textContent = "hi";

text.innerText =  "안녕하세요";

text.innerHTML = "여기는 <b>첫번째</b> 태그 입니다!"
//html 코드를 쓸 수 있음

/**
 * <.text>는 제일 마지막에 있는 요소가 출력이 되므로 순서가 중요
 * textContent: 요소안에 텍스트 가져오거나 수정
 * innerText: 요소 안에 텍스트를 가져오거나 수정
 * textContents vs innerText : 
 *  - textcontent: 고백 문자 그대로 반환, IE9 이전 버전사용 불가
 * - innerText: 남는 공백 문자 제거 , table, tbody, tr 등 table 요소는 수정 불가
 * innerHtml: 입력된 문자열을 Html 형식으로 태그를 사용하여 쓸 수 있음
 */

//classList
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('titleBig');
/**
 * add: class 를 추가
 * remove: class를 제거
 * toggle: class가 있으면 제거, 없으면 추가
 * contains: 해당 class가 있는지 boolean으로 알려주는 것
 */
console.log(text.classList.contains('titleBig'))

//setAttribute: html 요소에 속성을 추가하는 것 , 앞에는 속성 그 뒤는 속성 값
link.setAttribute('href',"https://www.naver.com");
img.setAttribute('src',"star.jpg")
img.setAttribute('width','200px');
input.setAttribute('placeholder',`이름을 입력하세요`)


// node는 dom
// 다른 node에 접근하기
console.log(children);