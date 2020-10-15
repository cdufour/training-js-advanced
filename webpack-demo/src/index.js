import _ from 'lodash';
import { square, PI } from './myFunctions';

console.log(PI);

function component() {
    const element = document.createElement('div');
  
    // Lodash imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.innerHTML += "<p>Square of 3: " + square(3) + "</p>";
  
    return element;
}
  
document.body.appendChild(component());