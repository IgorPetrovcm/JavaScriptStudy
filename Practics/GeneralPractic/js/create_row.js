function btn_createRow()
{
    let table = document.getElementById("table1");

    let tr = document.createElement('tr');
    tr.id = "trChild";
    tr.onclick = tr_click;
    if (table.children.length == 0){
        let th = document.createElement('th');
        th.innerText = "Message";

        tr.appendChild(th);
        table.appendChild(tr);
        return;
    }

    let td = document.createElement('td');
    td.innerText = "hello";

    tr.appendChild(td);
    table.appendChild(tr);
}
function tr_click()
{
    alert("You click to tr tag");
}
let button = document.getElementById("btn_createRow");

button.addEventListener("click",btn_createRow);


