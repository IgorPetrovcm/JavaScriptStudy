let elements_name = document.getElementsByName('2');

for (el of elements_name)
{
    console.log(el);
}
//или

let p = document.getElementsByName('2')[1];
console.log(p);

let input = document.getElementsByName('2')[0];
console.log(input);

let div = document.getElementsByName('2')[2];
console.log(div);