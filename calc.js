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

