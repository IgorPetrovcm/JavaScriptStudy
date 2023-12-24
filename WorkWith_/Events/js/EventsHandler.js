function button1_Click()
{
    console.log(Math.random());
}
/*let button1 = document.getElementById("button1");
button1.onclick = button1_Click;*/

let button = document.getElementById("button1");
button.addEventListener("click",button1_Click);