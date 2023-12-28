var btn_createRow = document.getElementById('btn_createRow');

btn_createRow.onclick = click_btnCreateRow;

var br = document.createElement('br');

function click_btnCreateRow()
{
    let div = btn_createRow.parentElement;

    div.appendChild(br);
    div.appendChild(create_countColumnsInput('input1'));
}

function create_countColumnsInput(id)
{
    let div = document.createElement('div');
    div.className = 'col-xs-2';

    div.appendChild(br);

    let label = document.createElement('label');
    label.innerText = 'Count Columns:';

    div.appendChild(label);

    let input = document.createElement('input');
    input.className = 'form-control';
    input.id = id;
    input.type = 'number';
    input.onchange = input_Change1;

    div.appendChild(input);

    return div;
}

function input_Change1()
{
    let error_small = document.createElement('small');

    error_small.className = 'error_small_message';


    if ((small_current = this.parentElement.getElementsByTagName('small')[0]) != null)
    {
        this.parentElement.removeChild(small_current);
    }
    
    if (this.value == '')
    {
        error_small.innerText = 'Input not by empty';

        this.parentElement.appendChild(error_small);

        return;
    }
    if (isNaN(this.value))
    {
        error_small.innerText = 'Input not number';

        this.parentElement.appendChild(error_small);

        return;
    }
    if (Number(this.value) > 10)
    {
        error_small.innerText = 'Input number < 11';

        this.parentElement.appendChild(error_small);

        return;
    }

    let btn_ok = document.createElement('button');

    btn_ok.innerText = 'Ok';
    btn_ok.className = 'btn btn-success';

    this.parentElement.appendChild(btn_ok);
}