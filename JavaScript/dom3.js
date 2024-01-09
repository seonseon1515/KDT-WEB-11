// 노드 생성
const root =document.getElementById('root');
const p = document.createElement('p');
p.textContent= "안녕하세요"
//<p>안녕하세요<p>
p.classList.add('append-p');
//<p class='append-p'>
p.style.fontWeight = 'bold';
//css 형식을 js에다 쓸 때는 '-'를 지우고 camel-case로 써야됨
console.log(p);

// 노드 추가
/**append(): 노드 객체 또는 텍스트 추가, 여러개 추가, 한번에 여러개의 자식 요소 추가 가능, 반환값이 없음
 * 
 * 
 * appendChild: 노드 객체만 추가 가능, 한번에 하나씩 추가가능, 반환값 있음
 * 
 * prpend: 첫번째 자식으로 추가한다.
 */
// root.append(p);
const target = document.getElementById('target');
// root.prepend(p);
target.before(p);
//2번(target)의 이전 형제로 추가됨
target.after(p);
//target의 다음 형제



// 노드 삭제
/** remove(): 선택한 요소를 삭제
 * removeChild(자식 노드):선택한 요소의 자식을 삭제
 */
target.remove();
root.removeChild(p);
// root.remove();
//class 명이 아니라 태그명 씀

