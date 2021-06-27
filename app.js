var ball1Size = 100;
var ball2Size = 100;
var ball2SizeStep = 50;



//while(ball1Size < 400 ) {
function onBall1Click() {
    ball1.style.backgroundColor = 'yellow';
    ball1.style.boxShadow = '';
    ball1.style.border = '';
    ball1.style.fontSize = '';
    ball1.style.padding = '';   
    var ball1 = document.querySelector('.ball1');

    if (ball1Size < 400  && ball1Size !== 250) {       
    
      ball1Size = ball1Size + ball2SizeStep;
    //ball1Size = ball1Size + 50;
     
    ball1.innerText = ball1Size;
    ball1.style.width = ball1Size;
    ball1.style.height = ball1Size;
    }

    if (ball1Size == 400) {
        ball1.style.backgroundColor = 'red';
    } 
    
    if (ball1Size == 250) {
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

    if (ball1Size > 400) {
         ball1Size = ball1Size - ball2SizeStep;
         ball1.innerText = ball1Size;
         ball1.style.width = ball1Size;
         ball1.style.height = ball1Size;
    }


   // ball1Size = ball1Size + ball2SizeStep;
}



//while loop:
// while( ball1Size > 400 ) {
//     ball1Size = ball1Size + ball2SizeStep;
// }



//for loop :
   // if (ball1Size > 400) {
       //for (let i = 0; i < 10; i++) {
            //ball1Size = ball1Size -50;





//helper recursion:
        // function smaller(ball1Size) {
        //     if (ball1Size == 100) return; 
        //     ball1Size = ball1Size - ball2SizeStep;
        //     ball1.innerText = ball1Size;
        //     ball1.style.width = ball1Size;
        //     ball1.style.height = ball1Size;
        //     smaller(ball1Size)

        // }

        // smaller(ball1Size)






  //  } 
        
    
      //  }

        //ball2SizeStep = -50
        
       // ball1Size = 400 - ball2SizeStep ;
    

   

   









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


