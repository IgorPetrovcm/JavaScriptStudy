function textAlert(text,how_you)
{
    alert(`${how_you}: ${text}`);
}
function btn_Click()
{
    textAlert(textUser.value,selectYou.value);
}

let textUser = document.getElementById('text_user');
textUser.value = "Input text please";
textUser.focus();

let selectYou = document.getElementById("who_are_you");

let button = document.getElementById("buttonTransfer");
button.addEventListener("click",btn_Click);

function linkToMyProfile(e)
{
    if (selectYou.value == 'person') {
        e.preventDefault();
    }
    if (e.defaultPrevented) console.log("Your is not software!");
}

let link1 = document.getElementById('link1');
link1.addEventListener('click',linkToMyProfile);
