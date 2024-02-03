function addClass(){
  $('#hi').addClass('font-size');
}

function removeClass(){
  // $('#hi').removeClass('font-size'); //특정 클래스 삭제
  $('#hi').removeClass() // 클래스 전체 삭제
}
function hasClass(){
  $('#hi').hasClass('font-size');
}// boolean 반환
function toggleClass(){
  $('#hi').toggleClass('bg-color');
}



function switchClass(){
  $('#hi').switchClass('color-blue','color-red',5000)
}// 1000=> 1초
