"use strict"; 
 

function calculateTemp(c) {
 let f = (c * 9 / 5 ) + 32;
 alert(c + "degrees in C Converted to F is " + F ); } 

 let userInput = prompt("What is the temp in C?") ;
 calculateTemp(userInput); 


 function determineAgeGroup(age) { 
    if (age < 18){ 
        alert ("MINOR")
    } else if (age >= 18 && age < 55){ 
        alert ("ADULT") } 
        else { 
            alert ("SENIOR")
        }
  } 
  userInput = prompt("What is your age?") 
  determineAgeGroup(userInput);  


  function mathTime(num1, num2, operator) {
    if (operator === "addition"){ 
        alert  (num1 + num2 );
        } else if (operator === "subtraction"){ 
            alert (num1 - num2);
        } else if (operator === "multiplication") { 
            alert (num1 * num2 );
        } els if (operator === "division"){ 
            alert (num1 / num2);
        }
    } 
    let number1 = prompt("What is the first number?") ;
    let number2 = prompt ("What is the second number?") ;
    let oper = prompt ("What operation will be performed?") ; 

    mathTime(number1, number2, oper);

