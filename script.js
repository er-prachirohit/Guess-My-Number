'use strict';

// document.querySelector('.score').textContent = '10';
// document.querySelector('.guess').value = '10';

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener
('click',function(){
   const guess = Number(document.querySelector('.guess').value);
   if (guess == randomNumber)
   {
      document.querySelector('.message').textContent = "Congratulations! You got it right.";
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('.highscore').textContent = document.querySelector(".score").textContent; 
      document.querySelector('body').style.backgroundColor = "#60b347";
      document.querySelector('.number').style.width = '30rem';
   } 
    else{
        if (guess < randomNumber)
         document.querySelector('.message').textContent = "Your guess is too low.";
         
        else if(guess>randomNumber)
        document.querySelector('.message').textContent= "Your guess is too high.";
        document.querySelector('.score').textContent--;

        }

        if (document.querySelector('.score').textContent==0)
          {
               alert("You've been defeated!");
                document.querySelector('.message').textContent="";
                 document.querySelector('.guess').value="";
          };
});

document.querySelector('.again').addEventListener('click', function () {
     document.location.reload();
})