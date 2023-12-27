let input_elements = document.getElementsByTagName('input');

for (el of input_elements) 
{
    console.log(el);
}

let inputFirst = input_elements[0];
console.log(inputFirst);
//Также
let input_elementFirst = document.getElementsByTagName('input')[0];
console.log(input_elementFirst);
