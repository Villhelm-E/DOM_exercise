const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//Add red paragraph
const p = document.createElement('p');

p.textContent = "Hey I'm red!";
p.style.color = 'red';

document.body.appendChild(p);

//Add blue header
const h3 = document.createElement('h3');

h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

document.body.appendChild(h3);

//Add black and pink div
const blackpink = document.createElement('div');

blackpink.style.borderStyle = 'solid'
blackpink.style.borderColor = '000000';
blackpink.style.backgroundColor = 'pink';

//h1 under div
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const divp = document.createElement('p');
divp.textContent = "ME TOO!";

blackpink.appendChild(h1);
blackpink.appendChild(divp);

document.body.appendChild(blackpink);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");