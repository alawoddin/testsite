// var x = 12;

// document.write(x);

//how to create element 

// var y  = '<h1>heading </h1>'

// document.write(y);

//create h1 tag 

var title = document.createElement('h1');
title.textContent = 'heading';

//create p tag 

var content = document.createElement('p');
content.textContent = "how are you dear man are find i hope your find "


//get div contianer 

var container = document.getElementById('container');

//include h1 into container 
container.appendChild(title);
container.appendChild(content);