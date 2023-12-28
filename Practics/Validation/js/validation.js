function checkedValidInput(e)
{
    let input = getValueNode();

    let div = getDiv('form');

    let small = document.createElement('small');
    small.className = 'errorInput';

    let matches = /^[A-ZА-ЯЁ]+$/i;
    if (input == '')
    {
        small.innerText = 'input not by empty';

        div.appendChild(small);    

        return;
    }
    if (input.length > 10)
    {
        small.innerText = 'input text length < 11';

        div.appendChild(small);

        return;
    }
    if (input.match(matches))
    {
        small.innerText = 'input contain only numbers ';

        div.appendChild(small);

        return;
    }
    let general_small = div.getElementsByTagName('small')[0];
    div.removeChild(general_small);
}
function getValueNode()
{
    return text.value;
}
function getDiv(id_div)
{
    return document.getElementById(id_div);
}

var text = document.getElementById('text_input');

let btn = document.getElementById('btn1');

btn.addEventListener('click',checkedValidInput);

