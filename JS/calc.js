'use strict';

var inputDiabetes = document.getElementById('inputDiabetes');
var buttonDiabetes = document.getElementById('diabetesSubmit');
buttonDiabetes.addEventListener('click', diabetes);
var labelD = document.getElementById('result1');
var labelK = document.getElementById('result2');

function diabetes(event) {
    event.preventDefault();
    var diabetesEquation = Math.floor(0.3 * inputDiabetes.value);
    console.log(diabetesEquation);
    labelD.innerHTML = diabetesEquation;   
}


var radioInput1 = document.getElementById('preDialysis');
var radioInput2 = document.getElementById('dialysis');
var inputKidney = document.getElementById('inputKidney');
var buttonKidney = document.getElementById('kidneySubmit');
buttonKidney.addEventListener('click', kidney);

function kidney(event) {
    event.preventDefault();
    if (radioInput1.checked) {
        var preDialysis = 0.6 * inputKidney.value;
        labelK.innerHTML = preDialysis;
    }
    else if (radioInput2.checked) {
        var dialysis = 1.2 * inputKidney.value;
        labelK.innerHTML = dialysis;
    }
}

// Calorie Calaulater 
// input: gender ( radio) . weight ( kg) . height (cm) . age 

// kcal-men: (10*kg) + (6.25*cm) - (5*age) +5
// kcal-women: (10*kg) + (6.25 *cm) - (5* age)-161

var man = document.getElementById('male');
var woman = document.getElementById('female');
var weight = document.getElementById('weight');
var height = document.getElementById('height');
var age = document.getElementById('age');
var buttonCalorie= document.getElementById('calorieSubmit');
var labelC = document.getElementById('result3');

buttonCalorie.addEventListener('click', calorie);

 function calorie (event) {
     event.preventDefault();   // to prevent refresh the browser 
     if (man.checked) {
         var kcalMan = (10 * weight.value) + ( 6.25 * height.value) - ( 5 * age.value) + 5;
         labelC.innerHTML = kcalMan;

     } else if (woman.checked) {
        
            var kcalWoman = (10 * weight.value) + ( 6.25 * height.value) - ( 5 * age.value) - 161 ;
            labelC.innerHTML = kcalWoman;
   
     }
 }



