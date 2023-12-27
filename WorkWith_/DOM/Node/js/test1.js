//Прежде всего получим всю основную информацию о дочерних узлах элемента <head>
var head = document.head;

if (head.hasChildNodes())
{
    
for (el of head.childNodes)
{
    console.log(el.parentNode.nodeName);
    console.log(el.nodeName);
    console.log(el.nodeType);
    for (e of el.childNodes)
    {
        console.log(e.nodeValue);
    }
}

console.log('\n\n\n');

for (element of head.children)
{
    console.log(element.nodeName + '\n' + element.nodeType + '\n' + element.nodeValue);
}
}

console.log('\n\n\n');

var body = document.body;

for (b_el of body.children)
{
    console.log(b_el.nodeName + '\n' + b_el.nodeType + '\n' + b_el.nodeValue);
    for (el2 of b_el.childNodes)
    {
        console.log(el2.nodeValue);
    }
}

console.log('\n\n');

let p = body.firstElementChild;
console.log(p.nodeName);
let p_text = p.firstChild;
console.log(p_text.nodeValue + '\n' + p_text.nodeType);

let src = body.lastElementChild;
console.log(src.nodeName + '\n' + src.nodeType);
let src_value = src.childNodes;
for (src_child of src_value)
{
    console.log(src_child.nodeName + '\n' + src_child.nodeType);
}

let body2 = src.parentElement;
console.log(body2.nodeName + '\n' + body2.nodeType)

let p2 = p_text.parentElement;
console.log(p2.nodeName + '\n' + p2.nodeType);