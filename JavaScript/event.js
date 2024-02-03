const btn= document.getElementById('btn');
const def = document.getElementById('defualt');
const input = document.getElementById('input');
// 콜백함수, 익명함수가 매개변수로 들어가 있음, 콜백함수에 이벤트 객체를 볼 수 있는 매개변수를 넣을 수 있음
// event.preventDefault; -> 
btn.addEventListener("click",function(event){
  event.preventDefault;
  console.log(event)
  console.log(event.target);
});


btn.addEventListener('mouseover',function(){
  console.log("mouseover")
}
);

btn.addEventListener('mouseout', function(){
  console.log("mouseout");
});

//무조건 다 되는 것이 아님(버튼에서는 한번밖에 되지 않으므로 적당한 곳을 찾아써야 됨)
btn.addEventListener('focus',function(){
  console.log('focus');
});
input.addEventListener('focus',function(){
  console.log('focus');
});
input.addEventListener('blur',function(){
  console.log('blur');
});
input.addEventListener('keydown',function(){
  console.log('keydown');
}) // 글자 길이 제한 시


// this
// 그 함수가 속해있던 객체 참조
// 무언가를 클릭할 때 불러오는 함수(여기서는 콜백함수)에서 this는 그 뭔가를 의미함
// 자기 자신


def.addEventListener('click', function(e){
  e.preventDefault();//form 전송을 막는 메소드
  console.log(this); // 출력해서 제출이 안되는 것을 보여주기 위함
  this.textContent = '클릭함';
});

// 화살표 함수에서는 this의 의미가 부모한테 감

