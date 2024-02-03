// this를 저장하기 위한 전역변수 
let target;


$('td>p').on('click',function(){
  console.log(this);
  console.log((this).text());
  //날짜만 가져오기 위한 this의 text값

  target=this;
})

let date = $(this).text();
$('#date').val(date); //input에 날짜 선택

wrightScredule(){
  let content = $('#content').val();
  console.log(content);
}


//요소 추가
console.log("target",target);
console.log('target',$(target).parent())

$(target).parent().append(<span>$(content)</span>)

$('#content').val('');
$('#date').val('');