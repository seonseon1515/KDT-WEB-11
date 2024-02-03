//jquery
//$(선택자).동작함수();
// 가져오는 작업이 사라짐
// console.log($("#hello").text());
// $('#hello').text('안녕히가세요!');
// $('#hello').css('font-size','20px');
// $('#hello').css('background-color','blue');

// Jquery 메소드!!
/**
 * val()
 */
// input 입력 값 가져오는 것, 변수에 넣어서 가져와야 됨
function getValue() {
    let value = $('input').val();
    console.log(value);
}

// 값을 설정하는 것
function setValue() {
    $('input').val('설정완료');
}

//CSS
function chanegeCssJs() {
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color: red;';
}
function changeCssJquery() {
    // $('span').css("font-size",'40px');
    // $('span').css("color","blue");
    // 객체 형태로 css를 묶어서 쓸 수 있음
    $('span').css({ 'font-size': '40px', color: 'blue' });
}
function getCssJquery() {
    console.log($('span').css('color'));
}

function changeAttrJs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrJq() {
    $('a').attr('href', 'https://www.daum.net');
}

//html
function changeHtmlJs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javascript</p>';
}
function changeHtmlJq() {
  $('.html').html('<p>jquery<p>');
};

// 요소 추가하기
function appendJs(){
  let ul = document.querySelector('.colors');
  let li = document.createElement('li'); //<li></li> 만든 상태

  li.textContent = "마지막으로 추가된 js"
  ul.append(li);
} 
function appendJq(){
  $('.colors').append('<li>마지막으로 추가된 jquery</li>')
}

function prependJs(){
  let ul = document.querySelector('.colors');
  let li = document.createElement('li'); //<li></li> 만든 상태

  li.textContent = "처음으로 추가된 js"
  ul.prepend(li);
}
function prependJq(){
  $('.colors').prepend('<li>처음으로 추가된 jquery</li>')
}

// 요소 삭제하기
function removeJs(){
 document.querySelector("#li2");
 li2.remove();
};
function removeJq(){
  $('#li2').remove();
};


// empty
function emptyJs(){
  let nums = document.querySelector('ul.nums');
  console.log(nums)
  nums.innerHTML= '';
}
function emptyJq(){
 $('ul.nums').empty();
}


function findPrant(){
console.log($('.child2').parent());
}
function findParants(){
  console.log($('.child2').parents());
}
function findNext(){
  console.log($('.child2').next());
}
function findPrev(){
  console.log($('.child2').prev());
}
function findChildren(){
  console.log($('.child2').children());
}
