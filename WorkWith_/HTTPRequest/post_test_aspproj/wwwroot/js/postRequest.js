function postRequest()
{
    let body = {val: text1.value}

    const xhr = new XMLHttpRequest();

    xhr.open('POST','http://localhost:5103/Home/Index');

    xhr.setRequestHeader( "Content-Type", "application/json");

    xhr.send(JSON.stringify(body));
}
let text1 = document.getElementById('text1');
let btn = document.getElementById('btn1');

btn.addEventListener('click',postRequest);
