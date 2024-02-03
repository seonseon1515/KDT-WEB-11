// //js
// console.log(document);
// //jq
// console.log($(document));
// $(document).ready(function(){
//   console.log('ready() - 문서의 Dom 트리가 완성되면 실행되는 이벤트')
// })
// $(function(){
//   console.log('안녕');
// })

// // 페이지가 열리면서 생성되야하는 이벤트 삽입

//click()
// $(".hello").click(function(){
//   $('.hello').css('color','red')
// })

// $('.nums').click(function(){
//   $('.nums').css('color','blue');
//   $(this).css('color','blue');
  //$(this)는 nums 중에 자기자신 = 이벤트가 적용된 요소
// });

//on의 축약 형태가 위의 click

$('.nums').on('click',function(){
  $(this).css('backgroundColor','red');
})
//mouseover():마우스 올렸을 때
$('.numbers').mouseover(function(){
  $('.numbers').css("backgroundColor",'green')
  // $('.numbers').append('<li>.mouseover() call</li>');
  $(this).css('backgroundColor','green')
})

// //hover(): 마우스 올렸을 때와 떼었을 때
// $('.div-hover').hover(function(){
//   $(this).addClass('hover'),
  
//   function(){
//     $(this).removeClass('hover');
//   }
// })

$('.div-hover').hover(function(){
  $(this).toggleClass('hover');
})

//scroll
//ex) 윈도우 창 스크롤 할 경우
// windowe: 브라우저 화면 전체
// document : html 문서 해당
$(window).scroll(function(){
  console.log("scroll;")
})

//keydown(): 누를 떄
//heyup(): 뗄 때
$('.input-key').keydown(function(event){
  if(event.code==="ArrowUp"){
    console.log('up')
  } else if(event.code==="ArrowDown"){
    console.log('down')
  } else if(event.code==="ArrowRight"){
    console.log("오른쪽으로 이동")
  } else if (event.code==="ArrowLeft"){
    console.log("왼쪽으로 이동")
  } else{
    console.log('other');
  }
})