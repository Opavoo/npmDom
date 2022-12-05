let body = document.body;

body.style.textAlign = 'left';
body.style.marginLeft = '300px';
body.style.marginRight = '300px';

let text = document.createElement('div');

text.innerHTML = '<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus pariatur itaque animi, assumenda minus fugiat quasi! Sunt laudantium esse quasi, necessitatibus corporis explicabo architecto laboriosam, exercitationem nostrum enim, perspiciatis id debitis impedit natus maiores.</div>';

body.append(text);

text.style.padding = '5px'
text.style.border = '2px solid red';
text.style.borderRadius = '10px';

let ul = document.createElement('ul');

let liAltshu = document.createElement('li');
let aAltshu = document.createElement('a');
aAltshu.href = 'https://altshu.com/';
aAltshu.innerText = 'Altshu';
aAltshu.setAttribute('target', '_blank');
aAltshu.style.textAlign = 'justify';
liAltshu.append(aAltshu);
ul.append(liAltshu);

liAltshu.style.listStyleType = 'none';



let liGoogle = document.createElement('li');
let aGoogle = document.createElement('a');
aGoogle.href = 'https://www.google.ru/';
aGoogle.innerText = 'Google';
aGoogle.setAttribute('target', '_blank');
aGoogle.style.textAlign = 'justify';
liGoogle.append(aGoogle);
ul.append(liGoogle);

liGoogle.style.listStyleType = 'none';


let liInstagram = document.createElement('li');
let aInstagram = document.createElement('a');
aInstagram.href = 'https://www.instagram.com';
aInstagram.innerText = 'Instagram';
aInstagram.setAttribute('target', '_blank');
aInstagram.style.textAlign = 'justify';
liInstagram.append(aInstagram);
ul.append(liInstagram);

liInstagram.style.listStyleType = 'none';


body.append(ul);
ul.style.display ='flex';
ul.style.justifyContent ='space-between';
ul.style.paddingLeft = '0px';


