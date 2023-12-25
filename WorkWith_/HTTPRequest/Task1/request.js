function httpGet()
{
    const url = 'https://getbootstrap.com/';

    const xhr = new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.send();
}

let btn = document.getElementById('btn1');
btn.addEventListener('click',httpGet);