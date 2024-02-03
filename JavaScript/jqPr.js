$('#outer').css({
    width: '500px',
    height: '500px',
    'border-radius': '15%',
    borderColor: 'orange',
    borderStyle: 'solid',
    borderWidth: '15px',
    positoin: 'relative',
});

$('.parent').css({
    width: '500px',
    height: '500px',
});

$('.but').css({
    width: '70px',
    height: '40px',
    'felx-direction': 'row',
    color: 'white',
    'background-color': 'black',
    borderStyle: 'none',
    margin: '0px 5px 0px',
    position: 'reative',
});

$('.but1234').css({
    display: 'flex',
    justifyContent: 'center',
});

$('.picture').css({
    position: 'relative',
    'text-align': 'center',
    'box-sizing': 'borderBox',
    marginTop: '100px',
    width: '450px',
    height: '400px',
    fontSize: '90px',
    marginLeft: '20px',
});

$('span').css({ backgroundColor: 'yellow' });

function apple() {
    $('.picture').text('');
    $('.picture1').attr('src', 'apple.jpg');
}

function banana() {
    $('.picture').text();
    $('.picture1').attr('src','banana.jpeg');
    
}
function grapes()  {
    $('.picture').text();
    $('.picture1').attr('src','grape.jpeg');
}
function peaches() {
    $('.picture').text();
    $('.picture1').attr('src','Peach.jpg');
}

