//how to create html in JS and style with CSS

//creating variable that is equal to what i'd like changed
const container = document.querySelector('#container');
//creating new variable that creates a div element
const content = document.createElement('div');
// adding content to lists of classes
content.classList.add('content');
//sytling content
content.style.cssText = 'color: red;'
//adding text to content
content.textContent = 'Hey, im red!';
//adding to DOM
container.appendChild(content);