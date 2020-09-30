
var modal = document.getElementsByClassName('newModal');

var btn = document.getElementsByClassName("myBtn");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[0].style.display = "block";
}

btn[2].onclick = function() {
    modal[0].style.display = "block";
}

btn[3].onclick = function() {
    modal[0].style.display = "block";
}

btn[4].onclick = function() {
    modal[0].style.display = "block";
}

btn[5].onclick = function() {
    modal[0].style.display = "block";
}

btn[6].onclick = function() {
    modal[0].style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[1].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[2].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[3].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[4].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[5].onclick = function() {
    modal[0].style.display = "none";
    clear();
}

span[6].onclick = function() {
    modal[0].style.display = "none";
    clear();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn = document.getElementById('myBtn1');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');
var btn4 = document.getElementById('myBtn4');
var btn5 = document.getElementById('myBtn5');
var btn6 = document.getElementById('myBtn6');
var btn7 = document.getElementById('myBtn7');
    
var body = document.getElementById('parent');
body.addEventListener('click', clickOnArticle);


function clickOnArticle(event) {
    btn = event.target.id;
    if (btn === 'myBtn1') {
        btn = 'Hypertension';
        diseaseItself = btn;
        generalRender();
     } else if (btn === 'myBtn2'){
        btn = 'Kidney Disease';
        diseaseItself = btn;
        generalRender();
    } else if (btn === 'myBtn3'){
        btn = 'Diabetes';
        diseaseItself = btn;
        generalRender();
    } else if (btn === 'myBtn4'){
        btn = 'IBS';
        diseaseItself = btn;
        generalRender();
    } else if (btn === 'myBtn5'){
        btn = 'Celiac Disease';
        diseaseItself = btn;
        generalRender();
    } else if (btn === 'myBtn6'){
        btn = 'obesity';
        diseaseItself = btn;
        generalRender();
    } else if (btn === 'myBtn7'){
        btn = 'epilepsy';
        diseaseItself = btn;
        generalRender();
    }
}
