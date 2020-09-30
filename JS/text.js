'use strict'

var i = -1;
var chatlog = document.getElementById('chatlog');
var messageslog =[];
var replies = [];

var qustionsArray = ['Your Gender \'male\' or \'female\'?'
    , 'The Disastrous Day You Where Born In -Your Birthday In YY/MM/DD Form-?'
    , 'Your Wight? In \'Kg\' We Don\'t Use US Measurement Units'
    , 'Your Hight? '
    , 'So Do You Do Some Activities, Or You Are A Waste Of Life? (Specify By Saying I do Exercises Between: 1 Time a Week, 3-4 Times, 6-7 Times)'
    , 'Do You Have A Disease That Affect Your Health? If Yes What is it'
    , 'Are You Taking Any Kind Of Medications Related To Your Health?'
    , 'And Lastly, Provide Us With Your Personal Number So We Can Annoy You At 4 AM Or An Email Address'
    , 'Thank you For Subscribing, The Dietitian Will Contact You As Soon As Possible'];

function next() {

    var messagefull = document.createElement('div');
    messagefull.setAttribute('class', 'chat friend');
    var messagePhoto = document.createElement('div');
    messagePhoto.setAttribute('class', 'user-photo');
    messagefull.appendChild(messagePhoto);
    var image = document.createElement('img');
    image.setAttribute('src', '../Imgs/ava.png');
    messagePhoto.appendChild(image);
    var messagecontent = document.createElement('p');
    messagecontent.setAttribute('class', 'chat-message');
    messagecontent.textContent = (qustionsArray[i]);
    messagefull.appendChild(messagecontent);
    chatlog.appendChild(messagefull);

    var objDiv = document.getElementById("chatlog");
    objDiv.scrollTop = objDiv.scrollHeight;

};



function myFunction() {
    var message = document.getElementById('text').value;

    if (message !== '') {
        var messagefull = document.createElement('div');
        messagefull.setAttribute('class', 'chat self');
        var messagePhoto = document.createElement('div');
        messagePhoto.setAttribute('class', 'user-photo');
        messagefull.appendChild(messagePhoto);
        var image = document.createElement('img');
        image.setAttribute('src', '../Imgs/ava.png');
        messagePhoto.appendChild(image);
        var messagecontent = document.createElement('p');
        messagecontent.setAttribute('class', 'chat-message');
        messagecontent.textContent = (message);
        messagefull.appendChild(messagecontent);
        chatlog.appendChild(messagefull);

        if(i <9 ){
            replies.push(message);
            i++;
            document.getElementById('text').value = "";
            next();
            console.log(replies);
        }
        

    }
}