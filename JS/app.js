'use strict';
var body = document.getElementById('body');
    

body.addEventListener('click', clickOnArticle);

function clickOnArticle(event){
    var artc = event.target.id;
    if (artc === 'dise1'){
        artc = 'hypertension';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    } else if (artc === 'dise2'){
        artc = 'kidney disease';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise3'){
        artc = 'diabetes';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise4'){
        artc = 'IBS';
        localStorage.setItem('local', JSON.stringify(artc));
        document.location.href = 'food.html';
    }else if (artc === 'dise5'){
        artc = 'celiac disease';
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
