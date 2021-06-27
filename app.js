var ball1Size = 100;
var ball2Size = 100;
var ball2SizeStep = 50;

function onBall1Click() {
    var ball1 = document.querySelector('.ball1');
    ball1Size = ball1Size + 50;

    if (ball1Size > 400) {
        ball1Size = 100;
    }

    ball1.innerText = ball1Size;
    ball1.style.width = ball1Size;
    ball1.style.height = ball1Size;

    if (ball1Size == 400) {
        ball1.style.backgroundColor = 'red';
    } else {
        ball1.style.backgroundColor = 'yellow';

    }
}
function onBall2Click() {
    var ball = document.querySelector('.ball2');
    alert('Ball2');
}
function onBall3Click() {
    var ball = document.querySelector('.ball3');
    alert('Ball3');
}
function onBall4Click() {
    var ball = document.querySelector('.ball4');
    alert('Ball4');
}
