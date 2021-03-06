'use strict';

// Get the modaal
var modaal = document.getElementsByClassName('modal');


function getSelectValue() {
    var selectedValue = document.getElementById("list").value;
    if(selectedValue == 'diabetes') {
        modaal[0].style.display = "block";
    } else if(selectedValue == 'kidney') {
        modaal[1].style.display = "block";
    } else if(selectedValue == 'calorie') {
        modaal[2].style.display = "block";
    }
    resetSelectElement();
}
getSelectValue();



// Get the <span> element that closes the modaal
var spain = document.getElementsByClassName("cloose");

// When the user clicks on <span> (x), close the modaal
spain[0].onclick = function() {
    modaal[0].style.display = "none";
    document.getElementById("result1").textContent = '';
}

spain[1].onclick = function() {
    modaal[1].style.display = "none";
    document.getElementById("result2").textContent = '';
}

spain[2].onclick = function() {
    modaal[2].style.display = "none";
    document.getElementById("result3").textContent = '';
}
// When the user clicks anywhere outside of the modaal, close it
window.onclick = function(event) {
    if (event.target == modaal) {
        modaal.style.display = "none";
        
    }
}


var inputDiabetes = document.getElementById('inputDiabetes');
var buttonDiabetes = document.getElementById('diabetesSubmit');
buttonDiabetes.addEventListener('click', diabetes);
var labelD = document.getElementById('result1');
var labelK = document.getElementById('result2');

function diabetes(event) {
    event.preventDefault();
    var diabetesEquation = Math.floor(0.3 * inputDiabetes.value);
    labelD.innerHTML = diabetesEquation + ' units of insulin.'  ;
    document.getElementById("form1m").reset();
}


var radioInput1 = document.getElementById('preDialysis');
var radioInput2 = document.getElementById('dialysis');
var inputKidney = document.getElementById('inputKidney');
var buttonKidney = document.getElementById('kidneySubmit');
buttonKidney.addEventListener('click', kidney);

function kidney(event) {
    event.preventDefault();
     
 if ( (!(radioInput1.checked) && !(radioInput2.checked))){
        alert('Choose an option please!');
    } else if ( (radioInput1.checked ||radioInput2.checked)  && (inputKidney.value==='')){
        alert('Fill all the field please!');
    }     
    else if (radioInput1.checked) {
        var preDialysis = 0.6 * inputKidney.value;
        labelK.innerHTML = parseFloat(preDialysis).toFixed(2) + 'g Of Protein You Need To Take Per Day.';
    }
    else if (radioInput2.checked) {
        var dialysis = 1.2 * inputKidney.value;
        labelK.innerHTML = dialysis + 'g Of Protein You Need To Take Per Day.';
    }
    document.getElementById("form2m").reset();
}

var man = document.getElementById('male');
var woman = document.getElementById('female');
var weight = document.getElementById('weight');
var height = document.getElementById('height');
var age = document.getElementById('age');
var buttonCalorie = document.getElementById('calorieSubmit');
var labelC = document.getElementById('result3');

buttonCalorie.addEventListener('click', calorie);

function calorie(event) {
    event.preventDefault();   // to prevent refresh the browser 
    if (!(man.checked) && !(woman.checked)){
        alert('Please choose your gender!');

    } else if ((man.checked ||woman.checked)&& weight.value==='' || height.value==='' || age.value===''){
        alert('fill all the fields please!');
    }else if (man.checked) {
        var kcalMan = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
        labelC.innerHTML = kcalMan + ' kcal / day ';

    } else if (woman.checked) {
        console.log(weight.value);
        console.log(height.value);
        console.log(5 * age.value);

        var kcalWoman = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161;
        labelC.innerHTML = kcalWoman+ ' kcal / day';

    }
    document.getElementById("form3m").reset();
}

function resetSelectElement(selectElement) {
document.getElementById('list').selectedIndex = 0;  // first option is selected, or
 // -1 for no option selected
}