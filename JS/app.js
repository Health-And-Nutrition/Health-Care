'use strict';
var body = document.getElementById('body');
    

body.addEventListener('click', clickOnArticle);

function clickOnArticle(event){
    var artc = event.target.id;
    if (artc === 'dise1'){
        artc = 'Hypertension';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    } else if (artc === 'dise2'){
        artc = 'Kidney Disease';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise3'){
        artc = 'Diabetes';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise4'){
        artc = 'IBS';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise5'){
        artc = 'Celiac Disease';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise6'){
        artc = 'obesity';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise7'){
        artc = 'epilepsy';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }
    console.log(event.target.id)

}
