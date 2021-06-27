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
    } else if (ball1Size == 250) {
        ball1.style.backgroundColor = 'orange';
        /*bonus: multiple box shadows with  1 black inset and 2 outer grey blurs so it will look like a comet: offset-x | offset-y | blur-radius | spread-radius | color */
        ball1.style.boxShadow = 'inset 0 5px 15px 10px rgba(0,0,0,1), 10px 10px 8px darkgrey, 15px 25px 18px grey';
        ball1.style.border = '15px solid grey';
        ball1.style.fontSize = '2rem';
        ball1.style.padding  = '10px';
    } else {
        ball1.style.backgroundColor = 'yellow';
        ball1.style.boxShadow = '';
        ball1.style.border = '';
        ball1.style.fontSize = '';
        ball1.style.padding = '';
    }
}






function onBall2Click() {
    var ball = document.querySelector('.ball2');
    if (ball2Size < 400){
        ball2SizeStep = 50;
    } else {
        ball2SizeStep = -50
    }
    ball2Size = ball2Size + ball2SizeStep;


   if (ball2Size == 250) {
    ball2.style.backgroundColor = 'orange';
    /*bonus: multiple box shadows with  1 black inset and 2 outer grey blurs so it will look like a comet: offset-x | offset-y | blur-radius | spread-radius | color */
    ball2.style.boxShadow = 'inset 0 5px 15px 10px rgba(0,0,0,1), 10px 10px 8px darkgrey, 15px 25px 18px grey';
    ball2.style.border = '15px solid grey';
    ball2.style.fontSize = '2rem';
    ball2.style.padding  = '10px';
  }
//    else {
//     ball2.style.backgroundColor = 'yellow';
//     ball2.style.boxShadow = '';
//     ball2.style.border = '';
//     ball2.style.fontSize = '';
//     ball2.style.padding = '';
//   }



   
   


    if (ball2Size == 400) {
        ball2.style.backgroundColor = 'red';
    } else {
        ball1.style.backgroundColor = 'yellow';
    }
     
    
    ball2.innerText = ball2Size;
    ball2.style.width = ball2Size;
    ball2.style.height = ball2Size;

     
}

function onBall3Click() {
    let ball = document.querySelector('.ball3');
     

    if (ball.innerText === 'OFF') {
        ball.innerText = 'On'
        ball.classList.add('active')
    } else {
        ball.innerText = 'OFF'
        ball.classList.remove('active')
    }

   
}

function onBall4Click() {
    let ball = document.querySelector('.ball4');
    let size = prompt("What should be the size of the ball?")

    if (size > 1000) {
        alert('Too Big!')
    }
}


