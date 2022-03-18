import _ from 'lodash';
import printMe from './print.js';
import html from './test.html';
import styles from './test.scss';

function component() {
    const element = document.createElement('div');
    const element2 = document.createElement('div');
    const btn = document.createElement('button');
    console.log(html);

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    element2.innerHTML = html;
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(element2)
    return element;
}

document.body.appendChild(component());
